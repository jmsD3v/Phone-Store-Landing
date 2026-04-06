---
id: "005"
title: "Configurar Vercel deployment y conectar dominio"
status: "todo"
area: "infra"
agent: "@cicd-engineer"
priority: "normal"
created_at: "2026-03-28"
due_date: null
started_at: null
completed_at: null
prd_refs: []
blocks: []
blocked_by: ["001"]
---

## Description

Conectar el repositorio de GitHub a Vercel para deploy automático, y configurar el dominio cuando esté disponible. El dominio está pendiente de definición (open question en PRD.md).

## Acceptance Criteria

- [ ] Repositorio conectado a Vercel
- [ ] Push a `main` dispara deploy automático
- [ ] Preview deployments activos en PRs
- [ ] Dominio conectado y HTTPS funcionando (cuando el dominio esté disponible)
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` configurado como variable de entorno en Vercel

## Technical Notes

- Usar la integración de Vercel con GitHub (no Vercel CLI)
- Configurar `NEXT_PUBLIC_WHATSAPP_NUMBER` en Vercel → Settings → Environment Variables
- El dominio está pendiente — este paso puede completarse parcialmente sin él

## History

| Date | Agent / Human | Event |
|------|--------------|-------|
| 2026-03-28 | human | Task created |
