import { ButtonPrimary } from "../ui/button-primary"
import { ButtonSecondary } from "../ui/button-secondary"
import { FeatureBar } from "../ui/feature-bar"
import AnimatedHeadline from "../ui/animated-headline"
import { FadeInUp } from "../ui/fade-in-up"

export function HeroSection() {
  return (
    <section className="relative w-full bg-background">
      {/* Wrapper con borde redondeado que contiene video, overlay y contenido */}
      <div className="relative min-h-screen w-full overflow-hidden rounded-b-4xl">
        {/* Background video */}
        <video
          src="/seguros-vida-ifs-broker.webm"
          autoPlay
          loop
          muted
          playsInline
          // El video siempre se ajusta al contenedor redondeado
          className="absolute inset-0 h-full w-full object-cover rounded-b-4xl"
        />

        {/* Dark blue overlay */}
        <div className="absolute inset-0 bg-[#033163]/50 rounded-b-4xl" />


        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-8 pt-32 md:px-12 lg:px-16">
          {/* Main content area */}
          <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left column */}
            <div className="flex flex-col justify-end">
              <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl font-regular text-[#FEFEFE]">
                <AnimatedHeadline
                  text="Planificacion financiera internacional para proteger lo que importa"
                  as="h1"
                  delay={0.2}
                />
              </h1>
              <h2 className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-[#FEFEFE] font-regular noto-sans">
                <AnimatedHeadline
                  text="Acompanamos a personas y empresas en la toma de decisiones financieras clave, combinando seguros, inversion y salud con una vision a largo plazo y respaldo internacional."
                  as="h2"
                  delay={0.9}
                />
              </h2>
            </div>

            {/* Right column */}
            <div className="flex flex-col items-start justify-end gap-6 lg:items-end">
              <AnimatedHeadline
                text="Planificamos el presente con una vision estrategica orientada al futuro, disenando soluciones financieras personalizadas para cada etapa de la vida."
                as="h3"
                delay={2.0}
              />
              <FadeInUp delay={2.0}>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <ButtonPrimary
                    href="#cotiza"
                    hover="hover:bg-[#FEFEFE] hover:border-[#FEFEFE] hover:text-[#033163]"
                  >
                    Cotiza seguro de vida
                  </ButtonPrimary>  
                  <ButtonSecondary    
                    href="#agenda"
                    hover="hover:bg-[#91D8F7] hover:border-[#91D8F7] hover:text-[#006FC4]/60"
                  >
                    Agenda una reunion
                  </ButtonSecondary>
                </div>
              </FadeInUp>
            </div>
          </div>

          {/* Bottom feature bar */}
          <FadeInUp delay={2.8}>
            <div className="flex justify-center">
              <FeatureBar />
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
