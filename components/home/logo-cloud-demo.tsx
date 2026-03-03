import { cn } from "@/lib/utils";
import { LogoCloud } from "@/components/ui/logo-cloud-4";

// Las imágenes de Unsplash se ven si la URL es correcta y no hay políticas de CORS o restricciones de acceso. 
// Pero para logos reales, normalmente se usan SVGs o imágenes de marcas reales con fondos transparentes. 
// Las URLs de ejemplo de Unsplash pueden tardar un poco en cargar, pero sí deberían verse en producción.

const logos = [
  {
    src: "/logo/best-doctor-insurance.webp",
    alt: "Best Doctor Insurance",
    width: 140,
    height: 70,
  },
  {
    src: "/logo/ole-best.webp",
    alt: "Ole Best",
    width: 140,
    height: 70,
  },
  {
    src: "/logo/muniche-re.webp",
    alt: "Muniche Re",
    width: 140,
    height: 70,
  },
  {
    src: "/logo/rga.webp",
    alt: "RGA",
    width: 140,
    height: 70,
  },
  {
    src: "/logo/partner-re.webp",
    alt: "Partner Re",
    width: 140,
    height: 70,
  },
  {
    src: "/logo/swiss-re.webp",
    alt: "Swiss Re",
    width: 140,
    height: 70,
  },
  {
    src: "/logo/investors-trust-responsibility.webp",
    alt: "Investors Trust Responsibility",
    width: 140,
    height: 70,
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
            <span className="text-5xl text-[#033163] font-regular leading-tight" style={{ fontFamily: 'var(--font-oxanium), sans-serif' }}><span className="text-[#006FC4]">RESPALDO INTERNACIONAL Y</span> SOLIDEZ FINANCIERA</span>
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

