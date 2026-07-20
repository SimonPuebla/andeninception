"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const faqItems = t.faq.items;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ padding: "clamp(80px,10vw,120px) clamp(24px,6vw,120px)", background: "var(--navy)", color: "var(--cream)" }}
    >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="eyebrow">{t.faq.eyebrow}</span>
            <h2 className="h-display h-section" style={{ marginTop: 18, color: "var(--cream)" }}>
              {t.faq.title}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: "clamp(80px,10vw,120px) clamp(24px,6vw,120px)", background: "var(--cream)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow eyebrow-navy">PREGUNTAS FRECUENTES</span>
          <h2 className="h-display h-section" style={{ marginTop: 18 }}>
            Lo que necesitas saber antes de aplicar.
          </h2>
        </motion.div>

        <div style={{ marginTop: 48, borderTop: "1px solid rgba(14,14,20,0.10)" }}>
          {faqItems.map((item, i) => (
            <AccordionItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
