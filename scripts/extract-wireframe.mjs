// Usage: node scripts/extract-wireframe.mjs <wireframe.html>
// Gibt pro Block (.brow) aus: Wireframe-Text (ohne CSS/Markup) + Anmerkungsspalte. Rohes HTML bleibt draussen.
import { readFileSync } from "node:fs";
const html = readFileSync(process.argv[2], "utf8");
const body = html.slice(html.indexOf("<body"));
const clean = (s) => s
  .replace(/<\/(li|tr|p|div|h\d)>/g, "\n").replace(/<\/t[dh]>/g, " | ").replace(/<br\s*\/?>/g, "\n")
  .replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/&[a-z]+;/g, (m) => ({ "&bdquo;": "„", "&ldquo;": "“", "&rdquo;": "”", "&rarr;": "→" }[m] ?? m))
  .split("\n").map((l) => l.trim()).filter(Boolean).join("\n  ");
const rows = body.split(/<div class="brow">/).slice(1);
for (const r of rows) {
  const i = r.indexOf('<div class="bann">');
  const wf = clean(i > -1 ? r.slice(0, i) : r);
  const ann = i > -1 ? clean(r.slice(i).replace(/<div class="ann-(props|from|name|num)"/g, "\n<div")) : "";
  console.log("── " + ann.split("\n").join(" ¦ ") + "\n  " + wf + "\n");
}
const tail = clean(body.slice(body.lastIndexOf('class="brow"')).split('<div class="bann">').pop() ?? "");
