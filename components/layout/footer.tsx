"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { FeatureBar } from "@/components/ui/feature-bar"
import { ButtonPrimary } from "@/components/ui/button-primary"
import { ContactModal } from "@/components/layout/contact-modal"

const features = [
  {
    icon: <Phone className="h-5 w-5 shrink-0 text-[#033163]" />,
    title: "+00 0000 000",
  },
  {
    icon: <Mail className="h-5 w-5 shrink-0 text-[#033163]" />,
    title: "administracion@ifs-broker.com",
  },
  {
    icon: <MapPin className="h-5 w-5 shrink-0 text-[#033163]" />,
    title: "Location",
  },
]

export function Footer() {
  const t = useTranslations("footer")
  const tNav = useTranslations("nav")
  const tSolutions = useTranslations("solutions")
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const footerLinks = [
    { href: "/", label: tNav("home") },
    { href: "/seguros-de-vida", label: tSolutions("seguroVida.title") },
    { href: "/fondos-de-retiro", label: tSolutions("fondosRetiro.title") },
    { href: "/salud-internacional", label: tSolutions("saludInternacional.title") },
    { href: "/servicios-complementarios", label: tSolutions("serviciosComplementarios.title") },
    { href: "/#nosotros", label: tNav("nosotros") },
    { href: "/trabaja-con-nosotros", label: tNav("trabajaConNosotros") },
  ] as const

  return (
    <section
      id="contacto"
      className="relative w-full overflow-hidden pb-8 md:pb-12"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #E5EEF5 0%, #006FC4 100%), url('/services/fondo-servicios-especificos.webp')",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Capa superior: continúa el blanco de la sección blog y se funde con el degradado/imagen del footer */}
      <div
        aria-hidden
        className=" bg-gradient-to-b from-white via-[#E5EEF5]/90 to-transparent "
      />

      <div className="relative z-10 flex flex-col gap-10 px-6 pt-4 md:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <div className="shrink-0">
              <Image src="/ifs_insurance.png" alt="IFS Insurance" width={200} height={200} />
            </div>
            <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <ButtonPrimary
                href="https://calendly.com/administracion-ifs-broker/30min"
                target="_blank"
                hover="hover:bg-[#FEFEFE] hover:border-[#FEFEFE] hover:text-[#033163]"
                className="w-full justify-center sm:w-auto"
              >
                {t("scheduleMeeting")}
              </ButtonPrimary>
              <button
                type="button"
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#033163] px-8 py-3 text-lg font-semibold text-[#FEFEFE] transition-colors hover:bg-[#91D8F7] hover:text-[#006FC4]/60 sm:w-auto"
                onClick={() => setIsContactModalOpen(true)}
              >
                {t("institutionalContact")}
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 text-center lg:max-w-md lg:items-end lg:text-right">
            <div className="space-y-2">
              <h2 className="text-balance text-2xl font-regular text-[#033163] sm:text-3xl lg:text-4xl">
                {t("title")}
              </h2>
              <p className="max-w-sm text-base text-[#033163] lg:ml-auto lg:max-w-none">
                {t("subtitle")}
              </p>
            </div>

            <nav aria-label={t("navAriaLabel")} className="w-full">
              <ul className="flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-4 lg:justify-end">
                {footerLinks.map((item) => (
                  <li key={item.href} className="shrink-0">
                    <Link
                      href={item.href}
                      className="text-base text-[#033163] underline-offset-4 transition-colors hover:text-[#006FC4] hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-end justify-between px-6 pb-4 md:px-12">
        <p className="text-2xl font-regular text-[#033163] sm:text-3xl lg:text-4xl">
          {t("designFuture")}
        </p>
      </div>

      <div className="relative z-10 flex justify-center px-4 pb-2">
        <FeatureBar features={features} />
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  )
}
