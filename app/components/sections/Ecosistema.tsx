"use client";
import { motion } from "framer-motion";

const logos = [
  {
    name: "NVIDIA Inception",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nvidia-inception-program-badge-rgb-for-screen-secDj7L93PLi5AMDemCe8TX1VPREWl.jpg",
    width: 180,
  },
  {
    name: "Protocol Labs",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-w84ATr6iobbAzDOA0tuKmX0Z4mcooR.png",
    width: 160,
  },
  {
    name: "Prospera",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO-5gAKFMl2NjtoUf0qC0DvQQjdHnFtrd.png",
    width: 48,
  },
  {
    name: "Aragon",
    src: "/logos/aragon.png",
    width: 48,
  },
  {
    name: "Odisea",
    src: "/logos/odisea.png",
    width: 120,
    invert: true,
  },
];

export default function Ecosistema() {
  return (
    <section
      id="ecosistema"
      style={{ padding: "clamp(80px,10vw,120px) clamp(24px,6vw,120px)", background: "var(--cream)" }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <motion.div
          style={{ maxWidth: 760 }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow eyebrow-navy">ECOSISTEMA</span>
          <h2 className="h-display h-section" style={{ marginTop: 18 }}>
            Construido con los actores que ya estan construyendo el futuro.
          </h2>
        </motion.div>

        {/* Logo grid */}
        <motion.div
          className="logo-grid"
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: `repeat(${logos.length}, 1fr)`,
            gap: 0,
            borderTop: "1px solid var(--ink-line)",
            borderBottom: "1px solid var(--ink-line)",
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.06 }}
        >
          {logos.map((logo, i) => (
            <div
              key={logo.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "32px 20px",
                borderLeft: i === 0 ? "none" : "1px solid var(--ink-line)",
                position: "relative",
                minHeight: 100,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 14,
                  width: 6,
                  height: 6,
                  background: "var(--orange)",
                  transform: "translateX(-50%)",
                }}
              />
              <img
                src={logo.src}
                alt={logo.name}
                style={{
                  width: logo.width,
                  height: "auto",
                  maxHeight: 48,
                  objectFit: "contain",
                  filter: (logo as { invert?: boolean }).invert ? "invert(1)" : "none",
                }}
              />
            </div>
          ))}
        </motion.div>

        {/* Stats line */}
        <motion.p
          style={{
            marginTop: 36,
            textAlign: "center",
            color: "var(--ink-soft)",
            fontSize: 14,
            lineHeight: 1.6,
            maxWidth: 800,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          USD 20.000M en activos bajo gestión (AUM) de nuestros inversores respaldando el ecosistema. 10.000+ builders en la red. Las redes tech mas fuertes de Latam alineadas detras de una sola zona digital.
        </motion.p>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .logo-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .logo-grid > div:nth-child(odd) {
            border-left: none !important;
          }
        }
        @media (max-width: 480px) {
          .logo-grid {
            grid-template-columns: 1fr !important;
          }
          .logo-grid > div {
            border-left: none !important;
          }
        }
      `}</style>
    </section>
  );
}
