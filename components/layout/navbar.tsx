"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useTranslations, useLocale } from "next-intl"
import { Link, usePathname, useRouter } from "@/i18n/navigation"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Menu as HoverMenu, MenuItem, ProductItem } from "@/components/ui/navbar-menu"
import { LanguageSwitcher } from "@/components/layout/language-switcher"
import { cn } from "@/lib/utils"
import { getLenis } from "@/lib/lenis"
import { sitePaddingX } from "@/lib/site-layout"

gsap.registerPlugin(ScrollToPlugin)

const fontStyle = { fontFamily: "var(--font-noto-sans)" } as const

const navLinkPillClass =
  "relative rounded-lg px-3 py-2 text-[18px] font-normal text-[#FEFEFE] transition-colors duration-200 hover:bg-[#006FC4] hover:text-[#FEFEFE]"

const scrollToSection = (id: string) => {
  if (typeof window === "undefined") return
  const element = document.getElementById(id)
  if (!element) return

  const lenis = getLenis()
  if (lenis) {
    lenis.scrollTo(element, { offset: -80, duration: 1 })
    return
  }

  gsap.to(window, {
    duration: 1,
    ease: "power2.out",
    scrollTo: { y: element, offsetY: 80 },
  })
}

type NavbarProps = {
  disableEntranceAnimation?: boolean
}

export function Navbar({ disableEntranceAnimation = false }: NavbarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSolucionesOpen, setMobileSolucionesOpen] = useState(false)
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
      { label: t("nav.trabajaConNosotros"), href: "/trabaja-con-nosotros", key: "trabajaConNosotros" },
    ],
    [t],
  )

  const handleLanguageChange = (newLocale: "es" | "en") => {
    router.replace(pathname, { locale: newLocale })
  }

  useEffect(() => {
    if (disableEntranceAnimation) return
    if (!navRef.current) return

    const ctx = gsap.context(() => {
      if (logoRef.current) {
        gsap.from(logoRef.current, {
          y: -20,
          duration: 0.8,
          ease: "power4.out",
          delay: 1.4,
        })
      }

      if (linksRef.current) {
        gsap.from(linksRef.current.children, {
          y: 20,
          duration: 0.7,
          ease: "power4.out",
          stagger: 0.05,
          delay: 1.5,
        })
      }

      if (rightRef.current) {
        gsap.from(rightRef.current, {
          y: 20,
          duration: 0.7,
          ease: "power4.out",
          delay: 1.6,
        })
      }
    }, navRef)

    return () => ctx.revert()
  }, [disableEntranceAnimation])

  return (
    <nav className={cn("absolute top-0 left-0 right-0 z-50 pt-4 md:pt-6", sitePaddingX)}>
      <div
        ref={navRef}
        className="mx-auto flex max-w-[1400px] items-center justify-between rounded-xl bg-[#033163] backdrop-blur-3xl"
      >
        {/* Logo */}
        <Link ref={logoRef} href="/" className="flex items-center">
          <Image
            src="/ifs-logo.svg"
            alt="IFS Insurance"
            width={320}
            height={70}
            className="h-10 w-auto sm:h-14 md:h-16 lg:h-20"
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
                    className="text-[#FEFEFE] hover:text-[#FEFEFE]/80"
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
                        src="/retiro/fondos-de-retiro-ifs.webp"
                        description={t("solutions.fondosRetiro.description")}
                      />
                      <ProductItem
                        title={t("solutions.saludInternacional.title")}
                        href="/salud-internacional"
                        src="/retiro/salud-internacional-ifs.webp"
                        description={t("solutions.saludInternacional.description")}
                        imageClassName="object-[center_10%_bottom]"
                      />
                      <ProductItem
                        title={t("solutions.serviciosComplementarios.title")}
                        href="/servicios-complementarios"
                        src="/seguro-complementarios.webp"
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
                className={navLinkPillClass}
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
          <LanguageSwitcher locale={locale} onLanguageChange={handleLanguageChange} />
        
          <button
            type="button"
            className="mr-3 rounded-md border border-[#006fc4] bg-[#006fc4] px-3 py-1.5 text-lg font-normal text-white transition-colors hover:bg-[#FEFEFE] hover:border-[#FEFEFE] hover:text-[#033163] cursor-pointer font-semibold"
            onClick={() => scrollToSection("contacto")}
          >
            {t("nav.contacto")}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="mr-3 text-[#FEFEFE] lg:hidden"
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
          className="mt-2 rounded-xl bg-[#033163]/95 px-6 py-6 backdrop-blur-md lg:hidden"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              if (link.key === "soluciones" && link.hasDropdown) {
                return (
                  <div key={link.key}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-[#FEFEFE] transition-colors duration-200 hover:bg-[#006FC4]"
                      onClick={() => setMobileSolucionesOpen((v) => !v)}
                      aria-expanded={mobileSolucionesOpen}
                    >
                      {link.label}
                      <ChevronDown className={cn("ml-0.5 h-4 w-4 transition-transform duration-200", mobileSolucionesOpen && "rotate-180")} />
                    </button>
                    {mobileSolucionesOpen && (
                      <div className="mt-1 flex flex-col gap-1 pl-3">
                        <Link
                          href="/seguros-de-vida"
                          className="rounded-lg px-3 py-2 text-sm text-[#FEFEFE]/90 transition-colors duration-200 hover:bg-[#006FC4] hover:text-[#FEFEFE]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {t("solutions.seguroVida.title")}
                        </Link>
                        <Link
                          href="/fondos-de-retiro"
                          className="rounded-lg px-3 py-2 text-sm text-[#FEFEFE]/90 transition-colors duration-200 hover:bg-[#006FC4] hover:text-[#FEFEFE]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {t("solutions.fondosRetiro.title")}
                        </Link>
                        <Link
                          href="/salud-internacional"
                          className="rounded-lg px-3 py-2 text-sm text-[#FEFEFE]/90 transition-colors duration-200 hover:bg-[#006FC4] hover:text-[#FEFEFE]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {t("solutions.saludInternacional.title")}
                        </Link>
                        <Link
                          href="/servicios-complementarios"
                          className="rounded-lg px-3 py-2 text-sm text-[#FEFEFE]/90 transition-colors duration-200 hover:bg-[#006FC4] hover:text-[#FEFEFE]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {t("solutions.serviciosComplementarios.title")}
                        </Link>
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-base font-medium text-[#FEFEFE] transition-colors duration-200 hover:bg-[#006FC4] hover:text-[#FEFEFE]"
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
              )
            })}
            <div className="flex items-center gap-3 border-t border-white/15 pt-4">
              <LanguageSwitcher
                locale={locale}
                onLanguageChange={(newLocale) => {
                  handleLanguageChange(newLocale)
                  setMobileOpen(false)
                }}
                size="sm"
              />
              <button
                className="rounded-lg border border-[#006fc4] bg-[#006fc4] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#006fc4]/90 flex-1"
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
