"use client";

import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export function SaludTimelineDemo() {
  const data = [
    {
      title: (
        <span>
          <span className="text-[#006FC4] uppercase" style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}>salud </span>
          <span className="text-[#003163] uppercase" style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}>internacional individual</span>
        </span>
      ),
      content: (
        <div className="flex flex-col items-stretch gap-4">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/services/img-salud-corporativa.png"
              alt="Salud corporativa"
              width={600}
              height={600}
              className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-3xl font-regular text-[#006FC4] md:text-3xl" style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}>
              Mucho más que un plan de salud
            </p>
            <p className="text-sm leading-relaxed text-[#003163] md:text-base">
              Cobertura médica internacional con acceso a redes globales de
              prestadores y atención médica de primer nivel para personas y
              familias.
            </p>
          </div>
          <div>
            <p className="mb-2 text-3xl font-regular text-[#006FC4] md:text-3xl" style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}>
              Interconsultas médicas internacionales
            </p>
            <p className="text-sm leading-relaxed text-[#003163] md:text-base">
              El sistema de interconsultas médicas permite que diagnósticos y
              tratamientos sean evaluados por más de 50.000 médicos
              especialistas de prestigio internacional, brindando una segunda
              opinión experta que aporta mayor claridad y seguridad al momento
              de tomar decisiones médicas.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span>
          <span className="text-[#006FC4] uppercase" style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}>salud </span>
          <span className="text-[#003163] uppercase" style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}>corporativa</span>
        </span>
      ),
      content: (
        <div className="flex flex-col items-stretch gap-4">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/services/img-salud-corporativa.png"
              alt="Salud corporativa"
              width={600}
              height={600}
              className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-3xl font-regular text-[#006FC4] md:text-3xl" style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}>
              Protección estratégica para tu equipo
            </p>
            <p className="text-sm leading-relaxed text-[#003163] md:text-base">
              Soluciones de salud internacional diseñadas para empresas,
              orientadas a proteger a ejecutivos clave, fortalecer los
              beneficios corporativos y asegurar la continuidad operativa.
            </p>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-[#003163] md:text-base">
              Cobertura médica global que protege a ejecutivos y colaboradores
              en cualquier lugar del mundo, aportando seguridad y tranquilidad
              tanto al profesional como a la empresa.
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
