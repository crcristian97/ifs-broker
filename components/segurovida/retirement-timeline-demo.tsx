"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const fontStyle = { fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' };

export function RetirementTimelineDemo() {
  const t = useTranslations("retirementTimeline");
  const data = [
    {
      title: (
        <span>
          <span className="text-[#006FC4]" style={fontStyle}>{t("tab1Title")}</span>
          <span className="text-[#003163]" style={fontStyle}>{t("tab1Highlight")}</span>
        </span>
      ),
      content: (
        <div className="flex flex-col gap-4 items-stretch">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/retiro/img-fondos-de-retiro.webp"
              alt={t("tab1Desc1")}
              width={600}
              height={600}
              className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-3xl font-regular text-[#006FC4]" style={fontStyle}>
              {t("tab1Desc1")}
            </p>
            <p className="text-lg text-[#003163] leading-relaxed">
              {t("tab1Desc2")}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span>
          <span className="text-[#006FC4]" style={fontStyle}>{t("tab2Title")}</span>
        </span>
      ),
      content: (
        <div className="flex flex-col gap-4 items-stretch">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/retiro/img-inversiones.webp"
              alt={t("tab2Desc1")}
              width={600}
              height={600}
              className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-3xl font-regular text-[#006FC4]" style={fontStyle}>
              {t("tab2Desc1")}
            </p>
            <p className="text-lg text-[#003163] leading-relaxed">
              {t("tab2Desc2")}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span>
          <span className="text-[#006FC4]" style={fontStyle}>{t("tab3Title")}</span>
          <span className="text-[#003163]" style={fontStyle}>{t("tab3Highlight")}</span>
        </span>
      ),
      content: (
        <div className="flex flex-col gap-4 items-stretch">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/retiro/fondos-para-estudio.webp"
              alt={t("tab3Desc1")}
              width={600}
              height={600}
              className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-3xl font-regular text-[#006FC4]" style={fontStyle}>
              {t("tab3Desc1")}
            </p>
            <p className="text-lg text-[#003163] leading-relaxed">
              {t("tab3Desc2")}
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
