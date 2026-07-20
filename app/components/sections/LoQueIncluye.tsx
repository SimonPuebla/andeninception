"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export default function LoQueIncluye() {
  const { t } = useLanguage();
  const benefitCards = t.loQueIncluye.cards;

  return (
    <section
      id="beneficios"
      style={{ padding: "clamp(80px,10vw,120px) clamp(24px,6vw,120px)", background: "var(--cream)", color: "var(--ink)" }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <motion.div
          style={{ marginBottom: 48 }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow eyebrow-navy">{t.loQueIncluye.eyebrow}</span>
          <h2 className="h-display h-section" style={{ marginTop: 18, maxWidth: 900 }}>
            {t.loQueIncluye.title}
          </h2>
        </motion.div>

        {/* Grid: Card 01 full width, then pairs */}
        <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 18 }}>
          {/* Card 01 - Featured */}
          {benefitCards[0] && (
            <motion.div
              className="benefit-card"
              style={{
                background: "var(--navy)",
                color: "var(--cream)",
                padding: "56px 48px",
                position: "relative",
              }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span style={{ fontSize: 64, fontWeight: 700, color: "var(--orange)" }}>
                {benefitCards[0].num}
              </span>
              <h3 style={{ fontSize: 32, marginTop: 20, marginBottom: 18, color: "var(--cream)" }}>
                {benefitCards[0].title}
              </h3>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--cream-70)", maxWidth: 800 }}>
                {benefitCards[0].body}
              </p>
            </motion.div>
          )}

          {/* Cards 02-12 in pairs */}
          {[
            benefitCards.slice(1, 3),
            benefitCards.slice(3, 5),
            benefitCards.slice(5, 7),
            benefitCards.slice(7, 9),
            benefitCards.slice(9, 11),
            benefitCards.slice(11, 13),
          ].map((pair, pairIdx) => (
            <div key={pairIdx} className="card-pair" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              {pair.map((card, i) => (
                <motion.div
                  key={card.num}
                  className="benefit-card"
                  style={{
                    background: "var(--bone)",
                    border: "1px solid rgba(14,14,20,0.08)",
                    padding: "38px 36px",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 260,
                  }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: (pairIdx * 2 + i) * 0.06 }}
                >
                  <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.08em", color: "var(--orange)", marginBottom: 18 }}>
                    {card.num}
                  </span>
                  <h3 style={{ fontSize: 24, lineHeight: 1.18, marginBottom: 16, color: "var(--ink)" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-soft)" }}>
                    {card.body}
                  </p>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .benefit-card {
          transition: transform 0.3s ease;
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
