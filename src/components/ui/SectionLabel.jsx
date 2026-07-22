import { C, FONT_D } from '../../styles/tokens.js';

export function SectionLabel({ kanji, children, color = C.ai, kanjiFont = FONT_D }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '0 0 18px' }}>
      <span style={{ fontFamily: kanjiFont, fontSize: 30, color, fontWeight: 800 }}>{kanji}</span>
      <h2 style={{ fontFamily: FONT_D, fontSize: 24, color: C.sumi, fontWeight: 700, margin: 0 }}>
        {children}
      </h2>
      <span style={{ flex: 1, height: 1, background: C.line }} />
    </div>
  );
}
