import { createClient } from '@/lib/supabase/server'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import crypto from 'crypto'

async function notificarAnden(data: {
  nombre: string
  apellido: string
  email: string
  nombreEmpresa: string
}) {
  const secret = process.env.ANDEN_WEBHOOK_SECRET
  const url = process.env.ANDEN_WEBHOOK_URL
  if (!secret || !url) return

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

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-signature': `sha256=${signature}`,
    },
    body: bodyString,
  }).catch(() => {})
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, apellido, email, empresa } = body

    // Validar campos requeridos
    if (!nombre || !apellido || !email || !empresa) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'El formato del email no es válido' },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Insertar en la base de datos
    const { data, error: dbError } = await supabase
      .from('waitlist')
      .insert({
        nombre,
        apellido,
        email,
        empresa,
        email_sent: false,
      })
      .select()
      .single()

    if (dbError) {
      if (dbError.code === '23505') {
        return NextResponse.json({ success: true, message: 'Usuario ya registrado' })
      }
      console.error('Database error:', dbError)
      return NextResponse.json(
        { error: 'Error al guardar los datos' },
        { status: 500 }
      )
    }

    // Notificar a Andén vía webhook (no-bloqueante)
    await notificarAnden({ nombre, apellido, email, nombreEmpresa: empresa })

    // Enviar email de bienvenida con Resend (solo si hay API key configurada)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: 'ANDÉN <noreply@anden.tech>',
          to: email,
          subject: 'Bienvenido a ANDÉN - Comienza tu registro',
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #F5F3EF;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
                <tr>
                  <td style="background-color: #0E0E14; padding: 32px; text-align: center;">
                    <h1 style="color: #F5F3EF; font-size: 28px; margin: 0; letter-spacing: 4px;">ANDÉN</h1>
                  </td>
                </tr>
                <tr>
                  <td style="background-color: #FFFFFF; padding: 40px 32px;">
                    <p style="color: #0E0E14; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                      Hola <strong>${nombre}</strong>,
                    </p>
                    <p style="color: #4A4A4A; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                      Gracias por registrarte en la waitlist de ANDÉN. Estamos emocionados de que <strong>${empresa}</strong> quiera ser parte del futuro de la innovación en Latinoamérica.
                    </p>
                    <p style="color: #4A4A4A; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                      El siguiente paso es completar tu registro en nuestra plataforma de constitución:
                    </p>
                    <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                      <tr>
                        <td style="background-color: #E85D26; padding: 16px 32px;">
                          <a href="https://anden.tech/auth/login?returnUrl=/onboarding/diagnostico" style="color: #FFFFFF; text-decoration: none; font-size: 16px; font-weight: 600; display: inline-block;">
                            Comenzar registro
                          </a>
                        </td>
                      </tr>
                    </table>
                    <p style="color: #888; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0; text-align: center;">
                      Si el botón no funciona, copia y pega este enlace en tu navegador:<br>
                      <a href="https://anden.tech/auth/login?returnUrl=/onboarding/diagnostico" style="color: #E85D26;">https://anden.tech/auth/login?returnUrl=/onboarding/diagnostico</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 24px 32px; text-align: center;">
                    <p style="color: #888; font-size: 14px; margin: 0;">
                      © 2024 ANDÉN. Todos los derechos reservados.
                    </p>
                  </td>
                </tr>
              </table>
            </body>
            </html>
          `,
        })

        // Actualizar el estado del email enviado
        await supabase
          .from('waitlist')
          .update({ email_sent: true })
          .eq('id', data.id)
      } catch (emailError) {
        console.error('Email error:', emailError)
        // No fallamos si el email no se envía, el registro ya está guardado
      }
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
