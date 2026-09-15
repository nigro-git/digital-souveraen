export interface NewsItem {
  slug: string;
  title: string;
  kicker: string;
  /** Anzeige-Label im DOM, z.B. "September 2026" oder "Anfang 2026" (Ereignis-/Quellendatum) */
  date: string;
  /** ISO-Datum (YYYY-MM-DD), bestimmt NUR die Sortierung – wann der Artikel bei uns veröffentlicht wurde */
  publishDate: string;
  body: string;
  source: string;
}

const rawNews: NewsItem[] = [
  {
    slug: "bsi-c3a-kriterienkatalog-cloud-souveraenitaet",
    title: "BSI definiert erstmals konkrete Kriterien für Cloud-Souveränität (C3A)",
    kicker: "Mit dem C3A-Kriterienkatalog gibt es erstmals eine konkrete Messlatte für souveräne Cloud-Anbieter.",
    date: "Anfang 2026",
    publishDate: "2026-09-13",
    body: "Das Bundesamt für Sicherheit in der Informationstechnik (BSI) hat Anfang 2026 mit dem Kriterienkatalog „Criteria Enabling Cloud Computing Autonomy“ (C3A) erstmals konkrete Anforderungen definiert, anhand derer sich die Souveränität eines Cloud-Anbieters bewerten lässt. Der Katalog macht deutlich: Souveränität bedeutet mehr als ein deutscher oder europäischer Firmensitz – entscheidend sind Jurisdiktion, tatsächlicher Betriebsort und nachweisbare, überprüfbare Kontrolle über die eigene Sicherheitsinfrastruktur. Der Digitalverband Bitkom hat die Kriterien in einem eigenen Positionspapier aufgegriffen und für einen risikobasierten, anwendungsfallbezogenen Bewertungsansatz plädiert statt für pauschale Ausschlusskriterien.\n\nFür Unternehmen, die einen Cloud-Anbieter auswählen oder ihren bestehenden Anbieter überprüfen wollen, liefert C3A damit erstmals eine handfeste, offizielle Grundlage – statt sich auf Marketingaussagen einzelner Anbieter verlassen zu müssen.",
    source: "BSI, C3A-Kriterienkatalog, Anfang 2026; Bitkom, Positionspapier „Kriterien für Cloud-Souveränität in Europa“, 2026",
  },
  {
    slug: "schweiz-bundeskanzlei-opendesk-3000-arbeitsplaetze",
    title: "Schweizer Bundeskanzlei bringt 3.000 Arbeitsplätze auf openDesk",
    kicker: "Die Schweiz macht ernst: 3.000 Behörden-Arbeitsplätze wechseln zu openDesk statt Microsoft 365.",
    date: "September 2026",
    publishDate: "2026-09-10",
    body: "Die Schweizerische Bundeskanzlei hat am 2. September 2026 grünes Licht für ein eigenes Programm zum digital souveränen Arbeitsplatz gegeben: Ab Ende 2027 sollen rund 3.000 Beschäftigte die Open-Source-Suite openDesk statt Microsoft 365 nutzen. Grundlage der Entscheidung ist eine Machbarkeitsstudie mit 172 Testpersonen, die zeigt, wo der Umstieg funktioniert – und wo Microsoft-Produkte laut einer begleitenden Studie der Zürcher Fachhochschule und der Berner Fachhochschule aktuell noch technisch überlegen sind. openDesk kann Microsoft 365 demnach noch nicht vollständig ersetzen, wird aber als ernstzunehmende Alternative für einen Großteil der Arbeitsplätze eingestuft.\n\nFür Unternehmen ist das ein bemerkenswertes Signal: Ein ganzes Land testet den Umstieg nicht aus Kostengründen allein, sondern explizit mit Blick auf die Frage, wer im Ernstfall Zugriff auf staatliche Daten hat. Der differenzierte Studien-Befund – funktioniert teilweise, aber nicht überall – ist dabei realistischer und glaubwürdiger als eine reine Erfolgsmeldung.",
    source: "Schweizerische Bundeskanzlei, Machbarkeitsstudie PoC BOSS, 2. September 2026; drweb.de, September 2026",
  },
  {
    slug: "exchange-server-ungepatcht-sicherheitsluecken-dauerthema",
    title: "Zehntausende ungepatchte Exchange-Server: Microsoft-Sicherheitslücken werden zum Dauerthema",
    kicker: "Fast 22.000 Exchange-Server weltweit sind aktuell ungeschützt – kein Einzelfall, sondern Muster.",
    date: "September 2026",
    publishDate: "2026-09-08",
    body: "Aktuell sind laut der Shadowserver Foundation weltweit rund 21.900 Microsoft-Exchange-Server ungepatcht über das Internet erreichbar und damit für die Schwachstelle CVE-2026-62911 angreifbar – ein deutlicher Teil davon in Deutschland. Das ist kein isoliertes Ereignis: Allein der August-2026-Patchday behob rund 400 Sicherheitslücken, darunter 42 kritische und drei bereits aktiv ausgenutzte Zero-Days. Im Juli waren es sogar über 1.100 Schwachstellen inklusive Chromium/Edge. Auch neuere Produkte sind betroffen – im August wurde mit „CoSnitch“ eine kritische 0-Click-Schwachstelle in Microsoft 365 Copilot bekannt, über die sich Unternehmensdaten unbemerkt abgreifen ließen, sowie eine mit dem Höchstwert 10,0 bewertete Lücke in Entra ID.\n\nFür Unternehmen bedeutet das: Sicherheitslücken bei zentraler Infrastruktur wie E-Mail-Servern, Identitätsmanagement oder KI-Assistenten sind kein Randthema, sondern ein wiederkehrender, planbarer Kostenfaktor – kontinuierliches Patch-Management, Monitoring und im Zweifel eine kritische Prüfung der eigenen Abhängigkeit von einem einzelnen, sehr großen Angriffsziel.",
    source: "Shadowserver Foundation / BornCity, September 2026; Microsoft Patch Tuesday Reports, Juli/August 2026",
  },
  {
    slug: "opendesk-1-18-geteilte-postfaecher",
    title: "openDesk erreicht Version 1.18 — geteilte E-Mail- und Kalender-Konten",
    kicker: "openDesk 1.18 bringt eines der umfangreichsten Updates seit Langem.",
    date: "August 2026",
    publishDate: "2026-08-15",
    body: "Mit Version 1.18 hat ZenDiS eines der umfangreichsten openDesk-Updates der letzten Zeit veröffentlicht. Neu ist unter anderem die Möglichkeit, E-Mail- und Kalenderkonten im Team gemeinsam zu nutzen – ein Feature, das bislang eine der häufigsten Lücken gegenüber klassischen Microsoft-Umgebungen war. Für Unternehmen, die eine Migration auf europäische Alternativen prüfen, ist das ein relevantes Signal: Die Funktionslücke zwischen souveränen Suiten und etablierten US-Anbietern wird kontinuierlich kleiner. Gerade bei Team-Postfächern (z. B. info@- oder support@-Adressen) war das bisher ein häufiger Show-Stopper in Migrationsgesprächen.",
    source: "openDesk-Blog, August 2026",
  },
  {
    slug: "zendis-vertriebspartnerprogramm-onboarding-herbst-2026",
    title: "ZenDiS-Vertriebspartnerprogramm: Onboarding startet im Herbst 2026",
    kicker: "Private IT-Dienstleister können ab Herbst 2026 offiziell openDesk vertreiben.",
    date: "Juli 2026",
    publishDate: "2026-07-15",
    body: "Das im Frühjahr 2026 angekündigte ZenDiS-Vertriebspartnerprogramm nimmt konkrete Form an: Das Onboarding privater IT-Dienstleister ist für Herbst 2026 terminiert. Das neue Modell ist zweistufig aufgebaut – Distributoren übernehmen Partnerbetreuung und Marktentwicklung, IT-Dienstleister bauen darauf eigene Angebote als SaaS oder On-Premises-Lösung auf. Damit wird openDesk erstmals systematisch auch außerhalb der öffentlichen Verwaltung vertreibbar. Für den Mittelstand bedeutet das: Der Zugang zu souveränen Arbeitsplatzlösungen wird spürbar einfacher, weil sich mehr spezialisierte Anbieter etablieren.",
    source: "nevercodealone.de / ZenDiS, Juli 2026",
  },
  {
    slug: "luenendonk-studie-2026-kill-switch-risiko",
    title: "Lünendonk-Studie 2026: 83 % sehen „Kill-Switch“-Risiko, nur 14 % haben eine Exit-Strategie",
    kicker: "Neue Studie zeigt große Lücke zwischen Risikobewusstsein und tatsächlicher Vorbereitung.",
    date: "2026",
    publishDate: "2026-06-01",
    body: "Die Lünendonk-Studie 2026 („Digitale Souveränität – Vom Risiko zur Resilienz“) liefert eine der deutlichsten Zahlen zum Thema: 83 % der befragten Unternehmen in der DACH-Region halten die einseitige Abschaltung von Cloud-Diensten durch geopolitische Konflikte oder außereuropäische Sanktionen für ein reales Risiko. Gleichzeitig verfügen aktuell nur 14 % über eine dokumentierte, belastbare Exit-Strategie. Diese Lücke zwischen Risikobewusstsein und tatsächlicher Vorbereitung dürfte in den kommenden Monaten zum zentralen Argument für Unternehmen werden, ihre Abhängigkeit von einzelnen (meist außereuropäischen) Anbietern aktiv zu reduzieren – unabhängig davon, ob regulatorischer Druck von außen kommt oder nicht.",
    source: "Lünendonk & Hossenfelder, 2026",
  },
  {
    slug: "bitkom-leitfaden-cloud-souveraenitaet-risikobasiert",
    title: "Bitkom-Leitfaden: Cloud-Souveränität ist keine Alles-oder-Nichts-Frage",
    kicker: "Neuer Bitkom-Leitfaden setzt auf risikobasierte Cloud-Souveränität statt vollständiger Unabhängigkeit.",
    date: "Juli 2026",
    publishDate: "2026-09-15",
    body: "Mit dem Leitfaden „Cloud-Souveränität praktisch umsetzen“ liefert der Digitalverband Bitkom eine differenzierte Handlungsanleitung für Unternehmen: Im Mittelpunkt steht nicht das abstrakte Ideal vollständiger technologischer Unabhängigkeit, sondern ein risikobasierter Ansatz. Unternehmen sollen ihre kritischen Systeme, Daten und Prozesse kennen, Abhängigkeiten bewusst bewerten und daraus passende Maßnahmen ableiten – etwa offene Standards, Multi-Cloud-Strategien, belastbare Exit-Szenarien und den gezielten Aufbau interner Kompetenzen. Der Leitfaden ist bewusst als „lebendes Dokument“ angelegt, das mit der technischen und regulatorischen Entwicklung mitwächst.\n\nDieser risikobasierte Ansatz deckt sich mit einer Position, die in der Debatte oft zu kurz kommt: Digitale Souveränität muss kein Komplett-Umstieg sein, sondern eine Frage bewusster, informierter Entscheidungen an den Stellen, wo Abhängigkeit tatsächlich ein Risiko darstellt.",
    source: "Bitkom e. V., Leitfaden „Cloud Souveränität praktisch umsetzen“, Juli 2026",
  },
];

/** Immer nach publishDate absteigend sortiert – der neueste Artikel steht automatisch oben, unabhängig von der Reihenfolge oben im Array. */
export const news: NewsItem[] = rawNews
  .slice()
  .sort((a, b) => b.publishDate.localeCompare(a.publishDate));
