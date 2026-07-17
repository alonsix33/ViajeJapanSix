import { C, FONT_D, FONT_B } from '../../styles/tokens.js';
import { Tag } from './Tag.jsx';
import { Card } from './Card.jsx';
import { RouteHop } from './RouteHop.jsx';

export function DayCard({ d, accent }) {
  return (
    <Card style={{ overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        <div style={{ width: 6, background: accent, flexShrink: 0 }} />
        <div style={{ padding: '14px 18px', flex: 1 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 10,
              flexWrap: 'wrap',
              marginBottom: 10,
            }}
          >
            {d.kanji && (
              <span style={{ fontFamily: FONT_D, fontSize: 20, color: accent, fontWeight: 800 }}>
                {d.kanji}
              </span>
            )}
            <span
              style={{
                fontFamily: FONT_B,
                fontSize: 12,
                fontWeight: 700,
                color: accent,
                letterSpacing: 0.5,
              }}
            >
              {d.date}
            </span>
            <span style={{ fontFamily: FONT_D, fontSize: 17, fontWeight: 700, color: C.sumi }}>
              {d.title}
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {d.items.map((it, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {it.routes && it.routes.map((r, j) => <RouteHop key={j} route={r} />)}
                <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, minWidth: 64 }}>
                    <Tag t={it.tag} />
                  </div>
                  <div
                    style={{ fontFamily: FONT_B, fontSize: 13.5, color: C.sumi, lineHeight: 1.55 }}
                  >
                    {it.time && (
                      <strong style={{ color: accent, marginRight: 6 }}>{it.time}</strong>
                    )}
                    {it.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
