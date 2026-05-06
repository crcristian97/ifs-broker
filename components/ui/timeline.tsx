"use client";

import React from "react";
import { useTranslations } from "next-intl";
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
  hideSecondaryButton?: boolean;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const t = useTranslations();

  const scrollToCapitalEstimado = () => {
    if (typeof window === "undefined") return;
    const element = document.getElementById("capital-estimado");
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const defaultPrimaryHref =
    "https://calendly.com/administracion-ifs-broker/30min";
  const defaultSecondaryHref = "#capital-estimado";

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
                  <div className="w-full max-w-[18ch]">
                    <h3 className="w-full text-left text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-regular leading-tight text-balance">
                      {item.title}
                    </h3>
                    <div className="mt-6 grid w-full grid-cols-1 gap-3 self-start">
                      <ButtonPrimary
                      href={item.buttonHref ?? defaultPrimaryHref}
                      target={(item.buttonHref ?? defaultPrimaryHref).startsWith("#") ? undefined : "_blank"}
                      className="min-w-[8ch] whitespace-nowrap justify-center text-xs sm:text-sm"
                      hover="hover:bg-[#0287E6] hover:border-[#0287E6]"
                      onClick={
                        (item.buttonHref ?? defaultPrimaryHref).startsWith("#")
                          ? () => {
                              const href = item.buttonHref ?? defaultPrimaryHref;

                              if (href === "#capital-estimado") {
                                scrollToCapitalEstimado();
                                return;
                              }

                              if (typeof window === "undefined") return;
                              const id = href.slice(1);
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
                        {item.buttonPrimary ?? t("footer.scheduleMeeting")}
                      </ButtonPrimary>

                      {!item.hideSecondaryButton ? (
                        <ButtonSecondary
                          href={
                            item.buttonHrefSecondary?.startsWith("#")
                              ? item.buttonHrefSecondary
                              : (item.buttonHrefSecondary ?? defaultSecondaryHref)
                          }
                          target={
                            (item.buttonHrefSecondary ?? defaultSecondaryHref).startsWith("#")
                              ? undefined
                              : "_blank"
                          }
                          className="min-w-[8ch] whitespace-nowrap justify-center text-xs sm:text-sm"
                          hover="hover:bg-[#91D8F7] hover:border-[#91D8F7] hover:text-[#006FC4]/60"
                          onClick={
                            (item.buttonHrefSecondary ?? defaultSecondaryHref).startsWith("#")
                              ? () => {
                                  if (typeof window === "undefined") return;
                                  const id = (item.buttonHrefSecondary ?? defaultSecondaryHref).slice(1);
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
                          {item.buttonSecondary ?? t("footer.talkWithAdvisor")}
                        </ButtonSecondary>
                      ) : null}
                    </div>
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
