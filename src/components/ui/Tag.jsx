import { TAGS, FONT_B } from '../../styles/tokens.js';

export function Tag({ t }) {
  const tg = TAGS[t] || TAGS.TODOS;
  return <span style={{ fontFamily: FONT_B, fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
    color: tg.color, background: tg.bg, padding: "2px 8px", borderRadius: 4, whiteSpace: "nowrap" }}>{tg.label}</span>;
}
