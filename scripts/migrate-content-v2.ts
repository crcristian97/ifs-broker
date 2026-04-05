/**
 * Script de migración v2: sube contenido a Prismic usando la API directa.
 * Maneja documentos existentes sin romper.
 *
 * Uso:
 *   PRISMIC_WRITE_TOKEN=xxx npx tsx scripts/migrate-content-v2.ts
 */

import * as prismic from "@prismicio/client";

const esMessages: any = require("../messages/es.json");
const enMessages: any = require("../messages/en.json");

const REPO_NAME = "ifs-broker";
const WRITE_TOKEN = process.env.PRISMIC_WRITE_TOKEN!;

if (!WRITE_TOKEN) {
  console.error("❌ Falta PRISMIC_WRITE_TOKEN");
  process.exit(1);
}

const writeClient = prismic.createWriteClient(REPO_NAME, {
  writeToken: WRITE_TOKEN,
});

// ============================================================
// Helpers
// ============================================================
function richText(text: string) {
  if (!text) return [];
  return [{ type: "paragraph", text, spans: [] }];
}

function heading1(text: string) {
  if (!text) return [];
  return [{ type: "heading1", text, spans: [] }];
}

function heading2(text: string) {
  if (!text) return [];
  return [{ type: "heading2", text, spans: [] }];
}

// ============================================================
// Document data builders
// ============================================================
function buildHomepageData(m: any) {
  return {
    seo_title: m.seo.home.title,
    seo_description: m.seo.home.description,
    seo_keywords: m.seo.home.keywords,
    slices: [
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
          secondary_cta_text: m.footer?.scheduleMeeting || "",
          secondary_cta_link: { link_type: "Web", url: "https://calendly.com/administracion-ifs-broker/30min" },
        },
        items: [],
      },
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
    ],
  };
}

function buildBlogData(m: any, num: 1 | 2) {
  const p = `article${num}`;
  const body: any[] = [];

  if (m.blog[`${p}Body1`]) body.push({ type: "paragraph", text: m.blog[`${p}Body1`], spans: [] });
  if (m.blog[`${p}Body2`]) body.push({ type: "paragraph", text: m.blog[`${p}Body2`], spans: [] });

  for (let s = 2; s <= 5; s++) {
    if (m.blog[`${p}Section${s}Title`]) body.push({ type: "heading2", text: m.blog[`${p}Section${s}Title`], spans: [] });
    if (m.blog[`${p}Section${s}Body`]) body.push({ type: "paragraph", text: m.blog[`${p}Section${s}Body`], spans: [] });
    if (m.blog[`${p}Section${s}Body2`]) body.push({ type: "paragraph", text: m.blog[`${p}Section${s}Body2`], spans: [] });
    if (m.blog[`${p}Section${s}Body1`]) body.push({ type: "paragraph", text: m.blog[`${p}Section${s}Body1`], spans: [] });
  }

  if (num === 1 && m.blog.article1Section4Bullet1) {
    body.push({ type: "list-item", text: m.blog.article1Section4Bullet1, spans: [] });
    body.push({ type: "list-item", text: m.blog.article1Section4Bullet2, spans: [] });
  }

  return {
    title: m.blog[`${p}Title`] || "",
    subtitle: m.blog[`${p}Subtitle`] || "",
    category: m.blog[`${p}Category`] || "",
    date: num === 1 ? "2025-03-10" : "2025-03-15",
    read_time: m.blog[`${p}ReadTime`] || "",
    body,
    cta_text: m.blog[`${p}Cta`] || "",
    seo_title: m.blog[`${p}MetaTitle`] || "",
    seo_description: m.blog[`${p}MetaDescription`] || "",
    seo_keywords: m.blog[`${p}Keywords`] || "",
  };
}

function buildServiceData(m: any, ns: string) {
  const seo = m.seo[ns] || {};
  return {
    title: [{ type: "heading1", text: seo.title || "", spans: [] }],
    description: [{ type: "paragraph", text: seo.description || "", spans: [] }],
    seo_title: seo.title || "",
    seo_description: seo.description || "",
    seo_keywords: seo.keywords || "",
    slices: [],
  };
}

function buildNavigationData(m: any) {
  return {
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
  };
}

// ============================================================
// API helpers
// ============================================================
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function createDoc(
  type: string,
  uid: string | undefined,
  lang: string,
  data: any,
  label: string,
): Promise<string | null> {
  const body: any = { type, lang, data, title: label };
  if (uid) body.uid = uid;

  // Rate limit: wait between requests
  await delay(2000);

  try {
    const res = await fetch("https://migration.prismic.io/documents", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WRITE_TOKEN}`,
        "x-api-key": WRITE_TOKEN,
        repository: REPO_NAME,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      const result = await res.json();
      console.log(`  ✅ ${label} → ${result.id}`);
      return result.id;
    }

    const err = await res.text();
    if (err.includes("already exists")) {
      console.log(`  ⏭️  ${label} — ya existe, omitiendo`);
      // Try to find existing doc ID
      return null;
    }
    console.error(`  ❌ ${label}: ${res.status} ${err}`);
    return null;
  } catch (e: any) {
    console.error(`  ❌ ${label}: ${e.message}`);
    return null;
  }
}

// ============================================================
// Main
// ============================================================
async function main() {
  console.log("🚀 Iniciando migración de contenido a Prismic...\n");

  // --- English (master locale) ---
  console.log("📝 Inglés (en-us) — master locale:");
  await createDoc("homepage", "homepage", "en-us", buildHomepageData(enMessages), "Homepage EN");
  await createDoc("blog_post", "seguro-patrimonial-salud-internacional", "en-us", buildBlogData(enMessages, 1), "Blog 1 EN");
  await createDoc("blog_post", "planificacion-financiera-retiro-educacion", "en-us", buildBlogData(enMessages, 2), "Blog 2 EN");
  await createDoc("navigation", undefined, "en-us", buildNavigationData(enMessages), "Navigation EN");

  const services = [
    { uid: "seguros-de-vida", ns: "segurosDeVida" },
    { uid: "fondos-de-retiro", ns: "fondosDeRetiro" },
    { uid: "salud-internacional", ns: "saludInternacional" },
    { uid: "servicios-complementarios", ns: "serviciosComplementarios" },
  ];

  for (const sp of services) {
    await createDoc("service_page", sp.uid, "en-us", buildServiceData(enMessages, sp.ns), `Service ${sp.uid} EN`);
  }

  // --- Spanish (alternate locale) ---
  console.log("\n📝 Español (es-ar):");
  await createDoc("homepage", "homepage", "es-ar", buildHomepageData(esMessages), "Homepage ES");
  await createDoc("blog_post", "seguro-patrimonial-salud-internacional", "es-ar", buildBlogData(esMessages, 1), "Blog 1 ES");
  await createDoc("blog_post", "planificacion-financiera-retiro-educacion", "es-ar", buildBlogData(esMessages, 2), "Blog 2 ES");
  await createDoc("navigation", undefined, "es-ar", buildNavigationData(esMessages), "Navigation ES");

  for (const sp of services) {
    await createDoc("service_page", sp.uid, "es-ar", buildServiceData(esMessages, sp.ns), `Service ${sp.uid} ES`);
  }

  console.log("\n🎉 Migración completada. Entrá a https://ifs-broker.prismic.io para revisar y publicar.");
}

main();
