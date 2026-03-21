"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"

type ContactModalProps = {
  isOpen: boolean
  onClose: () => void
}

const INTEREST_OPTIONS = [
  { id: "vida", labelKey: "form.interests.lifeAssets" },
  { id: "retiro", labelKey: "form.interests.retirement" },
  { id: "inversiones", labelKey: "form.interests.investments" },
  { id: "viajes", labelKey: "form.interests.travel" },
  { id: "salud", labelKey: "form.interests.health" },
  { id: "patrimonial", labelKey: "form.interests.patrimonial" },
] as const

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const t = useTranslations("footer")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [interests, setInterests] = useState<string[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-5 sm:p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 id="contact-modal-title" className="text-xl font-semibold text-[#033163]">
            {t("form.title")}
          </h3>
          <button
            type="button"
            aria-label="Cerrar formulario de contacto"
            className="text-sm text-[#033163]/70 hover:text-[#033163]"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            const newErrors: Record<string, string> = {}
            if (!fullName.trim()) newErrors.fullName = t("form.errors.requiredField")
            if (!email.trim()) newErrors.email = t("form.errors.requiredField")
            if (!phone.trim()) newErrors.phone = t("form.errors.requiredField")
            if (!interests.length) newErrors.interests = t("form.errors.selectAtLeastOne")
            setErrors(newErrors)
            if (Object.keys(newErrors).length) return
            // TODO: Send form data to an API
            onClose()
          }}
        >
          <div>
            <label className="mb-1 block text-sm font-medium text-[#033163]">
              {t("form.nameLabel")}
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
              {t("form.emailLabel")}
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
              {t("form.phoneLabel")}
            </label>
            <input
              type="tel"
              className="w-full rounded-md border border-[#d0d7e2] px-3 py-2 text-sm focus:border-[#006FC4] focus:outline-none focus:ring-1 focus:ring-[#006FC4] text-black"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
            )}
          </div>

          <div>
            <p className="mb-2 block text-sm font-medium text-[#033163]">
              {t("form.interestsLabel")}
            </p>
            <div className="space-y-2 text-sm text-[#033163]">
              {INTEREST_OPTIONS.map((opt) => (
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
                  <span>{t(opt.labelKey)}</span>
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
            {t("form.submit")}
          </button>
        </form>
      </div>
    </div>
  )
}
