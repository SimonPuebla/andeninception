"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const benefitCards = [
  {
    stat: "Hasta 60%",
    name: "Reduccion de Ganancias",
    body: "Reduccion significativa del impuesto a las Ganancias para empresas certificadas bajo el regimen de Economia del Conocimiento.",
    baseLegal: "Ley 27.506",
    condicion: "Empresas certificadas LEC",
    animate: true,
    numValue: 60,
  },
  {
    stat: "Hasta 70%",
    name: "Credito fiscal sobre cargas patronales",
    body: "Credito fiscal aplicable contra las contribuciones patronales, generado por la actividad exportadora de la empresa.",
    baseLegal: "Ley 27.506",
    condicion: "Aplicado sobre cargas patronales del empleador",
    animate: true,
    numValue: 70,
  },
  {
    stat: "0%",
    name: "IVA en operaciones intra-zona y exterior",
    body: "Exencion total de IVA en transacciones entre empresas miembro de la zona economica y en operaciones hacia el exterior.",
    baseLegal: "Ley 27.506",
    condicion: "Operaciones intra-zona y exportaciones",
    animate: false,
  },
  {
    stat: "0%",
    name: "Aranceles aduaneros sobre import/export",
    body: "Exencion total de derechos aduaneros sobre importaciones y exportaciones dentro del perimetro de la zona.",
    baseLegal: "Ley 27.506",
    condicion: "Operaciones dentro del perimetro de la zona",
    animate: false,
  },
  {
    stat: "USD",
    name: "Operacion legal en moneda dura",
    body: "Tu empresa puede facturar, recibir y operar en dolares dentro del regimen de Zona Franca, sin necesidad de estructura offshore.",
    baseLegal: "Ley 27.506",
    condicion: "Bajo regimen de Zona Franca",
    animate: false,
  },
];

function AnimatedStat({ card }: { card: typeof benefitCards[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView || !card.animate || !card.numValue) {
      if (!card.animate) {
        setDisplayValue(card.stat);
      }
      return;
    }

    const target = card.numValue;
    let current = 0;
    const duration = 1500;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = target / steps;

    const timer = setInterval(() => {
      current++;
      if (current >= steps) {
        setDisplayValue(card.stat);
        clearInterval(timer);
      } else {
        const val = Math.round(increment * current);
        if (card.stat.includes("años")) {
          setDisplayValue(`${val} años`);
        } else if (card.stat.includes("Hasta")) {
          setDisplayValue(`Hasta ${val}%`);
        } else {
          setDisplayValue(val.toString());
        }
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, card]);

  return (
    <div
      ref={ref}
      className="font-display"
      style={{
        fontSize: 48,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        lineHeight: 1,
        color: "var(--orange)",
      }}
    >
      {displayValue}
    </div>
  );
}

export default function ZonaBeneficios() {
  return (
    <section
      id="zona"
      style={{ padding: "clamp(80px,10vw,120px) clamp(24px,6vw,120px)", background: "var(--cream)" }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow eyebrow-navy">LA ZONA</span>
          <h2 className="h-display h-section" style={{ marginTop: 18, maxWidth: 900 }}>
            Una zona digital con beneficios reales y respaldo legal.
          </h2>
          <p className="body-lg" style={{ marginTop: 24, maxWidth: 640 }}>
            Construida sobre dos leyes argentinas vigentes: Ley 24.331 de Zonas Francas y Ley 27.506 de Economia del Conocimiento. Lo que firmas hoy, queda firme. Sin grises, sin promesas, sin nuevas leyes que esperar.
          </p>
        </motion.div>

        {/* 6-card grid: 3 + 3 */}
        <div style={{ marginTop: 64 }}>
          {/* Row 1: 3 cards */}
          <div
            className="benefit-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}
          >
            {benefitCards.slice(0, 3).map((card, i) => (
              <motion.div
                key={card.name}
                className="zone-card"
                style={{
                  background: "var(--bone)",
                  border: "1px solid rgba(14,14,20,0.10)",
                  padding: "32px 28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.06 }}
              >
                <AnimatedStat card={card} />
                <h3
                  className="h-display"
                  style={{
                    fontSize: 22,
                    marginTop: 16,
                    marginBottom: 12,
                    color: "var(--ink)",
                    lineHeight: 1.2,
                  }}
                >
                  {card.name}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)", flex: 1 }}>
                  {card.body}
                </p>
                <div
                  style={{
                    marginTop: 20,
                    paddingTop: 16,
                    borderTop: "1px solid rgba(14,14,20,0.05)",
                    fontSize: 12,
                    color: "var(--ink-soft)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontWeight: 600, letterSpacing: "0.05em" }}>BASE LEGAL</span>
                    <span>{card.baseLegal}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: 600, letterSpacing: "0.05em" }}>CONDICION</span>
                    <span style={{ textAlign: "right", maxWidth: "60%" }}>{card.condicion}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: 3 cards */}
          <div
            className="benefit-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 18,
              marginTop: 18,
            }}
          >
            {benefitCards.slice(3, 6).map((card, i) => (
              <motion.div
                key={card.name}
                className="zone-card"
                style={{
                  background: "var(--bone)",
                  border: "1px solid rgba(14,14,20,0.10)",
                  padding: "32px 28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (i + 3) * 0.06 }}
              >
                <AnimatedStat card={card} />
                <h3
                  className="h-display"
                  style={{
                    fontSize: 22,
                    marginTop: 16,
                    marginBottom: 12,
                    color: "var(--ink)",
                    lineHeight: 1.2,
                  }}
                >
                  {card.name}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)", flex: 1 }}>
                  {card.body}
                </p>
                <div
                  style={{
                    marginTop: 20,
                    paddingTop: 16,
                    borderTop: "1px solid rgba(14,14,20,0.05)",
                    fontSize: 12,
                    color: "var(--ink-soft)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontWeight: 600, letterSpacing: "0.05em" }}>BASE LEGAL</span>
                    <span>{card.baseLegal}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: 600, letterSpacing: "0.05em" }}>CONDICION</span>
                    <span style={{ textAlign: "right", maxWidth: "60%" }}>{card.condicion}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 3: ROI Calculator full width */}
          <motion.div
            style={{
              marginTop: 18,
              background: "var(--navy)",
              padding: "40px 48px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 40,
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div
              style={{
                position: "absolute",
                top: "-20%",
                right: "-10%",
                width: "40%",
                height: 2,
                background: "var(--orange)",
                transform: "rotate(28deg)",
                opacity: 0.5,
              }}
            />
            <div style={{ flex: 1 }}>
              <span className="eyebrow">CALCULADORA</span>
              <h3
                className="h-display"
                style={{ fontSize: "clamp(24px,2.5vw,32px)", marginTop: 14, color: "var(--cream)" }}
              >
                Calcula cuanto ahorra tu empresa.
              </h3>
              <p style={{ marginTop: 12, maxWidth: 500, color: "var(--cream-70)", fontSize: 15, lineHeight: 1.5 }}>
                Ingresa tus numeros reales y modela el ahorro fiscal especifico de tu caso.
              </p>
            </div>
            <a
              href="https://v0-roi-calculator-gules-seven.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
              style={{ flexShrink: 0 }}
            >
              Abrir calculadora de ROI <span>→</span>
            </a>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.p
          style={{
            marginTop: 48,
            fontSize: 13,
            lineHeight: 1.6,
            color: "var(--ink-soft)",
            maxWidth: 900,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Los beneficios fiscales y la estabilidad fiscal están sujetos a la aprobación y certificación de tu empresa en el régimen de Economía del Conocimiento (LEC) y/o Zona Franca (ZFM). Andén brinda el acompañamiento y soporte legal-operativo para esta aplicación.
        </motion.p>
      </div>
      <style jsx>{`
        .zone-card {
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .zone-card::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 0;
          background: var(--orange);
          transition: height 0.25s ease;
        }
        .zone-card:hover {
          transform: translateY(-4px);
        }
        .zone-card:hover::before {
          height: 2px;
        }
        @media (max-width: 1024px) {
          .benefit-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .benefit-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
