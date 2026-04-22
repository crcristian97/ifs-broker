"use client"

import { useState, useMemo } from "react"
import { useTranslations } from "next-intl"
import { RangeSlider } from "@/components/ui/range-slider"
import { ButtonPrimary } from "../ui/button-primary"

const OLELIFE_URL = "https://advisorlinks.olelife.com/widget?config=be08c42f43afd0a9e1e766c5c80a4b9f&language=es&gender=1&smoker=0&country=AR&coverage=500000&frequency=MONTHLY&term=T20%22&version=3.0.0"

export function RetirementForm() {
  const t = useTranslations("retirementForm")
  const [showOlelife, setShowOlelife] = useState(false)

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
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-regular tracking-widest uppercase"
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
            <label className="text-base text-[#033163]">
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
            <label className="text-base text-[#033163]">
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
          <p className="text-base text-[#000A15] font-semibold flex-1">
            {t("resultText")}
          </p>
          <div className="rounded-lg bg-[#91D8F7] border border-[#91D8F7] px-5 py-3 min-w-[180px] text-center">
            <span className="text-lg font-bold text-[#033163]">
              US {formattedDeficit}
            </span>
          </div>
        </div>
        <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-3 mt-8 pb-8">
          <ButtonPrimary
            href="https://calendly.com/administracion-ifs-broker/30min"
            target="_blank"
            hover="hover:bg-[#91D8F7] hover:border-[#91D8F7] hover:text-[#006FC4]/60"
          >
            {t("button")}
          </ButtonPrimary>
          <ButtonPrimary
            href="#"
            hover="hover:bg-[#91D8F7] hover:border-[#91D8F7] hover:text-[#006FC4]/60"
            onClick={(e) => {
              e.preventDefault()
              setShowOlelife(true)
            }}
          >
            Cotizá online
          </ButtonPrimary>
        </div>
        {showOlelife && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setShowOlelife(false)}
          >
            <div
              className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-4 z-10 text-2xl text-gray-500 hover:text-gray-900"
                onClick={() => setShowOlelife(false)}
              >
                ×
              </button>
              <iframe
                src={OLELIFE_URL}
                className="w-full h-[600px] border-0"
                title="Cotizá online"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
