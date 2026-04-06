---
id: "004"
title: "Integrar CTA de WhatsApp con número y mensaje pre-escrito"
status: "todo"
area: "frontend"
agent: "@frontend-developer"
priority: "high"
created_at: "2026-03-28"
due_date: null
started_at: null
completed_at: null
prd_refs: ["FR-004"]
blocks: []
blocked_by: ["001"]
---

## Description

Implementar el botón/enlace de WhatsApp en el sitio. El CTA debe abrir WhatsApp con un mensaje pre-escrito que mencione que el usuario viene del sitio web. El número de WhatsApp está pendiente de confirmación (ver open questions en PRD.md) — usar variable de entorno o placeholder claro.

## Acceptance Criteria

- [ ] El botón CTA de WhatsApp está visible en el hero y como floating button o en footer
- [ ] El link usa el formato `https://wa.me/{numero}?text={mensaje_codificado}`
- [ ] El mensaje pre-escrito está definido (viene de #002) y correctamente URL-encoded
- [ ] El número de WhatsApp usa `NEXT_PUBLIC_WHATSAPP_NUMBER` o tiene un placeholder claro si no está definido aún
- [ ] El botón funciona correctamente en mobile (abre la app de WhatsApp) y en desktop (abre WhatsApp Web)
- [ ] El texto del botón es el aprobado en #002

## Technical Notes

- Formato del link: `https://wa.me/549XXXXXXXXXX?text=Hola%2C%20vi%20tu%20sitio%20web...`
- El número debe incluir el código de país (Argentina = 54) y el código de área sin el 0 inicial
- Ejemplo mensaje: "Hola, vi tu sitio web y quiero consultar sobre disponibilidad de celulares."
- Usar número placeholder `5491100000000` (Argentina +54, área 911, número simbólico) — fácil de reemplazar cuando el cliente confirme el número real
- Configurar como `NEXT_PUBLIC_WHATSAPP_NUMBER=5491100000000` en `.env.local` y en Vercel

## History

| Date | Agent / Human | Event |
|------|--------------|-------|
| 2026-03-28 | human | Task created |
