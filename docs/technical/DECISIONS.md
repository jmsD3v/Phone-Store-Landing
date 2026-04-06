# Architecture Decision Records

> This log captures the context and reasoning behind key decisions so they are never lost.
>
> **Rule**: Once an ADR is marked **Accepted**, do not edit its body. If a decision needs to change, write a new ADR that explicitly supersedes the old one. Add `**Status**: Superseded by ADR-XXX` to the old record.
>
> **Agents**: Read the relevant ADRs before proposing architectural changes. A proposal that contradicts an Accepted ADR needs a new ADR — not a silent override.

---

## Decision Index

| ID | Title | Status | Date |
|----|-------|--------|------|
| ADR-001 | Sitio estático con Next.js exportado desde 21stdev, desplegado en Vercel | Accepted | 2026-03-28 |

---

## ADR-001: Sitio estático con Next.js exportado desde 21stdev, desplegado en Vercel

**Date**: 2026-03-28
**Status**: Accepted
**Deciders**: Juan Manuel Silva / @systems-architect

### Context

El proyecto es una landing page para una tienda de celulares en Las Breñas, Chaco. No requiere backend, base de datos, ni autenticación. El diseño visual se genera en 21stdev (herramienta de diseño que exporta código Next.js/React listo para producción). El cliente quiere velocidad de ejecución: el sitio debe estar listo rápido, verse profesional, y posicionar en Google local.

### Options Considered

1. **Next.js estático exportado desde 21stdev (elegido)**: Pros: diseño de calidad sin trabajo de UI desde cero, deploy inmediato en Vercel, excelente SEO con SSG, sin costos de servidor. Cons: requiere re-deploy para actualizar contenido.

2. **HTML/CSS puro**: Pros: máxima simplicidad. Cons: mayor trabajo manual de diseño, sin ecosystem de componentes, más difícil de mantener y escalar.

3. **WordPress / CMS headless**: Pros: cliente podría actualizar contenido sin código. Cons: overhead innecesario para un sitio de una sola página, costo de hosting, complejidad.

### Decision

Se elige **Next.js estático exportado desde 21stdev, desplegado en Vercel**. La razón principal es que el diseño de calidad ya está resuelto por 21stdev, y un sitio estático en Vercel ofrece la mejor performance (LCP, Core Web Vitals) para SEO local — sin costo de servidor y con deploy en minutos.

### Consequences

- **Positive**: Velocidad de ejecución alta, performance excelente para SEO, sin costos de infraestructura, design system consistente del export
- **Negative**: Para actualizar precios o catálogo hay que modificar código y hacer deploy (no hay CMS); aceptado para v1
- **Neutral**: Claude no crea UI nueva — solo integra el código exportado de 21stdev
