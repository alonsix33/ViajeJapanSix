import { C, FONT_D, FONT_B } from '../styles/tokens.js';
import { SectionLabel, HotelCard } from '../components/ui/index.js';
import { HOTELS } from '../data/hotels.js';

export function Hoteles() {
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
