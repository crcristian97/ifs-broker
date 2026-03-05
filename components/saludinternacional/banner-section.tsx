"use client";

import { AnimatedGridPattern } from "@/components/ui/background-wedosection";
import { cn } from "@/lib/utils";

function BannerSection() {
  return (
    <section className="w-full px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center">
        <div className="relative w-full overflow-hidden rounded-[40px] bg-[#033163] px-6 py-10 shadow-[0_24px_80px_rgba(15,35,80,0.35)] md:px-16 md:py-14">
          <AnimatedGridPattern
            numSquares={50}
            maxOpacity={0.15}
            duration={4}
            repeatDelay={1}
            className={cn(
              "absolute inset-0",
              "mask-[radial-gradient(800px_circle_at_center,white,transparent)]",
              "opacity-60"
            )}
          />

          <div className="relative z-10 flex min-h-[220px] flex-col items-center justify-center text-center">
            <p
              className="max-w-4xl text-lg font-regular leading-relaxed text-white md:text-2xl"
              style={{ fontFamily: "var(--font-noto-sans), sans-serif" }}
            >
              Los seguros de salud internacional permiten acceder a atención
              médica de alta calidad y proteger el patrimonio ante gastos
              médicos mayores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
