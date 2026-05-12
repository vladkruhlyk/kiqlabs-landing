"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import worldTopo from "world-atlas/countries-110m.json";
import { cn } from "@/lib/utils";

type CountryProps = { name: string };

// Активные ГЕО — фокус нашей дистрибуции
const ACTIVE = {
  Kazakhstan: { ru: "Казахстан", code: "KZ", capital: "Астана", flag: "🇰🇿" },
  Uzbekistan: { ru: "Узбекистан", code: "UZ", capital: "Ташкент", flag: "🇺🇿" },
  Tajikistan: { ru: "Таджикистан", code: "TJ", capital: "Душанбе", flag: "🇹🇯" },
  Kyrgyzstan: { ru: "Кыргызстан", code: "KG", capital: "Бишкек", flag: "🇰🇬" },
  Azerbaijan: { ru: "Азербайджан", code: "AZ", capital: "Баку", flag: "🇦🇿" },
  Georgia: { ru: "Грузия", code: "GE", capital: "Тбилиси", flag: "🇬🇪" },
  Armenia: { ru: "Армения", code: "AM", capital: "Ереван", flag: "🇦🇲" },
  Mongolia: { ru: "Монголия", code: "MN", capital: "Улан-Батор", flag: "🇲🇳" },
} as const;

type ActiveKey = keyof typeof ACTIVE;
const ACTIVE_KEYS = Object.keys(ACTIVE) as ActiveKey[];

// Геоцентры для подписей (lng, lat)
const LABEL_CENTERS: Record<ActiveKey, [number, number]> = {
  Kazakhstan: [68, 48],
  Uzbekistan: [64, 41.5],
  Tajikistan: [71, 39],
  Kyrgyzstan: [74.5, 41.5],
  Azerbaijan: [47.5, 40.3],
  Georgia: [43.3, 42],
  Armenia: [45, 40],
  Mongolia: [103, 47],
};

export function Markets() {
  const [hovered, setHovered] = useState<ActiveKey | null>(null);

  // topojson → geojson
  const geo = useMemo(() => {
    // @ts-expect-error topojson typings narrow
    return feature(
      worldTopo as unknown as Parameters<typeof feature>[0],
      // @ts-expect-error topojson typings narrow
      worldTopo.objects.countries,
    ) as FeatureCollection<Geometry, CountryProps>;
  }, []);

  const width = 900;
  const height = 460;

  // Проекция: центр между Каспием и Монголией, чтобы все 8 ГЕО влезли
  const projection = useMemo(
    () =>
      geoMercator()
        .center([70, 38])
        .scale(290)
        .translate([width / 2, height / 2]),
    [],
  );
  const path = useMemo(() => geoPath(projection), [projection]);

  const isActive = (name: string): name is ActiveKey =>
    ACTIVE_KEYS.includes(name as ActiveKey);

  return (
    <section id="markets" className="relative py-16 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-soft)]">
              <span className="inline-block h-px w-8 bg-[var(--color-ink)]" />
              <span>§ 04 — Где работаем</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mt-6 font-display text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-balance max-w-[22ch]"
            >
              Работаем в странах, где{" "}
              <span className="text-[var(--color-grass)]">нужен поставщик</span>
              .
            </motion.h2>
          </div>
          <p className="max-w-sm text-[15px] text-[var(--color-ink-soft)] leading-relaxed">
            Готовая документация, сертификация и таможенное сопровождение под
            каждое направление. Никаких разовых отгрузок — только постоянные
            партнёрства.
          </p>
        </div>

        {/* Map + List */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {/* Map */}
          <div className="col-span-12 lg:col-span-8 order-2 lg:order-1">
            <div className="relative bg-[var(--color-bone)] border border-[var(--color-line)] rounded-2xl overflow-hidden min-h-[280px]">
              <svg
                viewBox={`0 0 ${width} ${height}`}
                className="w-full h-auto block"
                aria-label="Карта активных рынков KIQ Labs"
              >
                <defs>
                  <radialGradient id="active-glow">
                    <stop offset="0%" stopColor="var(--color-lime)" stopOpacity="0.55" />
                    <stop offset="60%" stopColor="var(--color-lime)" stopOpacity="0.10" />
                    <stop offset="100%" stopColor="var(--color-lime)" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="bg-fade" cx="50%" cy="50%" r="70%">
                    <stop offset="0%" stopColor="var(--color-bone)" stopOpacity="1" />
                    <stop offset="100%" stopColor="var(--color-paper)" stopOpacity="1" />
                  </radialGradient>
                </defs>

                <rect width={width} height={height} fill="url(#bg-fade)" />

                {/* Контуры всех стран — wireframe */}
                <g>
                  {geo.features.map((f, i) => {
                    const name = f.properties.name;
                    const active = isActive(name);
                    const d = path(f);
                    if (!d) return null;
                    const isHovered = active && hovered === name;
                    return (
                      <path
                        key={`${name}-${i}`}
                        d={d}
                        fill={
                          active
                            ? isHovered
                              ? "var(--color-lime)"
                              : "rgba(199, 236, 63, 0.18)"
                            : "transparent"
                        }
                        stroke={
                          active
                            ? "var(--color-lime-deep)"
                            : "var(--color-stone-soft)"
                        }
                        strokeWidth={active ? (isHovered ? 1.8 : 1.4) : 0.6}
                        strokeLinejoin="round"
                        className={cn(
                          "transition-all duration-200",
                          active && "cursor-pointer",
                        )}
                        style={active ? { pointerEvents: "auto" } : { pointerEvents: "none" }}
                        onMouseEnter={
                          active ? () => setHovered(name as ActiveKey) : undefined
                        }
                        onMouseLeave={
                          active ? () => setHovered(null) : undefined
                        }
                      />
                    );
                  })}
                </g>

                {/* Glow + бейдж кода страны */}
                {ACTIVE_KEYS.map((key) => {
                  const [lng, lat] = LABEL_CENTERS[key];
                  const [x, y] = projection([lng, lat]) ?? [0, 0];
                  const isHovered = hovered === key;
                  const labelWidth = ACTIVE[key].code.length * 6.5 + 14;
                  return (
                    <g key={`label-${key}`} pointerEvents="none">
                      <circle
                        cx={x}
                        cy={y}
                        r={isHovered ? 42 : 30}
                        fill="url(#active-glow)"
                        className="transition-all"
                      />
                      {/* pulse rings */}
                      <circle
                        cx={x}
                        cy={y}
                        r="8"
                        fill="none"
                        stroke="var(--color-lime-deep)"
                        strokeWidth="0.8"
                        opacity={isHovered ? 0.9 : 0.4}
                        className="transition-opacity"
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r="3.5"
                        fill="var(--color-lime)"
                        stroke="var(--color-ink)"
                        strokeWidth="1.2"
                      />
                      <g transform={`translate(${x + 10}, ${y - 8})`}>
                        <rect
                          x="0"
                          y="-7"
                          width={labelWidth}
                          height="14"
                          rx="7"
                          fill="var(--color-ink)"
                        />
                        <text
                          x={labelWidth / 2}
                          y="2"
                          textAnchor="middle"
                          fontSize="9"
                          fontFamily="var(--font-mono)"
                          fill="var(--color-lime)"
                          fontWeight="700"
                          letterSpacing="0.12em"
                        >
                          {ACTIVE[key].code}
                        </text>
                      </g>
                    </g>
                  );
                })}

                {/* Legend */}
                <g transform={`translate(20, ${height - 28})`} pointerEvents="none">
                  <circle cx="6" cy="-2" r="4" fill="var(--color-lime)" stroke="var(--color-ink)" strokeWidth="1.2" />
                  <text
                    x="16"
                    y="2"
                    fontSize="10"
                    fontFamily="var(--font-mono)"
                    fill="var(--color-ink-soft)"
                    letterSpacing="0.12em"
                  >
                    АКТИВНЫХ НАПРАВЛЕНИЙ · {ACTIVE_KEYS.length}
                  </text>
                </g>
              </svg>

              {/* Hover tooltip */}
              {hovered && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-4 right-4 bg-[var(--color-ink)] text-[var(--color-bone)] px-4 py-2.5 rounded-lg shadow-lg pointer-events-none min-w-[200px]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-stone-soft)]">
                      {ACTIVE[hovered].code}
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[var(--color-lime)]/15 text-[var(--color-lime)] text-[9px] font-mono uppercase tracking-[0.15em] border border-[var(--color-lime)]/40">
                      Активно
                    </span>
                  </div>
                  <div className="font-display text-[18px] mt-1.5">
                    {ACTIVE[hovered].ru}
                  </div>
                  <div className="font-mono text-[10px] mt-0.5 text-[var(--color-stone-soft)]">
                    {ACTIVE[hovered].capital}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Country list */}
          <div className="col-span-12 lg:col-span-4 order-1 lg:order-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-stone)] mb-4 flex items-center justify-between">
              <span>Активные рынки</span>
              <span>{ACTIVE_KEYS.length} стран</span>
            </div>
            <ul className="flex flex-col">
              {ACTIVE_KEYS.map((key) => {
                const c = ACTIVE[key];
                return (
                  <li
                    key={key}
                    onMouseEnter={() => setHovered(key)}
                    onMouseLeave={() => setHovered(null)}
                    className={cn(
                      "group flex items-center justify-between gap-3 py-3 px-3 -mx-3 border-b border-[var(--color-line)] cursor-pointer transition-colors rounded-md",
                      hovered === key && "bg-[var(--color-bone-deep)]",
                    )}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="font-mono text-[10px] tabular-nums text-[var(--color-stone)] w-7 shrink-0">
                        {c.code}
                      </span>
                      <div className="min-w-0">
                        <div className="font-display text-[16px] text-[var(--color-ink)] truncate">
                          {c.ru}
                        </div>
                        <div className="font-mono text-[10px] text-[var(--color-stone)] uppercase tracking-[0.12em] mt-0.5">
                          {c.capital}
                        </div>
                      </div>
                    </div>
                    <span className="shrink-0 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[var(--color-lime)]/15 border border-[var(--color-lime-deep)]/40 text-[var(--color-lime-deep)]">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-lime-deep)]" />
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] font-semibold">
                        Активно
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-between gap-3 rounded-full bg-[var(--color-grass)] text-[var(--color-bone)] pl-5 pr-2 py-2.5 text-[13px] tracking-wide hover:bg-[var(--color-grass-deep)] transition-colors"
            >
              Узнать про поставку
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-bone)] text-[var(--color-grass)]">
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
      </div>
    </section>
  );
}
