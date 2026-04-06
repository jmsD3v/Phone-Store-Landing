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

> Last updated: 2026-03-28
> Version: 1.0

---

## Overview

Phone Store Las Breñas es un sitio estático de una sola página (landing page) construido con Next.js y desplegado en Vercel. No tiene backend ni base de datos — todo el contenido está hardcodeado en el código. El frontend es exportado desde 21stdev y organizado/integrado por Claude.

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
| Frontend | Next.js | 14.x | Exportado desde 21stdev; SSG para performance y SEO |
| Styling | Tailwind CSS | 3.x | Incluido en el export de 21stdev |
| Backend | Ninguno | — | Sitio estático — no se requiere servidor |
| Database | Ninguna | — | Contenido hardcodeado en componentes |
| Hosting | Vercel | — | CDN global, deploy automático, analytics integrado |
| CI/CD | Vercel / GitHub | — | Push a main → deploy automático |

---

## System Components

### Frontend Architecture

El sitio es una landing page de una sola ruta (`/`). El código proviene del export de 21stdev y Claude lo integra sin crear UI nueva.

**Routing**: Next.js App Router — una sola página en `src/app/page.tsx`

**State management**: Ninguno — sitio completamente estático

**Component structure**:
```
src/components/
  ui/           # Primitivos del export de 21stdev (Button, etc.)
  sections/     # Secciones de la landing (Hero, Catalog, WhatsApp CTA)
```

**Data fetching**: Ninguno — todo el contenido es estático en los componentes

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

El design system proviene del export de 21stdev. Estilo: profesional, premium, minimalista, inspirado en Apple.

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

Definida por el export de 21stdev. La fuente de Apple es SF Pro — la alternativa web más cercana es `system-ui` / `-apple-system` (ya incluida en Tailwind como `font-sans`).

### Spacing System

Definido por Tailwind CSS (base 4px).

---

## Security Architecture

No aplica — sitio estático sin autenticación, formularios, ni datos de usuario.

---

## Performance Considerations

- Sitio pre-renderizado (SSG) — HTML listo en el CDN, sin latencia de servidor
- Imágenes deben estar optimizadas con `next/image` (WebP/AVIF, lazy loading)
- Target: LCP ≤ 2.5s en 4G

---

## Known Constraints and Technical Debt

| Item | Impact | Plan |
|------|--------|------|
| Dominio no definido | URLs de SEO no configurables | Actualizar cuando el cliente confirme |
| WhatsApp number es placeholder | Número simbólico +54 911 000-0000 en uso | Reemplazar con `NEXT_PUBLIC_WHATSAPP_NUMBER` cuando se confirme el número real |
