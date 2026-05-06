"use client"

import { useMemo, useState } from "react"
import { useTranslations } from "next-intl"
import { ButtonPrimary } from "../ui/button-primary"
import { InvestmentProfiles } from "./investment-profiles"
import { getInvestmentProfileId } from "./investment-profile-logic"

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
      <label className="text-base text-[#000A15]">
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

  const activeProfileId = useMemo(
    () =>
      getInvestmentProfileId({
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7,
      }),
    [q1, q2, q3, q4, q5, q6, q7],
  )

  const profileItems = useMemo(
    () => [
      {
        id: "conservative" as const,
        title: t("profileConservativeTitle"),
        description: t("profileConservativeDesc"),
        cardBg: "#FDFDE5",
        circleBg: "#F2C94C",
      },
      {
        id: "balanced" as const,
        title: t("profileBalancedTitle"),
        description: t("profileBalancedDesc"),
        cardBg: "#E9FDEE",
        circleBg: "#27AE60",
      },
      {
        id: "growth" as const,
        title: t("profileGrowthTitle"),
        description: t("profileGrowthDesc"),
        cardBg: "#E6F2FF",
        circleBg: "#2F80ED",
      },
      {
        id: "aggressive" as const,
        title: t("profileAggressiveTitle"),
        description: t("profileAggressiveDesc"),
        cardBg: "#FFECEF",
        circleBg: "#EB5757",
      },
    ],
    [t],
  )

  const selectedProfileItems = useMemo(() => {
    if (!activeProfileId) return []
    const found = profileItems.find((p) => p.id === activeProfileId)
    return found ? [found] : []
  }, [profileItems, activeProfileId])

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <div
        id="investment-questionnaire"
        className="mb-8 scroll-mt-28 text-center"
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-regular uppercase tracking-widest"
          style={{ fontFamily: "var(--font-heading)" }}
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
              { value: "lt20", label: t("q1_lt20") },
              { value: "r21_40", label: t("q1_21_40") },
              { value: "r41_60", label: t("q1_41_60") },
              { value: "r61_80", label: t("q1_61_80") },
              { value: "gt80", label: t("q1_gt80") },
            ]}
          />
          <QuestionSelect
            label={t("q2")}
            value={q2}
            onChange={setQ2}
            placeholder={t("selectPlaceholder")}
            options={[
              { value: "r12_v25", label: t("q2_r12_v25") },
              { value: "r10_v15", label: t("q2_r10_v15") },
              { value: "r8_v10", label: t("q2_r8_v10") },
              { value: "r6_v5", label: t("q2_r6_v5") },
              { value: "r4_v2", label: t("q2_r4_v2") },
            ]}
          />
          <QuestionSelect
            label={t("q3")}
            value={q3}
            onChange={setQ3}
            placeholder={t("selectPlaceholder")}
            options={[
              { value: "att_high_long", label: t("q3_att_high_long") },
              { value: "att_some_vol", label: t("q3_att_some_vol") },
              { value: "att_long_not_short", label: t("q3_att_long_not_short") },
              { value: "att_above_inflation", label: t("q3_att_above_inflation") },
              { value: "att_preserve", label: t("q3_att_preserve") },
            ]}
          />
          <QuestionSelect
            label={t("q4")}
            value={q4}
            onChange={setQ4}
            placeholder={t("selectPlaceholder")}
            options={[
              { value: "inc_sig", label: t("q4_inc_sig") },
              { value: "inc_10pct", label: t("q4_inc_10pct") },
              { value: "above_inf", label: t("q4_above_inf") },
              { value: "same", label: t("q4_same") },
              { value: "decrease", label: t("q4_decrease") },
            ]}
          />
          <QuestionSelect
            label={t("q5")}
            value={q5}
            onChange={setQ5}
            placeholder={t("selectPlaceholder")}
            options={[
              { value: "short_high", label: t("q5_short_high") },
              { value: "long_growth", label: t("q5_long_growth") },
              { value: "sustained", label: t("q5_sustained") },
              { value: "income", label: t("q5_income") },
              { value: "preserve_inf", label: t("q5_preserve_inf") },
            ]}
          />
          <QuestionSelect
            label={t("q6")}
            value={q6}
            onChange={setQ6}
            placeholder={t("selectPlaceholder")}
            options={[
              { value: "buy_more", label: t("q6_buy_more") },
              { value: "nothing", label: t("q6_nothing") },
              { value: "switch_if_year", label: t("q6_switch_if_year") },
              { value: "switch_cons", label: t("q6_switch_cons") },
              { value: "sell_all", label: t("q6_sell_all") },
            ]}
          />
          <QuestionSelect
            label={t("q7")}
            value={q7}
            onChange={setQ7}
            placeholder={t("selectPlaceholder")}
            options={[
              { value: "lt1y", label: t("q7_lt1y") },
              { value: "y1_3", label: t("q7_1_3") },
              { value: "y4_6", label: t("q7_4_6") },
              { value: "y7_10", label: t("q7_7_10") },
              { value: "y11_15", label: t("q7_11_15") },
              { value: "gt15", label: t("q7_gt15") },
            ]}
          />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 rounded-xl p-4 md:p-5">
          <p className="text-base text-[#006FC4] font-regular flex-1">
            {t("infoText")}
          </p>
        </div>
        {activeProfileId && selectedProfileItems.length > 0 ? (
          <InvestmentProfiles
            items={selectedProfileItems}
            activeProfileId={activeProfileId}
          />
        ) : null}

        <div className="relative z-10 flex justify-center mt-8 pb-8">
          <ButtonPrimary
            href="https://calendly.com/administracion-ifs-broker/30min"
            target="_blank"
            hover="hover:bg-[#91D8F7] hover:border-[#91D8F7] hover:text-[#006FC4]/60"
          >
            {t("button")}
          </ButtonPrimary>
        </div>
      </div>
    </div>
  )
}
