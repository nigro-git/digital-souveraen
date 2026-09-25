/**
 * Quelle: G:\Meine Ablage\+Digitale-Souveraenität+\Content-Produktion\Blog\Themen\Listicles\artikel-europaeische-cloud-anbieter-v3.md
 * Typ: Listicle · Cluster: Tools & Alternativen · Status: lebend (Prüf-Kadenz alle 6 Monate) · Stand: September 2026
 */

export const meta = {
  title: "Europäische Cloud-Anbieter im Überblick: IONOS, STACKIT & Co.",
  answerFirst:
    "Diese Übersicht vergleicht sechs europäische Cloud-Infrastruktur-Anbieter, die für DACH-Unternehmen ohne US-Mutterkonzern und ohne direkte CLOUD-Act-Exposition infrage kommen: Hetzner, IONOS Cloud, OVHcloud, Scaleway, STACKIT und T-Systems Open Telekom Cloud.",
  tags: { cluster: "Tools & Alternativen", format: "Listicle" },
};

export const scope = {
  heading: "Was diese Liste abdeckt – und was nicht",
  absaetze: [
    { label: "Nicht abgedeckt:", text: "reine KI-Modell-Hoster, Anbieter ohne eigene Infrastruktur (reine Reseller), sowie US-Hyperscaler mit „Sovereign Cloud“-Angeboten (AWS European Sovereign Cloud, Microsoft Cloud for Sovereignty) – diese unterliegen trotz EU-Rechenzentren weiterhin dem US CLOUD Act, solange der Mutterkonzern in den USA sitzt." },
    { label: "Sortierung:", text: "alphabetisch, keine Rangfolge." },
    { label: "Methodik-Hinweis zu Zertifizierungen:", text: "Zertifizierungen (C5, SecNumCloud u. a.) werden in dieser Liste als Compliance-/Vertrauenssignal ausgewiesen, nicht als alleiniger Nachweis digitaler Souveränität. Auch Brancheninitiativen wie GAIA-X sind kein eindeutiges Souveränitätssignal: Der Branchenverband CISPE kritisiert, dass auch AWS, Azure und Google Cloud GAIA-X-Mitglieder sind („Trojanisches Pferd“-Kritik) – eine Mitgliedschaft allein beweist keine Souveränität." },
    { label: "Methodik-Hinweis zu fehlenden Funden:", text: "Wo im Rahmen dieser Recherche kein relevanter Trade-off oder keine Zertifizierung gefunden wurde, wird das nicht als Einschränkung des Anbieters dargestellt – ein Recherche-Fund-Defizit ist etwas anderes als ein tatsächlicher Anbieter-Nachteil. Wo ein Anbieter keinen recherchierten, belegbaren Trade-off hat, entfällt der Abschnitt „Trade-offs“ für diesen Eintrag ersatzlos, statt einen künstlichen Negativpunkt zu erzeugen." },
  ],
};

export const scan = {
  heading: "Die sechs Anbieter auf einen Blick",
  caption: "Die Spalte „Verfügbare Datenregionen DE/EU“ beantwortet ausschließlich: Kann ich meine Daten gezielt in Deutschland und/oder der EU halten? Globale Präsenz und weitere Standorte stehen im technischen Profil, nicht hier – beide Angaben messen unterschiedliche Dinge.",
  headers: ["Anbieter", "Konzernsitz/-hoheit", "Verfügbare Datenregionen DE/EU", "Relevante Zertifizierungen", "Servicebreite/Managed-Grad", "Besonders geeignet für"],
  rows: [
    ["Hetzner", "Deutschland, Familienunternehmen", "Deutschland (Nürnberg, Falkenstein)", "– (kein Nachweis identifiziert)", "Schlank, wenig Managed Services", "Teams mit eigener Betriebskompetenz, hohe Kostensensibilität"],
    ["IONOS Cloud", "Deutschland, Mehrheit United Internet AG", "Deutschland (Frankfurt)", "BSI C5 Type 1, ISO 27001", "Mittel, plus KI-Modell-Hub", "Zertifizierungsnachweis + KI-Workloads mit Datenkontrolle"],
    ["OVHcloud", "Frankreich, börsennotiert (Euronext Paris)", "EU-weit verfügbar (u. a. Frankreich, Deutschland)", "SecNumCloud (FR-Standard)", "Breit, viele Managed-Optionen", "Regulierte Großunternehmen, globale Präsenz nötig"],
    ["Scaleway", "Frankreich, Teil Iliad Group", "Frankreich, Niederlande, Polen", "– (kein Nachweis identifiziert)", "Mittel, entwicklerorientiert", "Entwicklerteams, KI/GPU-Workloads"],
    ["STACKIT", "Deutschland, Teil Schwarz-Gruppe", "Deutschland, Österreich", "– (kein Nachweis identifiziert)", "Breit, eigener Full-Stack", "Enterprise/öffentlicher Sektor, Partnerschafts-Ökosystem"],
    ["T-Systems Open Telekom Cloud", "Deutschland, Deutsche Telekom", "Deutschland", "– (kein Nachweis identifiziert)", "Breit, inkl. KI Foundation Services", "Breites KI-Modellangebot unter deutscher Konzernhoheit"],
  ],
};

export const profile = {
  heading: "Die sechs Anbieter im Detail",
  entries: [
    {
      name: "Hetzner",
      fields: [
        { label: "Kurzprofil", text: "Deutsches Familienunternehmen, seit fast drei Jahrzehnten am Markt, bekannt für aggressive Preise bei Rechenleistung." },
        { label: "Souveränitätsprofil", text: "Vollständig in deutscher Hand, keine ausländische Konzernmutter. Haupt-Rechenzentren in Nürnberg und Falkenstein." },
        { label: "Technisches & kommerzielles Profil", text: "Vier Server-Familien (Shared/Dedicated vCPU), dedizierte Server, S3-kompatibler Objektspeicher, Managed Kubernetes mit kostenloser Control Plane. Kein Managed-Database-Service. Zusätzliche Standorte auch außerhalb der EU (Helsinki, USA, Singapur) für internationale Workloads. Laut unabhängigem Benchmark 2026 rund 14-fach besseres Preis-Leistungs-Verhältnis als vergleichbare AWS-Instanzen." },
        { label: "Geeignet für", text: "Durch das schlankere Managed-Service-Angebot setzt Hetzner mehr eigene Betriebskompetenz voraus. Für Teams mit vorhandenen DevOps-Ressourcen kann das in Verbindung mit den vergleichsweise niedrigen Infrastrukturpreisen attraktiv sein – für Teams ohne solche Ressourcen bedeutet derselbe Umstand einen höheren Einstiegsaufwand." },
        { label: "Trade-offs & Einschränkungen", text: "Deutlich schlankeres Angebot an Managed Services im Vergleich zu OVHcloud oder STACKIT – wer diese Leistungen braucht, muss sie selbst aufbauen oder zukaufen." },
      ],
    },
    {
      name: "IONOS Cloud",
      fields: [
        { label: "Kurzprofil", text: "IONOS Group SE, mehrheitlich im Besitz der United Internet AG, ohne ausländischen Mutterkonzern." },
        { label: "Souveränitätsprofil", text: "Erster deutscher Cloud-Anbieter mit BSI C5 Type 1 + ISO 27001 (seit November 2023). Neues Frankfurter Rechenzentrum (2025), direkt an DE-CIX angebunden, Datenverarbeitung vollständig innerhalb Deutschlands." },
        { label: "Technisches & kommerzielles Profil", text: "AI Model Hub mit Open-Source-Modellen, dedizierte GPU-VMs (NVIDIA H200), stundengenaue Abrechnung ohne Mindestlaufzeit. Hostet u. a. Noxtua, ein souveränes Legal-AI-Angebot." },
        { label: "Geeignet für", text: "Der bestätigte BSI-C5-Nachweis in Kombination mit einem dedizierten KI-Angebot bedeutet, dass sich Zertifizierungsanforderung und KI-Workload-Bedarf hier gleichzeitig bedienen lassen, ohne Kompromisse bei der Datenkontrolle eingehen zu müssen." },
      ],
    },
    {
      name: "OVHcloud",
      fields: [
        { label: "Kurzprofil", text: "Französisches Unternehmen (gegründet 1999, Roubaix), börsennotiert an der Euronext Paris, größter europäischer Cloud-Anbieter nach Infrastrukturumfang." },
        { label: "Souveränitätsprofil", text: "46 Rechenzentren auf vier Kontinenten, 1,6 Millionen Kunden, SecNumCloud-Zertifizierung (französischer Standard) für regulierte Branchen." },
        { label: "Technisches & kommerzielles Profil", text: "Breites Portfolio von Managed-Datenbanken über Kubernetes bis VMware-basierte Private Cloud. Rezensenten auf G2 bewerten OVHcloud im direkten Vergleich stark bei Zertifizierungstiefe und globaler Reichweite." },
        { label: "Geeignet für", text: "Die Kombination aus SecNumCloud-Zertifizierung und der größten Infrastrukturbreite der sechs Optionen deckt regulatorische Anforderungen und internationale Skalierung gleichzeitig ab – relevant für regulierte Großunternehmen (Finanzwesen, Gesundheitswesen, öffentliche Verwaltung), die beides gleichzeitig brauchen." },
        { label: "Trade-offs & Einschränkungen", text: "Souveränität ist nicht gleichbedeutend mit Resilienz. Der Brand im OVHcloud-Rechenzentrum Straßburg (SBG2) im März 2021 zeigte, dass auch ein souveräner Anbieter Betriebsrisiken hat, die unabhängig von der Eigentümerfrage bewertet werden müssen." },
      ],
    },
    {
      name: "Scaleway",
      fields: [
        { label: "Kurzprofil", text: "Teil der Iliad Group (französischer Telekommunikationskonzern), Sitz Paris." },
        { label: "Souveränitätsprofil", text: "Französische Konzernhoheit, Rechenzentren in Paris, Amsterdam, Warschau." },
        { label: "Technisches & kommerzielles Profil", text: "Managed Kubernetes (Kapsule), wachsende GPU-Flotte für KI-Training/Inference, laut unabhängigem Benchmark (Februar 2026) rund 4,8-fach besseres Preis-Leistungs-Verhältnis als AWS, kostenloser Egress wo Hyperscaler Gebühren verlangen. Rezensenten auf G2 bewerten Scaleway im direkten Vergleich stark bei Bedienbarkeit und Support-Qualität." },
        { label: "Geeignet für", text: "Moderne Entwicklerwerkzeuge, ein wachsendes GPU-Angebot, kostenloser Egress und eine laut Nutzerbewertungen gute Bedienbarkeit senken die Einstiegshürden gerade für Entwicklerteams und SaaS-Unternehmen mit Kubernetes-, Serverless- oder KI-GPU-Bedarf." },
        { label: "Trade-offs & Einschränkungen", text: "Eine unabhängige Analyse (Xomnia, 2025) hat festgestellt, dass Scaleway für die Infrastruktur der Management-Konsole teilweise US-basierte Dienste nutzt – ein Beispiel dafür, dass „europäischer Hauptsitz“ allein die tatsächliche technische Souveränität nicht vollständig garantiert. Vor dem Einsatz für hochsensible Workloads gezielt prüfen." },
      ],
    },
    {
      name: "STACKIT",
      fields: [
        { label: "Kurzprofil", text: "Betrieben von der Schwarz Digits Cloud GmbH & Co. KG (Umfirmierung 2026, zuvor STACKIT GmbH & Co. KG), Teil der Schwarz-Gruppe (Lidl, Kaufland)." },
        { label: "Souveränitätsprofil", text: "Nicht von externen Investoren abhängig, vollständig europäische Konzernhoheit. 7 Rechenzentren in Deutschland und Österreich. Von der Europäischen Kommission im April 2026 als einer von vier europäischen Anbietern für die Cloud-Infrastruktur der EU-Institutionen ausgewählt; vom Bundesministerium für Digitales und Staatsmodernisierung im Mai 2026 als Infrastruktur-Grundlage seiner KI-Plattform genutzt." },
        { label: "Technisches & kommerzielles Profil", text: "Über 40 Cloud-Services in 13 Produktkategorien, kompletter eigener Technologie-Stack (kein Reseller fremder Infrastruktur). Kein B2C-Angebot – ausschließlich B2B/B2G." },
        { label: "Geeignet für", text: "Das EU-Kommissions- und Bundesministeriums-Mandat signalisiert Enterprise- und Public-Sector-Reife über die reine Eigentümerstruktur hinaus – relevant für Mittelstand und Enterprise im DACH-Raum, zunehmend auch für den öffentlichen Sektor selbst." },
      ],
    },
    {
      name: "T-Systems Open Telekom Cloud",
      fields: [
        { label: "Kurzprofil", text: "Cloud-Sparte der Deutschen Telekom." },
        { label: "Souveränitätsprofil", text: "Deutsche Konzernhoheit, Rechenzentren in Deutschland." },
        { label: "Technisches & kommerzielles Profil", text: "AI Foundation Services mit vergleichsweise breitem Modellkatalog, der neben europäischen/offenen Modellen auch GLM sowie proprietäre Modelle wie GPT und Claude „in europäischer Umgebung“ umfasst." },
        { label: "Geeignet für", text: "Das breiteste KI-Modellangebot der sechs Optionen in Kombination mit deutscher Konzernhoheit beantwortet die Datenstandort-Frage für die Hosting-Umgebung selbst – relevant für Unternehmen, die diese Modellbreite unter deutscher Konzernhoheit suchen und dafür einen höheren Einstiegspreis akzeptieren." },
        { label: "Trade-offs & Einschränkungen", text: "Das Hosting US-amerikanischer Modelle (GPT, Claude) „in europäischer Umgebung“ beantwortet die Datenstandort-Frage, aber nicht notwendigerweise alle Fragen zur Modell-Eigentümerschaft oder zu etwaigen vertraglichen Bindungen an die Modell-Hersteller – vor dem Einsatz für die eigene KI-Trainings-Ausschluss-Dimension gezielt nachfragen." },
      ],
    },
  ],
};

export const auswahl = {
  heading: "Auswahlhilfe",
  caption: "Verdichtet ausschließlich die oben dokumentierten Unterschiede. Mehrere Optionen pro Anforderung sind möglich und bewusst nicht künstlich auf einen Gewinner reduziert.",
  headers: ["Priorität", "Passende Option(en)", "Differenzierung zwischen den Optionen"],
  rows: [
    ["Maximale Kosteneffizienz, eigener Betrieb möglich", "Hetzner", "Einzige Option mit diesem Preis-Leistungs-Vorsprung laut Benchmark"],
    ["BSI-C5-Zertifizierungsnachweis erforderlich", "IONOS Cloud", "Einzige der sechs Optionen mit bestätigtem BSI C5 Type 1"],
    ["GPU-/KI-Workloads", "IONOS Cloud, Scaleway, T-Systems Open Telekom Cloud", "Unterscheiden sich in Modellbreite (T-Systems größter Katalog), Zertifizierung (IONOS) und Entwicklerfreundlichkeit/Preis-Leistung (Scaleway)"],
    ["Regulierte Großbranche, globale Präsenz nötig", "OVHcloud", "Einzige Option mit SecNumCloud-Zertifizierung + globaler 4-Kontinente-Präsenz"],
    ["Enterprise/öffentlicher Sektor mit Partnerschafts-Nachweis", "STACKIT", "EU-Kommissions- und Bundesministeriums-Mandat als Referenz"],
  ],
};

export const cta = {
  title: "Welcher Anbieter passt zu Ihrer Infrastruktur?",
  subtitle: "Wir helfen bei Auswahl und Einrichtung einer souveränen Cloud-Umgebung.",
  ctaLabel: "Gespräch anfragen",
  eyebrow: "Auswahl gemeinsam treffen",
};

export const related = {
  links: [{ label: "Alle Leistungen im Überblick", href: "/leistungen" }],
  upHref: "/blog",
  upLabel: "Alle Beiträge im Überblick",
};
