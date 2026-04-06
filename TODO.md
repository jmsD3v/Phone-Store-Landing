# TODO / Backlog

> **Governor**: @project-manager — invoke for sprint planning, prioritization, and feature breakdown
> **Agents**: May add items to "Backlog" and move completed items to "Completed". Preserve section order. Never reorder items within a section — priority position is set by humans or @project-manager when explicitly asked.

---

## In Progress

_(nada en curso)_

---

## Up Next (prioritized)
- [ ] #002 — Definir copy y estrategia de keywords para SEO local [area: content] → [.tasks/002-copy-seo-local.md](.tasks/002-copy-seo-local.md)
- [ ] #003 — Implementar SEO local: title, meta description, structured data LocalBusiness [area: frontend] → [.tasks/003-seo-local-meta-tags.md](.tasks/003-seo-local-meta-tags.md)
- [ ] #004 — Integrar CTA de WhatsApp con número y mensaje pre-escrito [area: frontend] → [.tasks/004-whatsapp-cta.md](.tasks/004-whatsapp-cta.md)

---

## Backlog

- [ ] #005 — Configurar Vercel deployment y conectar dominio [area: infra] → [.tasks/005-vercel-deployment.md](.tasks/005-vercel-deployment.md)
- [ ] #006 — Performance audit: Core Web Vitals y optimización de imágenes [area: frontend] → [.tasks/006-performance-audit.md](.tasks/006-performance-audit.md)

---

## Completed

- [x] #000 — Initial project setup and template configuration → [.tasks/000-initial-project-setup.md](.tasks/000-initial-project-setup.md)
- [x] #001 — Integrar código exportado de 21stdev en el repositorio [area: frontend] → [.tasks/001-integrar-21stdev-export.md](.tasks/001-integrar-21stdev-export.md)

---

## Item Format Guide

When adding new items, use this format:

```
- [ ] #NNN — Brief description of the task [area: frontend|backend|database|qa|docs|infra|design|content] → [.tasks/NNN-short-title.md](.tasks/NNN-short-title.md)
```

Every TODO item must have a corresponding `.tasks/NNN-*.md` file. @project-manager creates both together.

**Priority**: Items higher in "Up Next" are higher priority. Agents move completed items to "Completed" and may add new items to "Backlog". Only humans reorder items within a section to change priority, unless explicitly asked to reprioritize.
