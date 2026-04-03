"use client"

import { cn } from "@/lib/utils"

type LanguageSwitcherProps = {
  locale: string
  onLanguageChange: (newLocale: "es" | "en") => void
  size?: "sm" | "md"
}

export function LanguageSwitcher({
  locale,
  onLanguageChange,
  size = "md",
}: LanguageSwitcherProps) {
  const textSize = size === "sm" ? "text-sm font-semibold" : "text-lg font-normal"

  const buttonClass = (isActive: boolean) =>
    cn(
      "px-3 py-1.5 transition-colors",
      textSize,
      isActive
        ? "bg-white/15 text-[#FEFEFE]"
        : "text-[#FEFEFE]/70 hover:text-[#FEFEFE]",
    )

  return (
    <div className="flex overflow-hidden rounded-md border border-white/25">
      <button
        onClick={() => onLanguageChange("es")}
        className={buttonClass(locale === "es")}
        aria-label="Cambiar a Español"
        style={{ fontFamily: "var(--font-noto-sans)" }}
      >
        ES
      </button>
      <button
        onClick={() => onLanguageChange("en")}
        className={buttonClass(locale === "en")}
        aria-label="Switch to English"
        style={{ fontFamily: "var(--font-noto-sans)" }}
      >
        EN
      </button>
    </div>
  )
}
