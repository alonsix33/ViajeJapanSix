import { C } from '../styles/tokens.js';

export const JP_CITIES = [
  {
    city: 'Tokio',
    kanji: '東京',
    color: C.ai,
    dates: '27 Jul – 1 Ago',
    map: 'tokio',
    days: [
      {
        date: 'Lun 27 Jul',
        title: 'Llegada nocturna a Haneda',
        items: [
          {
            tag: 'TRASLADO',
            time: '23:30',
            text: 'Aterrizan en Haneda T3. Caminan al Villa Fontaine Grand (conectado a la T3). A dormir.',
          },
          {
            tag: 'TIP',
            text: 'Sacar efectivo (7-Bank), tarjeta IC Welcome Suica, activar eSIM. Si hay ánimo, el onsen del hotel.',
          },
        ],
      },
      {
        date: 'Mar 28 Jul',
        title: 'Recuperación + Shibuya de noche',
        items: [
          {
            tag: 'TRASLADO',
            time: '~11:30',
            text: 'Tren de Haneda al Nest Hotel Tokyo Yaesu (Nihonbashi, ~35 min). Dejan maletas (recepción 24h).',
          },
          {
            tag: 'SALIR',
            time: 'Tarde',
            text: 'Shibuya: el cruce, Shibuya Sky (mirador 360°), Hachiko.',
          },
          { tag: 'TECH', text: 'Apple Store y Nintendo Tokyo / Pokémon Center en Shibuya Parco.' },
          { tag: 'COMIDA', text: 'Cena izakaya o ramen.' },
        ],
      },
      {
        date: 'Mié 29 Jul',
        title: 'Día Tech: Akihabara',
        items: [
          { tag: 'TECH', text: 'Yodobashi Akiba (9 pisos), Super Potato (retro), Mandarake.' },
          { tag: 'SALIR', text: 'Pokémon Center, arcades, maid café.' },
          { tag: 'TIP', text: 'Apple ya no es tax-free; comparar en Yodobashi/BIC Camera.' },
        ],
      },
      {
        date: 'Jue 30 Jul',
        title: 'Tokio tradicional + Apple',
        items: [
          { tag: 'ZEN', time: '9am', text: 'Senso-ji en Asakusa y la calle Nakamise.' },
          { tag: 'ZEN', text: 'Meiji Jingu: santuario en el bosque, muy tranquilo.' },
          { tag: 'TECH', text: 'Apple Store Ginza, la más grande de Japón.' },
          {
            tag: 'ZEN',
            text: 'Itoya (伊東屋) en Ginza, a 2 min del Apple Store: 12 pisos de papelería japonesa, el clip rojo gigante, papeles TAKEO (7º piso) y café con vista en el 12º. Pura estética goshuincho. Entre semana, mejor antes de las 4pm.',
          },
        ],
      },
      {
        date: 'Vie 31 Jul',
        title: 'Skytree + Pokémon (o Kamakura)',
        items: [
          { tag: 'TODOS', text: 'Tokyo Skytree + Pokémon Center Skytree Town.' },
          { tag: 'ZEN', text: 'Alt.: excursión a Kamakura, el Gran Buda de bronce.' },
          {
            tag: 'TRASLADO',
            text: 'Enviar maletas grandes a Kioto (takkyubin) desde el Nest Hotel para viajar ligeros a Hakone.',
          },
        ],
      },
    ],
  },
  {
    city: 'Hakone',
    kanji: '箱根',
    color: C.matcha,
    dates: '1 Ago',
    map: null,
    days: [
      {
        date: 'Sáb 1 Ago',
        title: 'Onsen, Fuji y ryokan',
        items: [
          {
            tag: 'TRASLADO',
            time: 'Mañana',
            text: 'Check-out del Nest (hasta 11:00). Romancecar desde Shinjuku a Hakone-Yumoto (~85 min).',
          },
          {
            tag: 'TODOS',
            text: 'Dejan maletas ligeras en el Bansuirou Fukuzumi (cerca de la estación). Tren de montaña Hakone Tozan a Gora (~40 min) + funicular a Sounzan (~10 min) + teleférico sobre Owakudani (~10 min): mirador, humos volcánicos, huevos negros, foto del Fuji.',
          },
          {
            tag: 'TRASLADO',
            time: '~15:20',
            text: 'Taxi directo Owakudani → Hakone-Yumoto (~20-25 min, sin transbordos ni colas). Se omite el barco del lago Ashi y el bus de Moto-Hakone.',
          },
          {
            tag: 'ZEN',
            time: '~16:00',
            text: 'Check-in en el ryokan. Onsen, cena kaiseki, yukata. Lo más zen del viaje.',
          },
          { tag: 'ZEN', text: 'Madrugada: mejor vista del Monte Fuji desde Hakone.' },
        ],
      },
    ],
  },
  {
    city: 'Kioto',
    kanji: '京都',
    color: C.shu,
    dates: '2 – 5 Ago',
    map: 'kioto',
    days: [
      {
        date: 'Dom 2 Ago',
        title: 'Hakone → Kioto + Gion',
        items: [
          {
            tag: 'TRASLADO',
            text: 'Check-out del ryokan. Tren a Odawara + Shinkansen a Kioto (~3h puerta a puerta, contando el transbordo en Odawara). Asiento derecho para ver el Fuji.',
          },
          {
            tag: 'TRASLADO',
            time: '~14:30',
            text: 'Check-in en Connect Inn Shichijo (auto check-in: tener el email de acceso). Las maletas de Tokio ya esperan.',
          },
          {
            tag: 'TIP',
            text: 'Impuesto de alojamiento de Kioto: pagar ¥2,400 en EFECTIVO al check-in (¥200 × 4 personas × 3 noches). No está incluido en la reserva.',
          },
          { tag: 'ZEN', text: 'Atardecer por Gion y el canal Shirakawa.' },
        ],
      },
      {
        date: 'Lun 3 Ago',
        title: 'Templos del este + té',
        items: [
          {
            tag: 'ZEN',
            time: '7am',
            text: 'Fushimi Inari: miles de torii, temprano y sin gente. Limitarse a 45-60 min (los torii de la parte baja) — subir la montaña completa toma 1.5-2h y no deja tiempo para Kiyomizu-dera y el té.',
          },
          { tag: 'ZEN', text: 'Kiyomizu-dera y las calles Sannenzaka / Ninenzaka.' },
          { tag: 'ZEN', text: 'Ceremonia del té en una machiya histórica (reservar).' },
        ],
      },
      {
        date: 'Mar 4 Ago',
        title: 'Excursión a Nara',
        items: [
          { tag: 'TODOS', text: 'Parque de Nara: alimentar a los ciervos que hacen reverencias.' },
          { tag: 'TODOS', text: 'Todai-ji: el Gran Buda de 15 metros.' },
          { tag: 'TIP', text: 'Alt.: Kinkaku-ji (Pabellón Dorado) + bambú de Arashiyama.' },
        ],
      },
    ],
  },
  {
    city: 'Osaka',
    kanji: '大阪',
    color: C.rose,
    dates: '5 – 8 Ago',
    map: 'osaka',
    days: [
      {
        date: 'Mié 5 Ago',
        title: 'Pokémon + Dotonbori',
        items: [
          {
            tag: 'TRASLADO',
            text: 'Check-out del Connect Inn. JR Special Rapid a Osaka (~30 min). Check-in en Osaka Marriott Miyako (Tennoji).',
          },
          {
            tag: 'SALIR',
            text: 'Pokémon Center Osaka DX (piso 9, sin reserva). El Pokémon Café quedó lleno todo agosto (abrió 1 jul) — vigilar cancelaciones en reserve.pokemon-cafe.jp por si se libera una mesa.',
          },
          { tag: 'COMIDA', time: 'Noche', text: 'Dotonbori: takoyaki, okonomiyaki, kushikatsu.' },
        ],
      },
      {
        date: 'Jue 6 Ago',
        title: 'Katsuo-ji: el templo de los Daruma',
        items: [
          {
            tag: 'ZEN',
            time: 'Mañana',
            text: "Día en Katsuo-ji (勝尾寺), el templo de los 'ganadores' en las montañas de Minoh, al norte. Miles de muñecos daruma rojos, naturaleza y más fresco que la ciudad.",
          },
          {
            tag: 'TRASLADO',
            text: 'Desde Tennoji: línea Midosuji (roja) directa hasta el final, Minoh-Kayano (~40-45 min). Verificar que el tren llegue hasta Minoh-Kayano (algunos terminan antes).',
          },
          {
            tag: 'TRASLADO',
            text: 'En Minoh-Kayano: Hankyu Bus Nº 30 a Katsuo-ji (~21 min, ¥800 c/u, andén 8). Para los 4, un taxi/Uber sale parecido y más cómodo.',
          },
          {
            tag: 'TODOS',
            text: 'En el templo te dan una postal en blanco y hay 6 estaciones para ir estampando sellos y completar el dibujo — pura experiencia goshuincho. Recorrido ~1h30.',
          },
          {
            tag: 'TIP',
            text: 'El bus entre semana corre cada ~30 min, 9:00-15:00. Ir en la mañana y chequear el último bus de regreso (taxi como respaldo). Llevar efectivo + IC card.',
          },
        ],
      },
      {
        date: 'Vie 7 Ago',
        title: 'Castillo, mercado y compras',
        items: [
          {
            tag: 'ZEN',
            time: 'Mañana',
            text: 'Castillo de Osaka y su parque (temprano por el calor).',
          },
          { tag: 'COMIDA', text: 'Mercado Kuromon: mariscos, frutas, comida callejera.' },
          { tag: 'TECH', text: 'Den Den Town: el Akihabara de Osaka.' },
          { tag: 'SALIR', text: 'Shinsekai de noche y Don Quijote (24h) para souvenirs.' },
        ],
      },
      {
        date: 'Sáb 8 Ago',
        title: 'Salida desde Kansai',
        items: [
          {
            tag: 'TRASLADO',
            text: 'Check-out del Marriott. Haruka Express desde Tennoji (justo abajo del hotel) a KIX (~35 min).',
          },
          {
            tag: 'TIP',
            text: 'Estar en KIX ~12:15 para el vuelo PR 411 de las 15:15 (KIX recomienda 3h para vuelos internacionales en temporada alta).',
          },
        ],
      },
    ],
  },
];
