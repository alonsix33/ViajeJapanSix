import { useState } from 'react';
import { C, TAGS, FONT_D, FONT_B, FONT_R, seigaiha } from '../styles/tokens.js';
import { SectionLabel, Card, Callout } from '../components/ui/index.js';
import { BOOKINGS } from '../data/bookings.js';

export function Reservas() {
  const [copiedKey, setCopiedKey] = useState(null);
  const copy = (txt, key) => {
    try {
      navigator.clipboard.writeText(txt);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey((k) => (k === key ? null : k)), 1400);
    } catch {
      /* clipboard no disponible */
    }
  };
  return (
    <div>
      <div
        style={{
          position: 'relative',
          borderRadius: 18,
          overflow: 'hidden',
          marginBottom: 18,
          background: C.aiDeep,
          backgroundImage: seigaiha,
          padding: '26px 24px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: 14,
            top: -16,
            fontFamily: FONT_D,
            fontSize: 110,
            color: '#fff',
            opacity: 0.08,
            fontWeight: 800,
          }}
        >
          予約
        </div>
        <div
          style={{
            fontFamily: FONT_B,
            fontSize: 11,
            letterSpacing: 3,
            color: C.kin,
            fontWeight: 700,
          }}
        >
          TODO CONFIRMADO
        </div>
        <h1
          style={{
            fontFamily: FONT_D,
            fontSize: 32,
            fontWeight: 800,
            color: C.washi,
            margin: '6px 0 2px',
          }}
        >
          Mis reservas
        </h1>
        <div style={{ fontFamily: FONT_B, fontSize: 13, color: '#cdd9e6' }}>
          Códigos a la mano · toca para copiar
        </div>
      </div>

      <SectionLabel kanji="宿" color={C.shu}>
        Hoteles
      </SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 10 }}>
        {BOOKINGS.hotels.map((h, i) => (
          <Card key={i} style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'stretch' }}>
              <div style={{ width: 6, background: h.color, flexShrink: 0 }} />
              <div style={{ padding: '12px 16px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                  <span
                    style={{ fontFamily: FONT_D, fontSize: 16, fontWeight: 700, color: C.sumi }}
                  >
                    {h.place}
                  </span>
                  <span
                    style={{ fontFamily: FONT_B, fontSize: 11, fontWeight: 700, color: h.color }}
                  >
                    {h.city}
                  </span>
                  <span style={{ flex: 1 }} />
                  <span
                    style={{
                      fontFamily: FONT_B,
                      fontSize: 12,
                      color: '#fff',
                      background: h.color,
                      borderRadius: 5,
                      padding: '1px 8px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {h.dates}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
                  <div
                    onClick={() => copy(h.conf, `hotel-conf-${i}`)}
                    style={{
                      cursor: 'pointer',
                      flex: 1,
                      minWidth: 130,
                      background: copiedKey === `hotel-conf-${i}` ? TAGS.ZEN.bg : C.washi2,
                      borderRadius: 8,
                      padding: '6px 10px',
                      transition: 'background .2s',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: FONT_B,
                        fontSize: 9.5,
                        color: copiedKey === `hotel-conf-${i}` ? C.matcha : '#999',
                        letterSpacing: 0.5,
                        fontWeight: copiedKey === `hotel-conf-${i}` ? 700 : 400,
                      }}
                    >
                      {copiedKey === `hotel-conf-${i}` ? '✓ ¡COPIADO!' : 'CONFIRMACIÓN'}
                    </div>
                    <div
                      style={{
                        fontFamily: FONT_R,
                        fontSize: 15,
                        fontWeight: 700,
                        color: C.ai,
                        letterSpacing: 1,
                      }}
                    >
                      {h.conf}
                    </div>
                  </div>
                  <div
                    onClick={() => copy(h.pin, `hotel-pin-${i}`)}
                    style={{
                      cursor: 'pointer',
                      background: copiedKey === `hotel-pin-${i}` ? TAGS.ZEN.bg : C.washi2,
                      borderRadius: 8,
                      padding: '6px 12px',
                      transition: 'background .2s',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: FONT_B,
                        fontSize: 9.5,
                        color: copiedKey === `hotel-pin-${i}` ? C.matcha : '#999',
                        letterSpacing: 0.5,
                        fontWeight: copiedKey === `hotel-pin-${i}` ? 700 : 400,
                      }}
                    >
                      {copiedKey === `hotel-pin-${i}` ? '✓ ¡COPIADO!' : 'PIN'}
                    </div>
                    <div
                      style={{
                        fontFamily: FONT_R,
                        fontSize: 15,
                        fontWeight: 700,
                        color: C.shu,
                        letterSpacing: 1,
                      }}
                    >
                      {h.pin}
                    </div>
                  </div>
                </div>
                <div style={{ fontFamily: FONT_B, fontSize: 11.5, color: '#888', marginTop: 7 }}>
                  {h.note}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ marginTop: 24 }}>
        <SectionLabel kanji="空" color={C.ai}>
          Vuelos (códigos de reserva)
        </SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 9 }}>
          {BOOKINGS.flights.map((f, i) => (
            <Card
              key={i}
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px' }}
            >
              <span
                style={{
                  fontFamily: FONT_B,
                  fontSize: 10.5,
                  fontWeight: 700,
                  color: '#fff',
                  background: C.ai,
                  borderRadius: 5,
                  padding: '1px 7px',
                  flexShrink: 0,
                }}
              >
                {f.date}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: FONT_B, fontSize: 13.5, fontWeight: 700, color: C.sumi }}>
                  {f.route}
                </div>
                <div style={{ fontFamily: FONT_B, fontSize: 11.5, color: '#888' }}>{f.n}</div>
              </div>
              <div
                onClick={() => copy(f.pnr, `flight-${i}`)}
                style={{
                  cursor: 'pointer',
                  fontFamily: FONT_R,
                  fontSize: 13,
                  fontWeight: 700,
                  color: copiedKey === `flight-${i}` ? C.matcha : C.shu,
                  border: `1.5px dashed ${copiedKey === `flight-${i}` ? C.matcha : C.shu}`,
                  borderRadius: 6,
                  padding: '4px 9px',
                  letterSpacing: 1,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'color .2s, border-color .2s',
                }}
              >
                {copiedKey === `flight-${i}` ? '✓ ¡Copiado!' : f.pnr}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <SectionLabel kanji="旅" color={C.sunset}>
          Tours y actividades
        </SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 9 }}>
          {BOOKINGS.tours.map((t, i) => (
            <Card
              key={i}
              style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px' }}
            >
              <span
                style={{
                  fontFamily: FONT_B,
                  fontSize: 10.5,
                  fontWeight: 700,
                  color: '#fff',
                  background: C.sunset,
                  borderRadius: 5,
                  padding: '1px 7px',
                  flexShrink: 0,
                }}
              >
                {t.date}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: FONT_B, fontSize: 13.5, fontWeight: 700, color: C.sumi }}>
                  {t.name}
                </div>
                <div style={{ fontFamily: FONT_B, fontSize: 11.5, color: '#888' }}>{t.note}</div>
              </div>
              <div
                onClick={() => copy(t.conf, `tour-${i}`)}
                style={{
                  cursor: 'pointer',
                  fontFamily: FONT_R,
                  fontSize: 12,
                  fontWeight: 700,
                  color: copiedKey === `tour-${i}` ? C.matcha : C.sunset,
                  border: `1.5px dashed ${copiedKey === `tour-${i}` ? C.matcha : C.sunset}`,
                  borderRadius: 6,
                  padding: '4px 9px',
                  letterSpacing: 0.5,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'color .2s, border-color .2s',
                }}
              >
                {copiedKey === `tour-${i}` ? '✓ ¡Copiado!' : t.conf}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        <SectionLabel kanji="韓" color={C.matcha}>
          K-ETA (Corea)
        </SectionLabel>
        <Card style={{ padding: '6px 16px' }}>
          {BOOKINGS.keta.map((k, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '9px 0',
                borderBottom: i < BOOKINGS.keta.length - 1 ? `1px solid ${C.line}` : 'none',
              }}
            >
              <span
                style={{
                  fontFamily: FONT_B,
                  fontSize: 13.5,
                  fontWeight: 700,
                  color: C.sumi,
                  flex: 1,
                }}
              >
                {k.name}
              </span>
              <span
                onClick={() => copy(k.app, `keta-${i}`)}
                style={{
                  cursor: 'pointer',
                  fontFamily: FONT_R,
                  fontSize: 13,
                  fontWeight: 700,
                  color: C.matcha,
                  letterSpacing: 0.5,
                  transition: 'opacity .2s',
                }}
              >
                {copiedKey === `keta-${i}` ? '✓ ¡Copiado!' : k.app}
              </span>
            </div>
          ))}
        </Card>
        <div
          style={{
            fontFamily: FONT_B,
            fontSize: 11.5,
            color: '#888',
            marginTop: 8,
            lineHeight: 1.5,
          }}
        >
          Verificar que diga "Approved" en k-eta.go.kr antes de viajar. Llevar impreso o en el
          celular.
        </div>
      </div>

      <Callout title="📌 Recordatorio" color={C.kin} bg={TAGS.TODOS.bg}>
        Todos los hoteles tienen cancelación gratis (salvo donde diga lo contrario). Guarden este
        resumen offline también, por si no tienen internet al llegar.
      </Callout>
    </div>
  );
}
