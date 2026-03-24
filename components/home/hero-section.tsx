"use client";

import { useTranslations } from "next-intl";
import { ButtonPrimary } from "../ui/button-primary";
import { ButtonSecondary } from "../ui/button-secondary";
import { FeatureBar } from "../ui/feature-bar";
import AnimatedHeadline from "../ui/animated-headline";
import { FadeInUp } from "../ui/fade-in-up";

export function HeroSection() {
  const t = useTranslations();
  return (
    <section className="relative w-full ">
      {/* Wrapper con borde redondeado que contiene video, overlay y contenido */}
      <div className="relative w-full overflow-hidden rounded-b-4xl bg-[#033163]">
        {/* Background video */}
        <video
          src="/seguros-vida-ifs-broker.webm"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover rounded-b-4xl"
        />

        {/* Dark blue overlay */}
        <div className="absolute inset-0 bg-[#033163]/80 rounded-b-4xl" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[880px] flex-col justify-end px-6 pb-8 pt-24 m md:px-12 md:pt-28 lg:px-16">
          <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-end">
              <h1  className="text-[#FEFEFE] text-3xl sm:text-4xl md:text-5xl font-regular mb-5 max-w-4xl leading-tight tracking-widest uppercase"
            style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif'}} >
                <AnimatedHeadline
                  text={t("heroSection.title")}
                  as="h1"
                  delay={0.2}
                />
              </h1>
              <h2 className="mt-6 max-w-xl text-[20px] leading-relaxed text-[#FEFEFE] font-regular" style={{ fontFamily: '"Zalando Sans"' }}>
                <AnimatedHeadline
                  text={t("heroSection.subtitle")}
                  as="h2"
                  delay={0.9}
                />
              </h2>
            </div>

            <div className="flex flex-col items-start justify-end gap-6 lg:items-end">
              <AnimatedHeadline
                text={t("heroSection.description")}
                as="h3"
                delay={2.0}
                style={{ fontFamily: '"Zalando Sans"' }}
              />
              <FadeInUp delay={2.0}>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
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

          <FadeInUp delay={2.8}>
            <div className="flex justify-center">
              <FeatureBar />
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
