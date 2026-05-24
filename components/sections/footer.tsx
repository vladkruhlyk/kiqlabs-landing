"use client";

import { motion } from "motion/react";
import { useLang } from "@/components/ui/lang-provider";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative bg-[var(--color-ink)] text-[var(--color-bone)] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="px-6 lg:px-10 pt-20 lg:pt-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-display leading-[0.88] tracking-[-0.04em] text-[22vw] sm:text-[18vw] lg:text-[16vw]">
            KIQ Labs
            <span className="text-[var(--color-lime-soft)]">.</span>
          </h2>
        </div>
      </motion.div>

      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-12 pb-10 border-t border-[var(--color-stone)]/30">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-stone-soft)]">
              {t.footer.noteLabel}
            </div>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--color-stone-soft)]">
              {t.footer.noteBody}
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-lime-soft)]">
              {t.footer.noteTag}
            </p>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-stone-soft)]">
              {t.footer.sitemap}
            </div>
            <ul className="mt-4 flex flex-col gap-2 text-[14px]">
              {(
                [
                  ["#about", t.nav.about],
                  ["#services", t.nav.services],
                  ["#brands", t.nav.brands],
                  ["#markets", t.nav.markets],
                  ["#contact", t.nav.contact],
                ] as const
              ).map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-[var(--color-lime-soft)]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-stone-soft)]">
              {t.footer.channels}
            </div>
            <ul className="mt-4 flex flex-col gap-2 text-[14px]">
              {["Telegram", "WhatsApp", "LinkedIn", "Instagram", "Facebook"].map(
                (s) => (
                  <li key={s}>
                    <a href="#" className="hover:text-[var(--color-lime-soft)]">
                      {s}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-stone-soft)]">
              {t.footer.direct}
            </div>
            <a
              href="tel:+13126817103"
              className="mt-4 block font-display text-[26px] leading-tight"
            >
              +1 (312) 681‑7103
            </a>
            <a
              href="mailto:info@kiqlabs.global"
              className="mt-2 block text-[14px] text-[var(--color-stone-soft)] hover:text-[var(--color-lime-soft)]"
            >
              info@kiqlabs.global
            </a>
            <div className="mt-4 font-mono text-[11px] text-[var(--color-stone-soft)] leading-relaxed">
              {t.footer.hqText}
              <br />
              {t.footer.hours}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[var(--color-stone)]/30 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-[var(--color-stone-soft)]">
          <span>
            © {new Date().getFullYear()} KIQ Labs Global. {t.footer.copyright}.
          </span>
          <span className="flex items-center gap-4">
            <a href="#" className="hover:text-[var(--color-lime-soft)]">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-[var(--color-lime-soft)]">
              {t.footer.terms}
            </a>
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-lime-soft)]" />
              {t.footer.status}
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
