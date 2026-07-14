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
| ADR-001 | Sitio estático con Next.js exportado desde 21stdev, desplegado en Vercel | Partially superseded by ADR-002 (regla "no crear UI nueva") | 2026-03-28 |
| ADR-002 | Mantener el código directamente como plantilla reutilizable para futuros clientes de e-commerce | Accepted | 2026-07-13 |

---

## ADR-001: Sitio estático con Next.js exportado desde 21stdev, desplegado en Vercel

**Date**: 2026-03-28
**Status**: Partially superseded by ADR-002 — la decisión de sitio estático en Vercel sigue vigente; la regla "no crear UI nueva, solo integrar el export de 21stdev" fue retirada.
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

---

## ADR-002: Mantener el código directamente como plantilla reutilizable para futuros clientes de e-commerce

**Date**: 2026-07-13
**Status**: Accepted
**Deciders**: Juan Manuel Silva

### Context

El cliente original de esta landing (la tienda de celulares en Las Breñas) no concretó la compra. El código, sin embargo, resuelve bien un patrón recurrente: landing de e-commerce local, mobile-first, con CTA de WhatsApp y SEO local — un punto de partida útil para próximos clientes de e-commerce. La regla original de ADR-001 ("no crear UI nueva, solo integrar el export de 21stdev") ya no tiene sentido para este uso: no hay un cliente activo cuyo diseño haya que preservar intacto, y el repo va a seguir recibiendo cambios de UI directos (imágenes, secciones nuevas) a medida que se lo prepara como base reutilizable.

Nota: el origen del diseño (21stdev, documentado en ADR-001) es simplemente un dato histórico de cómo se generó el código original — no hubo pedido de desvincularse de esa herramienta ni evidencia de que haga falta (no dejó dependencias ni watermarks en el código).

### Options Considered

1. **Mantener el repo tal cual, como artefacto histórico de un cliente que no cerró** — Pros: cero esfuerzo. Cons: el valor del trabajo (un patrón de landing que funciona) queda enterrado en un repo de un solo cliente; cada landing nueva empieza de cero.
2. **Generalizar el código como plantilla, manteniéndolo directamente (elegido)** — Pros: reutilización real cliente a cliente; la identidad del negocio queda centralizada en un solo archivo (`lib/site-config.ts`) en vez de repetida y hardcodeada en múltiples componentes. Cons: requiere retocar código y documentación existentes.
3. **Reescribir desde cero un boilerplate de e-commerce genérico** — Pros: máxima limpieza conceptual. Cons: descarta trabajo ya hecho y probado (SEO local, estructura de catálogo, CTA de WhatsApp) sin necesidad.

### Decision

Se elige **mantener el sitio directamente como plantilla reutilizable**. La regla "no crear UI nueva" queda retirada — Claude ahora mantiene y evoluciona el código (incluida la UI) directamente cuando el trabajo lo requiere. Se centraliza toda la identidad del negocio (nombre, dirección, WhatsApp, copy SEO, JSON-LD) en `lib/site-config.ts` como único punto de edición al reutilizar el template para un cliente nuevo. El contenido específico de Las Breñas (números, dirección, catálogo de teléfonos) queda como instancia de ejemplo — intencionalmente hardcodeado, ya que no hay cliente activo que lo necesite actualizado — y sirve de referencia de cómo completar el template.

La decisión de ADR-001 sobre sitio estático en Vercel (sin backend, sin base de datos) **se mantiene sin cambios**.

### Consequences

- **Positive**: Próximas landings de e-commerce parten de una base probada (SEO local, CSP, estructura de catálogo, CTA de WhatsApp) en vez de empezar de cero; un solo archivo de config por cliente reduce el riesgo de inconsistencias (ej. número de WhatsApp duplicado en varios componentes, que existía antes de esta ADR)
- **Negative**: La documentación de este repo mezcla contenido específico de Las Breñas (ejemplo) con contenido genérico de plantilla — hay que leer con criterio al reutilizarlo
- **Neutral**: Claude ya no está limitado por la regla "no crear UI nueva"; puede modificar componentes y estructura directamente cuando el trabajo lo requiera
