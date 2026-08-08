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
        title: 'Llegada a Haneda',
        items: [
          {
            tag: 'TRASLADO',
            time: '17:25',
            text: 'Aterrizan en Haneda T3 — vuelo JAL JL15, directo desde LAX, sin escalas. Caminan al Villa Fontaine Grand (conectado a la T3).',
          },
          {
            tag: 'TIP',
            text: 'Sacar efectivo (7-Bank), tarjeta IC Welcome Suica, activar eSIM. Cena temprano y tranquila cerca del hotel — vienen de un vuelo directo de 11h 25min. Si hay ánimo, el onsen del hotel.',
          },
          {
            tag: 'TIP',
            text: 'Etiqueta de estaciones: evitar comer parado en medio del paso de gente (en Tokio casi nadie lo hace) — mejor buscar una banca o el rincón "eat-in" de las tiendas. En las escaleras eléctricas, en Tokio y la mayoría de Japón se para del lado IZQUIERDO, dejando el derecho libre para quien va con prisa. (Ojo: esto se invierte en Kansai — Kioto, Nara y Osaka — más adelante en el viaje.)',
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
                notes:
                  'El tramo más corto y simple del itinerario: solo 2 paradas, sin transbordos.',
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
          {
            tag: 'STAR',
            time: '19:30',
            text: 'Tour JDM nocturno con Wangun OG: GTR & JDM Special Experience Tour / Daikoku & Night City. Nissan GT-R R35, 3 personas (sin mamá). Pickup 7:29-7:30 PM en el hotel (Nest Hotel Tokyo Yaesu, Nihonbashi Kabutocho 18-3), drop-off en Courtyard Tokyo Station. 3 horas: Daikoku PA (car meet, 45 min) + Rainbow Bridge (drive-through) + Tokyo Tower (foto).',
          },
          {
            tag: 'TIP',
            text: 'Reserva confirmada WGO-98164965. Volver caminando del Courtyard Tokyo Station al Nest Hotel (~5-8 min) o taxi corto si es muy tarde.',
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
            text: 'Dejan maletas ligeras en el Senkei, Yumoto 592 (cerca de la estación). Tren de montaña Hakone Tozan a Gora (~40 min) + funicular a Sounzan (~10 min) + teleférico sobre Owakudani (~10 min): mirador, humos volcánicos, huevos negros, foto del Fuji. Comprar boleto de ida (片道券) en cada tramo, no ida y vuelta — se baja en taxi.',
            routes: [
              {
                mode: 'tren',
                line: 'Hakone Tozan Railway',
                from: 'Estación Hakone-Yumoto, Hakone',
                to: 'Estación Gora, Hakone',
                time: '~40 min',
                cost: '~¥460 p/p (ida) · Suica/Pasmo funciona',
                notes:
                  'Único tramo de los 3 que acepta tarjeta IC — tocar y listo, sin boleto de papel.',
              },
              {
                mode: 'funicular',
                line: 'Hakone Tozan Cable Car',
                from: 'Estación Gora, Hakone',
                to: 'Estación Sounzan, Hakone',
                time: '~10 min',
                cost: '~¥330 p/p (ida)',
                notes:
                  'No acepta Suica — comprar boleto de ida (片道券) en la máquina o taquilla de Gora.',
              },
              {
                mode: 'teleferico',
                line: 'Hakone Ropeway',
                from: 'Estación Sounzan, Hakone',
                to: 'Owakudani, Hakone',
                time: '~10 min',
                cost: '¥2,000 p/p (ida, 片道券) — verificado en el letrero de tarifas de la estación',
                notes:
                  'Tarifa plana ("全区間均一") sea cual sea el tramo que recorras. NO acepta Suica. Comprar el 片道券 (ida) de ¥2,000, no el 往復券 (ida y vuelta) de ¥3,000, ya que la bajada es en taxi.',
              },
            ],
          },
          {
            tag: 'TRASLADO',
            time: '~15:20',
            text: 'Taxi directo Owakudani → Senkei (~20-25 min, sin transbordos ni colas). Se omite el barco del lago Ashi y el bus de Moto-Hakone.',
            routes: [
              {
                mode: 'taxi',
                line: 'Pedir por app (GO o Uber) — Owakudani NO tiene fila de taxis fija',
                from: 'Owakudani (estación del teleférico), Hakone',
                to: 'Senkei, Yumoto 592, Hakone',
                time: '~20-25 min',
                notes:
                  'Solo Togendai (al otro lado del lago) tiene parada fija de taxis. En Owakudani hay que pedirlo por la app GO o Uber (ambas funcionan en Hakone y despachan taxis con licencia). Poner como destino directo el hotel, no la estación, ya que las maletas ya están ahí. Plan B si no hay señal: bus de Izu Hakone desde Owakudani, sale cada hora (~26 min) — no es el bus de Moto-Hakone que se está evitando.',
              },
            ],
          },
          {
            tag: 'ZEN',
            time: '~16:00',
            text: 'Check-in en el ryokan (Senkei, tel. +81 460-85-5500, check-in 15:00-21:00). Onsen, cena kaiseki, yukata. Lo más zen del viaje.',
          },
          {
            tag: 'TIP',
            text: 'La cena solo se sirve si el check-in es antes de las 19:00 (si no, no la reembolsan) — con la vuelta de Owakudani a las ~16:00 hay margen de sobra, pero ojo si algo se atrasa.',
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
            text: 'OJO: son 2 ubicaciones distintas, ~1km entre ellas. Primero check-in y recojo de equipaje en la recepción (Kanade Kyoto Ekimae), luego caminata/taxi hasta el alojamiento real (Connect Inn Shichijo-Kamogawa) — no hay personal en el edificio donde se duerme.',
            routes: [
              {
                mode: 'caminar',
                line: 'A pie desde la salida Hachijo-guchi (lado Shinkansen)',
                from: 'Kyoto Station, salida Hachijo-guchi, Kioto',
                to: '奏 京都駅前レセプション (Kanade Kyoto Ekimae Reception), Minami-ku, Kioto',
                toQuery: 'Higashikujo Minamisannocho 26-1, Minami-ku, Kyoto',
                time: '~5-7 min',
                notes:
                  'Aquí se hace el check-in real y se recoge el equipaje enviado desde Tokio (confirmar con el hotel que ya haya llegado). Tel. +81 75-671-8880.',
              },
              {
                mode: 'caminar',
                line: 'A pie o taxi',
                from: '奏 京都駅前レセプション (Kanade Kyoto Ekimae Reception), Kioto',
                fromQuery: 'Higashikujo Minamisannocho 26-1, Minami-ku, Kyoto',
                to: 'Connect Inn Shichijo-Kamogawa, Higashiyama-ku, Kioto',
                time: '~15-20 min caminando (~1km)',
                notes:
                  'Con maletas después de un día de viaje, mejor taxi corto desde la recepción. Pedir ahí mismo el código/instrucciones de acceso al cuarto, ya que no hay nadie en el edificio para recibirlos.',
              },
            ],
          },
          {
            tag: 'TIP',
            text: 'Llegan 14:00-15:00, justo antes de que abra oficialmente el check-in (15:00-22:00) — confirmar con la recepción (+81 75-671-8880) si pueden esperar ahí o si hay margen para entrar antes.',
          },
          {
            tag: 'TIP',
            text: 'Impuesto de alojamiento de Kioto: pagar ¥2,400 en EFECTIVO al check-in (¥200 × 4 personas × 3 noches). No está incluido en la reserva.',
          },
          {
            tag: 'TIP',
            text: 'Cambio de región: desde aquí (Kansai — Kioto, Nara y Osaka) las escaleras eléctricas se paran del lado DERECHO, dejando el izquierdo libre para quien va con prisa — al revés que en Tokio.',
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
                time: '~15 min',
                cost: '~¥170 p/p',
                notes:
                  'Sin transbordos, tren local en dirección Demachiyanagi/Sanjo. Desde Gion-Shijo caminar ~5 min al este por Shijo-dori hasta Yasaka-jinja; el canal Shirakawa queda subiendo por Hanamikoji hacia el norte. Alternativa sin tren: caminar por la orilla del río Kamogawa (~30-35 min). Desglose del trayecto: ~5 min caminando + ~5 min de tren (2 paradas) + ~5 min caminando a Yasaka-jinja.',
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
            text: 'Fushimi Inari: entrar por el santuario principal y caminar el túnel de torii hasta el mirador Yotsutsuji (~30-40 min subiendo, mismo tiempo bajando) — con eso ya se ve lo más icónico. Seguir hasta la cima del Monte Inari suma 1.5-2h adicionales: si tienen tiempo, energía y ganas de una buena caminata, vale la pena y es lindo — pero cansa, y les quita tiempo para Kiyomizu-dera y el té. No es un "no" rotundo, solo depende de cómo vengan de ánimo ese día.',
            routes: [
              {
                mode: 'tren',
                line: 'JR Nara Line, tren LOCAL (futsu) — NO el rápido "Miyakoji Kaisoku", ese se salta Inari',
                from: 'Connect Inn Shichijo-Kamogawa (caminar a Kyoto Station), Kioto',
                to: 'Estación JR Inari, Kioto',
                time: '~20 min',
                cost: '~¥240 p/p',
                notes:
                  'Sin transbordos. Verificar en la pantalla que el tren diga "Local", no "Rapid". La Estación JR Inari deja justo frente al torii principal. Usar tarjeta IC para evitar máquinas expendedoras en japonés. Desglose del trayecto: ~15 min caminando a Kyoto Station + ~5 min de tren (2 paradas).',
              },
            ],
          },
          {
            tag: 'TIP',
            text: 'Si el grupo se divide en la subida (uno sigue, otro se cansa, etc.), acuerden un punto de encuentro FIJO antes de separarse — por ejemplo Yotsutsuji. Arriba de ese mirador el camino es un circuito que rodea la montaña: quien sube por un lado no se cruza con quien sube por el otro hasta la cima o hasta volver a bajar — así que no sirve "ya te alcanzo" sin un punto claro.',
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
                time: '~35-40 min',
                cost: '~¥170 p/p',
                notes:
                  'Ojo: la Estación JR Inari y la Estación Keihan Fushimi-Inari son distintas, separadas por la calle comercial del santuario. Desde Kiyomizu-Gojo, la subida a la entrada del templo es empinada (Gojo-zaka, ~20-25 min). Con calor o cansancio, taxi desde la estación (~10 min, ~¥1200-1500 el auto). Desglose del trayecto: ~7 min caminando + ~7 min de tren (2 paradas) + ~20-25 min caminando cuesta arriba.',
              },
            ],
          },
          {
            tag: 'COMIDA',
            time: '12:30pm',
            text: 'Almuerzo bajando por Sannenzaka/Ninenzaka: la callejuela está llena de puestos y restaurantes chicos — yudofu (tofu hervido), udon, croquetas, dango. No hace falta reservar, se come de pie o en algún local pequeño de camino a Gion. La ceremonia del té más tarde trae dulces (wagashi), pero no reemplaza el almuerzo.',
          },
          {
            tag: 'ZEN',
            text: 'Ceremonia del té en una machiya histórica (reservar).',
            routes: [
              {
                mode: 'caminar',
                line: 'A pie — Sannenzaka → Ninenzaka → Yasaka-jinja → Gion',
                from: 'Kiyomizu-dera, Kioto',
                to: 'Gion (centro, zona típica de machiya de té), Kioto',
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
          {
            tag: 'TRASLADO',
            time: '7:30am',
            text: 'Ida a Nara: caminar a Kyoto Station y tomar el Kintetsu Kyuko (expreso, sin reserva) hasta Kintetsu-Nara. Esa estación queda mucho más cerca del parque y el Gran Buda que la Estación JR Nara — por eso Kintetsu y no JR para este tramo, aunque el costo sea casi igual.',
            routes: [
              {
                mode: 'caminar',
                line: 'A pie hasta los andenes de Kintetsu',
                from: 'Connect Inn Shichijo-Kamogawa, Kioto',
                to: 'Kyoto Station (andenes Kintetsu, lado central/Hachijo-guchi), Kioto',
                toQuery: 'Kyoto Station, Kyoto',
                time: '~15 min',
                notes:
                  'Los andenes de Kintetsu están en el extremo este de Kyoto Station, señalizados en naranja.',
              },
              {
                mode: 'tren',
                line: 'Kintetsu Kyoto Line, Kyuko (expreso) — no hace falta el Limited Express con reserva',
                from: 'Kyoto Station, Kioto',
                to: 'Kintetsu Nara Station, Nara',
                time: '~45 min',
                cost: '~¥760 p/p',
                notes:
                  'Sale cada 15-30 min, sin reserva. Ojo: algunos trenes de esta línea no llegan directo a Nara y piden transbordo en Yamato-Saidaiji (mismo andén, 2 paradas más) — mirar el letrero del tren o preguntar antes de subir. Llegando a Kintetsu Nara Station, el Parque de Nara y el Gran Buda quedan a ~5-10 min caminando (vs. ~20-25 min desde la Estación JR Nara).',
              },
            ],
          },
          {
            tag: 'TIP',
            text: 'JR y Kintetsu son compañías distintas con torniquetes separados, aunque compartan el mismo edificio de Kyoto Station — no hay pase interno de uno a otro. Si entran por JR y quieren Kintetsu (o viceversa), hay que salir y volver a entrar. Con ICOCA, entrar y salir de la misma estación sin viajar sí puede cobrar tarifa mínima.',
          },
          {
            tag: 'TIP',
            text: 'Si pasan un torniquete por error (línea equivocada, o entraron sin querer), díganselo al personal de la caseta ahí mismo — siempre ayudan a corregirlo sin problema, no hay que resolverlo solos.',
          },
          {
            tag: 'TODOS',
            time: '9:00am',
            text: 'Parque de Nara: alimentar a los ciervos que hacen reverencias. Ir temprano, antes de que lleguen los tours grandes (y antes de que apriete el calor de agosto).',
          },
          {
            tag: 'TODOS',
            time: '10:00am',
            text: 'Todai-ji: el Gran Buda de 15 metros. Daibutsu-den abre 7:30am-5:30pm en agosto, entrada ¥800 adultos. Llevar agua y protección solar — el mediodía en Nara es caluroso y hay poca sombra en el parque.',
          },
          { tag: 'TIP', text: 'Alt.: Kinkaku-ji (Pabellón Dorado) + bambú de Arashiyama.' },
          {
            tag: 'TRASLADO',
            time: '4:30pm',
            text: 'Regreso a Kioto: mismo camino en sentido inverso. Salir a media tarde para evitar la hora pico de las 5-6pm y llegar con tiempo de sobra para cenar en Kioto.',
            routes: [
              {
                mode: 'tren',
                line: 'Kintetsu Kyoto Line, Kyuko (expreso)',
                from: 'Kintetsu Nara Station, Nara',
                to: 'Kyoto Station, Kioto',
                time: '~45 min',
                cost: '~¥760 p/p',
                notes:
                  'Mismo tipo de tren que a la ida, sin reserva. Confirmar que no pida transbordo en Yamato-Saidaiji.',
              },
              {
                mode: 'caminar',
                line: 'A pie desde los andenes Kintetsu',
                from: 'Kyoto Station, Kioto',
                to: 'Connect Inn Shichijo-Kamogawa, Kioto',
                time: '~15 min',
              },
            ],
          },
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
            text: 'Check-out del Connect Inn — día de mudanza completa, cargan con todo el equipaje (a diferencia de Hakone, aquí no se manda nada por takkyubin). JR Special Rapid a Osaka + transbordo a la Línea Midosuji hasta Tennoji (~1h puerta a puerta). Check-in en Osaka Marriott Miyako.',
            routes: [
              {
                mode: 'tren',
                line: 'JR Special Rapid (Shinkaisoku, 新快速)',
                from: 'Estación de Kioto, Kioto',
                fromQuery: 'Kyoto Station, Kyoto',
                to: 'Estación de Osaka (Umeda), Osaka',
                toQuery: 'Osaka Station, Osaka',
                time: '~29 min',
                cost: '~¥580 p/p',
                notes:
                  'Directo, sin transbordos dentro de este tramo. Toque de Suica al entrar y salir, sin reserva.',
              },
              {
                mode: 'metro',
                line: 'Osaka Metro Midosuji Line (roja), dirección sur (Namba/Tennoji)',
                from: 'Estación de Osaka (caminar a Umeda Station, Osaka Metro), Osaka',
                fromQuery: 'Umeda Station, Osaka',
                to: 'Estación Tennoji, Osaka',
                toQuery: 'Tennoji Station, Osaka',
                time: '~15-20 min (+ ~5-8 min caminando el transbordo)',
                cost: '~¥280-320 p/p',
                notes:
                  'La Estación JR de Osaka y Umeda Station (metro) están conectadas/muy cerca. Mismo Suica sirve para ambos sistemas, sin reserva. Día de mudanza completa (todo el equipaje) — dar margen extra en el transbordo y usar ascensores si están disponibles.',
              },
            ],
          },
          {
            tag: 'TIP',
            text: 'No usar el Haruka Express para este tramo: aunque es directo (sin transbordo), cuesta ¥1,890-2,400 p/p — el descuento turístico del Haruka solo aplica hacia/desde el aeropuerto de Kansai — vs. ~¥860-900 p/p total por JR + Metro.',
          },
          {
            tag: 'TIP',
            text: 'Cuidado con los trenes "Limited Express" (Thunderbird, Haruka, etc.): casi siempre piden un boleto adicional aparte de la tarjeta IC (Suica/ICOCA), y Google Maps a veces solo muestra la tarifa base sin ese suplemento. Para tramos cortos entre ciudades, prefieran el que diga "Rapid" o "Local" — no necesitan reserva ni boleto extra. Si Google Maps no deja claro qué tipo de tren es, una búsqueda con IA (ChatGPT, Gemini, etc.) suele explicarlo mejor, o simplemente pregúntenle al personal de la estación.',
          },
          {
            tag: 'SALIR',
            text: 'Pokémon Center Osaka DX (piso 9, sin reserva). El Pokémon Café quedó lleno todo agosto (abrió 1 jul) — vigilar cancelaciones en reserve.pokemon-cafe.jp por si se libera una mesa.',
            routes: [
              {
                mode: 'metro',
                line: 'Osaka Metro Midosuji Line, dirección Umeda/Shin-Osaka',
                from: 'Estación Tennoji, Osaka',
                fromQuery: 'Tennoji Station, Osaka',
                to: 'Estación Shinsaibashi, Osaka',
                time: '~7 min',
                cost: '~¥240 p/p',
                notes:
                  'Directo, sin transbordos, 4 paradas. La Salida 4 conecta por pasillo subterráneo directo al sótano de Daimaru Shinsaibashi, donde está el Pokémon Center Osaka DX (piso 9). Dotonbori queda a ~3-5 min caminando al sur.',
              },
            ],
          },
          {
            tag: 'STAR',
            time: 'Noche',
            text: '🦀 Parada obligada: el cangrejo gigante de Kani Doraku y el letrero del corredor Glico en el puente Ebisubashi — los dos íconos de Dotonbori, e inspiración real del distrito "Sotenbori" de los videojuegos Yakuza / Like a Dragon (el cangrejo del juego es casi idéntico a este). Foto sí o sí antes de cenar.',
            routes: [
              {
                mode: 'caminar',
                line: 'A pie desde el Pokémon Center (Daimaru Shinsaibashi)',
                from: 'Pokémon Center Osaka DX, Shinsaibashi, Osaka',
                to: 'Kani Doraku Dotonbori, Osaka',
                time: '~5 min',
                notes:
                  'Caminen al sur hasta cruzar el canal Dotonbori — el cangrejo gigante se ve desde lejos, iluminado. El letrero de Glico (el corredor de neón) está 1-2 min más allá, sobre el puente Ebisubashi.',
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
                fromQuery: 'Tennoji Station, Osaka',
                to: 'Estación Minoh-Kayano, Osaka',
                time: '~40-45 min',
                notes:
                  'Directo hasta el final de línea, sin transbordos. Verificar en el andén que el tren llegue hasta Minoh-Kayano — algunos terminan antes, en Esaka o Senri-Chuo.',
              },
              {
                mode: 'bus',
                line: 'Hankyu Bus Nº 30, andén 8',
                from: 'Estación Minoh-Kayano, Osaka',
                to: 'Katsuo-ji, Minoo, Osaka',
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
          {
            tag: 'TIP',
            text: 'Los Katsu Daruma (los muñecos rojos de la victoria) se compran subiendo, cerca del templo principal — no en la tienda de souvenirs de la entrada.',
          },
        ],
      },
      {
        date: 'Vie 7 Ago',
        title: 'Castillo, Umeda Sky Building y Shinsekai',
        items: [
          {
            tag: 'ZEN',
            time: 'Mañana',
            text: 'Castillo de Osaka y su parque (temprano por el calor).',
            routes: [
              {
                mode: 'metro',
                line: 'Osaka Metro Tanimachi Line, dirección Higashi-Umeda/Moriguchi',
                from: 'Estación Tennoji, Osaka',
                fromQuery: 'Tennoji Station, Osaka',
                to: 'Estación Tanimachi 4-chome (Puerta Otemon), Osaka',
                time: '~12 min (7 min de tren + 5 min caminando)',
                cost: '~¥240 p/p',
                notes:
                  'Directo, sin transbordos, 4 paradas. Salir hacia la Puerta Otemon, la entrada principal — mejor opción que bajar en la estación JR Osakajokoen, que deja 15-20 min caminando hasta la torre.',
              },
            ],
          },
          {
            tag: 'STAR',
            text: 'Umeda Sky Building (梅田スカイビル) — el mirador flotante entre las dos torres, ¥2,000 p/p, abierto hasta las 10:30pm. Reemplazó al Mercado Kuromon y Den Den Town en el plan original.',
            routes: [
              {
                mode: 'metro',
                line: 'Osaka Metro Tanimachi Line, misma dirección Higashi-Umeda',
                from: 'Estación Tanimachi 4-chome (Castillo de Osaka), Osaka',
                to: 'Estación Higashi-Umeda, Osaka',
                time: '~10-12 min',
                cost: '~¥240 p/p',
                notes:
                  'Sin transbordo, siguiendo la misma línea que trajo del castillo. De ahí, ~9 min caminando siguiendo los carteles color café con la silueta del edificio (pasillo subterráneo "Shin Umeda City", bien señalizado en inglés).',
              },
            ],
          },
          {
            tag: 'SALIR',
            text: 'Shinsekai de noche y Don Quijote (24h) para souvenirs.',
            routes: [
              {
                mode: 'metro',
                line: 'Osaka Metro Midosuji Line, dirección Namba/Tennoji',
                from: 'Umeda Sky Building, Osaka',
                fromQuery: 'Umeda Station, Osaka',
                to: 'Estación Dobutsuen-mae (Shinsekai), Osaka',
                toQuery: 'Dobutsuen-mae Station, Osaka',
                time: '~13 min',
                cost: '~¥230 p/p',
                notes:
                  'Directo, sin transbordos. La Torre Tsutenkaku y Shinsekai quedan a un par de minutos caminando desde la salida de la estación.',
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
