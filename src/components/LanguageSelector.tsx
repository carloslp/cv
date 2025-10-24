"use client";
import { useLanguage } from "@/lib/language-context";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  return (
    <div style={{ position: "fixed", top: 16, right: 16, zIndex: 100 }}>
      <button
        onClick={() => setLanguage("es")}
        style={{ fontWeight: language === "es" ? "bold" : "normal", marginRight: 8 }}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage("en")}
        style={{ fontWeight: language === "en" ? "bold" : "normal" }}
      >
        EN
      </button>
    </div>
  );
}
