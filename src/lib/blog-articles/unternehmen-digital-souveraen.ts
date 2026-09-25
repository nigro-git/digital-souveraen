/**
 * Quelle: G:\Meine Ablage\+Digitale-Souveraenität+\Content-Produktion\Blog\Themen\Listicles\listicle-unternehmen-digital-souveraen_v2.md
 * Typ: Listicle (mit Case-Study-Verlinkung) · Cluster: Grundlagen & Risikobewusstsein · Status: lebend (Prüf-Kadenz alle 3 Monate)
 */

const CASE_SCHWARZ = "/blog/schwarz-gruppe-souveraener-arbeitsplatz";
const CASE_SANA = "/blog/sana-kliniken-souveraene-cloud";

export const meta = {
  title: "Welche Unternehmen sind bereits digital souverän?",
  answerFirst:
    "Zehn Organisationen – überwiegend Privatwirtschaft, ergänzt um einen Fall aus dem öffentlichen Sektor –, die konkrete, öffentlich dokumentierte Schritte in Richtung digitaler Souveränität unternommen haben. Sortiert nach Umsetzungsstand, keine Erfolgsrangfolge.",
  tags: { cluster: "Grundlagen & Risikobewusstsein", format: "Listicle" },
};

export const scope = {
  heading: "Was diese Übersicht zeigt – und was nicht",
  absaetze: [
    { label: "Auswahlkriterium:", text: "ausschließlich Fälle mit mindestens einer öffentlich zugänglichen und eindeutig zuordenbaren Primärquelle zur konkreten Maßnahme – nicht zu verwechseln mit journalistischer Unabhängigkeit dieser Quelle (siehe Offenlegungen bei den Einträgen, wo diese Unabhängigkeit im Einzelfall fehlt). Ein ursprünglich recherchierter Fall (DATEV) wurde nach Prüfung entfernt, da keine belastbare Quelle für eine direkte Partnerschaft auffindbar war." },
    { label: "Sortierung:", text: "nach Umsetzungsstand (weit fortgeschritten zuerst), innerhalb gleicher Stufe alphabetisch. Wichtig: Diese Sortierung ist keine Qualitäts- oder Erfolgsrangfolge – sie ordnet ausschließlich nach zeitlichem Fortschritt (vergleichbar mit dem Zeitstrahl-Konzept aus den vertieften Case Studies), nicht nach Bewertung des Ergebnisses." },
    { label: "Beobachtung, kein Bewertungskriterium:", text: "Die meisten Fälle in dieser Liste nutzen STACKIT als Anbieter – das spiegelt die aktuelle Publikations- und Marktrealität im deutschen Souveränitäts-Cloud-Markt wider (STACKIT veröffentlicht aktuell besonders viele dokumentierte Referenzfälle), ist aber keine Bewertung der Anbieterqualität und kein Auswahlkriterium. Wo Aussagen ausschließlich vom Anbieter selbst stammen, ist das konsequent als Offenlegung gekennzeichnet." },
  ],
};

export const nichtZeigt = {
  heading: "Was diese Liste nicht zeigt",
  text:
    "Diese Übersicht ist kein Beleg für langfristigen Erfolg der gezeigten Projekte, keine repräsentative Zufallsstichprobe des Marktes und keine Aussage, dass STACKIT anderen Anbietern überlegen ist – die Konzentration auf STACKIT-Fälle ist eine Beobachtung zum aktuellen Publikationsverhalten, keine vergleichende Bewertung von Anbietern.",
};

export const scan = {
  heading: "Alle zehn Fälle auf einen Blick",
  headers: ["Organisation", "Branche", "Anbieter/Lösung", "Status", "Vertiefung"],
  rows: [
    ["Deutsche Telekom/T-Systems", "Telekommunikation", "Nextcloud auf Open Telekom Cloud", "Abgeschlossen (2021)", "—"],
    ["ABDA", "Verband/Gesundheitswesen", "STACKIT (DatenHub)", "Weit fortgeschritten", "—"],
    ["Land Schleswig-Holstein", "Öffentlicher Sektor", "Linux/LibreOffice/Nextcloud/Open-Xchange", "Weit fortgeschritten", "—"],
    ["Schwarz Gruppe", "Einzelhandel", "STACKIT (Google-Workspace-Basis)", "Weit fortgeschritten", `[Ausführliche Case Study](${CASE_SCHWARZ})`],
    ["EDF", "Energieversorgung", "Mistral AI", "Laufend", "—"],
    ["FC Bayern München", "Sport/Entertainment", "STACKIT + XM Cyber", "Laufend", "—"],
    ["mgm technology partners", "IT-Dienstleistung", "ESACA (mit Fsas Technologies)", "Pilotphase", "—"],
    ["Sana Kliniken", "Gesundheitswesen", "STACKIT (Landingzone)", "Pilotphase", `[Ausführliche Case Study](${CASE_SANA})`],
    ["Bosch Mobility", "Automobilzulieferer", "STACKIT (MoU)", "Geplant", "—"],
    ["KPN", "Telekommunikation", "STACKIT-basierte souveräne Cloud", "Geplant (ab Mitte 2027)", "—"],
  ],
};

export const faelle = {
  heading: "Die zehn Fälle im Detail",
  entries: [
    {
      id: "telekom-t-systems",
      name: "Deutsche Telekom / T-Systems (MagentaCLOUD)",
      meta: ["Telekommunikation", "Abgeschlossen (2021)"],
      text: ["Vollständige Migration des Cloud-Speicherangebots MagentaCLOUD von einer proprietären Drittanbieter-Plattform auf Nextcloud, gehostet in der Open Telekom Cloud. Migration mehrerer Millionen Nutzerkonten seit Ende 2021 im laufenden Betrieb ohne Service-Unterbrechung – der am längsten abgeschlossene Fall in dieser Liste."],
      offenlegung: "Quelle ist ein Migrationsbericht von Nextcloud selbst – als Technologie-Anbieter hat Nextcloud ein kommerzielles Interesse an einer positiven Darstellung dieser Referenz.",
    },
    {
      id: "abda",
      name: "ABDA (Bundesvereinigung Deutscher Apothekerverbände)",
      meta: ["Verband/Gesundheitswesen", "Weit fortgeschritten"],
      text: ["Der „ABDA DatenHub“ aggregiert Verkaufs- und Lagerdaten deutscher Apotheken. Nach einem Anbieterwechsel (zuvor Comline/Davaso/Iqvia) läuft Hosting und Datenverarbeitung seit 2025/2026 exklusiv über STACKIT. ABDA erklärt direkt: Die Daten verlassen die EU zu keinem Zeitpunkt. Status: Laut Abda-Sprecher (März 2026) ist die Programmierung „weitgehend abgeschlossen“, aktuell läuft die Testphase mit einzelnen Apotheken vor dem geplanten Betriebsstart."],
      offenlegung: "Zur Existenz und zum allgemeinen Verlauf des Projekts liegt unabhängige Berichterstattung vor (Fachpublikation Apotheke Adhoc, teils kritisch, u. a. zu Kosten und Datenschutzbedenken). Die konkrete technische Zusicherung „Daten verlassen die EU nie“ stammt jedoch ausschließlich von ABDA/STACKIT selbst – dafür liegt keine unabhängige technische Prüfung vor.",
    },
    {
      id: "land-schleswig-holstein",
      name: "Land Schleswig-Holstein",
      meta: ["Öffentlicher Sektor", "Weit fortgeschritten"],
      text: ["Rund 30.000 IT-Arbeitsplätze der Landesverwaltung wurden auf Linux, LibreOffice, Nextcloud sowie Open-Xchange/Thunderbird umgestellt. Im Oktober 2025 wurde die Migration von über 40.000 Mailboxen abgeschlossen. Das Land beziffert die eingesparten Lizenzkosten auf rund 15 Millionen Euro bei 9 Millionen Euro Transformationskosten für 2026."],
      offenlegung: "Angaben stammen direkt von der Landesregierung Schleswig-Holstein als Träger des Projekts selbst – keine unabhängige Prüfung der genannten Kostenzahlen liegt vor.",
    },
    {
      id: "schwarz-gruppe",
      name: "Schwarz Gruppe",
      meta: ["Einzelhandel", "Weit fortgeschritten"],
      text: ["Migration von Microsoft Office zu einer STACKIT-basierten Workspace-Lösung, ausgelöst durch Preiserhöhungen des bisherigen Anbieters. Über 100.000 von geplant 327.000 Arbeitsplätzen migriert, fast 90 % Lizenzreduktion – bei gleichzeitig dokumentierten Grenzen (Lidl Plus teilweise noch bei Azure/Google Cloud, STACKIT wirtschaftlich noch stark vom eigenen Konzern abhängig – die Schwarz Gruppe ist dabei gleichzeitig Kunde und Miteigentümer von STACKIT, siehe Case Study)."],
      link: { href: CASE_SCHWARZ, label: "Vollständige Case Study: Wie ein souveräner Cloud-Arbeitsplatz für 600.000 Mitarbeitende entsteht" },
    },
    {
      id: "edf",
      name: "EDF (Électricité de France)",
      meta: ["Energieversorgung", "Laufend"],
      text: ["Fünfjahresvertrag mit dem europäischen KI-Entwickler Mistral AI für die KI-gestützte Entwicklung im Nuklearsektor. EDF benennt explizit, dass Trainingsdaten Eigentum von EDF bleiben und auf „trusted infrastructures“ gehostet werden – nicht gleichzusetzen mit einer strikten „No-US-Policy“."],
      offenlegung: "Aussage stammt aus offizieller EDF-Pressemitteilung (Zitat EDF-Chef Bernard Fontana) – keine unabhängige Bestätigung.",
    },
    {
      id: "fc-bayern-muenchen",
      name: "FC Bayern München",
      meta: ["Sport/Entertainment", "Laufend"],
      text: ["Partnerschaft mit STACKIT und der Sicherheitsplattform XM Cyber (seit 2023) zur kontinuierlichen Analyse der digitalen Infrastruktur rund um die Allianz Arena. CIO Michael Fichtner: „Durch den Einsatz von XM Cyber schlafe ich anders.“ Der Verein nutzt daneben weiterhin SAP Cloud ERP für andere Bereiche – kein vollständiger Wechsel der gesamten IT."],
      offenlegung: "Zitat und Einordnung überwiegend aus Anbieter-nahen Quellen (XM Cyber, heise).",
    },
    {
      id: "mgm-technology-partners",
      name: "mgm technology partners",
      meta: ["IT-Dienstleistung", "Pilotphase"],
      text: ["Gemeinsam mit Fsas Technologies (Fujitsu-Tochter, Partnerschaft seit 1994) hat mgm im Mai 2026 „ESACA“ vorgestellt – eine souveräne, On-Premise-KI-Coding-Appliance für Umgebungen, in denen Code und Daten das eigene Rechenzentrum nicht verlassen dürfen (z. B. öffentliche Verwaltung, kritische Infrastruktur). Status: ESACA befindet sich in der Pilotierung, Produktreife für 2026 angekündigt. Eine eigene STACKIT-Hosting-Umstellung von mgm selbst ist in keiner Quelle bestätigt – belegt ist ausschließlich die ESACA/Fsas-Kooperation."],
      offenlegung: "Ausschließlich mgm/Fsas-eigene Pressemitteilungen als Quelle.",
    },
    {
      id: "sana-kliniken",
      name: "Sana Kliniken",
      meta: ["Gesundheitswesen", "Pilotphase"],
      text: ["Rahmenvertrag mit STACKIT (Januar 2026) zum schrittweisen Aufbau einer souveränen Cloud-Umgebung für Patientendaten. Bislang kein quantifiziertes Ergebnis – Projekt befindet sich in der Erprobungsphase, Rollout erst ab 2027. Als einziger Fall dieser Liste konnte keine unabhängige Quelle gefunden werden, die über die Original-Pressemitteilung hinausgeht."],
      link: { href: CASE_SANA, label: "Vollständige Case Study: Der schrittweise Aufbau einer souveränen Cloud im Gesundheitswesen" },
    },
    {
      id: "bosch-mobility",
      name: "Bosch Mobility",
      meta: ["Automobilzulieferer", "Geplant"],
      text: ["Memorandum of Understanding mit Schwarz Digits zur Erweiterung des bestehenden Cloud-Portfolios um STACKIT. Wichtig: eine Portfolio-Erweiterung, keine vollständige Abkehr von den bestehenden US-Cloud-Anbietern."],
      offenlegung: "Ausschließlich STACKIT-eigene Quellen (stackit.com/de/news).",
    },
    {
      id: "kpn",
      name: "KPN",
      meta: ["Telekommunikation", "Geplant (ab Mitte 2027)"],
      text: ["Ankündigung (Mai 2026) einer gemeinsamen souveränen Cloud mit Schwarz Digits für den niederländischen Markt, betrieben in KPN-eigenen Rechenzentren in den Niederlanden mit STACKIT-Infrastruktur – ein Beispiel für die grenzüberschreitende Nutzung des Modells. Status: Die Lösung soll erst ab Mitte 2027 verfügbar sein; bis dahin verbleiben die Daten in STACKIT-eigenen Rechenzentren in Deutschland."],
    },
  ],
};

export const auswahl = {
  heading: "Welcher Fall passt zu Ihrer Situation?",
  headers: ["Ihre Situation", "Relevante Fälle", "Warum"],
  rows: [
    ["Große Belegschaft, Microsoft-Preisdruck als Auslöser", "Schwarz Gruppe", "Einziger Fall mit explizit benanntem Preis-Auslöser und dieser Größenordnung"],
    ["Öffentlicher Sektor, Massenmigration", "Land Schleswig-Holstein", "Einziger Fall mit vollständig quantifiziertem Kosten-Nutzen-Vergleich"],
    ["Bereits abgeschlossene Migration mit mehrjährigem Betrieb", "Deutsche Telekom/T-Systems", "Einziger Fall mit mehreren Jahren Betrieb seit Abschluss der Migration"],
    ["Hochregulierte Branche (Gesundheitswesen)", "Sana Kliniken, ABDA", "Zeigen zwei unterschiedliche Reifegrade in derselben Branche"],
    ["KI-spezifische Souveränität", "EDF, mgm", "Fokus auf KI-Trainingsdaten bzw. KI-Coding statt allgemeiner Cloud-Infrastruktur"],
    ["Vorsichtiger erster Schritt vor Komplett-Umstieg", "Bosch Mobility", "Zeigt Portfolio-Erweiterung statt Komplett-Wechsel als gangbaren Zwischenschritt"],
    ["Sie interessiert primär STACKIT als Anbieter, nicht die Bandbreite an Ansätzen", "Schwarz Gruppe, FC Bayern, mgm, KPN, ABDA, Bosch, Sana", "7 von 10 Fällen sind STACKIT-basiert (siehe Beobachtung oben) – für einen Blick auf andere Ansätze: Schleswig-Holstein (Open-Source-Stack), Telekom (Nextcloud/eigene Cloud), EDF (Mistral AI)"],
  ],
};

/** Kurznamen aus der Auswahlhilfe → Anker der Einträge. */
export const anchorMap: Record<string, string> = {
  "Schwarz Gruppe": "schwarz-gruppe",
  "Land Schleswig-Holstein": "land-schleswig-holstein",
  "Deutsche Telekom/T-Systems": "telekom-t-systems",
  "FC Bayern München": "fc-bayern-muenchen",
  "FC Bayern": "fc-bayern-muenchen",
  KPN: "kpn",
  ABDA: "abda",
  "Bosch Mobility": "bosch-mobility",
  Bosch: "bosch-mobility",
  EDF: "edf",
  mgm: "mgm-technology-partners",
  "mgm technology partners": "mgm-technology-partners",
  "Sana Kliniken": "sana-kliniken",
  Sana: "sana-kliniken",
};

export const cta = {
  title: "Welcher Ansatz passt zu Ihrem Unternehmen?",
  subtitle: "Wir ordnen mit Ihnen ein, welche dieser Wege für Ihre Ausgangslage tragen.",
  ctaLabel: "Gespräch anfragen",
  eyebrow: "Einordnung für Ihr Unternehmen",
};

export const related = {
  links: [{ label: "Alle Leistungen im Überblick", href: "/leistungen" }],
  upHref: "/blog",
  upLabel: "Alle Beiträge im Überblick",
};
