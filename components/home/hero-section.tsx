"use client";

import { useTranslations } from "next-intl";
import { ButtonPrimary } from "../ui/button-primary";
import { ButtonSecondary } from "../ui/button-secondary";
import { FeatureBar } from "../ui/feature-bar";
import AnimatedHeadline from "../ui/animated-headline";
import { FadeInUp } from "../ui/fade-in-up";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const scrollToSection = (id: string) => {
  if (typeof window === "undefined") return;
  const element = document.getElementById(id);
  if (!element) return;

  gsap.to(window, {
    duration: 1,
    ease: "power2.out",
    scrollTo: { y: element, offsetY: 80 },
  });
};

export function HeroSection() {
  const t = useTranslations();
  return (
    <section className="relative w-full bg-background">
      {/* Wrapper con borde redondeado que contiene video, overlay y contenido */}
      <div className="relative min-h-screen w-full overflow-hidden rounded-b-4xl">
        {/* Background video */}
        <video
          src="/seguros-vida-ifs-broker.webm"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover rounded-b-4xl"
        />

        {/* Dark blue overlay */}
        <div className="absolute inset-0 bg-[#033163]/50 rounded-b-4xl" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-8 pt-32 md:px-12 lg:px-16">
          <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-end">
              <h1 className="text-balance text-4xl font-regular text-[#FEFEFE]" style={{ fontFamily: '"Zalando Sans"' }}>
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
                    href="#cotiza"
                    hover="hover:bg-[#FEFEFE] hover:border-[#FEFEFE] hover:text-[#033163]"
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection("cotiza");
                    }}
                  >
                    {t("heroPlanificacion.quoteLifeInsurance")}
                  </ButtonPrimary>
                  <ButtonSecondary
                    href="#agenda"
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
