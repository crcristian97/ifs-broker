import Image from "next/image";
import { AnimatedGridPattern } from "@/components/ui/background-wedosection";
import { cn } from "@/lib/utils";

type HeroSubsectionProps = {
  titlePrefix?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  imageSrc?: string;
  imageAlt?: string;
};

// Hero reutilizable para secciones de producto (seguros de vida, fondos de retiro, etc.)
export function HeroSubsection({
  titlePrefix = "Protección para tu familia,",
  titleHighlight = "Tranquilidad para vos",
  titleSuffix = "",
  imageSrc = "/seguro/seguro-de-vida.webp",
  imageAlt = "Seguro de vida",
}: HeroSubsectionProps) {
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
                <span className="text-[#FFFFFF]">{titlePrefix}</span>
                <br />
                <span className="text-[#91d8f7]">{titleHighlight}</span>
                {titleSuffix && (
                  <>
                    {" "}
                    <span className="text-[#FFFFFF]">{titleSuffix}</span>
                  </>
                )}
              </h1>
              <p className="max-w-2xl mb-4 font-regular text-[#FFFFFF] text-xl">
                Diseñamos estrategias de ahorro alineadas a objetivos personales, que integran inversiones con garantías y se estructuran en distintos plazos sgguún las necesiades de cada cliente.
              </p>
              
            </div>

            {/* Columna derecha: imagen */}
            <div className="hidden lg:flex items-center justify-end">
              <div className="relative w-full max-w-md">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
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

