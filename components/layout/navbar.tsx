"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useTranslations, useLocale } from "next-intl"
import { Link, usePathname, useRouter } from "@/i18n/navigation"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Menu as HoverMenu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import { ButtonPrimary } from "@/components/ui/button-primary"
import { LanguageSwitcher } from "@/components/layout/language-switcher"

gsap.registerPlugin(ScrollToPlugin)

const fontStyle = { fontFamily: "var(--font-noto-sans)" } as const

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
  const isBlueTheme = forceBlue || pathname === "/servicios-complementarios"
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement | null>(null)
  const logoRef = useRef<HTMLAnchorElement | null>(null)
  const linksRef = useRef<HTMLDivElement | null>(null)
  const rightRef = useRef<HTMLDivElement | null>(null)

  const navLinks = useMemo(
    () => [
      { label: t("nav.home"), href: "/", key: "home" },
      { label: t("nav.soluciones"), href: "#soluciones", hasDropdown: true, key: "soluciones" },
      { label: t("nav.nosotros"), href: "/#nosotros", key: "nosotros" },
      { label: t("nav.trabajaConNosotros"), href: "#trabaja-con-nosotros", key: "trabajaConNosotros" },
    ],
    [t],
  )

  const handleLanguageChange = (newLocale: "es" | "en") => {
    router.replace(pathname, { locale: newLocale })
  }

  useEffect(() => {
    if (!navRef.current) return

    const ctx = gsap.context(() => {
      if (logoRef.current) {
        gsap.from(logoRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
          delay: 1.4,
        })
      }

      if (linksRef.current) {
        gsap.from(linksRef.current.children, {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: "power4.out",
          stagger: 0.05,
          delay: 1.5,
        })
      }

      if (rightRef.current) {
        gsap.from(rightRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: "power4.out",
          delay: 1.6,
        })
      }
    }, navRef)

    return () => ctx.revert()
  }, [])

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
      <div
        ref={navRef}
        className={`mx-auto flex max-w-[1400px] items-center justify-between rounded-xl px-6 py-4 backdrop-blur-3xl ${
          isBlueTheme ? "bg-white/15" : "bg-[#0a1628]/35"
        }`}
      >
        {/* Logo */}
        <Link ref={logoRef} href="/" className="flex items-center">
          <Image
            src="/ifs_insurance.png"
            alt="IFS Insurance"
            width={320}
            height={64}
            className="h-12 w-auto sm:h-14 md:h-16"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div ref={linksRef} className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            if (link.key === "soluciones" && link.hasDropdown) {
              return (
                <HoverMenu key={link.key} setActive={setActiveMenuItem}>
                  <MenuItem
                    setActive={setActiveMenuItem}
                    active={activeMenuItem}
                    item={link.label}
                    className={
                      isBlueTheme
                        ? "text-[#033163] "
                        : ""
                    }
                  >
                    <div className="grid grid-cols-2 gap-4 p-4 text-sm">
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
            return (
              <Link
                key={link.key}
                href={link.href}
                className={`text-[18px] font-normal transition-colors ${
                  isBlueTheme
                    ? "text-[#033163] hover:text-[#033163]/80"
                    : "text-[#FEFEFE] hover:text-[#FEFEFE]/80"
                }`}
                style={fontStyle}
                onClick={(event) => {
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
        <div ref={rightRef} className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher
            locale={locale}
            onLanguageChange={handleLanguageChange}
            isBlueTheme={isBlueTheme}
          />

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
          className={`lg:hidden ${isBlueTheme ? "text-[#033163]" : "text-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="mt-2 rounded-xl bg-[#0a1628]/95 px-6 py-6 backdrop-blur-md lg:hidden"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`text-base font-medium transition-colors ${
                  isBlueTheme
                    ? "text-[#033163]/80 hover:text-[#033163]"
                    : ""
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
              <LanguageSwitcher
                locale={locale}
                onLanguageChange={(newLocale) => {
                  handleLanguageChange(newLocale)
                  setMobileOpen(false)
                }}
                isBlueTheme={isBlueTheme}
                size="sm"
              />
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
