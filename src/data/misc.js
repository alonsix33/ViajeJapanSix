import { C } from '../styles/tokens.js';

export const BUDGET = [
  {
    label: 'Vuelos (ya pagados)',
    amount: '$13,464',
    note: '+ 46,580 millas LATAM Pass',
    color: C.ai,
  },
  {
    label: 'Los Ángeles (~2 días)',
    amount: '$3,090',
    note: 'hotel, comida, traslados, compras',
    color: C.sunset,
  },
  {
    label: 'Japón (12 días)',
    amount: '$13,700',
    note: 'hotel, trenes, comida, actividades',
    color: C.shu,
  },
];

export const CHECKLIST = [
  {
    urgent: false,
    text: '✓ Visa B1/B2 de EE.UU. vigente para los 4 (lista para las conexiones en LAX).',
  },
  {
    urgent: true,
    text: "Apple Watch Ultra 3 (refurbished, recojo en Apple The Grove): ordenar pronto (~17 jul) para que quede listo cerca del 23. Al recibir el correo 'ready for pickup', llamar a Apple (1-800-MY-APPLE) y extender la retención hasta el 25.",
  },
  {
    urgent: false,
    text: 'Pokémon Café Osaka: agotado todo agosto (abrió 1 jul). Vigilar cancelaciones en reserve.pokemon-cafe.jp; el Center DX no necesita reserva.',
  },
  {
    urgent: true,
    text: 'Reservar los 3 trenes (Romancecar, Shinkansen, Haruka) por SmartEX — se abren a inicios de julio.',
  },
  {
    urgent: false,
    text: '✓ K-ETA aprobado para los 4 — correo "Approved" guardado.',
  },
  { urgent: false, text: 'Verificar pasaportes electrónicos con 6+ meses de vigencia.' },
  {
    urgent: false,
    text: '✓ Hoteles reservados (los 6, con cancelación gratis). Ver pestaña Reservas.',
  },
  { urgent: false, text: 'Agregar maletas de bodega para Julisa y Adriel en los vuelos LATAM.' },
  {
    urgent: false,
    text: 'Reservar entradas: Skytree, ceremonia del té. (Universal Hollywood solo si hacen la opción A en LA).',
  },
  { urgent: false, text: 'Registrar Visit Japan Web (~1-2 semanas antes de llegar).' },
  { urgent: false, text: 'Registrar eTravel de Filipinas (72h antes del vuelo de regreso).' },
  { urgent: false, text: 'Comprar eSIM o Pocket WiFi (cubrir Japón + Corea para la escala).' },
  { urgent: false, text: 'Contratar seguro de viaje (vuelos separados = sin protección cruzada).' },
];

export const STAMPS = [
  { icon: '⭐', name: 'Estrella de MJ', kanji: '星', place: 'Hollywood', color: C.sunset },
  { icon: '🎬', name: 'Walk of Fame', kanji: '映', place: 'Hollywood', color: C.sunset },
  { icon: '⛩️', name: 'Senso-ji', kanji: '寺', place: 'Tokio', color: C.shu },
  { icon: '🌃', name: 'Shibuya', kanji: '渋', place: 'Tokio', color: C.ai },
  { icon: '🗼', name: 'Skytree', kanji: '塔', place: 'Tokio', color: C.ai },
  { icon: '🗻', name: 'Monte Fuji', kanji: '富', place: 'Hakone', color: C.matcha },
  { icon: '♨️', name: 'Onsen', kanji: '湯', place: 'Hakone', color: C.matcha },
  { icon: '⛩️', name: 'Fushimi Inari', kanji: '鳥', place: 'Kioto', color: C.shu },
  { icon: '🏯', name: 'Kiyomizu-dera', kanji: '清', place: 'Kioto', color: C.shu },
  { icon: '🦌', name: 'Ciervos de Nara', kanji: '鹿', place: 'Nara', color: C.kin },
  { icon: '🏯', name: 'Castillo Osaka', kanji: '城', place: 'Osaka', color: C.rose },
  { icon: '🍜', name: 'Dotonbori', kanji: '食', place: 'Osaka', color: C.rose },
  { icon: '⚡', name: 'Pokémon Café', kanji: '電', place: 'Osaka', color: '#E3350D' },
  { icon: '🧧', name: 'Katsuo-ji', kanji: '勝', place: 'Osaka', color: C.matcha },
];

export const TABS = [
  { id: 'general', label: 'Vista General', kanji: '概要' },
  { id: 'reservas', label: 'Reservas', kanji: '予約' },
  { id: 'vuelos', label: 'Vuelos', kanji: '空路' },
  { id: 'la', label: 'Los Ángeles', kanji: '羅府' },
  { id: 'seul', label: 'Escala Seúl', kanji: '서울' },
  { id: 'japon', label: 'Japón', kanji: '日本' },
  { id: 'hoteles', label: 'Hoteles', kanji: '宿' },
  { id: 'pokemon', label: 'Pokémon', kanji: '電' },
  { id: 'extra', label: 'Presupuesto', kanji: '予算' },
];
