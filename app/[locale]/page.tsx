import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/navbar";
import { HomeHeroLayout } from "@/components/layout/hero-section";

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("nav.home"), item: `${baseUrl}/${locale}` },
    ],
  };

  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <HomeHeroLayout allianceText={t("serviciosComplementarios.alliance")} />
    </main>
  );
}
