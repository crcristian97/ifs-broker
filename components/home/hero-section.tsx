import Image from "next/image"
import { ButtonPrimary } from "../ui/button-primary"
import { ButtonSecondary } from "../ui/button-secondary"
import { FeatureBar } from "../ui/feature-bar"
import AnimatedHeadline from "../ui/animated-headline"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background rounded-b-3xl">
      {/* Background images */}
      <div className="absolute inset-0 flex">
        {/* Left image */}
        <div className="relative w-1/2">
          <Image
            src="/images/hero-meeting-1.jpg"
            alt="Equipo profesional en reunion"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Right image */}
        <div className="relative w-1/2">
          <Image
            src="/images/hero-meeting-2.jpg"
            alt="Asesores financieros revisando documentos"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Dark blue overlay */}
      <div className="absolute inset-0 bg-[#071a3a]/80" />

      {/* Diagonal geometric accent shapes */}

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-8 pt-32 md:px-12 lg:px-16">
        {/* Main content area */}
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div className="flex flex-col justify-end">
            <h1 className="text-balance text-4xl font-regular text-[#FEFEFE] ">
              <AnimatedHeadline text="Planificacion financiera internacional para proteger lo que importa" as="h1" delay={0.3}/>
            </h1>
            <h2 className="mt-6 max-w-xl text-[20px] leading-relaxed text-[#FEFEFE] font-regular noto-sans">
              <AnimatedHeadline text="Acompanamos a personas y empresas en la toma de decisiones financieras clave, combinando seguros, inversion y salud con una vision a largo plazo y respaldo internacional." as="h2" delay={1.5}/>
            </h2>
          </div>

          {/* Right column */}
          <div className="flex flex-col items-start justify-end gap-6 lg:items-end">
            <AnimatedHeadline text="Planificamos el presente con una vision estrategica orientada al futuro, disenando soluciones financieras personalizadas para cada etapa de la vida." as="h3" delay={0.5}/>
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
          </div>
        </div>

        {/* Bottom feature bar */}
        <div className="flex justify-center">
            <FeatureBar />
        </div>
      </div>
    </section>
  )
}
