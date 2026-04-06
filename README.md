# Phone Store Las Breñas

> Landing page de venta de celulares para una tienda local en Las Breñas, Chaco.

---

## Overview

Phone Store Las Breñas es una landing page profesional para una tienda de celulares ubicada en Las Breñas, Chaco, Argentina. El sitio permite a los clientes locales explorar modelos disponibles y precios, y contactar directamente por WhatsApp — sin depender de redes sociales.

El sitio está optimizado para búsquedas locales en Google (SEO local para "celulares Las Breñas", "iPhone Chaco", "Samsung Chaco") y está diseñado con una estética premium y minimalista orientada a generar confianza.

El frontend es generado/exportado desde 21stdev y organizado por Claude. No se crea UI nueva — solo se integra y estructura el código exportado.

---

## Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Frontend | Next.js (App Router) | Static export desde 21stdev |
| Styling | Tailwind CSS | Incluido en el export de 21stdev |
| Backend | Ninguno | Sitio estático |
| Database | Ninguna | Contenido hardcodeado |
| Hosting | Vercel | Deploy automático desde `main` |
| CI/CD | Vercel / GitHub integration | |

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Clonar el repositorio
git clone https://github.com/[org]/phone-store-landing.git
cd phone-store-landing

# Instalar dependencias
pnpm install
```

### Running Locally

```bash
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el browser.

### Build

```bash
pnpm build
```

---

## Project Structure

```
phone-store-landing/
├── src/
│   ├── app/              # Next.js App Router pages y layouts
│   ├── components/       # UI components (del export de 21stdev)
│   └── lib/              # Utilities y helpers
├── public/               # Assets estáticos (imágenes, iconos)
├── docs/
│   ├── content/          # Content strategy, brand voice, keywords
│   ├── technical/        # Architecture, decisions
│   └── user/             # User guide
├── .claude/agents/       # Claude Code specialist agents
├── PRD.md                # Product requirements (fuente de verdad)
├── TODO.md               # Backlog del proyecto
└── CLAUDE.md             # Instrucciones para Claude
```

---

## Environment Variables

Este sitio es estático y no requiere variables de entorno en producción.

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | No | Número de WhatsApp para el CTA (con código de país, sin +) |

---

## Deployment

El sitio se despliega automáticamente en Vercel al hacer merge a `main`.

- **Production**: [TBD — dominio pendiente de definición]

Manual:
```bash
pnpm build
vercel --prod
```

---

## License

Propietario — Juan Manuel Silva
