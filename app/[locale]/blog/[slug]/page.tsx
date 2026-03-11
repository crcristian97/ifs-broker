import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/navbar";
import BlogArticle from "@/components/home/blog-article";

const slugToArticleId: Record<string, "article1" | "article2"> = {
  "seguro-patrimonial-salud-internacional": "article1",
  "planificacion-financiera-retiro-educacion": "article2",
};

type Params = Promise<{
  locale: string;
  slug: string;
}>;

export default async function BlogSlugPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const articleId = slugToArticleId[slug];

  if (!articleId) {
    notFound();
  }

  const t = await getTranslations("blog");
  const metaTitle =
    articleId === "article1"
      ? t("article1MetaTitle")
      : t("article2MetaTitle");
  const metaDescription =
    articleId === "article1"
      ? t("article1MetaDescription")
      : t("article2MetaDescription");

  return (
    <main className="relative">
      <div className="mt-">
        <BlogArticle articleId={articleId} />
      </div>
    </main>
  );
}

