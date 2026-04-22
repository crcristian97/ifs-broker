import type { Metadata } from "next";
import Script from "next/script";
import { getTranslations, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { cn } from "@/lib/utils";
import { siteContainer } from "@/lib/site-layout";
import { Navbar } from "@/components/layout/navbar";
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
    "@id": `${baseUrl}/${locale}/fondos-de-retiro#service`,
    name: locale === "es" ? "Fondos de Retiro e Inversión" : "Retirement Funds & Investments",
    description: t("heroSubsection.retirementDescription"),
    url: `${baseUrl}/${locale}/fondos-de-retiro`,
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/retiro/fondos-de-retiro.webp`,
      width: 1200,
      height: 630,
    },
    provider: {
      "@type": "FinancialService",
      "@id": `${baseUrl}/#organization`,
      name: "IFS Broker",
      url: baseUrl,
    },
    potentialAction: {
      "@type": "ServeAction",
      actionStatus: "https://schema.org/PotentialActionStatus",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/${locale}/fondos-de-retiro#investment-questionnaire`,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      "query-input": [
        { "@type": "PropertyValueSpecification", valueName: "name", valueRequired: true },
        { "@type": "PropertyValueSpecification", valueName: "email", valueRequired: true },
        { "@type": "PropertyValueSpecification", valueName: "phone", valueRequired: false },
        { "@type": "PropertyValueSpecification", valueName: "investment_amount", valueRequired: false },
      ],
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/${locale}/fondos-de-retiro#webpage`,
    url: `${baseUrl}/${locale}/fondos-de-retiro`,
    name: locale === "es" ? "Fondos de Retiro e Inversión" : "Retirement Funds & Investments",
    description: t("heroSubsection.retirementDescription"),
    isPartOf: { "@id": `${baseUrl}/#website` },
    about: { "@id": `${baseUrl}/#organization` },
    inLanguage: locale,
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
    <NextIntlClientProvider locale={locale} messages={mergedMessages}>
    <main className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script src="https://fast.wistia.com/embed/rwf6keju04.js" type="module" strategy="afterInteractive" />
      <Navbar />
      <section className={cn("w-full", "pb-14 pt-32 md:pb-20 md:pt-36")}>
        <div className={cn(siteContainer, "flex justify-center")}>
          <style>{`
            wistia-player[media-id='rwf6keju04']:not(:defined) {
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/rwf6keju04/swatch');
              display: block;
              filter: blur(5px);
              padding-top: 56.25%;
              border-radius: 1rem;
              overflow: hidden;
            }
          `}</style>
          <div className="relative flex w-full max-w-4xl flex-col items-stretch overflow-hidden rounded-3xl border border-[#006FC4]/35 bg-linear-to-br from-[#033163] via-[#044a8c] to-[#006FC4] p-1 shadow-[0_8px_32px_-4px_rgba(3,49,99,0.35),0_4px_16px_-2px_rgba(0,111,196,0.2)] md:p-1 lg:p-2">
            <div className="overflow-hidden rounded-2xl">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<wistia-player media-id="rwf6keju04" aspect="1.7777777777777777"></wistia-player>`,
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <div className={cn(siteContainer, "py-6")}>
        <div
          className="rounded-3xl bg-cover bg-center px-2 py-6 md:px-6"
        >
      <RetirementTimelineDemo />
      </div>
      </div>
          <InvestmentQuestionnaireForm />
     

      <HeroPlanificacion />

      <LogoCloudSection />
      <div className="w-full bg-[#e6f3fa]">
        <div className={cn(siteContainer, "py-8")}>
          <div className="flex min-h-[120px] w-full items-center justify-center rounded bg-transparent py-6 text-center">
            <p className="text-[#1163b2] text-2xl font-regular max-w-3xl mx-auto">
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
