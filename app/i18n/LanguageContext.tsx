"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, type Lang, type Translation } from "./translations";

const STORAGE_KEY = "anden-lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to "es" so the client first render matches the SSR HTML.
  const [lang, setLangState] = useState<Lang>("es");

  // On mount, resolve the preferred language: stored choice wins, otherwise
  // auto-detect the browser language and use English only when it's non-Spanish.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "es" || stored === "en") {
      setLangState(stored);
      return;
    }
    const browser = window.navigator.language?.toLowerCase() ?? "";
    if (browser && !browser.startsWith("es")) {
      setLangState("en");
    }
  }, []);

  // Keep <html lang> in sync for accessibility and SEO.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

export function LanguageToggle({ tone = "auto" }: { tone?: "auto" | "light" | "dark" }) {
  const { lang, setLang } = useLanguage();
  const langs: Lang[] = ["es", "en"];

  // tone controls the resting colors so the toggle reads on both navy and cream.
  const restColor = tone === "light" ? "var(--cream-70)" : "var(--ink-soft)";
  const borderColor = tone === "light" ? "rgba(241,235,216,0.28)" : "var(--ink-line)";

  return (
    <div
      role="group"
      aria-label="Language selector"
      style={{
        display: "flex",
        alignItems: "center",
        border: `1px solid ${borderColor}`,
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      {langs.map((l, i) => {
        const active = l === lang;
        return (
          <button
            key={l}
            onClick={() => setLang(l)}
            aria-pressed={active}
            className="font-mono"
            style={{
              padding: "5px 10px",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              cursor: "pointer",
              border: "none",
              borderLeft: i === 0 ? "none" : `1px solid ${active ? "transparent" : borderColor}`,
              background: active ? "var(--orange)" : "transparent",
              color: active ? "var(--bone)" : restColor,
              transition: "background 0.2s ease, color 0.2s ease",
            }}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
