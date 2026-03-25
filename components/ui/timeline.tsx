"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { ButtonPrimary } from "./button-primary";
import { ConocerMasButton } from "./button-terciary";
import { cn } from "@/lib/utils";

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
    <div
      className="w-full bg-[#F4F8FC] bg-[url('/services/fondo-servicios-especificos.webp')] bg-cover bg-center bg-no-repeat font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
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
                  <div className="flex w-full max-w-[220px] flex-col gap-2">
                    <ButtonPrimary
                      href={item.buttonHref ?? "/seguros-de-vida#cotiza"}
                      target={item.buttonHref?.startsWith("http") ? "_blank" : undefined}
                      className="flex h-8 w-full min-h-8 shrink-0 items-center justify-center px-3 py-0 text-center text-xs font-semibold leading-tight"
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
                      className="w-full"
                      href={item.buttonHrefSecondary?.startsWith("#") ? undefined : (item.buttonHrefSecondary ?? "https://calendly.com/administracion-ifs-broker/30min")}
                      target={item.buttonHrefSecondary?.startsWith("#") ? undefined : "_blank"}
                      onClick={() => {
                        if (item.buttonHrefSecondary?.startsWith("#")) {
                          if (typeof window === "undefined") return;
                          const el = document.getElementById(item.buttonHrefSecondary.slice(1));
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
                  <div
                    className={cn(
                      "relative w-full max-w-[640px] overflow-hidden rounded-[32px] p-3 md:p-4 lg:p-6",
                      "border border-white/70",
                      "bg-gradient-to-br from-white/55 via-white/35 to-[#e8f4ff]/45",
                      "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85),0_8px_32px_-4px_rgba(3,49,99,0.12),0_4px_16px_-2px_rgba(0,0,0,0.08)]",
                      "backdrop-blur-2xl backdrop-saturate-200 md:backdrop-blur-3xl",
                      "ring-1 ring-inset ring-white/50",
                      "before:pointer-events-none before:absolute before:inset-0 before:z-0 before:rounded-[32px] before:bg-[linear-gradient(135deg,rgba(255,255,255,0.55)_0%,transparent_50%,rgba(212,231,255,0.4)_100%)] before:content-['']",
                      "after:pointer-events-none after:absolute after:inset-px after:z-0 after:rounded-[31px] after:border after:border-white/45 after:content-['']",
                    )}
                  >
                    <div className="relative z-10">{item.content}</div>
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
