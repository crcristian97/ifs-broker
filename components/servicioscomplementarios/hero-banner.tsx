"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const fontStyle = { fontFamily: "var(--font-heading)" };

export function HeroBanner() {
  const t = useTranslations("heroBanner");
  const data = [
    {
      title: (
        <span>
          <span className="text-[#006FC4] uppercase tracking-widest" style={fontStyle}>{t("title")}</span>
        </span>
      ),
      content: (
        <div className="flex flex-col gap-4 items-stretch">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/retiro/img-fondos-de-retiro.webp"
              alt={t("paragraph1")}
              width={600}
              height={600}
              className="w-full h-auto rounded-3xl shadow-[0_18px_45px_rgba(15,35,80,0.18)] object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-3xl font-regular text-[white]" >
              {t("paragraph2")}
            </p>
            <p className="text-lg text-[white] leading-relaxed ">
              {t("paragraph1")}
            </p>
          </div>
        </div>
      ),
      buttonPrimary: t("speakAdvisor"),
      buttonHref: "",
      buttonSecondary: t("scheduleMeeting"),
      buttonHrefSecondary: "https://calendly.com/administracion-ifs-broker/30min",
    },
   
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
