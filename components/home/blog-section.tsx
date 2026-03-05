import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const articlesData = [
  {
    category: "FINANZAS",
    title: "¿Por qué un fondo de emergencia es esencial?",
    description:
      "Descubre cómo un fondo de emergencia puede proteger tus ahorros ante imprevistos y brindarte mayor tranquilidad financiera.",
    image: "/services/img-salud-corporativa.png",
    publishDate: "Jun 5, 2024",
    readMoreLink: "#",
  },
  {
    category: "SALUD",
    title: "Cobertura médica internacional: ventajas y recomendaciones",
    description:
      "Analizamos los beneficios de contar con un seguro de salud internacional y qué tener en cuenta al elegirlo para ti o tu familia.",
    image: "/services/img-salud-corporativa.png",
    publishDate: "May 18, 2024",
    readMoreLink: "#",
  },
  {
    category: "DÓLAR",
    title: "Dólar vs. Peso: estrategias para proteger tu patrimonio",
    description:
      "¿Es momento de dolarizar tus ahorros? Exploramos alternativas en un contexto de incertidumbre cambiaria en Latinoamérica.",
    image: "/services/img-salud-corporativa.png",
    publishDate: "Apr 28, 2024",
    readMoreLink: "#",
  },
];
export default function BlogSection() {
  return (
    <section
      className="relative px-4 py-12 sm:py-16 md:py-20"
      style={{
        background: "linear-gradient(to bottom, transparent 0%, #fff 30%, #fff 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-8 sm:mb-12 text-left max-w-3xl">
          <h2
            className="font-regular text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#006fc4]"
            style={{ fontFamily: "var(--font-oxanium), sans-serif" }}
          >
            INFORMACIÓN PARA <span className="text-[#033163]">TOMAR MEJORES</span>
            <br />
            DECISIONES <span className="text-[#033163]">FINANCIERAS</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#033163] max-w-2xl">
            En nuestro espacio de contenidos compartimos análisis y conceptos
            clave sobre planificación financiera, seguros de vida, retiro,
            inversión y salud internacional.
          </p>
        </div>
        {/* LARGE WHITE BACKGROUND AREA FOR BOTTOM PART */}
        <div className="relative">
          <div className="absolute inset-0 z-0 bg-white rounded-3xl " style={{ minHeight: "600px" }} />
          <div className="relative z-10 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 p-4 sm:p-8 ">
            {articlesData.map((article, index) => (
              <div
                className="cursor-pointer border border-gray-300/50 bg-white/50 shadow-none backdrop-blur-sm transition-shadow hover:shadow-md rounded-3xl"
                key={index}
              >
                <div className="p-0">
                  <div className="relative mb-4 sm:mb-6">
                    <Image
                      alt={article.title}
                      className="aspect-square h-64 w-full object-cover sm:h-72 md:h-80 rounded-t-3xl"
                      height={1080}
                      src={article.image || "/placeholder.svg"}
                      width={1920}
                    />
                    <p
                      className="absolute top-0 left-0 rounded-none border-0 bg-white px-2 py-0.5 font-medium text-[10px] text-black uppercase backdrop-blur-sm sm:-top-0.5 sm:-left-0.5 sm:px-3 sm:py-1 sm:text-xs"
                    >
                      #{article.category}
                    </p>
                  </div>
                  <div className="px-3 pb-3 sm:px-4 sm:pb-4">
                    <h3 className="mb-2 font-normal text-base text-gray-900 tracking-tight sm:mb-2 sm:text-lg md:text-2xl">
                      {article.title}
                    </h3>
                    <p className="mb-4 text-gray-600 text-xs leading-relaxed sm:mb-6 sm:text-sm">
                      {article.description}
                    </p>
                    {/* Read More Link and Date */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <Link
                        className="group relative flex items-center overflow-hidden font-medium text-gray-900 text-xs transition-colors hover:text-[#006fc4] sm:text-sm"
                        href={article.readMoreLink}
                      >
                        <span className="mr-2 overflow-hidden rounded-none border border-[#033163] p-2 transition-colors duration-300 ease-in group-hover:bg-[#006fc4] group-hover:text-white sm:p-3">
                          <ArrowRight className="h-3 w-3 translate-x-0 opacity-100 transition-all duration-500 ease-in group-hover:translate-x-8 group-hover:opacity-0 sm:h-4 sm:w-4" />
                          <ArrowRight className="absolute top-1/2 -left-4 h-4 w-4 -translate-y-1/2 transition-all duration-500 ease-in-out group-hover:left-2 sm:-left-5 sm:h-4 sm:w-4 sm:group-hover:left-3" />
                        </span>
                        Read more
                      </Link>
                      <span className="flex items-center gap-2 text-[10px] text-[#033163] sm:gap-3 sm:text-xs">
                        {article.publishDate}
                        <span className="w-6 border-[#033163] border-t sm:w-16" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
