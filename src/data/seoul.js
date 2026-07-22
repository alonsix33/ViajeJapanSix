// Escala en Seúl (27 jul, durante el vuelo LAX → Tokio)
export const KETA_STEPS = [
  {
    b: 'Entrar a la web oficial:',
    t: 'k-eta.go.kr (es la única oficial; cuidado con webs falsas que cobran de más).',
  },
  {
    b: "Elegir 'Group Application':",
    t: 'pueden hacer las 4 solicitudes juntas (hasta 30 personas).',
  },
  {
    b: 'Tener listo por persona:',
    t: 'pasaporte, una foto de la cara, email y tarjeta. Pasaporte con 6+ meses de vigencia.',
  },
  {
    b: 'Llenar el formulario:',
    t: 'datos del pasaporte, vuelo de llegada (Asiana OZ 203) y de salida (OZ 178), y dónde estarán (en tránsito).',
  },
  { b: 'Pagar:', t: '10,000 KRW por persona (~$7). Solo con tarjeta.' },
  {
    b: 'Esperar la aprobación:',
    t: 'suele llegar en minutos a 72h. Solicitar MÍNIMO 72 horas antes del vuelo. Vale 2-3 años.',
  },
  {
    b: 'Guardar el K-ETA:',
    t: 'llega al email. Con él aprobado quedan exentos de la e-Arrival Card.',
  },
];

export const SEOUL_PLAN = [
  {
    time: '04:00',
    tag: 'TRASLADO',
    text: 'Aterrizan en Incheon (ICN), Terminal 2. Pasan inmigración con el K-ETA ya aprobado (~45-60 min).',
  },
  {
    time: '06:00',
    tag: 'TRASLADO',
    text: 'Compran el AREX Express ida y vuelta en el counter de la T2 y van a Seoul Station (~51 min). Equipaje va directo a Tokio.',
  },
  {
    time: '07:00',
    tag: 'COMIDA',
    text: 'Llegan al centro. Desayuno coreano cerca de Myeongdong (muchos sitios abren temprano).',
  },
  {
    time: '09:00',
    tag: 'ZEN',
    text: 'Palacio Gyeongbokgung al abrir (9am) y los hanbok. El cambio de guardia NO es al abrir: es a las 10:00 y 14:00 (~20 min) — quedarse hasta verlo antes de moverse a las 10:30.',
  },
  {
    time: '10:30',
    tag: 'ZEN',
    text: 'Aldea tradicional Bukchon Hanok, al lado: casas antiguas y miradores de postal.',
  },
  {
    time: '12:30',
    tag: 'COMIDA',
    text: 'Almuerzo y paseo por Insadong (té, artesanía) o el barrio de Samcheong-dong.',
  },
  {
    time: '14:00',
    tag: 'SALIR',
    text: 'Myeongdong: compras, cosmética y comida callejera. O subir a la Torre Namsan.',
  },
  {
    time: '16:30',
    tag: 'TRASLADO',
    text: 'Volver a Seoul Station y tomar el AREX Express de regreso a ICN T2.',
  },
  {
    time: '17:30',
    tag: 'TIP',
    text: 'En el aeropuerto ~3h antes (check-in T2 cierra antes). Vuelo OZ 178 a Tokio sale 21:10.',
  },
];

export const SEOUL_TRAINS = [
  {
    name: 'AREX Express (directo)',
    reserve: true,
    time: '43-51 min',
    cost: '~13,000 KRW (~$10) · online ~11,500',
    note: 'Asiento reservado. Reservar en airportrailroad.com (hasta 20 min antes) o comprar en el counter/máquina al llegar. Ida y vuelta ~16,000 KRW. Recomendado.',
  },
  {
    name: 'AREX All-Stop (con paradas)',
    reserve: false,
    time: '58-66 min',
    cost: '~4,750 KRW (~$4)',
    note: 'Sin reserva: solo pasar la tarjeta T-money. Más lento y con más paradas. Alternativa económica.',
  },
];
