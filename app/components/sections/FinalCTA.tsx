"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export default function FinalCTA({ onCta }: { onCta: () => void }) {
  const { t } = useLanguage();
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(96px,12vw,160px) clamp(24px,6vw,120px)",
        background: "var(--navy)",
        color: "var(--cream)",
        textAlign: "center",
      }}
    >
      {/* Decorative lines */}
      <div
        style={{
          position: "absolute",
          top: "-8%",
          left: "-8%",
          width: "55%",
          height: 2,
          background: "var(--orange)",
          transform: "rotate(28deg)",
          opacity: 0.55,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-8%",
          right: "-8%",
          width: "55%",
          height: 2,
          background: "var(--orange)",
          transform: "rotate(28deg)",
          opacity: 0.55,
        }}
      />

      <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.h2
          className="h-display"
          style={{ fontSize: "clamp(40px,6vw,84px)", maxWidth: 1100, margin: "0 auto 28px" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t.finalCta.title}
        </motion.h2>
        <motion.p
          style={{ maxWidth: 700, margin: "0 auto 36px", color: "var(--cream-70)", fontSize: 18, lineHeight: 1.6 }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.06 }}
        >
          {t.finalCta.description}
        </motion.p>
        <motion.button
          className="btn btn-lg"
          onClick={onCta}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          {t.finalCta.cta} <span>→</span>
        </motion.button>
        <motion.p
          style={{ marginTop: 18, color: "var(--cream-50)", fontSize: 13 }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.18 }}
        >
          Aplicaciones abiertas. Seleccion rolling. El cohort cierra al alcanzar 50 empresas. Sin spam, sin venderle datos a nadie.
        </motion.p>
      </div>
    </section>
  );
}
