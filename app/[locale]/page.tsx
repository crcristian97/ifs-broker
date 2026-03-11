import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/navbar";
import HomeHeroLayout from "@/components/layout/hero-section";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });
  return {
    title: t("home.title"),
    description: t("home.description"),
    openGraph: {
      title: t("home.title"),
      description: t("home.description"),
      url: `/${locale}`,
    },
    alternates: { canonical: `/${locale}` },
  };
}

export default async function Home() {
  const t = await getTranslations();
  return (
    <main className="relative">
      <Navbar />
      <HomeHeroLayout allianceText={t("serviciosComplementarios.alliance")} />
    </main>
  );
}
