"use client";

import { useLang } from "@/components/ui/lang-provider";
import { cn } from "@/lib/utils";

export function LangToggle({ inverted = false }: { inverted?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center rounded-full border p-0.5 font-mono text-[10px] uppercase tracking-[0.18em]",
        inverted
          ? "border-[var(--color-bone)]/15 bg-[var(--color-bone)]/[0.04]"
          : "border-[var(--color-line)] bg-transparent",
      )}
    >
      {(["ru", "en"] as const).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={cn(
              "px-2.5 py-1 rounded-full transition-colors",
              active
                ? inverted
                  ? "bg-[var(--color-bone)] text-[var(--color-ink)]"
                  : "bg-[var(--color-ink)] text-[var(--color-bone)]"
                : inverted
                  ? "text-[var(--color-stone-soft)] hover:text-[var(--color-bone)]"
                  : "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]",
            )}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
