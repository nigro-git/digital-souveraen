/**
 * Quelle: G:\Meine Ablage\+Digitale-Souveraenität+\Content-Produktion\Blog\Themen\HowTo\artikel-coexistenz-migration_v2.md
 * Typ: Anleitung/How-To · Cluster: Umsetzung & Migration · Status: lebend (Prüf-Kadenz alle 6 Monate) · Stand: September 2026
 */

export const meta = {
  title: "Co-Existenz statt Big-Bang: Phasenweise Migration von Microsoft 365",
  answerFirst:
    "Eine Migration weg von Microsoft 365 gelingt am zuverlässigsten in Phasen: erst die Identitäts-Grundlage, dann eine Pilotabteilung, dann Komponente für Komponente. Diese Anleitung führt in acht Schritten von der Vorentscheidung bis zur Abschaltung des Alt-Systems – jeweils mit prüfbarem Zwischenresultat.",
  tags: { cluster: "Umsetzung & Migration", format: "How-To" },
};

export const voraussetzungen = {
  heading: "Bevor der erste Schritt beginnt",
  intro: "Diese Anleitung geht nicht von einem einzigen, immer gleichen Ablauf aus, sondern von einer Vorentscheidung, die je nach Unternehmen unterschiedlich ausfällt.",
  entscheidungHeading: "Entscheidungshilfe: Womit starten?",
  entscheidung: [
    { kriterium: "Höchster Compliance-/NIS2-Druck bei einer bestimmten Datenkategorie", ohne: "Mit der Komponente beginnen, die diese Daten hält (z. B. Cloud-Speicher für sensible Dokumente)", mit: "" },
    { kriterium: "Keine eigene IT-Kapazität für Selbstbetrieb", ohne: "Partnerbetrieb/SaaS-Variante wählen, nicht Self-Hosting auf eigener Kubernetes-Infrastruktur", mit: "" },
    { kriterium: "Geringes Risiko, viele Testfreiwillige vorhanden", ohne: "Mit einer nicht-kritischen Abteilung als Pilotgruppe beginnen, unabhängig von der Komponente", mit: "" },
  ],
  benoetigtHeading: "Benötigt für den Einstieg",
  benoetigt: [
    "Übersicht der aktuell genutzten M365-Dienste pro Abteilung (Mail, Dateiablage, Chat, Video)",
    "Entscheidung für eine Zielarchitektur: vollständiges openDesk oder Einzelkomponenten (z. B. nur Nextcloud)",
    "Eine IT-Person oder ein Partner mit Kubernetes-/Identity-Management-Erfahrung (bei Self-Hosting zwingend)",
    "Realistischer Zeitrahmen: mehrere Monate für eine vollständige Umstellung, nicht Wochen",
  ],
  risikoHeading: "Risiko vorab einordnen",
  risiko:
    "Diese Migration ist keine einmalige Aktion, sondern beginnt einen dauerhaften Doppelbetrieb-Zeitraum mit doppelten Kosten (Parallellizenzen) und zusätzlichem administrativem Aufwand, der bei der Zeitplanung eingepreist werden muss.",
};

export const uebersicht = {
  heading: "Kurze Schrittübersicht",
  items: [
    "Identitäts-Grundlage schaffen (Föderation statt Komplett-Wechsel)",
    "Pilotbereich und erste Komponente festlegen",
    "Komponente parallel aufbauen und testen",
    "Daten für den Pilotbereich migrieren",
    "Nutzerakzeptanz und Stabilität prüfen",
    "Schrittweise auf weitere Komponenten/Abteilungen ausrollen",
    "Laufenden Betrieb (Day-2 Operations) etablieren",
    "Alt-System für migrierte Bereiche abschalten",
  ],
};

export const schritte = {
  heading: "Die 8 Schritte",
  steps: [
    {
      titel: "Identitäts-Grundlage schaffen",
      text: "Keycloak (bzw. bei openDesk: Univention Nubus, das auf Keycloak basiert) als Identity Provider einrichten und per SAML/OIDC mit Entra ID föderieren, sodass Microsoft 365 währenddessen weiter funktioniert. Ort: Keycloak Admin Console (Identity Providers → SAML v2.0) und Entra ID Enterprise Applications.",
      warnung:
        "Diese Föderation ist kein vollständig souveränes Setup – Entra ID verarbeitet weiterhin die Authentifizierungs-Anfrage und stellt M365-Tokens aus, solange M365 im Einsatz bleibt. Was sich dadurch verlagert, ist die Kontrolle über Authentifizierung, Credential-Speicher und Sitzungsverwaltung – nicht die vollständige Unabhängigkeit von Microsoft. Für Unternehmen mit der Anforderung „keine US-Infrastruktur darf irgendwo im Identitätsfluss beteiligt sein“ reicht dieser Zwischenschritt nicht aus.",
      deliverable: "Testnutzer kann sich über Keycloak anmelden und weiterhin auf M365 zugreifen.",
    },
    {
      titel: "Pilotbereich und erste Komponente festlegen",
      text: "Anhand der Entscheidungstabelle oben eine Abteilung und eine Komponente auswählen (Beispiel im weiteren Verlauf: Cloud-Speicher/Nextcloud für eine nicht-kritische Abteilung).",
      deliverable: "Schriftliche Festlegung von Pilotabteilung, Startkomponente und Erfolgskriterien für Schritt 5.",
    },
    {
      titel: "Komponente parallel aufbauen",
      text: "Zielkomponente (z. B. Nextcloud) auf gewählter Infrastruktur (Self-Hosting, Partnerbetrieb oder SaaS) einrichten, ohne den bestehenden M365-Zugriff der Pilotabteilung zu deaktivieren.",
      deliverable: "Pilotabteilung kann parallel auf beide Systeme zugreifen, ohne dass eines davon abgeschaltet wurde.",
    },
    {
      titel: "Daten migrieren",
      text: "Für die Dateimigration (SharePoint/OneDrive → Nextcloud) die offizielle Nextcloud-Migrationsdokumentation sowie die openDesk-Migrationshinweise (bei jedem Versions-Update im Changelog verlinkt) als Grundlage nutzen; ergänzend stehen Werkzeuge für hybriden Betrieb zur Verfügung (z. B. Synchronisations-Tools, die Kalender/Kontakte zwischen beiden Systemen während der Übergangszeit abgleichen). Migration zunächst nur für die Pilotabteilung durchführen, nicht unternehmensweit.",
      deliverable: "Alle Dateien der Pilotabteilung sind im neuen System vorhanden, Stichprobenprüfung auf Vollständigkeit durchgeführt.",
    },
    {
      titel: "Nutzerakzeptanz und Stabilität prüfen",
      text: "Mindestens 2–4 Wochen Beobachtungszeitraum mit der Pilotabteilung, Feedback zu Bedienkomfort und fehlenden Funktionen einholen.",
      deliverable: "Dokumentierte Entscheidung: Ausrollen fortsetzen, Anpassungen vornehmen oder Ansatz überdenken.",
    },
    {
      titel: "Schrittweise ausrollen",
      text: "Nach erfolgreicher Pilotphase: nächste Komponente (z. B. E-Mail über Open-Xchange) oder nächste Abteilung nach demselben Muster (Schritt 3–5) hinzunehmen. Priorisierung nach Risiko: unkritische Anwendungen zuerst, wie auch bei Identity-Migrationen allgemein üblich.",
      deliverable: "Rollout-Plan mit Reihenfolge und Zeitrahmen für die verbleibenden Komponenten/Abteilungen.",
    },
    {
      titel: "Laufenden Betrieb etablieren (Day-2 Operations)",
      text: "Verantwortlichkeit für Patch-Management festlegen (eigene IT oder vertraglich beim Partnerbetreiber), Update-Monitoring einrichten.",
      warnung:
        "Dieser Schritt wird in Migrationsanleitungen häufig übersehen, ist aber entscheidend. Ein aus mehreren Open-Source-Komponenten zusammengesetzter Stack erfordert einen eigenständigen Patch-Prozess – Sicherheitsupdates erscheinen unabhängig vom Feature-Rhythmus, teils mehrfach im Monat. Ohne einen eingespielten Prozess sammeln sich offene Sicherheitslücken an.",
      deliverable: "Dokumentierter Prozess mit benannter Verantwortlichkeit für Sicherheitsupdates.",
    },
    {
      titel: "Alt-System abschalten (für migrierte Bereiche)",
      text: "Erst nach bestätigter Stabilität (Schritt 5 wiederholt für jede neue Komponente/Abteilung) den M365-Zugriff für die betroffenen Nutzer deaktivieren – nicht vorher, um Datenverlustrisiko zu vermeiden.",
      deliverable: "M365-Lizenzen für migrierte Nutzer sind gekündigt oder auf Minimal-Plan reduziert, Doppelkosten entfallen für diesen Bereich.",
    },
  ],
};

export const fehlerbehebung = {
  heading: "Fehlerbehebung",
  items: [
    { frage: "Was tun, wenn die Identitäts-Synchronisation zwischen Keycloak und Entra ID fehlschlägt?", antwort: "Es gibt keinen nativen Konnektor von Keycloak zu Entra ID – die Synchronisation von Attributen (Abteilung, Vorgesetzte:r, Ein-/Austrittsdatum) muss eigens aufgebaut werden, üblicherweise über SCIM oder ein Custom-Skript. Ohne diese Synchronisation lösen Entra-ID-Governance-Workflows (Joiner/Mover/Leaver) nicht mehr korrekt aus – ein häufiger, aber vermeidbarer Fehler, wenn dieser Schritt bei der Planung übersehen wird." },
    { frage: "Was tun, wenn Mitarbeitende weiterhin das alte System nutzen (Schatten-IT-Risiko)?", antwort: "Während der Parallelphase ist das ein normales Übergangsphänomen. Klar kommunizieren, bis wann welches System verbindlich wird, und den Zugriff erst nach Ablauf dieser Frist gemäß Schritt 8 abschalten." },
    { frage: "Was tun, wenn eine Abteilung nach der Migration eine kritische Funktion vermisst?", antwort: "Nicht vollständig zurückmigrieren – stattdessen prüfen, ob ein Koexistenz-Modell für diese spezifische Funktion (z. B. weiterhin Teams für externe Kunden nutzen, während interne Kommunikation auf Element läuft) sinnvoller ist als ein erzwungener Komplett-Umstieg." },
  ],
};

export const abschluss = {
  heading: "Abschlussprüfung",
  intro: "Die Migration eines Bereichs gilt als abgeschlossen, wenn:",
  items: [
    "alle Daten vollständig übertragen sind,",
    "die Pilot-/Nutzergruppe seit mindestens 4 Wochen stabil im neuen System arbeitet,",
    "der Patch-Management-Prozess dokumentiert und einer Person/Stelle zugeordnet ist,",
    "die alten Lizenzen für diesen Bereich gekündigt sind.",
  ],
};

export const cta = {
  title: "Migration planen, ohne den Betrieb zu riskieren?",
  subtitle: "Wir klären mit Ihnen Pilotbereich, Startkomponente und Zeitrahmen.",
  ctaLabel: "Gespräch anfragen",
  eyebrow: "Migration gemeinsam planen",
};

export const related = {
  links: [{ label: "Alle Leistungen im Überblick", href: "/leistungen" }],
  upHref: "/blog",
  upLabel: "Alle Beiträge im Überblick",
};
