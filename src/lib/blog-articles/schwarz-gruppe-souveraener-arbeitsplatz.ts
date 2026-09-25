/**
 * Quelle: G:\Meine Ablage\+Digitale-Souveraenität+\Content-Produktion\Blog\Themen\casestudy\casestudy-schwarz-gruppe-final.md
 * Typ: Case Study (Sekundärfallstudie) · Cluster: Tools & Alternativen · Status: lebend · Stand: September 2026
 */

export const meta = {
  title: "Schwarz Gruppe: Wie ein souveräner Cloud-Arbeitsplatz für 600.000 Mitarbeitende entsteht",
  answerFirst:
    "Die Schwarz Gruppe (Lidl, Kaufland, Schwarz Digits, 604.000 Mitarbeitende) migriert seit August 2025 von Microsoft Office zu einer STACKIT-basierten Workspace-Lösung. Geplant ist ein Rollout auf 327.000 Arbeitsplätze; über 100.000 Nutzer sind bereits migriert, die Zahl der alten Microsoft-Lizenzen wurde um fast 90 % reduziert.",
  einschraenkung:
    "Die Migration ist nicht bei jeder Konzern-Anwendung vollständig abgeschlossen – bei der Kundenbindungs-App Lidl Plus (über 100 Millionen Nutzer) liegen laut einer unabhängigen Recherche des Manager Magazins Teile weiterhin bei Azure oder Google Cloud, trotz gegenteiliger Konzernaussagen.",
  tags: { cluster: "Tools & Alternativen", format: "Case Study" },
};

export const status = {
  stages: ["Gerade gestartet", "Pilotphase", "Weit fortgeschritten", "Abgeschlossen"],
  active: 2,
  caseName: "Schwarz Gruppe",
};

export const ausgangslage = {
  heading: "Ausgangslage",
  text:
    "Auslöser war laut STACKIT-Geschäftsführer Michael Brenzel eine „mehr oder weniger diskussionslose Preiserhöhung ohne Mehrwert“ durch Microsoft. Die Schwarz Gruppe stand vor der für viele große Unternehmen typischen Abwägung: moderne, global erprobte Kollaborations-Tools werden gebraucht, bringen aber starke Abhängigkeit von außereuropäischen Cloud-Anbietern mit sich.",
  hinweis: "Diese Einordnung stammt aus einem STACKIT-eigenen Interview (c't) – keine unabhängige Bestätigung der internen Entscheidungsfindung liegt vor.",
};

export const entscheidung = {
  heading: "Entscheidung",
  text:
    "Die Schwarz Gruppe entschied sich für ein hybrides Modell: „Workspace by STACKIT“ nutzt die europäische Infrastruktur von Google Workspace als technische Basis, kombiniert diese mit einer eigens entwickelten, clientseitigen Verschlüsselung direkt im Browser. Die kryptografische Schlüsselverwaltung läuft ausschließlich in deutschen STACKIT-Rechenzentren. Laut Brenzel war das Ziel explizit, „dass uns niemand abschalten kann“ und dass Google „keinerlei Inhalte einsehen kann“ – die gewohnte Nutzeroberfläche bleibt erhalten, während die Kontrolle über Verschlüsselung und Zugriff bei einem europäischen Anbieter liegt.",
  einordnungLabel: "Einordnung:",
  einordnung:
    "Ein bewusster Kompromiss zwischen vollständiger technischer Souveränität (eigener Stack) und pragmatischer Umsetzbarkeit – kein Modell „möglichst viel Open Source“, sondern „möglichst viel Kontrolle bei vertretbarem Umstellungsaufwand“.",
};

export const umsetzung = {
  heading: "Umsetzung",
  absaetze: [
    "Die Migration läuft seit August 2025, mit einem geplanten Gesamtumfang von 327.000 Arbeitsplätzen bei insgesamt 604.000 Mitarbeitenden im Konzern. Zum aktuellen Stand sind über 100.000 Nutzer migriert. Die größte operative Herausforderung war laut STACKIT die Konvertierung von rund 1,5 Millionen historisch gewachsenen Makro-Dateien.",
  ],
  hinweis: "Details zur Umsetzung stammen überwiegend aus STACKIT-eigenen Veröffentlichungen. Eine unabhängige technische Prüfung der beschriebenen Architektur liegt uns nicht vor.",
};

export const ergebnis = {
  heading: "Ergebnis",
  text:
    "Laut Michael Brenzel: „Wir haben die Zahl der Microsoft-Lizenzen schon um fast 90 Prozent reduziert.“ Diese Aussage stammt vom Anbieter selbst, operiert aber mit einer konkreten, prüfbaren Zahl und fiel in einem redaktionell unabhängigen Interviewformat (c't), nicht in reinem Marketingmaterial.",
  einordnungLabel: "Wichtig für die Einordnung:",
  einordnung:
    "90 % Lizenzreduktion und „über 100.000 von 327.000 geplanten Nutzern migriert“ beschreiben zwei unterschiedliche Fortschrittsmaße – Lizenzreduktion kann schneller vorangehen als der vollständige Nutzer-Rollout, wenn alte Lizenzen bereits gekündigt werden, bevor alle Nutzer final umgestellt sind.",
};

export const grenzen = {
  heading: "Grenzen und Learnings",
  items: [
    { lead: "Auch intern nicht vollständig:", text: "Die Schwarz Gruppe kommuniziert, dass Lidl Plus (über 100 Millionen Nutzer) „europaweit den STACKIT-Tech-Stack“ nutze. Die Manager-Magazin-Recherche fand jedoch, dass Teile der Anwendung weiterhin bei Azure oder Google Cloud laufen – ebenso beim internen Warenwirtschaftssystem Wawi Nexus." },
    { lead: "Zwischen Ankündigung und Produktionsreife liegen Jahre:", text: "„RISE with SAP on STACKIT“ wurde im Oktober 2024 angekündigt, kommerziell verfügbar wurde es am 8. September 2026 – die tatsächliche technische Bereitstellung für Kunden beginnt erst im November 2026, fast zwei Jahre nach der ursprünglichen Ankündigung." },
    { lead: "Die externe Geschäftsrealität von STACKIT ist deutlich fragiler als die interne Erfolgsgeschichte:", text: "Über 90 % des Umsatzes von Schwarz Digits (2,2 Mrd. €, +15,8 % gegenüber Vorjahr) stammen aus dem eigenen Konzern. STACKIT Cloud als externes Kernprodukt trug im letzten Geschäftsjahr nur 46,5 Millionen Euro bei (geplant für das laufende Jahr: 177,3 Mio. €). Case-Grenze: Die Schwarz Gruppe ist gleichzeitig Kunde und Eigentümer von STACKIT – eine Konstellation, die sich für externe Kunden nicht 1:1 wiederholt." },
  ],
};

export const transfer = {
  heading: "Übertragbarkeit",
  uebertragbarLabel: "Übertragbar",
  nichtLabel: "Nicht übertragbar",
  uebertragbar: [
    "Das hybride Verschlüsselungsmodell (bekannte Nutzeroberfläche + europäisch kontrollierte Verschlüsselung) für Unternehmen mit ähnlicher Ausgangslage – Preisdruck beim bisherigen Anbieter, Bedarf an vertrauter UX bei gleichzeitigem Souveränitätsanspruch.",
  ],
  nicht: [
    "Die besondere Kunde-Miteigentümer-Konstellation Schwarz Gruppe/STACKIT. Für externe Unternehmen ist relevant, dass STACKIT als eigenständiges Geschäft laut unabhängiger Recherche noch stark vom eigenen Konzern abhängt – die interne Erfolgsgeschichte beweist technische Machbarkeit, nicht automatisch dieselbe Zuverlässigkeit für einen unabhängigen externen Kunden.",
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
