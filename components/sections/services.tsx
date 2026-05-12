"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Оптовая дистрибуция",
    tag: "Объём · Логистика",
    body: "Крупные оптовые поставки витаминов, БАДов и спортпита от проверенных производителей США и ЕС.",
    points: [
      "Закупка у проверенных фабрик",
      "Контейнерные и сборные поставки (LCL)",
      "Полный пакет таможенных документов",
      "Холодовая цепь при необходимости",
    ],
  },
  {
    n: "02",
    title: "Представительство брендов",
    tag: "Эксклюзив",
    body: "Официальное представительство ведущих американских и европейских брендов БАДов в вашем регионе.",
    points: [
      "Эксклюзивные региональные права",
      "Подготовка регуляторного досье",
      "Стратегия листинга в ритейле",
      "Долгосрочное сопровождение",
    ],
  },
  {
    n: "03",
    title: "Private Label",
    tag: "Создание бренда",
    body: "Разработка собственных продуктов и брендинговые решения для квалифицированных партнёров.",
    points: [
      "Помощь с формулами и рецептурой",
      "Дизайн бренда и упаковки",
      "Многоязычные этикетки",
      "Соответствие требованиям рынка",
    ],
  },
  {
    n: "04",
    title: "Запуск на новых рынках",
    tag: "Стратегия",
    body: "Полное сопровождение при выходе бренда на новый рынок: регуляторика, документы, таможня.",
    points: [
      "Анализ рынка и прогноз спроса",
      "Поиск локальных партнёров",
      "Дорожная карта compliance",
      "Запуск и сопровождение роста",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-16 lg:py-32 bg-[var(--color-paper)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-soft)]">
              <span className="inline-block h-px w-8 bg-[var(--color-ink)]" />
              <span>§ 05 — Что мы делаем</span>
            </div>
            <h2 className="mt-6 font-display text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] text-balance max-w-[20ch]">
              Четыре формата{" "}
              <span className="text-[var(--color-grass)]">сотрудничества</span>
              .
            </h2>
          </div>
          <p className="max-w-sm text-[15px] text-[var(--color-ink-soft)] leading-relaxed">
            От оптовых заказов до полноценного запуска бренда на рынок. Подбираем
            формат под ваш масштаб и регуляторику.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {services.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative bg-[var(--color-bone)] border border-[var(--color-line)] rounded-2xl p-6 lg:p-8 hover:border-[var(--color-ink)] transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-[11px] tabular-nums text-[var(--color-stone)]">
                  {s.n}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-soft)] px-2.5 py-1 border border-[var(--color-line)] rounded-full">
                  {s.tag}
                </span>
              </div>

              <h3 className="font-display text-[26px] lg:text-[32px] leading-[1.05] tracking-[-0.015em] text-[var(--color-ink)]">
                {s.title}
              </h3>

              <p className="mt-3 text-[14px] lg:text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
                {s.body}
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-2.5">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-baseline gap-2.5 text-[13px] lg:text-[14px] text-[var(--color-ink)]"
                  >
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-[var(--color-lime)]/30 text-[var(--color-lime-deep)] shrink-0 translate-y-[2px]">
                      <Check size={10} strokeWidth={3.5} />
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
