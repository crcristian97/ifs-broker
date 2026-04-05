import type { Metadata } from "next";
import { getTranslations, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { cn } from "@/lib/utils";
import { siteContainer } from "@/lib/site-layout";
import { Navbar } from "@/components/layout/navbar";
import { HeroSubsection } from "@/components/layout/hero-subsection";
import { RetirementTimelineDemo } from "@/components/segurovida/retirement-timeline-demo";
import { InvestmentQuestionnaireForm } from "@/components/segurovida/investment-questionnaire-form";
import LogoCloudSection from "@/components/home/logo-cloud-demo";
import { ExperienceGlobeSection } from "@/components/home/experience-globe-section";
import { HeroPlanificacion } from "@/components/home/hero-planificacion";
import { Footer } from "@/components/layout/footer";
import BlogSection from "@/components/home/blog-section";
import { getServicePage } from "@/lib/prismic-helpers";
import { servicePageToMessages, deepMerge } from "@/lib/prismic-to-messages";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ifsbroker.com";
  return {
    title: t("fondosDeRetiro.title"),
    description: t("fondosDeRetiro.description"),
    keywords: t("fondosDeRetiro.keywords"),
    openGraph: {
      title: t("fondosDeRetiro.title"),
      description: t("fondosDeRetiro.description"),
      url: `${baseUrl}/${locale}/fondos-de-retiro`,
      type: "website",
      siteName: "IFS Broker",
      locale: locale === "es" ? "es_AR" : "en_US",
      images: [{ url: `${baseUrl}/retiro/fondos-de-retiro.webp`, width: 1200, height: 630, alt: t("fondosDeRetiro.title") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("fondosDeRetiro.title"),
      description: t("fondosDeRetiro.description"),
      images: [`${baseUrl}/retiro/fondos-de-retiro.webp`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/fondos-de-retiro`,
      languages: { es: `${baseUrl}/es/fondos-de-retiro`, en: `${baseUrl}/en/fondos-de-retiro` },
    },
  };
}

export default async function FondosDeRetiroPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ifsbroker.com";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: locale === "es" ? "Fondos de Retiro e Inversión" : "Retirement Funds & Investments",
    description: t("heroSubsection.retirementDescription"),
    provider: {
      "@type": "FinancialService",
      name: "IFS Broker",
      url: baseUrl,
    },
    url: `${baseUrl}/${locale}/fondos-de-retiro`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("nav.home"), item: `${baseUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: t("solutions.fondosRetiro.title"), item: `${baseUrl}/${locale}/fondos-de-retiro` },
    ],
  };

  const prismicDoc = await getServicePage("fondos-de-retiro", locale);
  const prismicMessages = servicePageToMessages(prismicDoc, "fondosDeRetiro");
  const staticMessages = await getMessages({ locale });
  const mergedMessages = deepMerge(
    staticMessages as Record<string, unknown>,
    prismicMessages,
  );

  return (
    <NextIntlClientProvider messages={mergedMessages}>
    <main className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <HeroSubsection
        titlePrefix={t("heroSubsection.retirementPrefix")}
        titleHighlight={t("heroSubsection.retirementHighlight")}
        titleSuffix={t("heroSubsection.retirementSuffix")}
        description={t("heroSubsection.retirementDescription")}
        hideImage
        videoSrc="/retiro/v-retiro-subtitulo.webm"
      />
      <RetirementTimelineDemo />
      <div
        id="investment-questionnaire"
        className="rounded-3xl  bg-cover bg-center px-2 py-6 md:px-6"
        style={{
          backgroundImage: "url('/seguro/fondo-cuestionarios.webp')",
        }}
      >
        <InvestmentQuestionnaireForm />
      </div>

      <HeroPlanificacion />

      <LogoCloudSection />
      <div className="w-full bg-[#e6f3fa]">
        <div className={cn(siteContainer, "py-8")}>
          <div className="flex min-h-[120px] w-full items-center justify-center rounded bg-transparent py-6 text-center">
            <p className="text-[#1163b2] text-2xl font-regular leading-snug max-w-3xl mx-auto">
              {t("serviciosComplementarios.alliance")}
            </p>
          </div>
        </div>
      </div>
      <ExperienceGlobeSection />
      <BlogSection />
      <Footer />
    </main>
    </NextIntlClientProvider>
  );
}
