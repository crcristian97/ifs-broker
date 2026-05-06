"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { ButtonPrimary } from "./button-primary";
import { ButtonSecondary } from "./button-secondary";
import { cn } from "@/lib/utils";
import { siteContainer } from "@/lib/site-layout";

interface TimelineEntry {
  title: React.ReactNode;
  content: React.ReactNode;
  buttonPrimary?: string;
  buttonSecondary?: string;
  buttonHref?: string;
  buttonHrefSecondary?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const t = useTranslations();
  const pathname = usePathname();

  const scrollToCapitalEstimado = () => {
    if (typeof window === "undefined") return;
    const element = document.getElementById("capital-estimado");
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const defaultSecondaryHref =
    "https://calendly.com/administracion-ifs-broker/30min";

  return (
    <div className="relative w-full font-sans">
      <div className={cn(siteContainer, "relative pb-20")}>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-10"
          >
            <div className="relative w-full">
              <div className="grid items-stretch gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)]">
                <div className="flex flex-col justify-center gap-6">
                  <h3 className="text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-regular leading-tight">
                    {item.title}
                  </h3>
                  <div className="grid w-max max-w-full grid-cols-1 gap-3 self-start">
                    <ButtonPrimary
                      href={item.buttonHref ?? "/seguros-de-vida#capital-estimado"}
                      target={
                        item.buttonHref?.startsWith("http") ? "_blank" : undefined
                      }
                      className="w-full justify-center"
                      hover="hover:bg-[#FEFEFE] hover:border-[#FEFEFE] hover:text-[#033163]"
                      onClick={(event) => {
                        if (pathname.includes("/seguros-de-vida")) {
                          event.preventDefault();
                          scrollToCapitalEstimado();
                        }
                      }}
                    >
                      {item.buttonPrimary ?? t("heroPlanificacion.quoteLifeInsurance")}
                    </ButtonPrimary>
                    <ButtonSecondary
                      href={
                        item.buttonHrefSecondary?.startsWith("#")
                          ? item.buttonHrefSecondary
                          : (item.buttonHrefSecondary ?? defaultSecondaryHref)
                      }
                      target={
                        item.buttonHrefSecondary?.startsWith("#")
                          ? undefined
                          : "_blank"
                      }
                      className="w-full justify-center"
                      hover="hover:bg-[#91D8F7] hover:border-[#91D8F7] hover:text-[#006FC4]/60"
                      onClick={
                        item.buttonHrefSecondary?.startsWith("#")
                          ? () => {
                              if (typeof window === "undefined") return;
                              const id = item.buttonHrefSecondary!.slice(1);
                              const el = document.getElementById(id);
                              if (el) {
                                el.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }
                            }
                          : undefined
                      }
                    >
                      {item.buttonSecondary ?? t("footer.scheduleMeeting")}
                    </ButtonSecondary>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div
                    className={cn(
                      "relative w-full max-w-[480px] overflow-hidden rounded-3xl p-3 md:p-4 lg:p-6",
                      "border border-[#006FC4]/35",
                      "bg-gradient-to-br from-[#033163] via-[#044a8c] to-[#006FC4]",
                      "shadow-[0_8px_32px_-4px_rgba(3,49,99,0.35),0_4px_16px_-2px_rgba(0,111,196,0.2)]",
                    )}
                  >
                    <div className="relative z-10 text-base md:text-lg">{item.content}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
