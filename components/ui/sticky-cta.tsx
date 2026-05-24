"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // показываем после ~70% первого экрана, скрываем у формы контакта
      const y = window.scrollY;
      const h = window.innerHeight;
      const contact = document.getElementById("contact");
      const contactTop = contact
        ? contact.getBoundingClientRect().top + window.scrollY
        : Infinity;

      setVisible(y > h * 0.7 && y < contactTop - h * 0.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-0 right-0 z-40 flex justify-center pointer-events-none px-3"
        >
          <div className="pointer-events-auto flex items-center gap-2 sm:gap-3 rounded-full bg-[var(--color-ink)] text-[var(--color-bone)] pl-4 sm:pl-5 pr-1.5 py-1.5 shadow-[0_8px_30px_rgba(18,23,42,0.35)] backdrop-blur-sm">
            <div className="hidden sm:flex items-center gap-2 pr-2 border-r border-[var(--color-bone)]/15">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-lime)] opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-lime)]" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-90">
                Готовы к диалогу
              </span>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/13126817103"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-bone)]/10 hover:bg-[var(--color-bone)]/20 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--color-lime)]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/kiqlabs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-bone)]/10 hover:bg-[var(--color-bone)]/20 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--color-lime)]">
                <path d="M21.585 4.043 2.61 11.36c-1.293.519-1.285 1.241-.236 1.563l4.872 1.52 1.872 5.74c.227.629.116.881.778.881.51 0 .735-.235 1.02-.515.18-.178 1.244-1.213 2.43-2.367l5.06 3.74c.93.514 1.604.249 1.838-.864L23.5 5.748c.342-1.36-.519-1.984-1.411-1.704l-.504-.001ZM6.99 14.273l11.142-7.03c.491-.294.927-.137.557.197L9.493 15.83l-.358 3.815-1.864-5.687-.281.315Z" />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[var(--color-lime)] text-[var(--color-bone)] px-4 sm:px-5 py-2 text-[12px] sm:text-[13px] font-semibold tracking-wide hover:bg-[var(--color-lime-soft)] transition-colors"
            >
              <span className="hidden sm:inline">Запросить B2B-прайс</span>
              <span className="sm:hidden">B2B-прайс</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 6h7m0 0L6 2.5M9.5 6L6 9.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
