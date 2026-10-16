/**
 * Wandelt [Text](url) und `Code` in Redaktionstexten um. Der Rest wird HTML-escaped.
 * Nur für eigene, redaktionell gepflegte Texte gedacht (set:html).
 */
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const withCode = (s: string) =>
  esc(s).replace(/`([^`]+)`/g, '<code class="rounded bg-muted px-1 py-0.5 font-mono text-[0.9em]">$1</code>');

export function inline(text: string): string {
  const out: string[] = [];
  const rx = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = rx.exec(text))) {
    out.push(withCode(text.slice(last, m.index)));
    const href = m[2];
    const external = /^https?:\/\//.test(href);
    out.push(
      `<a href="${esc(href)}" class="font-semibold text-primary underline-offset-4 hover:underline"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${esc(m[1])}</a>`,
    );
    last = m.index + m[0].length;
  }
  out.push(withCode(text.slice(last)));
  return out.join("");
}

/** Entfernt Markdown-Links und Code-Zeichen, behält den Text (für Schema.org und Meta-Beschreibungen). */
export function plain(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)\s]+\)/g, "$1").replace(/`([^`]+)`/g, "$1");
}
