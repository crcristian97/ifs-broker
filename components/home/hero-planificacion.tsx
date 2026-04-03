"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { ButtonPrimary } from "../ui/button-primary";
import { ButtonSecondary } from "../ui/button-secondary";
import { AnimatedGridPattern } from "../ui/background-wedosection";
import { siteContainer } from "@/lib/site-layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function HeroPlanificacion() {
  const t = useTranslations("heroPlanificacion");
  const pathname = usePathname();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ fullName?: string; email?: string; phone?: string; interests?: string }>({});
  const topBlockRef = useRef<HTMLDivElement>(null);
  const bottomBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (topBlockRef.current) {
        gsap.from(topBlockRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: topBlockRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      }
      if (bottomBlockRef.current) {
        gsap.from(bottomBlockRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bottomBlockRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="nosotros" className="w-full  mt-16 md:mt-24 mb-16 md:mb-24">
      <div className={siteContainer}>
        <div ref={topBlockRef} className="relative bg-[#033163] px-4 py-10 sm:px-8 sm:py-16 md:px-12 md:py-20 overflow-hidden rounded-t-[56px] rounded-b-none shadow-lg">
          <div className="relative z-10 text-center">
            <p className="text-xl sm:text-2xl md:text-3xl  text-white mb-6 sm:mb-8">
              {t("label")}
            </p>
            <h3
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-regular uppercase tracking-tighter leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                letterSpacing: "0.02em",
              }}
            >
              <span className="text-[#91D8F7]">{t("title1")}</span>
              <span className="text-white">{t("title2")}</span>
              <span className="text-[#91D8F7]">{t("title3")}</span>
              <span className="text-white">{t("title4")}</span>
              <span className="text-[#91D8F7]">{t("title5")}</span>
              <span className="text-white">{t("title6")}</span>
              <span className="text-[#91D8F7]">{t("title7")}</span>
            </h3>
          </div>
        </div>

        <div
          ref={bottomBlockRef}
          className="bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-14 rounded-b-[56px] shadow-lg border-x-2 border-b-2 border-[#91D8F7]"
          style={{
            background: "linear-gradient(to bottom, #f0f5fa, #ffffff)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="flex-1">
              <p className="text-[#1a2b3d] text-xl sm:text-2xl md:text-2xl lg:text-2xl font-regular text-center md:text-left">
                {t("description1Part1")}<span className="text-[#006FC4] font-regular">{t("description1Part2")}</span>{t("description1Part3")}
              </p>
            </div>

            <div className="flex-1 flex flex-col items-center md:items-end gap-5">
              <div className="flex w-full max-w-md flex-col gap-3 items-stretch md:ml-auto">
                <ButtonPrimary
                  href="/seguros-de-vida#cotiza"
                  hover="hover:bg-[#FEFEFE] hover:border-[#FEFEFE] hover:text-[#033163]"
                  className="w-full justify-center"
                  onClick={(event) => {
                    // Si ya estamos en la página de seguros de vida, solo hacer scroll suave al formulario
                    if (pathname.includes("/seguros-de-vida")) {
                      event.preventDefault();
                      const el = document.getElementById("cotiza");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }
                  }}
                >
                  {t("quoteLifeInsurance")}
                </ButtonPrimary>
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#033163] px-8 py-3 text-lg font-semibold text-[#FEFEFE] transition-colors hover:bg-[#91D8F7] hover:text-[#006FC4]/60 cursor-pointer"
                >
                  {t("speakWithAdvisor")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-5 sm:p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#033163]">{t("form.title")}</h3>
              <button
                type="button"
                aria-label="Cerrar formulario de contacto"
                className="text-sm text-[#033163]/70 hover:text-[#033163]"
                onClick={() => setIsContactModalOpen(false)}
              >
                ✕
              </button>
            </div>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const newErrors: typeof errors = {};
                if (!fullName.trim()) newErrors.fullName = t("form.errors.requiredField");
                if (!email.trim()) newErrors.email = t("form.errors.requiredField");
                if (!phone.trim()) newErrors.phone = t("form.errors.requiredField");
                if (interests.length === 0) newErrors.interests = t("form.errors.selectAtLeastOne");
                setErrors(newErrors);
                if (Object.keys(newErrors).length > 0) return;
                // Aquí podrías enviar la información a una API
                setIsContactModalOpen(false);
              }}
            >
              <div>
                <label className="block text-sm font-medium text-[#033163] mb-1">
                  {t("form.nameLabel")}
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-[#d0d7e2] px-3 py-2 text-sm focus:border-[#006FC4] focus:outline-none focus:ring-1 focus:ring-[#006FC4]"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#033163] mb-1">
                  {t("form.emailLabel")}
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-[#d0d7e2] px-3 py-2 text-sm focus:border-[#006FC4] focus:outline-none focus:ring-1 focus:ring-[#006FC4]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#033163] mb-1">
                  {t("form.phoneLabel")}
                </label>
                <input
                  type="tel"
                  className="w-full rounded-md border border-[#d0d7e2] px-3 py-2 text-sm focus:border-[#006FC4] focus:outline-none focus:ring-1 focus:ring-[#006FC4]"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
              </div>
              <div>
                <p className="block text-sm font-medium text-[#033163] mb-2">
                  {t("form.interestsLabel")}
                </p>
                <div className="space-y-2 text-sm text-[#033163]">
                  {[
                    { id: "vida", label: t("form.interests.lifeAssets") },
                    { id: "retiro", label: t("form.interests.retirement") },
                    { id: "inversiones", label: t("form.interests.investments") },
                    { id: "viajes", label: t("form.interests.travel") },
                  ].map((opt) => (
                    <label key={opt.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-[#d0d7e2] text-[#006FC4] focus:ring-[#006FC4]"
                        checked={interests.includes(opt.id)}
                        onChange={(e) => {
                          setInterests((prev) =>
                            e.target.checked
                              ? [...prev, opt.id]
                              : prev.filter((v) => v !== opt.id),
                          );
                        }}
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
                {errors.interests && <p className="mt-1 text-xs text-red-600">{errors.interests}</p>}
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-lg bg-[#006FC4] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0052a0]"
              >
                {t("form.submit")}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
  