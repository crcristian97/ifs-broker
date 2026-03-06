import { Globe } from "@/components/home/experience-globe-section";

export function HeroGlobe() {
  return (
    <section
      className="w-full"
      style={{
        background:
          "linear-gradient(135deg, #0a467e 0%, #033163 75%, #033163 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-10 px-6 py-16 md:flex-row md:items-stretch md:px-12 lg:px-16">
        {/* Texto a la izquierda */}
        <div className="flex flex-1 flex-col justify-center">
          <h2
            className="mb-4 text-3xl font-regular leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
            style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}
          >
            <span className="text-[#006FC4]">
              Cobertura de salud internacional{" "}
            </span>
            <span className="text-white">para personas y empresas</span>
          </h2>
          <p
            className="text-base text-white sm:text-lg"
            style={{ fontFamily: "var(--font-noto-sans), sans-serif" }}
          >
            La salud es un pilar fundamental dentro de la planificación
            financiera.
          </p>
        </div>

        {/* Globo a la derecha, más grande */}
        <div className="flex flex-1 items-center justify-center py-6 md:py-10">
          <div className="relative h-[260px] w-full max-w-[420px] sm:h-[320px] sm:max-w-[480px] md:h-[420px] md:max-w-[520px]">
            <Globe className="max-w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroGlobe;

