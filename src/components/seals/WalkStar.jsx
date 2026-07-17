export function WalkStar({ size = 54, emoji }) {
  return (
    <div style={{ width: size, height: size, flexShrink: 0, borderRadius: 10, position: "relative",
      background: "radial-gradient(circle at 50% 38%, #514a44, #2b2724)", border: "2px solid #C9A227",
      display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.28)" }}>
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24">
        <path d="M12 1.6l3 6.3 6.9.7-5.2 4.8 1.5 6.8L12 17.6 5.8 21l1.5-6.8L2.1 9.4l6.9-.7z"
          fill="#E7B6C0" stroke="#fff" strokeWidth="0.6" strokeLinejoin="round" />
      </svg>
      {emoji && <span style={{ position: "absolute", bottom: 2, fontSize: 11 }}>{emoji}</span>}
    </div>
  );
}
