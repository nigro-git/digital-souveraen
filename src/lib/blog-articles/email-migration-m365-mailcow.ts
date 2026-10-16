/**
 * Quelle: G:\Meine Ablage\+Digitale-Souveraenität+\Content-Produktion\Blog\Themen\HowTo\artikel-howto-email-migration-m365-mailcow.md
 * Typ: Anleitung/How-To (Ablauf-Variante, Befehle stehen in der Herstellerdoku) · V2 · Cluster: Umsetzung & Migration · Stand der Recherche: 17.10.2026 · Status: Entwurf zur Freigabe
 *
 * Geprüft am 17.10.2026: Basic Auth für IMAP abgeschaltet (Microsoft Learn, Seite 16.7.2026); OAuth-Seite zuletzt aktualisiert 17.10.2025
 * (Erstellung 2021, daher die widersprüchlichen Daten); Mailcow-Sync-Jobs nur mit Benutzername/Passwort, Hinweis zum Deaktivieren bestätigt.
 * Kalender/Kontakte: nur Sekundärquellen (SOGo-Importanleitungen von Hochschulen/Hostern), keine Mailcow-Primärquelle.
 * Offen laut Redaktion:
 * - Optional: Praxisstellen (ab wann Selbstbetrieb lohnt, realistischer Zeitrahmen, wie Schritt 5 gelöst wird) aus eigenen Projekten ergänzen.
 * Schema: HowTo mit HowToStep (kein FAQ/QAPage). [Text](url) wird über lib/inline.ts als Link gerendert.
 */

export const meta = {
  title: "E-Mail von Microsoft 365 zu Mailcow migrieren: Ablauf und Stolpersteine",
  answerFirst:
    "Ein Umzug von Microsoft 365 auf Mailcow besteht aus zehn Schritten: Bestand erfassen, Server aufsetzen, DNS vorbereiten, Postfächer anlegen, Zugriff auf Microsoft 365 einrichten, Mails synchronisieren, Kalender und Geräte klären, MX-Eintrag umstellen, Clients umstellen und den Betrieb absichern. Der häufigste Stolperstein liegt bei Microsoft: Die Anmeldung per Benutzername und Passwort ist für IMAP dauerhaft abgeschaltet ([Microsoft Learn](https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/deprecation-of-basic-authentication-exchange-online)). Ein einfacher Sync-Job scheitert deshalb. Diese Anleitung zeigt den Ablauf und die Entscheidungen. Befehle und Menüpfade stehen in der Dokumentation von [Mailcow](https://docs.mailcow.email/) und [Microsoft](https://learn.microsoft.com/de-de/exchange/).",
  tags: {
    cluster: "Umsetzung & Migration",
    format: "Anleitung",
    entities: ["Microsoft 365", "Mailcow"],
  },
};

export const ausgangslage = {
  heading: "Passt Selbstbetrieb zu Ihnen?",
  rows: [
    { kriterium: "Eigene IT mit Linux- und DNS-Erfahrung, Zeit für Test und Parallelbetrieb", ohne: "Selbst umziehen, mit dieser Anleitung", mit: "" },
    { kriterium: "Wenige Postfächer, keine Serverkenntnisse im Haus", ohne: "Betrieb und Migration durch einen Partner ([E-Mail-Server](/leistungen/e-mail-server))", mit: "" },
    { kriterium: "Mehr als Mail soll umziehen (Dateien, Identität, Chat)", ohne: "Erst die Gesamtstrategie klären: [Co-Existenz statt Big-Bang](/blog/co-existenz-statt-big-bang)", mit: "" },
  ],
};

export const voraussetzungen = {
  heading: "Voraussetzungen",
  punkte: [
    {
      label: "Server",
      text: "Mailcow braucht laut Doku mindestens 6 GiB RAM plus 1 GiB Swap (8 GiB ab etwa 5 bis 10 Nutzern), 20 GiB Speicher ohne Mails und ein unterstütztes Linux wie Debian, Ubuntu, AlmaLinux oder Rocky Linux. NAS-Geräte und Container-Plattformen wie LXC sind ausgeschlossen. Die Mail-Ports müssen erreichbar sein, ausgehend vor allem TCP 25 ([Mailcow, Systemvoraussetzungen](https://docs.mailcow.email/getstarted/prerequisite-system/)).",
    },
    { label: "Zugänge", text: "Administratorzugang zu Microsoft 365 (Exchange Online, Entra) und zum DNS der Domain." },
    { label: "Bestandsliste", text: "alle Postfächer mit Größe, dazu Aliase, Weiterleitungen und geteilte Postfächer." },
    { label: "Zeit und Kosten", text: "Bis zur Umstellung laufen beide Systeme parallel, Lizenzen und Server kosten doppelt." },
  ],
};

export const schritte = {
  heading: "Die zehn Schritte",
  steps: [
    {
      titel: "Bestand erfassen",
      text: "Alle Adressen und Postfächer in einer Tabelle sammeln, auch Sammelpostfächer wie info@ oder rechnung@.",
      pruefen: "Die Liste stimmt mit dem Exchange-Admin-Center überein.",
    },
    {
      titel: "Mailcow aufsetzen",
      text: "Server bereitstellen und Mailcow nach der [Installationsanleitung](https://docs.mailcow.email/) installieren.",
      pruefen: "Die Weboberfläche ist per HTTPS erreichbar, die Anmeldung als Administrator klappt.",
      stolperstein: "Firewall-Regeln mit `ufw` oder `firewalld` machen laut Doku häufig Probleme, weil Docker eigene Regeln setzt.",
    },
    {
      titel: "DNS vorbereiten, ohne die Mail umzulenken",
      text: "Mailcow braucht A-Eintrag, passenden Reverse-DNS (PTR), SPF, DKIM, DMARC und für die automatische Client-Einrichtung Autodiscover ([Mailcow, DNS](https://docs.mailcow.email/getstarted/prerequisite-dns/)). Anlegen bzw. vorbereiten, aber noch nicht umstellen.",
      pruefen: "A-Eintrag, PTR und DKIM liefern die erwarteten Werte.",
      stolperstein: "Der SPF-Beispieleintrag der Mailcow-Doku (`v=spf1 mx a -all`) erlaubt nur den eigenen Server als Absender. Setzen Sie ihn zu früh, ist der Versand über Microsoft 365 nicht mehr autorisiert. Den MX-Eintrag ändern Sie erst in Schritt 9.",
    },
    {
      titel: "Domain und Postfächer in Mailcow anlegen",
      text: "Domain, Postfächer und Aliase aus Schritt 1 anlegen. Geteilte Postfächer als reguläres Postfach mit eigenem Passwort planen.",
      pruefen: "Eine Testmail zwischen zwei Mailcow-Postfächern kommt an.",
    },
    {
      titel: "Zugriff auf Microsoft 365 einrichten",
      text: "Mailcow muss sich an den Microsoft-365-Postfächern anmelden können, um Mails zu kopieren. Für viele Postfächer geht das nur über OAuth 2.0 mit einer in Microsoft Entra registrierten App, mit Zustimmung des Administrators und Zugriffsrecht auf jedes Postfach ([Microsoft Learn, IMAP mit OAuth](https://learn.microsoft.com/en-us/exchange/client-developer/legacy-protocols/how-to-authenticate-an-imap-pop-smtp-application-by-using-oauth)).",
      pruefen: "Der Zugriff auf ein Testpostfach funktioniert, bevor Sie weitere freigeben.",
      stolperstein:
        "Die Sync-Jobs von Mailcow sind für Benutzername und Passwort ausgelegt ([Mailcow, Sync Jobs](https://docs.mailcow.email/post_installation/firststeps-sync_jobs_migration/)). Eine native OAuth-Anmeldung ist laut den Mailcow-Entwicklern noch in Entwicklung, ohne Zeitplan ([Issue #6088](https://github.com/mailcow/mailcow-dockerized/issues/6088)). Wer viele Postfächer migriert, braucht dafür Zusatzwerkzeuge. Bei sehr wenigen Postfächern ist der Umzug über einen Mail-Client wie Thunderbird eine Alternative ([Issue #4985](https://github.com/mailcow/mailcow-dockerized/issues/4985)). Planen Sie für diesen Schritt einen eigenen Test ein, bevor Sie Nutzerpostfächer anfassen.",
    },
    {
      titel: "Ein Testpostfach synchronisieren",
      text: "Einen Sync-Job für ein einzelnes Postfach anlegen (Mailcow-Doku, Sync Jobs) und laufen lassen.",
      pruefen: "Ordner, Nachrichtenanzahl und drei Stichproben mit Anhang stimmen mit der Quelle überein. Ergebnis dokumentieren.",
    },
    {
      titel: "Alle Postfächer synchronisieren",
      text: "Die erste, vollständige Synchronisation läuft vor der Umstellung. Am Umstellungstag muss dann nur noch Neues nachgezogen werden.",
      pruefen: "Pro Postfach stimmen die Nachrichten in den Hauptordnern mit der Quelle überein, Abweichungen sind erklärt.",
      stolperstein: "Bei großen Postfächern können Verbindungen abbrechen. Laut einem Nutzer im Issue #4985 trennt der mitgelieferte imapsync nach einer Stunde, eine neuere Version behebt das.",
    },
    {
      titel: "Kalender, Kontakte und Geräte klären",
      text: "Der Mail-Sync überträgt keine Kalender und Kontakte. Dafür gibt es einen Export- und Importweg: Im Webmail SOGo lassen sich Kalender als ICS-Datei und Kontakte als vCard oder LDIF importieren. Mobilgeräte mit Exchange-Konto müssen neu eingerichtet werden. Regeln und Abwesenheitsnotizen werden neu angelegt.",
      pruefen: "Für jeden Nutzer steht fest, was mitkommt und wer es erledigt.",
    },
    {
      titel: "MX-Eintrag umstellen",
      text: "Letzten Sync laufen lassen, MX auf den Mailcow-Hostnamen ändern, SPF, DMARC und Autodiscover umstellen, danach nochmals synchronisieren.",
      pruefen: "Eine Mail von außen kommt in Mailcow an. Eine Mail von Mailcow nach außen kommt an und besteht SPF, DKIM und DMARC.",
      stolperstein: "Bis DNS-Caches abgelaufen sind, geht Post teils noch an Microsoft 365. Sync-Jobs nicht sofort abschalten.",
    },
    {
      titel: "Clients umstellen und Betrieb absichern",
      text: "Clients auf die Mailcow-Server umstellen, Sync-Jobs nach einer Übergangszeit deaktivieren (die Mailcow-Doku erinnert ausdrücklich daran), nicht mehr benötigte Microsoft-Lizenzen kündigen. Updates, Backup und Überwachung einer Person oder einem Dienstleister zuordnen.",
      pruefen: "Alle Nutzer arbeiten über Mailcow, ein Backup wurde einmal zurückgespielt, die Verantwortung ist dokumentiert.",
    },
  ],
};

export const probleme = {
  heading: "Wenn etwas nicht klappt",
  items: [
    { lead: "Anmeldung bei Microsoft schlägt fehl:", text: "Meist läuft noch eine Anmeldung mit Benutzername und Passwort. Sonst fehlen Zustimmung des Administrators oder das Zugriffsrecht auf genau dieses Postfach." },
    { lead: "Ausgehende Mails werden abgelehnt oder landen im Spam:", text: "PTR passt nicht zum Hostnamen, SPF autorisiert den neuen Server nicht oder ausgehend ist Port 25 gesperrt." },
    { lead: "Nachrichten fehlen:", text: "Anzahl je Ordner mit der Quelle vergleichen. Mails, die vor der Umstellung bei Microsoft ankamen, kommen nur mit einem weiteren Sync." },
    { lead: "Nutzer arbeiten im alten System weiter:", text: "In der Übergangszeit normal. Abschaltdatum nennen und einhalten." },
  ],
};

export const abschluss = {
  heading: "Wann ist die Migration abgeschlossen?",
  items: [
    "Alle Postfächer sind übertragen, Stichproben stimmen.",
    "MX zeigt auf Mailcow, Testmails kommen an und gehen raus, SPF, DKIM und DMARC bestehen.",
    "Alle Clients und Geräte laufen über Mailcow, Sync-Jobs sind beendet.",
    "Updates, Backup und Verantwortung sind festgelegt, ein Restore ist getestet.",
    "Nicht mehr benötigte Microsoft-Lizenzen sind gekündigt.",
  ],
};

export const cta = {
  title: "Sie wollen den Umzug nicht selbst durchführen?",
  subtitle: "Digital Souverän richtet Mailcow ein, migriert die Postfächer, begleitet den Parallelbetrieb und übergibt mit Monitoring.",
  ctaLabel: "E-Mail-Server-Einrichtung",
  href: "/leistungen/e-mail-server",
};

export const related = {
  links: [{ label: "Alle Leistungen im Überblick", href: "/leistungen" }],
  upHref: "/blog",
  upLabel: "Alle Beiträge im Überblick",
};
