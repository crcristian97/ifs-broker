import { Navbar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSubsection from "@/components/layout/hero-subsection";
import { TimelineDemo } from "@/components/segurovida/timeline-demo";

export default function SegurosDeVidaPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <HeroSubsection />
      <TimelineDemo />
      <Footer />
    </main>
  );
}
