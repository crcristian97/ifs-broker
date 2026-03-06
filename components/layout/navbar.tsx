"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import gsap from "gsap"
import { Menu as HoverMenu, MenuItem, ProductItem } from "../ui/navbar-menu"
import { ButtonPrimary } from "../ui/button-primary"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Soluciones", href: "#soluciones", hasDropdown: true },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Trabaja con nosotros", href: "#trabaja-con-nosotros" },
]

export function Navbar() {
  const pathname = usePathname()
  const isServiciosComplementarios = pathname === "/servicios-complementarios"
  const [activeLanguage, setActiveLanguage] = useState<"ES" | "EN">("ES")
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!navRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(".nav-logo", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        delay: 1.4,
      })

      gsap.from(".nav-link", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power4.out",
        stagger: 0.05,
        delay: 1.5,
      })

      gsap.from(".nav-right", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power4.out",
        delay: 1.6,
      })
    }, navRef)

    return () => ctx.revert()
  }, [])

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
      <div
        ref={navRef}
        className="mx-auto flex max-w-[1400px] items-center justify-between rounded-xl px-6 py-4 backdrop-blur-md"
      >
        {/* Logo */}
        <Link href="/" className="nav-logo flex items-center">
          <Image
            src="/ifs_insurance.png"
            alt="IFS Insurance"
            width={200}
            height={40}
            className="h-8 w-auto md:h-10"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            if (link.label === "Soluciones" && link.hasDropdown) {
              return (
                <HoverMenu key={link.label} setActive={setActiveMenuItem}>
                  <MenuItem
                    setActive={setActiveMenuItem}
                    active={activeMenuItem}
                    item={link.label}
                    className={
                      isServiciosComplementarios
                        ? "text-[#033163] hover:text-[#033163]/80"
                        : ""
                    }
                  >
                    <div className="text-sm grid grid-cols-2 gap-4 p-4">
                      <ProductItem
                        title="Seguro de vida"
                        href="/seguros-de-vida"
                        src="/seguro/seguro-de-vida.webp"
                        description="Protección financiera ante el fallecimiento del asegurado"
                      />
                      <ProductItem
                        title="Fondos de retiro"
                        href="/fondos-de-retiro"
                        src="/retiro/fondos-de-retiro.webp"
                        description="Construcción de ingresos futuros para el retiro"
                      />
                      <ProductItem
                        title="Salud internacional"
                        href="/salud-internacional"
                        src="/seguro/cobertura-salud-internacional.webp"
                        description="Cobertura médica internacional con acceso a redes globales"
                      />
                      <ProductItem
                        title="Servicios complementarios"
                        href="/servicios-complementarios"
                        src="/seguro/cebertura-viaje.webp"
                        description="Servicios complementarios para tu planificación financiera"
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
                className={`nav-link text-[18px] font-normal transition-colors ${
                  isServiciosComplementarios
                    ? "text-[#033163] hover:text-[#033163]/80"
                    : "text-[#FEFEFE] hover:text-[#FEFEFE]/80"
                }`}
                style={{ fontFamily: 'var(--font-noto-sans), sans-serif' }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Right side */}
        <div className="nav-right hidden items-center gap-3 lg:flex">
          {/* Language Switcher */}
          <div className="flex overflow-hidden rounded-md border border-foreground/20">
            <button
              onClick={() => setActiveLanguage("ES")}
              className={`px-3 py-1.5 text-lg font-normal transition-colors ${
                activeLanguage === "ES"
                  ? isServiciosComplementarios
                    ? "bg-[#033163]/10 text-[#033163]"
                    : "bg-foreground/10 text-foreground"
                  : isServiciosComplementarios
                    ? "text-[#033163]/60 hover:text-[#033163]/80"
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
                  ? isServiciosComplementarios
                    ? "bg-[#033163]/10 text-[#033163]"
                    : "bg-foreground/10 text-foreground"
                  : isServiciosComplementarios
                    ? "text-[#033163]/60 hover:text-[#033163]/80"
                    : "text-foreground/60 hover:text-foreground/80"
              }`}
              style={{ fontFamily: 'var(--font-noto-sans), sans-serif' }}
            >
              EN
            </button>
          </div>

          {/* Contact Button */}
          <ButtonPrimary href="#contacto" hover="hover:bg-[#FEFEFE] hover:border-[#FEFEFE] hover:text-[#033163]">Contacto</ButtonPrimary>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={`lg:hidden ${isServiciosComplementarios ? "text-[#033163]" : "text-foreground"}`}
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
                className={`text-base font-medium transition-colors ${
                  isServiciosComplementarios
                    ? "text-[#033163]/80 hover:text-[#033163]"
                    : "text-foreground/80 hover:text-foreground"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-4 border-t border-foreground/10">
              <div className="flex overflow-hidden rounded-lg border border-foreground/20">
                <button
                  onClick={() => setActiveLanguage("ES")}
                  className={`px-3 py-1.5 text-sm font-semibold transition-colors ${
                    activeLanguage === "ES"
                      ? isServiciosComplementarios
                        ? "bg-[#033163]/10 text-[#033163]"
                        : "bg-foreground/10 text-foreground"
                      : isServiciosComplementarios
                        ? "text-[#033163]/60"
                        : "text-foreground/60"
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setActiveLanguage("EN")}
                  className={`px-3 py-1.5 text-sm font-semibold transition-colors ${
                    activeLanguage === "EN"
                      ? isServiciosComplementarios
                        ? "bg-[#033163]/10 text-[#033163]"
                        : "bg-foreground/10 text-foreground"
                      : isServiciosComplementarios
                        ? "text-[#033163]/60"
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
