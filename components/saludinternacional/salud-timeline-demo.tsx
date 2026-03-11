"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const fontStyle = { fontFamily: '"Adagietto", "Zalando Sans"' };

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
              src="/services/img-salud-corporativa.png"
              alt={t("tab1Block1Title")}
              width={600}
              height={600}
              className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-2xl font-regular text-[#006FC4] md:text-3xl ">
              {t("tab1Block1Title")}
            </p>
            <p className="text-sm leading-relaxed text-[#003163] md:text-base">
              {t("tab1Block1Desc")}
            </p>
          </div>
          <div>
            <p className="mb-2 text-2xl font-regular text-[#006FC4] md:text-3xl ">
              {t("tab1Block2Title")}
            </p>
            <p className="text-sm leading-relaxed text-[#003163] md:text-base">
              {t("tab1Block2Desc")}
            </p>
          </div>
        </div>
      ),
      href: "/seguros-de-vida#cotiza",
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
              src="/services/img-salud-corporativa.png"
              alt={t("tab2Block1Title")}
              width={600}
              height={600}
              className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
              <p className="mb-2 text-3xl font-regular text-[#006FC4] md:text-3xl ">
              {t("tab2Block1Title")}
            </p>
            <p className="text-sm leading-relaxed text-[#003163] md:text-base">
              {t("tab2Block1Desc")}
            </p>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-[#003163] md:text-base">
              {t("tab2Block2Desc")}
            </p>
          </div>
        </div>
      ),
      href: "/seguros-de-vida#cotiza",
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
