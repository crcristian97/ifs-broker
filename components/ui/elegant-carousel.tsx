"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ConocerMasButton } from "./button-terciary";

interface SlideData {
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  imageUrl: string;
  buttonText: string;
  buttonHref: string;
}

export default function ElegantCarousel() {
  const t = useTranslations("scrollingStory");
  const knowMore = t("knowMore");

  const slides: SlideData[] = [
    {
      title: t("slide1Title"),
      subtitle: t("slide1Subtitle"),
      description: t("slide1Description"),
      imageUrl: "/services/seguro-de-vida.webp",
      accent: "#006FC4",
      buttonText: knowMore,
      buttonHref: "/seguros-de-vida",
    },
    {
      title: t("slide2Title"),
      subtitle: t("slide2Subtitle"),
      description: t("slide2Description"),
      imageUrl: "/services/retiro-e-inversion.webp",
      accent: "#006FC4",
      buttonText: knowMore,
      buttonHref: "/fondos-de-retiro",
    },
    {
      title: t("slide3Title"),
      subtitle: t("slide3Subtitle"),
      description: t("slide3Description"),
      imageUrl: "/services/salud-internacional.webp",
      accent: "#006FC4",
      buttonText: knowMore,
      buttonHref: "/salud-internacional",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const SLIDE_DURATION = 6000;
  const TRANSITION_DURATION = 800;

  const goToSlide = useCallback(
    (index: number, dir?: "next" | "prev") => {
      if (isTransitioning || index === currentIndex) return;
      setDirection(dir || (index > currentIndex ? "next" : "prev"));
      setIsTransitioning(true);
      setProgress(0);

      setTimeout(() => {
        setCurrentIndex(index);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, TRANSITION_DURATION / 2);
    },
    [isTransitioning, currentIndex]
  );

  const goNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex, "next");
  }, [currentIndex, goToSlide, slides.length]);

  const goPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex, "prev");
  }, [currentIndex, goToSlide, slides.length]);

  useEffect(() => {
    if (isPaused) return;

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);

    intervalRef.current = setInterval(() => {
      goNext();
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentIndex, isPaused, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="relative w-full max-w-6xl mx-auto rounded-3xl bg-white/80 shadow-lg overflow-hidden border border-slate-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${currentSlide.accent}18 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-12 space-y-6">
          <div
            className={`flex items-center text-xs font-medium tracking-[0.25em] uppercase text-slate-500 transition-opacity duration-500 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="h-px w-8 bg-slate-300 mr-3" />
            <span>
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <div className="space-y-3">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-medium tracking-widest uppercase  text-[#006FC4] transition-all duration-500  ${
                isTransitioning
                  ? direction === "next"
                    ? "opacity-0 translate-y-2"
                    : "opacity-0 -translate-y-2"
                  : "opacity-100 translate-y-0"
              }`}
              style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}
            >
              {currentSlide.title}
            </h2>
            <p
              className={`text-2xl font-regular  text-[#033163] transition-opacity duration-500 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              {currentSlide.subtitle}
            </p>
          </div>

          <p
            className={`text-base md:text-lg text-[#033163] leading-relaxed max-w-md transition-opacity duration-500 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {currentSlide.description}
          </p>

          <div className="mt-4">
            <ConocerMasButton textButton={currentSlide.buttonText} href={currentSlide.buttonHref}   />
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={goPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FC4] focus-visible:ring-offset-2 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006FC4] focus-visible:ring-offset-2 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative h-80 md:h-full bg-slate-900/5 flex items-center justify-center">
          <div
            className={`relative w-[88%] max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-slate-900/5 transition-all duration-500 ${
              isTransitioning
                ? direction === "next"
                  ? "opacity-0 translate-x-4"
                  : "opacity-0 -translate-x-4"
                : "opacity-100 translate-x-0"
            }`}
          >
            <Image
              src={currentSlide.imageUrl}
              alt={currentSlide.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 320px, 50vw"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${currentSlide.accent}22 0%, transparent 50%)`,
              }}
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-slate-100 bg-white/80 px-4 py-3 md:px-6">
        <div className="flex flex-wrap gap-2 md:gap-3">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`group flex items-center gap-2 rounded-full px-3 py-1.5 text-xs md:text-sm transition-all ${
                index === currentIndex
                  ? "bg-[#006FC4]/10 text-[#006FC4]"
                  : "text-slate-500 hover:bg-slate-100/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="h-1 w-14 rounded-full bg-slate-200 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#006FC4] transition-[width] duration-150"
                  style={{
                    width:
                      index === currentIndex
                        ? `${progress}%`
                        : index < currentIndex
                        ? "100%"
                        : "0%",
                  }}
                />
              </div>
              <span className="truncate max-w-[120px] text-left">
                {slide.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

