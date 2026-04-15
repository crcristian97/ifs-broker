"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { siteContainer } from "@/lib/site-layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ExperienceGlobeSection() {
  const t = useTranslations("experienceGlobe");
  const textRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.from(textRef.current.children, {
          x: -50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      if (backgroundRef.current) {
        gsap.from(backgroundRef.current, {
          scale: 0.96,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: backgroundRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full min-h-[780px] overflow-hidden bg-black md:min-h-[660px]">
      <div ref={backgroundRef} className="absolute inset-0" aria-hidden="true">
        <video
          className="h-full w-full object-contain object-center"
          src="/videos/video_mundo.webm"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 " />
      </div>

      <div
        className={cn(
          siteContainer,
          "relative z-10 flex justify-center pt-20 pb-12 md:pt-28 md:pb-16",
        )}
      >
        <div ref={textRef} className="flex min-w-0 max-w-3xl flex-col items-start justify-center text-left">
          <h2
            className="mb-4 text-2xl leading-tight font-regular tracking-widest text-[#91D8F7] sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
            
          >
            {t("title1")} <span className="text-[#FFFFFF]">{t("title2")}</span>
          </h2>

          <p
            className="mb-4 text-base leading-relaxed text-[#FFFFFF] sm:text-lg md:text-xl"
            style={{ fontFamily: "var(--font-noto-sans)" }}
          >
            {t("description1")}
            <span className="text-[#91D8F7]">{t("description1highlight")}</span>
          </p>
          <p className="text-sm leading-relaxed text-[#FFFFFF] sm:text-base md:text-lg">
            {t("description2")}
          </p>
        </div>
      </div>
    </section>
  );
}
