import ElegantCarousel from "../ui/elegant-carousel";
import { AnimatedGridPattern } from "../ui/background-wedosection";
import { cn } from "@/lib/utils";

export default function ServiceSection() {
  return (
    <section className="relative isolate w-full min-h-[420px] overflow-hidden bg-gradient-to-b from-[#E8F1F9] via-[#F4F8FC] to-white px-4 py-16 md:px-8 md:py-20 lg:px-16 rounded-t-4xl">
      {/* Fondo: grid + brillo más visible (sin opacity global que lo apague) */}
      <AnimatedGridPattern
        numSquares={32}
        maxOpacity={0.42}
        duration={4}
        repeatDelay={1}
        className={cn(
          "z-0",
          // Máscara más amplia para que se note casi todo el ancho del bloque
          "mask-[radial-gradient(ellipse_120%_100%_at_50%_35%,white,transparent)]",
          // Líneas del grid un poco más marcadas
          "stroke-[#91D8F7]/70",
        )}
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <ElegantCarousel />
      </div>
    </section>
  );
}
