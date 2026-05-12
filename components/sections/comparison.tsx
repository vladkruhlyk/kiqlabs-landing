"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const rows = [
  {
    metric: "Закупочная цена",
    without: "Розничная + наценка трейдера",
    with: "Прямой контракт с фабрикой",
    win: "до −35%",
  },
  {
    metric: "Минимальная партия",
    without: "От полного контейнера",
    with: "Гибкий объём под партнёра",
    win: "ниже порог входа",
  },
  {
    metric: "Сроки поставки",
    without: "60–90 дней",
    with: "14–28 дней",
    win: "в 3× быстрее",
  },
  {
    metric: "Документы под рынок",
    without: "Делаете сами, риск задержек",
    with: "Готовое досье под СНГ и Кавказ",
    win: "0 рисков",
  },
  {
    metric: "Валютные риски",
    without: "Платите в $ напрямую",
    with: "Можно в KZT, UZS, RUB",
    win: "−2-4% курсовых",
  },
  {
    metric: "Складские остатки",
    without: "Лежит у вас, замораживает оборотку",
    with: "Дозаказ за 14 дней",
    win: "оборотка свободна",
  },
];

export function Comparison() {
  return (
    <section className="relative py-16 lg:py-32 bg-[var(--color-paper)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-soft)]">
              <span className="inline-block h-px w-8 bg-[var(--color-ink)]" />
              <span>§ 03 — Сравнение</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mt-6 font-display text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.02] tracking-[-0.02em] text-balance max-w-[18ch]"
            >
              Почему{" "}
              <span className="text-[var(--color-grass)]">с KIQ дешевле</span>,
              чем напрямую.
            </motion.h2>
          </div>
          <p className="max-w-sm text-[15px] text-[var(--color-ink-soft)] leading-relaxed">
            Шесть параметров, по которым мы выигрываем у прямого импорта и у
            других дистрибьюторов в регионе.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block border border-[var(--color-line)] rounded-2xl overflow-hidden bg-[var(--color-bone)]">
          {/* Header */}
          <div className="grid grid-cols-12 bg-[var(--color-ink)] text-[var(--color-bone)] py-4 px-6">
            <div className="col-span-3 font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">
              Параметр
            </div>
            <div className="col-span-4 font-mono text-[11px] uppercase tracking-[0.18em] flex items-center gap-2 text-[#ff7a6a]">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[#ff7a6a]/15">
                <X size={12} strokeWidth={3} />
              </span>
              Прямой импорт / трейдер
            </div>
            <div className="col-span-3 font-mono text-[11px] uppercase tracking-[0.18em] flex items-center gap-2 text-[var(--color-lime)]">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--color-lime)]/15">
                <Check size={12} strokeWidth={3} />
              </span>
              С KIQ Labs
            </div>
            <div className="col-span-2 font-mono text-[11px] uppercase tracking-[0.18em] opacity-70 text-right">
              Выгода
            </div>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={row.metric}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid grid-cols-12 items-center py-5 px-6 border-t border-[var(--color-line)] hover:bg-[var(--color-bone-deep)] transition-colors"
            >
              <div className="col-span-3 font-display text-[16px] text-[var(--color-ink)]">
                {row.metric}
              </div>
              <div className="col-span-4 flex items-baseline gap-2">
                <span className="grid h-4 w-4 place-items-center rounded-full bg-[#ff7a6a]/15 text-[#d54a3a] shrink-0 translate-y-[1px]">
                  <X size={11} strokeWidth={3} />
                </span>
                <span className="text-[14px] text-[#a13d31] font-medium">
                  {row.without}
                </span>
              </div>
              <div className="col-span-3 flex items-baseline gap-2">
                <span className="grid h-4 w-4 place-items-center rounded-full bg-[var(--color-lime)]/25 text-[var(--color-lime-deep)] shrink-0 translate-y-[1px]">
                  <Check size={11} strokeWidth={3} />
                </span>
                <span className="text-[14px] text-[var(--color-ink)] font-medium">
                  {row.with}
                </span>
              </div>
              <div className="col-span-2 text-right">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[var(--color-lime)] border border-[var(--color-lime-deep)] text-[var(--color-ink)] font-mono text-[11px] font-bold uppercase tracking-[0.08em]">
                  {row.win}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="md:hidden flex flex-col gap-3">
          {rows.map((row) => (
            <article
              key={row.metric}
              className="bg-[var(--color-bone)] border border-[var(--color-line)] rounded-xl p-5"
            >
              <div className="font-display text-[16px] text-[var(--color-ink)] mb-3">
                {row.metric}
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="grid h-4 w-4 place-items-center rounded-full bg-[#ff7a6a]/15 text-[#d54a3a] shrink-0 translate-y-[2px]">
                  <X size={11} strokeWidth={3} />
                </span>
                <div className="text-[13px] text-[#a13d31] font-medium">
                  {row.without}
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="grid h-4 w-4 place-items-center rounded-full bg-[var(--color-lime)]/25 text-[var(--color-lime-deep)] shrink-0 translate-y-[2px]">
                  <Check size={11} strokeWidth={3} />
                </span>
                <div className="text-[13px] text-[var(--color-ink)] font-medium">
                  {row.with}
                </div>
              </div>
              <div className="mt-3">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[var(--color-lime)] border border-[var(--color-lime-deep)] text-[var(--color-ink)] font-mono text-[10px] font-bold uppercase tracking-[0.1em]">
                  {row.win}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
