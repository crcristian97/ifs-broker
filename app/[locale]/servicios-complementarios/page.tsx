import type { Metadata } from "next";
import { getTranslations, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { cn } from "@/lib/utils";
import { siteContainer } from "@/lib/site-layout";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroComplement } from "@/components/ui/hero-complement";
import { HeroBanner } from "@/components/servicioscomplementarios/hero-banner";
import LogoCloudSection from "@/components/home/logo-cloud-demo";
import { ExperienceGlobeSection } from "@/components/home/experience-globe-section";
import { HeroPlanificacion } from "@/components/home/hero-planificacion";
import BlogSection from "@/components/home/blog-section";
import { getServicePage } from "@/lib/prismic-helpers";
import { servicePageToMessages, deepMerge } from "@/lib/prismic-to-messages";

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
    "@id": `${baseUrl}/${locale}/servicios-complementarios#service`,
    name: locale === "es" ? "Servicios Complementarios" : "Complementary Services",
    description: t("serviciosComplementarios.description"),
    url: `${baseUrl}/${locale}/servicios-complementarios`,
    image: {
      "@type": "ImageObject",
      url: `${baseUrl}/seguro/cebertura-viaje.webp`,
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
        urlTemplate: `${baseUrl}/${locale}/servicios-complementarios#contact`,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      "query-input": [
        { "@type": "PropertyValueSpecification", valueName: "name", valueRequired: true },
        { "@type": "PropertyValueSpecification", valueName: "email", valueRequired: true },
      ],
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/${locale}/servicios-complementarios#webpage`,
    url: `${baseUrl}/${locale}/servicios-complementarios`,
    name: locale === "es" ? "Servicios Complementarios" : "Complementary Services",
    description: t("serviciosComplementarios.description"),
    isPartOf: { "@id": `${baseUrl}/#website` },
    about: { "@id": `${baseUrl}/#organization` },
    inLanguage: locale,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("nav.home"), item: `${baseUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: t("solutions.serviciosComplementarios.title"), item: `${baseUrl}/${locale}/servicios-complementarios` },
    ],
  };

  const prismicDoc = await getServicePage("servicios-complementarios", locale);
  const prismicMessages = servicePageToMessages(prismicDoc, "serviciosComplementarios");
  const staticMessages = await getMessages({ locale });
  const mergedMessages = deepMerge(
    staticMessages as Record<string, unknown>,
    prismicMessages,
  );

  return (
    <NextIntlClientProvider messages={mergedMessages}>
    <main className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <HeroComplement
        titlePrefix={t("serviciosComplementarios.title1")}
        titleHighlight={t("serviciosComplementarios.title2")}
        description={t("serviciosComplementarios.description")}
        hideImage
        videoSrc="/hero/servicio-complementario.mp4"
      />
      <HeroBanner />
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
