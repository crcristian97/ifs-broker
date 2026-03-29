"use client";

import { ReactNode, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { AnimatedGridPattern } from "@/components/ui/background-wedosection";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      className={
        sectionClassName ?? "w-full px-4 py-14 md:px-8 md:py-24"
      }
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center">
        <div
          className="relative w-full overflow-hidden rounded-[40px] px-6 py-16 border bg-[#e5eef5] md:px-16 md:py-24"
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
            ref={contentRef}
            className="relative z-10 flex flex-col items-center justify-center text-center gap-4"
            style={{ minHeight: contentMinHeight }}
          >
            {title && (
              <h2
                className="max-w-4xl text-4xl font-regular uppercase tracking-widest text-white md:text-4xl"
                    style={{ fontFamily: "var(--font-heading)" }}
              >
                {title}
              </h2>
            )}
            {resolvedSubtitle && (
              <p
                className="max-w-4xl text-2xl font-regular leading-relaxed "
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
