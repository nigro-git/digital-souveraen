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
    slug: "bitkom-umfrage-dsgvo-reform",
    title: "Bitkom-Umfrage: 90 Prozent der Unternehmen fordern DSGVO-Reform",
    kicker: "Neun von zehn Unternehmen halten eine Reform der DSGVO für nötig – die Hälfte sieht den Datenschutz als Bremse für KI-Projekte.",
    date: "8. Oktober 2026",
    publishDate: "2026-10-08",
    body: "Neun von zehn Unternehmen in Deutschland wünschen sich eine Reform der Datenschutz-Grundverordnung. Das zeigt eine repräsentative Umfrage von Bitkom Research unter 605 Unternehmen ab 20 Beschäftigten, die der Digitalverband Bitkom Ende September 2026 veröffentlicht hat. 41 Prozent halten eine Reform für sehr notwendig, nur 5 Prozent sehen keinen Bedarf.\n\nAls größte Belastung nennen laut Bitkom 84 Prozent die Dokumentationspflichten. 92 Prozent beschreiben den Umsetzungsaufwand als hoch, 71 Prozent berichten von mehr Aufwand als im Vorjahr. Die Hälfte der Unternehmen sagt, dass Datenschutz den KI-Einsatz behindert. 89 Prozent wünschen sich weniger Dokumentation bei risikoarmer Datenverarbeitung, 85 Prozent eine Bündelung der zersplitterten deutschen Datenschutzaufsicht.\n\nAuf EU-Ebene liegt mit dem „Digital Omnibus“ seit November 2025 ein Vorschlag der EU-Kommission vor, der auch Änderungen an der DSGVO vorsieht. Beschlossen ist er nicht, er befindet sich im Gesetzgebungsverfahren.\n\nFür den Mittelstand heißt das: Die geltenden Pflichten bleiben vorerst unverändert. Wer Cloud- oder KI-Dienste auswählt, sollte auf Anbieter setzen, die Dokumentation und Auftragsverarbeitung sauber abbilden. Das spart genau den Aufwand, den die befragten Unternehmen kritisieren.\n\nRedaktioneller Hinweis: Dass der Digital Omnibus noch nicht verabschiedet ist, bestätigen Bitkom (September 2026) und netzpolitik.org. Den genauen aktuellen Verhandlungsstand (Positionen von Rat und Parlament, Trilog) konnten wir nicht aus zwei aktuellen Quellen bestätigen.",
    source: "Bitkom, September 2026",
  },
  {
    slug: "opendesk-partnerprogramm-private-dienstleister",
    title: "openDesk öffnet Partnerprogramm für private Cloud- und IT-Dienstleister",
    kicker: "Seit dem 23. September 2026 können erstmals auch privatwirtschaftliche Anbieter openDesk offiziell als Cloud-Service oder Integrationsleistung anbieten.",
    date: "2. Oktober 2026",
    publishDate: "2026-10-02",
    body: "Unternehmen können openDesk künftig über akkreditierte private Dienstleister beziehen: Das Zentrum Digitale Souveränität (ZenDiS) hat am 23. September 2026 ein Partnerprogramm gestartet, das sich erstmals ausdrücklich an privatwirtschaftliche Cloud-Anbieter und IT-Dienstleister richtet. Bisher lief die souveräne Office- und Kollaborationssuite vor allem über öffentliche IT-Dienstleister.\n\nZum Start gibt es drei Kategorien. „Official Distributors“ beliefern Cloud-Provider und IT-Händler. „Approved Sovereign Service Provider“ bieten openDesk als SaaS an und müssen dafür laut ZenDiS ein BSI-C5-Testat und SEAL-Level 3 nachweisen. „Approved System Integrators“ übernehmen On-Premises-Installationen und brauchen belegbare Open-Source- und Kubernetes-Erfahrung. Eine Kategorie für Beratungspartner soll in den kommenden Wochen folgen. Für die „Approved“-Stufen gibt es ein offizielles Akkreditierungsverfahren, da ZenDiS vollständig in Bundesbesitz ist.\n\nZenDiS begründet den Schritt mit der anhaltend hohen Nachfrage aus Verwaltung und Privatwirtschaft seit dem Marktstart von openDesk im Oktober 2024. Damit ist das Programm, dessen Start ZenDiS im Sommer für den Herbst angekündigt hatte, jetzt tatsächlich offen für Bewerbungen.\n\nFür mittelständische Unternehmen heißt das: Wer eine Alternative zu Microsoft 365 sucht, kann openDesk nun über geprüfte Partner mit definierten Sicherheitsnachweisen betreiben lassen. Vor einer Entscheidung lohnt sich trotzdem der Blick darauf, welche Partnerkategorie ein Anbieter tatsächlich erfüllt.",
    source: "ZenDiS / openDesk, September 2026",
  },
  {
    slug: "opendesk-signaturschluessel-update-1-19-0",
    title: "Signaturschlüssel offengelegt: openDesk-Betreiber sollten auf Version 1.19.0 wechseln",
    kicker: "Bei openDesk sind die Schlüssel zur Signatur von Container-Images und Helm-Charts versehentlich öffentlich geworden – die inzwischen erschienene Version 1.19.0 behebt das.",
    date: "30. September 2026",
    publishDate: "2026-09-30",
    body: "Wer openDesk selbst betreibt, sollte zeitnah auf die inzwischen veröffentlichte Version 1.19.0 aktualisieren und Komponenten bis dahin nur aus offiziellen Quellen beziehen. Das empfiehlt das openDesk-Team in einem Sicherheitshinweis vom 23. September 2026. Bei der Modernisierung der CI/CD-Pipeline wurden die Schlüssel, mit denen Container-Images und Helm-Charts signiert werden, versehentlich offengelegt.\n\nBetroffen sind laut openDesk alle Versionen vor 1.19.0; die neue Version nutzt neu erzeugte Schlüssel. Hinweise auf eine tatsächliche Kompromittierung gibt es nach Angaben des Projekts bisher nicht. Das Risiko: Dritte könnten mit dem alten Schlüssel manipulierte Pakete so signieren, dass sie echt wirken.\n\nDer Vorfall fällt in einen Monat mit vielen Updates. Allein im September erschienen mit 1.18.1, 1.18.2 und 1.17.4 drei Wartungs- und Sicherheitsreleases, zwei davon wegen einer Nextcloud-Schwachstelle.\n\nFür Unternehmen zeigt der Fall, was souveräner Betrieb praktisch bedeutet: Open-Source-Software macht unabhängig von US-Anbietern, verlagert aber die Verantwortung für Patch-Management und Lieferkettensicherheit ins eigene Haus oder zum Dienstleister. Wer openDesk, Nextcloud oder vergleichbare Lösungen einsetzt, braucht einen festen Update-Prozess und sollte Signaturprüfungen nicht nur aktivieren, sondern auch überwachen.",
    source: "openDesk, September 2026; openDesk-Blog (Release Notes 1.19.0, 26. September 2026)",
  },
  {
    slug: "bmds-foerderung-digital-tech-to-product-kmu",
    title: "Bis zu 5 Millionen Euro: BMDS fördert souveräne Digitalprodukte von KMU",
    kicker: "Mit „Digital-Tech-to-Product“ fördert das Bundesdigitalministerium marktnahe Entwicklungen in KI, Daten, Cybersicherheit und Cloud – Projektskizzen bis 11. Oktober 2026.",
    date: "28. September 2026",
    publishDate: "2026-09-28",
    body: "KMU und Start-ups können beim Bundesministerium für Digitales und Staatsmodernisierung (BMDS) bis zu 5 Millionen Euro pro Projekt für die Entwicklung souveräner digitaler Produkte beantragen. Das Förderprogramm „Digital-Tech-to-Product“ startete am 17. September 2026. Projektskizzen für den ersten Förderaufruf müssen bis zum 11. Oktober 2026 eingereicht werden.\n\nGefördert werden vier Technologiefelder: Künstliche Intelligenz, Datenökosysteme, Cybersicherheit und Kryptografie sowie Cloud- und Edge-Computing. Im Cloud-Bereich nennt das BMDS unter anderem interoperable Cloud-Stacks, europäische Lieferketten und Confidential Computing. Die Technologien sollen bis zur Marktreife (Technology Readiness Level 8) entwickelt werden. Laut dem Start-up-Portal Startbase ist die geringere Abhängigkeit von außereuropäischen Anbietern ein zentrales Auswahlkriterium.\n\nDas Verfahren ist zweistufig und läuft über das Portal easy-Online, Projektträger ist TÜV Rheinland. Die Projekte dauern höchstens 24 Monate und starten frühestens am 1. Januar 2027. Die Förderquote hängt von Projektart und Antragsteller ab.\n\nFür Mittelständler, die eigene Software oder Cloud-Dienste entwickeln, ist das Programm eine Chance, Souveränität als Produktmerkmal zu finanzieren. Die knappe Frist spricht dafür, jetzt zu prüfen, ob ein Vorhaben passt.",
    source: "BMDS, September 2026",
  },
  {
    slug: "bitkom-souveraenitaets-kriterien-eu-vergaberecht",
    title: "Bitkom fordert klare Souveränitäts-Kriterien bei EU-Vergaberechtsreform",
    kicker: "Bitkom: Digitale Souveränität entscheidet sich auch beim größten Kunden Europas – dem Staat.",
    date: "25. September 2026",
    publishDate: "2026-09-25",
    body: "Der Digitalverband Bitkom hat die von der EU-Kommission vorgeschlagene Reform des digitalen Vergaberechts grundsätzlich begrüßt, fordert aber europaweit einheitliche Kriterien für digitale Souveränität bei öffentlichen Ausschreibungen. Bitkom-Präsident Ralf Wintergerst wird mit der Aussage zitiert, ob Europa digital souveräner werde, entscheide sich auch am Beschaffungsverhalten der öffentlichen Hand als Großkunde. Der Verband mahnt, die Reform müsse genutzt werden, um praxistaugliche Standards für die Resilienz staatlicher Institutionen zu verankern – uneinheitliche nationale Kriterien würden sonst Rechtsunsicherheit schaffen und eine sinnvolle Abwägung von Aufwand und Nutzen erschweren.\n\nFür Unternehmen, die öffentliche Aufträge anstreben oder mit der öffentlichen Hand zusammenarbeiten, ist das ein Hinweis darauf, dass sich die Kriterienlandschaft für \"digitale Souveränität als Vergabekriterium\" in den kommenden Monaten weiter ausdifferenzieren dürfte – mit noch nicht absehbarem Ausgang der Verhandlungen.",
    source: "Bitkom e. V., Pressemitteilung, ca. 8.–12. September 2026",
  },
  {
    slug: "deutschland-digital-commons-edic-zendis",
    title: "Deutschland offiziell im europäischen Digital-Commons-Konsortium – mit ZenDiS-Beteiligung",
    kicker: "Deutschland ist jetzt offiziell Teil des europäischen Digital Commons EDIC – mit Unterstützung von ZenDiS.",
    date: "21. September 2026",
    publishDate: "2026-09-21",
    body: "Das Bundesministerium für Digitales und Staatsmodernisierung (BMDS) hat am 16. September 2026 bekräftigt, dass Deutschland gemeinsam mit Frankreich, den Niederlanden und Italien Gründungsmitglied des \"Digital Commons European Digital Infrastructure Consortium\" (Digital Commons EDIC) ist. Das Konsortium selbst geht auf den Souveränitätsgipfel vom November 2025 zurück und wurde von der EU-Kommission Ende Oktober 2025 formal genehmigt – die aktuelle Mitteilung ist daher keine Neugründung, sondern die offizielle Bekräftigung von Deutschlands Rolle und der praktischen Umsetzung.\n\nBemerkenswert für unseren Kontext: Laut BMDS werden die Sovereign Tech Agency und das Zentrum für Digitale Souveränität der öffentlichen Verwaltung (ZenDiS) das Konsortium mit ihrer Expertise unterstützen. Ziel des mit Sitz in Paris angesiedelten Konsortiums ist es, offene, interoperable digitale Infrastruktur europaweit zu bündeln – als Reaktion darauf, dass laut Digital-Strategy-Angaben der EU-Kommission über 80 % der in Europa verwendeten digitalen Technologien weiterhin von außereuropäischen Anbietern stammen. Luxemburg, Slowenien und Polen nehmen als Beobachter/Kandidaten teil.",
    source: "BMDS, Pressemitteilung 55/2026, 16. September 2026; Europäische Kommission, Digital Strategy, digital-strategy.ec.europa.eu",
  },
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
