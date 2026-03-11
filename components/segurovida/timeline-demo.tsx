"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const fontStyle = { fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' };

export function TimelineDemo() {
  const t = useTranslations("timelineDemo");
  const tSolutions = useTranslations("solutions");
  const data = [
    {
      title: (
        <span>
          <span className="text-[#006FC4] tracking-widest uppercase" style={fontStyle}>{t("tab1Title")}</span>
          <span className="text-[#003163] tracking-widest uppercase" style={fontStyle}>{t("tab1Highlight")}</span>
        </span>
      ),
      content: (
        <div className="flex flex-col gap-4 items-stretch">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/seguro/img-seguro de vida.webp"
              alt={tSolutions("seguroVida.title")}
              width={600}
              height={600}
              className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-2xl md:text-2xl font-regular text-[#006FC4]" >
              {tSolutions("seguroVida.description")}
            </p>
            <p className="mb-2 text-xl md:text-xl font-regular text-[#003163]" >
              {t("tab1Subtitle")}
            </p>
            <p className="text-base md:text-lg font-regular text-[#003163] leading-relaxed">
              {t("tab1Body")}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span>
          <span className="text-[#006FC4] tracking-widest uppercase" style={fontStyle}>{t("tab2Title")}</span>
          <span className="text-[#003163] tracking-widest uppercase" style={fontStyle}>{t("tab2Highlight")}</span>
        </span>
      ),
      content: (
        <div className="flex flex-col gap-4 items-stretch">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/seguro/img-enfermedades-criticas.webp"
              alt={t("tab2Title") + t("tab2Highlight")}
              width={600}
              height={600}
              className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-2xl md:text-2xl font-regular text-[#006FC4]" >
              {t("tab2Desc")}
            </p>
            <p className="text-base md:text-lg  font-regular text-[#003163] leading-relaxed">
              {t("tab2Body")}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span>
          <span className="text-[#006FC4] tracking-widest uppercase" style={fontStyle}>{t("tab3Title")}</span>
          {t("tab3Highlight") ? <span className="text-[#003163] tracking-widest uppercase" style={fontStyle}>{t("tab3Highlight")}</span> : null}
        </span>
      ),
      content: (
        <div className="flex flex-col gap-4 items-stretch">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/seguro/img-incapacidad.webp"
              alt={t("tab3Title")}
              width={600}
              height={600}
              className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-2xl md:text-2xl font-regular text-[#006FC4]" >
              {t("tab3Desc")}
            </p>
            <p className="text-base md:text-lg font-regular text-[#003163] leading-relaxed">
              {t("tab3Body")}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span>
          <span className="text-[#006FC4] tracking-widest uppercase" style={fontStyle}>{t("tab4Title")}</span>
          <span className="text-[#003163] tracking-widest uppercase " style={fontStyle}>{t("tab4Highlight")}</span>
        </span>
      ),
      content: (
        <div className="flex flex-col gap-4 items-stretch">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/seguro/img-enfermedad-terminal.webp"
              alt={t("tab4Title") + t("tab4Highlight")}
              width={600}
              height={600}
              className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-2xl md:text-2xl font-regular text-[#006FC4]" >
              {t("tab4Desc")}
            </p>
            <p className="text-base md:text-lg font-regular text-[#003163] leading-relaxed">
              {t("tab4Body")}
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
