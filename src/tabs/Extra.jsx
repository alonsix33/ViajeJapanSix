import { useState } from 'react';
import { C, TAGS, FONT_D, FONT_B, seigaiha } from '../styles/tokens.js';
import { SectionLabel, Card } from '../components/ui/index.js';
import { BUDGET, CHECKLIST } from '../data/misc.js';

export function Extra() {
  const [checked, setChecked] = useState({});
  return (
    <div>
      <SectionLabel kanji="予算" color={C.ai}>
        Presupuesto
      </SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
        {BUDGET.map((b, i) => (
          <Card
            key={i}
            style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px' }}
          >
            <div
              style={{ width: 8, height: 40, borderRadius: 4, background: b.color, flexShrink: 0 }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: FONT_B, fontWeight: 700, fontSize: 14.5, color: C.sumi }}>
                {b.label}
              </div>
              <div style={{ fontFamily: FONT_B, fontSize: 12, color: '#888' }}>{b.note}</div>
            </div>
            <div style={{ fontFamily: FONT_D, fontSize: 22, fontWeight: 800, color: b.color }}>
              {b.amount}
            </div>
          </Card>
        ))}
      </div>
      <Card
        style={{
          marginTop: 12,
          padding: '18px 20px',
          background: C.aiDeep,
          backgroundImage: seigaiha,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: FONT_B,
                fontSize: 12,
                color: C.kin,
                letterSpacing: 1,
                fontWeight: 700,
              }}
            >
              GRAN TOTAL APROXIMADO
            </div>
            <div style={{ fontFamily: FONT_B, fontSize: 12, color: '#cdd9e6' }}>
              ~$6,750 por persona · grupo de 4
            </div>
          </div>
          <div style={{ fontFamily: FONT_D, fontSize: 34, fontWeight: 800, color: C.washi }}>
            ~$27,000
          </div>
        </div>
      </Card>
      <div style={{ marginTop: 28 }}>
        <SectionLabel kanji="準備" color={C.shu}>
          Pendientes antes del viaje
        </SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8 }}>
          {CHECKLIST.map((c, i) => (
            <div
              key={i}
              onClick={() => setChecked((p) => ({ ...p, [i]: !p[i] }))}
              style={{
                display: 'flex',
                gap: 12,
                alignItems: 'flex-start',
                cursor: 'pointer',
                background: c.urgent ? TAGS.SALIR.bg : '#FFFCF6',
                border: `1px solid ${c.urgent ? '#E7C0B7' : C.line}`,
                borderRadius: 10,
                padding: '12px 14px',
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 6,
                  flexShrink: 0,
                  marginTop: 1,
                  border: `2px solid ${checked[i] ? C.matcha : c.urgent ? C.shu : C.line}`,
                  background: checked[i] ? C.matcha : 'transparent',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                {checked[i] ? '✓' : ''}
              </div>
              <div style={{ flex: 1 }}>
                {c.urgent && (
                  <span
                    style={{
                      fontFamily: FONT_B,
                      fontSize: 10,
                      fontWeight: 700,
                      color: C.shu,
                      letterSpacing: 1,
                      marginRight: 6,
                    }}
                  >
                    URGENTE
                  </span>
                )}
                <span
                  style={{
                    fontFamily: FONT_B,
                    fontSize: 13.5,
                    color: C.sumi,
                    lineHeight: 1.5,
                    textDecoration: checked[i] ? 'line-through' : 'none',
                    opacity: checked[i] ? 0.55 : 1,
                  }}
                >
                  {c.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
