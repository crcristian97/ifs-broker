import { InteractiveGlobe } from "@/components/ui/interactive-globe";

export function ExperienceGlobeSection() {
  return (
    <section
      className="w-full min-h-[400px]"
      style={{
        background:
          "linear-gradient(135deg, #0a467e 0%, #033163 75%, #033163 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 px-6 md:flex-row md:px-12 lg:px-16">
        <div className="flex flex-1 flex-col justify-center">
          <h2
            className="text-5xl font-regular tracking-tight text-[#91D8F7] leading-tight mb-4"
            style={{ fontFamily: "var(--font-oxanium), sans-serif" }}
          >
            EXPERIENCIA{" "}
            <span className="text-[#FFFFFF]">QUE GENERA CONFIANZA</span>
          </h2>

          <p
            className="text-xl text-[#FFFFFF] leading-relaxed mb-4"
            style={{ fontFamily: "var(--font-noto-sans), sans-serif" }}
          >
            Nuestro equipo está conformado por profesionales con más de 20 años
            de experiencia en la industria financiera y aseguradora, con
            trayectoria en{" "}
            <span className="text-[#91D8F7]">
              compañías líderes a nivel internacional.
            </span>
          </p>
          <p className="text-lg text-[#FFFFFF] leading-relaxed">
            Ese recorrido nos permite acompañar decisiones complejas con
            criterio, claridad y responsabilidad.
          </p>
        </div>
        <div className="flex-1 flex items-end justify-end min-h-[320px] md:min-h-[420px] pb-6 md:pb-12">
          {/* 
            Ajustamos el alineamiento del globo para que ocupe el margen/espacio inferior, 
            similar a cómo el texto en el footer está pegado abajo.
          */}
          <InteractiveGlobe
            size={460}
            className="relative z-10"
          />
        </div>
      </div>
    </section>
  );
}

