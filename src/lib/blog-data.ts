export const BLOG_CLUSTERS = [
  "Grundlagen & Risikobewusstsein",
  "Recht & Pflichten",
  "Kosten & Wirtschaftlichkeit",
  "Tools & Alternativen",
  "Umsetzung & Migration",
  "Sicherheit & KI-Risiko",
] as const;

export type BlogCluster = (typeof BLOG_CLUSTERS)[number];

import { articleImage } from "./articleImages";

export interface BlogPost {
  slug: string;
  title: string;
  kicker: string;
  /** Ein Artikel kann mehreren Clustern zugeordnet sein. */
  clusters: BlogCluster[];
  /** Artikeltyp, z.B. "Vergleich", "Information", "Anleitung", "Analyse", "Listicle", "Case Study". */
  format: string;
  /** Kartenbild (Format teaser, sonst hero) – wird automatisch aus public/bilder/{slug}/ ermittelt. */
  image?: string;
  /** Großes Bild für den hervorgehobenen Beitrag (Format hero). */
  heroImage?: string;
  /** Anzeige-Label im DOM, z.B. "September 2026". */
  dateLabel: string;
  /** ISO-Datum (YYYY-MM-DD), bestimmt die Sortierung. */
  publishDate: string;
  /** "lebend" = wird regelmäßig aktualisiert/geprüft, "statisch" = einmalig verfasst. */
  lifecycle: "lebend" | "statisch";
  /** Zusatzhinweis bei lifecycle "lebend", z.B. "Prüfung alle 3 Monate". */
  reviewNote?: string;
  /** true = Muster/Platzhalter (wie bei den Case Studies), noch kein echter, fertig recherchierter Artikeltext. */
  placeholder?: boolean;
}

/**
 * Artikelinhalte liegen in src/lib/blog-articles/<slug>.ts. `placeholder: true` markiert Muster ohne echten Text (aktuell keine).
 */
const rawPosts: BlogPost[] = [
  {
    slug: "opendesk-vs-microsoft-365",
    title: "openDesk vs. Microsoft 365: Was der Umstieg für den Mittelstand wirklich bedeutet",
    kicker: "Für Unternehmen mit Souveränitätspriorität die bessere Wahl – aber nicht ohne Voraussetzungen. Ein Vergleich entlang des gesamten Nutzungszeitraums.",
    clusters: ["Kosten & Wirtschaftlichkeit", "Tools & Alternativen"],
    format: "Vergleich",
    dateLabel: "September 2026",
    publishDate: "2026-09-21",
    lifecycle: "lebend",
    reviewNote: "Prüfung alle 3 Monate",
  },
  {
    slug: "was-ist-digitale-souveraenitaet-fuer-unternehmen",
    title: "Was ist digitale Souveränität für Unternehmen?",
    kicker: "Digitale Souveränität bezeichnet die Fähigkeit, über IT-Systeme selbstbestimmt zu verfügen.",
    clusters: ["Grundlagen & Risikobewusstsein"],
    format: "Information",
    dateLabel: "September 2026",
    publishDate: "2026-09-23",
    lifecycle: "lebend",
  },
  {
    slug: "was-passiert-wenn-unternehmen-nichts-tun",
    title: "Was passiert, wenn Unternehmen nichts tun?",
    kicker: "Ein wachsendes, aber ungleich verteiltes Risiko – und eine ernstzunehmende Gegenposition zum vorschnellen Wechsel.",
    clusters: ["Grundlagen & Risikobewusstsein"],
    format: "Analyse",
    dateLabel: "September 2026",
    publishDate: "2026-09-24",
    lifecycle: "lebend",
    reviewNote: "Prüfung alle 6 Monate",
  },
  {
    slug: "co-existenz-statt-big-bang",
    title: "Co-Existenz statt Big-Bang: Phasenweise Migration von Microsoft 365",
    kicker: "Acht Schritte von der Identitäts-Grundlage bis zur Abschaltung des Alt-Systems – jeweils mit prüfbarem Zwischenresultat.",
    clusters: ["Umsetzung & Migration"],
    format: "How-To",
    dateLabel: "September 2026",
    publishDate: "2026-09-24",
    lifecycle: "lebend",
    reviewNote: "Prüfung alle 6 Monate",
  },
  {
    slug: "europaeische-cloud-anbieter",
    title: "Europäische Cloud-Anbieter im Überblick: IONOS, STACKIT & Co.",
    kicker: "Sechs europäische Cloud-Infrastruktur-Anbieter ohne US-Mutterkonzern im Vergleich – mit Auswahlhilfe.",
    clusters: ["Tools & Alternativen"],
    format: "Listicle",
    dateLabel: "September 2026",
    publishDate: "2026-09-24",
    lifecycle: "lebend",
    reviewNote: "Prüfung alle 6 Monate",
  },
  {
    slug: "was-kostet-digitale-souveraenitaet",
    title: "Was kostet digitale Souveränität?",
    kicker: "Es gibt keinen pauschalen Preis – ein Fünf-Ebenen-Modell zeigt, welche Kosten wirklich zählen.",
    clusters: ["Kosten & Wirtschaftlichkeit"],
    format: "Information",
    dateLabel: "September 2026",
    publishDate: "2026-09-24",
    lifecycle: "lebend",
    reviewNote: "Prüfung alle 6 Monate",
  },
  {
    slug: "schwarz-gruppe-souveraener-arbeitsplatz",
    title: "Schwarz Gruppe: Wie ein souveräner Cloud-Arbeitsplatz für 600.000 Mitarbeitende entsteht",
    kicker: "Über 100.000 Nutzer migriert, Lizenzen um fast 90 % reduziert – und was der Fall nicht beweist.",
    clusters: ["Tools & Alternativen"],
    format: "Case Study",
    dateLabel: "September 2026",
    publishDate: "2026-09-24",
    lifecycle: "lebend",
    reviewNote: "Wird laufend aktualisiert",
  },
  {
    slug: "sana-kliniken-souveraene-cloud",
    title: "Sana Kliniken: Der schrittweise Aufbau einer souveränen Cloud im Gesundheitswesen",
    kicker: "Ein Fall in der Erprobungsphase: Was bekannt ist und was noch nicht bewertet werden kann.",
    clusters: ["Tools & Alternativen"],
    format: "Case Study",
    dateLabel: "September 2026",
    publishDate: "2026-09-24",
    lifecycle: "lebend",
    reviewNote: "Wird laufend aktualisiert",
  },
  {
    slug: "welche-unternehmen-sind-bereits-digital-souveraen",
    title: "Welche Unternehmen sind bereits digital souverän?",
    kicker: "Zehn Organisationen mit öffentlich dokumentierten Schritten – sortiert nach Umsetzungsstand, mit Offenlegung der Quellenlage.",
    clusters: ["Grundlagen & Risikobewusstsein"],
    format: "Listicle",
    dateLabel: "September 2026",
    publishDate: "2026-09-25",
    lifecycle: "lebend",
    reviewNote: "Prüfung alle 3 Monate",
  },
];

export const blogPosts: BlogPost[] = rawPosts.map((p) => ({
  ...p,
  heroImage: articleImage(p.slug, "hero"),
  image: articleImage(p.slug, "teaser") ?? articleImage(p.slug, "hero"),
}));
