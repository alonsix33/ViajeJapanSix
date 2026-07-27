import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'favicon-16x16.png',
        'favicon-32x32.png',
        'apple-touch-icon.png',
        'icons/*.png',
      ],
      manifest: {
        name: 'Los Ángeles & Japón 2026 · Viaje Familia Ternero',
        short_name: 'Viaje 2026',
        description:
          'Guía de viaje interactiva: itinerario día a día, vuelos, hoteles y reservas para Los Ángeles y Japón, verano 2026.',
        theme_color: '#142C46',
        background_color: '#F4EEE2',
        display: 'standalone',
        start_url: '/',
        lang: 'es',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: '/icons/icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Precachea todo el app shell (JS, CSS, HTML, la fuente Pricedown local, iconos)
        // para que la app cargue y funcione sin internet desde la primera visita.
        globPatterns: ['**/*.{js,css,html,woff2,svg,png,ico}'],
        runtimeCaching: [
          {
            // La hoja de estilos de Google Fonts cambia poco; se sirve del caché
            // mientras se revalida en segundo plano si hay internet.
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'google-fonts-stylesheets' },
          },
          {
            // Los archivos de fuente en sí no cambian nunca una vez publicados,
            // así que una vez cacheados (con internet) quedan disponibles offline.
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
});
