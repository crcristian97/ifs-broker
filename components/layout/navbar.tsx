"use client"

import { Link, usePathname, useRouter } from "@/i18n/navigation"
import Image from "next/image"
import { useEffect, useRef, useState, MouseEvent } from "react"
import { Menu, X } from "lucide-react"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useTranslations, useLocale } from "next-intl"
import { Menu as HoverMenu, MenuItem, ProductItem } from "../ui/navbar-menu"
import { ButtonPrimary } from "../ui/button-primary"

gsap.registerPlugin(ScrollToPlugin)

const scrollToSection = (id: string) => {
  if (typeof window === "undefined") return
  const element = document.getElementById(id)
  if (!element) return

  gsap.to(window, {
    duration: 1,
    ease: "power2.out",
    scrollTo: { y: element, offsetY: 80 },
  })
}

type NavbarProps = {
  forceBlue?: boolean
}

export function Navbar({ forceBlue = false }: NavbarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations()
  const isServiciosComplementarios = forceBlue || pathname === "/servicios-complementarios"
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement | null>(null)

  const navLinks = [
    { label: t("nav.home"), href: "/", key: "home" },
    { label: t("nav.soluciones"), href: "#soluciones", hasDropdown: true, key: "soluciones" },
    { label: t("nav.nosotros"), href: "/#nosotros", key: "nosotros" },
    { label: t("nav.trabajaConNosotros"), href: "#trabaja-con-nosotros", key: "trabajaConNosotros" },
  ]

  const handleLanguageChange = (newLocale: "es" | "en") => {
    router.replace(pathname, { locale: newLocale })
  }

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
            src={isServiciosComplementarios ? "/ifs_insurance.png" : "/ifs_insurance_white.png"}
            alt="IFS Insurance"
            width={260}
            height={52}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            if (link.key === "soluciones" && link.hasDropdown) {
              return (
                <HoverMenu key={link.key} setActive={setActiveMenuItem}>
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
                        title={t("solutions.seguroVida.title")}
                        href="/seguros-de-vida"
                        src="/seguro/seguro-de-vida.webp"
                        description={t("solutions.seguroVida.description")}
                      />
                      <ProductItem
                        title={t("solutions.fondosRetiro.title")}
                        href="/fondos-de-retiro"
                        src="/retiro/fondos-de-retiro.webp"
                        description={t("solutions.fondosRetiro.description")}
                      />
                      <ProductItem
                        title={t("solutions.saludInternacional.title")}
                        href="/salud-internacional"
                        src="/seguro/cobertura-salud-internacional.webp"
                        description={t("solutions.saludInternacional.description")}
                      />
                      <ProductItem
                        title={t("solutions.serviciosComplementarios.title")}
                        href="/servicios-complementarios"
                        src="/seguro/cebertura-viaje.webp"
                        description={t("solutions.serviciosComplementarios.description")}
                      />
                    </div>
                  </MenuItem>
                </HoverMenu>
              )
            }
            // Regular nav links
            return (
              <Link
                key={link.key}
                href={link.href}
                className={`nav-link text-[18px] font-normal transition-colors ${
                  isServiciosComplementarios
                    ? "text-[#033163] hover:text-[#033163]/80"
                    : "text-[#FEFEFE] hover:text-[#FEFEFE]/80"
                }`}
                style={{ fontFamily: 'var(--font-noto-sans)' }}
                onClick={(event) => {
                  // Smooth scroll for "Nosotros" when already on home
                  if (link.key === "nosotros" && pathname === "/") {
                    event.preventDefault()
                    scrollToSection("nosotros")
                  }
                }}
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
              onClick={() => handleLanguageChange("es")}
              className={`px-3 py-1.5 text-lg font-normal transition-colors ${
                locale === "es"
                  ? isServiciosComplementarios
                    ? "bg-[#033163]/10 text-[#033163]"
                    : "bg-foreground/10 text-foreground"
                  : isServiciosComplementarios
                    ? "text-[#033163]/60 hover:text-[#033163]/80"
                    : "text-foreground/60 hover:text-foreground/80"
              }`}
              style={{ fontFamily: 'var(--font-noto-sans)' }}
            >
              ES
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className={`px-3 py-1.5 text-lg font-normal transition-colors rounded-lg ${
                locale === "en"
                  ? isServiciosComplementarios
                    ? "bg-[#033163]/10 text-[#033163]"
                    : "bg-foreground/10 text-foreground"
                  : isServiciosComplementarios
                    ? "text-[#033163]/60 hover:text-[#033163]/80"
                    : "text-foreground/60 hover:text-foreground/80"
              }`}
              style={{ fontFamily: 'var(--font-noto-sans)' }}
            >
              EN
            </button>
          </div>

          {/* Contact Button */}
          <ButtonPrimary
            href="#contacto"
            hover="hover:bg-[#FEFEFE] hover:border-[#FEFEFE] hover:text-[#033163]"
            onClick={(event) => {
              event.preventDefault()
              scrollToSection("contacto")
            }}
          >
            {t("nav.contacto")}
          </ButtonPrimary>
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
                key={link.key}
                href={link.href}
                className={`text-base font-medium transition-colors ${
                  isServiciosComplementarios
                    ? "text-[#033163]/80 hover:text-[#033163]"
                    : "text-foreground/80 hover:text-foreground"
                }`}
                onClick={(event) => {
                  if (link.key === "nosotros" && pathname === "/") {
                    event.preventDefault()
                    scrollToSection("nosotros")
                    setMobileOpen(false)
                  } else {
                    setMobileOpen(false)
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-4 border-t border-foreground/10">
              <div className="flex overflow-hidden rounded-lg border border-foreground/20">
                <button
                  onClick={() => {
                    handleLanguageChange("es")
                    setMobileOpen(false)
                  }}
                  className={`px-3 py-1.5 text-sm font-semibold transition-colors ${
                    locale === "es"
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
                  onClick={() => {
                    handleLanguageChange("en")
                    setMobileOpen(false)
                  }}
                  className={`px-3 py-1.5 text-sm font-semibold transition-colors ${
                    locale === "en"
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
              <button
                className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection("contacto")
                  setMobileOpen(false)
                }}
              >
                {t("nav.contacto")}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
