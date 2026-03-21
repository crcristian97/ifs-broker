import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/navbar";
import BannerSection from "@/components/saludinternacional/banner-section";
import { SaludTimelineDemo } from "@/components/saludinternacional/salud-timeline-demo";
import LogoCloudSection from "@/components/home/logo-cloud-demo";
import { HeroPlanificacion } from "@/components/home/hero-planificacion";
import { ExperienceGlobeSection } from "@/components/home/experience-globe-section";
import { Footer } from "@/components/layout/footer";
import { HeroSubsection } from "@/components/layout/hero-subsection";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ifsbroker.com";
  return {
    title: t("saludInternacional.title"),
    description: t("saludInternacional.description"),
    keywords: t("saludInternacional.keywords"),
    openGraph: {
      title: t("saludInternacional.title"),
      description: t("saludInternacional.description"),
      url: `${baseUrl}/${locale}/salud-internacional`,
      type: "website",
      siteName: "IFS Broker",
      locale: locale === "es" ? "es_AR" : "en_US",
      images: [{ url: `${baseUrl}/salud-internacional.webp`, width: 1200, height: 630, alt: t("saludInternacional.title") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("saludInternacional.title"),
      description: t("saludInternacional.description"),
      images: [`${baseUrl}/salud-internacional.webp`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/salud-internacional`,
      languages: { es: `${baseUrl}/es/salud-internacional`, en: `${baseUrl}/en/salud-internacional` },
    },
  };
}

export default async function SaludInternacionalPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ifsbroker.com";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: locale === "es" ? "Salud Internacional" : "International Health Insurance",
    description: t("heroGlobe.description"),
    provider: {
      "@type": "FinancialService",
      name: "IFS Broker",
      url: baseUrl,
    },
    url: `${baseUrl}/${locale}/salud-internacional`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("nav.home"), item: `${baseUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: t("solutions.saludInternacional.title"), item: `${baseUrl}/${locale}/salud-internacional` },
    ],
  };

  return (
    <main className="relative min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <HeroSubsection
        titlePrefix={t("heroGlobe.title1")}
        titleHighlight={t("heroGlobe.title2")}
        description={t("heroGlobe.description")}
        imageSrc="/salud-internacional.webp"
        imageAlt={t("heroGlobe.imageAlt")}
        invertTitleColors
      />
      <BannerSection />
      <SaludTimelineDemo />
      <HeroPlanificacion />
      <LogoCloudSection />
      <div className="w-full bg-[#e6f3fa]">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-8">
          <div className="w-full min-h-[120px] rounded bg-transparent px-4 py-6 text-center flex items-center justify-center">
            <p className="text-[#1163b2] text-2xl font-regular leading-snug max-w-3xl mx-auto">
              {t("serviciosComplementarios.alliance")}
            </p>
          </div>
        </div>
      </div>
      <ExperienceGlobeSection />
      <Footer />
    </main>
  );
}
