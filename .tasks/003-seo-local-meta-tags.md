---
id: "003"
title: "Implementar SEO local: title, meta description, structured data LocalBusiness"
status: "done"
area: "frontend"
agent: "@frontend-developer"
priority: "high"
created_at: "2026-03-28"
due_date: null
started_at: "2026-07-13"
completed_at: "2026-07-13"
prd_refs: ["FR-005", "FR-006", "FR-007", "FR-008"]
blocks: []
blocked_by: ["001", "002"]
---

## Description

Implementar todos los elementos de SEO local en el código Next.js usando los textos definidos en #002. Esto incluye el `<head>` con metadata, Open Graph tags, y el structured data de `LocalBusiness` en JSON-LD.

Todos los valores deben venir del output de #002 (CONTENT_STRATEGY.md). No inventar copy.

## Acceptance Criteria

- [x] `app/layout.tsx` tiene el `title` correcto con keyword local (`siteConfig.seoTitle`)
- [x] `meta name="description"` implementada (`siteConfig.description`)
- [x] Open Graph + Twitter tags implementados: `og:title`, `og:description`, `og:type`, `og:url`, `og:image` (generada dinámicamente), `twitter:card`
- [x] Structured data `LocalBusiness`/`ElectronicsStore` en JSON-LD implementado con: nombre, dirección (Las Breñas, Chaco), teléfono/WhatsApp
- [x] `lang="es-AR"` en el elemento `<html>` (via `siteConfig.locale`)
- [ ] Todas las imágenes tienen `alt` text descriptivo con keywords relevantes — no aplica todavía: no hay imágenes reales de producto, solo placeholders grises (ver Known Constraints en ARCHITECTURE.md)
- [ ] Verificar con Google Rich Results Test que el structured data es válido — pendiente de un dominio real para testear en producción

## Technical Notes

- Implementado vía Next.js Metadata API (`export const metadata` en `app/layout.tsx`), no `generateMetadata()` — no hace falta ser dinámico, todo sale de `lib/site-config.ts`
- El structured data va en un `<script type="application/ld+json">` renderizado directamente en `app/page.tsx`
- También se agregaron `app/robots.ts`, `app/sitemap.ts`, `app/icon.tsx` y `app/opengraph-image.tsx` (generados con `next/og`, sin necesidad de assets binarios)
- Dirección y teléfono siguen siendo placeholders — ver `lib/site-config.ts`
- Referencia: `docs/content/CONTENT_STRATEGY.md` → sección "Technical SEO Decisions"

## History

| Date | Agent / Human | Event |
|------|--------------|-------|
| 2026-03-28 | human | Task created |
| 2026-07-13 | claude | Implementado: metadata, JSON-LD, robots.ts, sitemap.ts, icon.tsx, opengraph-image.tsx — todos leyendo de lib/site-config.ts |
