---
id: "003"
title: "Implementar SEO local: title, meta description, structured data LocalBusiness"
status: "todo"
area: "frontend"
agent: "@frontend-developer"
priority: "high"
created_at: "2026-03-28"
due_date: null
started_at: null
completed_at: null
prd_refs: ["FR-005", "FR-006", "FR-007", "FR-008"]
blocks: []
blocked_by: ["001", "002"]
---

## Description

Implementar todos los elementos de SEO local en el código Next.js usando los textos definidos en #002. Esto incluye el `<head>` con metadata, Open Graph tags, y el structured data de `LocalBusiness` en JSON-LD.

Todos los valores deben venir del output de #002 (CONTENT_STRATEGY.md). No inventar copy.

## Acceptance Criteria

- [ ] `src/app/layout.tsx` (o `page.tsx`) tiene el `title` correcto con keyword local
- [ ] `meta name="description"` implementada con el texto aprobado en #002
- [ ] Open Graph tags implementados: `og:title`, `og:description`, `og:type`, `og:url`
- [ ] Structured data `LocalBusiness` en JSON-LD implementado con: nombre, dirección (Las Breñas, Chaco), teléfono/WhatsApp
- [ ] `lang="es-AR"` en el elemento `<html>`
- [ ] Todas las imágenes tienen `alt` text descriptivo con keywords relevantes
- [ ] Verificar con Google Rich Results Test que el structured data es válido

## Technical Notes

- Usar `generateMetadata()` de Next.js App Router para metadata dinámica si se necesita
- El structured data va en un `<script type="application/ld+json">` en el `<head>`
- Dirección y teléfono: usar placeholders si aún no están confirmados por el cliente (ver open questions en PRD.md)
- Referencia: `docs/content/CONTENT_STRATEGY.md` → sección "Technical SEO Decisions"

## History

| Date | Agent / Human | Event |
|------|--------------|-------|
| 2026-03-28 | human | Task created |
