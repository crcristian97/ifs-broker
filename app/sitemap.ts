import type { MetadataRoute } from 'next';

const locales = ['es', 'en'];

const pages = [
  '',
  '/seguros-de-vida',
  '/salud-internacional',
  '/fondos-de-retiro',
  '/servicios-complementarios',
];

const blogSlugs = [
  '/blog/seguro-patrimonial-salud-internacional',
  '/blog/planificacion-financiera-retiro-educacion',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ifsbroker.com';
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of [...pages, ...blogSlugs]) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : page.includes('/blog/') ? 0.7 : 0.8,
      });
    }
  }

  return entries;
}