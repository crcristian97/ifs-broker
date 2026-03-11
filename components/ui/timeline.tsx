"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { ButtonPrimary } from "./button-primary";
import { ConocerMasButton } from "./button-terciary";

interface TimelineEntry {
  title: React.ReactNode;
  content: React.ReactNode;
  buttonPrimary?: string;
  buttonSecondary?: string;
  buttonHref?: string;
   buttonHrefSecondary?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const t = useTranslations();
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const pathname = usePathname();

  const scrollToCotiza = () => {
    if (typeof window === "undefined") return;
    const element = document.getElementById("cotiza");
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10 bg-[url('/services/fondo-servicios-especificos.webp')] "
          >
            {/* Columna izquierda: solo el punto de la línea de tiempo */}
            <div className="sticky z-40 top-40 self-start w-10 flex items-start justify-center">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#006FC4] border border-[#003163] p-2" />
              </div>
            </div>

            {/* Columna derecha: título + botones a la izquierda, tarjeta con imagen y texto a la derecha */}
            <div className="relative pl-12 pr-4 md:pl-16 w-full">
              <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] items-stretch">
                {/* Título + botones (columna izquierda) */}
                <div className="flex flex-col justify-center gap-6">
                  <h3 className="text-left text-5xl font-regular leading-tight">
                    {item.title}
                  </h3>
                  <div className="flex flex-col gap-3 max-w-xs">
                    <ButtonPrimary
                      href={item.buttonHref ?? "/seguros-de-vida#cotiza"}
                      className="px-5 py-2.5 text-xs md:text-sm"
                      onClick={(event) => {
                        // Solo hacemos scroll suave si ya estamos en la página que tiene el formulario
                        if (pathname.includes("/seguros-de-vida")) {
                          event.preventDefault();
                          scrollToCotiza();
                        }
                      }}
                    >
                      {item.buttonPrimary ?? t("heroPlanificacion.quoteLifeInsurance")}
                    </ButtonPrimary>
                    <ConocerMasButton
                      textButton={item.buttonSecondary ?? t("footer.scheduleMeeting")}
                      size="sm"
                      onClick={() => {
                        if (item.buttonHrefSecondary === "#investment-questionnaire" && pathname.includes("/fondos-de-retiro")) {
                          if (typeof window === "undefined") return;
                          const el = document.getElementById("investment-questionnaire");
                          if (el) {
                            el.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Tarjeta principal (columna derecha) */}
                <div className="flex justify-end">
                  <div className="w-full max-w-[640px] rounded-[32px] bg-cover bg-center shadow-[0_22px_60px_rgba(0,77,159,0.16)] border border-[#D4E7FF]/70 p-3 md:p-4 lg:p-6">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: `${height}px`,
          }}
          className="absolute left-5 md:left-5 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[#006FC4] via-[#003163] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
