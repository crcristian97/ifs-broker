import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import BlogArticle from "@/components/home/blog-article";
import { Footer } from "@/components/layout/footer";

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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ifsbroker.com";
  const t = await getTranslations({ locale, namespace: "blog" });
  const title = t(`${articleId}MetaTitle`);
  const description = t(`${articleId}MetaDescription`);
  const keywords = t(`${articleId}Keywords`);
  const image = t(`${articleId}Image`);
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "IFS Broker",
      locale: locale === "es" ? "es_AR" : "en_US",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      url: `${baseUrl}/${locale}/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/blog/${slug}`,
      languages: { es: `${baseUrl}/es/blog/${slug}`, en: `${baseUrl}/en/blog/${slug}` },
    },
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

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ifsbroker.com";
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metaTitle,
    description: metaDescription,
    image: imageUrl,
    datePublished,
    author: { "@type": "Organization", name: "IFS Broker" },
    publisher: {
      "@type": "Organization",
      name: "IFS Broker",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/ifs_insurance.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/${locale}/blog/${slug}`,
    },
  };

  const tNav = await getTranslations({ locale, namespace: "nav" });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: tNav("home"), item: `${baseUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/${locale}/blog` },
      { "@type": "ListItem", position: 3, name: metaTitle, item: `${baseUrl}/${locale}/blog/${slug}` },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

        <BlogArticle articleId={articleId} />
      </main>
      <Footer />

    </>
  );
}

