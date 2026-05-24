"use client";

import { motion } from "motion/react";
import { useLang } from "@/components/ui/lang-provider";

const bottles = [
  {
    src: "/media/photo1.png",
    alt: "OstroVit Omega 3",
    title: "Omega 3",
    brand: "OstroVit",
    badge: "США · ЕС",
  },
  {
    src: "/media/photo2.png",
    alt: "OstroVit Triple Zinc",
    title: "Triple Zinc",
    brand: "OstroVit",
    badge: "GMP",
  },
  {
    src: "/media/photo3.png",
    alt: "OstroVit Biotin Plus",
    title: "Biotin Plus",
    brand: "OstroVit",
    badge: "100 tabs",
  },
];

function FloatingBottles() {
  const { t } = useLang();
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[540px] pointer-events-none -mx-2 sm:mx-0">
      {/* Background flourishes */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(59,130,246,0.20), transparent 70%)",
        }}
      />
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      >
        <defs>
          <pattern
            id="hero-dots"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="var(--color-stone-soft)" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#hero-dots)"
          style={{
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 75%)",
          }}
        />
      </svg>

      {/* Bottles */}
      <Bottle
        bottle={bottles[0]}
        className="absolute top-[8%] left-[6%] w-[42%] sm:w-[40%] lg:w-[42%] z-20"
        rotate={-6}
        delay={0.2}
        floatDuration={5.4}
        floatDelay={0}
      />
      <Bottle
        bottle={bottles[1]}
        className="absolute top-[2%] right-[4%] w-[40%] sm:w-[38%] lg:w-[40%] z-10"
        rotate={5}
        delay={0.35}
        floatDuration={6.2}
        floatDelay={0.8}
      />
      <Bottle
        bottle={bottles[2]}
        className="absolute bottom-[4%] left-[28%] w-[50%] sm:w-[48%] lg:w-[50%] z-30"
        rotate={-2}
        delay={0.5}
        floatDuration={5.8}
        floatDelay={1.6}
      />

      {/* Decorative pricing tags */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[14%] right-[2%] z-40 hidden sm:block"
      >
        <div className="rounded-full bg-[var(--color-lime)] text-[var(--color-bone)] px-3.5 py-1.5 shadow-[0_8px_24px_rgba(59,130,246,0.45)]">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] opacity-80">
              {t.hero.tagDiscount}
            </span>
            <span className="font-display text-[16px] font-bold leading-none">
              −35%
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[18%] right-[6%] z-40 hidden sm:block"
      >
        <div className="rounded-full bg-[var(--color-ink)] text-[var(--color-bone)] px-3.5 py-1.5 shadow-[0_6px_20px_rgba(18,23,42,0.25)]">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-lime)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
              {t.hero.tagGmp}
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute top-[40%] left-[2%] z-40 hidden lg:block"
      >
        <div className="rounded-full bg-[var(--color-bone)] border border-[var(--color-ink)] text-[var(--color-ink)] px-3 py-1">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
            {t.hero.tagDirect}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function Bottle({
  bottle,
  className,
  rotate,
  delay,
  floatDuration,
  floatDelay,
}: {
  bottle: (typeof bottles)[number];
  className: string;
  rotate: number;
  delay: number;
  floatDuration: number;
  floatDelay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [rotate, rotate + 1.5, rotate] }}
        transition={{
          duration: floatDuration,
          delay: floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
        style={{ filter: "drop-shadow(0 30px 40px rgba(18, 23, 42, 0.22))" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bottle.src}
          alt={bottle.alt}
          width={520}
          height={680}
          loading="eager"
          className="w-full h-auto object-contain select-none pointer-events-none"
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const { t, lang } = useLang();
  const stats = t.hero.stats;
  return (
    <section
      id="top"
      className="relative pt-28 lg:pt-32 pb-16 lg:pb-20 overflow-hidden"
    >
      {/* Decorative dotted grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(14,20,17,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-soft)]"
        >
          <span className="flex items-center gap-2">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-lime)] opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-lime)]" />
            </span>
            {t.hero.eyebrow1}
          </span>
          <span className="text-[var(--color-line)]">/</span>
          <span>{t.hero.eyebrow2}</span>
          <span className="text-[var(--color-line)]">/</span>
          <span className="text-[var(--color-ink)] font-medium">
            {t.hero.eyebrow3}
          </span>
        </motion.div>

        {/* Main row: headline+content left, bottles right */}
        <div className="mt-8 lg:mt-12 grid grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left column: headline + description + CTAs */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex flex-col">
            <h1 className="font-display text-balance text-[32px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[68px] leading-[1.02] tracking-[-0.02em]">
              <Reveal>
                <span className="block">{t.hero.headline1}</span>
              </Reveal>
              <Reveal delay={0.08}>
                <span className="block">
                  {t.hero.headline2a}{" "}
                  <span className="font-display text-[var(--color-grass)]">
                    {t.hero.headline2b}
                  </span>
                </span>
              </Reveal>
              <Reveal delay={0.16}>
                <span className="block">
                  {t.hero.headline3a}{" "}
                  <span className="inline-flex items-center align-middle mx-1 lg:mx-2">
                    <span className="inline-grid place-items-center h-[0.75em] w-[0.75em] rounded-full bg-[var(--color-lime)] text-[var(--color-bone)]">
                      <svg
                        width="0.45em"
                        height="0.45em"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </span>
                  <span className="font-display">{t.hero.headline3b}</span>{" "}
                  {t.hero.headline3c}
                </span>
              </Reveal>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 lg:mt-10 text-[var(--color-ink-soft)] text-[15px] lg:text-[17px] leading-relaxed max-w-md text-pretty"
            >
              {t.hero.description1}{" "}
              <span className="text-[var(--color-ink)] font-medium">
                {t.hero.descriptionHighlight}
              </span>
              {t.hero.description2}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-ink)] text-[var(--color-bone)] pl-5 pr-2 py-2 text-[13px] font-semibold tracking-wide hover:bg-[var(--color-grass)] transition-colors"
              >
                {t.hero.ctaPrice}
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-lime)] text-[var(--color-bone)] transition-transform group-hover:translate-x-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 6h7m0 0L6 2.5M9.5 6L6 9.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </a>
              <a
                href={lang === "en" ? "/en/quiz" : "/quiz"}
                className="group inline-flex items-center gap-2 text-[13px] text-[var(--color-ink)] underline underline-offset-[6px] decoration-[var(--color-line)] hover:decoration-[var(--color-ink)] transition-colors px-2 py-2"
              >
                <span className="relative inline-flex h-1.5 w-1.5 mr-1">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-lime)] opacity-60 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-lime)]" />
                </span>
                {t.hero.ctaQuiz}
              </a>
            </motion.div>
          </div>

          {/* Right column: floating product bottles */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-7">
            <FloatingBottles />
          </div>
        </div>

        {/* Stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-12 lg:mt-20 border-y border-[var(--color-line)] py-5 lg:py-8 grid grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 lg:gap-10"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="lg:col-span-2">
              <div className="flex items-baseline gap-2 sm:gap-3">
                <span className="hidden sm:inline font-mono text-[10px] text-[var(--color-stone)] tabular-nums">
                  0{i + 1}
                </span>
                <div className="font-display text-[22px] sm:text-[32px] lg:text-[48px] leading-none tabular-nums">
                  {s.value}
                </div>
              </div>
              <div className="mt-1.5 sm:mt-2 font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink-soft)] leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.05, delay, ease: [0.16, 1, 0.3, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
