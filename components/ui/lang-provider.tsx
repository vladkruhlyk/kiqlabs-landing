"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { dict, type Dictionary, type Lang } from "@/lib/i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dictionary;
};

const LangCtx = createContext<Ctx | null>(null);

const STORAGE_KEY = "kiq-lang";

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === "ru" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
      return;
    }
    // Fallback: browser language
    const browserLang = navigator.language?.toLowerCase() || "";
    if (browserLang.startsWith("ru")) {
      setLangState("ru");
      document.documentElement.lang = "ru";
    } else {
      setLangState("en");
      document.documentElement.lang = "en";
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  }, []);

  return (
    <LangCtx.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
