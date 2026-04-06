# Phone Store Las Breñas — Claude Instructions

> Stack: Next.js · TypeScript · Tailwind CSS · Vercel
> Last updated: 2026-03-28

## Project Context

Landing page de venta de celulares para una tienda local en Las Breñas, Chaco. Permite a los clientes locales ver modelos y precios sin depender de redes sociales, con CTA directo a WhatsApp. El frontend es exportado desde 21stdev — Claude solo integra y organiza el código exportado sin crear UI nueva.

**Tech stack summary**: Next.js (static) · Sin backend · Sin base de datos · Vercel

---

## Agents Available

**Mandatory delegation — this is not optional.** Every task that falls within a specialist's domain MUST be routed to that agent. Do not implement code, design schemas, write docs, or configure pipelines yourself — delegate. Only handle directly: project-level questions, routing decisions, and tasks explicitly outside all specialist domains.

| Agent | Role | Invoke when... |
|-------|------|----------------|
| `project-manager` | Backlog & coordination | "What's next?", sprint planning, breaking down features, reprioritizing |
| `systems-architect` | Architecture & ADRs | New feature design, tech decisions, system integration |
| `frontend-developer` | UI implementation | Components, pages, client-side state, styling |
| `backend-developer` | API & business logic | Endpoints, auth, background jobs, integrations |
| `ui-ux-designer` | UX & design system | User flows, wireframes, component specs, accessibility |
| `database-expert` | Schema & queries | Migrations, schema design, query optimization |
| `qa-engineer` | Testing (Playwright) | E2E tests, test strategy, coverage gaps |
| `documentation-writer` | Living docs | User guide updates, post-feature documentation |
| `cicd-engineer` | CI/CD & GitHub Actions | Pipelines, deployments, branch protection, release automation |
| `docker-expert` | Containerization | Dockerfiles, docker-compose, image optimization, container networking |
| `copywriter-seo` | Copy & SEO | Landing page copy, marketing content, meta tags, keyword strategy, structured data specs, brand voice |

---

## Critical Rules

These apply to all agents at all times. No exceptions without explicit human instruction.

1. **PRD.md is read-only.** Never modify it. Read it to understand requirements.
2. **TODO.md is the living backlog.** Agents may add items, mark items complete, and move items to "Completed". Preserve section order and existing item priority — do not reorder items within a section unless explicitly asked to reprioritize.
3. **All commits use Conventional Commits format** (see Git Conventions below).
4. **Update the relevant `docs/` file** after every significant change before marking a task complete.
5. **No hay tests en v1** — sitio estático. Omitir el requisito de tests para marcar tareas como completadas.
6. **Never hardcode secrets, credentials, or environment-specific values** in source code.
7. **Consult `docs/technical/DECISIONS.md`** before proposing changes that may conflict with prior architectural decisions.
8. **Always delegate to the right specialist.** If a task touches frontend, backend, database, UX/design, QA, documentation, CI/CD, Docker, or copy/SEO — invoke the appropriate agent immediately. Do not implement it yourself. The delegation table above is binding, not advisory.
9. **No crear UI nueva.** El frontend viene de 21stdev. Solo integrar y organizar el código exportado.

---

## Project Structure

```
src/                    # Application source code
  app/                  # Next.js App Router pages and layouts
  components/           # Shared UI components (from 21stdev export)
  lib/                  # Utilities, helpers, shared logic
public/                 # Static assets (images, icons)
docs/
  user/USER_GUIDE.md    # User-facing documentation
  technical/            # Architecture, API, DB, decisions
  content/              # Content strategy, brand voice, keyword targets (owned by @copywriter-seo)
.claude/agents/         # Specialist agent definitions
.claude/templates/      # Blank doc templates (synced from upstream — do not edit)
.tasks/                 # Detailed task files — one per TODO item (owned by @project-manager)
```

---

## Git Conventions

### Commit Format
```
<type>(<scope>): <short description>

[optional body]
[optional footer: Closes #issue]
```

**Types**: `feat` · `fix` · `docs` · `style` · `refactor` · `test` · `chore` · `perf` · `ci`

Examples:
```
feat(seo): add local business structured data
fix(whatsapp): correct phone number in CTA link
docs(content): update keyword strategy for Las Breñas
```

### Branch Naming
```
feature/<ticket-id>-short-description
fix/<ticket-id>-short-description
chore/<description>
docs/<description>
refactor/<description>
```

### PR Requirements
- PR title follows Conventional Commits format
- Fill out `.github/PULL_REQUEST_TEMPLATE.md` completely — do not delete sections
- Link to the related issue/ticket (`Closes #XXX`)
- At least one reviewer required before merge
- All CI checks must pass

---

## Code Style

- **Language**: TypeScript (strict mode)
- **Formatter**: Prettier
- **Linter**: ESLint
- **Import style**: absolute imports from `src/`
- **No `console.log`** in production code
- **No commented-out code** committed — delete it or track it in TODO.md

---

## Testing Conventions

- No tests definidos para v1 (landing page estática)
- Si se agregan en el futuro: Playwright E2E en `tests/e2e/*.spec.ts`

---

## Environment & Commands

- **Package manager**: pnpm
- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm lint` — lint check

---

## Key Documentation

@docs/technical/ARCHITECTURE.md
@docs/technical/DECISIONS.md
@docs/content/CONTENT_STRATEGY.md
@docs/user/USER_GUIDE.md
