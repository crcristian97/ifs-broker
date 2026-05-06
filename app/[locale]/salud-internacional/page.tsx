import type { Metadata } from "next";
import Script from "next/script";
import { getTranslations, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { cn } from "@/lib/utils";
import { siteContainer, sectionBodyInsetMobile } from "@/lib/site-layout";
import { Navbar } from "@/components/layout/navbar";
import { SaludTimelineDemo } from "@/components/saludinternacional/salud-timeline-demo";
import LogoCloudSection from "@/components/home/logo-cloud-demo";
import { HeroPlanificacion } from "@/components/home/hero-planificacion";
import { ExperienceGlobeSection } from "@/components/home/experience-globe-section";
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
    "@id": `${baseUrl}/${locale}/salud-internacional#service`,
    name: locale === "es" ? "Salud Internacional" : "International Health Insurance",
    description: t("heroGlobe.description"),
    url: `${baseUrl}/${locale}/salud-internacional`,
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/salud-internacional.webp`,
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
        urlTemplate: `${baseUrl}/${locale}/salud-internacional#form`,
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
    "@id": `${baseUrl}/${locale}/salud-internacional#webpage`,
    url: `${baseUrl}/${locale}/salud-internacional`,
    name: locale === "es" ? "Salud Internacional" : "International Health Insurance",
    description: t("heroGlobe.description"),
    isPartOf: { "@id": `${baseUrl}/#website` },
    about: { "@id": `${baseUrl}/#organization` },
    inLanguage: locale,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("nav.home"), item: `${baseUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: t("solutions.saludInternacional.title"), item: `${baseUrl}/${locale}/salud-internacional` },
    ],
  };

  const prismicDoc = await getServicePage("salud-internacional", locale);
  const prismicMessages = servicePageToMessages(prismicDoc, "saludInternacional");
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
      <Script src="https://fast.wistia.com/embed/b48gj3x82t.js" type="module" strategy="afterInteractive" />
      <Navbar />
      <section className={cn("w-full", "pb-4 pt-32 md:pb-10 md:pt-36")}>
        <div className={cn(siteContainer, "flex justify-center")}>
          <style>{`
            wistia-player[media-id='b48gj3x82t']:not(:defined) {
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/b48gj3x82t/swatch');
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
                  __html: `<wistia-player media-id="b48gj3x82t" aspect="1.7777777777777777"></wistia-player>`,
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <div className={cn(siteContainer, "pb-6 pt-2 md:pb-8 md:pt-6")}>
        <div className="mx-auto w-full max-w-5xl rounded-3xl bg-cover bg-center px-[13px] py-4 md:px-[29px] md:py-6">
          <SaludTimelineDemo />
        </div>
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
