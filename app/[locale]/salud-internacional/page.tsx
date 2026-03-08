import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/navbar";
import BannerSection from "@/components/saludinternacional/banner-section";
import { SaludTimelineDemo } from "@/components/saludinternacional/salud-timeline-demo";
import HeroGlobe from "@/components/saludinternacional/hero-globe";
import LogoCloudSection from "@/components/home/logo-cloud-demo";
import { HeroPlanificacion } from "@/components/home/hero-planificacion";
import { ExperienceGlobeSection } from "@/components/home/experience-globe-section";
import Footer from "@/components/layout/footer";

export default async function SaludInternacionalPage() {
  const t = await getTranslations();
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <HeroGlobe />
      <BannerSection />
      <SaludTimelineDemo />
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
