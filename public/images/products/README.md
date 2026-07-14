# Product images (catálogo)

Poné acá una foto cuadrada por cada modelo, con estos nombres exactos:

```
iphone-17-pro.jpg
iphone-16.jpg
samsung-s25.jpg
xiaomi-15t.jpg
```

- Formato: **cuadrado (1:1)**, por ejemplo 800×800px — las cards usan `aspect-square` + `object-cover`.
- JPG está bien (no hace falta transparencia acá, cada card ya tiene su propio fondo blanco).
- Pesá poco: idealmente < 150KB cada una.

Nota: nombres/specs/precios de este catálogo son placeholder de ejemplo (no verificado contra precios reales de mercado) — ajustalos cuando tengas datos reales de un cliente. Si agregás/sacás un modelo, actualizá el array `PHONE_MODELS` en `app/page.tsx` (campo `image`) para que apunte al archivo correcto.
