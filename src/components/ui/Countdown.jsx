import { useState, useEffect } from 'react';
import { C, FONT_D, FONT_B } from '../../styles/tokens.js';

export function Countdown() {
  const [days, setDays] = useState(null);
  useEffect(() => {
    const target = new Date("2026-07-23T00:40:00-05:00");
    setDays(Math.ceil((target - new Date()) / 86400000));
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontFamily: FONT_D, fontSize: 52, fontWeight: 800, color: C.shu, lineHeight: 1 }}>{days == null ? "··" : days > 0 ? days : "¡0!"}</div>
      <div style={{ fontFamily: FONT_B, fontSize: 12, color: "#777", letterSpacing: 1 }}>{days != null && days <= 0 ? "EN VIAJE" : "DÍAS PARA VOLAR"}</div>
    </div>
  );
}
