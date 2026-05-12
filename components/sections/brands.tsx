"use client";

import { motion } from "motion/react";

const categories = [
  {
    name: "Спортивное питание",
    brands: [
      "Optimum Nutrition",
      "BSN",
      "Dymatize",
      "Ultimate Nutrition",
      "BPI Sports",
      "EVL",
      "Xtend",
      "Nutrex",
      "Mutant",
      "Inner Armour",
      "Apollon Nutrition",
      "Dy Nutrition",
      "SANN",
      "Per4m",
    ],
  },
  {
    name: "Витамины и клинические БАДы",
    brands: [
      "NOW Foods",
      "Solgar",
      "Swanson Vitamins",
      "Life Extension",
      "Source Naturals",
      "Pure Encapsulations",
      "Douglas Labs",
      "Metagenics",
      "Twinlab",
      "Doublewood",
      "Weider",
      "Nutrend",
      "Elicore Labs",
      "OstroVit",
      "MyProtein",
    ],
  },
];

const totalBrands = categories.reduce((s, c) => s + c.brands.length, 0);

export function Brands() {
  return (
    <section
      id="brands"
      className="relative py-16 lg:py-32 bg-[var(--color-ink)] text-[var(--color-bone)] overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-stone-soft)]">
              <span className="inline-block h-px w-8 bg-[var(--color-bone)]" />
              <span>§ 06 — Бренды</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mt-6 font-display text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-balance max-w-[22ch]"
            >
              {totalBrands}+ брендов, которые{" "}
              <span className="text-[var(--color-lime)]">уже продаются</span> в
              вашем регионе.
            </motion.h2>
          </div>
          <p className="max-w-sm text-[15px] text-[var(--color-stone-soft)] leading-relaxed">
            Кураторский портфель производителей-лидеров. Все верифицированы у
            источника: аудит, сертификат анализа, готовая импортная
            документация.
          </p>
        </div>

        {/* Categories with brand chips */}
        <div className="space-y-10 lg:space-y-14">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
            >
              <div className="flex items-baseline justify-between mb-5 pb-3 border-b border-[var(--color-stone)]/25">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-lime)] tabular-nums">
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[20px] lg:text-[24px] leading-none text-[var(--color-bone)]">
                    {cat.name}
                  </h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-stone-soft)]">
                  {cat.brands.length} брендов
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.brands.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center px-3.5 py-2 rounded-full border border-[var(--color-stone)]/30 bg-[var(--color-ink)]/40 text-[13px] lg:text-[14px] text-[var(--color-bone)] hover:border-[var(--color-lime)] hover:text-[var(--color-lime)] transition-colors cursor-default"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bottom */}
        <div className="mt-14 lg:mt-20 pt-8 border-t border-[var(--color-stone)]/25 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-md">
            <p className="text-[14px] text-[var(--color-stone-soft)] leading-relaxed">
              Не нашли нужный бренд? У нас есть доступ ко всему ассортименту
              США и ЕС — закажем под ваш запрос.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center justify-between gap-3 rounded-full bg-[var(--color-lime)] text-[var(--color-ink)] pl-5 pr-2 py-2.5 text-[13px] font-semibold tracking-wide hover:bg-[var(--color-lime-soft)] transition-colors"
          >
            Запросить полный каталог
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-ink)] text-[var(--color-lime)] transition-transform group-hover:translate-x-0.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 6h7m0 0L6 2.5M9.5 6L6 9.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
