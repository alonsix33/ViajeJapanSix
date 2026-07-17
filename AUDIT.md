# AUDIT.md — Auditoría del refactor Vite + React

Auditoría de la Fase 4 sobre el refactor de `viaje_japon_2026.jsx` (monolito original) a un
proyecto Vite + React modular en `src/`. Incluye una revisión mecánica (build, lint, render,
grep) y una auditoría independiente con un subagente que no participó en el refactor.

Fecha: 17 jul 2026.

## 1) Build limpio

```
npm run build
```

Compila sin errores ni warnings. Bundle de producción:

| Archivo                    | Tamaño    | Gzip     |
| -------------------------- | --------- | -------- |
| `index.html`               | 1.44 kB   | 0.66 kB  |
| `assets/index-*.css`       | 0.35 kB   | 0.26 kB  |
| `assets/index-*.js`        | 272.10 kB | 83.49 kB |
| `assets/pricedown-*.woff2` | 26.17 kB  | —        |

Total `dist/`: ~316 kB. El JS bajó de 307 kB a 272 kB respecto al baseline monolítico (Fase 1) al
extraer la fuente Pricedown del base64 embebido en el bundle a un asset binario aparte.

## 2) Lint y format

```
npm run lint     → 0 errores, 0 warnings
npm run format   → sin cambios pendientes
```

Se reemplazó `oxlint` (scaffold por defecto) por ESLint 9 (flat config) con
`eslint-plugin-react-hooks` y `eslint-plugin-react-refresh`, más Prettier con
`eslint-config-prettier`. Se corrigieron los 2 problemas reales que detectó el lint al migrar
(ambos sin cambiar comportamiento visible — ver commit de Fase 3):

- `Countdown`: cálculo de días movido de `setState` dentro de un efecto a un inicializador
  perezoso de `useState` (mismo resultado, sin renders en cascada).
- `Reservas`: `catch` vacío del clipboard con comentario, sin binding de error sin usar.

## 3) Render de los 9 tabs

Verificado con Playwright (Chromium headless) sobre el build de producción (`npm run preview`),
en viewport móvil (390×844) y tablet/desktop (768×1024). Los 9 tabs (Vista General, Reservas,
Vuelos, Los Ángeles, Escala Seúl, Japón, Hoteles, Pokémon, Presupuesto) montan sin errores de
consola ni excepciones de React en ambos tamaños.

Verificaciones específicas:

- **Banner Los Santos**: renderiza con la fuente Pricedown (contorno negro vía `paintOrder:
"stroke"` en el objeto `style`) y el fondo SVG del atardecer/palmeras/skyline.
- **Mapas interactivos** (LA, Tokio, Kioto, Osaka, Seúl): los 5 mapas cargan; se probó clic en un
  punto no-default (Griffith Observatory) y la nota inferior se actualiza correctamente.
- **Countdown**: en la portada, calcula correctamente los días restantes al vuelo (23 jul 2026).
- **StampGrid**: clic en un sello alterna su estado marcado/no marcado y actualiza el contador
  "X / 15 sellos".
- **Checklist** (pestaña Presupuesto): clic en un ítem lo marca/desmarca sin errores.

## 4) Consola del navegador

Cero errores o warnings de React/JS en ninguno de los 9 tabs. El único mensaje de consola
observado es `ERR_CONNECTION_RESET` al intentar cargar Google Fonts — esperado en este entorno de
sandbox (la red saliente hacia `fonts.googleapis.com` está restringida aquí); no ocurre por un
problema del código y no afecta la fuente Pricedown, que es 100% local.

## 5) Responsive / mobile

Probado a 390px (iPhone) y 768px (tablet). El diseño mobile-first original se preserva: sin
`@media` queries de escritorio, layout con flex/grid responsivo
(`repeat(auto-fit, minmax(...))`), contenido centrado con `max-width: 920px` en pantallas más
anchas sin alterar la disposición móvil. No se convirtió a un layout de escritorio.

## 6) Accesibilidad básica

- `<html lang="es">` ✅ (antes decía `lang="en"`, corregido en Fase 3).
- Sin `<img>` sin `alt`: todos los íconos son emoji en texto o SVG inline, no hay imágenes que
  requieran texto alternativo.
- Sin `outline: none` forzado en ningún estilo: el foco por teclado del navegador se preserva tal
  cual en botones y enlaces.
- Contraste de color: heredado del diseño original (paleta washi/tinta/bermellón), no se tocó.
- **Hallazgo no corregido (preexistente, fuera de alcance de este refactor):** varios elementos
  interactivos (puntos del mapa en `MapView`, tarjetas de `StampGrid`, los divs de "copiar" en
  `Reservas`, ítems del checklist en `Extra`) usan `onClick` sobre `<div>`/`<g>` sin `role="button"`
  ni `tabIndex`, por lo que no son operables por teclado. Esto ya existía en el `.jsx` monolítico
  original — no es una regresión de la modularización. Se reporta para que se decida si vale la
  pena abordarlo en una iteración futura (fuera del alcance de "solo infraestructura" de esta
  tarea).

## 7) Verificación de datos vs. MAESTRO_viaje_japon_2026.md

Se comparó dos veces, de forma independiente: una vez durante el refactor (extracción programática
por slicing exacto de líneas, sin transcripción manual) y una segunda vez por un subagente que no
participó en el refactor, con foco en encontrar discrepancias.

**Resultado: sin discrepancias nuevas.** Los PNRs (FISZIV, BV7OJC, X64MHH, SBPTJN, CLFHNJ), las 6
confirmaciones/PINs de hoteles, precios de vuelos, horarios (incluida la corrección de OZ 203 a
23:00), fechas del itinerario día por día, los datos de K-ETA y el presupuesto coinciden
exactamente entre `src/data/*.js`, `viaje_japon_2026.jsx` (original) y
`MAESTRO_viaje_japon_2026.md`. Se verificó por comparación de cadenas que las 618 cadenas de texto
únicas del bloque de datos original aparecen intactas en los nuevos archivos de `src/data/`.

Las 3 discrepancias que ya se habían reportado en el PASO 0 (antes de tocar nada) siguen siendo
las mismas y **no se corrigieron**, tal como pedían las reglas:

1. En `src/data/maps.js`, el punto `"gion"` del mapa de Kioto está tipado como `hotel` con nota
   "Su base", pero el hotel realmente reservado es Connect Inn Shichijo-Kamogawa, no Gion
   (inconsistencia interna del `.jsx` original, no introducida por el refactor).
2. En `src/tabs/Seul.jsx`, el encabezado dice "Llegan ICN 4:30am" mientras que `FLIGHTS` y
   `SEOUL_PLAN` dicen 04:00 (también preexistente).
3. En `src/data/hotels.js`, las alternativas de Marriott/Roosevelt usan una escala de rating 0–5
   mezclada con la escala 0–10 de Booking.com del resto de la lista (también preexistente).

Nota adicional que encontró el subagente: en `src/data/flights.js`, el precio del vuelo LA 2477
se muestra como un total combinado ("USD 1,827.30") en vez de desglosado en las dos reservas
(136.80 + 1,690.50) como hace el maestro en el §3. Verificado que esto ya estaba así idéntico en
el `.jsx` original (línea 73) — no es un error del refactor, solo queda documentado.

## 8) Sin `localStorage` / `sessionStorage`

```
grep -rn "localStorage\|sessionStorage" --include="*.js" --include="*.jsx" . \
  --exclude-dir=node_modules --exclude-dir=dist
```

Cero resultados en todo el repo (ni en `src/`, ni en el `.jsx` original).

## 9) Fuentes en producción

- Pricedown: extraída a `src/assets/fonts/pricedown.woff2` (26,172 bytes, magic bytes `wOF2`
  válidos), referenciada solo vía `@font-face` local en `src/styles/global.css`. Cero menciones de
  `cdnfonts` en todo el repo. Confirmado que el bundle de producción (`npm run preview`) sirve el
  archivo `.woff2` con `Content-Length: 26172` y que el JS de producción contiene la referencia a
  `'Pricedown'`.
- Google Fonts (Shippori Mincho, Zen Kaku Gothic New, Zen Maru Gothic, Nanum Myeongjo): movidas del
  `@import` dentro del `<style>` de React a un `<link rel="stylesheet">` en `index.html`
  (con `preconnect`), tal como sugería el maestro para mejor performance. Funciona igual en
  `npm run dev` y en `npm run build` + `npm run preview`.

## 10) Configuración de entorno

`.nvmrc` (Node 20), `netlify.toml` (`NODE_VERSION = "20"`, `publish = "dist"`) y `package.json`
(`engines.node >= 20`) son consistentes entre sí. `eslint.config.js` ignora correctamente `dist` y
el archivo histórico `viaje_japon_2026.jsx`. `.gitignore` excluye `node_modules`, `dist`, `.env*` y
`.netlify`. `dist/` no está trackeado en git.

## Conclusión

No se encontraron errores reales introducidos por el refactor. El código modularizado es
funcionalmente idéntico al monolito original: mismos datos, mismo comportamiento, mismo diseño
visual y mobile-first, sin CDN de fuentes, sin storage del navegador. Las únicas discrepancias que
existen son las 4 ya reportadas en el PASO 0 y esta fase — todas preexistentes en el `.jsx`
original, ninguna corregida por decisión explícita del alcance de la tarea (infraestructura, no
contenido).
