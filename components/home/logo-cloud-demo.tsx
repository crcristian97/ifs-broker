import { cn } from "@/lib/utils";
import { LogoCloud } from "@/components/ui/logo-cloud-4";

// Las imágenes de Unsplash se ven si la URL es correcta y no hay políticas de CORS o restricciones de acceso. 
// Pero para logos reales, normalmente se usan SVGs o imágenes de marcas reales con fondos transparentes. 
// Las URLs de ejemplo de Unsplash pueden tardar un poco en cargar, pero sí deberían verse en producción.

const logos = [
  {
    src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=80&q=80",
    alt: "Developer workspace",
    width: 80,
    height: 40,
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=80&q=80",
    alt: "Team collaboration",
    width: 80,
    height: 40,
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-ff4dc5b30f50?auto=format&fit=crop&w=80&q=80",
    alt: "Strategy meeting",
    width: 80,
    height: 40,
  },
  {
    src: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=80&q=80",
    alt: "Financial planning",
    width: 80,
    height: 40,
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=80&q=80",
    alt: "Business partnership",
    width: 80,
    height: 40,
  },
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=80&q=80",
    alt: "Analytics dashboard",
    width: 80,
    height: 40,
  },
];

export default function LogoCloudSection() {
  return (
    <section className="relative w-full py-16 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="relative mx-auto w-full max-w-[1400px]">
        <div
          aria-hidden="true"
          className={cn(
            "-top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
            // Ajusta la opacidad del fondo para que sea más ténue
            "bg-[radial-gradient(ellipse_at_center,rgba(3,49,99,0.08),transparent_70%)]",
            "blur-[30px]",
          )}
        />

        <div className="relative w-full">
          <h4 className="mb-7 text-center flex flex-col items-center gap-2">
            <span className="text-5xl text-[#033163] font-bold leading-tight" style={{ fontFamily: 'var(--font-oxanium), sans-serif' }}><span className="text-[#006FC4]">RESPALDO INTERNACIONAL Y</span> SOLIDEZ FINANCIERA</span>
            <p className="text-xl font-regular mt-3 text-[#033163] max-w-xl">
              Trabajamos con compañías de primer nivel, elegidas por su estabilidad financiera, trayectoria y alcance global.
            </p>
          </h4>

          <LogoCloud logos={logos} />
          {/* Texto institucional institucional debajo del LogoCloud que ocupa todo el width */}
         
        </div>
      </div>
    </section>
  );
}

