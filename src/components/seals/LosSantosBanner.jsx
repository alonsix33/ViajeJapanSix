import { FONT_B, FONT_GTA } from '../../styles/tokens.js';

export function LosSantosBanner() {
  const sky = "lsSky_" + "a", sun = "lsSun_" + "a";
  return (
    <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 16, boxShadow: "0 4px 14px rgba(0,0,0,0.20)" }}>
      <svg viewBox="0 0 700 180" width="100%" style={{ display: "block" }} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2A1A4A" />
            <stop offset="42%" stopColor="#9B3B6E" />
            <stop offset="72%" stopColor="#E8643C" />
            <stop offset="100%" stopColor="#F6B24A" />
          </linearGradient>
          <linearGradient id={sun} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE08A" />
            <stop offset="100%" stopColor="#FF6F61" />
          </linearGradient>
        </defs>
        <rect width="700" height="180" fill={`url(#${sky})`} />
        <circle cx="350" cy="152" r="56" fill={`url(#${sun})`} opacity="0.96" />
        <g fill="#9B3B6E" opacity="0.5">
          <rect x="300" y="150" width="100" height="4" /><rect x="305" y="160" width="90" height="5" /><rect x="312" y="170" width="76" height="6" />
        </g>
        <g fill="#1C1330" opacity="0.92">
          <rect x="120" y="120" width="13" height="30" /><rect x="136" y="106" width="10" height="44" /><rect x="150" y="126" width="15" height="24" />
          <rect x="500" y="112" width="12" height="38" /><rect x="516" y="98" width="13" height="52" /><rect x="533" y="122" width="10" height="28" /><rect x="546" y="110" width="15" height="40" />
        </g>
        <rect x="0" y="150" width="700" height="30" fill="#140E26" />
        <g fill="#0E0A1C">
          <path d="M70 150 C 66 120, 60 96, 53 72 L 59 70 C 67 96, 75 122, 80 150 Z" />
          <g transform="translate(56,70)">
            <path d="M0 0 C -22 -10, -40 -8, -54 2 C -38 -2, -20 2, 0 6 Z" />
            <path d="M0 0 C 20 -12, 40 -12, 56 -4 C 38 -6, 18 -2, 0 6 Z" />
            <path d="M0 0 C -10 -24, -8 -44, 2 -58 C -2 -42, 2 -22, 6 0 Z" />
            <path d="M0 0 C 14 -20, 30 -32, 46 -34 C 30 -24, 14 -10, 4 2 Z" />
            <path d="M0 0 C -16 -18, -32 -26, -46 -26 C -30 -18, -14 -8, -2 2 Z" />
          </g>
        </g>
        <g fill="#0E0A1C" transform="translate(630,0) scale(-1,1)">
          <path d="M70 150 C 66 122, 60 100, 54 80 L 60 78 C 66 100, 74 124, 80 150 Z" />
          <g transform="translate(57,78)">
            <path d="M0 0 C -20 -10, -36 -8, -48 2 C -34 -2, -18 2, 0 6 Z" />
            <path d="M0 0 C 18 -12, 36 -12, 50 -4 C 34 -6, 16 -2, 0 6 Z" />
            <path d="M0 0 C -8 -22, -6 -40, 4 -52 C 0 -38, 4 -20, 6 0 Z" />
            <path d="M0 0 C 12 -18, 26 -28, 40 -30 C 26 -22, 12 -10, 4 2 Z" />
          </g>
        </g>
        <text x="350" y="50" textAnchor="middle" style={{ fontFamily: FONT_B, fontWeight: 800, fontSize: 12, letterSpacing: 7 }} fill="#FFE8C2" opacity="0.92">LOS ÁNGELES</text>
        <text x="352" y="101" textAnchor="middle" style={{ fontFamily: FONT_GTA, fontWeight: 800, fontSize: 46, letterSpacing: 1 }} fill="#000" opacity="0.28">LOS SANTOS</text>
        <text x="350" y="99" textAnchor="middle" style={{ fontFamily: FONT_GTA, fontWeight: 800, fontSize: 46, letterSpacing: 1, paintOrder: "stroke", strokeLinejoin: "round" }} fill="#FFFFFF" stroke="#1A0E22" strokeWidth="3">LOS SANTOS</text>
      </svg>
      <div style={{ background: "#140E26", padding: "8px 14px", textAlign: "center" }}>
        <span style={{ fontFamily: FONT_B, fontSize: 10.5, letterSpacing: 2, color: "#F6B24A", fontWeight: 700 }}>VINEWOOD · VESPUCCI · DEL PERRO</span>
      </div>
    </div>
  );
}
