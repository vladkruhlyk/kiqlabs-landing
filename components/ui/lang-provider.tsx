"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { dict, type Dictionary, type Lang } from "@/lib/i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dictionary;
};

const LangCtx = createContext<Ctx | null>(null);

function detectLang(pathname: string): Lang {
  return pathname.startsWith("/en") ? "en" : "ru";
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const lang = detectLang(pathname);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback(
    (l: Lang) => {
      // Strip /en prefix and rebuild path for target locale
      const stripped = pathname.replace(/^\/en(\/|$)/, "/");
      const next =
        l === "en"
          ? stripped === "/"
            ? "/en"
            : `/en${stripped}`
          : stripped;
      router.push(next);
    },
    [pathname, router],
  );

  const value = useMemo(
    () => ({ lang, setLang, t: dict[lang] }),
    [lang, setLang],
  );

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
