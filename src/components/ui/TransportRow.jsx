import { C, TAGS, FONT_D, FONT_B } from '../../styles/tokens.js';
import { Card } from './Card.jsx';

export function TransportRow({ t }) {
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
