<!--
DOCUMENT METADATA
Owner: @systems-architect (all sections except Design System)
Update trigger: System architecture changes, new integrations, component additions, design system updates
Update scope:
  @systems-architect: All sections except "Design System"
  @ui-ux-designer: "Design System" section only
  @frontend-developer: May append to "Frontend Architecture" (never overwrite)
Read by: All agents. Always read before making implementation decisions.
-->

# System Architecture

> Last updated: 2026-07-13
> Version: 1.1

---

## Overview

Phone Store Las Breñas es un sitio estático de una sola página (landing page) construido con Next.js y desplegado en Vercel. No tiene backend ni base de datos — todo el contenido está hardcodeado en el código, centralizado en `lib/site-config.ts`. El diseño original se generó con 21stdev; el código se mantiene directamente en este repo (ver ADR-002) y está pensado para reutilizarse como plantilla base en futuras landings de e-commerce local.

```
  [Browser]
      │
      ▼
[Vercel CDN] ──── [Next.js Static Export]
                  (HTML + CSS + JS pre-renderizado)
```

---

## Tech Stack

| Layer | Technology | Version | Why Chosen |
|-------|-----------|---------|------------|
| Frontend | Next.js | 16.x | App Router, SSG para performance y SEO |
| Styling | Tailwind CSS | 3.x | Utility classes |
| Backend | Ninguno | — | Sitio estático — no se requiere servidor |
| Database | Ninguna | — | Contenido hardcodeado en componentes |
| Hosting | Vercel | — | CDN global, deploy automático, analytics integrado |
| CI/CD | Vercel / GitHub | — | Push a main → deploy automático |

---

## System Components

### Frontend Architecture

El sitio es una landing page de una sola ruta (`/`), mantenida directamente en el repo.

**Routing**: Next.js App Router — una sola página en `app/page.tsx`, más metadata routes (`app/robots.ts`, `app/sitemap.ts`, `app/icon.tsx`, `app/opengraph-image.tsx`)

**State management**: Ninguno — sitio completamente estático, sin componentes cliente (`"use client"`)

**Component structure**:
```
components/
  WhatsAppFAB.tsx   # Botón flotante de WhatsApp
lib/
  site-config.ts    # Fuente única de verdad: identidad del negocio, WhatsApp, JSON-LD
```

**Data fetching**: Ninguno — todo el contenido es estático en los componentes y en `lib/site-config.ts`

---

### Backend Architecture

No aplica — sitio estático sin backend.

---

### Infrastructure

**Environments**:
| Environment | URL | Branch | Notes |
|-------------|-----|--------|-------|
| Production | [TBD — dominio pendiente] | `main` | Auto-deploy en merge |
| Local | `localhost:3000` | any | `pnpm dev` |

**CI/CD**: Vercel — deploy automático al hacer push a `main`. No hay pipeline de GitHub Actions configurado en v1.

---

## Data Flow

### Visita del usuario

```
1. Usuario busca en Google "celulares las breñas"
2. Google muestra el sitio (SEO local optimizado)
3. Usuario entra al sitio — Vercel CDN sirve el HTML estático
4. Usuario ve catálogo y precios
5. Usuario hace click en CTA de WhatsApp
6. WhatsApp se abre con mensaje pre-escrito a la tienda
```

---

## Design System

<!--
This section is owned by @ui-ux-designer.
Other agents: read-only. Do not modify.
-->

Estilo: profesional, premium, minimalista, inspirado en Apple.

### Color Tokens

Paleta Apple Store — minimalista, premium.

| Token | Value | Usage |
|-------|-------|-------|
| `color-text-primary` | `#1D1D1F` | Texto principal |
| `color-background` | `#F5F5F7` | Fondo general |
| `color-surface` | `#FFFFFF` | Cards, superficies elevadas |
| `color-accent` | `#0071E3` | Botones de acción, CTAs |
| `color-accent-hover` | `#0077ED` | Hover sobre botón de acción |

### Typography Scale

La fuente de Apple es SF Pro — la alternativa web más cercana es `system-ui` / `-apple-system` (ya incluida en Tailwind como `font-sans`).

### Spacing System

Definido por Tailwind CSS (base 4px).

---

## Security Architecture

Sin autenticación, formularios, ni datos de usuario — superficie de ataque mínima. Aun así, `next.config.ts` aplica headers de seguridad en producción (skipeados en dev porque Fast Refresh de Next inyecta `<style>` tags que un `style-src` estricto bloquearía):

| Header | Value | Purpose |
|--------|-------|---------|
| `Content-Security-Policy` | `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self'; ...` | Ver nota abajo sobre `script-src` |
| `X-Frame-Options` | `DENY` | Previene clickjacking |
| `X-Content-Type-Options` | `nosniff` | Previene MIME-sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limita fuga de referrer |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Deshabilita APIs sensibles no usadas |

**Nota sobre `script-src 'unsafe-inline'`**: es un trade-off deliberado, no un descuido. El App Router de Next.js inyecta scripts inline pequeños para hidratación/RSC payload; sin nonce (que exige renderizado dinámico por request vía middleware, contradiciendo la decisión de sitio 100% estático de ADR-001) o `unsafe-inline`, esos scripts del framework se bloquean silenciosamente — se verificó empíricamente con un hash CSP estricto. Como no hay inputs de usuario, formularios, ni contenido dinámico/user-controlled en la página, la superficie de XSS real que esto protegería es prácticamente nula. Si el sitio incorpora un formulario o contenido dinámico en el futuro, migrar al patrón nonce + middleware documentado en https://nextjs.org/docs/app/guides/content-security-policy.

---

## Performance Considerations

- Sitio pre-renderizado (SSG) — HTML listo en el CDN, sin latencia de servidor
- Imágenes deben estar optimizadas con `next/image` (WebP/AVIF, lazy loading)
- Target: LCP ≤ 2.5s en 4G

---

## Known Constraints and Technical Debt

| Item | Impact | Plan |
|------|--------|------|
| Dominio no definido | `siteConfig.url` usa un dominio placeholder (`.example.com`) | Actualizar en `lib/site-config.ts` cuando el cliente confirme |
| WhatsApp number es placeholder | Número simbólico +54 911 000-0000 en uso | Actualizar `siteConfig.whatsapp` en `lib/site-config.ts` cuando se confirme el número real |
| Faltan las imágenes reales (hero, catálogo, accesorios) | `next/image` + `alt` descriptivo (FR-008) ya están implementados, pero los archivos referenciados en `public/images/{hero,products,accessories}/` todavía no existen — se ven como imagen rota hasta que se suban | El usuario provee las fotos; ver los `README.md` dentro de cada subcarpeta de `public/images/` para nombres de archivo y specs exactas |
| Este cliente (Las Breñas) no concretó la compra | El contenido de este repo queda como instancia de ejemplo del template | Ver README § "Reusing this template" para clonar hacia un cliente nuevo |
