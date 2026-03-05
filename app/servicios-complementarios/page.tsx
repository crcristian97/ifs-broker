import { Navbar } from "@/components/layout/navbar";
import BannerSection from "@/components/saludinternacional/banner-section";

export default function ServiciosComplementariosPage() {
  return (
    <main className="relative min-h-screen bg-[#E5EEF54D]">
      <Navbar />
      <BannerSection
        sectionClassName="w-full px-4 pt-6 pb-16 md:px-8 md:pt-10 md:pb-20"
        bgColor="linear-gradient(to right, #91D8F7, #91D8F7)"
        title={
          <span>
            <span className="text-[#033163]">SOLUCIONES COMPLEMENTARIAS </span>
            <span className="text-[#006FC4]">DE PROTECCIÓN</span>
          </span>
        }
        subtitle="Complementamos nuestras soluciones principales con coberturas específicas que permiten abordar escenarios particulares y reforzar una planificación integral de protección."
        subtitleColor="#033163"
        minHeight={520}
        contentMinHeight={320}
      />
    </main>
  );
}

