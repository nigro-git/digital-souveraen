export interface Leistung {
  slug: string;
  tag: string;
  title: string;
  leitfrage: string;
  format: string;
  h1: string;
  answerFirst: string;
  contextHeadline: string;
  contextText: string;
  details: { label: string; value: string; sub?: string }[];
  geeignetFuer: string[];
  nichtGeeignetFuer: string[];
  vergleich: { kriterium: string; ohne: string; mit: string }[];
  vergleichCaption: string;
  ablauf: { titel: string; text: string; deliverable?: string }[];
  caseStudy: {
    kunde: string;
    headline: string;
    ausgangslage: string;
    vorgehen: string;
    ergebnis: string;
    meta: { label: string; value: string }[];
    placeholder?: boolean;
  };
  situationen: string[];
  faq: { frage: string; antwort: string }[];
  ctaLabel: string;
}

export const leistungen: Leistung[] = [
  {
    slug: "e-mail-server",
    tag: "E-Mail",
    title: "E-Mail-Server-Einrichtung",
    leitfrage: "Unsere Mails laufen über Google/Microsoft – wie werden wir unabhängig?",
    format: "Projekt · Umsetzung",
    h1: "Ihre E-Mails laufen über Google oder Microsoft – dabei gehört Ihre Kommunikation Ihnen.",
    answerFirst:
      "Wir richten Ihren E-Mail-Server auf Basis einer europäischen, quelloffenen Mailserver-Lösung ein, die Sie vollständig selbst kontrollieren. Kein Datenabfluss an US-Anbieter, keine Lizenzkosten pro Postfach, keine Abhängigkeit von Entscheidungen, die andere für Sie treffen.",
    contextHeadline: "Niemand hat sich bewusst für die Abhängigkeit entschieden.",
    contextText:
      "Als vor Jahren die E-Mail-Infrastruktur eingerichtet wurde, war Microsoft 365 oder Google Workspace schlicht die naheliegende, gut dokumentierte Wahl – schnell eingerichtet, von jedem IT-Dienstleister angeboten. Niemand hat damals über Datenstandort, Kill-Switch-Risiken oder langfristige Lizenzkosten nachgedacht, weil das damals kein Thema war. Heute ist es eines – durch NIS2, durch geopolitische Unsicherheit, durch steigende Lizenzpreise. Das ist keine frühere Fehlentscheidung, sondern der normale Lauf der Dinge, wenn ein Thema neu an Relevanz gewinnt.",
    details: [
      { label: "Format", value: "Projekt · Umsetzung in klar abgegrenztem Scope" },
      { label: "Preisrahmen", value: "Auf Anfrage", sub: "abhängig von Postfachanzahl und bestehender Infrastruktur" },
      { label: "Deliverables", value: "Mailserver-Setup, Migrationskonzept, Übergabe-Dokumentation, Monitoring" },
      { label: "Einstieg", value: "Ab sofort", sub: "auch parallel zu bestehender Infrastruktur" },
    ],
    geeignetFuer: [
      "Unternehmen mit eigener oder gemieteter Serverinfrastruktur (oder Bereitschaft dazu)",
      "Teams, die E-Mail-Abhängigkeit als Teil einer größeren Souveränitäts-Strategie sehen",
      "Unternehmen mit bis zu einigen hundert Postfächern",
    ],
    nichtGeeignetFuer: [
      "Unternehmen ohne jede Bereitschaft, auch nur temporär eigene Infrastruktur zu betreiben oder betreiben zu lassen",
      "Sehr große Enterprise-Umgebungen mit tief individualisierten Exchange-Workflows (eigenes Projektmandat nötig)",
    ],
    vergleich: [
      { kriterium: "Datenstandort", ohne: "Häufig außerhalb der EU / bei US-Anbieter", mit: "Vollständig in der EU, selbst kontrolliert" },
      { kriterium: "Laufende Kosten", ohne: "Lizenzgebühr pro Postfach, steigend", mit: "Einmalige Einrichtung, geringe Betriebskosten" },
      { kriterium: "Abhängigkeit", ohne: "Einseitige Änderungen/Abschaltung durch Anbieter möglich", mit: "Volle Kontrolle über Betrieb und Verfügbarkeit" },
      { kriterium: "Bedienbarkeit", ohne: "Teil einer großen, oft überladenen Suite", mit: "Schlanke, auf E-Mail fokussierte Oberfläche" },
    ],
    vergleichCaption:
      "Die Tabelle vergleicht den Betrieb der E-Mail-Infrastruktur über einen US-Anbieter mit einem selbst kontrollierten Mailserver-Setup. Der zentrale Unterschied liegt in Datenstandort und Kostenstruktur: statt laufender Lizenzgebühren pro Postfach entstehen einmalige Einrichtungskosten bei geringem laufendem Aufwand, bei vollständiger Datenhaltung innerhalb der EU.",
    ablauf: [
      { titel: "Bestandsaufnahme & Anforderungsanalyse", text: "Erfassung der bestehenden E-Mail-Infrastruktur, Postfachanzahl, genutzter Integrationen (Kalender, Kontakte, mobile Geräte).", deliverable: "Anforderungs- und Migrationskonzept" },
      { titel: "Mailserver-Setup", text: "Einrichtung des Mailserver-Systems auf europäischer Infrastruktur, inklusive Spam-/Virenschutz und Verschlüsselung.", deliverable: "Produktivsystem, dokumentiert" },
      { titel: "Migration der Postfächer", text: "Übernahme aller bestehenden E-Mails, Ordnerstrukturen und Kontakte – ohne Datenverlust, mit Parallelbetrieb während der Umstellung.", deliverable: "Vollständig migrierte Postfächer" },
      { titel: "Schulung & Übergabe", text: "Kurze Einweisung für Mitarbeitende und IT-Verantwortliche, damit der laufende Betrieb selbstständig funktioniert.", deliverable: "Übergabe-Dokumentation, Kurzschulung" },
      { titel: "Monitoring nach Umstellung", text: "Kurzer Beobachtungszeitraum nach Go-Live, um Zustellbarkeit und Stabilität sicherzustellen.", deliverable: "Abschlussbericht" },
    ],
    caseStudy: {
      kunde: "Mittelständischer Betrieb, Mittelhessen",
      headline: "Vom externen Anbieter zum eigenen, souveränen E-Mail-Server",
      ausgangslage: "Die gesamte E-Mail-Kommunikation lief über einen externen Anbieter ohne Einfluss auf Datenstandort und Konfiguration. Wiederkehrende Zustellprobleme führten dazu, dass Kundenmails im Spam landeten oder gar nicht ankamen – ohne dass der Betrieb selbst eingreifen konnte.",
      vorgehen: "Aufbau eines eigenen E-Mail-Servers auf europäischer Infrastruktur, vollständige Einrichtung der Authentifizierungsstandards für sichere Zustellung (SPF, DKIM, DMARC), Übernahme aller bestehenden Postfächer und Ordnerstrukturen im Parallelbetrieb, Einweisung der Mitarbeitenden und Übergabe mit Dokumentation.",
      ergebnis: "Stabile Zustellbarkeit, volle Kontrolle über Konfiguration und Daten, Datenhaltung ausschließlich in Deutschland. Keine laufenden Lizenzkosten pro Postfach mehr, 75 % geringere laufende Kosten gegenüber dem vorherigen Anbieter.",
      meta: [
        { label: "Branche", value: "Handwerk" },
        { label: "Region", value: "Mittelhessen" },
      ],
    },
    situationen: [
      "Unsere Microsoft-Lizenz wird jedes Jahr teurer, ohne dass sich für uns etwas verbessert.",
      "Wir wissen nicht, wo unsere E-Mail-Daten eigentlich gespeichert werden.",
      "Compliance/NIS2 verlangt von uns eine Exit-Strategie – die haben wir für E-Mail nicht.",
      "Unsere IT will weg von Microsoft, weiß aber nicht, wo sie anfangen soll.",
    ],
    faq: [
      { frage: "Können wir während der Migration weiter normal arbeiten?", antwort: "Ja. Die Umstellung erfolgt mit Parallelbetrieb – Sie nutzen Ihr bestehendes System, bis das neue vollständig funktioniert." },
      { frage: "Was passiert mit unseren alten E-Mails?", antwort: "Alle bestehenden E-Mails, Ordner und Kontakte werden vollständig migriert. Es geht nichts verloren." },
      { frage: "Funktioniert das auch mit unseren mobilen Geräten und Outlook/Thunderbird?", antwort: "Ja, die eingesetzte Lösung unterstützt Standardprotokolle (IMAP/SMTP/CalDAV/CardDAV) und funktioniert mit gängigen E-Mail-Clients." },
      { frage: "Wie viele Postfächer sind realistisch?", antwort: "Von wenigen bis zu mehreren hundert Postfächern – für sehr große Umgebungen wird der Aufwand individuell kalkuliert." },
    ],
    ctaLabel: "E-Mail-Souveränität anfragen",
  },
  {
    slug: "dokumentenmanagement",
    tag: "Dokumente",
    title: "Dokumentenmanagement (DMS)",
    leitfrage: "Unsere Dokumente liegen verstreut in SharePoint & privaten Drives – wie bringen wir das unter Kontrolle?",
    format: "Projekt · Umsetzung",
    h1: "Ihre Dokumente liegen verstreut in SharePoint, Google Drive und privaten Ordnern – Struktur entsteht so nicht.",
    answerFirst:
      "Wir richten ein zentrales, souveränes Dokumentenmanagement ein – Dateien, Freigaben und Versionierung an einem Ort, betrieben in der EU, ohne dass Unternehmensdokumente über US-Cloud-Dienste laufen.",
    contextHeadline: "Dokumenten-Chaos entsteht nicht durch Unachtsamkeit, sondern durch Wachstum.",
    contextText:
      "Jede Abteilung hat irgendwann die für sie naheliegendste Lösung gewählt: Vertrieb legt Angebote in Google Drive ab, die Buchhaltung nutzt einen Netzwerkordner, Marketing arbeitet in SharePoint. Jede Entscheidung war für sich genommen sinnvoll – in der Summe entsteht daraus aber ein System ohne einheitliche Struktur, ohne durchgängige Rechteverwaltung und mit Dokumenten, die über mehrere außereuropäische Cloud-Dienste verteilt sind.",
    details: [
      { label: "Format", value: "Projekt · Umsetzung in klar abgegrenztem Scope" },
      { label: "Preisrahmen", value: "Auf Anfrage", sub: "abhängig von Datenmenge und Anzahl bestehender Ablage-Systeme" },
      { label: "Deliverables", value: "Struktur-/Rechtekonzept, DMS-Setup, Migrationsplan, Übergabe-Dokumentation" },
      { label: "Einstieg", value: "Ab sofort", sub: "idealerweise mit einer Bestandsaufnahme der aktuellen Ablage-Systeme" },
    ],
    geeignetFuer: [
      "Unternehmen mit Dokumenten verteilt über mehrere Cloud-Dienste/Netzwerkordner",
      "Unternehmen, die eine einheitliche, nachvollziehbare Rechteverwaltung brauchen",
      "Teams mit Compliance-Anforderungen an Dokumentenhaltung (Aufbewahrungsfristen, Nachvollziehbarkeit)",
    ],
    nichtGeeignetFuer: [
      "Unternehmen mit sehr spezialisierten, tief integrierten Fachverfahren (z. B. branchenspezifische ERP-Dokumentenmodule), die eine eigene Anbindung erfordern",
      "Projekte, bei denen keinerlei Bereitschaft besteht, Ablage-Gewohnheiten zu ändern",
    ],
    vergleich: [
      { kriterium: "Ablageort", ohne: "Verteilt über mehrere Cloud-Dienste, teils außerhalb der EU", mit: "Zentral, ausschließlich in der EU" },
      { kriterium: "Rechteverwaltung", ohne: "Uneinheitlich, abteilungsabhängig", mit: "Einheitlich, nachvollziehbar" },
      { kriterium: "Versionierung", ohne: "Oft manuell, fehleranfällig", mit: "Automatisch, durchgängig" },
      { kriterium: "Auffindbarkeit", ohne: "Dokumente \"irgendwo\", Suche über mehrere Systeme", mit: "Eine zentrale Struktur, ein Suchpunkt" },
    ],
    vergleichCaption:
      "Die Tabelle vergleicht eine über mehrere Cloud-Dienste verteilte Dokumentenablage mit einem zentralen, europäisch betriebenen Dokumentenmanagement-System. Der zentrale Effekt ist Nachvollziehbarkeit: einheitliche Rechteverwaltung und Versionierung statt verteilter, uneinheitlicher Ablage-Gewohnheiten.",
    ablauf: [
      { titel: "Bestandsaufnahme der aktuellen Ablage-Systeme", text: "Erfassung, wo welche Dokumente aktuell liegen und welche Abteilungen welche Anforderungen haben.", deliverable: "Ist-Analyse" },
      { titel: "Struktur- und Rechtekonzept", text: "Entwicklung einer Ordner-/Rechtestruktur, die zu Ihrer Organisation passt – nicht ein Standard-Template.", deliverable: "Struktur- und Rechtekonzept als Briefing-Dokument" },
      { titel: "DMS-Einrichtung", text: "Aufbau des Systems auf europäischer Infrastruktur, inklusive Versionierung und Freigabe-Workflows.", deliverable: "Produktivsystem" },
      { titel: "Migration bestehender Dokumente", text: "Übernahme der bestehenden Dateien in die neue Struktur, mit Bereinigung offensichtlicher Duplikate.", deliverable: "Migrierte Dokumentenablage" },
      { titel: "Schulung & Übergabe", text: "Einweisung für Mitarbeitende, damit die neue Struktur auch genutzt wird statt nach der Umstellung wieder zu verwässern.", deliverable: "Übergabe-Dokumentation, Kurzschulung" },
    ],
    caseStudy: {
      kunde: "Mittelständischer Betrieb, Mittelhessen",
      headline: "Zentrales Dokumentenmanagement mit automatischer Verschlagwortung",
      ausgangslage: "Dokumente lagen verteilt auf mehreren, teils veralteten und untereinander inkompatiblen Altsystemen – ergänzt durch physische Papierablagen. Es gab keine einheitliche Ablagestruktur und keine klare Linie für die DSGVO-konforme Aufbewahrung, zudem bestand ein reales Risiko, dass Dokumente bei einem Systemausfall unwiederbringlich verloren gehen.",
      vorgehen: "Einführung eines Dokumentenmanagementsystems auf einem eigenen Server in der EU, Erarbeitung einer Ablage- und Rechtestruktur, Migration des Bestands inklusive gescannter Papierdokumente. Ergänzt um eine KI-gestützte automatische Verschlagwortung, die eingehende Dokumente ohne manuellen Aufwand Korrespondenten, Dokumenttypen und Tags zuordnet. Office-Dateien werden beim Import automatisch in ein durchsuchbares Format überführt.",
      ergebnis: "Eine zentrale, volltextdurchsuchbare Ablage für alle Unternehmensdokumente. Neue Dokumente werden automatisch erfasst und klassifiziert, 90 % weniger Zeitaufwand bei der Dokumentensuche. Betrieb vollständig auf eigener Infrastruktur, kein Datenabfluss an Drittanbieter.",
      meta: [
        { label: "Branche", value: "Gleisbau" },
        { label: "Region", value: "Mittelhessen" },
      ],
    },
    situationen: [
      "Wir finden Dokumente nicht mehr wieder, weil jede Abteilung anders ablegt.",
      "Ausgeschiedene Mitarbeitende hatten Zugriff auf Ordner, von denen niemand mehr wusste, wer sie braucht.",
      "Unsere Dokumente liegen über mehrere US-Cloud-Dienste verteilt – das passt nicht zu unseren Compliance-Anforderungen.",
    ],
    faq: [
      { frage: "Können wir bestehende Ordnerstrukturen übernehmen?", antwort: "Teilweise – sinnvolle Strukturen übernehmen wir, unstrukturierte Altlasten bereinigen wir im Zuge der Migration." },
      { frage: "Wie lange dauert die Umstellung?", antwort: "Abhängig von Datenmenge und Anzahl der Quellsysteme – ein typisches Projekt dauert einige Wochen." },
      { frage: "Funktioniert das DMS auch mobil und im Homeoffice?", antwort: "Ja, der Zugriff funktioniert über Web-Oberfläche und Client-Anwendungen, unabhängig vom Standort." },
    ],
    ctaLabel: "DMS-Analyse anfragen",
  },
  {
    slug: "cloud-systeme",
    tag: "Cloud",
    title: "Cloud-Systeme",
    leitfrage: "Unsere Dateien liegen bei Microsoft/Google – wie holen wir sie in eine souveräne Umgebung zurück?",
    format: "Projekt · Umsetzung",
    h1: "Ihre Dateien liegen bei Microsoft oder Google – dabei könnten sie genauso gut bei Ihnen liegen.",
    answerFirst:
      "Wir richten Ihre Cloud-Infrastruktur auf Basis einer europäischen, quelloffenen Lösung ein – Dateisynchronisation, Freigaben und Zusammenarbeit, betrieben auf europäischer Infrastruktur und vollständig unter Ihrer Kontrolle statt unter der eines US-Anbieters.",
    contextHeadline: "Die Cloud-Wahl von damals war naheliegend – nicht falsch, nur nicht mehr zeitgemäß.",
    contextText:
      "Als die Cloud-Infrastruktur eingerichtet wurde, war OneDrive oder Google Drive die pragmatische Wahl: sofort verfügbar, gut dokumentiert, in bestehende Office-Umgebungen integriert. Dass damit sämtliche Unternehmensdaten dauerhaft bei einem US-Anbieter liegen, war zu dem Zeitpunkt kein Kriterium. Heute, mit wachsendem Bewusstsein für Datenstandort, Abhängigkeit und regulatorischen Druck, ist es eines – und das lässt sich nachträglich korrigieren, ohne den laufenden Betrieb zu gefährden.",
    details: [
      { label: "Format", value: "Projekt · Umsetzung in klar abgegrenztem Scope" },
      { label: "Preisrahmen", value: "Auf Anfrage", sub: "abhängig von Datenmenge, Nutzerzahl und Hosting-Entscheidung" },
      { label: "Deliverables", value: "Infrastruktur-Setup, Migrationskonzept, Übergabe-Dokumentation" },
      { label: "Einstieg", value: "Ab sofort", sub: "mit Parallelbetrieb während der Umstellungsphase möglich" },
    ],
    geeignetFuer: [
      "Unternehmen, die Dateisynchronisation und Zusammenarbeit von OneDrive/Google Drive weg verlagern wollen",
      "Unternehmen, die eigenes Hosting oder ein europäisches Rechenzentrum bevorzugen (z. B. IONOS, STACKIT)",
      "Teams mit Bedarf an granularer Rechteverwaltung und Auditierbarkeit",
    ],
    nichtGeeignetFuer: [
      "Unternehmen mit tiefer, kaum trennbarer Integration in Microsoft-365-spezifische Workflows (z. B. Power-Automate-Ketten), ohne Bereitschaft, diese anzupassen",
      "Sehr große Datenmengen ohne vorherige Bereinigung – hier empfiehlt sich zunächst eine Aufräum-Phase",
    ],
    vergleich: [
      { kriterium: "Datenstandort", ohne: "Bei US-Anbieter, oft ohne Wahlmöglichkeit", mit: "Europäisches Hosting, von Ihnen bestimmt" },
      { kriterium: "Kostenmodell", ohne: "Lizenz pro Nutzer, steigend", mit: "Einmalige Einrichtung, planbare Betriebskosten" },
      { kriterium: "Kontrolle", ohne: "Änderungen/Abschaltung liegen beim Anbieter", mit: "Volle Kontrolle über Betrieb und Konfiguration" },
      { kriterium: "Integration", ohne: "An Microsoft-Ökosystem gebunden", mit: "Offene Standards, breite Integrationsmöglichkeiten" },
    ],
    vergleichCaption:
      "Die Tabelle vergleicht den Betrieb der Cloud-Infrastruktur über einen US-Anbieter mit einer selbst kontrollierten Cloud-Umgebung auf europäischem Hosting. Der wesentliche Unterschied liegt in Datenstandort und Kontrolle: statt eines nutzerbasierten Lizenzmodells mit steigenden Kosten entsteht eine planbare, selbst gesteuerte Infrastruktur.",
    ablauf: [
      { titel: "Bestandsaufnahme & Hosting-Entscheidung", text: "Analyse der aktuellen Datenmenge, Nutzerzahl und gewünschten Hosting-Variante (eigener Server oder europäischer Anbieter).", deliverable: "Infrastruktur- und Migrationskonzept" },
      { titel: "Cloud-Einrichtung", text: "Aufbau der Cloud-Umgebung inklusive Synchronisations-Clients, Freigabe- und Rechtestruktur.", deliverable: "Produktivsystem" },
      { titel: "Migration der Daten", text: "Übernahme bestehender Dateien und Ordnerstrukturen aus OneDrive/Google Drive, mit Parallelbetrieb während der Umstellung.", deliverable: "Migrierte Cloud-Umgebung" },
      { titel: "Schulung & Übergabe", text: "Einweisung für Mitarbeitende in Synchronisation, Freigaben und mobile Nutzung.", deliverable: "Übergabe-Dokumentation, Kurzschulung" },
      { titel: "Monitoring nach Umstellung", text: "Kurzer Beobachtungszeitraum zur Sicherstellung von Stabilität und Performance.", deliverable: "Abschlussbericht" },
    ],
    caseStudy: {
      kunde: "Logistik – RLP",
      placeholder: true,
      headline: "Cloud-Migration weg von OneDrive",
      ausgangslage: "Ein Logistikunternehmen aus Rheinland-Pfalz nutzte – wie viele Unternehmen der Branche – OneDrive als zentrale Cloud-Infrastruktur. Mit wachsender Nutzerzahl stiegen die Lizenzkosten spürbar, ohne dass sich am Funktionsumfang etwas änderte. Dazu kam die wachsende Unsicherheit, wo die eigenen Unternehmensdaten tatsächlich liegen und wer im Zweifel Zugriff darauf hat.",
      vorgehen: "Migration der bestehenden Dateistruktur und Freigaben auf eine selbst kontrollierte Cloud-Infrastruktur mit europäischem Hosting, Parallelbetrieb über [Zeitraum], Schulung der Mitarbeitenden im Umgang mit der neuen Umgebung.",
      ergebnis: "[X]% geringere laufende Kosten gegenüber OneDrive, vollständige Datenhaltung in der EU, volle Kontrolle über Freigaben und Zugriffsrechte.",
      meta: [
        { label: "Branche", value: "Logistik" },
        { label: "Region", value: "Rheinland-Pfalz" },
      ],
    },
    situationen: [
      "Unsere gesamten Unternehmensdaten liegen bei einem US-Anbieter – das beunruhigt uns zunehmend.",
      "Die Lizenzkosten für unseren Cloud-Speicher steigen jedes Jahr, ohne erkennbaren Mehrwert.",
      "Wir brauchen für Ausschreibungen/Kunden einen Nachweis über den Datenstandort unserer Cloud.",
    ],
    faq: [
      { frage: "Können wir während der Migration weiterarbeiten?", antwort: "Ja, durch Parallelbetrieb während der Umstellungsphase." },
      { frage: "Wo genau werden unsere Daten dann gehostet?", antwort: "Je nach Wahl entweder auf eigener Infrastruktur oder bei einem europäischen Hosting-Anbieter wie IONOS oder STACKIT – Sie entscheiden." },
      { frage: "Funktioniert die Lösung auch mit unseren bestehenden Office-Dokumenten?", antwort: "Ja, gängige Office-Formate werden unterstützt, inklusive direkter Bearbeitung im Browser." },
      { frage: "Was passiert mit freigegebenen Ordnern für externe Partner?", antwort: "Freigaben werden im Zuge der Migration übernommen und lassen sich granular und nachvollziehbar verwalten." },
    ],
    ctaLabel: "Cloud-Analyse anfragen",
  },
  {
    slug: "videokonferenzen",
    tag: "Video",
    title: "Videokonferenzen",
    leitfrage: "Unsere Meetings laufen über Zoom/Teams – wie bekommen wir eine souveräne Alternative?",
    format: "Projekt · Umsetzung",
    h1: "Ihre Meetings laufen über Zoom, Teams oder Google Meet – dabei können Videokonferenzen genauso gut souverän laufen.",
    answerFirst:
      "Wir richten eine europäische Videokonferenz-Lösung für Ihr Unternehmen ein – funktional gleichwertig zu Zoom, Microsoft Teams oder Google Meet, aber mit voller Kontrolle über Ihre Daten, europäischem Hosting und DSGVO-konformem Betrieb ohne Umwege über US-Anbieter.",
    contextHeadline: "Die Tool-Wahl von damals war praktisch – nicht falsch, nur nicht mehr zeitgemäß.",
    contextText:
      "Als Videokonferenzen zum Alltag wurden, war die Entscheidung für Zoom oder Teams naheliegend: sofort einsatzbereit, von Kunden und Partnern erwartet, gut in bestehende Office-Umgebungen integriert. Dass damit sämtliche Meeting-Inhalte, Aufzeichnungen und Metadaten bei einem US-Anbieter verarbeitet werden, war zu dem Zeitpunkt selten ein Kriterium. Heute rückt das durch DSGVO-Anforderungen, NIS2 und wachsendes Bewusstsein für Abhängigkeit in den Fokus – und lässt sich nachträglich korrigieren, ohne dass Meetings schlechter funktionieren.",
    details: [
      { label: "Format", value: "Projekt · Umsetzung in klar abgegrenztem Scope" },
      { label: "Preisrahmen", value: "Auf Anfrage", sub: "abhängig von Nutzerzahl, Hosting-Entscheidung und gewünschten Zusatzfunktionen" },
      { label: "Deliverables", value: "Infrastruktur-Setup, Integrationskonzept (Kalender/E-Mail), Übergabe-Dokumentation" },
      { label: "Einstieg", value: "Ab sofort", sub: "mit Parallelbetrieb während der Umstellungsphase möglich" },
    ],
    geeignetFuer: [
      "Unternehmen, die Videokonferenzen von Zoom/Teams/Meet weg verlagern wollen, ohne bei Funktionsumfang oder Bedienkomfort Abstriche zu machen",
      "Unternehmen mit Bedarf an nachweisbarer DSGVO-Konformität bei Kunden- oder Beratungsgesprächen",
      "Teams, die Videokonferenzen mit bestehender souveräner Infrastruktur (z. B. Cloud/DMS) integrieren wollen",
    ],
    nichtGeeignetFuer: [
      "Unternehmen mit sehr großen, öffentlichen Webinar-Formaten (mehrere tausend Teilnehmende), die spezialisierte Streaming-Infrastruktur benötigen",
      "Projekte ohne jede Bereitschaft, Mitarbeitende und externe Gesprächspartner an ein neues Tool zu gewöhnen",
    ],
    vergleich: [
      { kriterium: "Datenstandort", ohne: "Meeting-Daten/Aufzeichnungen häufig bei US-Anbieter", mit: "Europäisches Hosting, von Ihnen bestimmt" },
      { kriterium: "DSGVO-Nachweis", ohne: "Auftragsverarbeitung über Drittstaaten-Anbieter, oft komplex", mit: "Klar nachvollziehbare, europäische Verarbeitung" },
      { kriterium: "Kostenmodell", ohne: "Lizenz pro Nutzer, oft gestaffelt nach Funktionsumfang", mit: "Einmalige Einrichtung, planbare Betriebskosten" },
      { kriterium: "Funktionsumfang", ohne: "Umfangreich, aber an Anbieter-Ökosystem gebunden", mit: "Vergleichbarer Funktionsumfang (Bildschirmfreigabe, Aufzeichnung, Breakout-Räume), offene Standards" },
    ],
    vergleichCaption:
      "Die Tabelle vergleicht den Betrieb von Videokonferenzen über einen US-Anbieter mit einer selbst kontrollierten, europäisch gehosteten Lösung. Der zentrale Unterschied liegt in Datenstandort und DSGVO-Nachweisbarkeit – bei vergleichbarem Funktionsumfang für den Arbeitsalltag.",
    ablauf: [
      { titel: "Bestandsaufnahme & Anforderungsanalyse", text: "Erfassung der aktuell genutzten Funktionen (Aufzeichnung, Breakout-Räume, Kalenderintegration, externe Teilnehmende) und der Nutzerzahl.", deliverable: "Anforderungs- und Migrationskonzept" },
      { titel: "Einrichtung der Videokonferenz-Lösung", text: "Aufbau des Systems auf europäischer Infrastruktur, inklusive Verschlüsselung und Zugriffssteuerung.", deliverable: "Produktivsystem" },
      { titel: "Integration in bestehende Systeme", text: "Anbindung an Kalender, E-Mail und – falls vorhanden – die bereits eingerichtete souveräne Cloud-/DMS-Umgebung.", deliverable: "Integrationskonzept, dokumentiert" },
      { titel: "Schulung & Übergabe", text: "Einweisung für Mitarbeitende, damit externe wie interne Meetings ohne Reibungsverluste laufen.", deliverable: "Übergabe-Dokumentation, Kurzschulung" },
      { titel: "Monitoring nach Umstellung", text: "Kurzer Beobachtungszeitraum zur Sicherstellung von Stabilität und Performance, gerade bei größeren Meetings.", deliverable: "Abschlussbericht" },
    ],
    caseStudy: {
      kunde: "Steuerberater – BW",
      placeholder: true,
      headline: "Souveräne Videokonferenzen für vertrauliche Mandantengespräche",
      ausgangslage: "Eine Steuerberatungskanzlei aus Baden-Württemberg führte Mandantengespräche zu sensiblen finanziellen Themen bislang ausschließlich über Zoom. Mehrere Mandanten fragten wiederholt nach, wo die Gesprächsdaten verarbeitet werden – eine befriedigende Antwort gab es bislang nicht, was bei einzelnen Ausschreibungen bereits zum Ausschlusskriterium wurde.",
      vorgehen: "Einrichtung einer europäisch gehosteten Videokonferenz-Lösung, Integration in die bestehende Kalenderumgebung, Schulung des Teams im Umgang mit der neuen Plattform sowie Erstellung eines kurzen Nachweis-Dokuments für Mandantenanfragen zur Datenverarbeitung.",
      ergebnis: "Vollständige Datenhaltung in der EU, belastbarer DSGVO-Nachweis gegenüber Mandanten, kein Wechsel im gewohnten Meeting-Ablauf für Mitarbeitende oder Mandanten.",
      meta: [
        { label: "Branche", value: "Steuerberatung" },
        { label: "Region", value: "Baden-Württemberg" },
      ],
    },
    situationen: [
      "Unsere Kunden fragen zunehmend, wo unsere Meeting-Daten eigentlich landen.",
      "Wir wollen bei Beratungsgesprächen mit sensiblen Themen kein Tool nutzen, das über einen US-Anbieter läuft.",
      "Die Zoom-/Teams-Lizenzkosten steigen, ohne dass wir die zusätzlichen Funktionen überhaupt nutzen.",
      "Unsere IT wünscht sich eine Videokonferenz-Lösung, die zur bestehenden souveränen Infrastruktur passt.",
    ],
    faq: [
      { frage: "Funktioniert eine souveräne Lösung genauso gut wie Zoom oder Teams?", antwort: "Ja, für den typischen Arbeitsalltag (Bildschirmfreigabe, Aufzeichnung, Breakout-Räume, Chat) sind europäische Lösungen mittlerweile funktional gleichwertig. Unterschiede gibt es vor allem bei sehr großen Webinar-Formaten." },
      { frage: "Können auch externe Teilnehmende (Kunden, Partner) ohne eigenen Account teilnehmen?", antwort: "Ja, die Teilnahme über einen Browser-Link ist möglich, ohne dass externe Personen ein eigenes Konto benötigen." },
      { frage: "Was passiert mit Aufzeichnungen und Chatverläufen bei der Umstellung?", antwort: "Bestehende Aufzeichnungen können archiviert oder migriert werden – neue Aufzeichnungen laufen ab dem Umstellungszeitpunkt vollständig über die neue, europäische Infrastruktur." },
      { frage: "Lässt sich das mit unserer bestehenden Cloud- oder DMS-Lösung verbinden?", antwort: "Wenn Sie bereits eine souveräne Cloud- oder DMS-Umgebung bei uns eingerichtet haben, lässt sich die Videokonferenz-Lösung direkt integrieren – etwa für die gemeinsame Ablage von Aufzeichnungen oder Freigaben." },
    ],
    ctaLabel: "Videokonferenz-Analyse anfragen",
  },
];

export function getLeistung(slug: string): Leistung | undefined {
  return leistungen.find((l) => l.slug === slug);
}
