import * as prismic from "@prismicio/client";

/**
 * Converts a Prismic homepage document's slices into the same shape
 * as the messages JSON, so components keep using useTranslations()
 * without any changes.
 *
 * Returns a partial messages object that gets deep-merged with the
 * static JSON translations — Prismic content wins where present.
 */
export function homepageToMessages(doc: prismic.PrismicDocument | null): Record<string, unknown> {
  if (!doc) return {};

  const messages: Record<string, unknown> = {};
  const slices = (doc.data?.slices as prismic.SharedSlice[]) ?? [];

  for (const slice of slices) {
    const p = slice.primary as Record<string, unknown>;

    switch (slice.slice_type) {
      case "hero": {
        messages.heroSection = {
          title: asText(p.title) || undefined,
        };
        if (p.cta_text) {
          messages.heroPlanificacion = {
            ...(messages.heroPlanificacion as Record<string, unknown> ?? {}),
            quoteLifeInsurance: p.cta_text,
          };
        }
        break;
      }

      case "feature_cards": {
        const items = (slice.items ?? []) as Record<string, unknown>[];
        messages.whatWeDo = {
          label: p.label || undefined,
          title: asText(p.title) || undefined,
          labelHighlight: p.title_highlight || undefined,
          description: p.description || undefined,
          ...(items[0]?.card_text ? { card1: items[0].card_text } : {}),
          ...(items[1]?.card_text ? { card2: items[1].card_text } : {}),
        };
        break;
      }

      case "stepper": {
        const items = (slice.items ?? []) as Record<string, unknown>[];
        const stepperMessages: Record<string, unknown> = {
          title: p.title || undefined,
          heading: asText(p.heading) || undefined,
          headingHighlight: p.heading_highlight || undefined,
        };
        items.forEach((item, i) => {
          if (item.step_title) stepperMessages[`step${i + 1}Title`] = item.step_title;
          if (item.step_description) stepperMessages[`step${i + 1}Description`] = item.step_description;
        });
        messages.howWeWork = stepperMessages;
        break;
      }

      case "planning_section": {
        messages.heroPlanificacion = {
          ...(messages.heroPlanificacion as Record<string, unknown> ?? {}),
          label: p.label || undefined,
          title: asText(p.title) || undefined,
          description1: asText(p.description1) || undefined,
          description2: p.description2 || undefined,
          quoteLifeInsurance: p.cta_text || undefined,
          speakWithAdvisor: p.secondary_cta_text || undefined,
        };
        break;
      }

      case "globe_section": {
        messages.experienceGlobe = {
          title1: p.title1 || undefined,
          title2: p.title2 || undefined,
          description1: p.description1 || undefined,
          description1highlight: p.description1_highlight || undefined,
          description2: p.description2 || undefined,
        };
        break;
      }

      case "logo_cloud": {
        messages.logoCloud = {
          title: p.title || undefined,
          titleHighlight: p.title_highlight || undefined,
          subtitle: p.subtitle || undefined,
        };
        break;
      }

      case "blog_section": {
        if (p.title || p.description) {
          messages.blog = {
            ...(messages.blog as Record<string, unknown> ?? {}),
            ...(asText(p.title) ? {
              title1: asText(p.title),
              title2: "",
              title3: "",
              title4: "",
            } : {}),
            description: p.description || undefined,
          };
        }
        break;
      }

      case "timeline": {
        const items = (slice.items ?? []) as Record<string, unknown>[];
        const timelineMessages: Record<string, unknown> = {
          button: p.cta_text || undefined,
        };
        items.forEach((item, i) => {
          const n = i + 1;
          if (item.tab_title) timelineMessages[`tab${n}Title`] = item.tab_title;
          if (item.tab_highlight) timelineMessages[`tab${n}Highlight`] = item.tab_highlight;
          if (item.tab_description1) timelineMessages[`tab${n}Desc1`] = item.tab_description1;
          if (item.tab_description2) timelineMessages[`tab${n}Desc2`] = item.tab_description2;
        });
        // This could be timelineDemo, retirementTimeline, or saludTimeline
        // depending on the page — the page component decides which namespace
        messages._timelineData = timelineMessages;
        break;
      }

      case "banner_section": {
        messages.heroBanner = {
          title: p.title || undefined,
          paragraph1: p.subtitle || undefined,
          speakAdvisor: p.cta_text || undefined,
          scheduleMeeting: p.secondary_cta_text || undefined,
        };
        break;
      }
    }
  }

  // Remove undefined values recursively
  return cleanUndefined(messages);
}

/**
 * Converts a Prismic service page document to messages format.
 */
export function servicePageToMessages(
  doc: prismic.PrismicDocument | null,
  namespace: string,
): Record<string, unknown> {
  if (!doc) return {};

  const messages: Record<string, unknown> = {};

  // Map top-level fields to heroSubsection namespace
  if (doc.data?.title || doc.data?.description) {
    messages.heroSubsection = {
      ...(asText(doc.data?.title) ? { titleHighlight: asText(doc.data.title) } : {}),
      ...(asText(doc.data?.description) ? { description: asText(doc.data.description) } : {}),
    };
  }

  // SEO
  if (doc.data?.seo_title || doc.data?.seo_description) {
    messages.seo = {
      [namespace]: {
        title: doc.data.seo_title || undefined,
        description: doc.data.seo_description || undefined,
        keywords: doc.data.seo_keywords || undefined,
      },
    };
  }

  // Process slices same as homepage
  const sliceMessages = homepageToMessages(doc);
  return cleanUndefined(deepMerge(messages, sliceMessages));
}

/**
 * Converts a Prismic blog post document to messages format.
 */
export function blogPostToMessages(doc: prismic.PrismicDocument | null): Record<string, unknown> {
  if (!doc) return {};

  return cleanUndefined({
    _blogPost: {
      title: doc.data?.title || undefined,
      subtitle: doc.data?.subtitle || undefined,
      category: doc.data?.category || undefined,
      date: doc.data?.date || undefined,
      readTime: doc.data?.read_time || undefined,
      body: doc.data?.body || undefined, // Rich text field
      ctaText: doc.data?.cta_text || undefined,
      featuredImage: doc.data?.featured_image || undefined,
      seoTitle: doc.data?.seo_title || undefined,
      seoDescription: doc.data?.seo_description || undefined,
      seoKeywords: doc.data?.seo_keywords || undefined,
    },
  });
}

// --- Helpers ---

function asText(field: unknown): string | undefined {
  if (!field) return undefined;
  if (typeof field === "string") return field;
  // Prismic RichText field
  if (Array.isArray(field)) {
    return prismic.asText(field as prismic.RichTextField) || undefined;
  }
  return undefined;
}

function cleanUndefined(obj: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined) continue;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      const cleaned = cleanUndefined(value as Record<string, unknown>);
      if (Object.keys(cleaned).length > 0) {
        result[key] = cleaned;
      }
    } else {
      result[key] = value;
    }
  }
  return result;
}

/** Deep merge b into a (b wins on conflicts) */
export function deepMerge(
  a: Record<string, unknown>,
  b: Record<string, unknown>,
): Record<string, unknown> {
  const result = { ...a };
  for (const [key, value] of Object.entries(b)) {
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      result[key] &&
      typeof result[key] === "object" &&
      !Array.isArray(result[key])
    ) {
      result[key] = deepMerge(
        result[key] as Record<string, unknown>,
        value as Record<string, unknown>,
      );
    } else {
      result[key] = value;
    }
  }
  return result;
}
