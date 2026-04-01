"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ButtonPrimary } from "../ui/button-primary";
import { ButtonSecondary } from "../ui/button-secondary";
import { FeatureBar } from "../ui/feature-bar";
import AnimatedHeadline from "../ui/animated-headline";
import { FadeInUp } from "../ui/fade-in-up";
import { cn } from "@/lib/utils";

const HERO_VIDEOS = [
  "/hero/video-ifs.webm",
  "/hero/ifs-broker-video.webm",
  "/hero/ifs-broker.webm",
] as const;

const AUTO_ADVANCE_MS = 8000;

export function HeroSection() {
  const t = useTranslations();
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearAutoAdvance = useCallback(() => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  }, []);

  const scheduleAutoAdvance = useCallback(() => {
    clearAutoAdvance();
    autoTimerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % HERO_VIDEOS.length);
    }, AUTO_ADVANCE_MS);
  }, [clearAutoAdvance]);

  useEffect(() => {
    scheduleAutoAdvance();
    return () => clearAutoAdvance();
  }, [scheduleAutoAdvance, clearAutoAdvance]);

  useEffect(() => {
    videoRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === activeIndex) {
        el.play().catch(() => {});
      } else {
        el.pause();
      }
    });
  }, [activeIndex]);

  const goToSlide = useCallback(
    (index: number) => {
      setActiveIndex(index);
      scheduleAutoAdvance();
    },
    [scheduleAutoAdvance],
  );

  return (
    <section className="relative w-full overflow-x-hidden">
      {/* Video y overlay a todo el ancho del viewport; el texto sigue la rejilla max-w + padding como el Navbar */}
      <div className="pb-8">
        <div className="relative w-full overflow-hidden rounded-b-4xl bg-[#033163]">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            {HERO_VIDEOS.map((src, index) => (
              <video
                key={src}
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={src}
                autoPlay={index === 0}
                loop
                muted
                playsInline
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out",
                  index === activeIndex ? "z-1 opacity-100" : "z-0 opacity-0",
                )}
              />
            ))}
          </div>

          <div className="absolute inset-0 z-2 bg-[#033163]/50" />

          <div className="relative z-10 mx-auto flex min-h-[min(100svh,55rem)] w-full max-w-[1400px] flex-col justify-start px-4 pb-8 pt-24 md:px-8 md:pt-28 xl:min-h-[880px] xl:justify-end">
            <div className="mb-8 flex max-w-4xl flex-col items-start gap-6 lg:mb-12">
              <AnimatedHeadline
                text={t("heroSection.title")}
                as="h1"
                delay={0.2}
                className="text-[#FEFEFE] text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-regular leading-tight tracking-widest uppercase"
                style={{ fontFamily: "var(--font-heading)" }}
              />
              <FadeInUp delay={2.0}>
                <div className="flex flex-col gap-3">
                  <ButtonPrimary
                    href="/seguros-de-vida#cotiza"
                    hover="hover:bg-[#FEFEFE] hover:border-[#FEFEFE] hover:text-[#033163]"
                  >
                    {t("heroPlanificacion.quoteLifeInsurance")}
                  </ButtonPrimary>
                  <ButtonSecondary
                    href="https://calendly.com/administracion-ifs-broker/30min"
                    target="_blank"
                    hover="hover:bg-[#91D8F7] hover:border-[#91D8F7] hover:text-[#006FC4]/60"
                  >
                    {t("footer.scheduleMeeting")}
                  </ButtonSecondary>
                </div>
              </FadeInUp>
            </div>

            {/* Indicadores del carrusel de videos */}
            <div
              className="mb-8 flex justify-center gap-3"
              role="tablist"
              aria-label={t("heroSection.videoCarouselLabel")}
            >
              {HERO_VIDEOS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={t("heroSection.videoBulletLabel", { n: index + 1 })}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "h-3 w-3 rounded-full border-2 border-[#FEFEFE]/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FEFEFE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#033163]/40",
                    index === activeIndex
                      ? "scale-125 border-[#FEFEFE] bg-[#FEFEFE] shadow-[0_0_12px_rgba(254,254,254,0.6)]"
                      : "bg-transparent hover:border-[#FEFEFE]/80 hover:bg-[#FEFEFE]/20",
                  )}
                />
              ))}
            </div>

            <FadeInUp delay={2.8}>
              <div className="flex justify-center">
                <FeatureBar />
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
