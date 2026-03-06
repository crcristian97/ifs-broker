"use client";

import { ReactNode } from "react";
import { AnimatedGridPattern } from "@/components/ui/background-wedosection";
import { cn } from "@/lib/utils";

type BannerSectionProps = {
  /** Color de fondo del card principal (hex o cualquier valor CSS válido) */
  bgColor?: string;
  /** Título principal opcional (puede ser texto o JSX) */
  title?: ReactNode;
  /** Texto principal / subtítulo (puede ser texto o JSX) */
  subtitle?: ReactNode;
  /** Color del subtítulo (por defecto blanco) */
  subtitleColor?: string;
  /** Alto mínimo del card principal */
  minHeight?: number;
  /** Alto mínimo del área de contenido interna */
  contentMinHeight?: number;
  /** Clases extra para el `<section>` raíz (por ejemplo para ajustar padding) */
  sectionClassName?: string;
    };

function BannerSection({
  bgColor = "#033163",
  title,
  subtitle = "Los seguros de salud internacional permiten acceder a atención médica de alta calidad y proteger el patrimonio ante gastos médicos mayores.",
  subtitleColor = "#FFFFFF",
  minHeight = 320,
  contentMinHeight = 260,
  sectionClassName,
}: BannerSectionProps) {
  return (
    <section
      className={
        sectionClassName ?? "w-full px-4 py-14 md:px-8 md:py-24"
      }
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center">
        <div
          className="relative w-full overflow-hidden rounded-[40px] px-6 py-16 shadow-[0_24px_80px_rgba(15,35,80,0.35)] md:px-16 md:py-24"
          style={{ minHeight, backgroundColor: bgColor }}
        >
          <AnimatedGridPattern
            numSquares={50}
            maxOpacity={0.15}
            duration={4}
            repeatDelay={1}
            className={cn(
              "absolute inset-0",
                  "mask-[radial-gradient(800px_circle_at_center,white,transparent)]",
                  "opacity-60",
            )}
          />

          <div
            className="relative z-10 flex flex-col items-center justify-center text-center gap-4"
            style={{ minHeight: contentMinHeight }}
          >
            {title && (
              <h2
                className="max-w-4xl text-xl font-semibold uppercase tracking-[0.18em] text-white md:text-2xl"
                    style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className="max-w-4xl text-base font-regular leading-relaxed md:text-lg"
                style={{
                  fontFamily: "var(--font-noto-sans), sans-serif",
                  color: subtitleColor,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
        </div>
      </section>
  );
}

export default BannerSection;
