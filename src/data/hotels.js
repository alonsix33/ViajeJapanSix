import { C } from '../styles/tokens.js';

export const HOTELS = [
  {
    group: 'Los Ángeles · Hollywood',
    color: C.sunset,
    list: [
      {
        name: 'Rodeway Inn near Melrose',
        tag: '23-25 jul',
        booked: true,
        rating: '7.6',
        price: '~$175',
        why: '777 N Vine St, Hollywood. Caminable al Paseo de la Fama. Pago al llegar, cancela gratis.',
        url: 'https://www.booking.com',
      },
      {
        name: 'The Hollywood Roosevelt',
        tag: 'Alternativa',
        rating: '4.4',
        price: '$300-450',
        why: 'El icónico, frente al Chinese Theatre y la estrella de MJ.',
        url: 'https://www.thehollywoodroosevelt.com',
      },
    ],
  },
  {
    group: 'Haneda · Noche de llegada',
    color: C.ai,
    list: [
      {
        name: 'Villa Fontaine Grand Haneda',
        tag: '27-28 jul',
        booked: true,
        rating: '8.8',
        price: '~$200',
        why: 'Conectado directo a la Terminal 3. Con onsen. Habitación tatami para 4. Cancela gratis.',
        url: 'https://www.booking.com',
      },
      {
        name: 'Royal Park Hotel Tokyo Haneda',
        tag: 'Alternativa',
        rating: '8.4',
        price: '~$230',
        why: 'También dentro de la T3.',
        url: 'https://www.booking.com',
      },
    ],
  },
  {
    group: 'Tokio · 4 noches',
    color: C.ai,
    list: [
      {
        name: 'Nest Hotel Tokyo Yaesu',
        tag: '28 jul – 1 ago',
        booked: true,
        rating: '8.6',
        price: '~$170/noche',
        why: 'Nihonbashi (Chuo-ku), a 400m del metro. Recepción 24h, 2 habitaciones. Cancela gratis.',
        url: 'https://www.booking.com',
      },
      {
        name: 'Tokyo Marriott / Courtyard',
        tag: 'Alternativa',
        rating: '4.1',
        price: '—',
        why: 'Cadenas Marriott, si prefieren Bonvoy.',
        url: 'https://www.marriott.com',
      },
    ],
  },
  {
    group: 'Hakone · Ryokan (1 noche)',
    color: C.matcha,
    list: [
      {
        name: 'Bansuirou Fukuzumi',
        tag: '1-2 ago',
        booked: true,
        rating: '9.4',
        price: '~$255',
        why: 'Hakone-Yumoto, cerca de la estación. Ryokan tradicional, baños termales, cena+desayuno. Cancela hasta 29 jul.',
        url: 'https://www.booking.com',
      },
      {
        name: 'Madoka no Mori',
        tag: 'Alternativa',
        rating: '4.7',
        price: 'Alto',
        why: 'Onsen privado en el cuarto, si quisieran subir de categoría.',
        url: 'https://www.booking.com',
      },
    ],
  },
  {
    group: 'Kioto · 3 noches',
    color: C.shu,
    list: [
      {
        name: 'Connect Inn Shichijo-Kamogawa',
        tag: '2-5 ago',
        booked: true,
        rating: '8.4',
        price: '~$300/noche',
        why: 'Apartamento entero con cocina para 4, baño privado. A ~1.2km de la estación. Auto check-in. Cancela gratis.',
        url: 'https://www.booking.com',
      },
      {
        name: 'Gozan Hotel Higashiyama',
        tag: 'Alternativa',
        rating: '4.5',
        price: '—',
        why: 'En plena zona de Gion, si querían estar caminando a los templos.',
        url: 'https://www.booking.com',
      },
    ],
  },
  {
    group: 'Osaka · 3 noches',
    color: C.rose,
    list: [
      {
        name: 'Osaka Marriott Miyako',
        tag: '5-8 ago',
        booked: true,
        rating: '4.5',
        price: '—',
        why: '5★ encima de la estación Tennoji. El Haruka a KIX sale abajo. Cancela gratis.',
        url: 'https://www.marriott.com',
      },
      {
        name: 'The Osaka Station Hotel',
        tag: 'Alternativa',
        rating: '4.5',
        price: '—',
        why: 'Marriott Autograph en Umeda, otra zona.',
        url: 'https://www.marriott.com',
      },
    ],
  },
];
