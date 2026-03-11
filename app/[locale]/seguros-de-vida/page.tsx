import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSubsection from "@/components/layout/hero-subsection";
import { TimelineDemo } from "@/components/segurovida/timeline-demo";
import { RetirementForm } from "@/components/segurovida/retirement-form";
import { HeroPlanificacion } from "@/components/home/hero-planificacion";
import LogoCloudSection from "@/components/home/logo-cloud-demo";
import { ExperienceGlobeSection } from "@/components/home/experience-globe-section";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });
  return {
    title: t("segurosDeVida.title"),
    description: t("segurosDeVida.description"),
    openGraph: {
      title: t("segurosDeVida.title"),
      description: t("segurosDeVida.description"),
      url: `/${locale}/seguros-de-vida`,
    },
    alternates: { canonical: `/${locale}/seguros-de-vida` },
  };
}

export default async function SegurosDeVidaPage() {
  const t = await getTranslations();
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <HeroSubsection
        titlePrefix={t("heroSubsection.titlePrefix")}
        titleHighlight={t("heroSubsection.titleHighlight")}
        description={t("heroSubsection.description")}
        descriptionHighlight={t("heroSubsection.descriptionHighlight")}
        imageSrc="/seguro/seguro-de-vida.webp"
        imageAlt={t("solutions.seguroVida.title")}
      />
      <TimelineDemo />
      <div
        className="rounded-3xl  bg-cover bg-center px-2 py-6 md:px-6"
        style={{
          backgroundImage: "url('/seguro/fondo-cuestionarios.webp')",
        }}
      >
        <RetirementForm />
      </div>
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
