import { C, TAGS, FONT_D, FONT_B } from '../styles/tokens.js';
import { SectionLabel, Card, Callout, FlightCard } from '../components/ui/index.js';
import { FLIGHTS, TRANSFERS } from '../data/flights.js';

export function Vuelos() {
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
