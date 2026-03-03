import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: (
        <span>
          <span className="text-[#006FC4]">Seguro </span>
          <span className="text-[#003163]">de vida</span>
        </span>
      ),
      content: (
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="Seguro de vida"
              width={600}
              height={400}
              className="h-48 md:h-56 lg:h-64 w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-sm md:text-base font-semibold text-[#006FC4]">
              Protección económica para tu familia ante imprevistos.
            </p>
            <p className="text-xs md:text-sm text-[#003163] leading-relaxed">
              Permite sostener ingresos y cubrir gastos del hogar cuando una
              ausencia inesperada afecta la estabilidad económica, resguardando
              proyectos como educación, vivienda y planificación a largo plazo.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span>
          <span className="text-[#006FC4]">Enfermedades </span>
          <span className="text-[#003163]">críticas</span>
        </span>
      ),
      content: (
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="Enfermedades críticas"
              width={600}
              height={400}
              className="h-48 md:h-56 lg:h-64 w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-sm md:text-base font-semibold text-[#006FC4]">
              Respaldo financiero ante diagnósticos complejos.
            </p>
            <p className="text-xs md:text-sm text-[#003163] leading-relaxed">
              Brinda un capital para afrontar tratamientos, cambios en el estilo
              de vida o pausas laborales, evitando que la preocupación económica
              se sume al proceso de recuperación.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span>
          <span className="text-[#006FC4]">Enfermedades </span>
          <span className="text-[#003163]">terminales</span>
        </span>
      ),
      content: (
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="Enfermedades terminales"
              width={600}
              height={400}
              className="h-48 md:h-56 lg:h-64 w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-sm md:text-base font-semibold text-[#006FC4]">
              Acompañamiento en etapas de alta sensibilidad.
            </p>
            <p className="text-xs md:text-sm text-[#003163] leading-relaxed">
              Facilita recursos para cuidados especiales, orden patrimonial y
              tranquilidad familiar, permitiendo enfocarse en lo verdaderamente
              importante en momentos delicados.
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
