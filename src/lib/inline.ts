/**
 * Wandelt [Text](url) in Redaktionstexten in Links um. Der Rest wird HTML-escaped.
 * Nur für eigene, redaktionell gepflegte Texte gedacht (set:html).
 */
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function inline(text: string): string {
  const out: string[] = [];
  const rx = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = rx.exec(text))) {
    out.push(esc(text.slice(last, m.index)));
    const href = m[2];
    const external = /^https?:\/\//.test(href);
    out.push(
      `<a href="${esc(href)}" class="font-semibold text-primary underline-offset-4 hover:underline"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${esc(m[1])}</a>`,
    );
    last = m.index + m[0].length;
  }
  out.push(esc(text.slice(last)));
  return out.join("");
}
