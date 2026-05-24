"use client";

import { motion } from "motion/react";
import { useLang } from "@/components/ui/lang-provider";

export function About() {
  const { t } = useLang();
  const benefits = t.about.benefits;

  return (
    <section id="about" className="relative py-16 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-12 lg:mb-16 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-soft)]">
              <span className="inline-block h-px w-8 bg-[var(--color-ink)]" />
              <span>{t.about.eyebrow}</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mt-6 font-display text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em]"
            >
              {t.about.headline1}{" "}
              <span className="text-[var(--color-grass)]">
                {t.about.headlineHl}
              </span>
              .
            </motion.h2>
          </div>
          <p className="col-span-12 lg:col-span-4 text-[14px] lg:text-[15px] text-[var(--color-ink-soft)] leading-relaxed">
            {t.about.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-line)] border border-[var(--color-line)] rounded-2xl overflow-hidden">
          {benefits.map((b, i) => (
            <motion.div
              key={b.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-[var(--color-bone)] p-6 lg:p-8 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[var(--color-stone)] tabular-nums">
                  {b.n}
                </span>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-lime)]" />
              </div>
              <div>
                <h3 className="font-display text-[22px] lg:text-[26px] leading-[1.1] tracking-[-0.015em] text-[var(--color-ink)]">
                  {b.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink-soft)]">
                  {b.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
