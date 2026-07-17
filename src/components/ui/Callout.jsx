import { C, FONT_B } from '../../styles/tokens.js';

export function Callout({ title, color, bg, children }) {
  return (
    <div
      style={{
        borderLeft: `5px solid ${color}`,
        background: bg,
        borderRadius: 10,
        padding: '12px 15px',
        margin: '10px 0',
      }}
    >
      <div style={{ fontFamily: FONT_B, fontWeight: 700, color, fontSize: 14, marginBottom: 5 }}>
        {title}
      </div>
      <div style={{ fontFamily: FONT_B, fontSize: 13.5, color: C.sumi, lineHeight: 1.6 }}>
        {children}
      </div>
    </div>
  );
}
