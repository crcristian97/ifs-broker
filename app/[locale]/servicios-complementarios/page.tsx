import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/navbar";
import BannerSection from "@/components/saludinternacional/banner-section";
import Footer from "@/components/layout/footer";
import { HeroBanner } from "@/components/servicioscomplementarios/hero-banner";
import HowWeWork from "@/components/home/how-we-work";
import LogoCloudSection from "@/components/home/logo-cloud-demo";
import { ExperienceGlobeSection } from "@/components/home/experience-globe-section";
import { HeroPlanificacion } from "@/components/home/hero-planificacion";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });
  return {
    title: t("serviciosComplementarios.title"),
    description: t("serviciosComplementarios.description"),
    openGraph: {
      title: t("serviciosComplementarios.title"),
      description: t("serviciosComplementarios.description"),
      url: `/${locale}/servicios-complementarios`,
    },
    alternates: { canonical: `/${locale}/servicios-complementarios` },
  };
}

export default async function ServiciosComplementariosPage() {
  const t = await getTranslations();
  return (
    <main className="relative min-h-screen bg-[#E5EEF54D]">
      <Navbar />
      <BannerSection
        sectionClassName="w-full px-4 pt-6 pb-16 md:px-8 md:pt-10 md:pb-20"
        bgColor="linear-gradient(to right, #91D8F7, #91D8F7)"
        title={
          <span>
            <span className="text-[#033163] text-3xl" style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}>
              {t("serviciosComplementarios.title1")}{" "}
            </span>
            <span className="text-[#006FC4] text-3xl" style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}>
              {t("serviciosComplementarios.title2")}
            </span>
          </span>
        }
        subtitle={t("serviciosComplementarios.description")}
        subtitleColor="#033163"
        minHeight={520}
        contentMinHeight={320}
      />
      <HeroBanner />
      <HowWeWork />
      <HeroPlanificacion />

      <LogoCloudSection />
      <div className="w-full bg-[#e6f3fa]">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-8">
          <div className="w-full min-h-[120px] rounded bg-transparent px-4 py-6 text-center flex items-center justify-center">
            <p className="text-[#1163b2] text-2xl font-regular leading-snug max-w-3xl mx-auto">
              {t("serviciosComplementarios.alliance")}
            </p>
          </div>
        </div>
      </div>
      <ExperienceGlobeSection />
      <Footer />
    </main>
  );
}
