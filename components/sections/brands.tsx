"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useLang } from "@/components/ui/lang-provider";

type Brand = { name: string; domain: string };

const SPORTS_BRANDS: Brand[] = [
  { name: "Optimum Nutrition", domain: "optimumnutrition.com" },
  { name: "BSN", domain: "bsnsupplements.com" },
  { name: "Dymatize", domain: "dymatize.com" },
  { name: "Ultimate Nutrition", domain: "ultimatenutrition.com" },
  { name: "BPI Sports", domain: "bpisports.com" },
  { name: "EVL", domain: "evlutionnutrition.com" },
  { name: "Xtend", domain: "xtend.com" },
  { name: "Nutrex", domain: "nutrex.com" },
  { name: "Mutant", domain: "mutantnation.com" },
  { name: "Inner Armour", domain: "innerarmoursports.com" },
  { name: "Apollon Nutrition", domain: "apollonnutrition.com" },
  { name: "Dy Nutrition", domain: "dynutrition.com" },
  { name: "SANN", domain: "sann.eu" },
  { name: "Per4m", domain: "per4mnutrition.com" },
];

const VITAMIN_BRANDS: Brand[] = [
  { name: "NOW Foods", domain: "nowfoods.com" },
  { name: "Solgar", domain: "solgar.com" },
  { name: "Swanson Vitamins", domain: "swansonvitamins.com" },
  { name: "Life Extension", domain: "lifeextension.com" },
  { name: "Source Naturals", domain: "sourcenaturals.com" },
  { name: "Pure Encapsulations", domain: "pureencapsulations.com" },
  { name: "Douglas Labs", domain: "douglaslabs.com" },
  { name: "Metagenics", domain: "metagenics.com" },
  { name: "Twinlab", domain: "twinlab.com" },
  { name: "Doublewood", domain: "doublewoodsupplements.com" },
  { name: "Weider", domain: "weider.com" },
  { name: "Nutrend", domain: "nutrend.com" },
  { name: "Elicore Labs", domain: "elicorelabs.com" },
  { name: "OstroVit", domain: "ostrovit.com" },
  { name: "MyProtein", domain: "myprotein.com" },
];

const TOTAL = SPORTS_BRANDS.length + VITAMIN_BRANDS.length;

function BrandChip({ brand }: { brand: Brand }) {
  const [logoOk, setLogoOk] = useState(true);
  return (
    <span className="inline-flex items-center gap-2.5 pl-2 pr-4 py-1.5 rounded-full bg-[var(--color-bone)] border border-[var(--color-line)] hover:border-[var(--color-grass)] transition-colors cursor-default group">
      {logoOk ? (
        <span className="grid h-7 w-7 place-items-center rounded-full bg-white overflow-hidden shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://www.google.com/s2/favicons?domain=${brand.domain}&sz=64`}
            alt={brand.name}
            className="h-5 w-5 object-contain"
            loading="lazy"
            onError={() => setLogoOk(false)}
          />
        </span>
      ) : (
        <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--color-grass)]/10 text-[var(--color-grass)] font-mono text-[10px] font-bold shrink-0">
          {brand.name
            .split(" ")
            .map((w) => w[0])
            .slice(0, 2)
            .join("")
            .toUpperCase()}
        </span>
      )}
      <span className="text-[13px] lg:text-[14px] text-[var(--color-ink)] font-medium leading-none">
        {brand.name}
      </span>
    </span>
  );
}

export function Brands() {
  const { t } = useLang();
  const categories = [
    { name: t.brands.categories[0].name, brands: SPORTS_BRANDS },
    { name: t.brands.categories[1].name, brands: VITAMIN_BRANDS },
  ];

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
              <span>{t.brands.eyebrow}</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mt-6 font-display text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] text-balance max-w-[22ch]"
            >
              {TOTAL}+ {t.brands.headline1}{" "}
              <span className="text-[var(--color-lime)]">
                {t.brands.headlineHl}
              </span>{" "}
              {t.brands.headline2}
            </motion.h2>
          </div>
          <p className="max-w-sm text-[15px] text-[var(--color-stone-soft)] leading-relaxed">
            {t.brands.description}
          </p>
        </div>

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
                  {cat.brands.length} {t.brands.brandsLabel}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.brands.map((b) => (
                  <BrandChip key={b.name} brand={b} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 lg:mt-20 pt-8 border-t border-[var(--color-stone)]/25 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-md">
            <p className="text-[14px] text-[var(--color-stone-soft)] leading-relaxed">
              {t.brands.catalogNote}
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center justify-between gap-3 rounded-full bg-[var(--color-lime)] text-[var(--color-bone)] pl-5 pr-2 py-2.5 text-[13px] font-semibold tracking-wide hover:bg-[var(--color-lime-soft)] transition-colors"
          >
            {t.brands.catalogCta}
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
