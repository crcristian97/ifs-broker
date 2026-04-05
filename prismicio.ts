import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || "ifs-broker";

/**
 * The project's Prismic Route Resolvers. This list determines a Prismic
 * document's URL.
 */
const routes: prismic.ClientConfig["routes"] = [
  { type: "homepage", lang: "es-ar", path: "/es" },
  { type: "homepage", lang: "en-us", path: "/en" },
  { type: "service_page", lang: "es-ar", path: "/es/:uid" },
  { type: "service_page", lang: "en-us", path: "/en/:uid" },
  { type: "blog_post", lang: "es-ar", path: "/es/blog/:uid" },
  { type: "blog_post", lang: "en-us", path: "/en/blog/:uid" },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 */
export function createClient(config: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({ client });

  return client;
}

/**
 * Map next-intl locale codes to Prismic locale codes.
 */
export function localeToLang(locale: string): string {
  const map: Record<string, string> = {
    es: "es-ar",
    en: "en-us",
  };
  return map[locale] || "es-ar";
}

/**
 * Map Prismic locale codes back to next-intl locale codes.
 */
export function langToLocale(lang: string): string {
  const map: Record<string, string> = {
    "es-ar": "es",
    "en-us": "en",
  };
  return map[lang] || "es";
}
