import { useState } from 'react';
import { C, FONT_B, FONT_D, seigaiha } from './styles/tokens.js';
import { Seal } from './components/seals/index.js';
import { TABS } from './data/misc.js';
import {
  Overview,
  Reservas,
  Vuelos,
  LosAngeles,
  Seul,
  Japon,
  Hoteles,
  Pokemon,
  Extra,
} from './tabs/index.js';

export default function App() {
  const [tab, setTab] = useState('general');
  const content = {
    general: <Overview />,
    reservas: <Reservas />,
    vuelos: <Vuelos />,
    la: <LosAngeles />,
    seul: <Seul />,
    japon: <Japon />,
    hoteles: <Hoteles />,
    pokemon: <Pokemon />,
    extra: <Extra />,
  };
  return (
    <div style={{ minHeight: '100vh', background: C.washi, fontFamily: FONT_B, color: C.sumi }}>
      <div
        style={{
          background: C.aiDeep,
          backgroundImage: seigaiha,
          borderBottom: `3px solid ${C.shu}`,
        }}
      >
        <div
          style={{
            maxWidth: 920,
            margin: '0 auto',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
          }}
        >
          <Seal color={C.shu} size={46} rot={-8}>
            <span style={{ fontSize: 22 }}>旅</span>
          </Seal>
          <div>
            <div
              style={{
                fontFamily: FONT_D,
                fontSize: 19,
                fontWeight: 800,
                color: C.washi,
                lineHeight: 1.1,
              }}
            >
              Los Ángeles & Japón <span style={{ color: C.kin, fontSize: 13 }}>2026</span>
            </div>
            <div style={{ fontFamily: FONT_B, fontSize: 11, color: '#aab8c6', letterSpacing: 1 }}>
              旅のしおり · cuaderno de viaje
            </div>
          </div>
        </div>
        <div
          style={{
            maxWidth: 920,
            margin: '0 auto',
            padding: '0 12px',
            display: 'flex',
            gap: 2,
            overflowX: 'auto',
          }}
        >
          {TABS.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                style={{
                  flexShrink: 0,
                  border: 'none',
                  cursor: 'pointer',
                  background: active ? C.washi : 'transparent',
                  color: active ? C.ai : '#cdd9e6',
                  fontFamily: FONT_B,
                  fontWeight: 700,
                  fontSize: 13,
                  padding: '10px 14px',
                  borderRadius: '10px 10px 0 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  transition: 'background .2s',
                }}
              >
                <span style={{ fontFamily: FONT_D, fontSize: 13, color: active ? C.shu : C.kin }}>
                  {t.kanji}
                </span>
                {t.label}
              </button>
            );
          })}
        </div>
      </div>
      <div style={{ maxWidth: 920, margin: '0 auto', padding: '26px 18px 60px' }}>
        {content[tab]}
      </div>
      <div style={{ borderTop: `1px solid ${C.line}`, padding: '18px', textAlign: 'center' }}>
        <div style={{ fontFamily: FONT_D, fontSize: 18, color: C.shu }}>良い旅を</div>
        <div style={{ fontFamily: FONT_B, fontSize: 11, color: '#999', marginTop: 2 }}>
          Buen viaje · 2026
        </div>
      </div>
    </div>
  );
}
