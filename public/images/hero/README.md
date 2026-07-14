# Hero image

Un solo archivo:

```
iphone-hero.jpg
```

Ya está puesta (banner horizontal 1920×1132, fondo negro con "iPhone 17 PRO" incluido en la imagen).

Si en el futuro la reemplazás por otra:
- Relación de aspecto: la sección usa `aspect-[1920/1132]` con `object-cover` en `app/page.tsx`, así que **si la nueva imagen tiene otra proporción, hay que actualizar esa clase** (buscá `HeroSection` en `app/page.tsx`) para que no se recorte mal. Más simple: exportá la imagen nueva con la misma relación de aspecto (1920×1132, o cualquier múltiplo tipo 1.7:1).
- Fondo oscuro/negro — se funde con el `bg-black` de la sección.
- Pesá poco: idealmente < 500KB (usá TinyPNG/Squoosh). El hero usa `priority` en `next/image` — carga apenas entra alguien al sitio, así que cuanto más liviana, mejor el LCP.
- Actualizá también `HERO_IMAGE.alt` en `app/page.tsx` si cambia el modelo mostrado.

Referenciada desde `app/page.tsx` → `HERO_IMAGE.src`.
