"use client"

import { useState, useMemo } from "react"
import { RangeSlider } from "@/components/ui/range-slider"

export function RetirementForm() {
  const [yearsToStart, setYearsToStart] = useState(16)
  const [yearsOfRent, setYearsOfRent] = useState(16)
  const [monthlyRent, setMonthlyRent] = useState(3000)
  const [inflation, setInflation] = useState(3)
  const [profitability, setProfitability] = useState(5)
  const [coveragePercent, setCoveragePercent] = useState(70)

  const deficit = useMemo(() => {
    const annualRent = monthlyRent * 12
    const inflationFactor = Math.pow(1 + inflation / 100, yearsToStart)
    const futureAnnualRent = annualRent * inflationFactor
    const realRate = (profitability - inflation) / 100

    let totalNeeded: number
    if (realRate === 0) {
      totalNeeded = futureAnnualRent * yearsOfRent
    } else {
      totalNeeded =
        futureAnnualRent *
        ((1 - Math.pow(1 + realRate, -yearsOfRent)) / realRate)
    }

    const covered = totalNeeded * (coveragePercent / 100)
    const deficitValue = totalNeeded - covered

    return deficitValue
  }, [yearsToStart, yearsOfRent, monthlyRent, inflation, profitability, coveragePercent])

  const formattedDeficit = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(deficit)

  return (
    <div
      className="w-full max-w-3xl mx-auto relative"
     
    >
      {/* Overlay for Blur/Dim effect */}
      <div className="absolute inset-0 z-0 rounded-2xl bg-white/90 backdrop-blur-[2px] md:backdrop-blur-md"></div>
      {/* Form card */}
      <div className="relative z-10 rounded-2xl border border-border bg-card/80 backdrop-blur-md p-6 md:p-10 shadow-lg">
        <div className="flex flex-col gap-6">
          <RangeSlider
            label="¿En cuántos años quisiera empezar a recibir una renta mensual?"
            min={1}
            max={40}
            value={yearsToStart}
            onChange={setYearsToStart}
          />

          <RangeSlider
            label="¿Cuántos años desea que le dure la renta de su jubilación?"
            min={1}
            max={40}
            value={yearsOfRent}
            onChange={setYearsOfRent}
          />

          <RangeSlider
            label="A valor de hoy ¿Qué renta mensual desearía recibir cuando se jubile? (en $UDS)"
            min={500}
            max={20000}
            step={100}
            value={monthlyRent}
            onChange={setMonthlyRent}
            unit="$"
          />

          <RangeSlider
            label="Elija el porcentaje de inflación anual en $US que desea utilizar para estos cálculos (en %)"
            min={1}
            max={15}
            value={inflation}
            onChange={setInflation}
            unit="%"
          />

          <RangeSlider
            label="Elija la rentabilidad anual porcentual que espera obtener por su fondo una vez que empiecen los retiros (en %)"
            min={1}
            max={20}
            value={profitability}
            onChange={setProfitability}
            unit="%"
          />

          <RangeSlider
            label="¿Qué porcentaje del fondo de pensión desea que este plan le cubra? (en %)"
            min={1}
            max={100}
            value={coveragePercent}
            onChange={setCoveragePercent}
            unit="%"
          />
        </div>

        {/* Result */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 rounded-xl border border-accent bg-accent/20 p-4 md:p-5">
          <p className="text-sm md:text-base text-card-foreground font-medium leading-relaxed flex-1">
            Este es el déficit que debería ser cubierto por un seguro de vida
          </p>
          <div className="rounded-lg bg-accent/30 border border-accent px-5 py-3 min-w-[180px] text-center">
            <span className="text-lg md:text-xl font-bold text-primary">
              US {formattedDeficit}
            </span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="relative z-10 flex justify-center mt-8 pb-8">
        <button
          type="button"
          className="rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Agenda una reunión
        </button>
      </div>
    </div>
  )
}
