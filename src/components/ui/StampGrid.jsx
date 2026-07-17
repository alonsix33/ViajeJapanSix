import { useState } from 'react';
import { C, FONT_D, FONT_B } from '../../styles/tokens.js';
import { STAMPS } from '../../data/misc.js';

export function StampGrid() {
  const [done, setDone] = useState({});
  const count = Object.values(done).filter(Boolean).length;
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 14,
          flexWrap: 'wrap',
        }}
      >
        <p
          style={{
            fontFamily: FONT_B,
            fontSize: 13.5,
            color: '#666',
            margin: 0,
            lineHeight: 1.6,
            flex: 1,
            minWidth: 220,
          }}
        >
          Como en un goshuincho, cada lugar es un sello.{' '}
          <strong style={{ color: C.shu }}>Tócalo para marcarlo</strong> cuando lo visiten.
        </p>
        <div
          style={{
            fontFamily: FONT_D,
            fontSize: 14,
            fontWeight: 700,
            color: C.ai,
            background: C.washi2,
            borderRadius: 20,
            padding: '6px 14px',
            whiteSpace: 'nowrap',
          }}
        >
          {count} / {STAMPS.length} sellos
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
        {STAMPS.map((s, i) => {
          const got = !!done[i];
          return (
            <div
              key={i}
              onClick={() => setDone((p) => ({ ...p, [i]: !p[i] }))}
              style={{
                position: 'relative',
                width: 104,
                padding: '14px 6px 10px',
                textAlign: 'center',
                cursor: 'pointer',
                background: C.washi,
                border: `2px solid ${s.color}`,
                borderRadius: 10,
                transform: got ? 'rotate(0deg)' : `rotate(${(s.name.length % 5) - 2}deg)`,
                transition: 'transform .2s ease',
                boxShadow: `inset 0 0 0 3px ${C.washi}, inset 0 0 0 4px ${s.color}22`,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 4,
                  right: 6,
                  fontFamily: FONT_D,
                  fontSize: 13,
                  color: s.color,
                  opacity: 0.7,
                }}
              >
                {s.kanji}
              </div>
              <div style={{ fontSize: 30, lineHeight: 1, opacity: got ? 0.35 : 1 }}>{s.icon}</div>
              <div
                style={{
                  fontFamily: FONT_B,
                  fontSize: 11,
                  fontWeight: 700,
                  color: C.sumi,
                  marginTop: 6,
                  opacity: got ? 0.4 : 1,
                }}
              >
                {s.name}
              </div>
              <div
                style={{
                  fontFamily: FONT_B,
                  fontSize: 9.5,
                  color: s.color,
                  marginTop: 2,
                  letterSpacing: 0.5,
                  textTransform: 'uppercase',
                  opacity: got ? 0.4 : 1,
                }}
              >
                {s.place}
              </div>
              {got && (
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%) rotate(-15deg)',
                    fontFamily: FONT_D,
                    fontSize: 30,
                    fontWeight: 800,
                    color: C.shu,
                    border: `3px solid ${C.shu}`,
                    borderRadius: '50%',
                    width: 48,
                    height: 48,
                    lineHeight: '42px',
                    background: 'rgba(244,238,226,0.4)',
                  }}
                >
                  済
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
