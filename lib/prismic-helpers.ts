import { createClient, localeToLang } from "@/prismicio";
import * as prismic from "@prismicio/client";

/**
 * Fetch the homepage document from Prismic for the given locale.
 * Returns null if not found (fallback to translations).
 */
export async function getHomepage(locale: string) {
  const client = createClient();
  try {
    return await client.getSingle("homepage", {
      lang: localeToLang(locale),
    });
  } catch {
    return null;
  }
}

/**
 * Fetch a service page by UID from Prismic for the given locale.
 * Returns null if not found (fallback to translations).
 */
export async function getServicePage(uid: string, locale: string) {
  const client = createClient();
  try {
    return await client.getByUID("service_page", uid, {
      lang: localeToLang(locale),
    });
  } catch {
    return null;
  }
}

/**
 * Fetch a blog post by UID from Prismic for the given locale.
 * Returns null if not found (fallback to translations).
 */
export async function getBlogPost(slug: string, locale: string) {
  const client = createClient();
  try {
    return await client.getByUID("blog_post", slug, {
      lang: localeToLang(locale),
    });
  } catch {
    return null;
  }
}

/**
 * Fetch all blog posts from Prismic for the given locale.
 * Returns empty array if none found.
 */
export async function getAllBlogPosts(locale: string) {
  const client = createClient();
  try {
    return await client.getAllByType("blog_post", {
      lang: localeToLang(locale),
      orderings: [{ field: "my.blog_post.date", direction: "desc" }],
    });
  } catch {
    return [];
  }
}

/**
 * Fetch the navigation document from Prismic for the given locale.
 * Returns null if not found (fallback to translations).
 */
export async function getNavigation(locale: string) {
  const client = createClient();
  try {
    return await client.getSingle("navigation", {
      lang: localeToLang(locale),
    });
  } catch {
    return null;
  }
}
