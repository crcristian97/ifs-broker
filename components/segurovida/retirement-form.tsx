"use client"

import { useState, useMemo } from "react"
import { useTranslations } from "next-intl"
import { RangeSlider } from "@/components/ui/range-slider"
import { ButtonPrimary } from "../ui/button-primary"

export function RetirementForm() {
  const t = useTranslations("retirementForm")

  const [monthlyIncome, setMonthlyIncome] = useState(3000)
  const [percentNeeded, setPercentNeeded] = useState(70)
  const [yearsNeeded, setYearsNeeded] = useState(15)
  const [liquidAssets, setLiquidAssets] = useState<string>("0")
  const [existingInsurance, setExistingInsurance] = useState<string>("0")

  const neededCapital = useMemo(() => {
    const liquidAssetsValue = Number(liquidAssets) || 0
    const existingInsuranceValue = Number(existingInsurance) || 0

    const neededAnnualIncome = monthlyIncome * 12 * (percentNeeded / 100)
    const grossNeed = neededAnnualIncome * yearsNeeded
    const covered = liquidAssetsValue + existingInsuranceValue
    const deficitValue = grossNeed - covered
    return deficitValue > 0 ? deficitValue : 0
  }, [monthlyIncome, percentNeeded, yearsNeeded, liquidAssets, existingInsurance])

  const formattedDeficit = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(neededCapital)

  return (
    <div
      id="cotiza"
      className="w-full max-w-3xl mx-auto relative"
    >
      <div className="mb-8 text-center">
        <h2
          className="text-5xl font-regular leading-tight tracking-widest uppercase"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="text-[#006FC4]">{t("title1")}</span>
          <span className="text-[#033163]">{t("title2")}</span>
        </h2>
        <p className="mt-3 text-xl text-[#033163]">
          {t("subtitle")}
        </p>
      </div>

      {/* Form card */}
      <div className="relative z-10 rounded-2xl border border-border bg-card/80 backdrop-blur-md p-6 md:p-10 shadow-lg">
        <div className="flex flex-col gap-6">
          <RangeSlider
            label={t("labelMonthlyIncome")}
            min={500}
            max={10000}
            step={100}
            value={monthlyIncome}
            onChange={setMonthlyIncome}
            unit="$"
          />

          <RangeSlider
            label={t("labelPercentNeeded")}
            min={10}
            max={100}
            value={percentNeeded}
            onChange={setPercentNeeded}
            unit="%"
          />

          <RangeSlider
            label={t("labelYearsNeeded")}
            min={5}
            max={30}
            value={yearsNeeded}
            onChange={setYearsNeeded}
          />

          <div className="flex flex-col gap-2">
            <label className="text-base text-[#033163] leading-relaxed">
              {t("labelLiquidAssets")}
            </label>
            <input
              type="number"
              min={0}
              className="w-full rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#006FC4]/40 text-black"
              value={liquidAssets}
              onChange={(e) => setLiquidAssets(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-[#033163] leading-relaxed">
              {t("labelExistingInsurance")}
            </label>
            <input
              type="number"
              min={0}
              className="w-full rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#006FC4]/40 text-black"
              value={existingInsurance}
              onChange={(e) => setExistingInsurance(e.target.value)}
            />
          </div>
        </div>

        {/* Result */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 rounded-xl border border-[#91D8F7] bg-[#91D8F7]/20 p-4 md:p-5">
          <p className="text-base text-[#000A15] font-semibold leading-relaxed flex-1">
            {t("resultText")}
          </p>
          <div className="rounded-lg bg-[#91D8F7] border border-[#91D8F7] px-5 py-3 min-w-[180px] text-center">
            <span className="text-lg font-bold text-[#033163]">
              US {formattedDeficit}
            </span>
          </div>
        </div>
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
