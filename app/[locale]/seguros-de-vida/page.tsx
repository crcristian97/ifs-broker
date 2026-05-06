import type { Metadata } from "next";
import Script from "next/script";
import { getTranslations, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { cn } from "@/lib/utils";
import { siteContainer, sectionBodyInsetMobile } from "@/lib/site-layout";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSubsection } from "@/components/layout/hero-subsection";
import { TimelineDemo } from "@/components/segurovida/timeline-demo";
import { RetirementForm } from "@/components/segurovida/retirement-form";
import { HeroPlanificacion } from "@/components/home/hero-planificacion";
import LogoCloudSection from "@/components/home/logo-cloud-demo";
import { ExperienceGlobeSection } from "@/components/home/experience-globe-section";
import BlogSection from "@/components/home/blog-section";
import { getServicePage } from "@/lib/prismic-helpers";
import { servicePageToMessages, deepMerge } from "@/lib/prismic-to-messages";

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
    "@id": `${baseUrl}/${locale}/seguros-de-vida#service`,
    name: locale === "es" ? "Seguros de Vida Internacional" : "International Life Insurance",
    description: t("heroSubsection.description"),
    url: `${baseUrl}/${locale}/seguros-de-vida`,
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/seguro/seguro-de-vida.webp`,
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
        urlTemplate: `${baseUrl}/${locale}/seguros-de-vida#form`,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      "query-input": [
        { "@type": "PropertyValueSpecification", valueName: "name", valueRequired: true },
        { "@type": "PropertyValueSpecification", valueName: "email", valueRequired: true },
        { "@type": "PropertyValueSpecification", valueName: "phone", valueRequired: false },
      ],
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/${locale}/seguros-de-vida#webpage`,
    url: `${baseUrl}/${locale}/seguros-de-vida`,
    name: locale === "es" ? "Seguros de Vida Internacional" : "International Life Insurance",
    description: t("heroSubsection.description"),
    isPartOf: { "@id": `${baseUrl}/#website` },
    about: { "@id": `${baseUrl}/#organization` },
    inLanguage: locale,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("nav.home"), item: `${baseUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: t("solutions.seguroVida.title"), item: `${baseUrl}/${locale}/seguros-de-vida` },
    ],
  };

  // Fetch Prismic content and merge with static translations
  const prismicDoc = await getServicePage("seguros-de-vida", locale);
  const prismicMessages = servicePageToMessages(prismicDoc, "segurosDeVida");
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
      <Script src="https://fast.wistia.com/embed/lydl9g18t3.js" type="module" strategy="afterInteractive" />
      <Navbar disableEntranceAnimation />
      <section className={cn("w-full", "pb-4 pt-28 md:pb-10 md:pt-30")}>
        <div className={cn(siteContainer, "flex justify-center")}>
          <style>{`
            wistia-player[media-id='lydl9g18t3']:not(:defined) {
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/lydl9g18t3/swatch');
              display: block;
              filter: blur(5px);
              padding-top: 56.25%;
              border-radius: 1rem;
              overflow: hidden;
            }
          `}</style>
          <div className="relative flex w-full max-w-4xl flex-col items-stretch overflow-hidden rounded-3xl  border border-[#006FC4]/35 bg-linear-to-br from-[#033163] via-[#044a8c] to-[#006FC4] p-1 shadow-[0_8px_32px_-4px_rgba(3,49,99,0.35),0_4px_16px_-2px_rgba(0,111,196,0.2)] md:p-1 lg:p-2">
            <div className="overflow-hidden rounded-2xl">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<wistia-player media-id="lydl9g18t3" aspect="1.7777777777777777" volume="1"></wistia-player>`,
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <div className={cn(siteContainer, "pb-6 pt-2 md:pb-8 md:pt-6")}>
        <div className="mx-auto w-full max-w-5xl rounded-3xl bg-cover bg-center px-[13px] py-4 md:px-[29px] md:py-6">
          <TimelineDemo />
        </div>
      </div>
      <div
        className="rounded-3xl bg-cover bg-center px-2 py-6 md:px-6"
        style={{
          backgroundImage: "url('/seguro/fondo-cuestionarios.webp')",
        }}
      >
        <RetirementForm />
      </div>
      <HeroPlanificacion />
      <LogoCloudSection />
      <div className="w-full bg-[#e6f3fa]">
        <div className={cn(siteContainer, "py-8")}>
          <div className="flex min-h-[120px] w-full items-center justify-center rounded bg-transparent py-6 text-center">
            <p
              className={cn(
                "mx-auto max-w-3xl text-2xl font-regular text-[#1163b2]",
                sectionBodyInsetMobile,
              )}
            >
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
