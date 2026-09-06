const ORGANISATION = {
  "@type": "ProfessionalService",
  name: "Digital Souverän",
  url: "https://www.digital-souveraen.com",
  parentOrganization: { "@type": "Organization", name: "DigiPub", url: "https://www.digipub.de" },
  founder: { "@type": "Person", name: "Nicolas Grossman" },
} as const;

export function buildBreadcrumbSchema(items: { label: string; url?: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

export function buildFaqPageSchema(items: { frage: string; antwort: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.frage,
      acceptedAnswer: { "@type": "Answer", text: f.antwort },
    })),
  };
}

export function buildHowToSchema(name: string, steps: { titel: string; text: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.titel,
      text: s.text,
    })),
  };
}

export function buildServiceSchema(opts: { name: string; description: string; url: string }): object {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    areaServed: "DACH",
    provider: ORGANISATION,
  };
}
