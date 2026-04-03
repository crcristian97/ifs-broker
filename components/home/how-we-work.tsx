"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { FocusRail, type FocusRailItem } from "@/components/ui/focus-reail";
import { cn } from "@/lib/utils";
import { siteContainer } from "@/lib/site-layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
        <div className="flex h-full w-full flex-col justify-center gap-1 px-6 py-6">
          <div className="flex flex-col gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FEFEFE]/15 text-2xl font-semibold text-[#FEFEFE] ring-1 ring-[#FEFEFE]/25">
              1
            </div>
            <h3 className="py-2 text-xl font-semibold text-[#FEFEFE]">
              {t("step1Title")}
            </h3>
            <p className="text-sm leading-relaxed text-[#FEFEFE]/90">
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
        <div className="flex h-full w-full flex-col justify-center gap-1 px-6 py-6">
          <div className="flex flex-col gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FEFEFE]/15 text-2xl font-semibold text-[#FEFEFE] ring-1 ring-[#FEFEFE]/25">
              2
            </div>
            <h3 className="text-xl font-semibold text-[#FEFEFE]">
              {t("step2Title")}
            </h3>
            <p className="text-sm leading-relaxed text-[#FEFEFE]/90">
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
        <div className="flex h-full w-full flex-col justify-center gap-1 px-6 py-6">
          <div className="flex flex-col gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FEFEFE]/15 text-2xl font-semibold text-[#FEFEFE] ring-1 ring-[#FEFEFE]/25">
              3
            </div>
            <h3 className="text-xl font-semibold text-[#FEFEFE]">
              {t("step3Title")}
            </h3>
            <p className="text-sm leading-relaxed text-[#FEFEFE]/90">
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
        <div className="flex h-full w-full flex-col justify-center gap-1 px-6 py-6">
          <div className="flex flex-col gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FEFEFE]/15 text-2xl font-semibold text-[#FEFEFE] ring-1 ring-[#FEFEFE]/25">
              4
            </div>
            <h3 className="text-xl font-semibold text-[#FEFEFE]">
              {t("step4Title")}
            </h3>
            <p className="text-sm leading-relaxed text-[#FEFEFE]/90">
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
  const headingRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.from(headingRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      }
      if (railRef.current) {
        gsap.from(railRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: railRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full  py-20 lg:py-24">
      <div className={cn(siteContainer, "flex flex-col items-center")}>
        <div ref={headingRef} className="mb-12 text-center max-w-4xl">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-regular text-[#033163] mb-2">
            {t("title")}
          </h4>
          <p
            className="text-[#033163] text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-regular leading-tight tracking-widest"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            {t("heading")}
            <span className="text-[#006FC4]">{t("headingHighlight")}</span>
          </p>
        </div>

        <div ref={railRef} className="w-full">
          <FocusRail items={items} autoPlay loop interval={5000} />
        </div>
      </div>
    </section>
  );
}
