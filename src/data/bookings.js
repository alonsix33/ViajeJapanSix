import { C } from '../styles/tokens.js';

export const BOOKINGS = {
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
