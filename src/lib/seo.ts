const MAX = 158;

/**
 * Kürzt eine Meta-Description auf Snippet-Länge, ohne mitten im Wort oder Satz abzubrechen:
 * bevorzugt am letzten Satzende, sonst am letzten Wort mit Auslassungspunkten.
 */
export function fitDescription(text: string): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= MAX) return clean;
  const head = clean.slice(0, MAX);
  const sentenceEnd = Math.max(head.lastIndexOf(". "), head.lastIndexOf("! "), head.lastIndexOf("? "));
  if (sentenceEnd >= 90) return head.slice(0, sentenceEnd + 1);
  const cut = clean.slice(0, MAX - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return cut.slice(0, lastSpace > 0 ? lastSpace : cut.length).replace(/[\s,;:–—(-]+$/, "") + "…";
}
