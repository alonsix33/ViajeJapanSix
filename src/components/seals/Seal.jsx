import { C, FONT_D } from '../../styles/tokens.js';

export function Seal({ children, color = C.shu, size = 56, rot = -6 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        transform: `rotate(${rot}deg)`,
        flexShrink: 0,
        border: `2px solid ${color}`,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color,
        fontFamily: FONT_D,
        fontWeight: 800,
        boxShadow: `inset 0 0 0 3px ${C.washi}, inset 0 0 0 4px ${color}33`,
        background: C.washi,
      }}
    >
      {children}
    </div>
  );
}
