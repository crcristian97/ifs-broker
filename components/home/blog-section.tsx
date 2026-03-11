"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function BlogSection() {
  const t = useTranslations("blog");
  const articlesData = [
    {
      id: "article1",
      slug: "seguro-patrimonial-salud-internacional",
      categorySlug: "salud",
      category: t("article1Category"),
      title: t("article1Title"),
      subtitle: t("article1Subtitle"),
      description: t("article1Heading"),
      image: "/blog/salud-internacional.webp",
      publishDate: t("article1Date"),
      readTime: t("article1ReadTime"),
      readMoreLink: "/blog/seguro-patrimonial-salud-internacional",
    },
    {
      id: "article2",
      slug: "planificacion-financiera-retiro-educacion",
      categorySlug: "finanzas",
      category: t("article2Category"),
      title: t("article2Title"),
      subtitle: t("article2Subtitle"),
      description: t("article2Heading"),
      image: "/blog/planificacion-financiera.webp",
      publishDate: t("article2Date"),
      readTime: t("article2ReadTime"),
      readMoreLink: "/blog/planificacion-financiera-retiro-educacion",
    },
  ];
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
            className="font-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#006fc4] leading-tight tracking-widest"
            style={{ fontFamily: '"Adagietto", "Zalando Sans", system-ui, sans-serif' }}
          >
            <span className="text-[#006fc4]">{t("title1")}</span>
            <span className="text-[#033163]">
              {t("title2")}
              {t("title3")}
            </span>
            <span className="text-[#006fc4]">{t("title4")}</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#033163] max-w-2xl">
            {t("description")}
          </p>
        </div>
        {/* LARGE WHITE BACKGROUND AREA FOR BOTTOM PART */}
        <div className="relative">
          <div className="absolute inset-0 z-0 bg-white rounded-3xl " style={{ minHeight: "600px" }} />
          <div className="relative z-10 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 p-4 sm:p-8 ">
            {articlesData.map((article, index) => (
              <div
                className="border border-gray-300/50 bg-white/50 shadow-none backdrop-blur-sm transition-shadow hover:shadow-md rounded-3xl overflow-hidden"
                key={index}
              >
                <div className="p-0">
                  <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-t-3xl">
                    <Image
                      alt={article.title}
                      className="aspect-square h-64 w-full object-cover sm:h-72 md:h-80"
                      height={1080}
                      src={article.image || "/placeholder.svg"}
                      width={1920}
                    />
                    {/* Bottom blur overlay with title */}
                    <div className="absolute left-0 bottom-0 w-full flex flex-col items-start">
                      <div
                        className="relative px-5 py-2"
                        style={{
                          zIndex: 20,
                        }}
                      >
                        {/* Title: white, text-left, at beginning */}
                        <span className="text-white font-bold text-lg leading-snug text-left">
                          {article.title}
                        </span>
                      </div>
                      <div
                        className="w-full"
                        style={{
                          // Blur band at the bottom
                          position: "absolute",
                          left: 0,
                          bottom: 0,
                          width: "100%",
                          height: "70px",
                          background: "linear-gradient(to top, rgba(0,0,0,0.70) 80%, rgba(0,0,0,0.2) 100%, transparent 100%)",
                          backdropFilter: "blur(8px)",
                          WebkitBackdropFilter: "blur(8px)",
                          zIndex: 10,
                        }}
                      />
                    </div>
                  </div>
                  <div className="px-3 pb-3 sm:px-4 sm:pb-4">
                    <p className="mb-1 text-black text-[11px] uppercase tracking-[0.15em] sm:text-xs">
                      {article.category}
                    </p>
                    <p className="mb-1 text-black text-sm font-semibold sm:text-base">
                      {article.subtitle}
                    </p>
                    <p className="mb-4 text-black text-xs leading-relaxed sm:mb-6 sm:text-sm">
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
                        {t("readMore")}
                      </Link>
                      <span className="flex items-center gap-2 text-[10px] text-black sm:gap-3 sm:text-xs">
                        {article.publishDate}
                        <span className="w-6 border-black border-t sm:w-16" />
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
