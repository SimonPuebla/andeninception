"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

interface ProfileCard {
  num: string;
  title: string;
  tagline: string;
  leftEyebrow: string;
  leftItems: string[];
  rightEyebrow: string;
  rightItems: string[];
  footer: string;
}

function ProfileCardComponent({
  profile,
  isOpen,
  onClick,
  index,
}: {
  profile: ProfileCard;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      style={{
        background: "var(--bone)",
        border: "1px solid rgba(14,14,20,0.10)",
        borderLeft: isOpen ? "3px solid var(--orange)" : "1px solid rgba(14,14,20,0.10)",
        transition: "border-color 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.08 }}
    >
      {/* Hover top border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: isOpen ? 0 : 2,
          background: "var(--orange)",
          opacity: 0,
          transition: "opacity 0.3s ease",
        }}
        className="hover-border"
      />

      {/* Header (always visible) */}
      <button
        onClick={onClick}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 32,
          padding: "28px 32px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          className="font-display"
          style={{
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--orange)",
            lineHeight: 1,
            minWidth: 90,
          }}
        >
          {profile.num}
        </span>
        <div style={{ flex: 1 }}>
          <h3 className="h-display" style={{ fontSize: 32, color: "var(--ink)", marginBottom: 8 }}>
            {profile.title}
          </h3>
          <p style={{ fontSize: 16, color: "var(--ink-soft)", lineHeight: 1.5 }}>{profile.tagline}</p>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            flexShrink: 0,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.4s ease-out",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.6, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="expanded-content"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 48,
                padding: "0 32px 32px 154px",
              }}
            >
              {/* Left column */}
              <div>
                <span
                  className="eyebrow"
                  style={{ color: "var(--navy)", marginBottom: 18, display: "block" }}
                >
                  {profile.leftEyebrow}
                </span>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                  {profile.leftItems.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: 12,
                        alignItems: "flex-start",
                        fontSize: 15,
                        color: "var(--ink)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          background: "var(--orange)",
                          flexShrink: 0,
                          marginTop: 8,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right column */}
              <div>
                <span
                  className="eyebrow"
                  style={{ color: "var(--navy)", marginBottom: 18, display: "block" }}
                >
                  {profile.rightEyebrow}
                </span>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                  {profile.rightItems.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: 12,
                        alignItems: "flex-start",
                        fontSize: 15,
                        color: "var(--ink)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          background: "var(--orange)",
                          flexShrink: 0,
                          marginTop: 8,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div
              style={{
                padding: "20px 32px 28px 154px",
                borderTop: "1px solid rgba(14,14,20,0.06)",
                fontSize: 14,
                color: "var(--ink-soft)",
                lineHeight: 1.6,
              }}
            >
              {profile.footer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        button:hover .hover-border {
          opacity: 1;
        }
        @media (max-width: 880px) {
          .expanded-content {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 0 24px 24px 24px !important;
          }
          button {
            flex-wrap: wrap !important;
            gap: 16px !important;
            padding: 24px !important;
          }
          button > span:first-child {
            font-size: 40px !important;
            min-width: 60px !important;
          }
          button > div h3 {
            font-size: 24px !important;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default function ParaVos() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number>(0); // First card open by default
  const profiles = t.paraVos.profiles;

  return (
    <section
      id="para-vos"
      style={{ padding: "clamp(80px,10vw,120px) clamp(24px,6vw,120px)", background: "var(--cream)" }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow eyebrow-navy">{t.paraVos.eyebrow}</span>
          <h2 className="h-display h-section" style={{ marginTop: 18, maxWidth: 800 }}>
            {t.paraVos.title}
          </h2>
          <p className="body-lg" style={{ marginTop: 20, maxWidth: 640 }}>
            {t.paraVos.intro}
          </p>
        </motion.div>

        <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 18 }}>
          {profiles.map((profile, i) => (
            <ProfileCardComponent
              key={profile.num}
              profile={profile}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              index={i}
            />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          style={{
            marginTop: 48,
            padding: "20px 24px",
            background: "rgba(14,14,20,0.03)",
            border: "1px solid rgba(14,14,20,0.06)",
            fontSize: 13,
            color: "var(--ink-soft)",
            lineHeight: 1.6,
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.24 }}
        >
          <span style={{ fontWeight: 600, color: "var(--ink)", marginRight: 6 }}>{t.paraVos.disclaimerLabel}</span>
          {t.paraVos.disclaimerBody}
        </motion.div>
      </div>
    </section>
  );
}
