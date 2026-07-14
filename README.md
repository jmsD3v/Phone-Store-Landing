<div align="center">

# Phone Store

**Landing page de venta de celulares para una tienda local en Las Breñas, Chaco.**
Plantilla base reutilizable para futuras landings de e-commerce local.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/License-Propietario-lightgrey)](#license)

</div>

---

## Overview

Phone Store es una landing page profesional para una tienda de celulares ubicada en Las Breñas, Chaco, Argentina. El sitio permite a los clientes locales explorar modelos disponibles y precios, y contactar directamente por WhatsApp — sin depender de redes sociales.

El sitio está optimizado para búsquedas locales en Google (SEO local para "celulares Las Breñas", "iPhone Chaco", "Samsung Chaco") y está diseñado con una estética premium y minimalista inspirada en Apple, orientada a generar confianza.

El diseño original se generó con [21stdev](https://21st.dev); el código se mantiene directamente en este repo. Toda la identidad del negocio (nombre, dirección, WhatsApp, copy SEO) vive en un único archivo — [`lib/site-config.ts`](lib/site-config.ts) — para que el mismo esqueleto se pueda reutilizar rápido en el próximo cliente. Ver [Reusing this template](#reusing-this-template).

## Features

- **Local SEO** — metadata completa (title, OG, Twitter card, canonical), structured data `LocalBusiness` en JSON-LD, `robots.txt` y `sitemap.xml` generados automáticamente
- **CTA de WhatsApp** — mensaje pre-escrito, botón flotante + integrado en cada card del catálogo
- **100% estático (SSG)** — sin backend, sin base de datos, deploy instantáneo en Vercel
- **Security headers** — CSP, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` (ver [ARCHITECTURE.md](docs/technical/ARCHITECTURE.md#security-architecture))
- **Favicon + OG image generados en código** — sin assets binarios, vía `next/og`
- **Mobile-first**, responsive desde 375px

---

## Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Frontend | Next.js 16 (App Router) | SSG estático |
| Styling | Tailwind CSS | Utility classes, sin CSS-in-JS |
| Backend | Ninguno | Sitio estático |
| Database | Ninguna | Contenido hardcodeado |
| Hosting | Vercel | Deploy automático desde `main` |
| CI/CD | Vercel / GitHub integration | |

---

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Installation

```bash
git clone https://github.com/jmsD3v/Phone-Store-Landing.git
cd Phone-Store-Landing
pnpm install
```

### Running Locally

```bash
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el browser.

### Build & Lint

```bash
pnpm build
pnpm lint
```

---

## Project Structure

```
Phone-Store-Landing/
├── app/                    # Next.js App Router — page, layout, metadata routes
│   ├── page.tsx            # Homepage (hero, catálogo, accesorios, footer)
│   ├── layout.tsx          # Root layout + metadata
│   ├── icon.tsx             # Favicon generado (next/og)
│   ├── opengraph-image.tsx  # OG image generada (next/og)
│   ├── robots.ts            # robots.txt
│   └── sitemap.ts           # sitemap.xml
├── components/             # UI components (WhatsAppFAB, etc.)
├── lib/
│   └── site-config.ts      # Fuente única de verdad: negocio, WhatsApp, JSON-LD
├── public/images/
│   ├── hero/                # Imagen principal del hero
│   ├── products/            # Fotos del catálogo
│   └── accessories/         # Fotos de accesorios
├── docs/
│   ├── content/             # Content strategy, brand voice, keywords
│   ├── technical/            # Architecture, decisions
│   └── user/                 # User guide
├── .claude/agents/          # Claude Code specialist agents
├── PRD.md                   # Product requirements (fuente de verdad)
├── TODO.md                  # Backlog del proyecto
└── CLAUDE.md                # Instrucciones para Claude
```

---

## Reusing this template

Para un nuevo cliente de e-commerce local:

1. Editar [`lib/site-config.ts`](lib/site-config.ts) — nombre del negocio, tagline, dirección, número de WhatsApp, keywords y `schemaType` (schema.org).
2. Reemplazar el catálogo de productos en `app/page.tsx` (array `PHONE_MODELS`, o renombrar el tipo/array al dominio del cliente) y la sección `ACCESSORIES`.
3. Poner las fotos reales en `public/images/{hero,products,accessories}/` — cada subcarpeta tiene su propio `README.md` con nombres de archivo, formato y dimensiones exactas.
4. Ajustar los tokens de color en `tailwind.config.ts` y `app/globals.css` si la marca no usa la paleta Apple Store.
5. `pnpm build` y `pnpm lint` deben pasar limpios antes de deployar.

No hay variables de entorno requeridas — todo el contenido del sitio es estático y vive en el código fuente (ver ADR-002 en [`docs/technical/DECISIONS.md`](docs/technical/DECISIONS.md)).

---

## Deployment

El sitio se despliega automáticamente en Vercel al hacer merge a `main`.

- **Production**: _TBD — dominio pendiente de definición_

Manual:
```bash
pnpm build
vercel --prod
```

---

## License

Propietario — Juan Manuel Silva
