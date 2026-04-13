import type { Metadata } from "next";
import { getTranslations, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Navbar } from "@/components/layout/navbar";
import { HomeHeroLayout } from "@/components/layout/hero-section";
import { getHomepage } from "@/lib/prismic-helpers";
import { homepageToMessages, deepMerge } from "@/lib/prismic-to-messages";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ifsbroker.com";
  return {
    title: { absolute: t("home.title") },
    description: t("home.description"),
    keywords: t("home.keywords"),
    openGraph: {
      title: t("home.title"),
      description: t("home.description"),
      url: `${baseUrl}/${locale}`,
      type: "website",
      siteName: "IFS Broker",
      locale: locale === "es" ? "es_AR" : "en_US",
      images: [{ url: `${baseUrl}/ifs_insurance.png`, width: 512, height: 512, alt: t("home.title") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("home.title"),
      description: t("home.description"),
      images: [`${baseUrl}/ifs_insurance.png`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: { es: `${baseUrl}/es`, en: `${baseUrl}/en` },
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ifsbroker.com";

  // Fetch Prismic content and merge with static translations
  const prismicDoc = await getHomepage(locale);
  const prismicMessages = homepageToMessages(prismicDoc);
  const staticMessages = await getMessages({ locale });
  const mergedMessages = deepMerge(
    staticMessages as Record<string, unknown>,
    prismicMessages,
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("nav.home"), item: `${baseUrl}/${locale}` },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/${locale}#webpage`,
    url: `${baseUrl}/${locale}`,
    name: t("seo.home.title"),
    description: t("seo.home.description"),
    isPartOf: { "@id": `${baseUrl}/#website` },
    about: { "@id": `${baseUrl}/#organization` },
    inLanguage: locale,
  };

  return (
    <NextIntlClientProvider messages={mergedMessages}>
      <main className="relative">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
        <Navbar />
        <HomeHeroLayout allianceText={t("serviciosComplementarios.alliance")} />
      </main>
    </NextIntlClientProvider>
  );
}
