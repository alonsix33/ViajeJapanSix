export function Pokeball({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ flexShrink: 0, filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.2))" }}>
      <circle cx="50" cy="50" r="46" fill="#fff" stroke="#1a1a1a" strokeWidth="5" />
      <path d="M4.5 50 a45.5 45.5 0 0 1 91 0 Z" fill="#E3350D" stroke="#1a1a1a" strokeWidth="5" />
      <line x1="5" y1="50" x2="95" y2="50" stroke="#1a1a1a" strokeWidth="5" />
      <circle cx="50" cy="50" r="15" fill="#fff" stroke="#1a1a1a" strokeWidth="5" />
      <circle cx="50" cy="50" r="6" fill="#fff" stroke="#1a1a1a" strokeWidth="3" />
    </svg>
  );
}
