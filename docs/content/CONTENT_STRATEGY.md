# Content Strategy

> **Owner**: @copywriter-seo
> **Personas**: Definidas en `PRD.md` — leer siempre antes de escribir copy
> **Last updated**: 2026-03-28

---

## Overview

Phone Store Las Breñas es una tienda local de celulares en Las Breñas, Chaco. El sitio conecta a clientes locales que buscan comprar un celular con la tienda — sin intermediarios de redes sociales. Todo el copy debe reforzar una sola idea: esta tienda es confiable, tiene lo que buscás, y es fácil contactarla.

**Primary value proposition**: Los mejores celulares en Las Breñas — precios claros, atención directa.

**Canonical brand statement**: [TBD — definir con el cliente cuando confirme nombre oficial de la tienda]

---

## Brand Voice & Tone

### Voice (constant across all content)

| Dimension | Setting | Description |
|-----------|---------|-------------|
| Formality | Formal-conversacional | Profesional pero accesible — como Apple: claro y directo, nunca corporativo frío |
| Energy | Medium | Confiado, no agresivo; transmite calidad sin exagerar |
| Personality | Humano-Premium | Cercano pero prolijo — no informal ni slang |
| Authority | Expert | La tienda sabe de celulares; habla con seguridad sobre los modelos |

### Tone by Context

| Context | Tone | Example |
|---------|------|---------|
| Marketing headlines | Directo, beneficio-primero | "El iPhone que buscabas, en Las Breñas." |
| Precios | Claro, sin letra chica | "Precio: $XXX.XXX" — sin asteriscos ni condiciones ocultas |
| CTA de WhatsApp | Invitador, sin presión | "Consultá por WhatsApp" |
| Sección catálogo | Informativo, conciso | Nombre + modelo + specs clave — sin relleno |

### Voice Rules

- Siempre hablar en segunda persona singular informal argentina ("vos", "tu celular", "consultá")
- Liderar con el beneficio, no la característica ("Cámara increíble" > "48MP")
- Oraciones cortas. Sin palabras innecesarias.
- No usar superlativos vacíos ("el mejor", "increíble") sin respaldo concreto

### Forbidden Phrases

- "¡Aprovechá esta oferta increíble!" — suena a propaganda de feria
- "Somos líderes en..." — sin datos que lo respalden
- "No te pierdas..." — urgencia artificial

---

## Target Personas

### Cliente Local Buscador

**Job-to-be-done**: Quiere saber qué modelos hay en la ciudad y cuánto cuestan antes de salir a comprar
**Biggest objection**: "No sé si esta tienda es seria / tiene stock real"
**Language to use**: "celular", "iPhone", "Samsung", "precio", "cuotas", "garantía"
**Tone for this persona**: Directo, informativo — darle lo que vino a buscar (modelos y precios) sin rodeos
**Primary CTA for this persona**: "Consultá disponibilidad por WhatsApp"

### Cliente Referenciado

**Job-to-be-done**: Verificar que la tienda es legítima antes de ir
**Biggest objection**: "Parece una cuenta de Instagram más — no sé si es real"
**Language to use**: Mismo que arriba
**Tone for this persona**: Transmitir profesionalismo y confianza — el diseño hace el trabajo pesado
**Primary CTA for this persona**: "Ver catálogo" → luego "Consultá por WhatsApp"

---

## Keyword Strategy

### Domain & Canonical URL

- **Primary domain**: [TBD — pendiente de definición]
- **Canonical protocol + www preference**: [TBD — definir cuando se tenga el dominio]

### Primary Keyword Targets

| Keyword | Intent | Mapped Page | Monthly Volume | Difficulty | Status | Date Added |
|---------|--------|-------------|---------------|------------|--------|------------|
| celulares las breñas | commercial | / | verify | low | targeting | 2026-03-28 |
| venta de celulares las breñas | transactional | / | verify | low | targeting | 2026-03-28 |
| iphone chaco | commercial | / | verify | low-med | targeting | 2026-03-28 |
| samsung chaco | commercial | / | verify | low-med | targeting | 2026-03-28 |
| celulares las breñas chaco | commercial | / | verify | low | targeting | 2026-03-28 |
| tienda de celulares las breñas | navigational | / | verify | low | targeting | 2026-03-28 |

### Secondary Keywords (supporting, per page)

| Page | Secondary Keywords |
|------|--------------------|
| / | celulares usados las breñas, iphone las breñas, samsung las breñas, xiaomi chaco, comprar celular chaco |

### Content Clusters

No aplica para v1 — sitio de una sola página.

### Keywords to Avoid / Not Target

| Keyword | Reason |
|---------|--------|
| celulares resistencia | Ciudad más grande — competencia alta, no es el mercado objetivo |
| celulares baratos | No alineado con posicionamiento premium |

---

## Page Copy Library

Copy pendiente de definición. El frontend viene de 21stdev — @copywriter-seo debe proveer los textos para integrar en los componentes.

---

### Homepage

**Title tag**: [TBD — ej: "Celulares en Las Breñas, Chaco | [Nombre Tienda]"]
**Meta description**: [TBD — máx 160 chars, incluir "celulares Las Breñas", "iPhone", "Samsung", "WhatsApp"]

**H1**: [TBD]

**Sub-headline**: [TBD]

**Primary CTA**: [TBD] → WhatsApp link
**Secondary CTA**: [TBD] → Catálogo

---

## CTA Library

| CTA Text | Page / Context | Level | Notes | Date Added |
|----------|---------------|-------|-------|------------|
| Consultá por WhatsApp | Hero, floating button | primary | Abre WhatsApp con mensaje pre-escrito | 2026-03-28 |
| Ver modelos disponibles | Hero | secondary | Scroll al catálogo | 2026-03-28 |

---

## Technical SEO Decisions

### Meta Tag Defaults

| Tag | Default value | Notes |
|-----|--------------|-------|
| robots | `index, follow` | |
| og:image | [TBD — imagen social 1200×630px pendiente] | |
| twitter:card | `summary_large_image` | |
| lang | `es-AR` | Español argentino |

### Structured Data in Use

| Schema type | Applied to | Implementation status |
|-------------|------------|----------------------|
| LocalBusiness | Homepage | pending |
| WebSite | Homepage | pending |

### LocalBusiness Data

```json
{
  "@type": "LocalBusiness",
  "name": "[Nombre oficial de la tienda — TBD]",
  "address": {
    "streetAddress": "Mac Lean 1756",
    "addressLocality": "Las Breñas",
    "addressRegion": "Chaco",
    "addressCountry": "AR"
  },
  "telephone": "+54911000000",
  "url": "[TBD — dominio pendiente]"
}
```

### Redirect Map

Sin redirects en v1 — sitio nuevo.

### Hreflang Configuration

Solo español argentino — no aplica multilenguaje.

---

## Changelog

| Date | Change |
|------|--------|
| 2026-03-28 | Initial content strategy — brand voice y keyword framework definidos durante onboarding |
