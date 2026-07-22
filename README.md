# ⛩️ Viaje Familia Ternero 2026 — Los Ángeles & Japón

Guía de viaje familiar interactiva (Los Ángeles + Japón, verano 2026), con estética japonesa **goshuincho** (御朱印帳, cuaderno de sellos de templo). Es una web mobile-first pensada para consultarse desde el celular durante el viaje: itinerario día por día, vuelos, hoteles, reservas, mapas interactivos y un "pasaporte de sellos" coleccionable.

Construida con **React + Vite**, sin backend ni dependencias externas más allá de React — todo el estilo es inline (objetos JS) y SVG inline.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (por defecto `http://localhost:5173`).

## Scripts disponibles

| Comando           | Qué hace                                               |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Servidor de desarrollo con recarga en caliente         |
| `npm run build`   | Build de producción a `dist/`                          |
| `npm run preview` | Sirve localmente el build de producción para revisarlo |
| `npm run lint`    | Corre ESLint sobre todo el código                      |
| `npm run format`  | Formatea el código con Prettier                        |

## Estructura del proyecto

```
src/
├── assets/fonts/pricedown.woff2   # Fuente del banner "LOS SANTOS" (LA), embebida localmente
├── styles/
│   ├── tokens.js                  # Colores (C), fuentes (FONT_*), TAGS, MTYPE, patrones SVG
│   └── global.css                 # @font-face de Pricedown + reset mínimo
├── data/                          # ← EL CONTENIDO DEL VIAJE VIVE AQUÍ
│   ├── travelers.js                 (viajeros)
│   ├── flights.js                   (vuelos y tiempos de escala)
│   ├── bookings.js                  (confirmaciones y PINs de reservas)
│   ├── maps.js                      (puntos y líneas de los mapas interactivos)
│   ├── transport.js                 (traslados entre ciudades en Japón)
│   ├── la.js                        (itinerario y spots de Los Ángeles)
│   ├── seoul.js                     (K-ETA, plan de la escala, trenes AREX)
│   ├── japan.js                     (itinerario día a día por ciudad en Japón)
│   ├── hotels.js                    (los 6 hoteles reservados + alternativas)
│   └── misc.js                      (presupuesto, checklist, sellos, tabs)
├── components/
│   ├── seals/                     # Elementos decorativos: Seal, Taegeuk, WalkStar, Pokeball, LosSantosBanner
│   └── ui/                        # Componentes de UI: Tag, Card, MapView, DayCard, FlightCard, etc.
├── tabs/                          # Las 9 pestañas de la app
├── App.jsx                        # Estado del tab activo + layout general
└── main.jsx                       # Punto de entrada
```

**Para editar el contenido del viaje** (fechas, vuelos, hoteles, itinerario), edita los archivos en `src/data/` — no hace falta tocar componentes ni estilos.

El documento [`MAESTRO_viaje_japon_2026.md`](./MAESTRO_viaje_japon_2026.md) es la fuente de verdad de todo el contexto del proyecto (itinerario, vuelos, reservas, decisiones tomadas, pendientes). El archivo `viaje_japon_2026.jsx` en la raíz es el componente monolítico original, conservado como referencia histórica — la app real corre desde `src/`.

## Despliegue en Netlify

El repo incluye `netlify.toml` con la configuración lista:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Opción A — CI/CD (recomendada)

1. En [app.netlify.com](https://app.netlify.com), **Add new site → Import an existing project**.
2. Conecta tu cuenta de GitHub y elige este repositorio.
3. Netlify detecta `netlify.toml` automáticamente (build command y publish directory ya configurados).
4. **Deploy site**. Cada push a la rama principal vuelve a desplegar automáticamente.

### Opción B — CLI

```bash
npm i -g netlify-cli
netlify init
netlify deploy --build --prod
```

## Notas técnicas

- Sin `localStorage` ni `sessionStorage`: la app no persiste nada en el navegador.
- La fuente **Pricedown** (banner "LOS SANTOS" de la pestaña de LA) está embebida como archivo local (`src/assets/fonts/pricedown.woff2`), sin depender de ningún CDN externo.
- Las Google Fonts (Shippori Mincho, Zen Kaku Gothic New, Zen Maru Gothic, Nanum Myeongjo) se cargan vía `<link>` en `index.html`.
- Diseño mobile-first (~380–430px de ancho), centrado con `max-width` en pantallas más anchas sin cambiar el layout móvil.
