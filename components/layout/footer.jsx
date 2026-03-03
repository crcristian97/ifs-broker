"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { FeatureBar } from "@/components/ui/feature-bar"
import { ButtonPrimary } from "../ui/button-primary"
import { ButtonSecondary } from "../ui/button-secondary"

const features = [
  {
    icon: <Phone className="h-5 w-5 shrink-0 text-[#033163] " />,
    title: "+00 0000 000",
  },
  {
    icon: <Mail className="h-5 w-5 shrink-0 text-[#033163] " />,
    title: "contact@email.com",
  },
  {
    icon: <MapPin className="h-5 w-5 shrink-0 text-[#033163] " />,
    title: "Location",
  },
]

export default function Footer() {
  return (
    <section
      className="relative w-full min-h-[700px] flex flex-col justify-end"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #E5EEF5 15%, #006FC4 50%, #033163 100%), url('/services/fondo-servicios-especificos.webp')",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main content area */}
      <div className="relative z-10 flex flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-12 md:py-16">
        {/* Left — Logo */}
        <div className="flex justify-center md:justify-start"></div>

        {/* Right — Copy + CTAs */}
        <div className="flex flex-col items-center gap-6 text-center md:items-end md:text-right">
          <div className="space-y-2">
            <h2 className="text-3xl font-regular text-[#033163] text-balance">
              Cada situación es distinta.
            </h2>
            <p className="max-w-sm text-base text-[#033163]">
              Una conversación puede aportar una nueva mirada sobre tu realidad
              actual.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <ButtonPrimary
              href="#cotiza"
              hover="hover:bg-[#FEFEFE] hover:border-[#FEFEFE] hover:text-[#033163]"
            >
              Agenda una reunion
            </ButtonPrimary>
            <ButtonSecondary
              href="#agenda"
              hover="hover:bg-[#91D8F7] hover:border-[#91D8F7] hover:text-[#006FC4]/60"
            >
              Contacto institucional
            </ButtonSecondary>
          </div>
        </div>
      </div>

      {/* Tagline + WhatsApp */}
      <div className="relative z-10 flex items-end justify-between px-6 pb-4 md:px-12">
        <p className="text-3xl font-regular text-[#033163]">
          Diseñemos hoy la tranquilidad del futuro
        </p>
      </div>

      {/* Bottom contact bar */}
      <div className="flex justify-center mb-12">
        <FeatureBar features={features} />
      </div>
    </section>
  )
}
