import { FeatureCard } from "../ui/feature-card";
import { AnimatedGridPattern } from "../ui/background-wedosection";
import { cn } from "@/lib/utils";

export function WhatWeDoSection() {
  return (
    <section className="relative w-full bg-white py-16 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background pattern */}
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-10%] h-[200%] skew-y-12",
        )}
      />
      
      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Logo */}
        

        {/* Title */}
        <h2 className="text-[#033163] text-3xl font-regular mb-6 text-center md:text-left">
          ¿Qué hacemos?
        </h2>

        {/* Main headline */}
        <h3 className="text-[#006FC4] text-6xl font-regular mb-6 max-w-4xl" style={{ fontFamily: 'var(--font-oxanium), sans-serif' }}>
          SOLUCIONES FINANCIERAS PENSADAS <span className="text-[#033163]">PARA</span>
          <br />
          <span className="text-[#033163]">CADA MOMENTO DE LA VIDA</span>
        </h3>

        {/* Description */}
        <p className="text-[#033163] text-xl mb-12 max-w-3xl leading-relaxed font-regular" style={{ fontFamily: 'var(--font-noto-sans), sans-serif' }}>
          IFS Insurance & Financial Solutions es un broker internacional especializado en planificación financiera integral.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 w-full">
          <FeatureCard 
            text="Nuestro enfoque se basa en el diseño de estrategias financieras que se adaptan y evolucionan junto a cada cliente."
          />
          <FeatureCard 
            text="Trabajamos con personas y empresas que buscan proteger su patrimonio, planificar el futuro y tomar decisiones financieras con información clara y acompañamiento profesional."
          />
        </div>
      </div>
    </section>
  );
}
