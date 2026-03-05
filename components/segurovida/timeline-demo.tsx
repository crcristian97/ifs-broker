"use client";
import Image from "next/image";
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
        <div className="flex flex-col gap-4 items-stretch">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/seguro/img-seguro de vida.webp"
              alt="Seguro de vida"
              width={600}
              height={600}
              className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xl sm:text-2xl md:text-3xl font-semibold text-[#006FC4]">
              Protección financiera ante el fallecimiento del asegurado.
            </p>
            <p className="mb-3 text-lg sm:text-xl md:text-2xl font-semibold text-[#003163]">
              Protección para tu familia cuando más lo necesita
            </p>
            <p className="text-lg text-[#003163] leading-relaxed">
              Permite cubrir obligaciones, proteger el patrimonio y brindar liquidez inmediata, asegurando el mantenimiento del hogar y la continuidad de proyectos como la educación.
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
        <div className="flex flex-col gap-4 items-stretch">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/seguro/img-enfermedades-criticas.webp"
              alt="Seguro de vida"
              width={600}
              height={600}
              className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xl sm:text-2xl md:text-3xl font-semibold text-[#006FC4]">
              Coberturas que brindan liquidez inmediata ante el diagnóstico de enfermedades graves específicas.
            </p>
            <p className="text-lg text-[#003163] leading-relaxed">
             Permite afrontar tratamientos, cubrir gastos médicos y compensar ingresos afectados, para enfocarse en la recuperación sin descuidar la dinámica y organización familiar.
            </p>
          </div>
        </div>
      ),
    },
    {
        title: (
          <span>
            <span className="text-[#006FC4]">Incapacidad </span>
          </span>
        ),
        content: (
          <div className="flex flex-col gap-4 items-stretch">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/seguro/img-incapacidad.webp"
                alt="Seguro de vida"
                width={600}
                height={600}
                className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
              />
            </div>
            <div>
              <p className="mb-3 text-xl sm:text-2xl md:text-3xl font-semibold text-[#006FC4]">
                Protección económica ante incapaicdad total o parcial que afecte la generación de ingresos.
              </p>
              <p className="text-lg text-[#003163] leading-relaxed">
                Permite sostener ingresos y cubrir gastos del hogar cuando una incapacidad impide trabajar, protegiendo la estabilidad familiar y profesional.
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
        <div className="flex flex-col gap-4 items-stretch">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/seguro/img-enfermedad-terminal.webp"
              alt="Seguro de vida"
              width={600}
              height={600}
              className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xl sm:text-2xl md:text-3xl font-semibold text-[#006FC4]">
              Acompañamiento en etapas de alta sensibilidad.
            </p>
            <p className="text-lg text-[#003163] leading-relaxed">
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
