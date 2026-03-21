"use client";

import { useTranslations } from "next-intl";
import { Globe } from "@/components/home/experience-globe-section";
import { cn } from "@/lib/utils";

export function HeroGlobe() {
  const t = useTranslations("heroGlobe");
  return (
    <section
      className="w-full"
      style={{
        background:
          "linear-gradient(135deg, #0a467e 0%, #033163 75%, #033163 100%)",
      }}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-6 py-16",
          "md:flex-row md:items-center md:gap-12 md:px-12",
          "lg:gap-16 lg:px-16",
        )}
      >
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <h2
            className="mb-4 text-3xl font-regular leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            <span className="text-[#91d8f7]">{t("title1")}</span>
            <span className="text-white">{t("title2")}</span>
          </h2>
          <p
            className="text-base text-white sm:text-lg"
            style={{ fontFamily: "var(--font-noto-sans), sans-serif" }}
          >
            {t("description")}
          </p>
        </div>

        {/* Globo a la derecha, más grande */}
        <div className="flex min-w-0 flex-1 items-center justify-center md:justify-end">
          <div className="relative aspect-square w-full max-w-[min(100%,420px)] sm:max-w-[min(100%,480px)] md:max-w-[min(100%,520px)]">
            <Globe className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroGlobe;

