"use client";
import { motion } from "framer-motion";

const benefitCards = [
  {
    num: "01",
    title: "USD 1.5M en perks by NVIDIA Inception y partners",
    body: "Beneficios tecnicos y comerciales del ecosistema NVIDIA Inception y otros partners: creditos de computo en NVIDIA Cloud Partners, descuentos de hasta 30% en hardware y 75% en software, training tecnico y acceso a la red global de inversores de NVIDIA. Disponibles para empresas que califiquen.",
    featured: true,
  },
  {
    num: "02",
    title: "Red de inversores y demo days",
    body: "Investor reviews mensuales con VCs locales e internacionales. Demo days semestrales co-organizados con partners del ecosistema. Visibilidad concreta frente a quienes deciden cheques en Latam y afuera.",
  },
  {
    num: "03",
    title: "Charlas y eventos online",
    body: "Sessions con founders que ya construyeron en Latam, operadores de zonas digitales globales como RAK DAO, ADGM y Estonia, y especialistas regulatorios. Acceso continuo durante toda tu permanencia en el cohort.",
  },
  {
    num: "04",
    title: "Anden Founder Retreat",
    body: "Acceso anticipado al encuentro presencial entre los founders del cohort, partners y advisors. Networking de alta densidad en formato curado.",
  },
  {
    num: "05",
    title: "Construi la zona desde adentro",
    body: "Las decisiones de producto, regulacion y diseno de la zona se toman con feedback del cohort. No vas a ser cliente. Vas a ser arquitecto de la primera zona digital de Latam.",
  },
  {
    num: "06",
    title: "HubSpot for Startups — hasta 90% OFF",
    body: "Plataforma unificada de marketing, ventas y operaciones con AI integrada. Acceso a recursos exclusivos para startups: playbooks, templates y más de 1.700 integraciones. Pagás una fracción de lo que pagan otras empresas.",
    logo: "/logos/hubspot.png",
    logoAlt: "HubSpot for Startups",
    logoWidth: 130,
  },
  {
    num: "07",
    title: "CommonPaper — contratos sin fricción",
    body: "Enviá contratos legales estándar (NDA, partnerships, ventas y más) en minutos. Andén Companies acceden gratuitamente a la plataforma para cerrar acuerdos comerciales sin necesitar un equipo legal propio.",
    logo: "/logos/common-paper.png",
    logoAlt: "CommonPaper",
    logoWidth: 130,
    logoDark: true,
  },
];

export default function LoQueIncluye() {
  return (
    <section
      id="beneficios"
      style={{ padding: "clamp(80px,10vw,120px) clamp(24px,6vw,120px)", background: "var(--cream)" }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow eyebrow-navy">LO QUE RECIBIS</span>
          <h2 className="h-display h-section" style={{ marginTop: 18, maxWidth: 800 }}>
            Siete cosas que solo el cohort foundation se lleva.
          </h2>
        </motion.div>

        {/* Asymmetric grid: Card 01 full width, then pairs */}
        <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 18 }}>
          {/* Card 01 - Full width hero */}
          <motion.div
            className="benefit-card"
            style={{
              background: "var(--navy)",
              color: "var(--cream)",
              padding: "56px 48px",
              position: "relative",
              overflow: "hidden",
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              style={{
                position: "absolute",
                top: "-15%",
                right: "-8%",
                width: "40%",
                height: 2,
                background: "var(--orange)",
                transform: "rotate(28deg)",
                opacity: 0.5,
              }}
            />
            <span
              className="font-display"
              style={{
                fontSize: 64,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--orange)",
                lineHeight: 1,
              }}
            >
              {benefitCards[0].num}
            </span>
            <h3
              className="h-display"
              style={{
                fontSize: "clamp(28px,3.5vw,44px)",
                marginTop: 20,
                marginBottom: 18,
                color: "var(--cream)",
              }}
            >
              {benefitCards[0].title}
            </h3>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.65,
                color: "var(--cream-70)",
                maxWidth: 800,
              }}
            >
              {benefitCards[0].body}
            </p>
            {/* NVIDIA Inception badge */}
            <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 16 }}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nvidia-inception-program-badge-rgb-for-screen-secDj7L93PLi5AMDemCe8TX1VPREWl.jpg"
                alt="NVIDIA Inception Program"
                style={{
                  height: 48,
                  width: "auto",
                  background: "white",
                  padding: "4px 8px",
                }}
              />
            </div>
          </motion.div>

          {/* Cards 02 + 03 */}
          <div className="card-pair" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {benefitCards.slice(1, 3).map((card, i) => (
              <motion.div
                key={card.num}
                className="benefit-card"
                style={{
                  background: "var(--bone)",
                  border: "1px solid rgba(14,14,20,0.08)",
                  padding: "38px 36px",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 280,
                  position: "relative",
                }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (i + 1) * 0.06 }}
              >
                <span
                  className="font-display"
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "var(--orange)",
                    marginBottom: 18,
                  }}
                >
                  {card.num}
                </span>
                <h3
                  className="h-display"
                  style={{
                    fontSize: 24,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.18,
                    marginBottom: 16,
                    color: "var(--ink)",
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-soft)" }}>{card.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Cards 04 + 05 */}
          <div className="card-pair" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {benefitCards.slice(3, 5).map((card, i) => (
              <motion.div
                key={card.num}
                className="benefit-card"
                style={{
                  background: "var(--bone)",
                  border: "1px solid rgba(14,14,20,0.08)",
                  padding: "38px 36px",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 280,
                  position: "relative",
                }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (i + 3) * 0.06 }}
              >
                <span
                  className="font-display"
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "var(--orange)",
                    marginBottom: 18,
                  }}
                >
                  {card.num}
                </span>
                <h3
                  className="h-display"
                  style={{
                    fontSize: 24,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.18,
                    marginBottom: 16,
                    color: "var(--ink)",
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-soft)" }}>{card.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Cards 06 + 07 — Partner cards */}
          <div className="card-pair" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {benefitCards.slice(5, 7).map((card, i) => {
              const c = card as typeof card & { logo?: string; logoAlt?: string; logoWidth?: number; logoDark?: boolean };
              return (
                <motion.div
                  key={card.num}
                  className="benefit-card"
                  style={{
                    background: "var(--bone)",
                    border: "1px solid rgba(14,14,20,0.08)",
                    padding: "38px 36px",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 280,
                    position: "relative",
                  }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: (i + 5) * 0.06 }}
                >
                  <span
                    className="font-display"
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      color: "var(--orange)",
                      marginBottom: 18,
                    }}
                  >
                    {card.num}
                  </span>
                  <h3
                    className="h-display"
                    style={{
                      fontSize: 24,
                      letterSpacing: "-0.015em",
                      lineHeight: 1.18,
                      marginBottom: 16,
                      color: "var(--ink)",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-soft)" }}>{card.body}</p>
                  {c.logo && (
                    <div style={{ marginTop: "auto", paddingTop: 24 }}>
                      <img
                        src={c.logo}
                        alt={c.logoAlt}
                        style={{
                          height: 36,
                          width: "auto",
                          maxWidth: c.logoWidth,
                          objectFit: "contain",
                          filter: c.logoDark ? "brightness(0)" : "none",
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .benefit-card {
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .benefit-card::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 0;
          background: var(--orange);
          transition: height 0.25s ease;
        }
        .benefit-card:hover {
          transform: translateY(-4px);
        }
        .benefit-card:not(:first-child):hover::before {
          height: 2px;
        }
        @media (max-width: 880px) {
          .card-pair {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
