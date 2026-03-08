"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { ButtonPrimary } from "../ui/button-primary"
import { InvestmentProfiles } from "./investment-profiles"

type SelectOption = {
  value: string
  label: string
}

interface QuestionSelectProps {
  label: string
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

function QuestionSelect({ label, options, value, onChange, placeholder = "Seleccionar" }: QuestionSelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base text-[#000A15] leading-relaxed">
        {label}
      </label>
      <select
        className="w-full rounded-xl border border-[#E1E8F0] bg-white px-4 py-3 text-sm text-[#4A5563] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#91D8F7] focus:border-[#91D8F7]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export function InvestmentQuestionnaireForm() {
  const t = useTranslations("investmentQuestionnaire")
  const [q1, setQ1] = useState("")
  const [q2, setQ2] = useState("")
  const [q3, setQ3] = useState("")
  const [q4, setQ4] = useState("")
  const [q5, setQ5] = useState("")
  const [q6, setQ6] = useState("")
  const [q7, setQ7] = useState("")

  const profileItems = [
    { title: t("profileGrowthTitle"), description: t("profileGrowthDesc"), cardBg: "#E6F2FF", circleBg: "#2F80ED" },
    { title: t("profileConservativeTitle"), description: t("profileConservativeDesc"), cardBg: "#FDFDE5", circleBg: "#F2C94C" },
    { title: t("profileBalancedTitle"), description: t("profileBalancedDesc"), cardBg: "#E9FDEE", circleBg: "#27AE60" },
    { title: t("profileAggressiveTitle"), description: t("profileAggressiveDesc"), cardBg: "#FFECEF", circleBg: "#EB5757" },
  ]

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <div className="mb-8 text-center">
        <h2
          className="text-5xl font-regular leading-tight"
          style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}
        >
          <span className="text-[#006FC4]">{t("title1")}</span>
          <span className="text-[#033163]">{t("title2")}</span>
        </h2>
        <p className="mt-3 text-xl text-[#033163]">
          {t("subtitle")}
        </p>
      </div>

      <div className="relative z-10 rounded-2xl border border-border bg-card/80 backdrop-blur-md p-6 md:p-10 shadow-lg">
        <div className="flex flex-col gap-6">
          <QuestionSelect
            label={t("q1")}
            value={q1}
            onChange={setQ1}
            placeholder={t("selectPlaceholder")}
            options={[
              { value: "lt25", label: t("q1_lt25") },
              { value: "25-50", label: t("q1_25_50") },
              { value: "50-75", label: t("q1_50_75") },
              { value: "gt75", label: t("q1_gt75") },
            ]}
          />
          <QuestionSelect
            label={t("q2")}
            value={q2}
            onChange={setQ2}
            placeholder={t("selectPlaceholder")}
            options={[
              { value: "baja", label: t("q2_baja") },
              { value: "media", label: t("q2_media") },
              { value: "alta", label: t("q2_alta") },
            ]}
          />
          <QuestionSelect
            label={t("q3")}
            value={q3}
            onChange={setQ3}
            placeholder={t("selectPlaceholder")}
            options={[
              { value: "evita", label: t("q3_evita") },
              { value: "tolera", label: t("q3_tolera") },
              { value: "busca", label: t("q3_busca") },
            ]}
          />
          <QuestionSelect
            label={t("q4")}
            value={q4}
            onChange={setQ4}
            placeholder={t("selectPlaceholder")}
            options={[
              { value: "estable", label: t("q4_estable") },
              { value: "crecientes", label: t("q4_crecientes") },
              { value: "variables", label: t("q4_variables") },
            ]}
          />
          <QuestionSelect
            label={t("q5")}
            value={q5}
            onChange={setQ5}
            placeholder={t("selectPlaceholder")}
            options={[
              { value: "preservar", label: t("q5_preservar") },
              { value: "mixto", label: t("q5_mixto") },
              { value: "crecer", label: t("q5_crecer") },
            ]}
          />
          <QuestionSelect
            label={t("q6")}
            value={q6}
            onChange={setQ6}
            placeholder={t("selectPlaceholder")}
            options={[
              { value: "vender", label: t("q6_vender") },
              { value: "mantener", label: t("q6_mantener") },
              { value: "aumentar", label: t("q6_aumentar") },
            ]}
          />
          <QuestionSelect
            label={t("q7")}
            value={q7}
            onChange={setQ7}
            placeholder={t("selectPlaceholder")}
            options={[
              { value: "lt3", label: t("q7_lt3") },
              { value: "3-7", label: t("q7_3_7") },
              { value: "7-15", label: t("q7_7_15") },
              { value: "gt15", label: t("q7_gt15") },
            ]}
          />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 rounded-xl border border-[#91D8F7] bg-[#91D8F7]/20 p-4 md:p-5">
          <p className="text-base text-[#000A15] font-bold leading-relaxed flex-1">
            {t("infoText")}
          </p>
        </div>

        <div className="relative z-10 flex justify-center mt-8 pb-8">
          <ButtonPrimary
            href="#agenda"
            hover="hover:bg-[#91D8F7] hover:border-[#91D8F7] hover:text-[#006FC4]/60"
          >
            {t("button")}
          </ButtonPrimary>
        </div>
      </div>
      <InvestmentProfiles items={profileItems} />
    </div>
  )
}

