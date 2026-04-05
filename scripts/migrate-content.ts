/**
 * Script de migración: sube todo el contenido de messages/es.json y messages/en.json
 * a Prismic como documentos con slices.
 *
 * Requisitos:
 *   1. Custom Types ya pusheados en Prismic (via Slice Machine)
 *   2. Locales es-ar y en-us configurados en Prismic dashboard
 *   3. Variable de entorno PRISMIC_WRITE_TOKEN (Settings → API & Security → Generate token con Write access)
 *
 * Uso:
 *   PRISMIC_WRITE_TOKEN=xxx npx tsx scripts/migrate-content.ts
 */

import * as prismic from "@prismicio/client";
import * as prismicMigrate from "@prismicio/migrate";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const esMessages: any = require("../messages/es.json");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const enMessages: any = require("../messages/en.json");

const REPO_NAME = "ifs-broker";
const WRITE_TOKEN = process.env.PRISMIC_WRITE_TOKEN;

if (!WRITE_TOKEN) {
  console.error("❌ Falta PRISMIC_WRITE_TOKEN. Generalo en:");
  console.error("   https://ifs-broker.prismic.io/settings/api/");
  console.error("   → Repository API → Permanent access tokens → Add token (con Write access)");
  process.exit(1);
}

const writeClient = prismic.createWriteClient(REPO_NAME, {
  writeToken: WRITE_TOKEN,
});

const migration = prismic.createMigration();

// ============================================================
// HELPER: create a RichText field from plain text
// ============================================================
function richText(text: string): prismic.RichTextField {
  if (!text) return [];
  return [{ type: "paragraph", text, spans: [] }];
}

function heading1(text: string): prismic.RichTextField {
  if (!text) return [];
  return [{ type: "heading1", text, spans: [] }];
}

function heading2(text: string): prismic.RichTextField {
  if (!text) return [];
  return [{ type: "heading2", text, spans: [] }];
}

// ============================================================
// HOMEPAGE
// ============================================================
function createHomepage(messages: any, lang: string, altDoc?: any) {
  const m = messages;

  const slices: any[] = [
    // Hero slice
    {
      slice_type: "hero",
      slice_label: null,
      variation: "default",
      version: "initial",
      primary: {
        title: heading1(m.heroSection.title),
        subtitle: "",
        description: richText(""),
        cta_text: m.heroPlanificacion.quoteLifeInsurance,
        cta_link: { link_type: "Web", url: "/seguros-de-vida#cotiza" },
        secondary_cta_text: m.footer.scheduleMeeting,
        secondary_cta_link: { link_type: "Web", url: "https://calendly.com/administracion-ifs-broker/30min" },
      },
      items: [],
    },
    // Feature Cards (What We Do)
    {
      slice_type: "feature_cards",
      slice_label: null,
      variation: "default",
      version: "initial",
      primary: {
        label: m.whatWeDo.label,
        title: heading2(m.whatWeDo.title),
        title_highlight: m.whatWeDo.labelHighlight,
        description: m.whatWeDo.description,
      },
      items: [
        { card_text: m.whatWeDo.card1 },
        { card_text: m.whatWeDo.card2 },
      ],
    },
    // Stepper (How We Work)
    {
      slice_type: "stepper",
      slice_label: null,
      variation: "default",
      version: "initial",
      primary: {
        title: m.howWeWork.title,
        heading: heading2(m.howWeWork.heading),
        heading_highlight: m.howWeWork.headingHighlight,
      },
      items: [
        { step_title: m.howWeWork.step1Title, step_description: m.howWeWork.step1Description },
        { step_title: m.howWeWork.step2Title, step_description: m.howWeWork.step2Description },
        { step_title: m.howWeWork.step3Title, step_description: m.howWeWork.step3Description },
        { step_title: m.howWeWork.step4Title, step_description: m.howWeWork.step4Description },
      ],
    },
    // Planning Section
    {
      slice_type: "planning_section",
      slice_label: null,
      variation: "default",
      version: "initial",
      primary: {
        label: m.heroPlanificacion.label,
        title: heading2(m.heroPlanificacion.title),
        description1: richText(m.heroPlanificacion.description1),
        description2: m.heroPlanificacion.description2,
        cta_text: m.heroPlanificacion.quoteLifeInsurance,
        cta_link: { link_type: "Web", url: "/seguros-de-vida#cotiza" },
        secondary_cta_text: m.heroPlanificacion.speakWithAdvisor,
      },
      items: [],
    },
    // Globe Section
    {
      slice_type: "globe_section",
      slice_label: null,
      variation: "default",
      version: "initial",
      primary: {
        title1: m.experienceGlobe.title1,
        title2: m.experienceGlobe.title2,
        description1: m.experienceGlobe.description1,
        description1_highlight: m.experienceGlobe.description1highlight,
        description2: m.experienceGlobe.description2,
      },
      items: [],
    },
    // Logo Cloud
    {
      slice_type: "logo_cloud",
      slice_label: null,
      variation: "default",
      version: "initial",
      primary: {
        title: m.logoCloud.title,
        title_highlight: m.logoCloud.titleHighlight,
        subtitle: m.logoCloud.subtitle,
      },
      items: [],
    },
    // Blog Section
    {
      slice_type: "blog_section",
      slice_label: null,
      variation: "default",
      version: "initial",
      primary: {
        title: heading2(`${m.blog.title1}${m.blog.title2}${m.blog.title3}${m.blog.title4}`),
        description: m.blog.description,
      },
      items: [],
    },
  ];

  const doc = migration.createDocument(
    {
      type: "homepage",
      lang,
      data: {
        seo_title: m.seo.home.title,
        seo_description: m.seo.home.description,
        seo_keywords: m.seo.home.keywords,
        slices,
      },
    } as any,
    `Homepage (${lang})`,
  );

  if (altDoc) {
    doc.masterLanguageDocument = altDoc;
  }

  return doc;
}

// ============================================================
// BLOG POSTS
// ============================================================
function createBlogPost(
  messages: any,
  articleNum: 1 | 2,
  lang: string,
  altDoc?: any,
) {
  const m = messages.blog;
  const prefix = `article${articleNum}` as const;

  const slugs: Record<number, string> = {
    1: "seguro-patrimonial-salud-internacional",
    2: "planificacion-financiera-retiro-educacion",
  };

  // Build rich text body from all sections
  const bodyParts: Array<{ type: string; text: string; spans: never[] }> = [];

  // Main body paragraphs
  const body1Key = `${prefix}Body1` as keyof typeof m;
  const body2Key = `${prefix}Body2` as keyof typeof m;
  if (m[body1Key]) bodyParts.push({ type: "paragraph", text: m[body1Key] as string, spans: [] });
  if (m[body2Key]) bodyParts.push({ type: "paragraph", text: m[body2Key] as string, spans: [] });

  // Sections 2-5
  for (let s = 2; s <= 5; s++) {
    const titleKey = `${prefix}Section${s}Title` as keyof typeof m;
    const bodyKey = `${prefix}Section${s}Body` as keyof typeof m;
    const body2Key2 = `${prefix}Section${s}Body2` as keyof typeof m;

    if (m[titleKey]) bodyParts.push({ type: "heading2", text: m[titleKey] as string, spans: [] });
    if (m[bodyKey]) bodyParts.push({ type: "paragraph", text: m[bodyKey] as string, spans: [] });
    if (m[body2Key2]) bodyParts.push({ type: "paragraph", text: m[body2Key2] as string, spans: [] });
  }

  // Bullets for article 1 section 4
  if (articleNum === 1) {
    const b1 = m.article1Section4Bullet1;
    const b2 = m.article1Section4Bullet2;
    if (b1) bodyParts.push({ type: "list-item", text: b1, spans: [] });
    if (b2) bodyParts.push({ type: "list-item", text: b2, spans: [] });
  }

  const categoryKey = `${prefix}Category` as keyof typeof m;
  const titleKey = `${prefix}Title` as keyof typeof m;
  const subtitleKey = `${prefix}Subtitle` as keyof typeof m;
  const dateKey = `${prefix}Date` as keyof typeof m;
  const readTimeKey = `${prefix}ReadTime` as keyof typeof m;
  const ctaKey = `${prefix}Cta` as keyof typeof m;

  const doc = migration.createDocument(
    {
      type: "blog_post",
      uid: slugs[articleNum],
      lang,
      data: {
        title: (m[titleKey] as string) || "",
        subtitle: (m[subtitleKey] as string) || "",
        category: (m[categoryKey] as string) || "",
        date: articleNum === 1 ? "2025-03-10" : "2025-03-15",
        read_time: (m[readTimeKey] as string) || "",
        body: bodyParts as unknown as prismic.RichTextField,
        cta_text: (m[ctaKey] as string) || "",
        seo_title: (m[`${prefix}MetaTitle` as keyof typeof m] as string) || "",
        seo_description: (m[`${prefix}MetaDescription` as keyof typeof m] as string) || "",
        seo_keywords: (m[`${prefix}Keywords` as keyof typeof m] as string) || "",
      },
    },
    `Blog: ${m[titleKey]} (${lang})`,
  );

  if (altDoc) {
    doc.masterLanguageDocument = altDoc;
  }

  return doc;
}

// ============================================================
// SERVICE PAGES
// ============================================================
function createServicePage(
  messages: any,
  uid: string,
  seoNamespace: string,
  lang: string,
  altDoc?: any,
) {
  const m = messages;
  const seo = (m.seo as any)[seoNamespace] || {};

  const doc = migration.createDocument(
    {
      type: "service_page",
      uid,
      lang,
      data: {
        title: heading1(seo.title || ""),
        description: richText(seo.description || ""),
        seo_title: seo.title || "",
        seo_description: seo.description || "",
        seo_keywords: seo.keywords || "",
        slices: [],
      },
    },
    `Service: ${uid} (${lang})`,
  );

  if (altDoc) {
    doc.masterLanguageDocument = altDoc;
  }

  return doc;
}

// ============================================================
// NAVIGATION
// ============================================================
function createNavigation(messages: any, lang: string, altDoc?: any) {
  const m = messages;

  const doc = migration.createDocument(
    {
      type: "navigation",
      lang,
      data: {
        nav_items: [
          { label: m.nav.home, link: { link_type: "Web", url: "/" } },
          { label: m.nav.soluciones, link: { link_type: "Web", url: "/#soluciones" } },
          { label: m.nav.nosotros, link: { link_type: "Web", url: "/#nosotros" } },
          { label: m.nav.trabajaConNosotros, link: { link_type: "Web", url: "/trabaja-con-nosotros" } },
          { label: m.nav.contacto, link: { link_type: "Web", url: "/#contacto" } },
        ],
        solutions: [
          { title: m.solutions.seguroVida.title, description: m.solutions.seguroVida.description, link: { link_type: "Web", url: "/seguros-de-vida" } },
          { title: m.solutions.fondosRetiro.title, description: m.solutions.fondosRetiro.description, link: { link_type: "Web", url: "/fondos-de-retiro" } },
          { title: m.solutions.saludInternacional.title, description: m.solutions.saludInternacional.description, link: { link_type: "Web", url: "/salud-internacional" } },
          { title: m.solutions.serviciosComplementarios.title, description: m.solutions.serviciosComplementarios.description, link: { link_type: "Web", url: "/servicios-complementarios" } },
        ],
        footer_title: m.footer.title,
        footer_subtitle: m.footer.subtitle,
        footer_cta: m.footer.designFuture,
        contact_email: "administracion@ifs-broker.com",
        calendly_url: "https://calendly.com/administracion-ifs-broker/30min",
      },
    },
    `Navigation (${lang})`,
  );

  if (altDoc) {
    doc.masterLanguageDocument = altDoc;
  }

  return doc;
}

// ============================================================
// MAIN
// ============================================================
async function main() {
  console.log("🚀 Iniciando migración de contenido a Prismic...\n");

  // --- English (master language in Prismic) ---
  console.log("📝 Creando documentos en inglés (en-us) — master locale...");
  const homepageEn = createHomepage(enMessages, "en-us");
  const blog1En = createBlogPost(enMessages, 1, "en-us");
  const blog2En = createBlogPost(enMessages, 2, "en-us");
  const navEn = createNavigation(enMessages, "en-us");

  const servicePages = [
    { uid: "seguros-de-vida", ns: "segurosDeVida" },
    { uid: "fondos-de-retiro", ns: "fondosDeRetiro" },
    { uid: "salud-internacional", ns: "saludInternacional" },
    { uid: "servicios-complementarios", ns: "serviciosComplementarios" },
  ];

  const serviceDocsEn: any[] = [];
  for (const sp of servicePages) {
    serviceDocsEn.push(createServicePage(enMessages, sp.uid, sp.ns, "en-us"));
  }

  // --- Spanish (alternate language) ---
  console.log("📝 Creando documentos en español (es-ar)...");
  createHomepage(esMessages, "es-ar", homepageEn);
  createBlogPost(esMessages, 1, "es-ar", blog1En);
  createBlogPost(esMessages, 2, "es-ar", blog2En);
  createNavigation(esMessages, "es-ar", navEn);

  for (let i = 0; i < servicePages.length; i++) {
    const sp = servicePages[i];
    createServicePage(esMessages, sp.uid, sp.ns, "es-ar", serviceDocsEn[i]);
  }

  // --- Execute migration ---
  console.log("\n📤 Subiendo documentos a Prismic...");
  try {
    await writeClient.migrate(migration, {
      reporter: (event) => {
        console.log(`  → ${event.type}`);
      },
    });
    console.log("\n🎉 ¡Migración completada! Revisá ifs-broker.prismic.io");
  } catch (error: any) {
    console.error("\n❌ Error en la migración:", error?.message || error);
    if (error?.message?.includes("401") || error?.message?.includes("403")) {
      console.error("\n💡 Verificá que el PRISMIC_WRITE_TOKEN tenga permisos de escritura.");
      console.error("   Generalo en: https://ifs-broker.prismic.io/settings/api/");
    }
    process.exit(1);
  }
}

main();
