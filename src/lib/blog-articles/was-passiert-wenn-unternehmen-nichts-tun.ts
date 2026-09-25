/**
 * Quelle: G:\Meine Ablage\+Digitale-Souveraenität+\Content-Produktion\Blog\Themen\Analyse-Standpunkt\artikel-was-passiert-wenn-nichts-tun_v2.md
 * Typ: Analyse/Standpunkt · V2 · Cluster: Grundlagen & Risikobewusstsein · Status: lebend (Prüf-Kadenz alle 6 Monate) · Stand: September 2026
 */

export const meta = {
  title: "Was passiert, wenn Unternehmen nichts tun?",
  answerFirst:
    "Digitale Souveränität ist ein Risikothema – aber nicht für jeden gleich groß. Untätigkeit ist weder überall dramatisch noch überall harmlos, sie ist vor allem eines: unbewusst. Diese Analyse gilt für Unternehmen im DACH-Raum mit Abhängigkeit von US-Cloud-Diensten, nicht für Unternehmen, die ihre Abhängigkeiten bereits bewusst geprüft und akzeptiert haben.",
  tags: { cluster: "Grundlagen & Risikobewusstsein", format: "Analyse" },
};

export const kernaussagen = {
  heading: "Kernaussagen in Kürze",
  items: [
    "Digitale Souveränität ist ein wachsendes, aber ungleich verteiltes Risiko – nicht jedes Unternehmen ist gleich stark betroffen.",
    "Vier Risikokategorien verschärfen sich messbar: regulatorisch (NIS2-Organhaftung seit Dez. 2025), wirtschaftlich (M365-Preiserhöhungen), operationell (86 % Abhängigkeit laut Capgemini, nur 14 % mit voller Transparenz), wettbewerblich (Vorreiter migrieren planvoll statt unter Zeitdruck).",
    { text: "Eine ernstzunehmende Gegenposition existiert: Vorschneller Wechsel kann teurer und riskanter sein als geplantes Vorgehen – ein europäischer Anbieter-Standort allein ist noch keine echte Souveränität.", highlight: true },
    "Konsequenz: keine sofortige Tool-Entscheidung, sondern eine risikobasierte Bestandsaufnahme der eigenen Abhängigkeiten.",
  ] as (string | { text: string; highlight?: boolean })[],
};

export const grundlage = {
  heading: "Grundlage dieser Einschätzung: zwei Studien, ein Gesetzestext, öffentliche Preisdaten",
  text:
    "Diese Einschätzung stützt sich auf: die Lünendonk-Studie 2026 zu digitaler Souveränität in der DACH-Region, den Capgemini Digital Sovereignty Index (Analyse von 866 Organisationen in den USA, Europa und APAC entlang fünf Souveränitätsdimensionen), die seit 6. Dezember 2025 geltende NIS2-Umsetzung in Deutschland (NIS2UmsuCG), sowie öffentlich dokumentierte Preisentwicklungen bei Microsoft 365 seit 2022. Zeitraum der zugrunde liegenden Daten: 2025–2026. Einschränkung: Marktdaten zu digitaler Souveränität sind ein junges Feld – Langzeitstudien über mehrere Jahre existieren noch nicht.",
};

export const risiken = {
  heading: "Regulatorisch, wirtschaftlich, operationell, wettbewerblich: Wo der Druck tatsächlich wächst",
  treiber: [
    { label: "1 · Regulatorisch", text: "Mit dem NIS2UmsuCG (in Kraft seit 6. Dezember 2025) besteht für betroffene Unternehmen erstmals eine persönliche Organhaftung der Geschäftsführung bei unzureichendem Risikomanagement. Wer die eigenen Abhängigkeiten nicht kennt, kann sie auch nicht nachweisbar bewerten – ein Compliance-Risiko, das nicht abstrakt bleibt, sondern an eine konkrete Haftungsfrage gekoppelt ist." },
    { label: "2 · Wirtschaftlich", text: "Microsoft hat seine Business-Preise seit 2022 mehrfach angehoben, zuletzt zum 1. Juli 2026 (je nach Tarif zwischen 12 % und 25 % Erhöhung, Business Standard z. B. +1,40 € pro Nutzer/Monat). Das ist ein Cloud-Abo-Modell, kein Kauf – wer bei einem Anbieter bleibt, bleibt dauerhaft dessen Preispolitik ausgesetzt, unabhängig davon, ob der Funktionsumfang sich ändert." },
    { label: "3 · Operationell", text: "Laut Capgemini Digital Sovereignty Index sind 86 % der untersuchten Organisationen erheblichen Abhängigkeiten von ausländischen oder extern kontrollierten Lieferketten ausgesetzt – gleichzeitig verfügen laut derselben Studie nur 14 % über vollständige Transparenz über diese Abhängigkeiten innerhalb ihres erweiterten Technologie-Ökosystems. Diese Lücke zwischen Risiko und Kenntnis der eigenen Lage ist die eigentliche Schwachstelle, nicht die Abhängigkeit an sich." },
    { label: "4 · Wettbewerblich", text: "Organisationen, die bereits aktiv gegensteuern – die Schweizerische Bundeskanzlei, Schleswig-Holstein, Dänemark – bewerten das nicht nur als Compliance-Übung, sondern als Resilienz-Investition. Wer hier später beginnt, migriert unter Zeitdruck statt planvoll, was Migrationsrisiken erhöht statt senkt." },
  ],
  hinweis: "Hinweis zur Belegqualität: Der vierte Strang (Wettbewerb) stützt sich auf einzelne Beispiele statt auf Studiendaten und ist damit schwächer belegt als die drei anderen.",
};

export const gegenargumente = {
  heading: "Gegenargumente: Ist digitale Souveränität überschätzt?",
  absaetze: [
    "Eine ernstzunehmende Gegenposition existiert und verdient hier Raum, nicht nur eine pro forma Erwähnung: Kritiker argumentieren, dass ein vorschneller Verzicht auf etablierte Cloud-Dienste selbst zum Risiko werden kann – höhere Kosten, langsamere Umsetzung, geringere Skalierungsfähigkeit. Ein zweites, oft übersehenes Argument: Ein europäischer Anbieter-Standort allein ist noch keine echte Souveränität – auch europäische Anbieter nutzen globale Lieferketten, Open-Source-Komponenten und internationale Technologieplattformen. Eine EU-Adresse kann so zur „Scheinsicherheit“ werden, wenn die tatsächliche Abhängigkeitskette dahinter nicht geprüft wird.",
    "Die stärkste Form dieser Kritik lautet: Digitale Souveränität klingt gut, ist aber oft teuer, politisch aufgeladen und technisch nur begrenzt erreichbar. Wichtig dabei: Das Risiko ist nicht für jeden Workload gleich – wer jede Abhängigkeit gleich dramatisiert, verschwendet Budget an unkritischen Stellen und übersieht möglicherweise die wirklich kritischen.",
  ],
  syntheseLabel: "Wie sich beide Positionen vereinbaren lassen:",
  synthese:
    "Beide Seiten – „Nichtstun ist riskant“ und „Vorschnelles Handeln ist auch riskant“ – widersprechen sich nicht, wenn man sie als Plädoyer für dasselbe liest: eine bewusste, risikobasierte Bewertung statt beider Extreme (blindes Weitermachen oder blinder Aktionismus). Genau das deckt sich mit der Studienlage: Laut Capgemini setzen mehr als zwei Drittel der befragten Organisationen weltweit auf eine Kombination aus interner Entwicklung und externer Zusammenarbeit, nicht auf vollständige Unabhängigkeit.",
};

export const konsequenz = {
  heading: "Der erste sinnvolle Schritt ist eine Bestandsaufnahme, keine Tool-Entscheidung",
  text:
    "Die Konsequenz aus beiden Seiten dieser Analyse ist nicht „sofort alles migrieren“, sondern: eine ehrliche Bestandsaufnahme der eigenen Abhängigkeiten, priorisiert nach tatsächlicher Kritikalität – nicht nach Bauchgefühl oder Ideologie. Für die meisten Unternehmen ist das der erste sinnvolle Schritt, deutlich vor jeder Tool-Entscheidung.",
};

export const cta = {
  title: "Wo stehen Ihre Abhängigkeiten heute?",
  subtitle: "Wir unterstützen Sie bei einer risikobasierten Bestandsaufnahme – vor jeder Tool-Entscheidung.",
  ctaLabel: "Gespräch anfragen",
  eyebrow: "Bestandsaufnahme gemeinsam angehen",
};

export const related = {
  links: [{ label: "Alle Leistungen im Überblick", href: "/leistungen" }],
  upHref: "/blog",
  upLabel: "Alle Beiträge im Überblick",
};
