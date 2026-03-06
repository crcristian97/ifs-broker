import { FeatureCard } from "../ui/feature-card";
import { AnimatedGridPattern } from "../ui/background-wedosection";
import { FadeInUp } from "../ui/fade-in-up";
import { cn } from "@/lib/utils";

export function WhatWeDoSection() {
  return (
    <section className="relative w-full min-h-screen py-20 px-6 md:py-28 md:px-12 lg:px-16 overflow-hidden">
      {/* Background pattern */}
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-10%] h-[200%] skew-y-12 -z-10",
        )}
      />
      
      <div className="relative z-10 max-w-[1400px] mx-auto flex min-h-[70vh] flex-col justify-between gap-10">
        {/* Logo */}
        

        {/* Title */}
        <FadeInUp>
          <h2 className="text-[#033163] text-xl sm:text-2xl md:text-3xl font-regular mb-3 sm:mb-4 text-center md:text-left">
            ¿Qué hacemos?
          </h2>
        </FadeInUp>

        {/* Main headline */}
        <FadeInUp delay={0.15}>
          <h3
            className="text-[#006FC4] text-3xl sm:text-4xl md:text-5xl font-regular mb-5 max-w-4xl leading-tight"
            style={{ fontFamily: 'var(--font-oxanium), sans-serif' }}
          >
            SOLUCIONES FINANCIERAS<span className="text-[#033163]"> PENSADAS PARA
            CADA MOMENTO DE LA VIDA</span>
          </h3>
        </FadeInUp>

        {/* Description */}
        <FadeInUp delay={0.3}>
          <p
            className="text-[#033163] text-base sm:text-lg mb-10 max-w-3xl leading-relaxed font-regular"
            style={{ fontFamily: 'var(--font-noto-sans), sans-serif' }}
          >
            IFS Insurance & Financial Solutions es un broker internacional especializado en planificación financiera integral.
          </p>
        </FadeInUp>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 w-full">
          <FadeInUp delay={0.45} className="h-full">
            <FeatureCard 
              text="Nuestro enfoque se basa en el diseño de estrategias financieras que se adaptan y evolucionan junto a cada cliente."
            />
          </FadeInUp>
          <FadeInUp delay={0.6} className="h-full">
            <FeatureCard 
              text="Trabajamos con personas y empresas que buscan proteger su patrimonio, planificar el futuro y tomar decisiones financieras con información clara y acompañamiento profesional."
            />
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
