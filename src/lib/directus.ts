import { createDirectus, rest, staticToken, readItems } from "@directus/sdk";

interface SeoOverride {
  key: string;
  title?: string | null;
  meta_description?: string | null;
  og_image?: string | null;
  no_index?: boolean;
  no_follow?: boolean;
}

interface DirectusSchema {
  seo_overrides: SeoOverride[];
}

const directusUrl = import.meta.env.DIRECTUS_URL || "https://cms.digital-souveraen.com";
const directusToken = import.meta.env.DIRECTUS_TOKEN || "";

export const directus = createDirectus<DirectusSchema>(directusUrl)
  .with(staticToken(directusToken))
  .with(rest());

export function getAssetUrl(id: string, width?: number) {
  const params = new URLSearchParams();
  if (width) { params.set("width", String(width)); params.set("format", "webp"); }
  if (directusToken) params.set("access_token", directusToken);
  const qs = params.toString();
  return `${directusUrl}/assets/${id}${qs ? `?${qs}` : ""}`;
}

export async function getSeoOverride(key: string): Promise<SeoOverride | null> {
  try {
    const items = await directus.request(readItems("seo_overrides", {
      filter: { key: { _eq: key } },
      limit: 1,
    }));
    return items[0] ?? null;
  } catch {
    return null;
  }
}
