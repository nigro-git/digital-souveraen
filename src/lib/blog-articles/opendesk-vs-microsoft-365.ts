/**
 * Quelle: G:\Meine Ablage\+Digitale-Souveraenität+\Content-Produktion\Blog\Themen\Vergleiche\artikel-opendesk-vs-m365-v5.md
 * Typ: Vergleichsartikel · V5 · Cluster: Kosten & Wirtschaftlichkeit · Status: lebend (Prüf-Kadenz alle 3 Monate) · Stand: September 2026
 */

export const meta = {
  title: "openDesk vs. Microsoft 365: Was der Umstieg für den Mittelstand wirklich bedeutet",
  answerFirst:
    "Für Unternehmen, deren Priorität Datenkontrolle, Exit-Fähigkeit und Unabhängigkeit von US-Preispolitik ist, ist openDesk die strategisch bessere Wahl – bei geringeren direkten Lizenzkosten, aber höherem Eigenaufwand für Betrieb und Integration. Für Unternehmen mit tief in Microsoft eingebetteten Workflows (VBA-Makros, Power-Automate-Ketten) oder ohne eigene IT-Kapazität für Selbstbetrieb bleibt Microsoft 365 kurzfristig der reibungsärmere Weg.",
  tags: {
    cluster: "Kosten & Wirtschaftlichkeit",
    format: "Vergleich",
    entities: ["Microsoft", "openDesk"],
  },
};

export const produktkontext = [
  { label: "openDesk", text: "ist eine vom Zentrum für Digitale Souveränität (ZenDiS) koordinierte, quelloffene Suite aus mehreren eigenständigen Komponenten (Nextcloud, Collabora Online, Open-Xchange, Element, OpenProject u. a.) – self-hosted, über einen Partner oder als SaaS betrieben." },
  { label: "Microsoft 365", text: "ist eine geschlossene, ausschließlich als SaaS verfügbare Suite aus einer Hand, betrieben in Microsoft-Rechenzentren." },
];

export const kurzVergleich = {
  heading: "Kurz-Vergleichstabelle",
  rows: [
    { kriterium: "Daten-/Betriebskontrolle", ohne: "Hoch, frei wählbar", mit: "Bei Microsoft" },
    { kriterium: "Self-Hosting möglich", ohne: "Ja", mit: "Nein" },
    { kriterium: "Integrations-/Betriebsaufwand", ohne: "Höher", mit: "Geringer" },
    { kriterium: "Microsoft-Spezialworkflows (VBA, Power Automate)", ohne: "Eingeschränkt", mit: "Nativ" },
    { kriterium: "Anbieterabhängigkeit", ohne: "Geringer", mit: "Höher" },
  ],
  caption: "Quellen: openDesk-Blog (Release Notes 1.18), everbright-it.de, opentechhub.io",
};

export const voraussetzungen = {
  heading: "Welche Voraussetzungen und Ausgangsbedingungen Sie vor einem Wechsel prüfen sollten",
  rows: [
    { kriterium: "Keine eigene Kubernetes-/DevOps-Erfahrung", ohne: "Partnerbetrieb oder SaaS-Variante statt Self-Hosting wählen", mit: "" },
    { kriterium: "Tief in Microsoft-Workflows eingebettet (VBA, Power Automate)", ohne: "Vorab prüfen, welche Workflows sich nicht 1:1 übertragen lassen (siehe Feature-Gaps unten)", mit: "" },
    { kriterium: "Bereits Identity-Management-Erfahrung (Keycloak, LDAP)", ohne: "Erleichtert die Identitäts-Migration erheblich", mit: "" },
  ],
};

export const journeyHeading = "openDesk vs. Microsoft 365 im Vergleich: Einführung, Migration, Funktionen und Betrieb";

export const journeyPhases = [
  {
    heading: "openDesk lässt sich modular starten, Microsoft 365 ist sofort komplett",
    takeaway: "Kompromiss: mehr Freiheit gegen mehr Einrichtungsaufwand",
    columns: [
      { label: "openDesk", text: "Modularer Einstieg möglich – Anwendungen lassen sich schrittweise ausrollen statt als Gesamtpaket. Setup erfordert Kubernetes-Kenntnisse (bei Self-Hosting) oder die Wahl eines Partnerbetreibers/SaaS-Angebots." },
      { label: "Microsoft 365", text: "Sofort einsatzbereit, keine Infrastrukturentscheidung nötig, etablierter Onboarding-Prozess." },
    ],
  },
  {
    heading: "Der Umstieg muss kein Big-Bang sein – Koexistenz ist der Regelfall",
    takeaway: "Kein Big-Bang nötig: Koexistenz ist der Standardweg",
    columns: [
      { label: "Koexistenz-Szenario", text: "openDesk lässt sich modular einführen – z. B. zunächst Nextcloud für Dateiablage parallel zu bestehendem M365-Mail, mit späterer schrittweiser Erweiterung. Element unterstützt zudem Föderation, was eine Übergangsphase mit gemischten Kommunikationswegen erleichtert." },
      { label: "Migration nach Objekten", text: "Siehe Tabelle unten – 9 Objekte einzeln eingestuft, von gut migrierbar bis kritisch." },
    ],
  },
  {
    heading: "Funktional gleichwertig in den Grundfunktionen, mit konkreten Ausnahmen",
    takeaway: "Kernfunktionen gleichwertig, aber Automatisierungs-Lücken bei M365-Spezialworkflows",
    intro: "Beide Suiten decken Kern-Kollaboration ab. Unabhängige Tests attestieren openDesk funktionale Vollständigkeit, aber spürbare UI-Brüche zwischen den Komponenten.",
    columns: [
      {
        label: "Was Microsoft 365 kann, was openDesk nicht oder nur eingeschränkt kann",
        items: [
          "VBA-Makros: Collabora Online deckt „einen großen Teil der allgemein gebräuchlichen Muster\" ab, aber keine vollständige VBA-Kompatibilität",
          "Power Automate: keine direkte Entsprechung in openDesk",
          "Copilot/KI-Integration: in M365 nativ verfügbar, in openDesk nicht Bestandteil der Kernsuite",
          "Breites Drittanbieter-Ökosystem über Microsoft Graph API",
        ],
      },
      {
        label: "Was openDesk kann, was Microsoft 365 nicht kann",
        items: [
          "Self-Hosting und freie Betreiberwahl",
          "Vollständige Quelloffenheit",
          "Offene Standards statt proprietärer Formatbindung",
          "Kein struktureller US-CLOUD-Act-Bezug",
        ],
      },
    ],
    note: "Externe Kollaboration: openDesk ermöglicht sichere Gastzugriffe; die Chat-Föderation (Matrix) erlaubt Kommunikation mit Externen, sofern diese ebenfalls Matrix nutzen – bei rein Microsoft-basierten Partnern kein direkter Ersatz für Teams-Gastzugänge.",
  },
  {
    heading: "openDesk läuft auf offenen Standards, Microsoft 365 bleibt proprietär gebunden",
    takeaway: "Offene Standards vs. proprietäre Bindung – der Kernunterschied in der Architektur",
    columns: [
      { label: "openDesk", text: "Vollständig quelloffen, basiert auf offenen Standards (WebDAV, CalDAV/CardDAV, ODF). Datenstandort frei wählbar." },
      { label: "Microsoft 365", text: "Proprietäre Formate, Datenverarbeitung primär in Microsoft-Rechenzentren; die EU Data Boundary schränkt Datentransfers ein, hebt sie aber nicht vollständig auf." },
    ],
  },
  {
    heading: "Bei openDesk ist der Ausstieg strukturell leichter als bei Microsoft 365",
    takeaway: "Exit ohne Formatwechsel: struktureller Vorteil für openDesk",
    columns: [
      { label: "openDesk", text: "Als vollständig quelloffenes System ohne proprietäre Formatbindung hat openDesk hier einen strukturellen Vorteil." },
      { label: "Microsoft 365", text: "Ein Exit ist technisch möglich, bedeutet aber in der Praxis meist einen vollständigen Formatwechsel." },
    ],
  },
  {
    heading: "Wer openDesk selbst betreibt, übernimmt auch das Patch-Management – und trägt mehr Risikoeigentümerschaft",
    takeaway: "Mehr Kontrolle bedeutet auch: mehr Betriebsverantwortung bei openDesk",
    columns: [
      { label: "Microsoft 365", text: "Microsoft übernimmt Patching, Updates und Infrastrukturbetrieb vollständig." },
      { label: "openDesk", text: "Egal ob self-hosted oder über einen Partner betrieben – der aus mehreren Komponenten zusammengesetzte Stack bedeutet einen eigenständigen Wartungsaufwand: Sicherheitspatches erscheinen unabhängig vom monatlichen Feature-Rhythmus, teils mehrfach im Monat, besonders häufig für OpenProject. Für die IT-Administration heißt das konkret: kein Microsoft-Graph-API-Äquivalent 1:1 vorhanden, Backup-Strategien müssen für mehrere verteilte Komponenten statt eines einzelnen Systems konzipiert werden." },
    ],
    note: "Die IT-Leitung übernimmt dabei strukturell mehr Verantwortung, die vorher beim externen Anbieter lag – mehr Kontrolle, aber auch mehr Risikoeigentümerschaft.",
  },
];

export const migrationTable = {
  heading: "Migration nach Objekten – was sich wie leicht übertragen lässt",
  rows: [
    { objekt: "E-Mail", einstufung: "Mit Aufwand", anmerkung: "Open-Xchange bietet OXtender für Outlook, aber kein 1:1-Automatismus für alle Postfach-Regeln" },
    { objekt: "Dateien", einstufung: "Gut migrierbar", anmerkung: "Etablierte Nextcloud-Migrationswerkzeuge vorhanden" },
    { objekt: "Kalender & Kontakte", einstufung: "Gut migrierbar", anmerkung: "Offene Standards (CalDAV/CardDAV) auf beiden Seiten" },
    { objekt: "Identitäten", einstufung: "Kritisch", anmerkung: "Kein nativer Konnektor Keycloak↔Entra ID – SCIM/Custom-Sync nötig" },
    { objekt: "Berechtigungen", einstufung: "Mit Aufwand", anmerkung: "Rechtestrukturen müssen meist manuell nachgebildet werden" },
    { objekt: "Chats/Teams-Verläufe", einstufung: "Kritisch", anmerkung: "Kein direkter Import von Teams-Chatverläufen nach Element/Matrix" },
    { objekt: "Office-Dokumente", einstufung: "Gut migrierbar", anmerkung: "Offene Formate (ODF), Collabora liest auch OOXML" },
    { objekt: "Makros (VBA)", einstufung: "Vorher prüfen", anmerkung: "Siehe Feature-Gaps oben" },
    { objekt: "Workflows (Power Automate)", einstufung: "Kritisch", anmerkung: "Keine direkte Entsprechung in openDesk" },
  ],
};

export const kosten = {
  heading: "Kosten verschieben sich, statt einfach nur zu sinken",
  stepsTitle: "Vier strukturelle Kostendynamiken",
  steps: [
    { titel: "Preismacht-Risiko der Hyperscaler", text: "Microsoft hat seine Business-Preise zum 1. Juli 2026 erneut angehoben: Business Standard stieg im Jahresabo um 1,40 € pro Nutzer/Monat auf 12,13 € (Erhöhungen je nach Tarif zwischen 12 % und 25 %). Für ein Unternehmen mit 50 Mitarbeitenden auf Business Standard bedeutet das rund 840 € Mehrkosten pro Jahr." },
    { titel: "Kostenverschiebung", text: "Community Edition kostenlos, dafür Verschiebung zu Administration/Infrastruktur/Enterprise-Support." },
    { titel: "Bündelungseffekt", text: "Ein öffentlich diskutiertes Beispiel: Für eine Studierendenlizenz einer Open-Source-Suite wurden 45 € pro Jahr und Arbeitsplatz angesetzt, während der etablierte Anbieter kostenlose Bildungslizenzen anbietet – ein offener Brief kritisierte dies, Kommentatoren hielten den Vergleich methodisch für unfair." },
    { titel: "Einmalige Übergangskosten", text: "Parallelbetrieb, Beratung, Schulung, temporärer Produktivitätsverlust." },
  ],
  tcoTitle: "TCO-Checkliste",
  tcoRows: [
    { kriterium: "Lizenz", ohne: "Niedrig (Community) bis mittel (Enterprise)", mit: "Mittel, steigend" },
    { kriterium: "Hosting", ohne: "Variabel (Self-Hosting/Partner/SaaS)", mit: "Inklusive" },
    { kriterium: "Betrieb", ohne: "Hoch bei Self-Hosting, niedrig bei SaaS/Partner", mit: "Niedrig (durch Microsoft)" },
    { kriterium: "Support", ohne: "Optional, kostenpflichtig bei Enterprise Edition", mit: "Inklusive (Standard-Support)" },
    { kriterium: "Integration", ohne: "Höher (mehrere Komponenten zusammenführen)", mit: "Niedriger (aus einer Hand)" },
    { kriterium: "Schulung", ohne: "Höher (andere Bedienlogik)", mit: "Niedriger (oft bereits bekannt)" },
    { kriterium: "Exit-Kosten", ohne: "Niedrig (offene Standards)", mit: "Höher (Formatwechsel nötig)" },
  ],
};

export const souveraenitaet = {
  heading: "Wo sich openDesk und Microsoft 365 bei digitaler Souveränität unterscheiden",
  treiber: [
    { label: "Juristische Souveränität", text: "openDesk unterliegt nicht dem US CLOUD Act in der Weise, wie es bei einem US-Mutterkonzern der Fall wäre.", highlight: true },
    { label: "Technische Autonomie", text: "openDesk ist vollständig quelloffen und self-hostbar." },
    { label: "Geopolitische Resilienz", text: "Kein Kill-Switch-Risiko durch einen einzelnen ausländischen Anbieter." },
    { label: "Datennutzung/KI-Training-Ausschluss", text: "Bei Open-Source-Software keine Grundlage für KI-Trainingsnutzung; bei Microsoft-Produkten vertraglich zu prüfen (insbesondere Copilot)." },
  ],
};

export const decisionFit = {
  heading: "Welches System passt zu welchem Unternehmensprofil?",
  rows: [
    { kriterium: "Eigene IT-Kapazität vorhanden, hoher Compliance-/Souveränitätsdruck", ohne: "openDesk, idealerweise mit Partnerbetrieb", mit: "Souveränitätskriterien überwiegen, Betriebsaufwand ist tragbar" },
    { kriterium: "Keine eigene IT-Kapazität, tief in Microsoft-Ökosystem integriert", ohne: "Microsoft 365 bleibt kurzfristig reibungsärmer", mit: "Feature-Gaps wiegen schwerer als Souveränitätsvorteil" },
    { kriterium: "Interesse an Souveränität, aber Sorge vor Big-Bang-Risiko", ohne: "Koexistenz-Modell, schrittweiser Einstieg", mit: "Reduziert Umstellungsrisiko, behält Optionalität" },
    { kriterium: "Hoher Microsoft-Lock-in, aber strategisches Souveränitätsziel", ohne: "Koexistenz mit klarem Enddatum, beginnend bei unkritischen Komponenten", mit: "Realistischer Weg trotz Ausgangslage" },
    { kriterium: "Keine eigene IT, aber hohe regulatorische Anforderungen", ohne: "openDesk über Partnerbetrieb (nicht Self-Hosting)", mit: "Kombiniert Compliance-Vorteil mit externem Betrieb" },
    { kriterium: "Wenige Spezialworkflows, überwiegend Standard-Office-Nutzung", ohne: "openDesk realistisch ohne große Reibung", mit: "Feature-Gaps betreffen nur Randbereiche" },
  ],
};

export const evidenz = {
  heading: "Evidenz: unabhängige Tests, reale Implementierungen, dokumentierte Erfahrungen",
  dataGapNote: "openDesk ist auf klassischen B2B-Bewertungsportalen wie G2 oder Capterra kaum vertreten. Marktanteilsdaten für den privatwirtschaftlichen Einsatz sind aktuell nicht belastbar verfügbar (Datenlücke, keine Zahl erfunden).",
  groups: [
    { label: "Reale Implementierungen", items: ["Internationaler Strafgerichtshof (Den Haag)", "Bundeswehr/BWI (Siebenjahresvertrag, April 2025)", "Schleswig-Holstein", "Dänemark"] },
    { label: "Unabhängige Tests", items: ["GNU/Linux.ch", "everbright-it.de"] },
    { label: "Dokumentierte Probleme", items: ["UI-Brüche zwischen Komponenten", "VBA-Einschränkungen – bewusst nicht verschwiegen"] },
  ],
};

export const faq = [
  { frage: "Kann openDesk Microsoft 365 vollständig ersetzen?", antwort: "Aktuell nicht vollständig – vor allem bei komplexen VBA-Makros und Power-Automate-Workflows bestehen Lücken." },
  { frage: "Kann ich openDesk und Microsoft 365 parallel nutzen?", antwort: "Ja, Koexistenz ist der Regelfall, nicht die Ausnahme." },
  { frage: "Funktionieren Excel-Makros in openDesk?", antwort: "Teilweise – einfache bis mittlere VBA-Makros oft, komplexe API-nahe Makros meist nicht." },
  { frage: "Ist openDesk wirklich günstiger als Microsoft 365?", antwort: "Nicht automatisch – der Bündelungseffekt kann den Lizenzkostenvorteil ganz oder teilweise aufheben." },
  { frage: "Brauche ich für openDesk eine eigene IT-Abteilung?", antwort: "Nein. Für Self-Hosting braucht es Kubernetes-Kompetenz, alternativ Partnerbetrieb oder SaaS." },
  { frage: "Kann openDesk in der Cloud betrieben werden?", antwort: "Ja, über qualifizierte Partner oder SaaS-Angebote." },
  { frage: "Welche Daten bleiben bei einer Migration erhalten?", antwort: "Primärdaten (Dateien, E-Mails, Kalender, Kontakte) lassen sich grundsätzlich vollständig übertragen. Systemkontext (Berechtigungen, Identitäten, Chatverläufe, Makros, Workflows) ist nicht durchgehend 1:1 migrierbar – siehe Migrationstabelle oben." },
];

export const cta = {
  title: "Passt openDesk zu Ihrer Situation?",
  subtitle: "Lassen Sie uns das anhand Ihrer konkreten IT-Landschaft klären.",
  ctaLabel: "Gespräch anfragen",
  eyebrow: "Einschätzung für Ihre IT-Landschaft",
};

export const related = {
  links: [{ label: "Alle Leistungen im Überblick", href: "/leistungen" }],
  upHref: "/blog",
  upLabel: "Alle Beiträge im Überblick",
};
