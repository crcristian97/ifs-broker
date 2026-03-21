"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ButtonPrimary } from "@/components/ui/button-primary";
import { ConocerMasButton } from "@/components/ui/button-terciary";

export function HeroBanner() {
  const t = useTranslations("heroBanner");
  return (
    <section className="relative w-full overflow-hidden h-[1020px]">
      <div className="absolute inset-0">
        <Image
          src="/seguro/fondo-seguro-de-vida.webp"
          alt="Familia viajando en auto"
          fill
          priority
          className="object-cover opacity-80"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] h-full min-h-[520px] flex-col items-center justify-center px-6 md:flex-row md:items-center md:justify-center md:px-12 lg:px-16">
        <div className="flex flex-1 flex-col justify-center gap-8 items-center md:items-start">
          <h1
            className="max-w-xl text-4xl font-regular leading-tight tracking-[0.08em] text-[#033163] md:text-5xl"
            style={{ fontFamily: '"Adagietto", "Zalando Sans"' }}
          >
            {t("title")}
          </h1>

          <div className="relative flex flex-col gap-4 items-center md:items-start">
            <div className="relative inline-flex w-full max-w-xs">
              <ButtonPrimary
              target="_blank"
                href="https://calendly.com/administracion-ifs-broker/30min"
                className="w-full justify-center rounded-[14px] px-6 py-3  font-semibold"
              >
                {t("speakAdvisor")}
              </ButtonPrimary>
            </div>
          
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center md:justify-end">
          <div className="bg-gradient-to-br from-[#E5EEF5]/20 to-[#E5EEF5]/10 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full min-h-[220px] sm:min-h-[240px] flex flex-col backdrop-blur-md border border-white/40">
            <p
              className="text-xl leading-relaxed text-[#006FC4] md:text-2xl"
              style={{ fontFamily: "var(--font-noto-sans)" }}
            >
              {t("paragraph1")}
              <span className="block mt-2">
                {t("paragraph2")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;

