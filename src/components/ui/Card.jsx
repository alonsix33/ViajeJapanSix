import { C } from '../../styles/tokens.js';

export function Card({ children, style }) {
  return (
    <div
      style={{
        background: '#FFFCF6',
        border: `1px solid ${C.line}`,
        borderRadius: 14,
        boxShadow: '0 1px 0 rgba(0,0,0,0.02), 0 6px 16px rgba(31,27,23,0.04)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
