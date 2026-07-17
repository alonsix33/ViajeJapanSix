import { C, TAGS, FONT_D, FONT_B, seigaiha } from '../styles/tokens.js';
import { SectionLabel, Callout, MapView, DayCard, TransportRow } from '../components/ui/index.js';
import { Seal } from '../components/seals/index.js';
import { MAPS } from '../data/maps.js';
import { TRANSPORT_MOVE, TRANSPORT_DAYTRIP } from '../data/transport.js';
import { JP_CITIES } from '../data/japan.js';

export function Japon() {
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
