import type { Metadata } from "next";
import Script from "next/script";
import { getTranslations, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { cn } from "@/lib/utils";
import { siteContainer } from "@/lib/site-layout";
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
      <section className={cn("w-full bg-[#033163]", "pb-8 pt-28 md:pt-32")}>
        <div className={cn(siteContainer)}>
          <style>{`
            wistia-player[media-id='b48gj3x82t']:not(:defined) {
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/b48gj3x82t/swatch');
              display: block;
              filter: blur(5px);
              padding-top: 56.25%;
              border-radius: 1.25rem;
              overflow: hidden;
            }
          `}</style>
          <div className="overflow-hidden rounded-3xl shadow-[0_18px_42px_-8px_rgba(3,49,99,0.22)]">
            <div
              dangerouslySetInnerHTML={{
                __html: `<wistia-player media-id="b48gj3x82t" aspect="1.7777777777777777"></wistia-player>`,
              }}
            />
          </div>
        </div>
      </section>
      <SaludTimelineDemo />
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
