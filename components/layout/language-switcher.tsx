"use client"

import { cn } from "@/lib/utils"

type LanguageSwitcherProps = {
  locale: string
  onLanguageChange: (newLocale: "es" | "en") => void
  isBlueTheme: boolean
  size?: "sm" | "md"
}

export function LanguageSwitcher({
  locale,
  onLanguageChange,
  isBlueTheme,
  size = "md",
}: LanguageSwitcherProps) {
  const textSize = size === "sm" ? "text-sm font-semibold" : "text-lg font-normal"

  const buttonClass = (isActive: boolean) =>
    cn(
      "px-3 py-1.5 transition-colors",
      textSize,
      isActive
        ? isBlueTheme
          ? "bg-[#033163]/10 text-[#033163]"
          : "bg-white/15 text-[#FEFEFE]"
        : isBlueTheme
          ? "text-[#033163]/60 hover:text-[#033163]/80"
          : "text-[#FEFEFE]/70 hover:text-[#FEFEFE]",
    )

  return (
    <div
      className={cn(
        "flex overflow-hidden rounded-md border",
        isBlueTheme ? "border-[#033163]/25" : "border-white/25",
      )}
    >
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
