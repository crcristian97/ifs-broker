export function ExperienceGlobeSection() {
  return (
    <section
      className="w-full min-h-[400px]"
      style={{
        background:
          "linear-gradient(135deg, #0a467e 0%, #033163 75%, #033163 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-12 px-6 md:px-12 lg:px-16">
        <div className="flex flex-1 flex-col justify-center py-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-regular tracking-tight text-[#91D8F7] leading-tight mb-4"
            style={{ fontFamily: "var(--font-oxanium), sans-serif" }}
          >
            EXPERIENCIA{" "}
            <span className="text-[#FFFFFF]">QUE GENERA CONFIANZA</span>
          </h2>

          <p
            className="text-base sm:text-lg text-[#FFFFFF] leading-relaxed mb-4"
            style={{ fontFamily: "var(--font-noto-sans), sans-serif" }}
          >
            Nuestro equipo está conformado por profesionales con más de 20 años
            de experiencia en la industria financiera y aseguradora, con
            trayectoria en{" "}
            <span className="text-[#91D8F7]">
              compañías líderes a nivel internacional.
            </span>
          </p>
          <p className="text-sm sm:text-base md:text-lg text-[#FFFFFF] leading-relaxed">
            Ese recorrido nos permite acompañar decisiones complejas con
            criterio, claridad y responsabilidad.
          </p>
        </div>
      </div>
    </section>
  );
}

