"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqItems = [
  {
    question: "Esto es legal? Necesito que pase alguna nueva ley?",
    answer:
      "No. Anden opera sobre dos leyes argentinas vigentes: Ley 24.331 de Zonas Francas y Ley 27.506 de Economia del Conocimiento. No esperamos que se apruebe nada nuevo. La estructura esta validada legalmente y respaldada por una alianza publico-privada con autoridades provinciales.",
  },
  {
    question: "Tengo que mudarme a Argentina?",
    answer:
      "No. La zona economica digital opera con incorporacion 100% digital. Tu empresa se constituye y opera desde la zona sin requerir presencia fisica de los founders ni del equipo. Podes seguir viviendo y trabajando desde donde estes en Latam o el mundo.",
  },
  {
    question: "Que pasa con mi empresa actual?",
    answer:
      "Depende del caso. Podes crear una nueva entidad dentro de la zona, migrar una empresa existente, o estructurar un esquema dual con tu holding actual. En la fase de evaluacion armamos la estructura societaria que tenga mas sentido para tu caso puntual.",
  },
  {
    question: "Cuanto cuesta el programa?",
    answer:
      "Anden Inception es un programa pago. La inversion cubre el setup completo de tu empresa en la zona, el compliance recurrente, y el acceso a todos los beneficios del cohort. Las empresas que entran al cohort foundation acceden a un descuento significativo bonificado por Anden que no estara disponible cuando el programa abra acceso general. El detalle de pricing se comparte en la fase de evaluacion.",
  },
  {
    question: "Cuando arranca operativamente la zona?",
    answer:
      "El cohort foundation arranca en junio 2026. La zona economica digital esta en fase final de implementacion operativa, con MOU firmado con autoridades provinciales y soft launch coordinado con el programa.",
  },
  {
    question: "Como es el proceso desde que aplico?",
    answer:
      "Tres pasos. Sumate al waitlist con tus datos basicos. Te enviamos un formulario de diagnostico para entender tu estructura, etapa y fit. Si hay match, agendamos una call de 30 minutos para definir la estructura y arrancar el flow de incorporacion.",
  },
  {
    question: "Que pasa si mi empresa no califica para el cohort foundation?",
    answer:
      "Quedas en la base para cohorts futuras o para el acceso general cuando el programa se abra. Te avisamos cuando este disponible. Sin compromiso, sin costo.",
  },
  {
    question: "Quien esta detras de Anden?",
    answer:
      "El equipo fundador combina experiencia en tech, regulacion y operacion de companias globales. Anden esta respaldado por Protocol Labs, MakerDAO, Aragon, NVIDIA Inception, Crecimiento y Odisea, los ecosistemas tech mas fuertes de Latam y del mundo.",
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      style={{
        borderBottom: "1px solid rgba(14,14,20,0.10)",
        borderLeft: isOpen ? "3px solid var(--orange)" : "3px solid transparent",
        transition: "border-left-color 0.2s",
      }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.04 }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)", paddingRight: 24 }}>{question}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            flexShrink: 0,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.6, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                padding: "0 20px 24px",
                color: "var(--ink-soft)",
                fontSize: 15.5,
                lineHeight: 1.65,
              }}
            >
              {answer}
            </p>
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
