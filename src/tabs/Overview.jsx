import React from 'react';
import { C, FONT_D, FONT_B, seigaiha } from '../styles/tokens.js';
import { SectionLabel, Card, Countdown, StampGrid } from '../components/ui/index.js';
import { TRAVELERS } from '../data/travelers.js';
import { STAMPS } from '../data/misc.js';
import { downloadItineraryICS } from '../utils/ics.js';

export function Overview() {
  const stats = [
    { k: '旅', v: '18', l: 'días' },
    { k: '都', v: '6', l: 'ciudades' },
    { k: '空', v: '4', l: 'vuelos' },
    { k: '印', v: String(STAMPS.length), l: 'sellos' },
  ];
  const route = [
    ['Lima', 'リマ'],
    ['L.A.', '羅府'],
    ['Tokio', '東京'],
    ['Hakone', '箱根'],
    ['Kioto', '京都'],
    ['Osaka', '大阪'],
    ['Lima', 'リマ'],
  ];
  return (
    <div>
      <div
        style={{
          position: 'relative',
          background: C.aiDeep,
          backgroundImage: seigaiha,
          borderRadius: 18,
          padding: '34px 26px',
          overflow: 'hidden',
          marginBottom: 22,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -10,
            right: 14,
            fontFamily: FONT_D,
            fontSize: 130,
            color: '#fff',
            opacity: 0.06,
            fontWeight: 800,
            lineHeight: 1,
          }}
        >
          旅
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              fontFamily: FONT_B,
              fontSize: 12,
              letterSpacing: 3,
              color: C.kin,
              fontWeight: 700,
            }}
          >
            ITINERARIO · 2026
          </div>
          <h1
            style={{
              fontFamily: FONT_D,
              fontSize: 40,
              fontWeight: 800,
              color: C.washi,
              margin: '8px 0 4px',
              lineHeight: 1.1,
            }}
          >
            Los Ángeles <span style={{ color: C.shuSoft }}>&</span> Japón
          </h1>
          <div style={{ fontFamily: FONT_B, fontSize: 14, color: '#cdd9e6' }}>
            23 de julio – 10 de agosto de 2026
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
            {TRAVELERS.map((n) => (
              <span
                key={n}
                style={{
                  fontFamily: FONT_B,
                  fontSize: 12,
                  color: C.washi,
                  border: `1px solid ${C.kin}66`,
                  borderRadius: 20,
                  padding: '4px 12px',
                }}
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Card style={{ padding: '16px 20px', marginBottom: 14 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            flexWrap: 'wrap',
          }}
        >
          {route.map((c, i, arr) => (
            <React.Fragment key={i}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: FONT_D, fontSize: 15, fontWeight: 700, color: C.ai }}>
                  {c[0]}
                </div>
                <div style={{ fontFamily: FONT_D, fontSize: 11, color: C.shu }}>{c[1]}</div>
              </div>
              {i < arr.length - 1 && <span style={{ color: C.kin, fontSize: 13 }}>✈</span>}
            </React.Fragment>
          ))}
        </div>
      </Card>
      <Card
        style={{
          padding: '18px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: 16,
          marginBottom: 24,
        }}
      >
        <Countdown />
        <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap', justifyContent: 'center' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: FONT_D, fontSize: 13, color: C.shu, opacity: 0.7 }}>
                {s.k}
              </div>
              <div
                style={{
                  fontFamily: FONT_D,
                  fontSize: 26,
                  fontWeight: 800,
                  color: C.ai,
                  lineHeight: 1.1,
                }}
              >
                {s.v}
              </div>
              <div style={{ fontFamily: FONT_B, fontSize: 10.5, color: '#888' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </Card>
      <button
        onClick={downloadItineraryICS}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          width: '100%',
          textAlign: 'center',
          margin: '0 0 24px',
          fontFamily: FONT_B,
          fontSize: 15,
          fontWeight: 700,
          color: '#fff',
          background: C.ai,
          border: 'none',
          padding: '12px 16px',
          borderRadius: 10,
          cursor: 'pointer',
        }}
      >
        📅 Agregar itinerario al calendario
      </button>
      <SectionLabel kanji="印" color={C.shu}>
        Pasaporte de sellos
      </SectionLabel>
      <StampGrid />
    </div>
  );
}
