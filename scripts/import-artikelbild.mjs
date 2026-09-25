// Übernimmt das Bilderpaket des Artikelbild-Generators in das Projekt.
// Usage: node scripts/import-artikelbild.mjs <paket.zip> | --slug <slug>  [--dest <public/bilder>]
// Paketinhalt: {slug}/hero|teaser|social|rubrik.webp, og.png, logo-N.png, freigabe.json (+ Frontmatter und LIESMICH, die ignoriert werden).
// Ergebnis: public/bilder/{slug}/… – alte Dateien mit anderer Endung (z.B. hero.png) werden entfernt, damit die neue Datei gilt.
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readdirSync, rmSync, cpSync, mkdirSync, statSync } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { join, resolve } from "node:path";

// Suchorte: normaler Download-Ordner (dort landet die ZIP des Generators) und der Drive-Ordner.
const SEARCH_DIRS = [
  join(process.env.USERPROFILE ?? homedir(), "Downloads"),
  "G:/Meine Ablage/+Digitale-Souveraenität+/Content-Produktion/Blog/Assets",
];
const args = process.argv.slice(2);
// Entweder ein ZIP-Pfad oder --slug <slug>: nimmt die NEUESTE Datei artikelbild_<slug>*.zip aus Downloads oder Drive
// (auch "(1)"-Kopien oder _v2, die der Browser bei erneutem Download anlegt).
const slugIdx = args.indexOf("--slug");
let zip = args.find((a) => a.endsWith(".zip"));
if (slugIdx > -1) {
  const slug = args[slugIdx + 1];
  const hits = SEARCH_DIRS.filter((d) => existsSync(d)).flatMap((d) =>
    readdirSync(d)
      .filter((f) => f.startsWith(`artikelbild_${slug}`) && f.endsWith(".zip"))
      .map((f) => ({ f, path: join(d, f), t: statSync(join(d, f)).mtimeMs })),
  ).sort((a, b) => b.t - a.t);
  if (hits.length === 0) {
    console.error(`Kein Paket artikelbild_${slug}*.zip gefunden in: ${SEARCH_DIRS.join(" | ")}`);
    process.exit(1);
  }
  zip = hits[0].path;
  console.log(`Nehme ${hits[0].path} (${new Date(hits[0].t).toLocaleString("de-DE")})`);
}
const destIdx = args.indexOf("--dest");
const dest = resolve(destIdx > -1 ? args[destIdx + 1] : "public/bilder");
if (!zip || !existsSync(zip)) {
  console.error("Bitte ein Bilderpaket (.zip) angeben.");
  process.exit(1);
}

const tmp = mkdtempSync(join(tmpdir(), "artikelbild-"));
try {
  execFileSync("unzip", ["-oq", resolve(zip), "-d", tmp]);
  const slugs = readdirSync(tmp, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
  if (slugs.length === 0) throw new Error("Kein Artikelordner im Paket gefunden.");
  for (const slug of slugs) {
    const target = join(dest, slug);
    mkdirSync(target, { recursive: true });
    // Gleichnamige Formate mit anderer Endung ersetzen (hero.png vs. hero.webp)
    for (const f of readdirSync(join(tmp, slug))) {
      const base = f.replace(/\.[^.]+$/, "");
      for (const old of existsSync(target) ? readdirSync(target) : []) {
        if (old !== f && old.replace(/\.[^.]+$/, "") === base) rmSync(join(target, old));
      }
    }
    cpSync(join(tmp, slug), target, { recursive: true });
    console.log(`${slug}: ${readdirSync(target).join(", ")}`);
  }
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
