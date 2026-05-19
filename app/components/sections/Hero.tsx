"use client";
import { motion } from "framer-motion";

const logos = ["Protocol Labs", "Aragon", "Odisea", "NVIDIA Inception", "Crecimiento"];

export default function Hero({ onCta }: { onCta: () => void }) {
  return (
    <header
      id="top"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--navy)",
        color: "var(--cream)",
        minHeight: "100vh",
        padding: "140px clamp(24px,6vw,120px) 90px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(241,235,216,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(241,235,216,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
          maskImage: "radial-gradient(ellipse at 30% 40%, #000 35%, transparent 80%)",
        }}
      />
      {/* Animated orange lines */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "65%",
          height: 2,
          background: "var(--orange)",
          transformOrigin: "left center",
          transform: "rotate(28deg)",
          animation: "railSlide 8s ease-in-out infinite",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-15%",
          width: "55%",
          height: 2,
          background: "var(--orange)",
          opacity: 0.55,
          transform: "rotate(28deg)",
          transformOrigin: "right center",
          animation: "railSlide2 8s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1180, width: "100%", margin: "0 auto" }}>
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.6, 0.2, 1] }}
        >
          ANDEN INCEPTION · LANZAMIENTO JUNIO 2026
        </motion.span>
        <motion.h1
          className="h-display h-hero"
          style={{ margin: "24px 0 28px", maxWidth: 1100 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.06, ease: [0.2, 0.6, 0.2, 1] }}
        >
          La primera zona economica digital de Latam abre sus primeros 50 lugares.
        </motion.h1>
        <motion.p
          className="body-lg-cream"
          style={{ maxWidth: 680, marginBottom: 40 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.2, 0.6, 0.2, 1] }}
        >
          Un programa de constitución y lanzamiento diseñado para empresas tech latinoamericanas. Te damos la zona digital, el compliance, la aplicación para la obtención de los beneficios fiscales, la red de inversores y el soporte para construir global sin mudarte. Todo en un solo lugar.
        </motion.p>
        <motion.div
          style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.2, 0.6, 0.2, 1] }}
        >
          <button className="btn btn-lg" onClick={onCta}>
            Aplicar al cohort foundation <span>→</span>
          </button>
          <span style={{ color: "var(--cream-50)", fontSize: 13 }}>
            Aplicaciones abiertas. Seleccion rolling. El cohort cierra al alcanzar 50 empresas.
          </span>
        </motion.div>

        {/* Respaldado por */}
        <motion.div
          style={{ marginTop: 64 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease: [0.2, 0.6, 0.2, 1] }}
        >
          <span style={{ color: "var(--cream-50)", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}>
            RESPALDADO POR
          </span>
          <div
            className="logo-row"
            style={{
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            {logos.map((name, i) => (
              <div key={name} style={{ display: "flex", alignItems: "center", gap: 32 }}>
                <span
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    color: "var(--cream)",
                    opacity: 0.8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {name}
                </span>
                {i < logos.length - 1 && (
                  <span style={{ width: 4, height: 4, background: "var(--cream)", opacity: 0.4, borderRadius: "50%" }} />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
}
