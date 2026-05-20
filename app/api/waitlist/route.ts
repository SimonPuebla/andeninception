import { NextResponse } from 'next/server'
import crypto from 'crypto'

type AndenBody = {
  ok: boolean
  created?: boolean
  emailSent?: boolean
  alreadyExists?: boolean
  message?: string
}

async function notificarAnden(data: {
  nombre: string
  apellido: string
  email: string
  nombreEmpresa: string
}): Promise<{ ok: boolean; body?: AndenBody }> {
  const secret = process.env.ANDEN_WEBHOOK_SECRET
  if (!secret) return { ok: false }

  const url = 'https://api.anden.kovix.io/webhooks/partner'
  const payload = {
    event: 'user.registered',
    timestamp: Math.floor(Date.now() / 1000),
    data,
  }
  const bodyString = JSON.stringify(payload)
  const signature = crypto
    .createHmac('sha256', secret)
    .update(bodyString)
    .digest('hex')

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-signature': `sha256=${signature}`,
      },
      body: bodyString,
    })
    const body: AndenBody = await res.json().catch(() => ({ ok: false }))
    if (!res.ok) {
      console.error('Andén webhook error:', res.status, body)
      return { ok: false }
    }
    return { ok: true, body }
  } catch (err) {
    console.error('Andén webhook fetch failed:', err)
    return { ok: false }
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, apellido, email, empresa } = body

    if (!nombre || !apellido || !email || !empresa) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'El formato del email no es válido' },
        { status: 400 }
      )
    }

    const andenResult = await notificarAnden({ nombre, apellido, email, nombreEmpresa: empresa })
    if (!andenResult.ok) {
      return NextResponse.json(
        { error: 'No se pudo completar el registro en la plataforma. Por favor, intentá de nuevo.' },
        { status: 502 }
      )
    }

    const andenBody = andenResult.body ?? { ok: true }
    return NextResponse.json({
      success: true,
      alreadyExists: andenBody.alreadyExists ?? false,
      emailSent: andenBody.emailSent ?? false,
    })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
