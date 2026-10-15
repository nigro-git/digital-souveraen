/**
 * Autor der Blogbeiträge. Später ein CMS-Feld (Collection "autoren").
 * Kurzprofil: Entwurf, von Nicolas Grossman freizugeben.
 */
export const author = {
  slug: "nicolas-grossman",
  name: "Nicolas Grossman",
  role: "Strategie · SEO/GEO · Digitale Systeme",
  jobTitle: "Digitale Strategie, SEO/GEO und Digitale Systeme",
  organization: { name: "DigiPub", url: "https://digipub.de" },
  location: "Berlin",
  linkedin: "https://www.linkedin.com/in/nicolas-grossman-591a4a156/",
  image: "/autor/nicolas-grossman-berlin-digital-strategie-seo.webp",
  imageSmall: "/autor/nicolas-grossman-berlin-digital-strategie-seo-160.webp",
  imageAlt: "Porträt von Nicolas Grossman, Berater für digitale Strategie, SEO/GEO und digitale Systeme bei DigiPub",
  bio: [
    "Nicolas Grossman berät Unternehmen zu digitaler Strategie, Informationsarchitektur und SEO/GEO. Bei DigiPub verbindet er Marke, Produkt und Wachstum mit digitalen Systemen, Automatisierung und dem Einsatz von KI.",
    "Auf digital-souveraen.com betrachtet er digitale Souveränität aus der Praxis: welche Abhängigkeiten ein Unternehmen hat, welche davon kritisch sind und wie sich der Umstieg auf europäische Alternativen schrittweise und prüfbar gestalten lässt.",
  ],
} as const;

export const authorUrl = `/autor/${author.slug}`;

export function authorPersonSchema(site: URL | string | undefined): object {
  const base = site ? String(site) : "https://www.digital-souveraen.com";
  return {
    "@type": "Person",
    name: author.name,
    url: new URL(authorUrl, base).href,
    image: new URL(author.image, base).href,
    jobTitle: author.jobTitle,
    worksFor: { "@type": "Organization", name: author.organization.name, url: author.organization.url },
    sameAs: [author.linkedin],
  };
}
