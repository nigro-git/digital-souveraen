/** Lesezeit aus Wortzahl aller Strings eines Artikelmoduls (200 Wörter/Min.), ohne CTA und Related. */
function count(v: unknown): number {
  if (typeof v === "string") return v.trim().split(/\s+/).filter(Boolean).length;
  if (Array.isArray(v)) return v.reduce((n: number, x) => n + count(x), 0);
  if (v && typeof v === "object") return Object.values(v).reduce((n: number, x) => n + count(x), 0);
  return 0;
}

export function readTime(article: object): string {
  const a = article as { cta?: unknown; related?: unknown };
  const words = count(article) - count(a.cta) - count(a.related);
  return `${Math.max(1, Math.round(words / 200))} Min. Lesezeit`;
}
