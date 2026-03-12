"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

type ArticleId = "article1" | "article2";

type BlogArticleProps = {
  articleId: ArticleId;
};

export default function BlogArticle({ articleId }: BlogArticleProps) {
  const t = useTranslations("blog");

  const isFirst = articleId === "article1";
  const categorySlug = isFirst ? "salud" : "finanzas";

  const metaTitle = t(isFirst ? "article1MetaTitle" : "article2MetaTitle");
  const metaDescription = t(
    isFirst ? "article1MetaDescription" : "article2MetaDescription",
  );
  const category = t(isFirst ? "article1Category" : "article2Category");
  const title = t(isFirst ? "article1Title" : "article2Title");
  const subtitle = t(isFirst ? "article1Subtitle" : "article2Subtitle");
  const heading = t(isFirst ? "article1Heading" : "article2Heading");
  const image = isFirst ? "/blog/salud-internacional.webp" : "/blog/planificacion-financiera.webp";
  const publishDate = t(isFirst ? "article1Date" : "article2Date");
  const readTime = t(isFirst ? "article1ReadTime" : "article2ReadTime");

  return (
    <article className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-0 mt-20">
      <header className="space-y-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/70 sm:text-xs">
          IFSBROKER / {categorySlug}
        </p>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-black sm:text-sm">
          {category}
        </p>
        <h1
          className="text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl"
         
        >
          {title}
        </h1>
        <p className="text-base font-medium text-black sm:text-lg">
          {subtitle}
        </p>
        <p className="text-xs text-black/70 sm:text-sm">
          {publishDate} · {readTime}
        </p>
        <p className="text-[13px] text-black sm:text-sm">{metaDescription}</p>
      </header>

      <div className="relative overflow-hidden rounded-3xl bg-slate-100">
        <Image
          src={image}
          alt={metaTitle}
          width={1440}
          height={720}
          className="h-72 w-full object-cover sm:h-80 md:h-96"
        />
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-black sm:text-base">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black sm:text-2xl">
            {heading}
          </h2>
          <p>{t(isFirst ? "article1Body1" : "article2Body1")}</p>
          <p>{t(isFirst ? "article1Body2" : "article2Body2")}</p>
        </section>

        {isFirst ? (
          <>
            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-black sm:text-xl">
                {t("article1Section2Title")}
              </h3>
              <p>{t("article1Section2Body")}</p>
              <p>{t("article1Section2Body2")}</p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-black sm:text-xl">
                {t("article1Section3Title")}
              </h3>
              <p>{t("article1Section3Body")}</p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-black sm:text-xl">
                {t("article1Section4Title")}
              </h3>
              <p>{t("article1Section4Body1")}</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>{t("article1Section4Bullet1")}</li>
                <li>{t("article1Section4Bullet2")}</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-black sm:text-xl">
                {t("article1Section5Title")}
              </h3>
              <p>{t("article1Section5Body1")}</p>
              <p>{t("article1Section5Body2")}</p>
            </section>
          </>
        ) : (
          <>
            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-black sm:text-xl">
                {t("article2Section2Title")}
              </h3>
              <p>{t("article2Section2Body1")}</p>
              <p>{t("article2Section2Body2")}</p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-black sm:text-xl">
                {t("article2Section3Title")}
              </h3>
              <p>{t("article2Section3Body")}</p>
              <p>{t("article2Section3Body2")}</p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-black sm:text-xl">
                {t("article2Section4Title")}
              </h3>
              <p>{t("article2Section4Body1")}</p>
              <p>{t("article2Section4Body2")}</p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-black sm:text-xl">
                {t("article2Section5Title")}
              </h3>
              <p>{t("article2Section5Body1")}</p>
              <p>{t("article2Section5Body2")}</p>
            </section>
          </>
        )}

        <section className="mt-4 rounded-2xl bg-[#006fc4]/5 p-4 text-sm text-black sm:p-6">
          <p className="font-medium mb-4">
            {isFirst ? t("article1Cta") : t("article2Section5Body2")}
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-full bg-[#006fc4] px-6 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0053a0] sm:text-base"
          >
            {t("ctaContactarAsesor")}
          </Link>
        </section>
      </div>
    </article>
  );
}

