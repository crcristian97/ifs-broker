"use client"

import { useState } from "react"
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
}

function QuestionSelect({ label, options, value, onChange }: QuestionSelectProps) {
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
        <option value="">Seleccionar</option>
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
  const [q1, setQ1] = useState("")
  const [q2, setQ2] = useState("")
  const [q3, setQ3] = useState("")
  const [q4, setQ4] = useState("")
  const [q5, setQ5] = useState("")
  const [q6, setQ6] = useState("")
  const [q7, setQ7] = useState("")

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      {/* Título y subtítulo */}
      <div className="mb-8 text-center">
        <h2
          className="text-5xl font-regular leading-tight"
          style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}
        >
          <span className="text-[#006FC4]">Conocé tu </span>
          <span className="text-[#033163]">perfil de inversión</span>
        </h2>
        <p className="mt-3 text-xl text-[#033163]">
          Seleccioná una opción en cada pregunta para ayudarnos a entender tus
          objetivos y tolerancia al riesgo.
        </p>
      </div>

      {/* Form card */}
      <div className="relative z-10 rounded-2xl border border-border bg-card/80 backdrop-blur-md p-6 md:p-10 shadow-lg">
        <div className="flex flex-col gap-6">
          <QuestionSelect
            label="¿Qué porcentaje de sus activos líquidos piensa invertir?"
            value={q1}
            onChange={setQ1}
            options={[
              { value: "lt25", label: "Menos del 25%" },
              { value: "25-50", label: "Entre 25% y 50%" },
              { value: "50-75", label: "Entre 50% y 75%" },
              { value: "gt75", label: "Más del 75%" },
            ]}
          />

          <QuestionSelect
            label="¿Cuál es su expectativa de rendimiento y volatilidad anualizada a largo plazo?"
            value={q2}
            onChange={setQ2}
            options={[
              { value: "baja", label: "Bajo rendimiento / baja volatilidad" },
              { value: "media", label: "Rendimiento medio / volatilidad moderada" },
              { value: "alta", label: "Alto rendimiento / alta volatilidad" },
            ]}
          />

          <QuestionSelect
            label="¿Cuál es su actitud sobre la volatilidad de las inversiones?"
            value={q3}
            onChange={setQ3}
            options={[
              { value: "evita", label: "Prefiere evitarla" },
              { value: "tolera", label: "La tolera si es razonable" },
              { value: "busca", label: "Está dispuesto a asumir alta volatilidad" },
            ]}
          />

          <QuestionSelect
            label="¿Qué espera que suceda con sus ingresos mientras usted mantenga su inversión?"
            value={q4}
            onChange={setQ4}
            options={[
              { value: "estable", label: "Que se mantengan estables" },
              { value: "crecientes", label: "Que crezcan moderadamente" },
              { value: "variables", label: "Acepta variaciones importantes" },
            ]}
          />

          <QuestionSelect
            label="¿Cuál es el objetivo de su inversión?"
            value={q5}
            onChange={setQ5}
            options={[
              { value: "preservar", label: "Preservar capital" },
              { value: "mixto", label: "Equilibrio entre crecimiento y preservación" },
              { value: "crecer", label: "Maximizar crecimiento de capital" },
            ]}
          />

          <QuestionSelect
            label="¿Qué haría si su inversión cayera 10% en 3 meses?"
            value={q6}
            onChange={setQ6}
            options={[
              { value: "vender", label: "Vendería toda o gran parte de la inversión" },
              { value: "mantener", label: "Mantendría la inversión sin cambios" },
              { value: "aumentar", label: "Aprovecharía para invertir más" },
            ]}
          />

          <QuestionSelect
            label="¿Por cuánto tiempo quiere invertir este dinero?"
            value={q7}
            onChange={setQ7}
            options={[
              { value: "lt3", label: "Menos de 3 años" },
              { value: "3-7", label: "Entre 3 y 7 años" },
              { value: "7-15", label: "Entre 7 y 15 años" },
              { value: "gt15", label: "Más de 15 años" },
            ]}
          />
        </div>

        {/* Info box */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 rounded-xl border border-[#91D8F7] bg-[#91D8F7]/20 p-4 md:p-5">
          <p className="text-base text-[#000A15] font-bold leading-relaxed flex-1">
            Tus respuestas nos permiten definir un perfil de inversión alineado
            a tus objetivos y tolerancia al riesgo.
          </p>
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
        <InvestmentProfiles
          items={[
            {
              title: "Crecimiento",
              description:
                "Si está interesado en invertir más de US$ 10,000 y desea recibir opciones personalizadas de inversión, por favor, póngase en contacto con nosotros a través de las siguientes opciones.",
              cardBg: "#E6F2FF",
              circleBg: "#2F80ED",
            },
            {
              title: "Conservador",
              description:
                "Perfil orientado a la preservación de capital, priorizando estabilidad y baja volatilidad en el tiempo.",
              cardBg: "#FDFDE5",
              circleBg: "#F2C94C",
            },
            {
              title: "Balanceado",
              description:
                "Combina crecimiento y protección a través de una mezcla equilibrada de activos defensivos y de mayor retorno.",
              cardBg: "#E9FDEE",
              circleBg: "#27AE60",
            },
            {
              title: "Agresivo",
              description:
                "Enfocado en maximizar el crecimiento del capital, aceptando una mayor volatilidad en el corto y mediano plazo.",
              cardBg: "#FFECEF",
              circleBg: "#EB5757",
            },
          ]}
        />
    </div>
  )
}

