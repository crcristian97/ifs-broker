import { ButtonPrimary } from "../ui/button-primary"
import { ButtonSecondary } from "../ui/button-secondary"
import { AnimatedGridPattern } from "../ui/background-wedosection"
import { cn } from "@/lib/utils"

export function HeroPlanificacion() {
    return (
      <section className="w-full bg-white min-h-screen mt-16 md:mt-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Top Hero - Dark Blue with Grid */}
        <div className="relative bg-[#0B2A4A] px-8 py-16 md:px-12 md:py-20 overflow-hidden rounded-t-[56px] rounded-b-none shadow-lg">
        {/* Grid pattern overlay usando AnimatedGridPattern */}
        <AnimatedGridPattern
          numSquares={50}
          maxOpacity={0.15}
          duration={4}
          repeatDelay={1}
          className={cn(
            "mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
            "opacity-60"
          )}
        />

        {/* Diagonal lines overlay */}
      
  
          <div className="relative z-10 text-center">
            <p className="text-white text-base sm:text-lg font-bold tracking-wide mb-6 sm:mb-8">
              Una planificación financiera inteligente comienza por proteger lo esencial
            </p>
            <h3
              className="text-3xl sm:text-4xl md:text-5xl font-regular uppercase tracking-tighter leading-tight"
              style={{
                fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              <span className="text-[#91D8F7]">Diseñar una estrategia para proteger a la familia </span>asegurar la continuidad de la  <span className="text-[#91D8F7]"> empresa </span> y planificar el  <span className="text-[#91D8F7]">patrimonio </span> con visión a <span className="text-[#91D8F7]">largo plazo</span>.
            </h3>
          </div>
        </div>
  
        {/* Bottom Content - Light */}
        <div
          className="bg-white px-6 py-10 md:px-12 md:py-14 rounded-b-[56px] shadow-lg border-x-2 border-b-2 border-[#91D8F7]"
          style={{
            background: "linear-gradient(to bottom, #f0f5fa, #ffffff)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            {/* Left Column */}
            <div className="flex-1">
              <p className="text-[#1a2b3d] text-xl sm:text-2xl md:text-3xl font-regular leading-relaxed text-center md:text-left">
                {"En IFS desarrollamos "}
                <span className="text-[#1479B7] font-regular">
                  soluciones patrimoniales personalizadas de alcance internacional
                </span>
                {", diseñadas en función de los objetivos  y etapas de vida de cada cliente."}
              </p>
            </div>
  
            {/* Right Column */}
            <div className="flex-1 flex flex-col items-center md:items-end gap-5">
              <p className="text-[#000A15] text-base sm:text-lg font-regular leading-relaxed text-center md:text-right max-w-[400px]">
                Cada propuesta se construye sobre un diagnóstico patrimonial integral que permite definir
                prioridades, evaluar riesgos y proyectar estabilidad en el tiempo.
              </p>
              <div className="flex w-full flex-col gap-3 items-stretch md:items-end md:w-auto">
                <ButtonPrimary
                  href="#cotiza"
                  hover="hover:bg-[#FEFEFE] hover:border-[#FEFEFE] hover:text-[#033163]"
                  className="w-full md:w-auto justify-center"
                >
                  Cotizá tu seguro de vida
                </ButtonPrimary>  
                <ButtonSecondary
                  href="#agenda"
                  hover="hover:bg-[#91D8F7] hover:border-[#91D8F7] hover:text-[#006FC4]/60"
                  className="w-full md:w-auto justify-center"
                >
                  Habla con un asesor
                </ButtonSecondary>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    )
  }
  