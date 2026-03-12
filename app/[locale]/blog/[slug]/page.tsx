import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import BlogArticle from "@/components/home/blog-article";
import Footer from "@/components/layout/footer";

const slugToArticleId: Record<string, "article1" | "article2"> = {
  "seguro-patrimonial-salud-internacional": "article1",
  "planificacion-financiera-retiro-educacion": "article2",
};

type Params = Promise<{
  locale: string;
  slug: string;
}>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const articleId = slugToArticleId[slug];
  if (!articleId) return {};
  const t = await getTranslations({ locale, namespace: "blog" });
  const title = t(`${articleId}MetaTitle`);
  const description = t(`${articleId}MetaDescription`);
  const image = t(`${articleId}Image`);
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [{ url: image }],
      url: `/${locale}/blog/${slug}`,
    },
    twitter: { title, description, images: [image] },
    alternates: { canonical: `/${locale}/blog/${slug}` },
  };
}

export default async function BlogSlugPage({
  params,
}: {
  params: Params;
}) {
  const { locale, slug } = await params;
  const articleId = slugToArticleId[slug];

  if (!articleId) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "blog" });
  const metaTitle = t(`${articleId}MetaTitle`);
  const metaDescription = t(`${articleId}MetaDescription`);
  const image = t(`${articleId}Image`);
  const datePublished = t(`${articleId}Date`);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metaTitle,
    description: metaDescription,
    image,
    datePublished,
    author: { "@type": "Organization", name: "IFS Broker" },
    publisher: {
      "@type": "Organization",
      name: "IFS Broker",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://ifsbroker.com"}/ifs_insurance.png`,
      },
    },
  };

  return (
    
    <> <Navbar forceBlue />
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

        <BlogArticle articleId={articleId} />
      </main>
      <Footer />

    </>
  );
}

