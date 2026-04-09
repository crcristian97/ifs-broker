import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Sticky stacked “card” sections (21st.dev smooth-scroll layout pattern).
 * Smooth scrolling is already provided app-wide by `LenisSmoothScroll` + `lib/lenis.ts`;
 * do not nest `ReactLenis` here — a second Lenis instance would fight GSAP ScrollTrigger.
 */

type StickyScrollArticleProps = {
  children: ReactNode;
  className?: string;
};

export function StickyScrollArticle({ children, className }: StickyScrollArticleProps) {
  return <article className={cn("relative", className)}>{children}</article>;
}

type StickyScrollPanelProps = {
  children: ReactNode;
  className?: string;
  /** Stacking order; later panels slide over earlier ones */
  layer: 1 | 2 | 3;
  /** Middle panel: rounded top + shadow like the reference demo */
  variant?: "default" | "raised";
};

export function StickyScrollPanel({ children, className, layer, variant = "default" }: StickyScrollPanelProps) {
  return (
    <div
      className={cn(
        "sticky top-0 min-h-svh w-full",
        layer === 1 && "z-1",
        layer === 2 && "z-2",
        layer === 3 && "z-3",
        variant === "raised" &&
          "overflow-hidden rounded-t-4xl bg-white shadow-[0_-12px_48px_rgba(3,49,99,0.1)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
