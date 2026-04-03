import Image from "next/image";
import { AnimatedGridPattern } from "@/components/ui/background-wedosection";
import { FadeInUp } from "@/components/ui/fade-in-up";
import { cn } from "@/lib/utils";
import { heroVideoOffsetBelowNavbar, sitePaddingX } from "@/lib/site-layout";

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
  /** Oculta la imagen de la columna derecha (solo texto + glass). */
  hideImage?: boolean;
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
  hideImage = false,
}: HeroSubsectionProps) {
  const prefixColorClass = invertTitleColors ? "text-[#91D8F7]" : "text-[#ffffff]";
  const highlightColorClass = invertTitleColors ? "text-[#ffffff]" : "text-[#91D8F7]";
  return (
    <section className={cn("relative w-full", !videoSrc && "bg-[#033163]")}>
      <div
        className={cn(
          sitePaddingX,
          "pb-8",
          videoSrc && heroVideoOffsetBelowNavbar,
        )}
      >
        <div
          className={cn(
            "relative mx-auto w-full max-w-[1400px] overflow-hidden bg-[#033163]",
            videoSrc ? "rounded-t-xl rounded-b-4xl" : "rounded-b-4xl",
          )}
        >
          {videoSrc ? (
            <>
              <video
                className="absolute inset-0 z-0 h-full w-full object-cover rounded-t-xl rounded-b-4xl"
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
              />
              <div className="absolute inset-0 z-1 rounded-t-xl rounded-b-4xl bg-[#033163]/55" />
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

          <div
            className={cn(
              sitePaddingX,
              "relative z-10 flex w-full flex-col justify-end",
              videoSrc
                ? "min-h-[min(52svh,30rem)] pt-8 pb-8 md:min-h-[min(48svh,32rem)] md:pt-10 md:pb-10"
                : "min-h-[880px] pt-24 pb-10 md:pt-28 md:pb-14",
            )}
          >
            <div
              className={cn(
                "grid w-full gap-8 lg:gap-16 lg:items-start",
                hideImage ? "lg:grid-cols-1" : "lg:grid-cols-2",
              )}
            >
              {/* Left column: texto con glass (ligeramente más arriba; top evita choque con GSAP transform del FadeInUp) */}
              <FadeInUp>
                <div
                  className={cn(
                    "hero-subsection-glass relative -top-12 p-4 shadow-[0_18px_42px_-8px_rgba(3,49,99,0.22)] md:-top-18 md:p-6 lg:-top-24 lg:p-8",
                    hideImage && "max-w-3xl",
                  )}
                >
                  <div className="relative z-10 flex flex-col justify-start">
                    <h1 className="mb-4 text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-regular tracking-tight leading-none">
                      <span className={prefixColorClass}>{titlePrefix}</span>
                      <br />
                      <span className={highlightColorClass}>{titleHighlight}</span>
                      {titleSuffix && (
                        <>
                          {" "}
                          <span className="text-[#ffffff]">{titleSuffix}</span>
                        </>
                      )}
                    </h1>
                    {description ? (
                      <p
                        className={cn(
                          "font-regular text-base sm:text-lg md:text-xl text-[white]",
                          descriptionHighlight ? "mb-4" : "mb-0",
                        )}
                      >
                        {description}
                      </p>
                    ) : null}
                    {descriptionHighlight ? (
                      <p className="mb-0 font-regular text-base sm:text-lg md:text-xl text-[white]">{descriptionHighlight}</p>
                    ) : null}
                  </div>
                </div>
              </FadeInUp>

              {/* Right column: image */}
              {!hideImage && (
                <FadeInUp delay={0.2} className="hidden lg:flex items-start justify-end">
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
