import Image from "next/image";
import { AnimatedGridPattern } from "@/components/ui/background-wedosection";
import { FadeInUp } from "@/components/ui/fade-in-up";
import { cn } from "@/lib/utils";

type HeroSubsectionProps = {
  titlePrefix?: string;
  titleHighlight?: string;
  titleSuffix?: string;
  description?: string;
  descriptionHighlight?: string;
  imageSrc?: string;
  imageAlt?: string;
  invertTitleColors?: boolean;
  /** Imagen más ancha (ej. página Salud Internacional) */
  largeImage?: boolean;
  /** Video de fondo en /public (ej. /seguros-vida-ifs-broker.webm). Sin esto se usa degradado + grid. */
  videoSrc?: string;
};

// Reusable hero for product sections (life insurance, retirement funds, etc.)
export function HeroSubsection({
  titlePrefix = "Protección para tu familia,",
  titleHighlight = "Tranquilidad para vos",
  titleSuffix = "",
  description = "",
  descriptionHighlight = "",
  imageSrc = "/seguro/seguro-de-vida.webp",
  imageAlt = "Seguro de vida",
  invertTitleColors = false,
  largeImage = false,
  videoSrc,
}: HeroSubsectionProps) {
  const prefixColorClass = invertTitleColors ? "text-[#91d8f7]" : "text-[#FFFFFF]";
  const highlightColorClass = invertTitleColors ? "text-[#FFFFFF]" : "text-[#91d8f7]";
  return (
    <section className="relative w-full">
      {/* Misma rejilla que Navbar: px-4 md:px-8 → max-w-[1400px] mx-auto */}
      <div className="px-4 pb-8 md:px-8">
        <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-b-4xl bg-[#033163]">
          {videoSrc ? (
            <>
              <video
                className="absolute inset-0 z-0 h-full w-full object-cover rounded-b-4xl"
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
              />
              <div className="absolute inset-0 z-1 rounded-b-4xl bg-[#033163]/80" />
            </>
          ) : (
            <>
              <div
                className="absolute inset-0 z-0 rounded-b-4xl "
                style={{
                  background:
                    "linear-gradient(135deg, #0a467e 0%, #033163 75%, #033163 100%)",
                }}
              />
              <AnimatedGridPattern
                numSquares={50}
                maxOpacity={0.15}
                duration={4}
                repeatDelay={1}
                className={cn(
                  "absolute inset-0 z-1 mask-[radial-gradient(600px_circle_at_center,white,transparent)]",
                  "opacity-60",
                )}
              />
            </>
          )}

          <div className="relative z-10 flex min-h-[880px] w-full flex-col justify-center px-6 pb-8 pt-24 md:pt-28">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left column: text */}
              <FadeInUp>
                <div className="flex flex-col justify-end">
                  <h1 className="max-w-2xl mb-4 text-4xl font-regular tracking-tight leading-none text-[#FFFFFF]">
                    <span className={prefixColorClass}>{titlePrefix}</span>
                    <br />
                    <span className={highlightColorClass}>{titleHighlight}</span>
                    {titleSuffix && (
                      <>
                        {" "}
                        <span className="text-[#FFFFFF]">{titleSuffix}</span>
                      </>
                    )}
                  </h1>
                  <p className="max-w-2xl mb-4 font-regular text-[#FFFFFF] text-xl">
                    {description}
                  </p>
                  <p className="max-w-2xl mb-4 font-regular text-[#FFFFFF] text-xl">
                    {descriptionHighlight}
                  </p>
                </div>
              </FadeInUp>

              {/* Right column: image */}
              <FadeInUp delay={0.2} className="hidden lg:flex items-center justify-end">
                <div
                  className={cn(
                    "relative w-full",
                    largeImage ? "max-w-2xl xl:max-w-[44rem]" : "max-w-md",
                  )}
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={largeImage ? 880 : 600}
                    height={largeImage ? 880 : 600}
                    className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
                    priority
                    sizes={
                      largeImage
                        ? "(min-width: 1280px) 44rem, (min-width: 1024px) 42rem, 100vw"
                        : "(min-width: 1024px) 28rem, 100vw"
                    }
                  />
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
