export function Taegeuk({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ flexShrink: 0, filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.25))" }}>
      <circle cx="50" cy="50" r="49" fill="#fff" />
      <path d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 1 50 50 A24 24 0 0 0 50 2 Z" fill="#CD2E3A" />
      <path d="M50 2 A48 48 0 0 0 50 98 A24 24 0 0 0 50 50 A24 24 0 0 1 50 2 Z" fill="#0047A0" />
    </svg>
  );
}
