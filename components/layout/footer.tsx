"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import { FeatureBar } from "@/components/ui/feature-bar"
import { ContactModal } from "@/components/layout/contact-modal"

const features = [
  {
    icon: <Phone className="h-5 w-5 shrink-0 text-[#FFFFFF]" />,
    title: "+00 0000 000",
  },
  {
    icon: <Mail className="h-5 w-5 shrink-0 text-[#033163]" />,
    title: "administracion@ifs-broker.com",
  },
  {
    icon: <MapPin className="h-5 w-5 shrink-0 text-[#033163]" />,
    title: "Location",
  },
]

export function Footer() {
  const t = useTranslations("footer")
  const tNav = useTranslations("nav")
  const tSolutions = useTranslations("solutions")
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const footerColumns = [
    {
      title: t("columnSite"),
      links: [{ href: "/", label: tNav("home"), bold: true }],
    },
    {
      title: tNav("soluciones"),
      links: [
        { href: "/seguros-de-vida", label: tSolutions("seguroVida.title"), bold: true },
        { href: "/fondos-de-retiro", label: tSolutions("fondosRetiro.title"), small: true },
        { href: "/salud-internacional", label: tSolutions("saludInternacional.title"), small: true },
        { href: "/servicios-complementarios", label: tSolutions("serviciosComplementarios.title"), small: true },
      ],
    },
    {
      title: t("columnCompany"),
      links: [{ href: "/trabaja-con-nosotros", label: tNav("trabajaConNosotros"), bold: true }],
    },
    {
      title: t("columnContact"),
      links: [{ href: "/#contacto", label: tNav("contacto"), bold: true }],
    },
  ]

  return (
    <section
      id="contacto"
      className="relative w-full overflow-hidden pb-8 md:pb-12 bg-[#033163]"
      
    >
      {/* Capa superior: continúa el blanco de la sección blog y se funde con el degradado/imagen del footer */}
     

      <div className="relative z-10 flex flex-col gap-10 px-6 pt-12 md:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <div className="shrink-0">
              <Image src="/logo-footer.svg" alt="IFS Insurance" width={420} height={2520} />
            </div>
            <div className="flex w-full justify-end">
              <p className="text-lg md:text-2xl font-regular text-[#FFFFFF] text-right">
                {t("designFuture")}
              </p>
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-col items-center gap-6 text-center lg:min-w-0 lg:flex-1 lg:items-end lg:text-right">
            

            <nav aria-label={t("navAriaLabel")} className="w-full min-w-0">
              <div className="grid w-full grid-cols-2 gap-x-6 gap-y-8 text-left md:grid-cols-4 md:gap-x-4 lg:text-right">
                {footerColumns.map((column) => (
                  <div key={column.title} className="flex min-w-0 flex-col gap-3">
                 
                    <ul className="flex flex-col gap-2">
                      {column.links.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "text-[#FFFFFF] underline-offset-4 transition-colors hover:text-[#006FC4] hover:underline",
                              item.small
                                ? "text-sm md:text-base"
                                : "text-lg md:text-2xl",
                              item.bold && "font-bold",
                            )}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-end justify-between px-6 pb-4 md:px-12">
        
      </div>

      <div className="relative z-10 flex justify-center px-4 pb-2">
        <FeatureBar features={features} />
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  )
}

