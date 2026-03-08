import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/navbar";
import HomeHeroLayout from "@/components/layout/hero-section";

export default async function Home() {
  const t = await getTranslations();
  return (
    <main className="relative">
      <Navbar />
      <HomeHeroLayout allianceText={t("serviciosComplementarios.alliance")} />
    </main>
  );
}
