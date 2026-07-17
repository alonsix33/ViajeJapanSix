import { useState } from 'react';
import { C, MTYPE, FONT_D, FONT_B } from '../../styles/tokens.js';
import { Card } from './Card.jsx';

export function MapView({ data }) {
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
