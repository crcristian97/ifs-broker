"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Phone, Mail, MapPin } from "lucide-react"
import { FeatureBar } from "@/components/ui/feature-bar"
import { ButtonPrimary } from "../ui/button-primary"
import { ButtonSecondary } from "../ui/button-secondary"
import Image from "next/image"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

const scrollToSection = (id) => {
  if (typeof window === "undefined") return
  const element = document.getElementById(id)
  if (!element) return

  gsap.to(window, {
    duration: 1,
    ease: "power2.out",
    scrollTo: { y: element, offsetY: 80 },
  })
}

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
  const t = useTranslations("footer")
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [interests, setInterests] = useState([])
  const [errors, setErrors] = useState({})
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
              href="#cotiza"
              hover="hover:bg-[#FEFEFE] hover:border-[#FEFEFE] hover:text-[#033163]"
              onClick={(event) => {
                event.preventDefault()
                scrollToSection("cotiza")
              }}
            >
              {t("scheduleMeeting")}
            </ButtonPrimary>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-[#033163] px-8 py-3 text-lg font-semibold text-[#FEFEFE] transition-colors hover:bg-[#91D8F7] hover:text-[#006FC4]/60"
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

      {isContactModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-5 sm:p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#033163]">
                {t("institutionalContact")}
              </h3>
              <button
                type="button"
                className="text-sm text-[#033163]/70 hover:text-[#033163]"
                onClick={() => setIsContactModalOpen(false)}
              >
                ✕
              </button>
            </div>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                const newErrors = {}
                if (!fullName.trim()) newErrors.fullName = "Este campo es obligatorio"
                if (!email.trim()) newErrors.email = "Este campo es obligatorio"
                if (!phone.trim()) newErrors.phone = "Este campo es obligatorio"
                if (!interests.length) newErrors.interests = "Seleccioná al menos una opción"
                setErrors(newErrors)
                if (Object.keys(newErrors).length) return
                // Aquí podrías enviar la información a una API
                setIsContactModalOpen(false)
              }}
            >
              <div>
                <label className="mb-1 block text-sm font-medium text-[#033163]">
                  Nombre y apellido
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-[#d0d7e2] px-3 py-2 text-sm focus:border-[#006FC4] focus:outline-none focus:ring-1 focus:ring-[#006FC4] text-black"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[#033163]">
                  Correo
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-[#d0d7e2] px-3 py-2 text-sm focus:border-[#006FC4] focus:outline-none focus:ring-1 focus:ring-[#006FC4] text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[#033163]">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full rounded-md border border-[#d0d7e2] px-3 py-2 text-sm focus:border-[#006FC4] focus:outline-none focus:ring-1 focus:ring-[#006FC4] text-black "
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                )}
              </div>

              <div>
                <p className="mb-2 block text-sm font-medium text-[#033163]">
                  ¿Qué te interesa proteger?
                </p>
                <div className="space-y-2 text-sm text-[#033163]">
                  {[
                    { id: "vida", label: "Activos de vida" },
                    { id: "retiro", label: "Mi retiro" },
                    { id: "inversiones", label: "Mis inversiones" },
                    { id: "viajes", label: "Mis viajes" },
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
                          )
                        }}
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
                {errors.interests && (
                  <p className="mt-1 text-xs text-red-600">{errors.interests}</p>
                )}
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-lg bg-[#006FC4] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0052a0]"
              >
                Enviar información
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
