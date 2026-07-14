/**
 * Single source of truth for this site's business identity, contact details,
 * and SEO metadata. This file is the one place to edit when reusing this
 * template for a different client/business — everything else (metadata,
 * JSON-LD, WhatsApp links, robots/sitemap) reads from here.
 */

export interface SiteAddress {
  street: string;
  locality: string;
  region: string;
  postalCode?: string;
  /** ISO 3166-1 alpha-2 country code, e.g. "AR" */
  country: string;
}

export interface SiteConfig {
  businessName: string;
  shortName: string;
  /** On-page H1 — benefit-led, can differ from the SEO title tag. */
  tagline: string;
  /** <title> tag — keyword + location led, ~50-60 chars (FR-005). */
  seoTitle: string;
  description: string;
  /** Canonical production URL, no trailing slash. */
  url: string;
  /** BCP 47 locale, e.g. "es-AR" */
  locale: string;
  themeColor: string;
  address: SiteAddress;
  whatsapp: {
    /** E.164 number without the leading "+", as required by wa.me links. */
    number: string;
    /** Human-readable formatted number, shown in UI copy (e.g. footer). */
    displayNumber: string;
    defaultMessage: string;
  };
  keywords: string[];
  /** schema.org type for the LocalBusiness JSON-LD — swap per vertical (e.g. "ElectronicsStore", "Restaurant"). */
  schemaType: string;
}

export const siteConfig: SiteConfig = {
  businessName: "Phone Store",
  shortName: "Phone Store",
  tagline: "Los mejores celulares en Las Breñas",
  seoTitle: "Celulares en Las Breñas, Chaco | Phone Store",
  description:
    "Comprá tu celular en Las Breñas, Chaco. iPhone, Samsung y más. Consultá disponibilidad y precios por WhatsApp.",
  // TODO: reemplazar por el dominio final cuando el cliente lo confirme.
  url: "https://phone-store-las-brenas.example.com",
  locale: "es-AR",
  themeColor: "#0071E3",
  address: {
    street: "Mac Lean 1756",
    locality: "Las Breñas",
    region: "Chaco",
    country: "AR",
  },
  whatsapp: {
    // TODO: placeholder — reemplazar por el número real de la tienda antes de lanzar.
    number: "5491100000000",
    displayNumber: "+54 911 000-0000",
    defaultMessage: "Hola, me interesa consultar sobre un celular",
  },
  keywords: [
    "celulares las breñas",
    "venta de celulares las breñas",
    "iphone chaco",
    "samsung chaco",
    "celulares las breñas chaco",
    "tienda de celulares las breñas",
  ],
  schemaType: "ElectronicsStore",
};

/** Builds a wa.me link with an optional pre-filled message (defaults to the site's standard greeting). */
export function buildWhatsAppUrl(message: string = siteConfig.whatsapp.defaultMessage): string {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** LocalBusiness structured data (schema.org) for the homepage, per PRD FR-007. */
export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": siteConfig.schemaType,
    name: siteConfig.businessName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+${siteConfig.whatsapp.number}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      ...(siteConfig.address.postalCode ? { postalCode: siteConfig.address.postalCode } : {}),
      addressCountry: siteConfig.address.country,
    },
  } as const;
}
