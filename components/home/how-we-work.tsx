import { FocusRail, type FocusRailItem } from "@/components/ui/focus-reail";

const DEMO_ITEMS: FocusRailItem[] = [
  {
    id: 1,
    title: "Diagnóstico inicial",
    description:
      "Realizamos un análisis de necesidades, evaluando la situación actual personal, familiar o empresarial, identificando prioridades en función de objetivos a corto, mediano y largo plazo",
    meta: "Paso 1",
    content: (
      <div className="flex h-full w-full flex-col justify-center gap-1 bg-white px-6 py-6">
        <div className="flex flex-col gap-2">
          <div className="flex h-16 w-16 items-center  justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] text-2xl font-semibold text-[#006FC4]">
            1
          </div>
          <h3 className="text-xl font-semibold text-[#006FC4] py-2">
            Diagnóstico inicial
          </h3>
          <p className="text-sm leading-relaxed text-[#033163]">
            Realizamos un análisis de necesidades, evaluando la situación actual personal, familiar o empresarial, identificando prioridades en función de objetivos a corto, mediano y largo plazo
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Diseño de estrategia",
    description:
      "Presentamos alternativas claras y comparables, en un lenguaje simple y sin tecnicismos innecesarios.",
    meta: "Paso 2",
    content: (
      <div className="flex h-full w-full flex-col justify-center gap-1 bg-white px-6 py-6">
        <div className="flex flex-col gap-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] text-2xl font-semibold text-[#006FC4]">
            2
          </div>
          <h3 className="text-xl font-semibold text-[#006FC4]">
            Diseño de estrategia
          </h3>
          <p className="text-sm leading-relaxed text-[#033163]">
            Presentamos alternativas claras y comparables, en un lenguaje simple y sin tecnicismos innecesarios.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Evaluación y decisión",
    description:
      "Acompañamos el proceso de decisión respetando los tiempos de cada cliente.",
    meta: "Paso 3",
    content: (
      <div className="flex h-full w-full flex-col justify-center gap-1 bg-white px-6 py-6">
        <div className="flex flex-col gap-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] text-2xl font-semibold text-[#006FC4]">
            3
          </div>
          <h3 className="text-xl font-semibold text-[#006FC4]">
            Evaluación y decisión
          </h3>
          <p className="text-sm leading-relaxed text-[#033163]">
                Acompañamos el proceso de decisión respetando los tiempos de cada cliente.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Seguimiento a largo plazo",
    description:
      "La planificación evoluciona con el tiempo; nosotros también te acompañamos en cada etapa.",
    meta: "Paso 4",
    content: (
      <div className="flex h-full w-full flex-col justify-center gap-1 bg-white px-6 py-6">
        <div className="flex flex-col gap-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] text-2xl font-semibold text-[#006FC4]">
            4
          </div>
          <h3 className="text-xl font-semibold text-[#006FC4]">
            Seguimiento a largo plazo
          </h3>
          <p className="text-sm leading-relaxed text-[#033163]">
            La planificación financiera evoluciona con el tiempo. Nuestro acompañamiento también.
          </p>
        </div>
      </div>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section className="w-full bg-white py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-6 md:px-12 lg:px-16">
        {/* Title */}
        <div className="mb-12 text-center max-w-4xl">
          <h4 className="text-3xl font-regular text-[#033163] mb-2">
            Cómo trabajamos
          </h4>
          <p
            className="text-[#033163] text-4xl md:text-5xl font-regular leading-tight"
            style={{ fontFamily: "var(--font-oxanium), sans-serif" }}
          >
            PROCESO CLARO, ESTRATÉGICO Y{" "}
            <span className="text-[#006FC4]">ADAPTADO A CADA CLIENTE.</span>
          </p>
        </div>

        {/* The Component */}
        <div className="w-full">
          <FocusRail items={DEMO_ITEMS} autoPlay={false} loop={true} />
        </div>
      </div>
    </section>
  );
}
