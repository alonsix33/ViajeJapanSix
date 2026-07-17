import { C, FONT_D, FONT_B, FONT_R, seigaiha } from '../../styles/tokens.js';
import { Card } from './Card.jsx';

export function FlightCard({ f, idx }) {
  return (
    <Card style={{ overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: C.aiDeep,
          padding: '10px 18px',
          color: C.washi,
          backgroundImage: seigaiha,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontFamily: FONT_D, fontSize: 18, fontWeight: 800, color: C.kin }}>
            0{idx + 1}
          </span>
          <div>
            <div style={{ fontFamily: FONT_B, fontWeight: 700, fontSize: 14 }}>{f.airline}</div>
            <div style={{ fontFamily: FONT_B, fontSize: 11, opacity: 0.8 }}>
              {f.n} · {f.date}
            </div>
          </div>
        </div>
        <span style={{ fontFamily: FONT_R, fontSize: 12, color: C.washi, opacity: 0.85 }}>
          {f.plane}
        </span>
      </div>
      <div style={{ padding: '16px 18px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: FONT_D, fontSize: 30, fontWeight: 800, color: C.ai }}>
              {f.from}
            </div>
            <div style={{ fontFamily: FONT_B, fontSize: 11, color: '#888' }}>{f.fromCity}</div>
            <div
              style={{
                fontFamily: FONT_B,
                fontSize: 15,
                fontWeight: 700,
                color: C.sumi,
                marginTop: 2,
              }}
            >
              {f.dep}
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: C.shu,
            }}
          >
            <span style={{ fontSize: 16 }}>✈</span>
            <div style={{ width: '100%', height: 1, background: C.line, margin: '4px 0' }} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: FONT_D, fontSize: 30, fontWeight: 800, color: C.ai }}>
              {f.to}
            </div>
            <div style={{ fontFamily: FONT_B, fontSize: 11, color: '#888' }}>{f.toCity}</div>
            <div
              style={{
                fontFamily: FONT_B,
                fontSize: 15,
                fontWeight: 700,
                color: C.sumi,
                marginTop: 2,
              }}
            >
              {f.arr}
            </div>
          </div>
        </div>
        {f.legs.length > 0 && (
          <div
            style={{ marginTop: 12, padding: '8px 12px', background: C.washi2, borderRadius: 8 }}
          >
            {f.legs.map((l, i) => (
              <div
                key={i}
                style={{
                  fontFamily: FONT_B,
                  fontSize: 12,
                  color: i === 1 ? C.shu : C.sumi,
                  fontWeight: i === 1 ? 700 : 500,
                  padding: '2px 0',
                }}
              >
                {i === 1 ? '↕ ' : '→ '}
                {l}
              </div>
            ))}
          </div>
        )}
        <div
          style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12, alignItems: 'center' }}
        >
          <div
            style={{
              fontFamily: FONT_R,
              fontSize: 12,
              fontWeight: 700,
              color: C.shu,
              border: `1.5px dashed ${C.shu}`,
              borderRadius: 6,
              padding: '4px 10px',
              letterSpacing: 1,
            }}
          >
            {f.pnr}
          </div>
          <span style={{ fontFamily: FONT_B, fontSize: 12, color: '#777' }}>{f.fare}</span>
          <span style={{ flex: 1 }} />
          <span style={{ fontFamily: FONT_D, fontSize: 17, fontWeight: 800, color: C.ai }}>
            {f.price}
          </span>
        </div>
        <ul style={{ margin: '10px 0 0', padding: 0, listStyle: 'none' }}>
          {f.extra.map((e, i) => (
            <li
              key={i}
              style={{
                fontFamily: FONT_B,
                fontSize: 12.5,
                color: '#555',
                padding: '2px 0',
                display: 'flex',
                gap: 6,
              }}
            >
              <span style={{ color: C.kin }}>◦</span>
              {e}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
