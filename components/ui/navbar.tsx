"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Blog", href: "#blog" },
  { label: "Trabaja con nosotros", href: "#trabaja" },
]

export function Navbar() {
  const [activeLanguage, setActiveLanguage] = useState<"ES" | "EN">("ES")
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between rounded-xl bg-[#0a1628]/80 px-6 py-4 backdrop-blur-md">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide text-foreground md:text-2xl">
          IFS Broker
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Language Switcher */}
          <div className="flex overflow-hidden rounded-md border border-foreground/20">
            <button
              onClick={() => setActiveLanguage("ES")}
              className={`px-3 py-1.5 text-sm font-semibold transition-colors ${
                activeLanguage === "ES"
                  ? "bg-foreground/10 text-foreground"
                  : "text-foreground/60 hover:text-foreground/80"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setActiveLanguage("EN")}
              className={`px-3 py-1.5 text-sm font-semibold transition-colors ${
                activeLanguage === "EN"
                  ? "bg-foreground/10 text-foreground"
                  : "text-foreground/60 hover:text-foreground/80"
              }`}
            >
              EN
            </button>
          </div>

          {/* Contact Button */}
          <Link
            href="#contacto"
            className="rounded-lg bg-[#006fc4] px-6 py-2 text-18px font-bold text-white transition-colors hover:bg-[#006fc4]/90"
          >
            Contacto
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mt-2 rounded-xl bg-[#0a1628]/95 px-6 py-6 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-4 border-t border-foreground/10">
              <div className="flex overflow-hidden rounded-md border border-foreground/20">
                <button
                  onClick={() => setActiveLanguage("ES")}
                  className={`px-3 py-1.5 text-sm font-semibold transition-colors ${
                    activeLanguage === "ES"
                      ? "bg-foreground/10 text-foreground"
                      : "text-foreground/60"
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setActiveLanguage("EN")}
                  className={`px-3 py-1.5 text-sm font-semibold transition-colors ${
                    activeLanguage === "EN"
                      ? "bg-foreground/10 text-foreground"
                      : "text-foreground/60"
                  }`}
                >
                  EN
                </button>
              </div>
              <Link
                href="#contacto"
                className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                onClick={() => setMobileOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
