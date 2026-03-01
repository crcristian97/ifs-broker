"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Menu as HoverMenu, MenuItem, ProductItem } from "./navbar-menu"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Soluciones", href: "#soluciones", hasDropdown: true },
  { label: "Nosotros", href: "#nosotros" },
]

export function Navbar() {
  const [activeLanguage, setActiveLanguage] = useState<"ES" | "EN">("ES")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between rounded-xl bg-[#0a1628]/80 px-6 py-4 backdrop-blur-md">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide text-foreground md:text-2xl">
          IFS Broker
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            if (link.label === "Soluciones" && link.hasDropdown) {
              return (
                <HoverMenu key={link.label} setActive={setActiveMenuItem}>
                  <MenuItem setActive={setActiveMenuItem} active={activeMenuItem} item={link.label}>
                    <div className="text-sm grid grid-cols-2 gap-4 p-4">
                      <ProductItem
                        title="Seguro de vida"
                        href="#seguro-vida"
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=280&h=140&fit=crop"
                        description="Protección financiera ante el fallecimiento del asegurado"
                      />
                      <ProductItem
                        title="Fondos de retiro"
                        href="#fondos-retiro"
                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=280&h=140&fit=crop"
                        description="Construcción de ingresos futuros para el retiro"
                      />
                      <ProductItem
                        title="Salud internacional"
                        href="#salud-internacional"
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=280&h=140&fit=crop"
                        description="Cobertura médica internacional con acceso a redes globales"
                      />
                    </div>
                  </MenuItem>
                </HoverMenu>
              )
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-[18px] font-normal text-[#FEFEFE] transition-colors hover:text-[#FEFEFE]/80"
                style={{ fontFamily: 'var(--font-noto-sans), sans-serif' }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Right side */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Language Switcher */}
          <div className="flex overflow-hidden rounded-lg border border-foreground/20">
            <button
              onClick={() => setActiveLanguage("ES")}
              className={`px-3 py-1.5 text-lg font-normal transition-colors rounded-lg ${
                activeLanguage === "ES"
                  ? "bg-[#033163] text-foreground"
                  : "text-foreground/60 hover:text-foreground/80"
              }`}
              style={{ fontFamily: 'var(--font-noto-sans), sans-serif' }}
            >
              ES
            </button>
            <button
              onClick={() => setActiveLanguage("EN")}
              className={`px-3 py-1.5 text-lg font-normal transition-colors rounded-lg ${
                activeLanguage === "EN"
                  ? "bg-[#033163] text-foreground"
                  : "text-foreground/60 hover:text-foreground/80"
              }`}
              style={{ fontFamily: 'var(--font-noto-sans), sans-serif' }}
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
