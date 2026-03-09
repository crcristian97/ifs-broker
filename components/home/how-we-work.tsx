"use client";

import { useTranslations } from "next-intl";
import { FocusRail, type FocusRailItem } from "@/components/ui/focus-reail";

function useDemoItems(): FocusRailItem[] {
  const t = useTranslations("howWeWork");
  const stepMeta = t("stepMeta");
  return [
    {
      id: 1,
      title: t("step1Title"),
      description: t("step1Description"),
      meta: `${stepMeta} 1`,
      content: (
        <div className="flex h-full w-full flex-col justify-center gap-1 bg-white px-6 py-6">
          <div className="flex flex-col gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] text-2xl font-semibold text-[#006FC4]">
              1
            </div>
            <h3 className="text-xl font-semibold text-[#006FC4] py-2">
              {t("step1Title")}
            </h3>
            <p className="text-sm leading-relaxed text-[#033163]">
              {t("step1Description")}
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: t("step2Title"),
      description: t("step2Description"),
      meta: `${stepMeta} 2`,
      content: (
        <div className="flex h-full w-full flex-col justify-center gap-1 bg-white px-6 py-6">
          <div className="flex flex-col gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] text-2xl font-semibold text-[#006FC4]">
              2
            </div>
            <h3 className="text-xl font-semibold text-[#006FC4]">
              {t("step2Title")}
            </h3>
            <p className="text-sm leading-relaxed text-[#033163]">
              {t("step2Description")}
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: t("step3Title"),
      description: t("step3Description"),
      meta: `${stepMeta} 3`,
      content: (
        <div className="flex h-full w-full flex-col justify-center gap-1 bg-white px-6 py-6">
          <div className="flex flex-col gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] text-2xl font-semibold text-[#006FC4]">
              3
            </div>
            <h3 className="text-xl font-semibold text-[#006FC4]">
              {t("step3Title")}
            </h3>
            <p className="text-sm leading-relaxed text-[#033163]">
              {t("step3Description")}
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: t("step4Title"),
      description: t("step4Description"),
      meta: `${stepMeta} 4`,
      content: (
        <div className="flex h-full w-full flex-col justify-center gap-1 bg-white px-6 py-6">
          <div className="flex flex-col gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] text-2xl font-semibold text-[#006FC4]">
              4
            </div>
            <h3 className="text-xl font-semibold text-[#006FC4]">
              {t("step4Title")}
            </h3>
            <p className="text-sm leading-relaxed text-[#033163]">
              {t("step4Description")}
            </p>
          </div>
        </div>
      ),
    },
  ];
}

export default function HowWeWork() {
  const t = useTranslations("howWeWork");
  const items = useDemoItems();
  return (
    <section className="w-full bg-white py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-6 md:px-12 lg:px-16">
        <div className="mb-12 text-center max-w-4xl">
          <h4 className="text-3xl font-regular text-[#033163] mb-2">
            {t("title")}
          </h4>
          <p
            className="text-[#033163] text-4xl md:text-5xl font-regular leading-tight tracking-widest"
            style={{
              fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif',
            }}
          >
            {t("heading")}
            <span className="text-[#006FC4]">{t("headingHighlight")}</span>
          </p>
        </div>

        <div className="w-full">
          <FocusRail items={items} autoPlay={false} loop={true} />
        </div>
      </div>
    </section>
  );
}
