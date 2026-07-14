---
id: "004"
title: "Integrar CTA de WhatsApp con número y mensaje pre-escrito"
status: "done"
area: "frontend"
agent: "@frontend-developer"
priority: "high"
created_at: "2026-03-28"
due_date: null
started_at: "2026-07-13"
completed_at: "2026-07-13"
prd_refs: ["FR-004"]
blocks: []
blocked_by: ["001"]
---

## Description

Implementar el botón/enlace de WhatsApp en el sitio. El CTA debe abrir WhatsApp con un mensaje pre-escrito que mencione que el usuario viene del sitio web. El número de WhatsApp está pendiente de confirmación (ver open questions en PRD.md) — usar variable de entorno o placeholder claro.

## Acceptance Criteria

- [x] El botón CTA de WhatsApp está visible en el hero, en cada card del catálogo, en el footer y como floating button
- [x] El link usa el formato `https://wa.me/{numero}?text={mensaje_codificado}` (`buildWhatsAppUrl()` en `lib/site-config.ts`)
- [x] El mensaje pre-escrito está definido y correctamente URL-encoded (`encodeURIComponent`)
- [x] El número de WhatsApp tiene un placeholder claro y centralizado (ver Technical Notes — se descartó la env var a favor de una constante)
- [x] El botón funciona correctamente en mobile (abre la app de WhatsApp) y en desktop (abre WhatsApp Web) — formato de link estándar `wa.me`
- [x] El texto del botón está definido en el JSX ("Consultá por WhatsApp" / "Consultá")

## Technical Notes

- Formato del link: `https://wa.me/549XXXXXXXXXX?text=Hola%2C%20me%20interesa%20consultar%20sobre%20un%20celular`
- El número debe incluir el código de país (Argentina = 54) y el código de área sin el 0 inicial
- Número placeholder `5491100000000` (Argentina +54, área 911, número simbólico) — reemplazar en `lib/site-config.ts` cuando el cliente confirme el número real
- **Desviación de la nota técnica original**: se descartó `NEXT_PUBLIC_WHATSAPP_NUMBER` como env var. Next.js no carga env vars dentro de `next.config.ts` sin el paquete `@next/env`, y ese archivo necesita leer la misma config para calcular el hash CSP del JSON-LD — una constante plana en `lib/site-config.ts` evita esa complejidad y es más simple de editar al reutilizar el template para otro cliente. Ver ADR-002.
- Antes de esta tarea el número estaba hardcodeado y duplicado en `app/page.tsx` y `components/WhatsAppFAB.tsx` — ahora ambos importan `buildWhatsAppUrl()` de `lib/site-config.ts`

## History

| Date | Agent / Human | Event |
|------|--------------|-------|
| 2026-03-28 | human | Task created |
| 2026-07-13 | claude | Centralizado en lib/site-config.ts; eliminada duplicación entre page.tsx y WhatsAppFAB.tsx |
