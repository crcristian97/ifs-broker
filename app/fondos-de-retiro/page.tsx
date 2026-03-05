import { Navbar } from "@/components/layout/navbar";
import HeroSubsection from "@/components/layout/hero-subsection";
import { RetirementTimelineDemo } from "@/components/segurovida/retirement-timeline-demo";
import { InvestmentQuestionnaireForm } from "@/components/segurovida/investment-questionnaire-form";
import LogoCloudSection from "@/components/home/logo-cloud-demo";
import { ExperienceGlobeSection } from "@/components/home/experience-globe-section";
import { HeroPlanificacion } from "@/components/home/hero-planificacion";
import Footer from "@/components/layout/footer";

export default function FondosDeRetiroPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <HeroSubsection
        titlePrefix="Planifica hoy"
        titleHighlight="la libertad financiera"
        titleSuffix="de mañana"
        imageSrc="/retiro/fondos-de-retiro.webp"
        imageAlt="Fondos de retiro"
      />
      <RetirementTimelineDemo />
      <div
        className="rounded-3xl  bg-cover bg-center px-2 py-6 md:px-6"
        style={{
          backgroundImage: "url('/seguro/fondo-cuestionarios.webp')",
        }}
      >
        <InvestmentQuestionnaireForm />
      </div>

   
      <HeroPlanificacion />

      <LogoCloudSection />
      <div className="w-full bg-[#e6f3fa]">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-16 py-8">
          <div className="w-full min-h-[120px] rounded bg-transparent px-4 py-6 text-center flex items-center justify-center">
            <p className="text-[#1163b2] text-base sm:text-lg md:text-xl font-regular leading-snug max-w-3xl mx-auto">
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
