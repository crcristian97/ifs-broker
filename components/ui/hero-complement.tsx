"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { ButtonPrimary } from "@/components/ui/button-primary";
import { ButtonSecondary } from "@/components/ui/button-secondary";
import { FadeInUp } from "@/components/ui/fade-in-up";
import { cn } from "@/lib/utils";
import { siteContainer } from "@/lib/site-layout";

export type HeroComplementProps = {
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix?: string;
  description?: string;
  descriptionHighlight?: string;
  /** Ruta en /public (ej. /retiro/v-retiro-subtitulo.webm) */
  videoSrc: string;
  /** Paridad con HeroSubsection; no afecta el layout de este hero. */
  hideImage?: boolean;
};

export function HeroComplement({
  titlePrefix,
  titleHighlight,
  titleSuffix = "",
  description = "",
  descriptionHighlight = "",
  videoSrc,
}: HeroComplementProps) {
  const t = useTranslations();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.play().catch(() => {});
  }, [videoSrc]);

  return (
    <section className="relative w-full overflow-x-hidden">
      <div className="pb-8">
        <div className="relative w-full overflow-hidden rounded-b-4xl bg-[#033163]">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <video
              ref={videoRef}
              className="absolute inset-0 z-0 h-full w-full object-cover"
              src={videoSrc}
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>

          <div className="absolute inset-0 z-2 bg-[#033163]/50" />

          <div
            className={cn(
              siteContainer,
              "relative z-10 flex min-h-[min(100svh,55rem)] flex-col justify-end pb-8 pt-24 md:pt-28",
            )}
          >
            <div className="mb-8 flex max-w-4xl flex-col items-start gap-6 lg:mb-12">
              <h1
                className="text-xl font-regular tracking-widest text-[#FEFEFE] sm:text-2xl lg:text-3xl xl:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <span className="text-[#ffffff]">{titlePrefix}</span>
                <br />
                <span className="text-[#91D8F7]">{titleHighlight}</span>
                {titleSuffix ? (
                  <>
                    {" "}
                    <span className="text-[#ffffff]">{titleSuffix}</span>
                  </>
                ) : null}
              </h1>
              {description ? (
                <p className="max-w-3xl font-regular text-base text-[#FEFEFE] sm:text-lg md:text-xl">
                  {description}
                </p>
              ) : null}
              {descriptionHighlight ? (
                <p className="max-w-3xl font-regular text-base text-[#FEFEFE] sm:text-lg md:text-xl">
                  {descriptionHighlight}
                </p>
              ) : null}
              <FadeInUp delay={0.35}>
                <div className="flex flex-col gap-3">
                  <ButtonPrimary
                    href="/seguros-de-vida#cotiza"
                    hover="hover:bg-[#FEFEFE] hover:border-[#FEFEFE] hover:text-[#033163]"
                  >
                    {t("heroPlanificacion.quoteLifeInsurance")}
                  </ButtonPrimary>
                  <ButtonSecondary
                    href="https://calendly.com/administracion-ifs-broker/30min"
                    target="_blank"
                    hover="hover:bg-[#91D8F7] hover:border-[#91D8F7] hover:text-[#006FC4]/60"
                  >
                    {t("footer.scheduleMeeting")}
                  </ButtonSecondary>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
