"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const t = useTranslations("blog");
  const articlesData = [
    {
      category: t("article1Category"),
      title: t("article1Title"),
      description: t("article1Description"),
      image: "/services/img-salud-corporativa.png",
      publishDate: t("article1Date"),
      readMoreLink: "#",
    },
    {
      category: t("article2Category"),
      title: t("article2Title"),
      description: t("article2Description"),
      image: "/services/img-salud-corporativa.png",
      publishDate: t("article2Date"),
      readMoreLink: "#",
    },
    {
      category: t("article3Category"),
      title: t("article3Title"),
      description: t("article3Description"),
      image: "/services/img-salud-corporativa.png",
      publishDate: t("article3Date"),
      readMoreLink: "#",
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
                className="cursor-pointer border border-gray-300/50 bg-white/50 shadow-none backdrop-blur-sm transition-shadow hover:shadow-md rounded-3xl overflow-hidden"
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
                    {/* Bottom overlay with title (solid band) */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-[#FFFFFF]/20 backdrop-blur-md flex items-end">
                      <div className="flex w-full items-center justify-between px-3 py-2 sm:px-4 sm:py-3">
                        <p className="text-xl font-medium text-[#033163] line-clamp-2">
                          {article.title}
                        </p>
                        
                      </div>
                    </div>
                  </div>
                  <div className="px-3 pb-3 sm:px-4 sm:pb-4">
                    
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
                        {t("readMore")}
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
