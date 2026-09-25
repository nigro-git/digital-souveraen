/**
 * Quelle: G:\Meine Ablage\+Digitale-Souveraenität+\Content-Produktion\Blog\Themen\Informativ\artikel-was-ist-digitale-souveraenitaet-pillar.md
 * Typ: Informativ/Erklärung (Pillar) · V3 · Cluster: Grundlagen & Risikobewusstsein · Status: lebend · Stand: September 2026
 *
 * V3-Update: fast alle vorher fehlenden Blöcke haben jetzt echten Text. Weiterhin bewusst weggelassen,
 * da ohne Textgrundlage bzw. explizite Redaktions-Entscheidung: "Grundprozess" nicht als Steps-Komponente
 * (Quelle ist ein einzelner Pfeil-Satz ohne Erklärtext je Schritt, siehe `prozess` unten als Fließtext),
 * Nicht/Sondern-Gegenüberstellung (Sondern-Seite fehlt weiterhin, siehe Nutzerentscheidung).
 */

export const meta = {
  title: "Was ist digitale Souveränität für Unternehmen?",
  answerFirst:
    "Digitale Souveränität bezeichnet die Fähigkeit eines Unternehmens, über seine IT-Systeme, Daten und technischen Entscheidungen selbstbestimmt zu verfügen – also Anbieter wechseln, Daten mitnehmen und eigene Anwendungen weiterentwickeln zu können, ohne dabei von der Zustimmung eines einzelnen Herstellers abhängig zu sein. Es geht nicht um Autarkie oder den vollständigen Verzicht auf fremde Technologie, sondern um Wahlfreiheit und Ausstiegsfähigkeit.",
  tags: {
    cluster: "Grundlagen & Risikobewusstsein",
    format: "Information",
  },
};

export const warumRelevant = {
  heading: "Warum digitale Souveränität für Unternehmen zunehmend wichtiger wird",
  treiber: [
    { label: "Wirtschaftlich", text: "Vendor Lock-in, einseitige Preiserhöhungen, Produktabkündigungen ohne Mitspracherecht." },
    { label: "Rechtlich", text: "Extraterritoriale Gesetzgebung (z. B. US CLOUD Act), wachsende Regulierung (NIS2, künftig ggf. CADA)." },
    { label: "Geopolitisch", text: "Abhängigkeit von ausländischen Anbietern, Risiko einseitiger Dienstabschaltung.", highlight: true },
    { label: "Technologisch", text: "Proprietäre Formate und Schnittstellen erschweren einen späteren Anbieterwechsel." },
    { label: "Neu durch KI", text: "Was geschieht mit Unternehmensdaten, die in ein KI-System eingegeben werden?" },
  ],
};

export const abgrenzung = {
  heading: "Abgrenzung zu ähnlichen Begriffen",
  items: [
    { label: "Datensouveränität", text: "ist ein Teilbereich der digitalen Souveränität, kein Synonym – sie fokussiert ausschließlich auf Datenmanagement und Datenflüsse." },
    { label: "Technologische Souveränität", text: "wird häufig gleichbedeutend verwendet, beschreibt aber genau genommen nur den technischen Anspruch." },
    { label: "Datenschutz/DSGVO-Konformität", text: "ist etwas anderes: Datenschutz schützt personenbezogene Daten vor unrechtmäßiger Verarbeitung. Digitale Souveränität fragt danach, wer über Betrieb und Verbleib der Daten entscheidet – eine hochgesicherte, DSGVO-konforme Cloud-Umgebung bei einem einzigen außereuropäischen Anbieter kann rechtlich einwandfrei und trotzdem nicht souverän sein." },
    { label: "Vendor Lock-in", text: "ist die konkrete wirtschaftliche Konsequenz fehlender Souveränität – die Brücke zwischen abstraktem Konzept und spürbarem Unternehmensrisiko." },
  ],
};

export const dimensionen = {
  heading: "Vier Dimensionen zur Bewertung digitaler Souveränität",
  intro: "Für die praktische Bewertung von Unternehmens-IT nutzen wir folgendes Modell mit vier Dimensionen:",
  treiber: [
    { label: "Juristische Souveränität", text: "Besteht Immunität gegenüber extraterritorialer Gesetzgebung, oder kann ein ausländischer Staat über einen Anbieter Zugriff auf Unternehmensdaten erhalten?", highlight: true },
    { label: "Technische Autonomie", text: "Ist die eingesetzte Software offen und unabhängig betreibbar (Quellcode-Verfügbarkeit, Self-Hosting-Option, offene Standards)?" },
    { label: "Geopolitische Resilienz", text: "Bleibt der Betrieb auch bei internationalen Konflikten oder politischen Entscheidungen einzelner Staaten sicher (Kill-Switch-Risiko)?" },
    { label: "Datennutzung/KI-Training-Ausschluss", text: "Ist ausgeschlossen, dass Unternehmensdaten unbemerkt zum Training herstellereigener KI-Modelle verwendet werden? Bei Open-Source-Software besteht dafür keine Grundlage; Microsoft schließt das für Enterprise-/Business-Tarife von Copilot vertraglich aus (Data Processing Addendum) – Ausnahmen bestehen bei kostenlosen Tool-Versionen sowie bei einer Lücke der EU Data Boundary, wenn Copilot-Anfragen über Anthropic-Modelle statt über OpenAI/Microsoft-eigene Modelle verarbeitet werden." },
  ],
  hinweis: "Andere Frameworks verwenden teilweise andere Systematiken: Die EU-Kommission hat mit ihrem „Cloud Sovereignty Framework\" (Version 1.2, Oktober 2025) ein eigenes, achtteiliges Bewertungsmodell vorgelegt – acht „Sovereignty Objectives\" (u. a. rechtlich/jurisdiktionell, technologisch, Lieferkette, Daten & KI), bewertet über fünf Reifegrad-Stufen (SEAL-0 bis SEAL-4). Unser Modell ist eine eigene, auf die praktische Unternehmensbewertung zugeschnittene Vereinfachung, keine offizielle Norm.",
};

export const woEntsteht = {
  heading: "Wo im Unternehmen digitale Souveränität konkret entsteht",
  rows: [
    { bereich: "Cloud/Hosting", frage: "Kann ich Anbieter und Datenstandort frei wählen?", href: "/leistungen/cloud-systeme", label: "Cloud-Systeme einrichten" },
    { bereich: "E-Mail", frage: "Kann ich den Mailserver-Anbieter wechseln?", href: "/leistungen/e-mail-server", label: "E-Mail-Server-Einrichtung" },
    { bereich: "Dokumente & Zusammenarbeit", frage: "Kann ich Dokumente und Workflows vollständig exportieren?", href: "/leistungen/dokumentenmanagement", label: "Dokumentenmanagement einrichten" },
    { bereich: "Videokonferenzen", frage: "Liegen Meeting-Daten bei einem einzelnen externen Anbieter?", href: "/leistungen/videokonferenzen", label: "Videokonferenzen einrichten" },
    { bereich: "Identitäten/Login", frage: "Bin ich von einem zentralen Identity Provider abhängig?", href: null, label: null },
    { bereich: "KI-Nutzung", frage: "Was geschieht mit Daten, die in KI-Tools eingegeben werden?", href: null, label: null },
    { bereich: "CRM/ERP", frage: "Gehören mir Datenmodell und Daten vollständig?", href: null, label: null },
  ],
};

export const diagnose = {
  heading: "Woran erkennen Unternehmen, ob sie digital souverän sind?",
  intro: "Sechs Diagnosefragen geben eine erste Einschätzung:",
  fragen: [
    "Können wir unsere Daten vollständig exportieren?",
    "Können wir den Anbieter wechseln, ohne zentrale Geschäftsprozesse neu aufzubauen?",
    "Können wir bestimmen, wo unsere Daten verarbeitet werden?",
    "Gibt es offene Schnittstellen und Standards?",
    "Können wir den Betrieb notfalls durch einen anderen Anbieter fortsetzen?",
    "Wissen wir, welchen Rechtsordnungen Anbieter und Daten unterliegen?",
  ],
  toolTeaser: "Wie souverän ist Ihre IT? Selbsteinschätzung starten (interaktives Tool in Vorbereitung)",
};

export const beispiele = {
  heading: "Drei Beispiele: souverän, scheinbar souverän, nicht souverän",
  cards: [
    { tag: "Cloud", quote: "Ein Unternehmen kann seine Daten exportieren, aber die Geschäftslogik nicht zu einem anderen Anbieter übertragen → teilweise souverän." },
    { tag: "Open Source", quote: "Der Quellcode ist offen, aber nur ein einzelner Dienstleister besitzt das interne Know-how für den Betrieb → technische Offenheit, aber operative Abhängigkeit." },
    { tag: "EU-Cloud", quote: "Daten liegen in Deutschland, der Anbieter gehört jedoch einem US-Konzern → Datenstandort und juristische Souveränität sind nicht dasselbe." },
  ],
  realBeispielHeading: "Ein reales Beispiel dazu",
  realBeispielText: "Als die Schweizerische Bundeskanzlei im September 2026 grünes Licht für ein Programm zur Umstellung von 3.000 Behörden-Arbeitsplätzen auf openDesk gab, zeigte eine begleitende Studie ein differenziertes Bild – openDesk kann Microsoft 365 aktuell noch nicht in allen Bereichen vollständig ersetzen, wurde aber als ernstzunehmende Alternative für einen Großteil der Arbeitsplätze eingestuft. Digitale Souveränität ist selten eine Alles-oder-Nichts-Entscheidung, sondern eine schrittweise, faktenbasierte Abwägung.",
};

export const negativabgrenzung = {
  heading: "Was digitale Souveränität NICHT bedeutet",
  items: [
    "Vollständiger Verzicht auf jede nicht-europäische Software – das würde die Zusammenarbeit mit Kunden und Partnern erheblich einschränken.",
    "Automatisch gegeben, nur weil Open-Source-Software eingesetzt wird.",
    "Identisch mit IT-Sicherheit. Eine technisch hochsichere Umgebung bei einem einzigen Anbieter kann sicher und gleichzeitig nicht souverän sein.",
    "Ein rein politisches oder staatliches Thema – der Maßstab gilt genauso für Unternehmen.",
  ],
};

export const nutzenGrenzen = {
  heading: "Nutzen und Grenzen: kein Alles-oder-Nichts",
  nutzen: [
    "Reduzierte Abhängigkeit von einzelnen Anbietern",
    "Planbarere Kosten",
    "Bessere Vorbereitung auf regulatorische Anforderungen",
    "Handlungsfähigkeit auch bei geopolitischen Verwerfungen",
  ],
  grenzen: [
    "Vollständige Souveränität in allen vier Dimensionen gleichzeitig zu erreichen, ist für die meisten Unternehmen weder realistisch noch wirtschaftlich sinnvoll.",
    "Nicht jedes System braucht maximale Souveränität – in der Praxis geht es um bewusste Priorisierung.",
  ],
};

export const prozess = {
  heading: "Wie Unternehmen digitale Souveränität schrittweise erhöhen",
  intro: "Digitale Souveränität ist kein Produkt, das man kauft, sondern ein fortlaufender Prozess:",
  schritte: [
    "Abhängigkeiten erfassen",
    "Kritikalität bewerten",
    "Lock-ins identifizieren",
    "Zielniveau bestimmen",
    "Alternativen prüfen",
    "Exit-Fähigkeit herstellen",
    "Regelmäßig neu bewerten",
  ],
  schrittHinweis: "Kritikalität bewerten heißt konkret: Was passiert bei Preiserhöhung, Ausfall oder Kündigung?",
};

export const naechsteFragen = {
  heading: "Welche Fragen Sie als Nächstes klären sollten",
  cards: [
    { tag: "Kosten", title: "Was kostet mehr digitale Souveränität?", quote: "Die Kostenrechnung ist komplexer als ein reiner Lizenzpreis-Vergleich – niedrigere direkte Lizenzkosten stehen oft höherem Administrations- und Integrationsaufwand gegenüber.", href: "/blog/was-kostet-digitale-souveraenitaet", cta: "Erklärung" },
    { tag: "Risiko", title: "Was passiert, wenn Unternehmen nichts verändern?", quote: "Ein wachsendes, aber ungleich verteiltes Risiko – regulatorisch, wirtschaftlich, operationell und wettbewerblich. Es gibt aber auch eine ernstzunehmende Gegenposition: Vorschnelles Handeln kann ebenso riskant sein wie Nichtstun.", href: "/blog/was-passiert-wenn-unternehmen-nichts-tun", cta: "Analyse" },
    { tag: "Alternativen", title: "Welche Alternativen gibt es konkret?", quote: "Für E-Mail, Cloud-Speicher, Dokumentenmanagement und Videokonferenzen existieren inzwischen ausgereifte europäische und quelloffene Alternativen.", href: "#" },
    { tag: "Regulierung", title: "Welche regulatorischen Anforderungen gelten?", quote: "Mit NIS2 (in Kraft seit Dezember 2025) besteht erstmals eine persönliche Organhaftung bei unzureichendem Risikomanagement. Der vorgeschlagene Cloud and AI Development Act (CADA) befindet sich noch im Gesetzgebungsverfahren.", href: "#" },
  ],
};

export const updates = {
  heading: "Was sich seit der letzten Aktualisierung substanziell verändert hat",
  items: [
    { date: "September 2026", title: "Deutschland offiziell im europäischen Digital-Commons-Konsortium – mit ZenDiS-Beteiligung", kicker: "Deutschland ist Teil des „Digital Commons EDIC\"-Konsortiums, das offene, interoperable digitale Infrastruktur europaweit bündeln soll.", href: "/news#deutschland-digital-commons-edic-zendis" },
  ],
};

export const faq = [
  { frage: "Ist digitale Souveränität nur für große Unternehmen relevant?", antwort: "Nein – die Abhängigkeitsrisiken betreffen Unternehmen jeder Größe, auch wenn die Priorisierung je nach Ressourcen unterschiedlich ausfällt." },
  { frage: "Wie lange dauert der Aufbau digitaler Souveränität?", antwort: "Es gibt keine pauschale Dauer – das hängt stark von Anzahl und Kritikalität der betroffenen Systeme ab. Ein einzelner, wenig vernetzter Bereich lässt sich grundsätzlich schneller umstellen als die gesamte IT-Landschaft auf einmal; eine unternehmensweite Neuausrichtung ist dagegen ein mehrmonatiger bis mehrjähriger, fortlaufender Prozess." },
  { frage: "Geht es bei digitaler Souveränität auch um Hardware, nicht nur Software?", antwort: "Hardware-/Halbleiter-Abhängigkeiten sind Teil des breiteren Souveränitäts-Diskurses, aber nicht Fokus dieses Artikels – hier geht es um Software, Cloud-Dienste und Daten im Unternehmenskontext." },
];

export const related = {
  links: [{ label: "Alle Leistungen im Überblick", href: "/leistungen" }],
  upHref: "/blog",
  upLabel: "Alle Beiträge im Überblick",
};

export const cta = {
  title: "Wie souverän ist Ihre IT wirklich?",
  ctaLabel: "Gespräch anfragen",
  eyebrow: "Standortbestimmung gemeinsam",
};
