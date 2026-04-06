# Product Requirements Document

> [!WARNING]
> **READ-ONLY FOR ALL AGENTS**
> This document is the source of truth for what we are building.
> Claude agents must READ this document to understand requirements.
> **Do not edit, rewrite, or "update to reflect current state" without explicit human instruction.**
> When in doubt, leave it unchanged and ask the human.

---

**Version**: 1.0
**Status**: Active
**Last updated by human**: 2026-03-28
**Product owner**: Juan Manuel Silva

---

## 1. Executive Summary

Phone Store Las Breñas es una landing page para una tienda de celulares ubicada en Las Breñas, Chaco, Argentina. El sitio permite a los clientes locales ver los modelos disponibles y sus precios, y contactar directamente a la tienda por WhatsApp — sin depender de redes sociales. El objetivo principal es aparecer en los resultados de búsqueda locales de Google y convertir visitas en consultas por WhatsApp. El diseño sigue un estilo profesional, premium y minimalista inspirado en Apple.

---

## 2. Problem Statement

### 2.1 Current Situation

Los clientes potenciales de la tienda dependen actualmente de redes sociales (Instagram, Facebook) para ver el catálogo y precios. Esto limita el alcance a quienes ya siguen la cuenta y no permite ser encontrado por clientes nuevos que buscan en Google.

### 2.2 The Problem

No existe una presencia web indexable en Google para búsquedas como "celulares Las Breñas" o "iPhone Chaco". Los clientes que buscan activamente no encuentran la tienda en resultados orgánicos, perdiendo ventas a favor de competidores con sitio web.

### 2.3 Why Now

La penetración de smartphones y el uso de Google para búsquedas locales en ciudades del interior del Chaco están creciendo. Un sitio web optimizado para SEO local es una ventaja competitiva inmediata en un mercado donde la mayoría de competidores locales solo tienen presencia en redes sociales.

---

## 3. Goals & Success Metrics

### 3.1 Business Goals

- Aparecer en la primera página de Google para búsquedas locales de celulares en Las Breñas y Chaco
- Recibir consultas de clientes nuevos por WhatsApp a través del sitio
- Establecer una presencia web profesional que transmita confianza y calidad

### 3.2 Success Metrics

| Metric | Baseline | Target | How Measured |
|--------|----------|--------|--------------|
| Posición Google "celulares las breñas" | No rankeado | Top 5 en 3 meses | Google Search Console |
| Consultas por WhatsApp desde el sitio | 0 | 10+ por mes | WhatsApp Business |
| Core Web Vitals (LCP) | N/A | < 2.5s | Vercel Analytics / PageSpeed |

---

## 4. User Personas

### Persona: Cliente Local Buscador

- **Role**: Habitante de Las Breñas o zona que busca comprar un celular
- **Goals**: Ver qué modelos hay disponibles y cuánto cuestan antes de ir a la tienda
- **Pain points**: No sabe qué tiendas existen en la ciudad, las redes sociales muestran info desactualizada
- **Technical level**: No técnico
- **Usage frequency**: Ocasional (al momento de querer comprar)

### Persona: Cliente Referenciado

- **Role**: Persona que recibe el link de la tienda por recomendación
- **Goals**: Confirmar que la tienda es confiable y tiene lo que busca
- **Pain points**: Desconfía de tiendas que solo tienen Instagram, sin web propia
- **Technical level**: No técnico
- **Usage frequency**: Una sola vez (visita de validación)

---

## 5. Functional Requirements

### 5.1 Secciones del Sitio

- **FR-001**: El sitio debe mostrar una sección hero con el nombre/marca de la tienda, tagline y CTA principal visible above the fold en mobile y desktop
- **FR-002**: El sitio debe mostrar un catálogo de modelos de celulares disponibles con nombre, imagen y descripción breve
- **FR-003**: El sitio debe mostrar el precio de cada modelo del catálogo
- **FR-004**: El sitio debe incluir un botón/enlace de contacto por WhatsApp que abra una conversación pre-escrita con la tienda

### 5.2 SEO Local

- **FR-005**: El `<title>` de la página debe incluir el nombre de la tienda y las keywords locales principales (ej: "Celulares en Las Breñas, Chaco")
- **FR-006**: La página debe tener una `<meta name="description">` optimizada para SEO local (máx 160 caracteres)
- **FR-007**: La página debe incluir structured data de tipo `LocalBusiness` con nombre, dirección (Las Breñas, Chaco), y número de teléfono
- **FR-008**: Las imágenes deben tener atributos `alt` descriptivos con keywords relevantes

### 5.3 Performance y Mobile

- **FR-009**: El diseño debe ser mobile-first y completamente responsive desde 375px de ancho
- **FR-010**: El LCP (Largest Contentful Paint) debe ser ≤ 2.5s en conexión 4G simulada
- **FR-011**: Las imágenes deben estar optimizadas (formato WebP o AVIF, lazy loading)

---

## 6. Non-Functional Requirements

### Performance
- LCP ≤ 2.5s en 4G (PageSpeed Insights mobile)
- Sitio estático — sin llamadas a API en runtime

### Security
- No hay datos de usuario — sin autenticación
- No hay formularios — sin riesgo de XSS/CSRF

### Accessibility
- Alt text en todas las imágenes (FR-008)
- Contraste adecuado para legibilidad (estilo minimalista premium)

### Browser / Platform Support
- Chrome, Firefox, Safari, Edge — versiones recientes
- Mobile-first: responsive desde 375px

### Reliability
- 99.9% uptime garantizado por Vercel (CDN global)

---

## 7. Out of Scope (v1.0)

- Carrito de compras — no se vende online
- Pagos online — todo es venta en persona o acordado por WhatsApp
- Panel de administración para actualizar catálogo
- Backend / API / base de datos
- Blog o contenido editorial
- Múltiples idiomas
- Comparador de modelos

---

## 8. Open Questions

| # | Question | Owner | Status |
|---|----------|-------|--------|
| 1 | ¿Cuál es el dominio final del sitio? | Juan Manuel Silva | Abierto |
| 2 | ¿Cuál es el número de WhatsApp de la tienda? | Juan Manuel Silva | Placeholder: +54 911 000-0000 — reemplazar antes de lanzar |
| 3 | ¿Cuáles son los colores finales de la marca? | Juan Manuel Silva | Resuelto: paleta Apple Store (#1D1D1F, #F5F5F7, #0071E3) |
| 4 | ¿Cuál es la dirección exacta de la tienda? | Juan Manuel Silva | Resuelto: Mac Lean 1756, Las Breñas, Chaco, Argentina |

---

## 9. Revision History

| Date | Author | Change Description |
|------|--------|--------------------|
| 2026-03-28 | Juan Manuel Silva | Initial draft — onboarding completado |
