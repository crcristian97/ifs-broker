"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const fontStyle = { fontFamily: "var(--font-heading)" };
export function SaludTimelineDemo() {
  const t = useTranslations("saludTimeline");
  const data = [
    {
      title: (
        <span>
         <span className="text-[#006FC4] uppercase tracking-widest" style={fontStyle}>{t("tab1Title")}</span>
         <span className="text-[#003163] uppercase tracking-widest" style={fontStyle}>{t("tab1Highlight")}</span>
        </span>
      ),
      content: (
        <div className="flex flex-col items-stretch gap-4">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/services/salud-internacional-ifs.webp"
              alt={t("tab1Block1Title")}
              width={480}
              height={480}
              className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-2xl font-regular text-[white] md:text-3xl ">
              {t("tab1Block1Title")}
            </p>
            <p className="text-sm text-[white] md:text-base">
              {t("tab1Block1Desc")}
            </p>
          </div>
          <div>
            <p className="mb-2 text-2xl font-regular text-[white] md:text-3xl ">
              {t("tab1Block2Title")}
            </p>
            <p className="text-sm text-[white] md:text-base">
              {t("tab1Block2Desc")}
            </p>
          </div>
        </div>
      ),
      buttonHref: "/seguros-de-vida#capital-estimado",
    },
    {
      title: (
        <span>
          <span className="text-[#006FC4] uppercase tracking-widest" style={fontStyle}>{t("tab2Title")}</span>
          <span className="text-[#003163] uppercase tracking-widest" style={fontStyle}>{t("tab2Highlight")}</span>
        </span>
      ),
      content: (
        <div className="flex flex-col items-stretch gap-4">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/services/retiro-salud-internacional-broker.webp"
              alt={t("tab2Block1Title")}
              width={480}
              height={480}
              className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
              <p className="mb-2 text-3xl font-regular text-[white] md:text-3xl ">
              {t("tab2Block1Title")}
            </p>
            <p className="text-sm text-[white] md:text-base">
              {t("tab2Block1Desc")}
            </p>
          </div>
          <div>
            <p className="text-sm text-[white] md:text-base">
              {t("tab2Block2Desc")}
            </p>
          </div>
        </div>
      ),
      buttonHref: "/seguros-de-vida#capital-estimado",
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
