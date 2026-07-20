"use client";
import { useEffect, useState } from "react";

export default function Navbar({ onCta }: { onCta: () => void }) {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="nav"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px clamp(24px,6vw,120px)",
        transition: "background .25s ease, border-color .25s ease, backdrop-filter .25s ease",
        borderBottom: "1px solid transparent",
        background: solid ? "rgba(241,235,216,0.92)" : "transparent",
        backdropFilter: solid ? "saturate(140%) blur(8px)" : "none",
        borderBottomColor: solid ? "rgba(14,14,20,0.05)" : "transparent",
      }}
    >
      <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img
          src="/logos/logo-2.png"
          alt="ANDEN"
          style={{
            height: 24,
            width: "auto",
            filter: "none",
            transition: "filter 0.25s ease",
          }}
        />
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <div className="nav-links" style={{ display: "flex", gap: 28 }}>
          {[
            ["#programa", "Programa"],
            ["#para-vos", "Para vos"],
            ["#beneficios", "Beneficios"],
            ["#faq", "FAQ"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              style={{ fontSize: 14, fontWeight: 500, color: solid ? "var(--ink-soft)" : "var(--cream-70)" }}
            >
              {label}
            </a>
          ))}
        </div>
        <button className="btn" onClick={onCta}>
          Sumate al waitlist
        </button>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
