import { useState } from 'react';
import { C, FONT_B, FONT_D } from '../../styles/tokens.js';
import { buildGoogleMapsUrl } from '../../utils/maps.js';

const MODE_ICON = {
  tren: '🚃',
  metro: '🚇',
  bus: '🚌',
  taxi: '🚕',
  caminar: '🚶',
  teleferico: '🚡',
  funicular: '🚞',
  barco: '⛴️',
};

export function RouteHop({ route }) {
  const [open, setOpen] = useState(false);
  const icon = MODE_ICON[route.mode] || '➜';
  const mapsUrl = buildGoogleMapsUrl({
    origin: route.from,
    destination: route.to,
    mode: route.mapsMode || (route.mode === 'caminar' ? 'walking' : route.mode === 'taxi' ? 'driving' : 'transit'),
  });

  return (
    <div
      style={{
        border: `1px dashed ${C.line}`,
        borderRadius: 8,
        background: C.washi2,
        margin: '2px 0',
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          width: '100%',
          border: 'none',
          background: 'none',
          padding: '7px 10px',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ fontSize: 15, flexShrink: 0 }}>{icon}</span>
        <span style={{ fontFamily: FONT_B, fontSize: 12, color: '#777', flex: 1, minWidth: 0 }}>
          {route.line ? `${route.line} · ` : ''}
          {route.from} → {route.to}
        </span>
        {route.time && (
          <span style={{ fontFamily: FONT_D, fontSize: 12, fontWeight: 700, color: C.ai, flexShrink: 0 }}>
            {route.time}
          </span>
        )}
        <span style={{ fontSize: 10, color: '#999', flexShrink: 0 }}>{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div style={{ padding: '0 10px 10px', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {route.notes && (
            <div style={{ fontFamily: FONT_B, fontSize: 12.5, color: C.sumi, lineHeight: 1.5 }}>
              {route.notes}
            </div>
          )}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', fontFamily: FONT_B, fontSize: 11.5, color: '#888' }}>
            {route.cost && <span>💴 {route.cost}</span>}
            {route.reserve && <span style={{ color: C.shu, fontWeight: 700 }}>● reservar antes</span>}
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              alignSelf: 'flex-start',
              fontFamily: FONT_B,
              fontSize: 12,
              fontWeight: 700,
              color: '#fff',
              background: C.ai,
              padding: '6px 12px',
              borderRadius: 8,
              textDecoration: 'none',
            }}
          >
            🗺️ Abrir en Google Maps
          </a>
        </div>
      )}
    </div>
  );
}
