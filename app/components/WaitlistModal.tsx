"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

type FormState = {
  nombre: string;
  apellido: string;
  email: string;
  empresa: string;
};

export default function WaitlistModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>({
    nombre: "",
    apellido: "",
    email: "",
    empresa: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successState, setSuccessState] = useState<{
    alreadyExists: boolean;
    emailSent: boolean;
  } | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Error al enviar el formulario");
        return;
      }

      setSuccessState({
        alreadyExists: data.alreadyExists ?? false,
        emailSent: data.emailSent ?? false,
      });
    } catch {
      setError("Error de conexión. Por favor, intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setForm({ nombre: "", apellido: "", email: "", empresa: "" });
    setError(null);
    setSuccessState(null);
    onClose();
  };

  if (!open) return null;

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    fontSize: 15,
    border: "1px solid var(--ink-line)",
    background: "var(--bone)",
    color: "var(--ink)",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(14,14,20,0.62)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
      }}
    >
      <div style={{
        background: "var(--bone)", border: "1px solid var(--ink-line)",
        padding: "48px 44px", maxWidth: 520, width: "100%",
        position: "relative", animation: "modalIn .3s cubic-bezier(.2,.6,.2,1) forwards",
        transform: "translateY(8px)",
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: 40, height: 2, background: "var(--orange)" }} />
        <button
          onClick={handleClose}
          aria-label="Cerrar"
          style={{
            position: "absolute", top: 18, right: 18, width: 32, height: 32,
            display: "grid", placeItems: "center", fontSize: 14, color: "var(--ink-soft)",
            background: "none", border: "none", cursor: "pointer",
          }}
        >✕</button>

        {successState ? (
          <div style={{ textAlign: "center" }}>
            <div style={{
              width: 64, height: 64, borderRadius: "50%",
              background: successState.alreadyExists ? "var(--ink-soft)" : "var(--orange)",
              margin: "0 auto 24px",
              display: "grid", placeItems: "center",
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--bone)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            {successState.alreadyExists ? (
              <>
                <h3 className="h-display" style={{ fontSize: 26, marginBottom: 16 }}>
                  Ya tenés una cuenta
                </h3>
                <p style={{ color: "var(--ink-soft)", fontSize: 15.5, marginBottom: 24, lineHeight: 1.6 }}>
                  El email <strong>{form.email}</strong> ya tiene una cuenta en Andén. Ingresá con ese email en <strong>anden.kovix.io</strong>.
                </p>
              </>
            ) : successState.emailSent ? (
              <>
                <h3 className="h-display" style={{ fontSize: 26, marginBottom: 16 }}>
                  ¡Listo! Revisá tu email
                </h3>
                <p style={{ color: "var(--ink-soft)", fontSize: 15.5, marginBottom: 24, lineHeight: 1.6 }}>
                  Te enviamos un email a <strong>{form.email}</strong> con tus credenciales y el link para comenzar el onboarding.
                </p>
              </>
            ) : (
              <>
                <h3 className="h-display" style={{ fontSize: 26, marginBottom: 16 }}>
                  ¡Cuenta creada!
                </h3>
                <p style={{ color: "var(--ink-soft)", fontSize: 15.5, marginBottom: 24, lineHeight: 1.6 }}>
                  Tu cuenta fue creada. El email con tus credenciales puede demorar unos minutos en llegar.
                </p>
              </>
            )}
            <button
              onClick={handleClose}
              style={{
                padding: "14px 32px",
                background: "var(--ink)",
                color: "var(--bone)",
                border: "none",
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <span className="eyebrow eyebrow-navy" style={{ marginBottom: 14, display: "block" }}>WAITLIST</span>
            <h3 id="modal-title" className="h-display" style={{ fontSize: 28, marginBottom: 10 }}>
              Unite a ANDÉN
            </h3>
            <p style={{ color: "var(--ink-soft)", fontSize: 15, marginBottom: 28, lineHeight: 1.5 }}>
              Completá tus datos y te enviaremos un email para comenzar el proceso de registro.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label htmlFor="nombre" style={{ display: "block", fontSize: 13, fontWeight: 500, marginBottom: 6, color: "var(--ink)" }}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Juan"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="apellido" style={{ display: "block", fontSize: 13, fontWeight: 500, marginBottom: 6, color: "var(--ink)" }}>
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={form.apellido}
                    onChange={handleChange}
                    required
                    placeholder="Pérez"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" style={{ display: "block", fontSize: 13, fontWeight: 500, marginBottom: 6, color: "var(--ink)" }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="juan@empresa.com"
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="empresa" style={{ display: "block", fontSize: 13, fontWeight: 500, marginBottom: 6, color: "var(--ink)" }}>
                  Nombre de la empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  required
                  placeholder="Mi Startup S.A."
                  style={inputStyle}
                />
              </div>

              {error && (
                <div style={{
                  padding: "12px 16px",
                  background: "#FEE2E2",
                  border: "1px solid #FECACA",
                  color: "#DC2626",
                  fontSize: 14,
                  borderRadius: 4,
                }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  marginTop: 8,
                  padding: "16px 32px",
                  background: isSubmitting ? "var(--ink-soft)" : "var(--orange)",
                  color: "var(--bone)",
                  border: "none",
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  transition: "background 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                {isSubmitting ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" style={{ animation: "spin 1s linear infinite" }}>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="32" strokeLinecap="round" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  "Unirme a la waitlist"
                )}
              </button>
            </form>
          </>
        )}
      </div>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
