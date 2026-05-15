"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import { siteContainer, sitePaddingX } from "@/lib/site-layout"
import { FeatureBar } from "@/components/ui/feature-bar"
import { ContactModal } from "@/components/layout/contact-modal"

type FooterLink = {
  href: string
  label: string
  bold?: boolean
  small?: boolean
}

const features = [
  {
    icon: <Phone className="h-5 w-5 shrink-0" />,
    title: "+54 9 3512 42 3294",
  },
  {
    icon: <Mail className="h-5 w-5 shrink-0" />,
    title: "administracion@ifs-broker.com",
  },
  {
    icon: <MapPin className="h-5 w-5 shrink-0" />,
    title: "16192 Coastal Highway, Lewes, Delaware 19958, Sussex",
  },
]

export function Footer() {
  const t = useTranslations("footer")
  const tNav = useTranslations("nav")
  const tSolutions = useTranslations("solutions")
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const footerColumns: { title?: string; links: FooterLink[] }[] = [
    {
      links: [{ href: "/", label: tNav("home"), bold: true }],
    },
    {
      title: tNav("soluciones"),
      links: [
        { href: "/seguros-de-vida", label: tSolutions("seguroVida.title"), small: true },
        { href: "/fondos-de-retiro", label: tSolutions("fondosRetiro.title"), small: true },
        { href: "/salud-internacional", label: tSolutions("saludInternacional.title"), small: true },
        { href: "/servicios-complementarios", label: tSolutions("serviciosComplementarios.title"), small: true },
      ],
    },
    {
      links: [
        { href: "/trabaja-con-nosotros", label: tNav("trabajaConNosotros"), bold: true },
        { href: "/politica-de-privacidad", label: "Política de Privacidad", small: true },
        { href: "/terminos-y-condiciones", label: "Términos y Condiciones", small: true },
      ],
    }
  ]

  return (
    <section
      id="contacto"
      className="relative w-full overflow-hidden pb-4 bg-[#033163]"
      
    >
      {/* Capa superior: continúa el blanco de la sección blog y se funde con el degradado/imagen del footer */}
     

      <div className={cn(siteContainer, "relative z-10 flex flex-col gap-3 pt-6")}>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-start lg:gap-6">
          <div className="flex flex-col items-center lg:items-start">
            <div className="mt-2 w-[190px] shrink-0 sm:w-[210px] md:w-[230px] lg:w-[250px]">
              <Image
                src="/logo-footer.svg"
                alt="IFS Insurance"
                width={250}
                height={1500}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-4 max-w-md px-4 text-center text-sm font-regular text-[#FFFFFF] sm:max-w-lg lg:hidden">
              {t("designFuture")}
            </p>
          </div>

          <div aria-hidden="true" className="hidden lg:block lg:w-8" />

          <div className="flex w-full min-w-0 flex-col items-start gap-6 text-left lg:min-w-0 lg:flex-1 lg:pt-6">
            <nav aria-label={t("navAriaLabel")} className="w-full min-w-0">
              <div className=" inline-grid grid-cols-3  text-left">
                {footerColumns.map((column, columnIndex) => (
                  <div
                    key={column.title ?? column.links[0]?.href}
                    className="flex min-w-0 flex-col items-start gap-2"
                  >
                    {column.title ? (
                      <p className="text-sm font-bold text-[#FFFFFF] sm:text-base md:text-xl">
                        {column.title}
                      </p>
                    ) : null}
                    {columnIndex === 2 ? (
                      <div className="flex flex-col items-start gap-5">
                        <Link
                          href={column.links[0].href}
                          className="text-base font-bold text-[#FFFFFF] underline-offset-4 transition-colors hover:text-[#006FC4] hover:underline md:text-xl"
                        >
                          {column.links[0].label}
                        </Link>
                      </div>
                    ) : (
                      <ul
                        className={cn(
                          "flex flex-col gap-1",
                          columnIndex === 1 && "gap-0.5 leading-tight",
                        )}
                      >
                        {column.links.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={cn(
                                "text-[#FFFFFF] underline-offset-4 transition-colors hover:text-[#006FC4] hover:underline",
                                item.small
                                  ? "text-xs leading-tight md:text-sm"
                                  : "text-base md:text-xl",
                                item.bold && "font-bold",
                              )}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-2 md:flex-row md:items-end md:justify-between">
          <div className="-mt-2 hidden w-[230px] justify-start pl-4 sm:w-[250px] sm:pl-6 md:w-[290px] md:pl-8 lg:flex lg:w-[330px] lg:pl-6">
            <p className="text-left text-sm font-regular text-[#FFFFFF]">
              {t("designFuture")}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 whitespace-nowrap md:justify-start md:pr-2">
            <Link
              href={footerColumns[2].links[1].href}
              className="text-xs text-[#FFFFFF] underline-offset-4 transition-colors hover:text-[#006FC4] hover:underline md:text-sm"
            >
              {footerColumns[2].links[1].label}
            </Link>
            <span className="text-xs text-[#FFFFFF] md:text-sm">|</span>
            <Link
              href={footerColumns[2].links[2].href}
              className="text-xs text-[#FFFFFF] underline-offset-4 transition-colors hover:text-[#006FC4] hover:underline md:text-sm"
            >
              {footerColumns[2].links[2].label}
            </Link>
          </div>
        </div>
      </div>

      <div className={cn(siteContainer, "relative z-10 flex items-end justify-between pb-4")}>
        
      </div>

      <div
        className={cn(
          "relative z-10 mx-auto flex w-full max-w-[1424px] justify-center pb-2",
          sitePaddingX,
        )}
      >
        <FeatureBar
          features={features}
          animate={false}
          className="w-full md:flex-nowrap md:items-center md:justify-between"
        />
      </div>

      <div className={cn("relative z-10 w-full pb-4", sitePaddingX)}>
        <p className="text-center text-xs text-[#FFFFFF]/80">
          {t("developedBy")}{" "}
          <a
            href="https://wemakeitlab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFFFFF] underline-offset-4 transition-colors hover:text-[#006FC4] hover:underline"
          >
            We make it Lab
          </a>
        </p>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  )
}

