---
id: "001"
title: "Integrar código exportado de 21stdev en el repositorio"
status: "todo"
area: "frontend"
agent: "@frontend-developer"
priority: "high"
created_at: "2026-03-28"
due_date: null
started_at: null
completed_at: null
prd_refs: ["FR-001", "FR-002", "FR-003", "FR-006", "FR-009"]
blocks: ["003", "004", "005", "006"]
blocked_by: []
---

## Description

El usuario exportará el código del diseño desde 21stdev (Next.js + Tailwind CSS). Esta tarea consiste en recibir ese export, integrarlo en la estructura del repositorio, asegurarse de que compile correctamente con `pnpm build`, y organizar los componentes en la estructura definida en ARCHITECTURE.md.

No crear UI nueva — solo integrar y organizar el código exportado tal cual viene. Si hay componentes que requieren ajuste mínimo de estructura (paths, imports), hacerlos. No modificar el diseño visual.

## Acceptance Criteria

- [ ] El código de 21stdev está en el repositorio bajo `src/`
- [ ] `pnpm dev` corre sin errores
- [ ] `pnpm build` completa sin errores
- [ ] El sitio se ve correctamente en mobile (375px) y desktop
- [ ] Los componentes están organizados en `src/components/` (ui/ y sections/)
- [ ] Las secciones Hero, Catálogo y área de contacto están presentes

## Technical Notes

- No crear UI nueva — integrar únicamente el export de 21stdev
- Si el export usa `pages/` en lugar de `app/`, migrar a App Router (`src/app/`)
- Confirmar que `next/image` está siendo usado para imágenes (requerido para FR-011)
- Ver ADR-001 en `docs/technical/DECISIONS.md`

## History

| Date | Agent / Human | Event |
|------|--------------|-------|
| 2026-03-28 | human | Task created |
