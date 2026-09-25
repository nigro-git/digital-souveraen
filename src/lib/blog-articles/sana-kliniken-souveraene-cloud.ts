/**
 * Quelle: G:\Meine Ablage\+Digitale-Souveraenität+\Content-Produktion\Blog\Themen\casestudy\casestudy-sana-kliniken-final.md
 * Typ: Case Study (Sekundärfallstudie) · Cluster: Tools & Alternativen · Status: lebend · Stand: September 2026
 * Redaktionell vorgesehen: Aktualisierung nach der Erprobungsphase 2026 bzw. dem Rollout-Start 2027.
 */

export const meta = {
  title: "Sana Kliniken: Der schrittweise Aufbau einer souveränen Cloud im Gesundheitswesen",
  answerFirst:
    "Die Sana Kliniken AG hat im Januar 2026 einen Rahmenvertrag mit STACKIT geschlossen, um schrittweise eine eigenständige, hochsichere Cloud-Umgebung für besonders schützenswerte Patientendaten aufzubauen.",
  einschraenkung:
    "Zu diesem Fall liegt aktuell kein belastbares, quantifiziertes Ergebnis vor – das Projekt befindet sich noch in der Erprobungsphase (2026), der konzernweite Rollout ist erst ab 2027 vorgesehen. Zusätzlich konnte keine einzige unabhängige journalistische Quelle gefunden werden – alle verfügbaren Berichte gehen auf dieselbe Pressemitteilung zurück.",
  tags: { cluster: "Tools & Alternativen", format: "Case Study" },
};

export const status = {
  stages: ["Gerade gestartet", "Pilotphase", "Weit fortgeschritten", "Abgeschlossen"],
  active: 1,
  caseName: "Sana Kliniken",
};

export const ausgangslage = {
  heading: "Ausgangslage",
  text:
    "Sana Kliniken (privater Klinikbetreiber) unterliegt bei der Verarbeitung von Patientendaten den strengsten Datenschutzanforderungen. Laut eigener Darstellung reagiert das Unternehmen auf „veränderte politische, wirtschaftliche und regulatorische Rahmenbedingungen sowie auf den wachsenden Anspruch an digitale Souveränität im europäischen Gesundheitswesen“ und will die „zunehmende Abhängigkeit von einzelnen Herstellern und internationalen Hyperscalern“ reduzieren.",
  hinweis: "Diese Einordnung stammt ausschließlich aus der Pressemitteilung von Sana/STACKIT selbst – keine unabhängige Bestätigung liegt vor.",
};

export const entscheidung = {
  heading: "Entscheidung",
  text:
    "Sana entschied sich für einen Rahmenvertrag mit STACKIT zum „schrittweisen Aufbau einer autarken, hochsicheren Cloud-Umgebung“ – bewusst gestaffelt statt als Komplett-Umstellung. Es handelt sich um den Aufbau einer eigenen „Landingzone“ in der STACKIT-Cloud als Zielarchitektur für den späteren, breiteren Cloud-Betrieb.",
  einordnungLabel: "Einordnung:",
  einordnung:
    "Anders als bei anderen Fällen ist hier kein konkreter Auslöser (z. B. eine Preiserhöhung) benannt – die Entscheidung wird durchgehend mit allgemeinen regulatorischen und strategischen Erwägungen begründet.",
};

export const umsetzung = {
  heading: "Umsetzung",
  absaetze: [
    "Zum Start werden zwei zentrale Bausteine migriert: Avelios Medical (modulare Klinikplattform, soll langfristig mehrere Krankenhausinformationssysteme im Konzern ersetzen) und OmniConnect (Schnittstellensoftware für sichere Kommunikation zwischen Krankenhausinformationssystemen und der Telematikinfrastruktur) – zunächst nur für ausgewählte Einrichtungen.",
    "Zeitachse: Rahmenvertrag Januar 2026 → Erprobungsphase 2026 → konzernweiter Rollout ab 2027. Ein mehrjähriger, gestaffelter Prozess, der sich (Stand September 2026) noch mitten in der Pilotphase befindet.",
  ],
  hinweis: "Sämtliche Angaben in diesem Abschnitt stammen aus einer einzigen, mehrfach syndizierten Pressemitteilung – keine der geprüften Quellen liefert unabhängig recherchierte Zusatzinformationen.",
};

export const ergebnis = {
  heading: "Ergebnis",
  text:
    "Zum jetzigen Zeitpunkt liegt kein quantifiziertes Ergebnis vor. Die einzige zitierfähige Aussage ist eine Absichtserklärung, kein Ergebnis: Stefanie Kemp (Vorstandsmitglied und Chief Transformation Officer Sana Kliniken AG): „Mit STACKIT gehen wir einen weiteren wichtigen Schritt hin zu mehr digitaler Souveränität im Gesundheitswesen.“",
};

export const grenzen = {
  heading: "Grenzen und Learnings",
  items: [
    { lead: "Status-bedingte Grenze:", text: "Das Projekt ist noch nicht weit genug fortgeschritten, um ein Ergebnis zu bewerten – das ist keine Schwäche des Projekts, sondern ein Zeitpunkt-Problem dieser Fallstudie." },
    { lead: "Quellen-bedingte Grenze:", text: "Anders als bei anderen Fällen konnte hier keine unabhängige Quelle gefunden werden, die die Angaben von Sana/STACKIT bestätigt, ergänzt oder infrage stellt." },
  ],
};

export const transfer = {
  heading: "Übertragbarkeit",
  uebertragbarLabel: "Übertragbar",
  nichtLabel: "Noch nicht bewertbar",
  uebertragbar: [
    "Der gestaffelte, pilotbasierte Ansatz (zunächst zwei begrenzte Systeme, dann Erprobungsphase, erst danach konzernweiter Rollout) ist ein methodisch nachvollziehbares Vorgehen für Organisationen mit hohem Compliance-Druck.",
  ],
  nicht: [
    "Ob der Ansatz tatsächlich funktioniert, ob die Zeitplanung eingehalten wird und ob sich vergleichbare Ergebnisse wie bei anderen Fällen einstellen – dazu lässt sich aus der aktuellen Quellenlage noch keine verlässliche Aussage treffen.",
  ],
};

export const cta = {
  title: "Welche Lehren gelten für Ihre Situation?",
  subtitle: "Wir ordnen mit Ihnen ein, welche Ansätze aus solchen Fällen für Ihr Unternehmen tragen.",
  ctaLabel: "Gespräch anfragen",
  eyebrow: "Einordnung für Ihr Unternehmen",
};

export const related = {
  links: [{ label: "Alle Leistungen im Überblick", href: "/leistungen" }],
  upHref: "/blog",
  upLabel: "Alle Beiträge im Überblick",
};
