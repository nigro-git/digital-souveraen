/**
 * Quelle: G:\Meine Ablage\+Digitale-Souveraenität+\Content-Produktion\Blog\Themen\Informativ\artikel-was-kostet-digitale-souveraenitaet-solo.md
 * Typ: Informativ/Erklärung – Solo · Cluster: Kosten & Wirtschaftlichkeit · Status: lebend (Prüf-Kadenz alle 6 Monate) · Stand: September 2026
 * Offen laut Redaktion: Primärquellen-Rückverfolgung des 45-€-Falls (Uni-Lizenzkosten-Streit) vor Livegang.
 */

export const meta = {
  title: "Was kostet digitale Souveränität?",
  answerFirst:
    "Es gibt keinen pauschalen Preis für digitale Souveränität. Wirtschaftlich sinnvoll ist ein Vergleich aus direkten Kosten, betrieblichen Auswirkungen, einmaligen Transformationskosten und dem veränderten Abhängigkeitsrisiko – nicht ein einzelner Lizenzpreis-Vergleich.",
  tags: { cluster: "Kosten & Wirtschaftlichkeit", format: "Information" },
};

export const warum = {
  heading: "Warum ein Lizenzpreisvergleich nicht reicht",
  absaetze: [
    "Ein klassischer Softwarepreis-Vergleich („Anbieter A kostet X, Anbieter B kostet Y“) bildet nur einen von fünf Faktoren ab. Auch eine reine TCO-Berechnung im technischen Sinne greift zu kurz: Diese Betrachtung bezieht zusätzlich strategische Risikokosten ein, die eine klassische TCO-Rechnung oft nicht erfasst – und unterscheidet bewusst zwischen tatsächlich gezahlten Kosten, betrieblichen Auswirkungen und wirtschaftlichen Risiken, die sich nicht alle gleichartig beziffern lassen.",
  ],
  hinweis: "Die folgenden fünf Ebenen sind unser eigenes Analysemodell zur strukturierten Kostenbewertung, keine etablierte TCO-Norm.",
};

export const ebenen = {
  heading: "Welche Kosten digitale Souveränität tatsächlich verursacht",
  steps: [
    {
      titel: "Kosten und Risiken bestehender Abhängigkeiten",
      text: ["Wer beim bisherigen Anbieter bleibt, trägt die Opportunitäts- und Risikokosten des Status quo – nicht alle davon lassen sich als Eurobetrag in eine Rechnung schreiben. Dazu zählen Preiserhöhungen, ungünstigere Vertragsbedingungen, Produktabkündigungen, erzwungene Tarif-/Produktwechsel und hohe spätere Wechselkosten.", "Ein konkretes, weitgehend belegtes Beispiel: Microsoft hat seine Business-Preise zum 1. Juli 2026 erneut angehoben – Business Standard verteuert sich laut mehreren übereinstimmenden Quellen um rund 12 %. Die genaue Erhöhung in Euro variiert je nach Quelle leicht (Berichte reichen von ca. 1,40 € bis 1,60 € pro Nutzer/Monat), für ein Unternehmen mit 50 Mitarbeitenden ergibt sich daraus eine Größenordnung von rund 800–850 € Mehrkosten pro Jahr.", "Wichtig zur Einordnung: Anders als man annehmen könnte, begründet Microsoft die Erhöhung nicht mit unveränderten Preisen bei unverändertem Angebot, sondern mit zusätzlichen Funktionen (u. a. Copilot Chat, erweiterte Sicherheitsfunktionen) – das relativiert den reinen Preismacht-Vorwurf teilweise, ändert aber nichts daran, dass Bestandskunden ohne eigenes Zutun höhere Kosten tragen. Das strukturelle Muster bleibt bestehen: Als Cloud-Abo-Kunde ist man der Preispolitik des Anbieters ausgesetzt."],
    },
    {
      titel: "Verschiebung von Lizenz- zu Betriebs- und Administrationskosten",
      text: "Bei souveränen Alternativen können die reinen Software-Lizenzkosten sinken – bei Open-Source-Community-Editionen (z. B. openDesk) unter Umständen auf null. Im Gegenzug verschieben sich die Ausgaben in Richtung Administration, Infrastruktur und gegebenenfalls kostenpflichtigen Enterprise-Support. Diese Verschiebung ist wirtschaftlich sinnvoll, wenn bereits IT-Kapazität vorhanden ist – ein Verlustgeschäft, wenn diese Kapazität erst aufgebaut werden muss und dabei unterschätzt wird.",
    },
    {
      titel: "Bündelungs- und Integrationskosten",
      text: ["Eine proprietäre Suite bündelt Mail, Office, Cloud-Speicher, Video und Identity Management in einem einzigen Pro-Kopf-Preis. Eine souveräne Alternative wie openDesk ersetzt das durch mehrere Einzelkomponenten (Nextcloud, Collabora, Open-Xchange u. a.) – deren Integration ist zusätzlicher Aufwand, den man beim Suite-Anbieter nicht hat.", "Ein öffentlich diskutiertes Beispiel zeigt, wie kontrovers das ausfallen kann: Für eine Studierendenlizenz einer Open-Source-Suite wurden 45 € pro Jahr und Arbeitsplatz angesetzt, während der etablierte Anbieter kostenlose Bildungslizenzen anbietet – ein offener Brief kritisierte dies scharf, Kommentatoren hielten den Vergleich methodisch für unfair (Community- vs. kostenpflichtige Edition). Dieser Streit zeigt: Je nachdem, was genau miteinander verglichen wird, kann das Ergebnis völlig unterschiedlich ausfallen – eine intuitive „Open Source ist billiger“-Annahme trägt nicht automatisch."],
    },
    {
      titel: "Transformations- und Übergangskosten",
      text: "Ein Parallelbetrieb während der Umstellung, Beratungsleistungen, Schulungsaufwand und ein temporärer Produktivitätsverlust sind bei den meisten Anbieterwechseln einzuplanen – unabhängig von der Richtung. Diese Kosten sind zeitlich begrenzt, werden aber häufig komplett ausgeklammert, weil sie nicht in eine einfache Jahreslizenzrechnung passen.",
    },
    {
      titel: "Produktivität und Funktionsunterschiede",
      text: "Anders als die Übergangskosten (Ebene 4) ist dieser Effekt potenziell dauerhaft: Wenn eine neue Lösung bestimmte Spezial-Workflows nicht oder nur eingeschränkt unterstützt, kann das Team dauerhaft langsamer arbeiten – unabhängig davon, wie gut die Migration selbst gelaufen ist. Umgekehrt kann eine besser passende Lösung auch dauerhaft Produktivität gewinnen. Dieser Effekt lässt sich selten exakt beziffern; unsere Einschätzung dazu (nicht durch externe Studien belegt, sondern eigene Empfehlung): Ein Test mit einer Pilotgruppe vor der vollständigen Umstellung liefert eine realistischere Einschätzung als eine reine Vorab-Annahme.",
    },
  ],
};

export const rechnung = {
  heading: "So führen Unternehmen die fünf Ebenen in einer Kostenrechnung zusammen",
  headers: ["Kostenart", "Heute", "Nach Umstellung", "Charakter", "Bewertung"],
  rows: [
    ["Lizenzen", "€", "€", "laufend", "direkt messbar"],
    ["Hosting/Infrastruktur", "€", "€", "laufend", "direkt messbar"],
    ["Administration", "€", "€", "laufend", "messbar/schätzbar"],
    ["Support", "€", "€", "laufend", "direkt messbar"],
    ["Integration", "€", "€", "einmalig + laufend", "messbar/schätzbar"],
    ["Migration", "–", "€", "einmalig", "schätzbar"],
    ["Schulung", "–", "€", "überwiegend einmalig", "schätzbar"],
    ["Parallelbetrieb", "–", "€", "einmalig", "direkt messbar"],
    ["Produktivität/Funktionsunterschiede", "bewerten", "bewerten", "ggf. laufend", "schätzen/testen"],
    ["Anbieter-/Exit-Risiko", "bewerten", "bewerten", "Risiko", "qualitativ/Szenario"],
  ],
  caption:
    "Nicht jede Zeile lässt sich gleich präzise bewerten. Lizenzkosten sind direkt messbar, Produktivitätseffekte lassen sich schätzen oder testen, das Anbieter-/Exit-Risiko kann in der Regel nur qualitativ oder als Szenario bewertet werden – eine vermeintlich exakte Zahl dafür wäre Scheingenauigkeit.",
};

export const faktoren = {
  heading: "Welche Faktoren die Wirtschaftlichkeit besonders beeinflussen",
  guenstiger: [
    "Vorhandene IT-Kompetenz im Unternehmen",
    "Geringe Abhängigkeit von proprietären Spezial-Workflows",
    "Hohe bestehende Lizenz-/Betriebskosten beim aktuellen Anbieter",
    "Gute Portabilität der vorhandenen Daten und Prozesse",
    "Planbarer, nicht erzwungener Migrationszeitraum",
  ],
  teurer: [
    "Fehlende Betriebsressourcen für Administration",
    "Viele proprietäre Spezialworkflows ohne geprüfte Alternative",
    "Hoher Integrationsbedarf zwischen mehreren Einzelkomponenten",
    "Umfangreicher Schulungsbedarf",
    "Notwendiger, längerer Parallelbetrieb",
    "Geringe Marktreife der benötigten Alternativen",
  ],
  hinweis:
    "Diese Einschätzung bleibt bewusst bei der Kostenfrage – ob sich der Umstieg trotz höherer oder niedrigerer Kosten insgesamt lohnt, hängt zusätzlich von strategischen und regulatorischen Faktoren ab, die diese Kostenbetrachtung allein nicht abbildet.",
};

export const grenzen = {
  heading: "Was diese Rechnung nicht leisten kann",
  text:
    "Sie ersetzt keine unternehmensspezifische Kalkulation – die konkreten Eurobeträge pro Zeile hängen stark von Unternehmensgröße, bestehender Infrastruktur und Verhandlungsposition ab. Sie liefert das Modell, nicht die fertige Zahl.",
};

export const cta = {
  title: "Wie wirkt sich das auf Ihr Unternehmen aus?",
  subtitle: "Wir rechnen Ihr Szenario gemeinsam durch.",
  eyebrow: "Kosten gemeinsam einordnen",
  ctaLabel: "Gespräch anfragen",
};

export const related = {
  links: [{ label: "Alle Leistungen im Überblick", href: "/leistungen" }],
  upHref: "/blog",
  upLabel: "Alle Beiträge im Überblick",
};
