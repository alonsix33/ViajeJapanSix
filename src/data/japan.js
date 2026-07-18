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
            routes: [
              {
                mode: 'tren',
                line: 'Tokyo Monorail (Haneda Express) + JR Yamanote o Keihin-Tohoku Line',
                from: 'Aeropuerto Haneda Terminal 3, Tokio',
                to: 'Nest Hotel Tokyo Yaesu, Nihonbashi, Tokio',
                time: '~35 min',
                cost: '~¥670 p/p',
                notes:
                  'Monorriel hasta Hamamatsucho (~13 min), transbordo directo en el mismo edificio a JR Yamanote/Keihin-Tohoku, 1 parada hasta Tokyo Station (~5 min), salida Yaesu y ~12 min caminando. La IC card (Suica/Pasmo) cobra automático al cruzar de compañía. Alternativa sin transbordos: Airport Limousine Bus directo a Tokyo Station Yaesu (~55-65 min, ~¥930 p/p).',
              },
            ],
          },
          {
            tag: 'SALIR',
            time: 'Tarde',
            text: 'Shibuya: el cruce, Shibuya Sky (mirador 360°), Hachiko.',
            routes: [
              {
                mode: 'tren',
                line: 'JR Yamanote Line, dirección Shinagawa/Shibuya',
                from: 'Nest Hotel Tokyo Yaesu, Nihonbashi (caminar a Tokyo Station), Tokio',
                to: 'Estación Shibuya, Tokio',
                time: '~40 min (12 min caminando + ~25 min de tren)',
                cost: '~¥210 p/p',
                notes:
                  'Caminar a Tokyo Station (salida Yaesu/Marunouchi). Buscar letreros verdes "JR Yamanote Line", dirección Shinagawa/Shibuya (NO Ueno/Ikebukuro — es una línea circular). Directo, sin transbordos. Llegando, la salida Hachiko lleva directo al cruce.',
              },
            ],
          },
          { tag: 'TECH', text: 'Apple Store y Nintendo Tokyo / Pokémon Center en Shibuya Parco.' },
          { tag: 'COMIDA', text: 'Cena izakaya o ramen.' },
        ],
      },
      {
        date: 'Mié 29 Jul',
        title: 'Día Tech: Akihabara',
        items: [
          {
            tag: 'TECH',
            text: 'Yodobashi Akiba (9 pisos), Super Potato (retro), Mandarake.',
            routes: [
              {
                mode: 'tren',
                line: 'JR Yamanote o Keihin-Tohoku Line, dirección Ueno/Ikebukuro',
                from: 'Nest Hotel Tokyo Yaesu, Nihonbashi (caminar a Tokyo Station), Tokio',
                to: 'Estación Akihabara, Tokio',
                time: '~20 min (12 min caminando + ~5 min de tren)',
                cost: '~¥150 p/p',
                notes: 'El tramo más corto y simple del itinerario: solo 2 paradas, sin transbordos.',
              },
            ],
          },
          { tag: 'SALIR', text: 'Pokémon Center, arcades, maid café.' },
          { tag: 'TIP', text: 'Apple ya no es tax-free; comparar en Yodobashi/BIC Camera.' },
        ],
      },
      {
        date: 'Jue 30 Jul',
        title: 'Tokio tradicional + Apple',
        items: [
          {
            tag: 'ZEN',
            time: '9am',
            text: 'Senso-ji en Asakusa y la calle Nakamise.',
            routes: [
              {
                mode: 'metro',
                line: 'Toei Asakusa Line, dirección Asakusa',
                from: 'Nest Hotel Tokyo Yaesu (caminar a Estación Nihombashi), Nihonbashi, Tokio',
                to: 'Senso-ji, Asakusa, Tokio',
                time: '~16 min (5-6 min caminando + ~10 min de tren)',
                cost: '~¥220 p/p',
                notes:
                  'Estación Nihombashi tiene 3 líneas — usar la Toei Asakusa Line (compañía distinta de Tokyo Metro/JR, pero la IC card funciona igual). Directo, sin transbordos. Bajar en Estación Asakusa, salida A4, ~5 min a la puerta Kaminarimon.',
              },
            ],
          },
          {
            tag: 'ZEN',
            text: 'Meiji Jingu: santuario en el bosque, muy tranquilo.',
            routes: [
              {
                mode: 'metro',
                line: 'Tokyo Metro Ginza Line + JR Yamanote Line',
                from: 'Senso-ji, Asakusa, Tokio',
                to: 'Meiji Jingu (Estación Harajuku), Tokio',
                time: '~48 min',
                cost: '~¥390 p/p',
                notes:
                  'Ginza Line directo hasta Shibuya (Asakusa es la terminal norte de esa línea, ~35 min sin transbordos). En Shibuya, único transbordo del día: cruzar a JR Yamanote Line, 1 parada (~2 min) hasta Harajuku. El santuario está justo frente a la salida (torii gigante de madera).',
              },
            ],
          },
          {
            tag: 'TECH',
            text: 'Apple Store Ginza, la más grande de Japón.',
            routes: [
              {
                mode: 'caminar',
                line: 'A pie (Omotesando) + Tokyo Metro Ginza Line',
                from: 'Meiji Jingu (cerca de Harajuku/Omotesando), Tokio',
                to: 'Ginza (Apple Store / Itoya), Tokio',
                time: '~27 min (12 min caminando + ~13 min de tren)',
                cost: '~¥220 p/p',
                notes:
                  'Caminar por la avenida Omotesando (paseo con tiendas) hasta la Estación Omotesando. Ahí tomar la misma Ginza Line del tramo anterior, directo hasta Ginza, sin transbordos. Salida A13: Apple Store a 3 min, Itoya 2 min más allá.',
              },
            ],
          },
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
          {
            tag: 'TODOS',
            text: 'Tokyo Skytree + Pokémon Center Skytree Town.',
            routes: [
              {
                mode: 'metro',
                line: 'Toei Asakusa Line, dirección Oshiage',
                from: 'Nest Hotel Tokyo Yaesu (caminar a Estación Nihombashi), Nihonbashi, Tokio',
                to: 'Tokyo Skytree (Estación Oshiage), Tokio',
                time: '~18 min (5-6 min caminando + ~12 min de tren)',
                cost: '~¥260 p/p',
                notes:
                  'Misma línea y estación de salida que para ir a Asakusa, pero dirección Oshiage (sentido contrario). Directo, sin transbordos. La Estación Oshiage conecta por pasillos cubiertos directo a la base de la torre.',
              },
            ],
          },
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
            routes: [
              {
                mode: 'caminar',
                line: 'A pie — Karasuma-dori hacia el sur, luego Shichijo-dori al este',
                from: 'Kyoto Station, salida Karasuma Chuo-guchi (Central/Norte), Kioto',
                to: 'Connect Inn Shichijo-Kamogawa, Kioto',
                time: '~15 min',
                notes:
                  'Salir por Karasuma Chuo-guchi (la principal, frente a la Torre de Kioto), NO por Hachijo-guchi (lado Shinkansen). Calle plana, bien señalizada en inglés, 1.2km. Con maletas grandes, taxi desde la fila de Karasuma-guchi (~¥800-1000, 5 min).',
              },
            ],
          },
          {
            tag: 'TIP',
            text: 'Impuesto de alojamiento de Kioto: pagar ¥2,400 en EFECTIVO al check-in (¥200 × 4 personas × 3 noches). No está incluido en la reserva.',
          },
          {
            tag: 'ZEN',
            text: 'Atardecer por Gion y el canal Shirakawa.',
            routes: [
              {
                mode: 'tren',
                line: 'Keihan Main Line, dirección Demachiyanagi/Sanjo',
                from: 'Estación Keihan Shichijo (5 min a pie del Connect Inn), Kioto',
                to: 'Estación Keihan Gion-Shijo, Kioto',
                time: '~15 min en total (5 min caminando + 5 min de tren, 2 paradas + 5 min caminando a Yasaka-jinja)',
                cost: '~¥170 p/p',
                notes:
                  'Sin transbordos, tren local en dirección Demachiyanagi/Sanjo. Desde Gion-Shijo caminar ~5 min al este por Shijo-dori hasta Yasaka-jinja; el canal Shirakawa queda subiendo por Hanamikoji hacia el norte. Alternativa sin tren: caminar por la orilla del río Kamogawa (~30-35 min).',
              },
            ],
          },
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
            routes: [
              {
                mode: 'tren',
                line: 'JR Nara Line, tren LOCAL (futsu) — NO el rápido "Miyakoji Kaisoku", ese se salta Inari',
                from: 'Connect Inn Shichijo-Kamogawa (caminar a Kyoto Station), Kioto',
                to: 'Estación JR Inari, Kioto',
                time: '~20 min (15 min caminando a Kyoto Station + 5 min de tren, 2 paradas)',
                cost: '~¥240 p/p',
                notes:
                  'Sin transbordos. Verificar en la pantalla que el tren diga "Local", no "Rapid". La Estación JR Inari deja justo frente al torii principal. Usar tarjeta IC para evitar máquinas expendedoras en japonés.',
              },
            ],
          },
          {
            tag: 'ZEN',
            text: 'Kiyomizu-dera y las calles Sannenzaka / Ninenzaka.',
            routes: [
              {
                mode: 'tren',
                line: 'Keihan Main Line, dirección Demachiyanagi/Sanjo',
                from: 'Estación Keihan Fushimi-Inari (distinta de la Estación JR Inari, ~7 min caminando desde el santuario), Kioto',
                to: 'Estación Keihan Kiyomizu-Gojo, Kioto',
                time: '~35-40 min (7 min caminando + 7 min de tren, 2 paradas + 20-25 min caminando cuesta arriba)',
                cost: '~¥170 p/p',
                notes:
                  'Ojo: la Estación JR Inari y la Estación Keihan Fushimi-Inari son distintas, separadas por la calle comercial del santuario. Desde Kiyomizu-Gojo, la subida a la entrada del templo es empinada (Gojo-zaka, ~20-25 min). Con calor o cansancio, taxi desde la estación (~10 min, ~¥1200-1500 el auto).',
              },
            ],
          },
          {
            tag: 'ZEN',
            text: 'Ceremonia del té en una machiya histórica (reservar).',
            routes: [
              {
                mode: 'caminar',
                line: 'A pie — Sannenzaka → Ninenzaka → Yasaka-jinja → Gion',
                from: 'Kiyomizu-dera / Sannenzaka-Ninenzaka, Kioto',
                to: 'Gion / Kawaramachi (centro, zona típica de machiya de té), Kioto',
                time: '~25-30 min',
                notes:
                  'Todo cuesta abajo, ruta peatonal turística bien señalizada, sin necesidad de tren. Alternativa en bus si van cansados: Kyoto City Bus línea 100 o 206 desde la parada Kiyomizu-michi (~10 min, ~¥230 p/p).',
              },
            ],
          },
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
            routes: [
              {
                mode: 'metro',
                line: 'Osaka Metro Midosuji Line, dirección Umeda/Shin-Osaka',
                from: 'Osaka Marriott Miyako / Estación Tennoji, Osaka',
                to: 'Estación Shinsaibashi, Osaka',
                time: '~7 min',
                cost: '~¥240 p/p',
                notes:
                  'Directo, sin transbordos, 4 paradas. La Salida 4 conecta por pasillo subterráneo directo al sótano de Daimaru Shinsaibashi, donde está el Pokémon Center Osaka DX (piso 9). Dotonbori queda a ~3-5 min caminando al sur.',
              },
            ],
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
            routes: [
              {
                mode: 'metro',
                line: 'Línea Midosuji (roja)',
                from: 'Estación Tennoji, Osaka',
                to: 'Estación Minoh-Kayano',
                time: '~40-45 min',
                notes:
                  'Directo hasta el final de línea, sin transbordos. Verificar en el andén que el tren llegue hasta Minoh-Kayano — algunos terminan antes, en Esaka o Senri-Chuo.',
              },
              {
                mode: 'bus',
                line: 'Hankyu Bus Nº 30, andén 8',
                from: 'Estación Minoh-Kayano',
                to: 'Katsuo-ji',
                time: '~21 min',
                cost: '¥800 por persona',
                notes:
                  'Corre cada ~30 min entre semana, 9:00-15:00. Para los 4, un taxi/Uber sale parecido y más cómodo. Chequear el último bus de regreso; taxi como respaldo.',
              },
            ],
          },
          {
            tag: 'TODOS',
            text: 'En el templo te dan una postal en blanco y hay 6 estaciones para ir estampando sellos y completar el dibujo — pura experiencia goshuincho. Recorrido ~1h30.',
          },
          { tag: 'TIP', text: 'Llevar efectivo + IC card para el bus y el templo.' },
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
            routes: [
              {
                mode: 'metro',
                line: 'Osaka Metro Tanimachi Line, dirección Higashi-Umeda/Moriguchi',
                from: 'Osaka Marriott Miyako / Estación Tennoji, Osaka',
                to: 'Estación Tanimachi 4-chome (Puerta Otemon), Osaka',
                time: '~12 min (7 min de tren + 5 min caminando)',
                cost: '~¥240 p/p',
                notes:
                  'Directo, sin transbordos, 4 paradas. Salir hacia la Puerta Otemon, la entrada principal — mejor opción que bajar en la estación JR Osakajokoen, que deja 15-20 min caminando hasta la torre.',
              },
            ],
          },
          {
            tag: 'COMIDA',
            text: 'Mercado Kuromon: mariscos, frutas, comida callejera.',
            routes: [
              {
                mode: 'metro',
                line: 'Osaka Metro Tanimachi Line → transbordo a Osaka Metro Sennichimae Line',
                from: 'Estación Tanimachi 4-chome (Castillo de Osaka), Osaka',
                to: 'Estación Nipponbashi (Mercado Kuromon Ichiba), Osaka',
                time: '~15-20 min',
                cost: '~¥240 p/p',
                notes:
                  'Caminar ~5 min de vuelta a la estación. Línea Tanimachi dirección Namba, 1 parada hasta Tanimachi Kyuchome (transbordo en el mismo complejo de estación, señalización naranja "Sennichimae Line"). Línea Sennichimae dirección Namba, 1 parada hasta Nipponbashi. Seguir salidas hacia "Kuromon Ichiba Market".',
              },
            ],
          },
          {
            tag: 'TECH',
            text: 'Den Den Town: el Akihabara de Osaka.',
            routes: [
              {
                mode: 'caminar',
                line: 'A pie, sin tren',
                from: 'Mercado Kuromon Ichiba, Osaka',
                to: 'Den Den Town, Osaka',
                time: '~8-10 min',
                notes:
                  'Totalmente caminable. Den Den Town está inmediatamente al sur/este del mercado, sobre Sakai-suji y Nipponbashi-suji.',
              },
            ],
          },
          {
            tag: 'SALIR',
            text: 'Shinsekai de noche y Don Quijote (24h) para souvenirs.',
            routes: [
              {
                mode: 'caminar',
                line: 'A pie, sin tren',
                from: 'Den Den Town, Osaka',
                to: 'Shinsekai (Torre Tsutenkaku), Osaka',
                time: '~15 min',
                notes:
                  'Totalmente caminable. Caminar hacia el sur/suroeste; la Torre Tsutenkaku es visible desde lejos y sirve de referencia.',
              },
            ],
          },
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
