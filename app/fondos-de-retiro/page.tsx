import { Navbar } from "@/components/layout/navbar";
import HeroSubsection from "@/components/layout/hero-subsection";

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
    </main>
  );
}
