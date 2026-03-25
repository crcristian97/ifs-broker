import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSubsection } from "@/components/layout/hero-subsection";
import { TimelineDemo } from "@/components/segurovida/timeline-demo";
import { RetirementForm } from "@/components/segurovida/retirement-form";
import { HeroPlanificacion } from "@/components/home/hero-planificacion";
import LogoCloudSection from "@/components/home/logo-cloud-demo";
import { ExperienceGlobeSection } from "@/components/home/experience-globe-section";
type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ifsbroker.com";
  return {
    title: t("segurosDeVida.title"),
    description: t("segurosDeVida.description"),
    keywords: t("segurosDeVida.keywords"),
    openGraph: {
      title: t("segurosDeVida.title"),
      description: t("segurosDeVida.description"),
      url: `${baseUrl}/${locale}/seguros-de-vida`,
      type: "website",
      siteName: "IFS Broker",
      locale: locale === "es" ? "es_AR" : "en_US",
      images: [{ url: `${baseUrl}/seguro/seguro-de-vida.webp`, width: 1200, height: 630, alt: t("segurosDeVida.title") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("segurosDeVida.title"),
      description: t("segurosDeVida.description"),
      images: [`${baseUrl}/seguro/seguro-de-vida.webp`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/seguros-de-vida`,
      languages: { es: `${baseUrl}/es/seguros-de-vida`, en: `${baseUrl}/en/seguros-de-vida` },
    },
  };
}

export default async function SegurosDeVidaPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ifsbroker.com";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: locale === "es" ? "Seguros de Vida Internacional" : "International Life Insurance",
    description: t("heroSubsection.description"),
    provider: {
      "@type": "FinancialService",
      name: "IFS Broker",
      url: baseUrl,
    },
    url: `${baseUrl}/${locale}/seguros-de-vida`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("nav.home"), item: `${baseUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: t("solutions.seguroVida.title"), item: `${baseUrl}/${locale}/seguros-de-vida` },
    ],
  };

  return (
    <main className="relative min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <HeroSubsection
        titlePrefix={t("heroSubsection.titlePrefix")}
        titleHighlight={t("heroSubsection.titleHighlight")}
        description={t("heroSubsection.description")}
        descriptionHighlight={t("heroSubsection.descriptionHighlight")}
        hideImage
        videoSrc="/seguros-vida-ifs-broker.webm"
      />
      <TimelineDemo />
      <div
        className="rounded-3xl  bg-cover bg-center px-2 py-6 md:px-6"
        style={{
          backgroundImage: "url('/seguro/fondo-cuestionarios.webp')",
        }}
      >
        <RetirementForm />
      </div>
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
