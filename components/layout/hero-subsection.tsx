import Image from "next/image";
import { AnimatedGridPattern } from "@/components/ui/background-wedosection";
import { cn } from "@/lib/utils";

export function HeroSubsection() {
  return (
    <section className="bg-white pt-24 md:pt-32 xl:pt-36">
      {/* Fondo animado similar a HeroPlanificacion */}
      <div className="relative z-0">
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
        <div className="relative z-10 grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-12 xl:gap-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-regular tracking-tight leading-none text-[#033163] md:text-5xl xl:text-6xl">
              Protección para tu familia,
              <br />
              tranquilidad para vos
            </h1>
            <p className="max-w-2xl mb-6 font-regular text-[#033163] md:text-lg lg:text-xl">
              Los seguros de vida permiten resguardar los ingresos, sostener el
              nivel de vida familiar y proteger proyectos como la educación
              cuando más se necesita.
            </p>
            <p className="max-w-2xl mb-8 font-regular text-[#033163] md:text-lg lg:text-xl">
              Más que una cobertura, es una decisión de cuidado que permite
              anticiparse y proteger la estabilidad del hogar a largo plazo.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/seguro/seguro-de-vida.webp"
                alt="Seguro de vida"
                width={600}
                height={600}
                className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSubsection;

