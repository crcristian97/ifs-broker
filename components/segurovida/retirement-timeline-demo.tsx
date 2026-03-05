"use client";

import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export function RetirementTimelineDemo() {
  const data = [
    {
      title: (
        <span>
          <span className="text-[#006FC4]">FONDOS </span>
          <span className="text-[#003163]">DE RETIRO</span>
        </span>
      ),
      content: (
        <div className="flex flex-col gap-4 items-stretch">
          <div className="overflow-hidden rounded-3xl h-[220px] sm:h-[260px] md:h-[300px]">
            <Image
              src="/retiro/img-fondos-de-retiro.webp"
              alt="Fondos de retiro"
              width={600}
              height={600}
              className="w-full h-full rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xl sm:text-2xl md:text-3xl font-semibold text-[#006FC4]">
              Construcción de ingresos futuros para el retiro
            </p>
            <p className="text-lg text-[#003163] leading-relaxed">
              Herramientas diseñadas para generar y complementar ingresos
              futuros, con alternativas flexibles según el horizonte elegido y
              las metas personales.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span>
          <span className="text-[#006FC4]">INVERSIONES</span>
        </span>
      ),
      content: (
        <div className="flex flex-col gap-4 items-stretch">
          <div className="overflow-hidden rounded-3xl h-[220px] sm:h-[260px] md:h-[300px]">
            <Image
              src="/retiro/img-inversiones.webp"
              alt="Inversiones"
              width={600}
              height={600}
              className="w-full h-full rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xl sm:text-2xl md:text-3xl font-semibold text-[#006FC4]">
              Capital en movimiento, con dirección estratégica
            </p>
            <p className="text-lg text-[#003163] leading-relaxed">
              Soluciones de inversión orientadas al crecimiento del capital,
              mediante estrategias diversificadas que combinan planificación,
              protección y acceso a mercados internacionales.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span>
          <span className="text-[#006FC4]">FONDOS </span>
          <span className="text-[#003163]">PARA ESTUDIOS</span>
        </span>
      ),
      content: (
        <div className="flex flex-col gap-4 items-stretch">
          <div className="overflow-hidden rounded-3xl h-[220px] sm:h-[260px] md:h-[300px]">
            <Image
              src="/retiro/fondos-para-estudio.webp"
              alt="Fondos para estudios"
              width={600}
              height={600}
              className="w-full h-full rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xl sm:text-2xl md:text-3xl font-semibold text-[#006FC4]">
              Invertir en educación es invertir en el futuro
            </p>
            <p className="text-lg text-[#003163] leading-relaxed">
              Planes de ahorro que permiten anticipar y asegurar el
              financiamiento de estudios universitarios o de posgrado, tanto en
              el país como en el exterior.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

