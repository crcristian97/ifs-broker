"use client";

import { useTranslations } from "next-intl";
import { FeatureCard } from "../ui/feature-card";
import { FadeInUp } from "../ui/fade-in-up";
import { ShieldCheck, Handshake  } from "lucide-react";
import ElegantCarousel from "../ui/elegant-carousel";
import { ParticlesSkyBackground } from "../ui/particles-sky-background";
import { cn } from "@/lib/utils";
import { siteContainer } from "@/lib/site-layout";
export function WhatWeDoSection() {
  const t = useTranslations("whatWeDo");
  return (
    <section className="relative w-full overflow-hidden py-6">
      <ParticlesSkyBackground
        className="absolute! inset-0 z-0"
        variant="light"
        interactive={false}
      />
      <div
        className={cn(
          siteContainer,
          "relative z-10 flex flex-col justify-start pt-16 md:pt-8",
        )}
      >
        <FadeInUp>
          <h2 className="text-[#033163] text-xl sm:text-2xl md:text-3xl font-regular mb-3 sm:mb-4 text-center md:text-left">
            {t("label")} 
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <h3
            className="text-[#006FC4] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-regular mb-5 max-w-4xl tracking-widest"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("title")} <span className="text-[#033163]">{t("labelHighlight")}</span>
          </h3>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <p
            className="text-[#033163] text-base sm:text-lg md:text-xl mb-10 max-w-3xl font-regular"
            style={{ fontFamily: "var(--font-noto-sans), sans-serif" }}
          >
            {t("description")}
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-2 gap-6 w-full">
          <FadeInUp delay={0.45} className="h-full">
            <FeatureCard text={t("card1")} icon={<ShieldCheck className="w-6 h-6 text-[#033163]" />} />
          </FadeInUp>
          <FadeInUp delay={0.6} className="h-full">
            <FeatureCard text={t("card2")} icon={<Handshake className="w-6 h-6 text-[#033163]" />} />
          </FadeInUp>
        </div>
      </div>
      <div className="relative z-10 mt-10 md:mt-20">
        <ElegantCarousel />
      </div>
    </section>
  );
}
