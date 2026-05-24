"use client";

import { motion } from "motion/react";
import { ShieldCheck, Boxes, Truck, FileCheck, Handshake } from "lucide-react";
import { useLang } from "@/components/ui/lang-provider";

const ICONS = [ShieldCheck, Boxes, Truck, FileCheck, Handshake];

export function Advantages() {
  const { t } = useLang();
  const advantages = t.advantages.items;

  return (
    <section className="relative py-16 lg:py-32 bg-[var(--color-paper)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-12 lg:mb-16 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-soft)]">
              <span className="inline-block h-px w-8 bg-[var(--color-ink)]" />
              <span>{t.advantages.eyebrow}</span>
            </div>
            <h2 className="mt-6 font-display text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em]">
              {t.advantages.headline1}{" "}
              <span className="text-[var(--color-grass)]">
                {t.advantages.headlineHl}
              </span>
              {t.advantages.headline2}
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-4 text-[14px] lg:text-[15px] text-[var(--color-ink-soft)] leading-relaxed">
            {t.advantages.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {advantages.map((a, i) => {
            const Icon = ICONS[i];
            const isFeatured = i === 0;
            return (
              <motion.article
                key={a.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={
                  isFeatured
                    ? "sm:col-span-2 bg-[var(--color-ink)] text-[var(--color-bone)] rounded-2xl p-6 lg:p-8 flex flex-col"
                    : "bg-[var(--color-bone)] border border-[var(--color-line)] rounded-2xl p-6 lg:p-8 flex flex-col"
                }
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={
                      isFeatured
                        ? "grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-lime)] text-[var(--color-bone)]"
                        : "grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-grass)]/10 text-[var(--color-grass)]"
                    }
                  >
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <span
                    className={
                      isFeatured
                        ? "font-mono text-[11px] tabular-nums text-[var(--color-stone-soft)]"
                        : "font-mono text-[11px] tabular-nums text-[var(--color-stone)]"
                    }
                  >
                    {a.n}
                  </span>
                </div>
                <h3
                  className={`font-display leading-[1.1] tracking-[-0.015em] ${
                    isFeatured
                      ? "text-[24px] lg:text-[30px]"
                      : "text-[20px] lg:text-[24px]"
                  }`}
                >
                  {a.title}
                </h3>
                <p
                  className={`mt-3 text-[13px] lg:text-[14px] leading-relaxed ${
                    isFeatured
                      ? "text-[var(--color-stone-soft)]"
                      : "text-[var(--color-ink-soft)]"
                  }`}
                >
                  {a.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
