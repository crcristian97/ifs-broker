import { Navbar } from "@/components/layout/navbar";
import BannerSection from "@/components/saludinternacional/banner-section";
import Footer from "@/components/layout/footer";
import { HeroBanner } from "@/components/servicioscomplementarios/hero-banner";
import HowWeWork from "@/components/home/how-we-work";  
import LogoCloudSection from "@/components/home/logo-cloud-demo";
import { ExperienceGlobeSection } from "@/components/home/experience-globe-section";
export default function ServiciosComplementariosPage() {
  return (
    <main className="relative min-h-screen bg-[#E5EEF54D]">
      <Navbar />
      <BannerSection
        sectionClassName="w-full px-4 pt-6 pb-16 md:px-8 md:pt-10 md:pb-20"
        bgColor="linear-gradient(to right, #91D8F7, #91D8F7)"
        title={
          <span>
            <span className="text-[#033163] text-3xl" style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}>SOLUCIONES COMPLEMENTARIAS </span>
            <span className="text-[#006FC4] text-3xl" style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}>DE PROTECCIÓN</span>
          </span>
        }
        subtitle="Complementamos nuestras soluciones principales con coberturas específicas que permiten abordar escenarios particulares y reforzar una planificación integral de protección."
        subtitleColor="#033163"
        minHeight={520}
        contentMinHeight={320}
      />
      <HeroBanner />
      <HowWeWork />
      <LogoCloudSection />
      <div className="w-full bg-[#e6f3fa]">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-8">
          <div className="w-full min-h-[120px] rounded bg-transparent px-4 py-6 text-center flex items-center justify-center">
            <p className="text-[#1163b2] text-3xl font-regular leading-snug max-w-3xl mx-auto">
              Estas alianzas garantizan seguridad financiera en cada solución
              implementada, brindando un entorno de confianza y respaldo
              institucional a largo plazo.
            </p>
          </div>
        </div>
      </div>
      <ExperienceGlobeSection />
      <Footer />
    </main>
  );
}

