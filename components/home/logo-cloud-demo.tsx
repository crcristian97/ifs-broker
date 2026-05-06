"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { sitePaddingX } from "@/lib/site-layout";
import { LogoCloud } from "@/components/ui/logo-cloud-4";

// Las imágenes de Unsplash se ven si la URL es correcta y no hay políticas de CORS o restricciones de acceso. 
// Pero para logos reales, normalmente se usan SVGs o imágenes de marcas reales con fondos transparentes. 
// Las URLs de ejemplo de Unsplash pueden tardar un poco en cargar, pero sí deberían verse en producción.

const logos = [
  {
    src: "/logo/best-doctor-insurance.webp",
    alt: "Best Doctor Insurance",
    url: "https://www.bestdoctorsinsurance.com/",
    width: 240,
    height: 70,
  },
  {
    src: "/logo/ole-best.webp",
    alt: "Ole Best",
    url: "https://olelife.com/",
    width: 240,
    height: 70,
  },
  {
    src: "/logo/muniche-re.webp",
    alt: "Muniche Re",
    url: "https://www.munichre.com/en.html",
    width: 240,
    height: 70,
  },
  {
    src: "/logo/rga.webp",
    alt: "RGA",
    url: "https://www.rgare.com/",
    width: 240,
    height: 70,
  },
  {
    src: "/logo/partner-re.webp",
    alt: "Partner Re",
    url: "https://www.partnerre.com/",
    width: 240,
    height: 70,
  },
  {
    src: "/logo/swiss-re.webp",
    alt: "Swiss Re",
    url: "https://www.swissre.com/",
    width: 240,
    height: 70,
  },
  {
    src: "/logo/investors-trust-responsibility.webp",
    alt: "Investors Trust Responsibility",
    url: "https://www.investors-trust.com/",
    width: 240,
    height: 70,
  },
];

export default function LogoCloudSection() {
  const t = useTranslations("logoCloud");
  return (
    <section className="relative w-full  overflow-hidden">
      <div className="relative mx-auto w-full">
        <div
          aria-hidden="true"
          className={cn(
            "-top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
            "bg-[radial-gradient(ellipse_at_center,rgba(3,49,99,0.08),transparent_70%)]",
            "blur-[30px]",
          )}
        />

        <div className="relative w-full">
          <div className={cn("mx-auto w-full max-w-[1400px]", sitePaddingX)}>
            <h4 className="mb-7 flex flex-col items-center gap-2 text-center">
              <span
                className="text-3xl font-regular tracking-widest text-[#033163] sm:text-4xl md:text-4xl lg:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <span className="text-[#006FC4]">{t("title")}</span>
                {t("titleHighlight")}
              </span>
              <p className="mt-3 w-full max-w-[42rem] font-regular text-base text-[#000000] sm:text-lg md:text-lg lg:text-lg">
                {t("subtitle")}
              </p>
            </h4>
          </div>

          <LogoCloud logos={logos} />
          {/* Texto institucional institucional debajo del LogoCloud que ocupa todo el width */}
         
        </div>
      </div>
    </section>
  );
}

