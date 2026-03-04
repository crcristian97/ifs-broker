import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSubsection from "@/components/layout/hero-subsection";
import { TimelineDemo } from "@/components/segurovida/timeline-demo";
import { RetirementForm } from "@/components/segurovida/retirement-form";

export default function SegurosDeVidaPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <HeroSubsection />
      <TimelineDemo />
      <div
        className="rounded-3xl  bg-cover bg-center px-2 py-6 md:px-6"
        style={{
          backgroundImage: "url('/seguro/fondo-cuestionarios.webp')",
        }}
      >
        <RetirementForm />
      </div>
      <Footer />
    </main>
  );
}
