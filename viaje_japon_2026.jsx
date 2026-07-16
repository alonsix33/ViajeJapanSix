import React, { useState, useEffect } from "react";

/* ============================================================
   VIAJE 2026 · Los Ángeles & Japón
   Estética: Goshuincho (御朱印帳) — cuaderno de sellos de viaje
   ============================================================ */

const C = {
  sumi: "#1F1B17", ai: "#1B3A5C", aiDeep: "#142C46", shu: "#C8442E", shuSoft: "#E07A5F",
  kin: "#C9A227", washi: "#F4EEE2", washi2: "#EFE6D4", matcha: "#5E7D4F", sora: "#3E7CB1",
  sunset: "#E08A3C", rose: "#A14B6A", line: "#D8CBB3",
};

const TAGS = {
  TECH:     { label: "TECH",     color: "#2E6FA3", bg: "#E8F1F8" },
  ZEN:      { label: "ZEN",      color: "#5E7D4F", bg: "#EBF1E6" },
  SALIR:    { label: "SALIR",    color: "#C8442E", bg: "#FBE7E3" },
  TODOS:    { label: "TODOS",    color: "#B8860B", bg: "#FBF3E0" },
  COMIDA:   { label: "COMIDA",   color: "#A9762B", bg: "#F7EEDD" },
  TRASLADO: { label: "TRASLADO", color: "#6B7280", bg: "#EFF0F1" },
  TIP:      { label: "TIP",      color: "#1E8449", bg: "#E7F4EC" },
  STAR:     { label: "★",        color: "#8E44AD", bg: "#F1E8F7" },
};

const FONT_D = "'Shippori Mincho', 'Times New Roman', serif";
const FONT_B = "'Zen Kaku Gothic New', system-ui, sans-serif";
const FONT_R = "'Zen Maru Gothic', system-ui, sans-serif";
const FONT_KR = "'Nanum Myeongjo', 'Shippori Mincho', serif";
const FONT_GTA = "'Pricedown', 'Zen Kaku Gothic New', sans-serif";

const seigaiha =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='45'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.10' stroke-width='1.4'%3E%3Cpath d='M0 45 A45 45 0 0 1 90 45'/%3E%3Cpath d='M0 45 A33 33 0 0 1 66 45'/%3E%3Cpath d='M24 45 A33 33 0 0 1 90 45'/%3E%3Cpath d='M0 45 A21 21 0 0 1 42 45'/%3E%3Cpath d='M48 45 A21 21 0 0 1 90 45'/%3E%3C/g%3E%3C/svg%3E\")";

// Changsal (창살): enrejado de ventana hanok coreana — geométrico, como en Gyeongbokgung
const changsal =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.09' stroke-width='1.1'%3E%3Cpath d='M0 0 H60 M0 30 H60 M0 60 H60'/%3E%3Cpath d='M0 0 V60 M30 0 V60 M60 0 V60'/%3E%3Cpath d='M15 0 L30 15 L15 30 L0 15 Z'/%3E%3Cpath d='M45 0 L60 15 L45 30 L30 15 Z'/%3E%3Cpath d='M15 30 L30 45 L15 60 L0 45 Z'/%3E%3Cpath d='M45 30 L60 45 L45 60 L30 45 Z'/%3E%3C/g%3E%3C/svg%3E\")";

// Art Déco: abanico de rayos de la Época Dorada de Hollywood (Pantages, palacios de cine)
const artDeco =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.10' stroke-width='1.1'%3E%3Cpath d='M0 80 L0 28'/%3E%3Cpath d='M0 80 L20 33'/%3E%3Cpath d='M0 80 L42 42'/%3E%3Cpath d='M0 80 L62 56'/%3E%3Cpath d='M0 80 L80 72'/%3E%3Cpath d='M0 52 A28 28 0 0 1 28 80'/%3E%3Cpath d='M0 24 A56 56 0 0 1 56 80'/%3E%3C/g%3E%3C/svg%3E\")";



const MTYPE = {
  sight:   { c: "#C8442E", label: "Templo / Atracción" },
  hotel:   { c: "#1B3A5C", label: "Hotel / Base" },
  station: { c: "#C9A227", label: "Estación / Hub" },
  play:    { c: "#A14B6A", label: "Comer y salir" },
  nature:  { c: "#5E7D4F", label: "Naturaleza" },
  tech:    { c: "#3E7CB1", label: "Tech" },
  airport: { c: "#7A7A7A", label: "Aeropuerto" },
};

const TRAVELERS = ["Javier", "Julisa", "Alonso", "Adriel"];

const FLIGHTS = [
  { n: "LA 2478", airline: "LATAM", date: "Jue 23 Jul", from: "LIM", to: "LAX",
    fromCity: "Lima", toCity: "Los Ángeles", dep: "00:40", arr: "07:50",
    plane: "Boeing 767", fare: "Economy Light", pnr: "FISZIV", price: "USD 4,116.58",
    extra: ["1 maleta de bodega 23kg incluida", "Llega a LAX Terminal B"], legs: [] },
  { n: "OZ 203 / OZ 178", airline: "Asiana", date: "Sáb 25 Jul", from: "LAX", to: "HND",
    fromCity: "Los Ángeles", toCity: "Tokio Haneda", dep: "23:00", arr: "23:30 (+2)",
    plane: "Airbus A350 / A330", fare: "Economy", pnr: "BV7OJC", price: "USD 2,807.98",
    extra: ["Ref. JustFly: 296-759-672", "Escala 17h 10min en Seúl (ICN)", "Llega a Haneda Terminal 3"],
    legs: ["LAX 23:00 → ICN 04:00 (+2)", "Escala 17h 10min · Seúl", "ICN 21:10 → HND 23:30 (+2)"] },
  { n: "PR 411 / PR 122", airline: "Philippine Airlines", date: "Sáb 8 Ago", from: "KIX", to: "LAX",
    fromCity: "Osaka Kansai", toCity: "Los Ángeles", dep: "15:15", arr: "13:45 (+1)",
    plane: "Airbus A330 / Boeing 777", fare: "Economy Value", pnr: "X64MHH", price: "USD 4,712.42",
    extra: ["Reacomodados: PR 112 cancelado → ahora PR 122 (reconfirmar asientos)", "Escala 20h 35min en Manila (MNL)"],
    legs: ["KIX 15:15 → MNL 18:40", "Escala 20h 35min · Manila", "MNL 15:15 → LAX 13:45 (+1)"] },
  { n: "LA 2477", airline: "LATAM", date: "Dom 9 Ago", from: "LAX", to: "LIM",
    fromCity: "Los Ángeles", toCity: "Lima", dep: "21:30", arr: "08:05 (+1)",
    plane: "Boeing 767", fare: "Economy Light", pnr: "SBPTJN + CLFHNJ", price: "USD 1,827.30",
    extra: ["Javier: millas LATAM Pass (reserva SBPTJN, asiento 27C)", "Julisa, Alonso y Adriel: reserva CLFHNJ", "Mismo vuelo, dos reservas separadas"], legs: [] },
];

const TRANSFERS = [
  { label: "En Los Ángeles (ida)", time: "~2 días", note: "23 Jul 7:50 → 25 Jul 23:00", color: C.sunset },
  { label: "Escala en Seúl", time: "17h 10min", note: "Pueden salir a recorrer la ciudad", color: C.sora },
  { label: "En Japón", time: "12 días", note: "27 Jul → 8 Ago", color: C.shu },
  { label: "Escala en Manila", time: "20h 35min", note: "Escala nocturna · misma terminal (T1)", color: C.matcha },
  { label: "En LAX (regreso)", time: "~7h 45min", note: "9 Ago 13:45 → 9 Ago 21:30", color: C.kin },
];

const MAPS = {
  la: {
    title: "Los Ángeles", kanji: "羅府", vb: "0 0 400 290",
    points: [
      { id: "lax", x: 80, y: 248, t: "airport", icon: "✈️", label: "LAX = LSIA", note: "Aeropuerto. Uber a Hollywood ~40 min." },
      { id: "venice", x: 38, y: 205, t: "nature", icon: "🏝️", label: "Venice", note: "Venice Beach = Vespucci Beach: malecón, Muscle Beach, canchas de básquet, artistas." },
      { id: "smonica", x: 48, y: 168, t: "nature", icon: "🎡", label: "Santa Monica", note: "Santa Monica Pier = Del Perro Pier: rueda de la fortuna sobre el Pacífico. ~30 min." },
      { id: "grove", x: 135, y: 150, t: "play", icon: "🛍️", label: "Beverly Hills", note: "= Rockford Hills: Rodeo Drive, The Grove (Apple Store), casa de MJ (Carolwood)." },
      { id: "hollywood", x: 205, y: 112, t: "hotel", icon: "⭐", label: "Hollywood", note: "Su base = Vinewood: Paseo de la Fama, estrella de MJ, hotel." },
      { id: "griffith", x: 258, y: 88, t: "sight", icon: "🔭", label: "Griffith Obs.", note: "= Galileo Observatory. Vistas del cartel de Hollywood, atardecer. Gratis." },
    ],
    lines: [["hollywood","lax",1],["hollywood","griffith",1],["hollywood","smonica",1],["smonica","venice",0],["hollywood","grove",1]],
  },
  tokio: {
    title: "Tokio", kanji: "東京", vb: "0 0 400 330",
    points: [
      { id: "shinjuku", x: 120, y: 95, t: "station", icon: "🚉", label: "Shinjuku", note: "Hub de trenes. De aquí sale el Romancecar a Hakone." },
      { id: "meiji", x: 145, y: 130, t: "nature", icon: "⛩️", label: "Meiji Jingu", note: "Santuario en el bosque, junto a Harajuku. Tranquilo." },
      { id: "shibuya", x: 135, y: 168, t: "play", icon: "🌃", label: "Shibuya", note: "El cruce, Shibuya Sky, Pokémon Center, Apple Store." },
      { id: "akihabara", x: 258, y: 118, t: "tech", icon: "🎮", label: "Akihabara", note: "Electrónica, anime, retro gaming, maid cafés." },
      { id: "tokyost", x: 268, y: 160, t: "sight", icon: "🍎", label: "Ginza", note: "Apple Ginza + Itoya (伊東屋), 12 pisos de papelería. Courtyard Marriott cerca." },
      { id: "asakusa", x: 322, y: 78, t: "sight", icon: "⛩️", label: "Asakusa", note: "Senso-ji, el templo más antiguo de Tokio." },
      { id: "skytree", x: 340, y: 105, t: "sight", icon: "🗼", label: "Skytree", note: "La torre más alta + Pokémon Center." },
      { id: "teamlab", x: 305, y: 228, t: "tech", icon: "✨", label: "teamLab (Toyosu)", note: "Arte digital inmersivo. Reservar antes." },
      { id: "shinagawa", x: 215, y: 240, t: "hotel", icon: "🏨", label: "Shinagawa", note: "Tokyo Marriott. Hub al sur, fácil a Haneda." },
      { id: "haneda", x: 235, y: 308, t: "airport", icon: "✈️", label: "Haneda", note: "Aeropuerto de llegada (27 jul, 23:30)." },
    ],
    lines: [["shinjuku","shibuya",0],["shibuya","shinagawa",0],["shinagawa","tokyost",0],["tokyost","akihabara",0],["tokyost","asakusa",0],["asakusa","skytree",0],["shinagawa","haneda",1],["tokyost","teamlab",1],["shinjuku","meiji",0]],
  },
  kioto: {
    title: "Kioto y Nara", kanji: "京都", vb: "0 0 400 320",
    points: [
      { id: "kyotost", x: 180, y: 232, t: "station", icon: "🚄", label: "Kyoto Station", note: "Llegada del Shinkansen. Trenes a Nara y Osaka." },
      { id: "fushimi", x: 215, y: 285, t: "sight", icon: "⛩️", label: "Fushimi Inari", note: "Miles de torii rojos. Ir al amanecer." },
      { id: "gion", x: 268, y: 162, t: "hotel", icon: "🏮", label: "Gion / Higashiyama", note: "Su base. Geishas, calles antiguas, Yasaka." },
      { id: "kiyomizu", x: 285, y: 190, t: "sight", icon: "🏯", label: "Kiyomizu-dera", note: "Templo con plataforma y vistas. Caminable desde Gion." },
      { id: "kinkakuji", x: 110, y: 82, t: "sight", icon: "🟡", label: "Kinkaku-ji", note: "Pabellón Dorado. Noroeste de la ciudad." },
      { id: "arashiyama", x: 48, y: 152, t: "nature", icon: "🎋", label: "Arashiyama", note: "Bosque de bambú. Al oeste." },
      { id: "nara", x: 255, y: 300, t: "sight", icon: "🦌", label: "→ Nara", note: "Ciervos y Gran Buda. ~45 min en tren desde Kioto." },
    ],
    lines: [["kyotost","fushimi",0],["kyotost","gion",0],["gion","kiyomizu",0],["kyotost","nara",1],["kyotost","arashiyama",0],["kyotost","kinkakuji",1]],
  },
  osaka: {
    title: "Osaka", kanji: "大阪", vb: "0 0 400 320",
    points: [
      { id: "umeda", x: 188, y: 70, t: "station", icon: "🚉", label: "Umeda / Osaka St.", note: "Hub norte. The Osaka Station Hotel." },
      { id: "castle", x: 268, y: 132, t: "sight", icon: "🏯", label: "Castillo de Osaka", note: "Castillo y parque. Ir temprano." },
      { id: "namba", x: 188, y: 175, t: "play", icon: "🍜", label: "Namba / Dotonbori", note: "Neones, comida, Pokémon Café (Shinsaibashi)." },
      { id: "denden", x: 205, y: 207, t: "tech", icon: "🎮", label: "Den Den Town", note: "El Akihabara de Osaka. Tech y anime." },
      { id: "tennoji", x: 208, y: 248, t: "hotel", icon: "🏨", label: "Tennoji", note: "Osaka Marriott Miyako. El tren a KIX sale aquí." },
      { id: "katsuoji", x: 236, y: 18, t: "nature", icon: "🧧", label: "Katsuo-ji", note: "Templo de los Daruma, en las montañas de Minoh (norte). Midosuji a Minoh-Kayano + bus." },
      { id: "kix", x: 92, y: 300, t: "airport", icon: "✈️", label: "→ KIX", note: "Aeropuerto. Haruka Express desde Tennoji ~50 min." },
    ],
    lines: [["umeda","namba",0],["namba","tennoji",0],["namba","denden",0],["umeda","castle",0],["tennoji","kix",1],["umeda","katsuoji",1]],
  },
  seul: {
    title: "Seúl", kanji: "서울", vb: "0 0 400 290",
    points: [
      { id: "icn", x: 48, y: 175, t: "airport", icon: "✈️", label: "Incheon (ICN)", note: "Llegan a la T2. AREX Express a Seoul Station ~51 min." },
      { id: "seoulst", x: 178, y: 205, t: "station", icon: "🚉", label: "Seoul Station", note: "Donde llega el AREX. Hub de metro hacia todo el centro." },
      { id: "gyeong", x: 212, y: 66, t: "sight", icon: "🏯", label: "Gyeongbokgung", note: "El gran palacio. Abre 9am, cambio de guardia y hanbok." },
      { id: "bukchon", x: 256, y: 88, t: "sight", icon: "🏘️", label: "Bukchon Hanok", note: "Aldea tradicional de casas antiguas, junto al palacio." },
      { id: "insadong", x: 232, y: 132, t: "play", icon: "🍵", label: "Insadong", note: "Té, artesanía y galerías. Camino entre el palacio y el centro." },
      { id: "myeong", x: 210, y: 165, t: "play", icon: "🛍️", label: "Myeongdong", note: "Compras, cosmética y comida callejera. Corazón comercial." },
      { id: "namsan", x: 256, y: 200, t: "nature", icon: "🗼", label: "N Seoul Tower", note: "Mirador de la ciudad en el monte Namsan. Teleférico." },
    ],
    lines: [["icn","seoulst",0],["seoulst","myeong",0],["myeong","insadong",0],["insadong","gyeong",0],["gyeong","bukchon",0],["myeong","namsan",1]],
  },
};

// Traslados que CAMBIAN tu base (en orden cronológico)
const TRANSPORT_MOVE = [
  { when: "27 jul", from: "Haneda", to: "Tokio (centro)", mode: "Monorail / Keikyu", time: "~25 min", cost: "~¥500 p/p", icon: "🚝", reserve: false },
  { when: "1 ago", from: "Tokio (Shinjuku)", to: "Hakone", mode: "Odakyu Romancecar", time: "~85 min", cost: "~¥2,470 p/p", icon: "🚆", reserve: true },
  { when: "2 ago", from: "Hakone", to: "Kioto", mode: "Tren a Odawara + Shinkansen", time: "~2h 15min", cost: "~¥12,000 p/p", icon: "🚄", reserve: true },
  { when: "5 ago", from: "Kioto", to: "Osaka", mode: "JR Special Rapid", time: "~30 min", cost: "~¥580 p/p", icon: "🚆", reserve: false },
  { when: "8 ago", from: "Osaka (Tennoji)", to: "KIX (aeropuerto)", mode: "JR Haruka Express", time: "~50 min", cost: "~¥1,710 p/p", icon: "✈️", reserve: true },
];

// Excursión de un día: vuelven a dormir al MISMO lugar (Kioto)
const TRANSPORT_DAYTRIP = [
  { when: "4 ago", from: "Kioto", to: "Nara y de regreso", mode: "Kintetsu / JR · esa noche vuelven a dormir a Kioto", time: "~45 min c/u", cost: "~¥720 p/p", icon: "🦌", reserve: false },
];

// Escala en Seúl (27 jul, durante el vuelo LAX → Tokio)
const KETA_STEPS = [
  { b: "Entrar a la web oficial:", t: "k-eta.go.kr (es la única oficial; cuidado con webs falsas que cobran de más)." },
  { b: "Elegir 'Group Application':", t: "pueden hacer las 4 solicitudes juntas (hasta 30 personas)." },
  { b: "Tener listo por persona:", t: "pasaporte, una foto de la cara, email y tarjeta. Pasaporte con 6+ meses de vigencia." },
  { b: "Llenar el formulario:", t: "datos del pasaporte, vuelo de llegada (Asiana OZ 203) y de salida (OZ 178), y dónde estarán (en tránsito)." },
  { b: "Pagar:", t: "10,000 KRW por persona (~$7). Solo con tarjeta." },
  { b: "Esperar la aprobación:", t: "suele llegar en minutos a 72h. Solicitar MÍNIMO 72 horas antes del vuelo. Vale 2-3 años." },
  { b: "Guardar el K-ETA:", t: "llega al email. Con él aprobado quedan exentos de la e-Arrival Card." },
];

const SEOUL_PLAN = [
  { time: "04:00", tag: "TRASLADO", text: "Aterrizan en Incheon (ICN), Terminal 2. Pasan inmigración con el K-ETA ya aprobado (~45-60 min)." },
  { time: "06:00", tag: "TRASLADO", text: "Compran el AREX Express ida y vuelta en el counter de la T2 y van a Seoul Station (~51 min). Equipaje va directo a Tokio." },
  { time: "07:00", tag: "COMIDA", text: "Llegan al centro. Desayuno coreano cerca de Myeongdong (muchos sitios abren temprano)." },
  { time: "09:00", tag: "ZEN", text: "Palacio Gyeongbokgung al abrir (9am). Cambio de guardia y los hanbok. Lo más icónico." },
  { time: "10:30", tag: "ZEN", text: "Aldea tradicional Bukchon Hanok, al lado: casas antiguas y miradores de postal." },
  { time: "12:30", tag: "COMIDA", text: "Almuerzo y paseo por Insadong (té, artesanía) o el barrio de Samcheong-dong." },
  { time: "14:00", tag: "SALIR", text: "Myeongdong: compras, cosmética y comida callejera. O subir a la Torre Namsan." },
  { time: "16:30", tag: "TRASLADO", text: "Volver a Seoul Station y tomar el AREX Express de regreso a ICN T2." },
  { time: "17:30", tag: "TIP", text: "En el aeropuerto ~3h antes (check-in T2 cierra antes). Vuelo OZ 178 a Tokio sale 21:10." },
];

const SEOUL_TRAINS = [
  { name: "AREX Express (directo)", reserve: true, time: "43-51 min", cost: "~13,000 KRW (~$10) · online ~11,500", note: "Asiento reservado. Reservar en airportrailroad.com (hasta 20 min antes) o comprar en el counter/máquina al llegar. Ida y vuelta ~16,000 KRW. Recomendado." },
  { name: "AREX All-Stop (con paradas)", reserve: false, time: "58-66 min", cost: "~4,750 KRW (~$4)", note: "Sin reserva: solo pasar la tarjeta T-money. Más lento y con más paradas. Alternativa económica." },
];


const LA_DAYS = [
  { date: "Jue 23 Jul", kanji: "着", title: "Llegada + Paseo de la Fama", items: [
    { tag: "TRASLADO", time: "7:50", text: "Aterrizan en LAX. Inmigración y aduana (~1.5h)." },
    { tag: "TRASLADO", time: "~10:30", text: "Uber XL al Rodeway Inn (777 N Vine St). Dejan maletas en recepción (check-in real 3pm)." },
    { tag: "STAR", time: "Tarde", text: "Caminan al Paseo de la Fama = Vinewood Boulevard (Hollywood/Vine a 10 min). Estrella de MJ en 6927 Hollywood Blvd, frente al Chinese Theatre." },
    { tag: "TODOS", text: "Dolby Theatre, Ovation Hollywood (vista del cartel de Hollywood = Vinewood Sign), El Capitan." },
    { tag: "TIP", time: "Noche", text: "Cena temprano cerca del hotel y descansar: vienen del vuelo nocturno." },
  ]},
  { date: "Vie 24 Jul", kanji: "海", title: "Día Los Santos: costa + mirador", items: [
    { tag: "SALIR", time: "Mediodía", text: "Venice Beach = Vespucci Beach: el malecón, Muscle Beach, las canchas de básquet y los artistas callejeros. Puro Los Santos." },
    { tag: "SALIR", text: "Santa Monica Pier = Del Perro Pier: la rueda de la fortuna sobre el Pacífico. Caminable desde Venice por la playa (~45 min) o Uber corto." },
    { tag: "TODOS", time: "Atardecer", text: "Griffith Observatory = Galileo Observatory: el mirador sí o sí. La ciudad encendiéndose igual que la pausa del juego. Llegar ~1h antes para estacionar; planetario ~$7." },
    { tag: "TIP", time: "Noche", text: "Cena de mariscos en Santa Mónica, o algo rápido camino a Griffith. Día completo: el corazón del plan." },
  ]},
  { date: "Sáb 25 Jul", kanji: "発", title: "Rockford Hills + al aeropuerto", items: [
    { tag: "TRASLADO", time: "11:00", text: "Check-out del Rodeway Inn. Dejan maletas en recepción para pasear ligeros." },
    { tag: "SALIR", time: "Mañana", text: "Beverly Hills + Rodeo Drive = Rockford Hills: glamour y escaparates. De paso, drive-by de la casa de MJ en Carolwood (100 N Carolwood Dr) — reja privada, solo foto desde fuera." },
    { tag: "TODOS", text: "Opcional cerca: The Grove + Original Farmers Market para compras y souvenirs de último minuto." },
    { tag: "TECH", text: "Apple The Grove (189 The Grove Dr): recoger el Apple Watch Ultra 3 (refurbished). Llevar ID + correo 'ready for pickup'. Ojo: si llegó antes, haber llamado a Apple para extender la retención hasta hoy." },
    { tag: "TRASLADO", time: "~18:45", text: "Recogen maletas. Uber XL a LAX = LSIA (~$50-75, tráfico de sábado)." },
    { tag: "TRASLADO", time: "~20:00", text: "En LAX (TBIT). Vuelo Asiana a Seúl sale 23:00 (se adelantó 30 min)." },
  ]},
];

const LA_SPOTS = [
  { name: "TCL Chinese Theatre", emoji: "🎬", note: "Huellas de las estrellas. Frente a MJ." },
  { name: "Dolby Theatre", emoji: "🏆", note: "Donde entregan los Oscars." },
  { name: "Ovation Hollywood", emoji: "🎟️", note: "Mejor vista del cartel + tiendas." },
  { name: "El Capitan", emoji: "🎭", note: "Cine histórico de Disney." },
];

const JP_CITIES = [
  { city: "Tokio", kanji: "東京", color: C.ai, dates: "27 Jul – 1 Ago", map: "tokio", days: [
    { date: "Lun 27 Jul", title: "Llegada nocturna a Haneda", items: [
      { tag: "TRASLADO", time: "23:30", text: "Aterrizan en Haneda T3. Caminan al Villa Fontaine Grand (conectado a la T3). A dormir." },
      { tag: "TIP", text: "Sacar efectivo (7-Bank), tarjeta IC Welcome Suica, activar eSIM. Si hay ánimo, el onsen del hotel." },
    ]},
    { date: "Mar 28 Jul", title: "Recuperación + Shibuya de noche", items: [
      { tag: "TRASLADO", time: "~11:30", text: "Tren de Haneda al Nest Hotel Tokyo Yaesu (Nihonbashi, ~35 min). Dejan maletas (recepción 24h)." },
      { tag: "SALIR", time: "Tarde", text: "Shibuya: el cruce, Shibuya Sky (mirador 360°), Hachiko." },
      { tag: "TECH", text: "Apple Store y Nintendo Tokyo / Pokémon Center en Shibuya Parco." },
      { tag: "COMIDA", text: "Cena izakaya o ramen." },
    ]},
    { date: "Mié 29 Jul", title: "Día Tech: Akihabara", items: [
      { tag: "TECH", text: "Yodobashi Akiba (9 pisos), Super Potato (retro), Mandarake." },
      { tag: "SALIR", text: "Pokémon Center, arcades, maid café." },
      { tag: "TIP", text: "Apple ya no es tax-free; comparar en Yodobashi/BIC Camera." },
    ]},
    { date: "Jue 30 Jul", title: "Tokio tradicional + Apple", items: [
      { tag: "ZEN", time: "9am", text: "Senso-ji en Asakusa y la calle Nakamise." },
      { tag: "ZEN", text: "Meiji Jingu: santuario en el bosque, muy tranquilo." },
      { tag: "TECH", text: "Apple Store Ginza, la más grande de Japón." },
      { tag: "ZEN", text: "Itoya (伊東屋) en Ginza, a 2 min del Apple Store: 12 pisos de papelería japonesa, el clip rojo gigante, papeles TAKEO (7º piso) y café con vista en el 12º. Pura estética goshuincho. Entre semana, mejor antes de las 4pm." },
      { tag: "TODOS", text: "teamLab (Planets/Borderless): arte digital. RESERVAR." },
    ]},
    { date: "Vie 31 Jul", title: "Skytree + Pokémon (o Kamakura)", items: [
      { tag: "TODOS", text: "Tokyo Skytree + Pokémon Center Skytree Town." },
      { tag: "ZEN", text: "Alt.: excursión a Kamakura, el Gran Buda de bronce." },
      { tag: "TRASLADO", text: "Enviar maletas grandes a Kioto (takkyubin) desde el Nest Hotel para viajar ligeros a Hakone." },
    ]},
  ]},
  { city: "Hakone", kanji: "箱根", color: C.matcha, dates: "1 Ago", map: null, days: [
    { date: "Sáb 1 Ago", title: "Onsen, Fuji y ryokan", items: [
      { tag: "TRASLADO", time: "Mañana", text: "Check-out del Nest (hasta 11:00). Romancecar desde Shinjuku a Hakone-Yumoto (~85 min)." },
      { tag: "TODOS", text: "Dejan maletas en el Bansuirou Fukuzumi (cerca de la estación). Circuito Hakone: teleférico sobre Owakudani, barco en el lago Ashi." },
      { tag: "ZEN", time: "~16:00", text: "Check-in en el ryokan. Onsen, cena kaiseki, yukata. Lo más zen del viaje." },
      { tag: "ZEN", text: "Madrugada: mejor vista del Monte Fuji desde Hakone." },
    ]},
  ]},
  { city: "Kioto", kanji: "京都", color: C.shu, dates: "2 – 5 Ago", map: "kioto", days: [
    { date: "Dom 2 Ago", title: "Hakone → Kioto + Gion", items: [
      { tag: "TRASLADO", text: "Check-out del ryokan. Tren a Odawara + Shinkansen a Kioto (~2h). Asiento derecho para ver el Fuji." },
      { tag: "TRASLADO", time: "~14:00", text: "Check-in en Connect Inn Shichijo (auto check-in: tener el email de acceso). Las maletas de Tokio ya esperan." },
      { tag: "TIP", text: "Impuesto de alojamiento de Kioto: pagar ¥2,400 en EFECTIVO al check-in (¥200 × 4 personas × 3 noches). No está incluido en la reserva." },
      { tag: "ZEN", text: "Atardecer por Gion y el canal Shirakawa." },
    ]},
    { date: "Lun 3 Ago", title: "Templos del este + té", items: [
      { tag: "ZEN", time: "7am", text: "Fushimi Inari: miles de torii, temprano y sin gente." },
      { tag: "ZEN", text: "Kiyomizu-dera y las calles Sannenzaka / Ninenzaka." },
      { tag: "ZEN", text: "Ceremonia del té en una machiya histórica (reservar)." },
    ]},
    { date: "Mar 4 Ago", title: "Excursión a Nara", items: [
      { tag: "TODOS", text: "Parque de Nara: alimentar a los ciervos que hacen reverencias." },
      { tag: "TODOS", text: "Todai-ji: el Gran Buda de 15 metros." },
      { tag: "TIP", text: "Alt.: Kinkaku-ji (Pabellón Dorado) + bambú de Arashiyama." },
    ]},
  ]},
  { city: "Osaka", kanji: "大阪", color: C.rose, dates: "5 – 8 Ago", map: "osaka", days: [
    { date: "Mié 5 Ago", title: "Pokémon + Dotonbori", items: [
      { tag: "TRASLADO", text: "Check-out del Connect Inn. JR Special Rapid a Osaka (~30 min). Check-in en Osaka Marriott Miyako (Tennoji)." },
      { tag: "SALIR", text: "Pokémon Center Osaka DX (piso 9, sin reserva). El Pokémon Café quedó lleno todo agosto (abrió 1 jul) — vigilar cancelaciones en reserve.pokemon-cafe.jp por si se libera una mesa." },
      { tag: "COMIDA", time: "Noche", text: "Dotonbori: takoyaki, okonomiyaki, kushikatsu." },
    ]},
    { date: "Jue 6 Ago", title: "Katsuo-ji: el templo de los Daruma", items: [
      { tag: "ZEN", time: "Mañana", text: "Día en Katsuo-ji (勝尾寺), el templo de los 'ganadores' en las montañas de Minoh, al norte. Miles de muñecos daruma rojos, naturaleza y más fresco que la ciudad." },
      { tag: "TRASLADO", text: "Desde Tennoji: línea Midosuji (roja) directa hasta el final, Minoh-Kayano (~40-45 min). Verificar que el tren llegue hasta Minoh-Kayano (algunos terminan antes)." },
      { tag: "TRASLADO", text: "En Minoh-Kayano: Hankyu Bus Nº 30 a Katsuo-ji (~21 min, ¥800 c/u, andén 8). Para los 4, un taxi/Uber sale parecido y más cómodo." },
      { tag: "TODOS", text: "En el templo te dan una postal en blanco y hay 6 estaciones para ir estampando sellos y completar el dibujo — pura experiencia goshuincho. Recorrido ~1h30." },
      { tag: "TIP", text: "El bus entre semana corre cada ~30 min, 9:00-15:00. Ir en la mañana y chequear el último bus de regreso (taxi como respaldo). Llevar efectivo + IC card." },
    ]},
    { date: "Vie 7 Ago", title: "Castillo, mercado y compras", items: [
      { tag: "ZEN", time: "Mañana", text: "Castillo de Osaka y su parque (temprano por el calor)." },
      { tag: "COMIDA", text: "Mercado Kuromon: mariscos, frutas, comida callejera." },
      { tag: "TECH", text: "Den Den Town: el Akihabara de Osaka." },
      { tag: "SALIR", text: "Shinsekai de noche y Don Quijote (24h) para souvenirs." },
    ]},
    { date: "Sáb 8 Ago", title: "Salida desde Kansai", items: [
      { tag: "TRASLADO", text: "Check-out del Marriott. Haruka Express desde Tennoji (justo abajo del hotel) a KIX (~50 min)." },
      { tag: "TIP", text: "Estar en KIX ~13:00 para el vuelo PR 411 de las 15:15." },
    ]},
  ]},
];

const STAMPS = [
  { icon: "⭐", name: "Estrella de MJ", kanji: "星", place: "Hollywood", color: C.sunset },
  { icon: "🎬", name: "Walk of Fame", kanji: "映", place: "Hollywood", color: C.sunset },
  { icon: "⛩️", name: "Senso-ji", kanji: "寺", place: "Tokio", color: C.shu },
  { icon: "🌃", name: "Shibuya", kanji: "渋", place: "Tokio", color: C.ai },
  { icon: "🗼", name: "Skytree", kanji: "塔", place: "Tokio", color: C.ai },
  { icon: "✨", name: "teamLab", kanji: "光", place: "Tokio", color: C.sora },
  { icon: "🗻", name: "Monte Fuji", kanji: "富", place: "Hakone", color: C.matcha },
  { icon: "♨️", name: "Onsen", kanji: "湯", place: "Hakone", color: C.matcha },
  { icon: "⛩️", name: "Fushimi Inari", kanji: "鳥", place: "Kioto", color: C.shu },
  { icon: "🏯", name: "Kiyomizu-dera", kanji: "清", place: "Kioto", color: C.shu },
  { icon: "🦌", name: "Ciervos de Nara", kanji: "鹿", place: "Nara", color: C.kin },
  { icon: "🏯", name: "Castillo Osaka", kanji: "城", place: "Osaka", color: C.rose },
  { icon: "🍜", name: "Dotonbori", kanji: "食", place: "Osaka", color: C.rose },
  { icon: "⚡", name: "Pokémon Café", kanji: "電", place: "Osaka", color: "#E3350D" },
  { icon: "🧧", name: "Katsuo-ji", kanji: "勝", place: "Osaka", color: C.matcha },
];

const HOTELS = [
  { group: "Los Ángeles · Hollywood", color: C.sunset, list: [
    { name: "Rodeway Inn near Melrose", tag: "23-25 jul", booked: true, rating: "7.6", price: "~$175", why: "777 N Vine St, Hollywood. Caminable al Paseo de la Fama. Pago al llegar, cancela gratis.", url: "https://www.booking.com" },
    { name: "The Hollywood Roosevelt", tag: "Alternativa", rating: "4.4", price: "$300-450", why: "El icónico, frente al Chinese Theatre y la estrella de MJ.", url: "https://www.thehollywoodroosevelt.com" },
  ]},
  { group: "Haneda · Noche de llegada", color: C.ai, list: [
    { name: "Villa Fontaine Grand Haneda", tag: "27-28 jul", booked: true, rating: "8.8", price: "~$200", why: "Conectado directo a la Terminal 3. Con onsen. Habitación tatami para 4. Cancela gratis.", url: "https://www.booking.com" },
    { name: "Royal Park Hotel Tokyo Haneda", tag: "Alternativa", rating: "8.4", price: "~$230", why: "También dentro de la T3.", url: "https://www.booking.com" },
  ]},
  { group: "Tokio · 4 noches", color: C.ai, list: [
    { name: "Nest Hotel Tokyo Yaesu", tag: "28 jul – 1 ago", booked: true, rating: "8.6", price: "~$170/noche", why: "Nihonbashi (Chuo-ku), a 400m del metro. Recepción 24h, 2 habitaciones. Cancela gratis.", url: "https://www.booking.com" },
    { name: "Tokyo Marriott / Courtyard", tag: "Alternativa", rating: "4.1", price: "—", why: "Cadenas Marriott, si prefieren Bonvoy.", url: "https://www.marriott.com" },
  ]},
  { group: "Hakone · Ryokan (1 noche)", color: C.matcha, list: [
    { name: "Bansuirou Fukuzumi", tag: "1-2 ago", booked: true, rating: "9.4", price: "~$255", why: "Hakone-Yumoto, cerca de la estación. Ryokan tradicional, baños termales, cena+desayuno. Cancela hasta 29 jul.", url: "https://www.booking.com" },
    { name: "Madoka no Mori", tag: "Alternativa", rating: "4.7", price: "Alto", why: "Onsen privado en el cuarto, si quisieran subir de categoría.", url: "https://www.booking.com" },
  ]},
  { group: "Kioto · 3 noches", color: C.shu, list: [
    { name: "Connect Inn Shichijo-Kamogawa", tag: "2-5 ago", booked: true, rating: "8.4", price: "~$300/noche", why: "Apartamento entero con cocina para 4, baño privado. A ~1.2km de la estación. Auto check-in. Cancela gratis.", url: "https://www.booking.com" },
    { name: "Gozan Hotel Higashiyama", tag: "Alternativa", rating: "4.5", price: "—", why: "En plena zona de Gion, si querían estar caminando a los templos.", url: "https://www.booking.com" },
  ]},
  { group: "Osaka · 3 noches", color: C.rose, list: [
    { name: "Osaka Marriott Miyako", tag: "5-8 ago", booked: true, rating: "4.5", price: "—", why: "5★ encima de la estación Tennoji. El Haruka a KIX sale abajo. Cancela gratis.", url: "https://www.marriott.com" },
    { name: "The Osaka Station Hotel", tag: "Alternativa", rating: "4.5", price: "—", why: "Marriott Autograph en Umeda, otra zona.", url: "https://www.marriott.com" },
  ]},
];

const BUDGET = [
  { label: "Vuelos (ya pagados)", amount: "$13,464", note: "+ 46,580 millas LATAM Pass", color: C.ai },
  { label: "Los Ángeles (~2 días)", amount: "$3,090", note: "hotel, comida, traslados, compras", color: C.sunset },
  { label: "Japón (12 días)", amount: "$13,700", note: "hotel, trenes, comida, actividades", color: C.shu },
];

const CHECKLIST = [
  { urgent: false, text: "✓ Visa B1/B2 de EE.UU. vigente para los 4 (lista para las conexiones en LAX)." },
  { urgent: true, text: "Apple Watch Ultra 3 (refurbished, recojo en Apple The Grove): ordenar pronto (~17 jul) para que quede listo cerca del 23. Al recibir el correo 'ready for pickup', llamar a Apple (1-800-MY-APPLE) y extender la retención hasta el 25." },
  { urgent: false, text: "Pokémon Café Osaka: agotado todo agosto (abrió 1 jul). Vigilar cancelaciones en reserve.pokemon-cafe.jp; el Center DX no necesita reserva." },
  { urgent: true, text: "Reservar los 3 trenes (Romancecar, Shinkansen, Haruka) por SmartEX — se abren a inicios de julio." },
  { urgent: false, text: "Esperar el correo 'Approved' del K-ETA y guardarlo (ya aplicado para los 4)." },
  { urgent: false, text: "Verificar pasaportes electrónicos con 6+ meses de vigencia." },
  { urgent: false, text: "✓ Hoteles reservados (los 6, con cancelación gratis). Ver pestaña Reservas." },
  { urgent: false, text: "Agregar maletas de bodega para Julisa y Adriel en los vuelos LATAM." },
  { urgent: false, text: "Reservar entradas: teamLab, Skytree, ceremonia del té. (Universal Hollywood solo si hacen la opción A en LA)." },
  { urgent: false, text: "Registrar Visit Japan Web (~1-2 semanas antes de llegar)." },
  { urgent: false, text: "Registrar eTravel de Filipinas (72h antes del vuelo de regreso)." },
  { urgent: false, text: "Comprar eSIM o Pocket WiFi (cubrir Japón + Corea para la escala)." },
  { urgent: false, text: "Contratar seguro de viaje (vuelos separados = sin protección cruzada)." },
];

const BOOKINGS = {
  flights: [
    { route: "Lima → Los Ángeles", n: "LA 2478 · LATAM", date: "23 jul", pnr: "FISZIV" },
    { route: "Los Ángeles → Tokio (vía Seúl)", n: "OZ 203/178 · Asiana", date: "25 jul", pnr: "BV7OJC" },
    { route: "Osaka → Los Ángeles (vía Manila)", n: "PR 411/122 · Philippine", date: "8 ago", pnr: "X64MHH" },
    { route: "Los Ángeles → Lima", n: "LA 2477 · LATAM", date: "9 ago", pnr: "SBPTJN + CLFHNJ" },
  ],
  keta: [
    { name: "Alonso Javier", app: "26-LG-10084560" },
    { name: "Martha Julisa", app: "26-NB-10084561" },
    { name: "Javier Enrique", app: "26-SZ-10084563" },
    { name: "Adriel", app: "26-DQ-10084570" },
  ],
  hotels: [
    { place: "Rodeway Inn", city: "Hollywood, LA", dates: "23-25 jul", conf: "5753225651", pin: "3599", note: "Pago al llegar · cancela gratis", color: C.sunset },
    { place: "Villa Fontaine Grand", city: "Haneda (llegada)", dates: "27-28 jul", conf: "6167966000", pin: "1085", note: "Conectado a Terminal 3 · con onsen", color: C.ai },
    { place: "Nest Hotel Tokyo Yaesu", city: "Tokio", dates: "28 jul – 1 ago", conf: "6397503665", pin: "2652", note: "Nihonbashi · recepción 24h", color: C.ai },
    { place: "Bansuirou Fukuzumi", city: "Hakone", dates: "1-2 ago", conf: "5397247010", pin: "3664", note: "Ryokan · cancela hasta 29 jul", color: C.matcha },
    { place: "Connect Inn Shichijo", city: "Kioto", dates: "2-5 ago", conf: "5027360565", pin: "8956", note: "Auto check-in · email de acceso · ¥2,400 impuesto en efectivo al llegar", color: C.shu },
    { place: "Osaka Marriott Miyako", city: "Osaka (Tennoji)", dates: "5-8 ago", conf: "5242738937", pin: "5808", note: "Encima de Tennoji → tren a KIX", color: C.rose },
  ],
};

const TABS = [
  { id: "general", label: "Vista General", kanji: "概要" },
  { id: "reservas", label: "Reservas", kanji: "予約" },
  { id: "vuelos", label: "Vuelos", kanji: "空路" },
  { id: "la", label: "Los Ángeles", kanji: "羅府" },
  { id: "seul", label: "Escala Seúl", kanji: "서울" },
  { id: "japon", label: "Japón", kanji: "日本" },
  { id: "hoteles", label: "Hoteles", kanji: "宿" },
  { id: "pokemon", label: "Pokémon", kanji: "電" },
  { id: "extra", label: "Presupuesto", kanji: "予算" },
];

/* ---------------- SMALL COMPONENTS ---------------- */

function Tag({ t }) {
  const tg = TAGS[t] || TAGS.TODOS;
  return <span style={{ fontFamily: FONT_B, fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
    color: tg.color, background: tg.bg, padding: "2px 8px", borderRadius: 4, whiteSpace: "nowrap" }}>{tg.label}</span>;
}

function Seal({ children, color = C.shu, size = 56, rot = -6 }) {
  return <div style={{ width: size, height: size, transform: `rotate(${rot}deg)`, flexShrink: 0,
    border: `2px solid ${color}`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
    color, fontFamily: FONT_D, fontWeight: 800, boxShadow: `inset 0 0 0 3px ${C.washi}, inset 0 0 0 4px ${color}33`, background: C.washi }}>{children}</div>;
}

function Taegeuk({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ flexShrink: 0, filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.25))" }}>
      <circle cx="50" cy="50" r="49" fill="#fff" />
      <path d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 1 50 50 A24 24 0 0 0 50 2 Z" fill="#CD2E3A" />
      <path d="M50 2 A48 48 0 0 0 50 98 A24 24 0 0 0 50 50 A24 24 0 0 1 50 2 Z" fill="#0047A0" />
    </svg>
  );
}

function WalkStar({ size = 54, emoji }) {
  return (
    <div style={{ width: size, height: size, flexShrink: 0, borderRadius: 10, position: "relative",
      background: "radial-gradient(circle at 50% 38%, #514a44, #2b2724)", border: "2px solid #C9A227",
      display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.28)" }}>
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24">
        <path d="M12 1.6l3 6.3 6.9.7-5.2 4.8 1.5 6.8L12 17.6 5.8 21l1.5-6.8L2.1 9.4l6.9-.7z"
          fill="#E7B6C0" stroke="#fff" strokeWidth="0.6" strokeLinejoin="round" />
      </svg>
      {emoji && <span style={{ position: "absolute", bottom: 2, fontSize: 11 }}>{emoji}</span>}
    </div>
  );
}

function LosSantosBanner() {
  const sky = "lsSky_" + "a", sun = "lsSun_" + "a";
  return (
    <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 16, boxShadow: "0 4px 14px rgba(0,0,0,0.20)" }}>
      <svg viewBox="0 0 700 180" width="100%" style={{ display: "block" }} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2A1A4A" />
            <stop offset="42%" stopColor="#9B3B6E" />
            <stop offset="72%" stopColor="#E8643C" />
            <stop offset="100%" stopColor="#F6B24A" />
          </linearGradient>
          <linearGradient id={sun} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE08A" />
            <stop offset="100%" stopColor="#FF6F61" />
          </linearGradient>
        </defs>
        <rect width="700" height="180" fill={`url(#${sky})`} />
        <circle cx="350" cy="152" r="56" fill={`url(#${sun})`} opacity="0.96" />
        <g fill="#9B3B6E" opacity="0.5">
          <rect x="300" y="150" width="100" height="4" /><rect x="305" y="160" width="90" height="5" /><rect x="312" y="170" width="76" height="6" />
        </g>
        <g fill="#1C1330" opacity="0.92">
          <rect x="120" y="120" width="13" height="30" /><rect x="136" y="106" width="10" height="44" /><rect x="150" y="126" width="15" height="24" />
          <rect x="500" y="112" width="12" height="38" /><rect x="516" y="98" width="13" height="52" /><rect x="533" y="122" width="10" height="28" /><rect x="546" y="110" width="15" height="40" />
        </g>
        <rect x="0" y="150" width="700" height="30" fill="#140E26" />
        <g fill="#0E0A1C">
          <path d="M70 150 C 66 120, 60 96, 53 72 L 59 70 C 67 96, 75 122, 80 150 Z" />
          <g transform="translate(56,70)">
            <path d="M0 0 C -22 -10, -40 -8, -54 2 C -38 -2, -20 2, 0 6 Z" />
            <path d="M0 0 C 20 -12, 40 -12, 56 -4 C 38 -6, 18 -2, 0 6 Z" />
            <path d="M0 0 C -10 -24, -8 -44, 2 -58 C -2 -42, 2 -22, 6 0 Z" />
            <path d="M0 0 C 14 -20, 30 -32, 46 -34 C 30 -24, 14 -10, 4 2 Z" />
            <path d="M0 0 C -16 -18, -32 -26, -46 -26 C -30 -18, -14 -8, -2 2 Z" />
          </g>
        </g>
        <g fill="#0E0A1C" transform="translate(630,0) scale(-1,1)">
          <path d="M70 150 C 66 122, 60 100, 54 80 L 60 78 C 66 100, 74 124, 80 150 Z" />
          <g transform="translate(57,78)">
            <path d="M0 0 C -20 -10, -36 -8, -48 2 C -34 -2, -18 2, 0 6 Z" />
            <path d="M0 0 C 18 -12, 36 -12, 50 -4 C 34 -6, 16 -2, 0 6 Z" />
            <path d="M0 0 C -8 -22, -6 -40, 4 -52 C 0 -38, 4 -20, 6 0 Z" />
            <path d="M0 0 C 12 -18, 26 -28, 40 -30 C 26 -22, 12 -10, 4 2 Z" />
          </g>
        </g>
        <text x="350" y="50" textAnchor="middle" style={{ fontFamily: FONT_B, fontWeight: 800, fontSize: 12, letterSpacing: 7 }} fill="#FFE8C2" opacity="0.92">LOS ÁNGELES</text>
        <text x="352" y="101" textAnchor="middle" style={{ fontFamily: FONT_GTA, fontWeight: 800, fontSize: 46, letterSpacing: 1 }} fill="#000" opacity="0.28">LOS SANTOS</text>
        <text x="350" y="99" textAnchor="middle" style={{ fontFamily: FONT_GTA, fontWeight: 800, fontSize: 46, letterSpacing: 1, paintOrder: "stroke", strokeLinejoin: "round" }} fill="#FFFFFF" stroke="#1A0E22" strokeWidth="3">LOS SANTOS</text>
      </svg>
      <div style={{ background: "#140E26", padding: "8px 14px", textAlign: "center" }}>
        <span style={{ fontFamily: FONT_B, fontSize: 10.5, letterSpacing: 2, color: "#F6B24A", fontWeight: 700 }}>VINEWOOD · VESPUCCI · DEL PERRO</span>
      </div>
    </div>
  );
}

function Pokeball({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ flexShrink: 0, filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.2))" }}>
      <circle cx="50" cy="50" r="46" fill="#fff" stroke="#1a1a1a" strokeWidth="5" />
      <path d="M4.5 50 a45.5 45.5 0 0 1 91 0 Z" fill="#E3350D" stroke="#1a1a1a" strokeWidth="5" />
      <line x1="5" y1="50" x2="95" y2="50" stroke="#1a1a1a" strokeWidth="5" />
      <circle cx="50" cy="50" r="15" fill="#fff" stroke="#1a1a1a" strokeWidth="5" />
      <circle cx="50" cy="50" r="6" fill="#fff" stroke="#1a1a1a" strokeWidth="3" />
    </svg>
  );
}

function SectionLabel({ kanji, children, color = C.ai, kanjiFont = FONT_D }) {
  return <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "0 0 18px" }}>
    <span style={{ fontFamily: kanjiFont, fontSize: 30, color, fontWeight: 800 }}>{kanji}</span>
    <h2 style={{ fontFamily: FONT_D, fontSize: 24, color: C.sumi, fontWeight: 700, margin: 0 }}>{children}</h2>
    <span style={{ flex: 1, height: 1, background: C.line }} />
  </div>;
}

function Card({ children, style }) {
  return <div style={{ background: "#FFFCF6", border: `1px solid ${C.line}`, borderRadius: 14,
    boxShadow: "0 1px 0 rgba(0,0,0,0.02), 0 6px 16px rgba(31,27,23,0.04)", ...style }}>{children}</div>;
}

function Callout({ title, color, bg, children }) {
  return <div style={{ borderLeft: `5px solid ${color}`, background: bg, borderRadius: 10, padding: "12px 15px", margin: "10px 0" }}>
    <div style={{ fontFamily: FONT_B, fontWeight: 700, color, fontSize: 14, marginBottom: 5 }}>{title}</div>
    <div style={{ fontFamily: FONT_B, fontSize: 13.5, color: C.sumi, lineHeight: 1.6 }}>{children}</div>
  </div>;
}

function MapView({ data }) {
  const [sel, setSel] = useState(data.points[0].id);
  const byId = (id) => data.points.find(p => p.id === id);
  const selected = byId(sel);
  const usedTypes = [...new Set(data.points.map(p => p.t))];
  return (
    <Card style={{ overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", background: C.washi2, borderBottom: `1px solid ${C.line}` }}>
        <span style={{ fontFamily: FONT_D, fontSize: 22, fontWeight: 800, color: C.shu }}>{data.kanji}</span>
        <span style={{ fontFamily: FONT_D, fontSize: 17, fontWeight: 700, color: C.sumi }}>Mapa de {data.title}</span>
        <span style={{ flex: 1 }} />
        <span style={{ fontFamily: FONT_B, fontSize: 11, color: "#999" }}>toca un punto ›</span>
      </div>
      <div style={{ position: "relative", background: "linear-gradient(160deg,#FBF7EE,#F1E9D8)" }}>
        <svg viewBox={data.vb} style={{ width: "100%", display: "block" }}>
          {data.lines.map(([a, b, dash], i) => {
            const pa = byId(a), pb = byId(b);
            return <line key={i} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
              stroke={dash ? "#B9A98A" : C.kin} strokeWidth={dash ? 1.4 : 2.4}
              strokeDasharray={dash ? "4 4" : "0"} strokeLinecap="round" opacity={0.6} />;
          })}
          {data.points.map(p => {
            const col = MTYPE[p.t].c, active = p.id === sel;
            return (
              <g key={p.id} onClick={() => setSel(p.id)} style={{ cursor: "pointer" }}>
                {active && <circle cx={p.x} cy={p.y} r={15} fill="none" stroke={col} strokeWidth={2} opacity={0.9} />}
                <circle cx={p.x} cy={p.y} r={active ? 12 : 10} fill={col} stroke="#FFFCF6" strokeWidth={2.5} />
                <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize={11}>{p.icon}</text>
                <text x={p.x} y={p.y - 16} textAnchor="middle" fontFamily={FONT_B} fontSize={11}
                  fontWeight={active ? 700 : 600} fill={active ? col : "#5b5347"}
                  stroke="#F4EEE2" strokeWidth={3} paintOrder="stroke" style={{ pointerEvents: "none" }}>{p.label}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 16px", borderTop: `1px solid ${C.line}`, background: "#FFFCF6" }}>
        <div style={{ width: 42, height: 42, borderRadius: 10, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: MTYPE[selected.t].c, fontSize: 20 }}>{selected.icon}</div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontFamily: FONT_D, fontSize: 16, fontWeight: 700, color: C.sumi }}>{selected.label}</span>
            <span style={{ fontFamily: FONT_B, fontSize: 10.5, fontWeight: 700, color: MTYPE[selected.t].c, letterSpacing: .5 }}>{MTYPE[selected.t].label.toUpperCase()}</span>
          </div>
          <div style={{ fontFamily: FONT_B, fontSize: 13, color: "#555", lineHeight: 1.5, marginTop: 2 }}>{selected.note}</div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, padding: "8px 16px 12px", borderTop: `1px solid ${C.line}` }}>
        {usedTypes.map(t => (
          <div key={t} style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 9, height: 9, borderRadius: 9, background: MTYPE[t].c }} />
            <span style={{ fontFamily: FONT_B, fontSize: 10.5, color: "#777" }}>{MTYPE[t].label}</span>
          </div>
        ))}
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ width: 14, height: 2, background: C.kin }} />
          <span style={{ fontFamily: FONT_B, fontSize: 10.5, color: "#777" }}>tren</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ width: 14, height: 0, borderTop: "2px dashed #B9A98A" }} />
          <span style={{ fontFamily: FONT_B, fontSize: 10.5, color: "#777" }}>auto / lejos</span>
        </div>
      </div>
    </Card>
  );
}

function DayCard({ d, accent }) {
  return (
    <Card style={{ overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "stretch" }}>
        <div style={{ width: 6, background: accent, flexShrink: 0 }} />
        <div style={{ padding: "14px 18px", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
            {d.kanji && <span style={{ fontFamily: FONT_D, fontSize: 20, color: accent, fontWeight: 800 }}>{d.kanji}</span>}
            <span style={{ fontFamily: FONT_B, fontSize: 12, fontWeight: 700, color: accent, letterSpacing: .5 }}>{d.date}</span>
            <span style={{ fontFamily: FONT_D, fontSize: 17, fontWeight: 700, color: C.sumi }}>{d.title}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {d.items.map((it, i) => (
              <div key={i} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, minWidth: 64 }}><Tag t={it.tag} /></div>
                <div style={{ fontFamily: FONT_B, fontSize: 13.5, color: C.sumi, lineHeight: 1.55 }}>
                  {it.time && <strong style={{ color: accent, marginRight: 6 }}>{it.time}</strong>}{it.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function FlightCard({ f, idx }) {
  return (
    <Card style={{ overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: C.aiDeep, padding: "10px 18px", color: C.washi, backgroundImage: seigaiha }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontFamily: FONT_D, fontSize: 18, fontWeight: 800, color: C.kin }}>0{idx + 1}</span>
          <div>
            <div style={{ fontFamily: FONT_B, fontWeight: 700, fontSize: 14 }}>{f.airline}</div>
            <div style={{ fontFamily: FONT_B, fontSize: 11, opacity: .8 }}>{f.n} · {f.date}</div>
          </div>
        </div>
        <span style={{ fontFamily: FONT_R, fontSize: 12, color: C.washi, opacity: .85 }}>{f.plane}</span>
      </div>
      <div style={{ padding: "16px 18px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: FONT_D, fontSize: 30, fontWeight: 800, color: C.ai }}>{f.from}</div>
            <div style={{ fontFamily: FONT_B, fontSize: 11, color: "#888" }}>{f.fromCity}</div>
            <div style={{ fontFamily: FONT_B, fontSize: 15, fontWeight: 700, color: C.sumi, marginTop: 2 }}>{f.dep}</div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", color: C.shu }}>
            <span style={{ fontSize: 16 }}>✈</span>
            <div style={{ width: "100%", height: 1, background: C.line, margin: "4px 0" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: FONT_D, fontSize: 30, fontWeight: 800, color: C.ai }}>{f.to}</div>
            <div style={{ fontFamily: FONT_B, fontSize: 11, color: "#888" }}>{f.toCity}</div>
            <div style={{ fontFamily: FONT_B, fontSize: 15, fontWeight: 700, color: C.sumi, marginTop: 2 }}>{f.arr}</div>
          </div>
        </div>
        {f.legs.length > 0 && (
          <div style={{ marginTop: 12, padding: "8px 12px", background: C.washi2, borderRadius: 8 }}>
            {f.legs.map((l, i) => (
              <div key={i} style={{ fontFamily: FONT_B, fontSize: 12, color: i === 1 ? C.shu : C.sumi, fontWeight: i === 1 ? 700 : 500, padding: "2px 0" }}>{i === 1 ? "↕ " : "→ "}{l}</div>
            ))}
          </div>
        )}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12, alignItems: "center" }}>
          <div style={{ fontFamily: FONT_R, fontSize: 12, fontWeight: 700, color: C.shu, border: `1.5px dashed ${C.shu}`, borderRadius: 6, padding: "4px 10px", letterSpacing: 1 }}>{f.pnr}</div>
          <span style={{ fontFamily: FONT_B, fontSize: 12, color: "#777" }}>{f.fare}</span>
          <span style={{ flex: 1 }} />
          <span style={{ fontFamily: FONT_D, fontSize: 17, fontWeight: 800, color: C.ai }}>{f.price}</span>
        </div>
        <ul style={{ margin: "10px 0 0", padding: 0, listStyle: "none" }}>
          {f.extra.map((e, i) => (
            <li key={i} style={{ fontFamily: FONT_B, fontSize: 12.5, color: "#555", padding: "2px 0", display: "flex", gap: 6 }}><span style={{ color: C.kin }}>◦</span>{e}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

function HotelCard({ h, color }) {
  return (
    <Card style={{ padding: "14px 16px", border: h.booked ? `2px solid ${color}` : `1px solid ${C.line}` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
        <div style={{ fontFamily: FONT_D, fontSize: 16, fontWeight: 700, color: C.sumi }}>{h.name}</div>
        <span style={{ fontFamily: FONT_B, fontSize: 10, fontWeight: 700, color: h.booked ? "#fff" : color, background: h.booked ? color : `${color}18`, padding: "2px 8px", borderRadius: 20, whiteSpace: "nowrap" }}>{h.booked ? "✓ " : ""}{h.tag}</span>
      </div>
      <div style={{ display: "flex", gap: 12, margin: "6px 0", alignItems: "center" }}>
        {h.booked && <span style={{ fontFamily: FONT_B, fontSize: 10, fontWeight: 700, color: C.matcha, background: TAGS.ZEN.bg, borderRadius: 5, padding: "1px 7px" }}>RESERVADO</span>}
        <span style={{ fontFamily: FONT_B, fontSize: 12, color: C.kin, fontWeight: 700 }}>★ {h.rating}</span>
        <span style={{ fontFamily: FONT_B, fontSize: 12, color: "#777" }}>{h.price}</span>
      </div>
      <div style={{ fontFamily: FONT_B, fontSize: 13, color: "#555", lineHeight: 1.5 }}>{h.why}</div>
      {!h.booked && <a href={h.url} target="_blank" rel="noreferrer" style={{ display: "inline-block", marginTop: 10, fontFamily: FONT_B, fontSize: 12, fontWeight: 700, color: "#fff", background: color, padding: "6px 14px", borderRadius: 8, textDecoration: "none" }}>Ver →</a>}
    </Card>
  );
}

function TransportRow({ t }) {
  return (
    <Card style={{ padding: "11px 14px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontSize: 22, flexShrink: 0 }}>{t.icon}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{ fontFamily: FONT_B, fontSize: 10.5, fontWeight: 700, color: "#fff", background: C.ai, borderRadius: 5, padding: "1px 7px", whiteSpace: "nowrap" }}>{t.when}</span>
            <span style={{ fontFamily: FONT_B, fontSize: 13.5, fontWeight: 700, color: C.sumi }}>{t.from} <span style={{ color: C.shu }}>→</span> {t.to}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4, flexWrap: "wrap" }}>
            <span style={{ fontFamily: FONT_B, fontSize: 12, color: "#888" }}>{t.mode}</span>
            {t.reserve
              ? <span style={{ fontFamily: FONT_B, fontSize: 10, fontWeight: 700, color: C.shu, background: TAGS.SALIR.bg, borderRadius: 5, padding: "1px 7px", letterSpacing: .3, whiteSpace: "nowrap" }}>● RESERVAR ANTES</span>
              : <span style={{ fontFamily: FONT_B, fontSize: 10, fontWeight: 700, color: C.matcha, background: TAGS.ZEN.bg, borderRadius: 5, padding: "1px 7px", letterSpacing: .3, whiteSpace: "nowrap" }}>✓ sin reserva · IC</span>}
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ fontFamily: FONT_D, fontSize: 14, fontWeight: 700, color: C.ai }}>{t.time}</div>
          <div style={{ fontFamily: FONT_B, fontSize: 11, color: "#999" }}>{t.cost}</div>
        </div>
      </div>
    </Card>
  );
}

function Countdown() {
  const [days, setDays] = useState(null);
  useEffect(() => {
    const target = new Date("2026-07-23T00:40:00-05:00");
    setDays(Math.ceil((target - new Date()) / 86400000));
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontFamily: FONT_D, fontSize: 52, fontWeight: 800, color: C.shu, lineHeight: 1 }}>{days == null ? "··" : days > 0 ? days : "¡0!"}</div>
      <div style={{ fontFamily: FONT_B, fontSize: 12, color: "#777", letterSpacing: 1 }}>{days != null && days <= 0 ? "EN VIAJE" : "DÍAS PARA VOLAR"}</div>
    </div>
  );
}

function StampGrid() {
  const [done, setDone] = useState({});
  const count = Object.values(done).filter(Boolean).length;
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
        <p style={{ fontFamily: FONT_B, fontSize: 13.5, color: "#666", margin: 0, lineHeight: 1.6, flex: 1, minWidth: 220 }}>
          Como en un goshuincho, cada lugar es un sello. <strong style={{ color: C.shu }}>Tócalo para marcarlo</strong> cuando lo visiten.
        </p>
        <div style={{ fontFamily: FONT_D, fontSize: 14, fontWeight: 700, color: C.ai, background: C.washi2, borderRadius: 20, padding: "6px 14px", whiteSpace: "nowrap" }}>
          {count} / {STAMPS.length} sellos
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
        {STAMPS.map((s, i) => {
          const got = !!done[i];
          return (
            <div key={i} onClick={() => setDone(p => ({ ...p, [i]: !p[i] }))}
              style={{ position: "relative", width: 104, padding: "14px 6px 10px", textAlign: "center", cursor: "pointer",
                background: C.washi, border: `2px solid ${s.color}`, borderRadius: 10,
                transform: got ? "rotate(0deg)" : `rotate(${(s.name.length % 5) - 2}deg)`, transition: "transform .2s ease",
                boxShadow: `inset 0 0 0 3px ${C.washi}, inset 0 0 0 4px ${s.color}22` }}>
              <div style={{ position: "absolute", top: 4, right: 6, fontFamily: FONT_D, fontSize: 13, color: s.color, opacity: .7 }}>{s.kanji}</div>
              <div style={{ fontSize: 30, lineHeight: 1, opacity: got ? .35 : 1 }}>{s.icon}</div>
              <div style={{ fontFamily: FONT_B, fontSize: 11, fontWeight: 700, color: C.sumi, marginTop: 6, opacity: got ? .4 : 1 }}>{s.name}</div>
              <div style={{ fontFamily: FONT_B, fontSize: 9.5, color: s.color, marginTop: 2, letterSpacing: .5, textTransform: "uppercase", opacity: got ? .4 : 1 }}>{s.place}</div>
              {got && (
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%) rotate(-15deg)",
                  fontFamily: FONT_D, fontSize: 30, fontWeight: 800, color: C.shu, border: `3px solid ${C.shu}`, borderRadius: "50%",
                  width: 48, height: 48, lineHeight: "42px", background: "rgba(244,238,226,0.4)" }}>済</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Overview() {
  const stats = [{ k: "旅", v: "18", l: "días" }, { k: "都", v: "6", l: "ciudades" }, { k: "空", v: "4", l: "vuelos" }, { k: "印", v: "15", l: "sellos" }];
  const route = [["Lima","リマ"],["L.A.","羅府"],["Tokio","東京"],["Hakone","箱根"],["Kioto","京都"],["Osaka","大阪"],["Lima","リマ"]];
  return (
    <div>
      <div style={{ position: "relative", background: C.aiDeep, backgroundImage: seigaiha, borderRadius: 18, padding: "34px 26px", overflow: "hidden", marginBottom: 22 }}>
        <div style={{ position: "absolute", top: -10, right: 14, fontFamily: FONT_D, fontSize: 130, color: "#fff", opacity: .06, fontWeight: 800, lineHeight: 1 }}>旅</div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontFamily: FONT_B, fontSize: 12, letterSpacing: 3, color: C.kin, fontWeight: 700 }}>ITINERARIO · 2026</div>
          <h1 style={{ fontFamily: FONT_D, fontSize: 40, fontWeight: 800, color: C.washi, margin: "8px 0 4px", lineHeight: 1.1 }}>Los Ángeles <span style={{ color: C.shuSoft }}>&</span> Japón</h1>
          <div style={{ fontFamily: FONT_B, fontSize: 14, color: "#cdd9e6" }}>23 de julio – 10 de agosto de 2026</div>
          <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
            {TRAVELERS.map(n => <span key={n} style={{ fontFamily: FONT_B, fontSize: 12, color: C.washi, border: `1px solid ${C.kin}66`, borderRadius: 20, padding: "4px 12px" }}>{n}</span>)}
          </div>
        </div>
      </div>
      <Card style={{ padding: "16px 20px", marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, flexWrap: "wrap" }}>
          {route.map((c, i, arr) => (
            <React.Fragment key={i}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: FONT_D, fontSize: 15, fontWeight: 700, color: C.ai }}>{c[0]}</div>
                <div style={{ fontFamily: FONT_D, fontSize: 11, color: C.shu }}>{c[1]}</div>
              </div>
              {i < arr.length - 1 && <span style={{ color: C.kin, fontSize: 13 }}>✈</span>}
            </React.Fragment>
          ))}
        </div>
      </Card>
      <Card style={{ padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
        <Countdown />
        <div style={{ display: "flex", gap: 22, flexWrap: "wrap", justifyContent: "center" }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: FONT_D, fontSize: 13, color: C.shu, opacity: .7 }}>{s.k}</div>
              <div style={{ fontFamily: FONT_D, fontSize: 26, fontWeight: 800, color: C.ai, lineHeight: 1.1 }}>{s.v}</div>
              <div style={{ fontFamily: FONT_B, fontSize: 10.5, color: "#888" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </Card>
      <SectionLabel kanji="印" color={C.shu}>Pasaporte de sellos</SectionLabel>
      <StampGrid />
    </div>
  );
}

function Vuelos() {
  return (
    <div>
      <SectionLabel kanji="空路" color={C.ai}>Vuelos</SectionLabel>
      <Callout title="Boletos comprados por separado" color={C.kin} bg={TAGS.TODOS.bg}>
        Son 4 tickets independientes. Por eso los tiempos entre conexiones están holgados a propósito. Guarden cada código de reserva (PNR).
      </Callout>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, marginTop: 16 }}>
        {FLIGHTS.map((f, i) => <FlightCard key={i} f={f} idx={i} />)}
      </div>
      <div style={{ marginTop: 28 }}>
        <SectionLabel kanji="間" color={C.shu}>Tiempos entre vuelos</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10 }}>
          {TRANSFERS.map((t, i) => (
            <Card key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px" }}>
              <div style={{ width: 8, height: 8, borderRadius: 8, background: t.color, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: FONT_B, fontWeight: 700, fontSize: 14, color: C.sumi }}>{t.label}</div>
                <div style={{ fontFamily: FONT_B, fontSize: 12, color: "#888" }}>{t.note}</div>
              </div>
              <div style={{ fontFamily: FONT_D, fontSize: 17, fontWeight: 800, color: t.color }}>{t.time}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function LosAngeles() {
  return (
    <div>
      <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", marginBottom: 16, background: "#C8442E", backgroundImage: artDeco + `, linear-gradient(120deg, ${C.sunset} 0%, #C8442E 100%)`, padding: "30px 24px 36px" }}>
        <div style={{ fontFamily: FONT_B, fontSize: 11, letterSpacing: 3, color: "#fff", opacity: .9, fontWeight: 700 }}>ESCALA DE IDA · 羅府</div>
        <h1 style={{ fontFamily: FONT_D, fontSize: 34, fontWeight: 800, color: "#fff", margin: "6px 0 2px" }}>Los Ángeles</h1>
        <div style={{ fontFamily: FONT_B, fontSize: 13, color: "#fff", opacity: .95 }}>23 – 25 de julio · ~2 días en Hollywood</div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 16, display: "flex", alignItems: "center", gap: 12, padding: "0 16px", background: "rgba(0,0,0,0.18)", overflow: "hidden" }}>
          {Array.from({ length: 16 }).map((_, i) => <span key={i} style={{ color: "#E7B6C0", fontSize: 9, opacity: .85 }}>★</span>)}
        </div>
      </div>
      <div style={{ marginBottom: 16 }}><MapView data={MAPS.la} /></div>

      <Card style={{ overflow: "hidden", marginBottom: 12, border: "2px solid #C9A227" }}>
        <div style={{ display: "flex", gap: 14, alignItems: "center", padding: "16px 18px", background: "linear-gradient(180deg,#FFFDF8,#F6EEDB)" }}>
          <WalkStar size={62} emoji="🎤" />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT_B, fontSize: 10.5, fontWeight: 700, letterSpacing: 1, color: "#8E44AD" }}>★ EL SELLO ESTRELLA DEL PASEO</div>
            <div style={{ fontFamily: FONT_D, fontSize: 19, fontWeight: 800, color: C.sumi, lineHeight: 1.15 }}>Michael Jackson · King of Pop</div>
            <div style={{ fontFamily: FONT_B, fontSize: 12.5, color: "#555", lineHeight: 1.5, marginTop: 3 }}><strong>6927 Hollywood Blvd</strong>, frente al TCL Chinese Theatre. Vayan temprano para la foto sin multitud.</div>
          </div>
        </div>
      </Card>

      <div style={{ marginBottom: 4 }}>
        <div style={{ fontFamily: FONT_B, fontSize: 11, fontWeight: 700, letterSpacing: 1, color: C.sunset, marginBottom: 9 }}>OTROS SELLOS A PASOS — TODO CAMINABLE</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(168px,1fr))", gap: 10 }}>
          {LA_SPOTS.map((s, i) => (
            <Card key={i} style={{ padding: "11px 13px", display: "flex", alignItems: "center", gap: 11 }}>
              <WalkStar size={40} emoji={s.emoji} />
              <div>
                <div style={{ fontFamily: FONT_D, fontSize: 13.5, fontWeight: 700, color: C.sumi, lineHeight: 1.15 }}>{s.name}</div>
                <div style={{ fontFamily: FONT_B, fontSize: 11, color: "#888", lineHeight: 1.3, marginTop: 1 }}>{s.note}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div style={{ height: 14 }} />
      <div style={{ marginTop: 20 }}>
        <LosSantosBanner />
        <SectionLabel kanji="程" color={C.sunset}>Día por día</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>
          {LA_DAYS.map((d, i) => <DayCard key={i} d={d} accent={C.sunset} />)}
        </div>
      </div>
      <Callout title="🚗 Cómo moverse" color={C.matcha} bg={TAGS.ZEN.bg}>
        Usar Uber/Lyft, no auto: con jet lag y estacionamiento caro, el rideshare gana. Hollywood es caminable para el Paseo de la Fama.
      </Callout>
    </div>
  );
}

function Japon() {
  return (
    <div>
      <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", marginBottom: 18, background: C.aiDeep, backgroundImage: seigaiha, padding: "30px 24px" }}>
        <div style={{ position: "absolute", right: 14, top: -18, fontFamily: FONT_D, fontSize: 120, color: "#fff", opacity: .08, fontWeight: 800 }}>日本</div>
        <div style={{ fontFamily: FONT_B, fontSize: 11, letterSpacing: 3, color: C.kin, fontWeight: 700 }}>EL CORAZÓN DEL VIAJE</div>
        <h1 style={{ fontFamily: FONT_D, fontSize: 34, fontWeight: 800, color: C.washi, margin: "6px 0 2px" }}>Japón</h1>
        <div style={{ fontFamily: FONT_B, fontSize: 13, color: "#cdd9e6" }}>27 de julio – 8 de agosto · 12 días</div>
      </div>
      <SectionLabel kanji="移動" color={C.ai}>Traslados entre ciudades</SectionLabel>
      <p style={{ fontFamily: FONT_B, fontSize: 13, color: "#666", marginTop: -8, marginBottom: 12, lineHeight: 1.6 }}>
        En orden de fecha. Cada uno cambia tu base (dejas un hotel y vas al siguiente).
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 9, marginBottom: 16 }}>
        {TRANSPORT_MOVE.map((t, i) => <TransportRow key={i} t={t} />)}
      </div>

      <SectionLabel kanji="日帰" color={C.matcha}>Excursión de un día</SectionLabel>
      <p style={{ fontFamily: FONT_B, fontSize: 13, color: "#666", marginTop: -8, marginBottom: 12, lineHeight: 1.6 }}>
        Aquí NO cambias de hotel: vas y vuelves el mismo día, y esa noche duermes otra vez en Kioto.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 9, marginBottom: 12 }}>
        {TRANSPORT_DAYTRIP.map((t, i) => <TransportRow key={i} t={t} />)}
      </div>

      <Callout title="🎟️ ¿Cuáles reservar con anticipación?" color={C.shu} bg={TAGS.SALIR.bg}>
        Solo los 3 marcados <strong>"RESERVAR ANTES"</strong>: el Romancecar a Hakone, el Shinkansen a Kioto y el Haruka al aeropuerto. Son trenes con asiento asignado; resérvalos por la app SmartEX o en la estación 1-2 días antes (en verano se llenan).
      </Callout>
      <Callout title="🎫 El resto: solo tarjeta IC" color={C.matcha} bg={TAGS.ZEN.bg}>
        Los marcados <strong>"sin reserva"</strong> (Kioto↔Osaka, Kioto↔Nara, Haneda→Tokio) son trenes normales: pasas la tarjeta IC (Welcome Suica o ICOCA) y te subes. Sin trámite.
      </Callout>
      {JP_CITIES.map((c, i) => (
        <div key={i} style={{ marginTop: 26 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <Seal color={c.color} size={50} rot={-5}><span style={{ fontSize: 22 }}>{c.kanji}</span></Seal>
            <div>
              <h2 style={{ fontFamily: FONT_D, fontSize: 24, fontWeight: 800, color: c.color, margin: 0 }}>{c.city}</h2>
              <div style={{ fontFamily: FONT_B, fontSize: 12, color: "#888" }}>{c.dates}</div>
            </div>
            <span style={{ flex: 1, height: 1, background: C.line }} />
          </div>
          {c.map && <div style={{ marginBottom: 14 }}><MapView data={MAPS[c.map]} /></div>}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
            {c.days.map((d, j) => <DayCard key={j} d={d} accent={c.color} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

function Hoteles() {
  return (
    <div>
      <SectionLabel kanji="宿" color={C.ai}>Hoteles</SectionLabel>
      <p style={{ fontFamily: FONT_B, fontSize: 13.5, color: "#666", marginTop: -8, marginBottom: 18, lineHeight: 1.6 }}>
        Los 6 hoteles ya están reservados (marcados <strong style={{ color: C.matcha }}>RESERVADO</strong>), todos con cancelación gratis. Los números de confirmación están en la pestaña <strong>Reservas</strong>. Debajo de cada uno dejé una alternativa por si necesitan cambiar.
      </p>
      {HOTELS.map((g, i) => (
        <div key={i} style={{ marginBottom: 22 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span style={{ width: 10, height: 10, borderRadius: 3, background: g.color, transform: "rotate(45deg)" }} />
            <h3 style={{ fontFamily: FONT_D, fontSize: 17, fontWeight: 700, color: C.sumi, margin: 0 }}>{g.group}</h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {g.list.map((h, j) => <HotelCard key={j} h={h} color={g.color} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

function Reservas() {
  const copy = (txt) => { try { navigator.clipboard.writeText(txt); } catch (e) {} };
  return (
    <div>
      <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", marginBottom: 18, background: C.aiDeep, backgroundImage: seigaiha, padding: "26px 24px" }}>
        <div style={{ position: "absolute", right: 14, top: -16, fontFamily: FONT_D, fontSize: 110, color: "#fff", opacity: .08, fontWeight: 800 }}>予約</div>
        <div style={{ fontFamily: FONT_B, fontSize: 11, letterSpacing: 3, color: C.kin, fontWeight: 700 }}>TODO CONFIRMADO</div>
        <h1 style={{ fontFamily: FONT_D, fontSize: 32, fontWeight: 800, color: C.washi, margin: "6px 0 2px" }}>Mis reservas</h1>
        <div style={{ fontFamily: FONT_B, fontSize: 13, color: "#cdd9e6" }}>Códigos a la mano · toca para copiar</div>
      </div>

      <SectionLabel kanji="宿" color={C.shu}>Hoteles</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10 }}>
        {BOOKINGS.hotels.map((h, i) => (
          <Card key={i} style={{ overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "stretch" }}>
              <div style={{ width: 6, background: h.color, flexShrink: 0 }} />
              <div style={{ padding: "12px 16px", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: FONT_D, fontSize: 16, fontWeight: 700, color: C.sumi }}>{h.place}</span>
                  <span style={{ fontFamily: FONT_B, fontSize: 11, fontWeight: 700, color: h.color }}>{h.city}</span>
                  <span style={{ flex: 1 }} />
                  <span style={{ fontFamily: FONT_B, fontSize: 12, color: "#fff", background: h.color, borderRadius: 5, padding: "1px 8px", whiteSpace: "nowrap" }}>{h.dates}</span>
                </div>
                <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
                  <div onClick={() => copy(h.conf)} style={{ cursor: "pointer", flex: 1, minWidth: 130, background: C.washi2, borderRadius: 8, padding: "6px 10px" }}>
                    <div style={{ fontFamily: FONT_B, fontSize: 9.5, color: "#999", letterSpacing: .5 }}>CONFIRMACIÓN</div>
                    <div style={{ fontFamily: FONT_R, fontSize: 15, fontWeight: 700, color: C.ai, letterSpacing: 1 }}>{h.conf}</div>
                  </div>
                  <div onClick={() => copy(h.pin)} style={{ cursor: "pointer", background: C.washi2, borderRadius: 8, padding: "6px 12px" }}>
                    <div style={{ fontFamily: FONT_B, fontSize: 9.5, color: "#999", letterSpacing: .5 }}>PIN</div>
                    <div style={{ fontFamily: FONT_R, fontSize: 15, fontWeight: 700, color: C.shu, letterSpacing: 1 }}>{h.pin}</div>
                  </div>
                </div>
                <div style={{ fontFamily: FONT_B, fontSize: 11.5, color: "#888", marginTop: 7 }}>{h.note}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ marginTop: 24 }}>
        <SectionLabel kanji="空" color={C.ai}>Vuelos (códigos de reserva)</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 9 }}>
          {BOOKINGS.flights.map((f, i) => (
            <Card key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px" }}>
              <span style={{ fontFamily: FONT_B, fontSize: 10.5, fontWeight: 700, color: "#fff", background: C.ai, borderRadius: 5, padding: "1px 7px", flexShrink: 0 }}>{f.date}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: FONT_B, fontSize: 13.5, fontWeight: 700, color: C.sumi }}>{f.route}</div>
                <div style={{ fontFamily: FONT_B, fontSize: 11.5, color: "#888" }}>{f.n}</div>
              </div>
              <div onClick={() => copy(f.pnr)} style={{ cursor: "pointer", fontFamily: FONT_R, fontSize: 13, fontWeight: 700, color: C.shu, border: `1.5px dashed ${C.shu}`, borderRadius: 6, padding: "4px 9px", letterSpacing: 1, whiteSpace: "nowrap", flexShrink: 0 }}>{f.pnr}</div>
            </Card>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <SectionLabel kanji="韓" color={C.matcha}>K-ETA (Corea)</SectionLabel>
        <Card style={{ padding: "6px 16px" }}>
          {BOOKINGS.keta.map((k, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: i < BOOKINGS.keta.length - 1 ? `1px solid ${C.line}` : "none" }}>
              <span style={{ fontFamily: FONT_B, fontSize: 13.5, fontWeight: 700, color: C.sumi, flex: 1 }}>{k.name}</span>
              <span onClick={() => copy(k.app)} style={{ cursor: "pointer", fontFamily: FONT_R, fontSize: 13, fontWeight: 700, color: C.matcha, letterSpacing: .5 }}>{k.app}</span>
            </div>
          ))}
        </Card>
        <div style={{ fontFamily: FONT_B, fontSize: 11.5, color: "#888", marginTop: 8, lineHeight: 1.5 }}>
          Verificar que diga "Approved" en k-eta.go.kr antes de viajar. Llevar impreso o en el celular.
        </div>
      </div>

      <Callout title="📌 Recordatorio" color={C.kin} bg={TAGS.TODOS.bg}>
        Todos los hoteles tienen cancelación gratis (salvo donde diga lo contrario). Guarden este resumen offline también, por si no tienen internet al llegar.
      </Callout>
    </div>
  );
}

function Seul() {
  return (
    <div>
      <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", marginBottom: 16, background: "#1B3A5C", backgroundImage: changsal + ", linear-gradient(120deg, #2B4C7E 0%, #1B3A5C 100%)", padding: "30px 24px" }}>
        <div style={{ position: "absolute", right: 22, top: "50%", transform: "translateY(-50%)", fontFamily: FONT_KR, fontSize: 80, color: "#fff", opacity: .10, fontWeight: 800, letterSpacing: -2, lineHeight: 1, whiteSpace: "nowrap" }}>서울</div>
        <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 8 }}>
          <Taegeuk size={32} />
          <div style={{ fontFamily: FONT_B, fontSize: 11, letterSpacing: 3, color: C.kin, fontWeight: 700 }}>ESCALA · 27 JUL · 대한민국</div>
        </div>
        <h1 style={{ fontFamily: FONT_D, fontSize: 34, fontWeight: 800, color: C.washi, margin: "0 0 2px" }}>Un día en Seúl <span style={{ fontFamily: FONT_KR, fontSize: 23, color: C.kin, fontWeight: 800 }}>서울</span></h1>
        <div style={{ fontFamily: FONT_B, fontSize: 13, color: "#cdd9e6" }}>Llegan ICN 4:30am · salen 21:10 · ~11 horas para la ciudad</div>
      </div>

      <div style={{ marginBottom: 16 }}><MapView data={MAPS.seul} /></div>

      <Callout title="✅ Sí pueden salir — necesitan el K-ETA" color={C.matcha} bg={TAGS.ZEN.bg}>
        Perú es visa-free para Corea (90 días), pero <strong>no está exento del K-ETA</strong> — no figura en la lista de exención (a diferencia de Chile, Colombia y México). Con el K-ETA aprobado pasan inmigración y recorren Seúl libremente. Cuesta ~$7 por persona, vale hasta 3 años y se tramita online.
      </Callout>

      <Callout title="👦 Excepción por edad" color={C.ai} bg={TAGS.TECH.bg}>
        Quienes tengan <strong>17 años o menos</strong> (o 65+) están exentos del K-ETA, sin importar la nacionalidad. Si alguno de los chicos es menor de 18, ese no necesita tramitarlo — pero sí debe presentar la <strong>e-Arrival Card</strong> (ver abajo).
      </Callout>

      <a href="https://www.k-eta.go.kr" target="_blank" rel="noreferrer"
        style={{ display: "block", textAlign: "center", margin: "12px 0", fontFamily: FONT_B, fontSize: 15, fontWeight: 700,
          color: "#fff", background: C.shu, padding: "12px 16px", borderRadius: 10, textDecoration: "none" }}>
        Tramitar el K-ETA en k-eta.go.kr →
      </a>

      <Callout title="⏰ Importante" color={C.shu} bg={TAGS.SALIR.bg}>
        Solicítenlo <strong>mínimo 72 horas antes</strong> del vuelo (idealmente con 1-2 semanas). Vale hasta 3 años, así que pueden sacarlo ya.
      </Callout>

      <Callout title="🪪 e-Arrival Card (tarjeta de llegada digital)" color={C.kin} bg={TAGS.TODOS.bg}>
        Desde enero 2026 la tarjeta de llegada es <strong>solo digital</strong>. Buena noticia: <strong>con el K-ETA aprobado quedan exentos</strong> de llenarla. Quien NO tenga K-ETA (p. ej. un menor de 18) sí debe completar la e-Arrival Card hasta 3 días antes de llegar, en <a href="https://www.e-arrivalcard.go.kr" target="_blank" rel="noreferrer" style={{ color: C.shu, fontWeight: 700 }}>e-arrivalcard.go.kr</a>.
      </Callout>

      <div style={{ marginTop: 22 }}>
        <SectionLabel kanji="절차" color={C.ai} kanjiFont={FONT_KR}>Cómo sacar el K-ETA, paso a paso</SectionLabel>
        <Card style={{ padding: "16px 20px" }}>
          <ol style={{ margin: 0, paddingLeft: 20, fontFamily: FONT_B, fontSize: 13.5, color: C.sumi, lineHeight: 1.7 }}>
            {KETA_STEPS.map((s, i) => (
              <li key={i} style={{ marginBottom: 6 }}><strong style={{ color: C.ai }}>{s.b}</strong> {s.t}</li>
            ))}
          </ol>
        </Card>
      </div>

      <div style={{ marginTop: 24 }}>
        <SectionLabel kanji="열차" color={C.sora} kanjiFont={FONT_KR}>El tren a la ciudad (AREX)</SectionLabel>
        <p style={{ fontFamily: FONT_B, fontSize: 13, color: "#666", marginTop: -8, marginBottom: 12, lineHeight: 1.6 }}>
          Del aeropuerto al centro de Seúl. Hay dos opciones; la Express es la recomendada por comodidad y rapidez.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10 }}>
          {SEOUL_TRAINS.map((tr, i) => (
            <Card key={i} style={{ padding: "14px 16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
                <span style={{ fontFamily: FONT_D, fontSize: 16, fontWeight: 700, color: C.sumi }}>{tr.name}</span>
                {tr.reserve
                  ? <span style={{ fontFamily: FONT_B, fontSize: 10, fontWeight: 700, color: C.shu, background: TAGS.SALIR.bg, borderRadius: 5, padding: "1px 7px" }}>● CON ASIENTO RESERVADO</span>
                  : <span style={{ fontFamily: FONT_B, fontSize: 10, fontWeight: 700, color: C.matcha, background: TAGS.ZEN.bg, borderRadius: 5, padding: "1px 7px" }}>✓ sin reserva · T-money</span>}
                <span style={{ flex: 1 }} />
                <span style={{ fontFamily: FONT_D, fontSize: 14, fontWeight: 700, color: C.ai }}>{tr.time}</span>
              </div>
              <div style={{ fontFamily: FONT_B, fontSize: 12.5, color: C.shu, fontWeight: 700, marginBottom: 4 }}>{tr.cost}</div>
              <div style={{ fontFamily: FONT_B, fontSize: 12.5, color: "#555", lineHeight: 1.5 }}>{tr.note}</div>
            </Card>
          ))}
        </div>
        <Callout title="🎟️ Cómo hacer el ida y vuelta" color={C.kin} bg={TAGS.TODOS.bg}>
          Lo más simple: compren el <strong>boleto ida y vuelta del Express</strong> (~16,000 KRW) en el counter de AREX al llegar, o resérvenlo en airportrailroad.com. A la vuelta solo escanean el QR. Como Asiana está en la <strong>Terminal 2</strong>, el tren sale y llega a la T2.
        </Callout>
      </div>

      <div style={{ marginTop: 24 }}>
        <SectionLabel kanji="일정" color={C.shu} kanjiFont={FONT_KR}>Plan de las ~11 horas</SectionLabel>
        <Card style={{ overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "stretch" }}>
            <div style={{ width: 6, background: C.sora, flexShrink: 0 }} />
            <div style={{ padding: "14px 18px", flex: 1, display: "flex", flexDirection: "column", gap: 9 }}>
              {SEOUL_PLAN.map((it, i) => (
                <div key={i} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: FONT_D, fontSize: 13, fontWeight: 700, color: C.sora, minWidth: 42, flexShrink: 0 }}>{it.time}</span>
                  <div style={{ flexShrink: 0, minWidth: 64 }}><Tag t={it.tag} /></div>
                  <div style={{ fontFamily: FONT_B, fontSize: 13.5, color: C.sumi, lineHeight: 1.5 }}>{it.text}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <Callout title="🧳 Datos clave" color={C.ai} bg={TAGS.TECH.bg}>
        Solo pueden salir <strong>una vez</strong> (Corea no permite doble entrada en la misma escala). Lleven el K-ETA y los dos pases de abordar. El equipaje grande va facturado directo a Tokio. Verifiquen el estado del K-ETA en k-eta.go.kr antes de viajar.
      </Callout>
    </div>
  );
}

function Pokemon() {
  return (
    <div>
      <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", marginBottom: 18, background: "linear-gradient(135deg, #E3350D 0%, #B71C0C 100%)", padding: "26px 24px" }}>
        <div style={{ position: "absolute", right: -30, top: -30, opacity: .16 }}><Pokeball size={150} /></div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <Pokeball size={30} />
          <div style={{ fontFamily: FONT_B, fontSize: 11, letterSpacing: 3, color: "#fff", opacity: .9, fontWeight: 700 }}>OSAKA · 5 AGO · ⚡ でんき</div>
        </div>
        <h1 style={{ fontFamily: FONT_D, fontSize: 32, fontWeight: 800, color: "#fff", margin: "0 0 2px" }}>Pokémon Café</h1>
        <div style={{ fontFamily: FONT_B, fontSize: 13, color: "#fff", opacity: .95 }}>9º piso, Daimaru Shinsaibashi · al lado del Pokémon Center DX</div>
      </div>
      <Callout title="⚡ La reserva es lo más delicado del viaje" color="#E3350D" bg="#FBE9E7">
        Se abre <strong>~31 días antes a las 18:00 hora de Japón</strong>. Para comer el 5 de agosto: <strong>~5 de julio, 04:00 AM hora de Perú</strong>. Los cupos vuelan en SEGUNDOS.
      </Callout>
      <Callout title="⚠ Confirmar la fecha de agosto" color={C.kin} bg={TAGS.TODOS.bg}>
        Las fechas de agosto se anuncian aparte. Revisar pokemon-cafe.jp/en/cafe/news a inicios de julio.
      </Callout>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "16px 0" }}>
        <Card style={{ padding: "16px", textAlign: "center" }}>
          <div style={{ fontFamily: FONT_B, fontSize: 11, color: "#888", letterSpacing: 1 }}>HORA JAPÓN</div>
          <div style={{ fontFamily: FONT_D, fontSize: 26, fontWeight: 800, color: C.ai }}>18:00</div>
          <div style={{ fontFamily: FONT_B, fontSize: 11, color: "#888" }}>apertura</div>
        </Card>
        <Card style={{ padding: "16px", textAlign: "center" }}>
          <div style={{ fontFamily: FONT_B, fontSize: 11, color: "#888", letterSpacing: 1 }}>HORA PERÚ</div>
          <div style={{ fontFamily: FONT_D, fontSize: 26, fontWeight: 800, color: "#E3350D" }}>04:00 AM</div>
          <div style={{ fontFamily: FONT_B, fontSize: 11, color: "#888" }}>alarma 3:50 AM</div>
        </Card>
      </div>
      <SectionLabel kanji="順" color="#E3350D">Paso a paso</SectionLabel>
      <Card style={{ padding: "16px 20px" }}>
        <ol style={{ margin: 0, paddingLeft: 20, fontFamily: FONT_B, fontSize: 13.5, color: C.sumi, lineHeight: 1.7 }}>
          <li>Marcar <strong>@mail-pokemon-cafe.jp</strong> como "no spam"; tener tarjeta + email listos.</li>
          <li>Reloj con segundos (time.is). Portal <strong>reserve.pokemon-cafe.jp</strong> en inglés a las 17:55 JST.</li>
          <li>Elegir <strong>OSAKA</strong>, 4 personas y la fecha (5 ago) aunque salga no disponible.</li>
          <li>A las 18:00:00 exactas, clic en "next step".</li>
          <li>Tomar el primer horario disponible y completar datos rápido.</li>
          <li>Guardar el correo de confirmación.</li>
        </ol>
      </Card>
      <Callout title="Truco" color={C.matcha} bg={TAGS.ZEN.bg}>
        Intenten desde 2-3 dispositivos a la vez. Plan B: si falla el 5 de agosto, dos días después prueben para el 7.
      </Callout>
      <div style={{ marginTop: 22 }}>
        <SectionLabel kanji="店" color="#E3350D">Pokémon Centers en el plan</SectionLabel>
        <p style={{ fontFamily: FONT_B, fontSize: 12.5, color: "#888", marginTop: -8, marginBottom: 12, lineHeight: 1.5 }}>
          Sin reserva, solo entrar. Cuatro paradas para coleccionar a lo largo del viaje:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(176px,1fr))", gap: 10 }}>
          {[["28 Jul","Center Shibuya","En Shibuya Parco"],["29 Jul","Akihabara","Dentro de Yodobashi"],["31 Jul","Skytree Town","Mercancía estilo Edo"],["5 Ago","Osaka DX","Junto al Café ⚡"]].map((p, i) => (
            <Card key={i} style={{ padding: "12px 13px", display: "flex", alignItems: "center", gap: 11 }}>
              <Pokeball size={34} />
              <div>
                <div style={{ fontFamily: FONT_B, fontSize: 10.5, fontWeight: 700, color: "#E3350D", letterSpacing: .5 }}>{p[0]}</div>
                <div style={{ fontFamily: FONT_D, fontSize: 14.5, fontWeight: 700, color: C.sumi, lineHeight: 1.15 }}>{p[1]}</div>
                <div style={{ fontFamily: FONT_B, fontSize: 10.5, color: "#999" }}>{p[2]}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function Extra() {
  const [checked, setChecked] = useState({});
  return (
    <div>
      <SectionLabel kanji="予算" color={C.ai}>Presupuesto</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
        {BUDGET.map((b, i) => (
          <Card key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px" }}>
            <div style={{ width: 8, height: 40, borderRadius: 4, background: b.color, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: FONT_B, fontWeight: 700, fontSize: 14.5, color: C.sumi }}>{b.label}</div>
              <div style={{ fontFamily: FONT_B, fontSize: 12, color: "#888" }}>{b.note}</div>
            </div>
            <div style={{ fontFamily: FONT_D, fontSize: 22, fontWeight: 800, color: b.color }}>{b.amount}</div>
          </Card>
        ))}
      </div>
      <Card style={{ marginTop: 12, padding: "18px 20px", background: C.aiDeep, backgroundImage: seigaiha }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <div>
            <div style={{ fontFamily: FONT_B, fontSize: 12, color: C.kin, letterSpacing: 1, fontWeight: 700 }}>GRAN TOTAL APROXIMADO</div>
            <div style={{ fontFamily: FONT_B, fontSize: 12, color: "#cdd9e6" }}>~$6,750 por persona · grupo de 4</div>
          </div>
          <div style={{ fontFamily: FONT_D, fontSize: 34, fontWeight: 800, color: C.washi }}>~$27,000</div>
        </div>
      </Card>
      <div style={{ marginTop: 28 }}>
        <SectionLabel kanji="準備" color={C.shu}>Pendientes antes del viaje</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 8 }}>
          {CHECKLIST.map((c, i) => (
            <div key={i} onClick={() => setChecked(p => ({ ...p, [i]: !p[i] }))}
              style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer",
                background: c.urgent ? TAGS.SALIR.bg : "#FFFCF6", border: `1px solid ${c.urgent ? "#E7C0B7" : C.line}`, borderRadius: 10, padding: "12px 14px" }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, flexShrink: 0, marginTop: 1,
                border: `2px solid ${checked[i] ? C.matcha : (c.urgent ? C.shu : C.line)}`,
                background: checked[i] ? C.matcha : "transparent", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>{checked[i] ? "✓" : ""}</div>
              <div style={{ flex: 1 }}>
                {c.urgent && <span style={{ fontFamily: FONT_B, fontSize: 10, fontWeight: 700, color: C.shu, letterSpacing: 1, marginRight: 6 }}>URGENTE</span>}
                <span style={{ fontFamily: FONT_B, fontSize: 13.5, color: C.sumi, lineHeight: 1.5, textDecoration: checked[i] ? "line-through" : "none", opacity: checked[i] ? .55 : 1 }}>{c.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- APP ---------------- */

export default function App() {
  const [tab, setTab] = useState("general");
  const content = { general: <Overview />, reservas: <Reservas />, vuelos: <Vuelos />, la: <LosAngeles />, seul: <Seul />, japon: <Japon />, hoteles: <Hoteles />, pokemon: <Pokemon />, extra: <Extra /> };
  return (
    <div style={{ minHeight: "100vh", background: C.washi, fontFamily: FONT_B, color: C.sumi }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;700;800&family=Zen+Kaku+Gothic+New:wght@400;500;700&family=Zen+Maru+Gothic:wght@500;700&family=Nanum+Myeongjo:wght@700;800&display=swap');
        @font-face { font-family: 'Pricedown'; src: url('data:font/woff2;base64,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') format('woff2'); font-display: swap; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { height: 6px; width: 6px; }
        ::-webkit-scrollbar-thumb { background: ${C.line}; border-radius: 6px; }
        a:hover { opacity: .88; }
      `}</style>
      <div style={{ background: C.aiDeep, backgroundImage: seigaiha, borderBottom: `3px solid ${C.shu}` }}>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "14px 20px", display: "flex", alignItems: "center", gap: 14 }}>
          <Seal color={C.shu} size={46} rot={-8}><span style={{ fontSize: 22 }}>旅</span></Seal>
          <div>
            <div style={{ fontFamily: FONT_D, fontSize: 19, fontWeight: 800, color: C.washi, lineHeight: 1.1 }}>Los Ángeles & Japón <span style={{ color: C.kin, fontSize: 13 }}>2026</span></div>
            <div style={{ fontFamily: FONT_B, fontSize: 11, color: "#aab8c6", letterSpacing: 1 }}>旅のしおり · cuaderno de viaje</div>
          </div>
        </div>
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 12px", display: "flex", gap: 2, overflowX: "auto" }}>
          {TABS.map(t => {
            const active = tab === t.id;
            return (
              <button key={t.id} onClick={() => setTab(t.id)} style={{ flexShrink: 0, border: "none", cursor: "pointer",
                background: active ? C.washi : "transparent", color: active ? C.ai : "#cdd9e6", fontFamily: FONT_B, fontWeight: 700, fontSize: 13,
                padding: "10px 14px", borderRadius: "10px 10px 0 0", display: "flex", alignItems: "center", gap: 6, transition: "background .2s" }}>
                <span style={{ fontFamily: FONT_D, fontSize: 13, color: active ? C.shu : C.kin }}>{t.kanji}</span>{t.label}
              </button>
            );
          })}
        </div>
      </div>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "26px 18px 60px" }}>{content[tab]}</div>
      <div style={{ borderTop: `1px solid ${C.line}`, padding: "18px", textAlign: "center" }}>
        <div style={{ fontFamily: FONT_D, fontSize: 18, color: C.shu }}>良い旅を</div>
        <div style={{ fontFamily: FONT_B, fontSize: 11, color: "#999", marginTop: 2 }}>Buen viaje · 2026</div>
      </div>
    </div>
  );
}
