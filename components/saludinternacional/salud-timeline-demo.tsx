"use client";

import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export function SaludTimelineDemo() {
  const data = [
    {
      title: (
        <span>
          <span className="text-[#006FC4] uppercase">salud </span>
          <span className="text-[#003163] uppercase">internacional individual</span>
        </span>
      ),
      content: (
        <div className="flex flex-col items-stretch gap-4">
          <div className="overflow-hidden rounded-3xl h-[220px] sm:h-[260px] md:h-[300px]">
            <Image
              src="/services/img-salud-corporativa.png"
              alt="Salud corporativa"
              width={600}
              height={600}
              className="w-full h-full rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-xl font-semibold text-[#006FC4] md:text-2xl">
              Mucho más que un plan de salud
            </p>
            <p className="text-sm leading-relaxed text-[#003163] md:text-base">
              Cobertura médica internacional con acceso a redes globales de
              prestadores y atención médica de primer nivel para personas y
              familias.
            </p>
          </div>
          <div>
            <p className="mb-2 text-lg font-semibold text-[#006FC4] md:text-xl">
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
          <span className="text-[#006FC4] uppercase">salud </span>
          <span className="text-[#003163] uppercase">corporativa</span>
        </span>
      ),
      content: (
        <div className="flex flex-col items-stretch gap-4">
          <div className="overflow-hidden rounded-3xl h-[220px] sm:h-[260px] md:h-[300px]">
            <Image
              src="/services/img-salud-corporativa.png"
              alt="Salud corporativa"
              width={600}
              height={600}
              className="w-full h-full rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-xl font-semibold text-[#006FC4] md:text-2xl">
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
