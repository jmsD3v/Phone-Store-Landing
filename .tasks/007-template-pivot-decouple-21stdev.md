---
id: "007"
title: "Desacoplar de 21stdev, arreglar tooling, y sentar base de plantilla reutilizable"
status: "done"
area: "frontend"
agent: "claude"
priority: "high"
created_at: "2026-07-13"
due_date: null
started_at: "2026-07-13"
completed_at: "2026-07-13"
prd_refs: []
blocks: []
blocked_by: []
---

## Description

El cliente de esta landing (tienda de celulares en Las Breñas) no concretó la compra. En vez de dejar el repo como artefacto muerto, se decidió (ADR-002) desacoplarlo de la narrativa "export de 21stdev, no crear UI nueva" y convertirlo en la base para futuras landings de e-commerce local. Esta tarea agrupa el trabajo técnico de esa transición, hecho en una sola sesión.

## Acceptance Criteria

- [x] `pnpm lint` funciona (estaba roto: Next 16 eliminó `next lint` y no existía ningún `eslint.config.mjs`)
- [x] `pnpm build` compila limpio
- [x] Identidad del negocio centralizada en `lib/site-config.ts` (antes: número de WhatsApp hardcodeado y duplicado en 2 archivos)
- [x] SEO estructurado implementado (JSON-LD, OG/Twitter meta, robots.txt, sitemap.xml, favicon y OG image generados dinámicamente)
- [x] Headers de seguridad en `next.config.ts` (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- [x] Referencias activas a "21stdev" retiradas de README.md, CLAUDE.md, ARCHITECTURE.md, CONTENT_STRATEGY.md — se conservan solo en registros históricos (TODO.md #001, .tasks/001-*.md, y el cuerpo de ADR-001, que por regla del proyecto no se reescribe)
- [x] ADR-002 documenta la decisión y por qué ADR-001 queda parcialmente superseded

## Technical Notes

- **Lint**: `eslint-config-next@16.2.1` exporta config flat-config (ESLint 9+) — el `package.json` tenía `eslint: ^8` fijado, mismatch de peer dependency. Se subió a `^9` y se creó `eslint.config.mjs` importando `eslint-config-next/core-web-vitals`.
- **CSP**: se probó primero un hash SHA-256 del script JSON-LD en `script-src` (sin `unsafe-inline`). Se verificó empíricamente que esto rompe la hidratación de Next (los scripts inline de RSC/hydration del framework no matchean el hash y quedan bloqueados). Se optó por `script-src 'self' 'unsafe-inline'` como trade-off documentado — no hay inputs de usuario ni contenido dinámico en la página, así que la superficie de XSS real es mínima. El nonce + middleware (la alternativa "correcta" de Next) exige renderizado dinámico por request, lo cual contradice la decisión de sitio 100% estático (ADR-001).
- **Sin env vars**: se descartó `NEXT_PUBLIC_WHATSAPP_NUMBER` (que el README prometía pero el código nunca implementó) a favor de constantes planas en `lib/site-config.ts` — más simple para reutilizar el template y evita la complejidad de cargar env vars dentro de `next.config.ts`.
- **Contenido de Las Breñas queda hardcodeado a propósito** — no hay cliente activo, así que no tiene sentido parametrizar más allá de centralizar en un solo archivo. Al reutilizar el template, `lib/site-config.ts` + el catálogo en `app/page.tsx` son los únicos lugares que hace falta tocar (ver README § "Reusing this template").
- `.claude/agents/*` (roster de subagentes) no se tocó — sigue siendo válido para futuros clientes de e-commerce, no es específico de 21stdev.

## History

| Date | Agent / Human | Event |
|------|--------------|-------|
| 2026-07-13 | human | Pedido: convertir el repo en plantilla reutilizable, cortar lazo con 21stdev, security by design |
| 2026-07-13 | claude | Completado: lint, site-config, SEO, CSP/security headers, docs actualizadas, ADR-002 |
