/**
 * Quelle: G:\Meine Ablage\+Digitale-Souveraenität+\Content-Produktion\Blog\Themen\Informativ\artikel-woran-erkenne-ich-digitale-souveraenitaet-solo.md
 * Typ: Informativ/Solo · V1 (Entwurf zur Prüfung) · Cluster: Grundlagen & Risikobewusstsein · Status: lebend · Stand: Oktober 2026
 *
 * Offen laut Redaktion (vor Livegang prüfen):
 * - Data Act: Verordnung (EU) 2023/2854, Kapitel VI gegenlesen (Factsheet der Bundesnetzagentur nennt keine Artikelnummern).
 * - BSI C3A: BSI-Primärquelle prüfen, ob der Auditleitfaden inzwischen erschienen ist.
 * - Bitkom-Leitfaden: Datum "Mai 2026" (veröffentlicht 6.5.2026, zuletzt geändert 17.7.2026) mit der Quelle abgleichen.
 * Hinweis: Textteile in [Text](url) werden über lib/inline.ts als Links gerendert.
 */

export const meta = {
  title: "Woran erkenne ich, ob mein Unternehmen digital souverän ist?",
  answerFirst:
    "Ob ein Unternehmen digital souverän ist, zeigt sich nicht an der Herkunft des Anbieters, am Standort des Rechenzentrums oder an einem Zertifikat. Das sind Hinweise. Entscheidend ist, ob Sie Ihre Daten vollständig herausholen, den Anbieter wechseln und den Betrieb anderswo fortsetzen können. Das lässt sich pro System mit sechs Fragen prüfen. Die Antwort zählt erst, wenn Sie sie getestet oder dokumentiert haben. Eine Zusage des Anbieters reicht dafür nicht.",
  tags: { cluster: "Grundlagen & Risikobewusstsein", format: "Information" },
};

export const modell = {
  heading: "Souveränität prüfen Sie pro System und mit Nachweis",
  absaetze: [
    "Eine Gesamtnote für das Unternehmen gibt es nicht. Ihre E-Mail kann gut aufgestellt sein, während Ihr Identitätsdienst an einem einzigen Anbieter hängt. Der [Bitkom-Leitfaden „Cloud Souveränität praktisch umsetzen“](https://www.bitkom.org/Bitkom/Publikationen/Cloud-Souveraenitaet-praktisch-umsetzen) (Mai 2026) empfiehlt deshalb, zuerst die kritischen Systeme, Daten und Prozesse zu erfassen, Abhängigkeiten zu bewerten und Maßnahmen daraus abzuleiten.",
    "Für jede der sechs Fragen unten gibt es drei mögliche Stände:",
  ],
  staende: [
    { label: "Belegt", text: "Sie haben es selbst getestet, oder ein Dokument weist es nach (Vertrag, Testprotokoll, Export)." },
    { label: "Zugesagt", text: "Der Anbieter sagt es, einen eigenen Nachweis haben Sie nicht." },
    { label: "Unbekannt", text: "Sie haben es nie geprüft." },
  ],
  hinweis: "Das ist unsere eigene Prüfmethode und keine Norm. Sie trennt, was Sie wissen, von dem, was Sie glauben.",
};

export const evidenz = {
  heading: "Was die Zahlen zur Selbsteinschätzung zeigen",
  absaetze: [
    "Nach einer [Bitkom-Erhebung von 2025](https://www.bitkom.org/Presse/Presseinformation/Studienbericht-digitale-Souveraenitaet-Bitkom-neue-Publikationsreihe) beziehen 96 % der Unternehmen in Deutschland digitale Technologien oder Dienstleistungen aus dem Ausland. 90 % davon sehen sich abhängig und können nicht darauf verzichten. Das ist eine Selbsteinschätzung. Ob ein Wechsel tatsächlich möglich wäre, sagt die Zahl nicht.",
    "Die Lünendonk-Studie „Digitale Souveränität: Vom Risiko zur Resilienz“ ([Pressemitteilung vom 17. März 2026](https://www.luenendonk.de/wp-content/uploads/2026/03/LUE_Digitale-Souveraenitaet_PI_f.pdf), 155 Interviews, je etwa zur Hälfte gehobener Mittelstand und Konzerne) kommt zu einem ähnlichen Bild: 83 % halten einen Kill Switch durch einen Cloud-Provider für ein realistisches Szenario, aber nur 57 % haben eine Exit-Strategie für den Wechsel des Cloud-Providers. Die Pressemitteilung nennt das Vorhandensein einer Strategie, von einem Test ist darin nicht die Rede.",
  ],
  dataAct: {
    heading: "Ein Wechselrecht ist noch keine Wechselfähigkeit",
    intro:
      "Man könnte annehmen, das Gesetz sichere den Wechsel. Der EU Data Act verpflichtet Cloud-Anbieter tatsächlich, den Wechsel zu unterstützen. Nach dem [Factsheet der Bundesnetzagentur](https://www.bundesnetzagentur.de/DE/Fachthemen/Digitales/DataAct/DL/Factsheet4.pdf) gilt dabei:",
    liste: [
      "Die Übergangsfrist beträgt höchstens 30 Kalendertage, bei hoher Komplexität kann sie auf bis zu sieben Monate verlängert werden.",
      "Nach dem Wechsel müssen die Daten mindestens 30 Kalendertage abrufbar bleiben.",
      "Wechselentgelte entfallen ab dem 12. Januar 2027. Bis dahin dürfen nur Kosten berechnet werden, die unmittelbar mit dem Wechsel zusammenhängen.",
      "Bei IaaS muss der Anbieter den Wechsel so unterstützen, dass der neue Dienst funktional gleichwertig sein kann. Bei PaaS und SaaS muss er offene Schnittstellen und die nötige Dokumentation bereitstellen.",
    ],
    schluss:
      "Das Gesetz regelt also Unterstützung, Fristen und Kosten. Ob Ihre Prozesse im neuen System laufen, regelt es nicht. Bei SaaS-Anwendungen sind offene Schnittstellen die Pflicht, ein gleichwertiger Funktionsumfang ist es nicht. Diese Lücke schließt nur eine eigene Prüfung.",
  },
  c3a: {
    heading: "Was der BSI-Kriterienkatalog C3A dazu beiträgt",
    absaetze: [
      "Das BSI hat am 27. April 2026 den Katalog „Criteria Enabling Cloud Computing Autonomy“ (C3A) veröffentlicht ([Einordnung im Vergabeblog](https://vergabeblog.de/2026-04-30/bsi-veroeffentlicht-c3a-neuer-massstab-fuer-digitale-souveraenitaet-in-der-cloud-beschaffung/), [Einordnung von KPMG](https://kpmg.com/de/de/themen/digital-transformation/cloud-transformation/bsi-c3a-cloud-souveraenitaet-erstmals-messbar-machen.html)). Er gliedert Souveränität in sechs Bereiche: strategisch, rechtlich-jurisdiktionell, Daten, Betrieb, Lieferkette und Technologie. Er ist freiwillig, hat nach Angaben des BSI keine regulatorische Wirkung und ist kein Zertifikat. Er setzt voraus, dass der Anbieter die Sicherheitskriterien C5 erfüllt, und Kunden legen selbst fest, welches Souveränitätsniveau sie brauchen. Ein Auditverfahren, das sich am C5-Testat orientiert, hat das BSI angekündigt.",
      "Für Sie ist der Katalog eine Fragenliste an den Anbieter: Welche dieser Kriterien kann er nachweisen, und wie?",
    ],
  },
};

export const pruefung = {
  heading: "Die sechs Fragen mit Prüfschritt",
  headers: ["Frage", "So prüfen Sie es", "Als belegt gilt", "Warnsignal"],
  rows: [
    [
      "1. Können wir unsere Daten vollständig exportieren?",
      "Testexport eines abgegrenzten Bereichs (ein Postfach, ein Projektordner) in einem offenen Format. Prüfen, ob Berechtigungen, Versionen und Metadaten mitkommen.",
      "Der Export liegt vor und lässt sich in einem anderen System öffnen.",
      "Export nur über den Anbieter-Support oder nur in einem proprietären Format.",
    ],
    [
      "2. Können wir wechseln, ohne zentrale Prozesse neu aufzubauen?",
      "Alle Workflows, Makros und Schnittstellen auflisten, die am System hängen. Pro Eintrag klären, ob es anderswo eine Entsprechung gibt.",
      "Die Liste liegt vor, jeder Eintrag hat eine benannte Alternative oder ist als Lücke markiert.",
      "Prozesse nutzen Funktionen, die es nur bei diesem Anbieter gibt.",
    ],
    [
      "3. Können wir bestimmen, wo unsere Daten verarbeitet werden?",
      "Auftragsverarbeitungsvertrag und Unterauftragnehmerliste lesen. Verarbeitungsorte für Betrieb, Support und Backups einzeln erfassen.",
      "Alle Orte sind vertraglich benannt, Änderungen brauchen Ihre Zustimmung oder lassen sich widersprechen.",
      "Genannt ist nur der Speicherort, nicht der von Support und Backups.",
    ],
    [
      "4. Gibt es offene Schnittstellen und Standards?",
      "Prüfen, ob dokumentierte Schnittstellen und offene Formate vorhanden sind und ob Software von Dritten darauf zugreift.",
      "Die Dokumentation liegt vor, mindestens eine Integration mit fremder Software läuft darüber.",
      "Schnittstellen nur in kostenpflichtigen Zusatzmodulen oder nur für Produkte desselben Anbieters.",
    ],
    [
      "5. Können wir den Betrieb notfalls durch einen anderen Anbieter fortsetzen?",
      "Den Wechsel durchspielen: Wer macht was, wie lange dauert die Datenübernahme, welche Fristen und Entgelte stehen im Vertrag (vergleichen Sie sie mit den Data-Act-Regeln oben)? Wenn möglich, einen Teilbereich testweise wieder anlaufen lassen.",
      "Ein dokumentierter Ablauf mit Zeitangabe liegt vor, mindestens ein Teilbereich ist getestet.",
      "Die Exit-Strategie ist ein Satz im IT-Konzept.",
    ],
    [
      "6. Wissen wir, welchen Rechtsordnungen Anbieter und Daten unterliegen?",
      "Die Konzernstruktur des Anbieters bis zur obersten Muttergesellschaft feststellen, bei Unterauftragnehmern ebenso. Das Ergebnis juristisch bewerten lassen.",
      "Die Struktur ist dokumentiert, eine juristische Einschätzung liegt vor.",
      "„Server in Deutschland“ ersetzt die Prüfung der Konzernstruktur.",
    ],
  ],
  vorgehen: {
    heading: "So gehen Sie vor",
    text: "Das ist unsere Empfehlung und kein Standardverfahren. Listen Sie zuerst Ihre Systeme auf. Beginnen Sie mit dem System, dessen Ausfall den Betrieb am schnellsten stoppen würde. Gehen Sie dafür die sechs Fragen durch und halten Sie pro Frage fest, ob der Stand belegt, zugesagt oder unbekannt ist. Die Zeilen mit „unbekannt“ sind Ihre ersten Aufgaben, danach folgen die mit „zugesagt“.",
  },
};

export const grenzen = {
  heading: "Was diese Prüfung nicht leisten kann",
  absaetze: [
    "Sie ersetzt keine juristische Bewertung. Frage 6 braucht ein Urteil, das eine Checkliste nicht liefert. Sie ersetzt auch keine Sicherheitsprüfung, denn ein System kann sicher und trotzdem nicht souverän sein. Und sie sagt nicht, wie viel Souveränität Sie brauchen: Nicht jedes System muss alle sechs Fragen mit „belegt“ beantworten. Wie sich das für den Gesamtbetrieb einordnet, erklärt unser Grundlagenartikel [Was ist digitale Souveränität für Unternehmen?](/blog/was-ist-digitale-souveraenitaet-fuer-unternehmen). Was ein Wechsel kostet, steht in [Was kostet digitale Souveränität?](/blog/was-kostet-digitale-souveraenitaet).",
    "Wenn Sie ein System gemeinsam mit uns prüfen wollen: [Souveränitäts-Analyse anfragen](/kontakt).",
  ],
};

export const cta = {
  title: "Ein System gemeinsam mit uns prüfen?",
  ctaLabel: "Souveränitäts-Analyse anfragen",
};

export const related = {
  links: [{ label: "Alle Leistungen im Überblick", href: "/leistungen" }],
  upHref: "/blog",
  upLabel: "Alle Beiträge im Überblick",
};
