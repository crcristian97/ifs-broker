"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ConocerMasButton } from './button-terciary';
import Image from 'next/image';

// --- Data for each slide ---
const slidesData = [
  {
    title: "Seguro de Personas",
    subttitle: "",
    description: "Nuestro enfoque se basa en el diseño de estrategias financieras que se adaptan y evolucionan junto a cada cliente.",
    image: "/services/seguro-de-vida.webp",
    textColor: "#000000",
    textButton: "Conocer más"
  },
  {
    title: "Retiro e Inversión",
    subttitle: "Construí tu returo con inversiones globales",
    description: "Brindamos soluciones de ahorro e inversión orientadas a mediano y largo plazo, pensadas para complementar ingresos futuros, planificar estudios y potenciar el crecimiento de tu capital con visión estratégica",
    image: "/services/retiro-e-inversion.webp",
    textColor: "#000000",
    textButton: "Conocer más"
  },
  {
    title: "Salud Internacional",
    subttitle: "",
    description: "Cobertura médica internacional para personas y empresas que buscan acceso a atención de alta calidad y protección ante gastos médicos mayores..",
    image: "https://images.unsplash.com/photo-1608306448197-e83633f1261c?q=80&w=1974&auto=format&fit=crop",
    textColor: "#000000",
    textButton: "Conocer más"
  },
 
];

// --- Main App Component ---
export function ScrollingFeatureShowcase() {
  // State to track the currently active slide index
  const [activeIndex, setActiveIndex] = useState(0);
  // Ref to the main scrollable container
  const scrollContainerRef = useRef(null);
  // Ref to the sticky content panel
  const stickyPanelRef = useRef(null);

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

  // Styles for the grid pattern on the right side
  const gridPatternStyle = {
    '--grid-color': 'rgba(0, 0, 0, 0.12)',
    backgroundImage: `
      linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
    `,
    backgroundSize: '3.5rem 3.5rem',
  };

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
            <div className="relative flex flex-col justify-center p-8 md:p-16 border-r border-[#006FC4]">
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
                    <h2 className="text-5xl font-regular tracking-tighter text-[#006FC4] uppercase " style={{ fontFamily: 'var(--font-oxanium), sans-serif' }}>{slide.title}</h2>
                    <p className="mt-6 text-xl max-w-md text-[#033163] font-regular" style={{ fontFamily: 'var(--font-noto-sans), sans-serif' }}>{slide.description}</p>
                    <div className="mt-6">
                      <ConocerMasButton textButton={slide.textButton || "Conocer más"} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Get Started Button */}
              <div className="absolute bottom-16 left-16">
                <a
                  href="#get-started"
                  className="px-10 py-4 bg-black text-white font-semibold rounded-full uppercase tracking-wider hover:bg-gray-800 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Right Column: Image Content with Grid Background */}
            <div className="hidden md:flex items-center justify-center p-8" style={gridPatternStyle}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-black/5">
                <div 
                  className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateY(-${activeIndex * 100}%)` }}
                >
                  {slidesData.map((slide, index) => (
                    <div key={index} className="w-full h-full">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={1000}
                        height={1000}
                        className="h-full w-full object-contain"
                      />
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
