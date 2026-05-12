import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  label?: string;
  ratio?: "square" | "portrait" | "landscape" | "wide" | "tall";
  variant?: "default" | "dark" | "copper";
};

const ratioMap = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  tall: "aspect-[9/16]",
};

export function MediaPlaceholder({
  className,
  label = "Media",
  ratio = "landscape",
  variant = "default",
}: Props) {
  const variantClasses = {
    default: "bg-[var(--color-bone-deep)] border-[var(--color-line)]",
    dark: "bg-[var(--color-grass)] border-[var(--color-grass-deep)] text-[var(--color-bone)]",
    copper: "bg-[var(--color-lime)] border-[var(--color-lime)] text-[var(--color-ink)]",
  }[variant];

  return (
    <div
      className={cn(
        "relative overflow-hidden border",
        ratioMap[ratio],
        variantClasses,
        className,
      )}
      data-media-placeholder
    >
      {/* Diagonal pattern */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="diag"
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="14"
              stroke="currentColor"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>

      {/* Corner marks */}
      <div className="pointer-events-none absolute inset-3 flex items-start justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-60">
          {label}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-60">
          {ratio}
        </span>
      </div>
      <div className="pointer-events-none absolute inset-3 flex items-end justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-50">
          placeholder
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-50">
          replace
        </span>
      </div>

      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 opacity-70">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <rect
              x="0.75"
              y="0.75"
              width="26.5"
              height="26.5"
              stroke="currentColor"
              strokeWidth="0.75"
            />
            <path
              d="M1 27L27 1M1 1L27 27"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
