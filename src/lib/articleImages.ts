import fs from "node:fs";
import path from "node:path";

/**
 * Artikelbilder folgen der Konvention des Artikelbild-Generators:
 *   public/bilder/{slug}/{hero|teaser|social|rubrik}.webp  und  og.png
 * Format-Maße: hero 1920x1080 · teaser 1200x900 · social 1080x1080 · rubrik 2100x900 · og 1200x630
 * Gibt die öffentliche URL zurück, wenn die Datei zum Build-Zeitpunkt existiert, sonst undefined
 * (Seiten und Karten zeigen dann kein Bild bzw. den Platzhalter).
 */
export type ImageFormat = "hero" | "teaser" | "social" | "rubrik" | "og";

const EXTENSIONS = ["webp", "png"];

export function articleImage(slug: string, format: ImageFormat): string | undefined {
  for (const ext of EXTENSIONS) {
    const file = path.join(process.cwd(), "public", "bilder", slug, `${format}.${ext}`);
    if (fs.existsSync(file)) return `/bilder/${slug}/${format}.${ext}`;
  }
  return undefined;
}
