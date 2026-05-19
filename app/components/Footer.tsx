"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--navy)",
        color: "var(--cream)",
        padding: "64px clamp(24px,6vw,120px) 32px",
        borderTop: "1px solid rgba(241,235,216,0.10)",
      }}
    >
      <div
        className="foot-grid"
        style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48 }}
      >
        <div>
          <a href="#top" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20black-yDScAjWJ2qFOJqznYXgYAioSWP1VUJ.png"
              alt="ANDEN"
              style={{
                height: 28,
                width: "auto",
                filter: "invert(1) brightness(2)",
              }}
            />
          </a>
          <p style={{ maxWidth: 420, color: "var(--cream-70)", fontSize: 14, lineHeight: 1.6, marginTop: 18 }}>
            La infraestructura de compliance que convierte zonas obsoletas en jurisdicciones digitales operativas.
          </p>
        </div>
        <div>
          <h4
            className="font-mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--orange)",
              marginBottom: 18,
              fontWeight: 500,
            }}
          >
            Navegacion
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            <li>
              <a href="#programa" style={{ fontSize: 14, color: "var(--cream-70)" }}>
                Programa
              </a>
            </li>
            <li>
              <a href="#para-vos" style={{ fontSize: 14, color: "var(--cream-70)" }}>
                Para vos
              </a>
            </li>
            <li>
              <a href="#beneficios" style={{ fontSize: 14, color: "var(--cream-70)" }}>
                Beneficios
              </a>
            </li>
            <li>
              <a href="#faq" style={{ fontSize: 14, color: "var(--cream-70)" }}>
                FAQ
              </a>
            </li>
            <li>
              <a href="mailto:simon@anden.tech" style={{ fontSize: 14, color: "var(--cream-70)" }}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4
            className="font-mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--orange)",
              marginBottom: 18,
              fontWeight: 500,
            }}
          >
            Red
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            <li>
              <a
                href="https://www.linkedin.com/company/anden-tech/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 14, color: "var(--cream-70)" }}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Andentech"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 14, color: "var(--cream-70)" }}
              >
                X
              </a>
            </li>
            <li>
              <a
                href="https://t.me/simonpuebla"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 14, color: "var(--cream-70)" }}
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="foot-bottom font-mono"
        style={{
          maxWidth: 1240,
          margin: "48px auto 0",
          paddingTop: 24,
          borderTop: "1px solid var(--orange)",
          display: "flex",
          justifyContent: "space-between",
          gap: 24,
          fontSize: 12,
          color: "var(--cream-50)",
          letterSpacing: "0.04em",
        }}
      >
        <span>© 2026 Anden - anden.tech</span>
        <span>ZONA DIGITAL - LEY 27.506 - REGIMEN ZF</span>
      </div>
      <style jsx>{`
        @media (max-width: 780px) {
          .foot-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .foot-bottom {
            flex-direction: column !important;
          }
        }
      `}</style>
    </footer>
  );
}
