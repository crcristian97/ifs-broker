"use client";

import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { AnimatedGridPattern } from "@/components/ui/background-wedosection";
import { cn } from "@/lib/utils";

type BannerSectionProps = {
  bgColor?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  subtitleColor?: string;
  minHeight?: number;
  contentMinHeight?: number;
  sectionClassName?: string;
};

function BannerSection({
  bgColor = "#033163",
  title,
  subtitle,
  subtitleColor = "#FFFFFF",
  minHeight = 320,
  contentMinHeight = 260,
  sectionClassName,
}: BannerSectionProps) {
  const t = useTranslations("bannerSection");
  const defaultSubtitle = t("defaultSubtitle");
  const resolvedSubtitle = subtitle ?? defaultSubtitle;
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
                className="max-w-4xl text-4xl font-regular uppercase tracking-[0.18em] text-white md:text-4xl"
                    style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}
              >
                {title}
              </h2>
            )}
            {resolvedSubtitle && (
              <p
                className="max-w-4xl text-base xl:text-2xl font-regular leading-relaxed "
                style={{
                  fontFamily: "var(--font-noto-sans), sans-serif",
                  color: subtitleColor,
                }}
              >
                {resolvedSubtitle}
              </p>
            )}
          </div>
        </div>
        </div>
      </section>
  );
}

export default BannerSection;
