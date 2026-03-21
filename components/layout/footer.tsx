"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
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
    title: "contact@email.com",
  },
  {
    icon: <MapPin className="h-5 w-5 shrink-0 text-[#033163]" />,
    title: "Location",
  },
]

export function Footer() {
  const t = useTranslations("footer")
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <section
      id="contacto"
      className="relative w-full min-h-[700px] flex flex-col justify-end"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #E5EEF5 0%, #006FC4 100%), url('/services/fondo-servicios-especificos.webp')",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 flex flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-12 md:py-16">
        <div className="flex justify-center md:justify-start">
          <Image src="/ifs_insurance.png" alt="IFS Insurance" width={200} height={200} />
        </div>

        <div className="flex flex-col items-center gap-6 text-center md:items-end md:text-right">
          <div className="space-y-2">
            <h2 className="text-3xl font-regular text-[#033163] text-balance">
              {t("title")}
            </h2>
            <p className="max-w-sm text-base text-[#033163]">
              {t("subtitle")}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <ButtonPrimary
              href="https://calendly.com/administracion-ifs-broker/30min"
              target="_blank"
              hover="hover:bg-[#FEFEFE] hover:border-[#FEFEFE] hover:text-[#033163]"
            >
              {t("scheduleMeeting")}
            </ButtonPrimary>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-[#033163] px-8 py-3 text-lg font-semibold text-[#FEFEFE] transition-colors hover:bg-[#91D8F7] hover:text-[#006FC4]/60 cursor-pointer"
              onClick={() => setIsContactModalOpen(true)}
            >
              {t("institutionalContact")}
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-end justify-between px-6 pb-4 md:px-12">
        <p className="text-3xl font-regular text-[#033163]">
          {t("designFuture")}
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <FeatureBar features={features} />
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  )
}
