"use client";

import { useEffect, useMemo, useRef } from "react";
import { useTranslations } from "next-intl";
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";
import { cn } from "@/lib/utils";
import { siteContainer } from "@/lib/site-layout";
import { Check, LoaderCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowWeWork() {
  const t = useTranslations("howWeWork");
  const stepMeta = t("stepMeta");

  const steps = useMemo(
    () => [
      { title: t("step1Title"), description: t("step1Description") },
      { title: t("step2Title"), description: t("step2Description") },
      { title: t("step3Title"), description: t("step3Description") },
      { title: t("step4Title"), description: t("step4Description") },
    ],
    [t],
  );

  const headingRef = useRef<HTMLDivElement>(null);
  const stepperRef = useRef<HTMLDivElement>(null);

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
      if (stepperRef.current) {
        gsap.from(stepperRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stepperRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-20 lg:py-24">
      <div className={cn(siteContainer, "flex flex-col items-center")}>
        <div ref={headingRef} className="mb-12 max-w-4xl text-center">
          <h4 className="mb-2 text-xl font-regular text-[#033163] sm:text-2xl md:text-3xl">
            {t("title")}
          </h4>
          <p
            className="text-3xl font-regular leading-tight tracking-widest text-[#033163] sm:text-4xl md:text-4xl lg:text-4xl"
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            {t("heading")}
            <span className="text-[#006FC4]">{t("headingHighlight")}</span>
          </p>
        </div>

        <div ref={stepperRef} className="w-full max-w-6xl md:overflow-x-auto md:pb-2">
          <Stepper
            defaultValue={1}
            orientation="horizontal"
            indicators={{
              completed: <Check className="size-4" aria-hidden />,
              loading: <LoaderCircle className="size-4 animate-spin" aria-hidden />,
            }}
            className="w-full"
          >
            <StepperNav className="grid! w-full grid-cols-2 gap-3 md:flex! md:flex-row md:items-stretch md:gap-3">
              {steps.map((step, index) => (
                <StepperItem
                  key={index}
                  step={index + 1}
                  className="relative min-w-0 flex-col items-stretch md:flex-1"
                >
                  <StepperTrigger
                    className={cn(
                      "group/trigger h-auto w-full rounded-2xl! flex-col gap-2.5 border border-transparent bg-transparent px-3 py-4 text-center shadow-none transition-all duration-300 sm:px-4",
                      "hover:border-[#033163]/10 hover:bg-[#033163] hover:shadow-lg",
                      "hover:text-white",
                      "data-[state=active]:border-[#033163]/10 data-[state=active]:bg-[#033163] data-[state=active]:text-white data-[state=active]:shadow-md",
                      "data-[state=completed]:border-[#033163]/10 data-[state=completed]:bg-[#033163] data-[state=completed]:text-white data-[state=completed]:shadow-md",
                      "focus-visible:ring-0 focus-visible:ring-offset-0",
                    )}
                  >
                    <StepperIndicator className="mx-auto size-10 shrink-0 text-base font-semibold transition-transform duration-300 group-hover/trigger:scale-105 group-hover/trigger:bg-white group-hover/trigger:text-[#033163] group-data-[state=active]/step:bg-white group-data-[state=active]/step:text-[#033163] group-data-[state=completed]/step:bg-white group-data-[state=completed]/step:text-[#033163] md:size-11">
                      {index + 1}
                    </StepperIndicator>
                    <div className="flex min-w-0 flex-col gap-1">
                      <span className="text-xs font-medium uppercase tracking-wider text-[#006FC4] transition-colors duration-300 group-hover/trigger:text-[#91D8F7] group-data-[state=active]/step:text-[#91D8F7] group-data-[state=completed]/step:text-[#91D8F7] md:text-base">
                        {stepMeta} {index + 1}
                      </span>
                      <StepperTitle className="text-sm font-semibold text-[#033163] transition-colors duration-300 group-hover/trigger:text-white group-data-[state=active]/step:text-white group-data-[state=completed]/step:text-white md:text-base">
                        {step.title}
                      </StepperTitle>
                      <StepperDescription className="text-left text-xs leading-snug text-[#033163]/80 transition-colors duration-300 group-hover/trigger:text-white/90 group-data-[state=active]/step:text-white/90 group-data-[state=completed]/step:text-white/90 md:text-base">
                        {step.description}
                      </StepperDescription>
                    </div>
                  </StepperTrigger>
                  {index < steps.length - 1 ? (
                    <StepperSeparator
                      className={cn(
                        "absolute top-5 left-[calc(50%+1.25rem)] z-0 m-0 hidden h-0.5 md:block",
                        "group-data-[orientation=horizontal]/stepper-nav:w-[calc(100%-2.5rem)]",
                        "group-data-[orientation=horizontal]/stepper-nav:flex-none",
                        "group-data-[state=completed]/step:bg-primary",
                      )}
                    />
                  ) : null}
                </StepperItem>
              ))}
            </StepperNav>
          </Stepper>
        </div>
      </div>
    </section>
  );
}
