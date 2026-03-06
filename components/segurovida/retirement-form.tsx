"use client"

import { useState, useMemo } from "react"
import { RangeSlider } from "@/components/ui/range-slider"
import { ButtonPrimary } from "../ui/button-primary"

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
      {/* Título y subtítulo */}
      <div className="mb-8 text-center">
        <h2
          className="text-5xl font-regular leading-tight"
          style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}
        >
          <span className="text-[#006FC4]">Cotiza tu </span>
          <span className="text-[#033163]">fondo de retiro</span>
        </h2>
        <p className="mt-3 text-xl text-[#033163]">
          Desliza el botón que está sobre la barra horizontal para modificar su información
        </p>
      </div>

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
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 rounded-xl border border-[#91D8F7] bg-[#91D8F7]/20 p-4 md:p-5">
          <p className="text-base text-[#000A15] font-bold leading-relaxed flex-1">
            Este es el déficit que debería ser cubierto por un seguro de vida
          </p>
          <div className="rounded-lg bg-[#91D8F7] border border-[#91D8F7] px-5 py-3 min-w-[180px] text-center">
            <span className="text-lg font-bold text-[#033163]">
              US {formattedDeficit}
            </span>
          </div>
        </div>
        <div className="relative z-10 flex justify-center mt-8 pb-8"> 
          <ButtonPrimary        
          href="#agenda"
          hover="hover:bg-[#91D8F7] hover:border-[#91D8F7] hover:text-[#006FC4]/60"
        >
          Agenda una reunión
        </ButtonPrimary>
        </div>
      </div>
    </div>
  )
}
