"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export default function Programa() {
  const { t } = useLanguage();
  const previewItems = [
    t.programa.preview1,
    t.programa.preview2,
    t.programa.preview3,
    t.programa.preview4,
    t.programa.preview5,
  ];
  return (
    <section
      id="programa"
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
          <span className="eyebrow eyebrow-navy">{t.programa.eyebrow}</span>
          <h2 className="h-display h-section" style={{ marginTop: 18, maxWidth: 900 }}>
            {t.programa.title}
          </h2>
        </motion.div>

        <div className="sec-head" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.06 }}
          >
            <p className="body-lg">
          {t.programa.description1}

          {t.programa.description2}
            </p>
          </motion.div>
        </div>

        {/* Preview strip */}
        <motion.div
          className="preview-strip"
          style={{
            marginTop: 64,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid var(--ink-line)",
            borderBottom: "1px solid var(--ink-line)",
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.18 }}
        >
          {previewItems.map((item, i) => (
            <div
              key={item}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                padding: "24px 16px",
                borderLeft: i === 0 ? "none" : "2px solid var(--orange)",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  background: "var(--orange)",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: 14, fontWeight: 500, color: "var(--ink)" }}>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <style jsx>{`
        @media (max-width: 880px) {
          .sec-head {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .preview-strip {
            flex-wrap: wrap !important;
          }
          .preview-strip > div {
            flex: 1 1 50% !important;
            border-left: none !important;
            border-bottom: 1px solid var(--ink-line) !important;
          }
          .preview-strip > div:last-child,
          .preview-strip > div:nth-last-child(2) {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
