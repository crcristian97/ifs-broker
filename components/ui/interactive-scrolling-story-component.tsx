"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { ConocerMasButton } from "./button-terciary";
import Image from "next/image";

export function ScrollingFeatureShowcase() {
  const t = useTranslations("scrollingStory");
  const knowMore = t("knowMore");
  const slidesData = [
    {
      title: t("slide1Title"),
      subttitle: t("slide1Subtitle"),
      description: t("slide1Description"),
      image: "/services/seguro-de-vida.webp",
      textColor: "#000000",
      textButton: knowMore,
      bgColor: "#f3f7fb",
    },
    {
      title: t("slide2Title"),
      subttitle: t("slide2Subtitle"),
      description: t("slide2Description"),
      image: "/services/retiro-e-inversion.webp",
      textColor: "#000000",
      textButton: knowMore,
      bgColor: "#f0f5ff",
    },
    {
      title: t("slide3Title"),
      subttitle: t("slide3Subtitle"),
      description: t("slide3Description"),
      image: "/services/salud-internacional.webp",
      textColor: "#000000",
      textButton: knowMore,
      bgColor: "#f5fbff",
    },
  ];
  // State to track the currently active slide index
  const [activeIndex, setActiveIndex] = useState(0);
  // Ref to the main scrollable container
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  // Ref to the sticky content panel
  const stickyPanelRef = useRef<HTMLDivElement | null>(null);

  // --- Scroll Handler ---
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollableHeight = container.scrollHeight - window.innerHeight;
      const stepHeight = scrollableHeight / slidesData.length;
      const newActiveIndex = Math.min(
        slidesData.length - 1,
        Math.floor(container.scrollTop / stepHeight)
      );
      setActiveIndex(newActiveIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Dynamic styles for the background and text color transitions
  const dynamicStyles = {
    backgroundColor: slidesData[activeIndex].bgColor,
    color: slidesData[activeIndex].textColor,
    transition: 'background-color 0.7s ease, color 0.7s ease',
  };

  // Background image para el panel derecho
  const gridPatternStyle = {
    backgroundImage: 'url("/services/fondo-servicios-home.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } as const;

  return (
    <div 
      ref={scrollContainerRef}
      className="h-screen w-full overflow-y-auto"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div style={{ height: `${slidesData.length * 100}vh` }}>
        <div ref={stickyPanelRef} className="sticky top-0 h-screen w-full flex flex-col items-center justify-center" style={dynamicStyles}>
          <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto">
            
            {/* Left Column: Text Content, Pagination & Button */}
            <div className="relative flex flex-col justify-center p-8 md:p-16 ">
              {/* Pagination Bars */}
              <div className="absolute top-16 left-16 flex space-x-2">
                {slidesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                        const container = scrollContainerRef.current;
                        if(container){
                            const scrollableHeight = container.scrollHeight - window.innerHeight;
                            const stepHeight = scrollableHeight / slidesData.length;
                            container.scrollTo({ top: stepHeight * index, behavior: 'smooth' });
                        }
                    }}
                    className={`h-1 rounded-full transition-all duration-500 ease-in-out ${
                      index === activeIndex ? 'w-12 bg-[#006FC4]' : 'w-6 bg-[#006FC4]/20'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="relative h-64 w-full">
                {slidesData.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === activeIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <h2
                      className="text-5xl font-regular tracking-tighter text-[#006FC4] uppercase "
                      style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}
                    >
                      {slide.title}
                    </h2>
                    <p className="mt-6 text-xl max-w-md text-[#033163] font-regular" style={{ fontFamily: 'var(--font-noto-sans), sans-serif' }}>{slide.description}</p>
                    <div className="mt-6">
                      <ConocerMasButton textButton={slide.textButton || knowMore} />
                    </div>
                  </div>
                ))}
              </div>
             
            </div>

            {/* Right Column: Image Content with Grid Background */}
            <div className="hidden md:flex items-center justify-center p-8" style={gridPatternStyle}>
              <div className="relative w-full h-full max-h-[520px] rounded-2xl overflow-hidden">
                <div 
                  className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateY(-${activeIndex * 100}%)` }}
                >
                  {slidesData.map((slide, index) => (
                    <div
                      key={index}
                      className="flex w-full h-full items-center justify-center"
                    >
                      <div className="rounded-[22px] bg-white/70 backdrop-blur-md shadow-[0_6px_46px_0_rgba(43,70,109,0.17)] p-2 md:p-3">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          width={400}
                          height={400}
                          className="h-[420px] w-auto md:h-[420px] object-cover rounded-[18px]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
