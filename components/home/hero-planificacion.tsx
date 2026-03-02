export function HeroPlanificacion() {
    return (
      <section className="w-full max-w-[1100px] mx-auto overflow-hidden rounded-[24px] shadow-lg">
        {/* Top Hero - Dark Blue with Grid */}
        <div className="relative bg-[#0B2A4A] px-10 py-16 md:px-16 md:py-20 overflow-hidden">
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #91D8F7 1px, transparent 1px),
                linear-gradient(to bottom, #91D8F7 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              transform: "perspective(600px) rotateX(10deg) scale(1.2)",
              transformOrigin: "center bottom",
            }}
          />
          {/* Diagonal lines overlay */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                linear-gradient(45deg, #91D8F7 1px, transparent 1px),
                linear-gradient(-45deg, #91D8F7 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
  
          <div className="relative z-10 text-center">
            <p className="text-white text-sm md:text-base font-medium tracking-wide mb-8">
              Una planificación financiera inteligente comienza por proteger lo esencial
            </p>
            <h1 className="font-serif text-2xl md:text-[2.25rem] lg:text-[2.5rem] font-bold uppercase tracking-[0.08em] leading-[1.3] text-balance">
              <span className="text-white">{"Diseñar una estrategia para "}</span>
              <span className="text-[#91D8F7]">proteger a la familia</span>
              <span className="text-white">{", asegurar la continuidad de la empresa y planificar el "}</span>
              <span className="text-[#91D8F7]">patrimonio</span>
              <span className="text-white">{" con visión a "}</span>
              <span className="text-[#91D8F7]">largo plazo.</span>
            </h1>
          </div>
        </div>
  
        {/* Bottom Content - Light */}
        <div
          className="bg-white px-10 py-12 md:px-16 md:py-14"
          style={{
            background: "linear-gradient(to bottom, #f0f5fa, #ffffff)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            {/* Left Column */}
            <div className="flex-1">
              <p className="text-[#1a2b3d] text-lg md:text-xl leading-relaxed">
                {"En IFS desarrollamos "}
                <span className="text-[#1479B7] font-semibold">
                  soluciones patrimoniales personalizadas de alcance internacional
                </span>
                {", diseñadas en función de los objetivos  y etapas de vida de cada cliente."}
              </p>
            </div>
  
            {/* Right Column */}
            <div className="flex-1 flex flex-col items-end gap-5">
              <p className="text-[#4a5568] text-sm leading-relaxed text-center md:text-right max-w-[400px]">
                Cada propuesta se construye sobre un diagnóstico patrimonial integral que permite definir
                prioridades, evaluar riesgos y proyectar estabilidad en el tiempo.
              </p>
              <div className="flex flex-col gap-3">
                <button className="bg-[#0B2A4A] text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-[#0d3460] transition-colors cursor-pointer">
                  Cotizá tu seguro de vida
                </button>
                <button className="bg-[#0B2A4A] text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-[#0d3460] transition-colors cursor-pointer">
                  Habla con un asesor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  