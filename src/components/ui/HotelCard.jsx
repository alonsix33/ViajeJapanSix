import { C, TAGS, FONT_D, FONT_B } from '../../styles/tokens.js';
import { Card } from './Card.jsx';

export function HotelCard({ h, color }) {
  return (
    <Card
      style={{
        padding: '14px 16px',
        border: h.booked ? `2px solid ${color}` : `1px solid ${C.line}`,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 8,
        }}
      >
        <div style={{ fontFamily: FONT_D, fontSize: 16, fontWeight: 700, color: C.sumi }}>
          {h.name}
        </div>
        <span
          style={{
            fontFamily: FONT_B,
            fontSize: 10,
            fontWeight: 700,
            color: h.booked ? '#fff' : color,
            background: h.booked ? color : `${color}18`,
            padding: '2px 8px',
            borderRadius: 20,
            whiteSpace: 'nowrap',
          }}
        >
          {h.booked ? '✓ ' : ''}
          {h.tag}
        </span>
      </div>
      <div style={{ display: 'flex', gap: 12, margin: '6px 0', alignItems: 'center' }}>
        {h.booked && (
          <span
            style={{
              fontFamily: FONT_B,
              fontSize: 10,
              fontWeight: 700,
              color: C.matcha,
              background: TAGS.ZEN.bg,
              borderRadius: 5,
              padding: '1px 7px',
            }}
          >
            RESERVADO
          </span>
        )}
        <span style={{ fontFamily: FONT_B, fontSize: 12, color: C.kin, fontWeight: 700 }}>
          ★ {h.rating}
        </span>
        <span style={{ fontFamily: FONT_B, fontSize: 12, color: '#777' }}>{h.price}</span>
      </div>
      <div style={{ fontFamily: FONT_B, fontSize: 13, color: '#555', lineHeight: 1.5 }}>
        {h.why}
      </div>
      {!h.booked && (
        <a
          href={h.url}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-block',
            marginTop: 10,
            fontFamily: FONT_B,
            fontSize: 12,
            fontWeight: 700,
            color: '#fff',
            background: color,
            padding: '6px 14px',
            borderRadius: 8,
            textDecoration: 'none',
          }}
        >
          Ver →
        </a>
      )}
    </Card>
  );
}
