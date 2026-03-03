import Image from "next/image";
import { AnimatedGridPattern } from "@/components/ui/background-wedosection";
import { cn } from "@/lib/utils";

// Hero de "Seguros de vida" con la misma estructura de márgenes y contenedor
// que el Hero principal (`HeroSection`), pero con fondo claro e imagen estática.
export function HeroSubsection() {
  return (
    <section
      className="relative w-full"
      style={{
        background:
          "linear-gradient(135deg, #0a467e 0%, #033163 75%, #033163 100%)",
      }}
    >
      {/* Wrapper con alto completo y bordes redondeados abajo, igual que HeroSection */}
      <div className="relative min-h-screen w-full overflow-hidden rounded-b-4xl bg-transparent">
        {/* Grid animado de fondo */}
        <AnimatedGridPattern
          numSquares={50}
          maxOpacity={0.15}
          duration={4}
          repeatDelay={1}
          className={cn(
            "absolute inset-0 mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
            "opacity-60"
          )}
        />

        {/* Contenido centrado con mismo ancho y paddings que HeroSection */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 pb-8 pt-32 md:px-12 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Columna izquierda: texto */}
            <div className="flex flex-col justify-end">
              <h1 className="max-w-2xl mb-4 text-4xl font-regular tracking-tight leading-none text-[#FFFFFF]">
                Protección para tu familia,
                <br />
                 <span className="text-[#91d8f7]">Tranquilidad para vos</span>
              </h1>
              <p className="max-w-2xl mb-4 font-regular text-[#FFFFFF] text-xl">
                Los seguros de vida permiten resguardar los ingresos, sostener
                el nivel de vida familiar y proteger proyectos como la educación
                cuando más se necesita.
              </p>
              <p className="max-w-2xl font-regular text-[#FFFFFF] text-base">
                Más que una cobertura, es una decisión de cuidado que permite
                anticiparse y proteger la estabilidad del hogar a largo plazo.
              </p>
            </div>

            {/* Columna derecha: imagen */}
            <div className="hidden lg:flex items-center justify-end">
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
      </div>
    </section>
  );
}

export default HeroSubsection;

