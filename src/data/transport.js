// Traslados que CAMBIAN tu base (en orden cronológico)
export const TRANSPORT_MOVE = [
  {
    when: '27 jul',
    from: 'Haneda',
    to: 'Tokio (centro)',
    mode: 'Monorail / Keikyu',
    time: '~25 min',
    cost: '~¥500 p/p',
    icon: '🚝',
    reserve: false,
  },
  {
    when: '1 ago',
    from: 'Tokio (Shinjuku)',
    to: 'Hakone',
    mode: 'Odakyu Romancecar',
    time: '~85 min',
    cost: '~¥2,470 p/p',
    icon: '🚆',
    reserve: true,
  },
  {
    when: '2 ago',
    from: 'Hakone',
    to: 'Kioto',
    mode: 'Tren a Odawara + Shinkansen',
    time: '~3h puerta a puerta',
    cost: '~¥12,000 p/p',
    icon: '🚄',
    reserve: true,
  },
  {
    when: '5 ago',
    from: 'Kioto',
    to: 'Osaka (Tennoji)',
    mode: 'JR Special Rapid + Metro Midosuji',
    time: '~50-55 min (+ transbordo) — contar ~1h',
    cost: '~¥860-900 p/p',
    icon: '🚆',
    reserve: false,
  },
  {
    when: '8 ago',
    from: 'Osaka (Tennoji)',
    to: 'KIX (aeropuerto)',
    mode: 'JR Haruka Express',
    time: '~35 min',
    cost: '~¥1,710 p/p',
    icon: '✈️',
    reserve: true,
  },
];

// Excursión de un día: vuelven a dormir al MISMO lugar (Kioto)
export const TRANSPORT_DAYTRIP = [
  {
    when: '4 ago',
    from: 'Kioto',
    to: 'Nara y de regreso',
    mode: 'Kintetsu Kyuko (expreso, sin reserva) · esa noche vuelven a dormir a Kioto',
    time: '~45 min c/u',
    cost: '~¥760 p/p c/u (~¥1,520 ida y vuelta)',
    icon: '🦌',
    reserve: false,
  },
];
