---
id: "006"
title: "Performance audit: Core Web Vitals y optimización de imágenes"
status: "todo"
area: "frontend"
agent: "@frontend-developer"
priority: "normal"
created_at: "2026-03-28"
due_date: null
started_at: null
completed_at: null
prd_refs: ["FR-010", "FR-011"]
blocks: []
blocked_by: ["001", "003", "004"]
---

## Description

Correr un audit de performance (PageSpeed Insights / Lighthouse) en el sitio desplegado y asegurarse de que cumpla los targets de Core Web Vitals definidos en el PRD. Optimizar imágenes si es necesario.

## Acceptance Criteria

- [ ] PageSpeed Insights mobile score ≥ 80
- [ ] LCP ≤ 2.5s en PageSpeed Insights (mobile, conexión 4G simulada)
- [ ] Todas las imágenes usan `next/image` (WebP/AVIF automático, lazy loading)
- [ ] No hay imágenes sin dimensiones explícitas (evita layout shift)
- [ ] CLS (Cumulative Layout Shift) ≤ 0.1

## Technical Notes

- Correr el audit en el deploy de Vercel (no en localhost)
- Herramienta: https://pagespeed.web.dev/
- Si las imágenes del catálogo son pesadas, considerar comprimirlas con squoosh.app antes de subir
- `next/image` maneja WebP/AVIF y lazy loading automáticamente — solo asegurarse de que se está usando

## History

| Date | Agent / Human | Event |
|------|--------------|-------|
| 2026-03-28 | human | Task created |
