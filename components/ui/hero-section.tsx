import Image from "next/image"
import { ShieldCheck } from "lucide-react"
import Link from "next/link"

const features = [
  "Asesoramiento personalizado",
  "Relacion a largo plazo",
  "Respaldo internacional",
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/3 h-[140%] w-[400px] rotate-12 bg-[#0d3b7a]/20" />
        <div className="absolute -top-20 left-1/2 h-[140%] w-[300px] -rotate-6 bg-[#1a5bb5]/10" />
        <div className="absolute -top-20 right-1/4 h-[140%] w-[250px] rotate-[20deg] bg-[#0d3b7a]/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-8 pt-32 md:px-12 lg:px-16">
        {/* Main content area */}
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div className="flex flex-col justify-end">
            <h1 className="text-balance text-4xl font-regular  text-[#FEFEFE] ">
              Planificacion financiera internacional para proteger lo que importa
            </h1>
            <p className="mt-6 max-w-xl text-[20px] leading-relaxed text-[#FEFEFE] font-regular noto-sans">
              Acompanamos a personas y empresas en la toma de decisiones financieras clave, combinando seguros, inversion y salud con una vision a largo plazo y respaldo internacional.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col items-start justify-end gap-6 lg:items-end">
            <p className="max-w-lg text-center text-[20px] leading-relaxed text-[#FEFEFE] font-regular noto-sans lg:text-right">
              Planificamos el presente con una vision estrategica orientada al futuro, disenando soluciones financieras personalizadas para cada etapa de la vida.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="#cotiza"
                className="inline-flex items-center justify-center rounded-full bg-[#006fc4] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#006fc4]/90"
              >
                Cotiza seguro de vida
              </Link>
              <Link
                href="#agenda"
                      className="inline-flex items-center justify-center rounded-full border-2 border-foreground/40 bg-transparent px-8 py-3 text-sm font-semibold text-[#006fc4] transition-colors hover:border-foreground/70 hover:bg-foreground/5"
              >
                Agenda una reunion
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom feature bar */}
        <div className="flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 rounded-xl border border-foreground/10 bg-[#0a1628]/60 px-8 py-4 backdrop-blur-sm md:gap-10">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
