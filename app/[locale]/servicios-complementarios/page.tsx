import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/navbar";
import BannerSection from "@/components/saludinternacional/banner-section";
import { Footer } from "@/components/layout/footer";
import { HeroBanner } from "@/components/servicioscomplementarios/hero-banner";
import HowWeWork from "@/components/home/how-we-work";
import LogoCloudSection from "@/components/home/logo-cloud-demo";
import { ExperienceGlobeSection } from "@/components/home/experience-globe-section";
import { HeroPlanificacion } from "@/components/home/hero-planificacion";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ifsbroker.com";
  return {
    title: t("serviciosComplementarios.title"),
    description: t("serviciosComplementarios.description"),
    keywords: t("serviciosComplementarios.keywords"),
    openGraph: {
      title: t("serviciosComplementarios.title"),
      description: t("serviciosComplementarios.description"),
      url: `${baseUrl}/${locale}/servicios-complementarios`,
      type: "website",
      siteName: "IFS Broker",
      locale: locale === "es" ? "es_AR" : "en_US",
      images: [{ url: `${baseUrl}/seguro/cebertura-viaje.webp`, width: 1200, height: 630, alt: t("serviciosComplementarios.title") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("serviciosComplementarios.title"),
      description: t("serviciosComplementarios.description"),
      images: [`${baseUrl}/seguro/cebertura-viaje.webp`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/servicios-complementarios`,
      languages: { es: `${baseUrl}/es/servicios-complementarios`, en: `${baseUrl}/en/servicios-complementarios` },
    },
  };
}

export default async function ServiciosComplementariosPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ifsbroker.com";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: locale === "es" ? "Servicios Complementarios" : "Complementary Services",
    description: t("serviciosComplementarios.description"),
    provider: {
      "@type": "FinancialService",
      name: "IFS Broker",
      url: baseUrl,
    },
    url: `${baseUrl}/${locale}/servicios-complementarios`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("nav.home"), item: `${baseUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: t("solutions.serviciosComplementarios.title"), item: `${baseUrl}/${locale}/servicios-complementarios` },
    ],
  };

  return (
    <main className="relative min-h-screen bg-[#E5EEF54D]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <BannerSection
        sectionClassName="w-full px-4 pt-6 pb-16 md:px-8 md:pt-10 md:pb-20"
        bgColor="linear-gradient(to right, #91D8F7, #91D8F7)"
        title={
          <span>
            <span className="text-[#033163] text-3xl" style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}>
              {t("serviciosComplementarios.title1")}{" "}
            </span>
            <span className="text-[#006FC4] text-3xl" style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}>
              {t("serviciosComplementarios.title2")}
            </span>
          </span>
        }
        subtitle={t("serviciosComplementarios.description")}
        subtitleColor="#033163"
        minHeight={520}
        contentMinHeight={320}
      />
      <HeroBanner />
      <HowWeWork />
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
