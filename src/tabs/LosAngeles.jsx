import { C, TAGS, FONT_D, FONT_B, artDeco } from '../styles/tokens.js';
import { SectionLabel, Card, Callout, MapView, DayCard } from '../components/ui/index.js';
import { WalkStar, LosSantosBanner } from '../components/seals/index.js';
import { MAPS } from '../data/maps.js';
import { LA_DAYS, LA_SPOTS } from '../data/la.js';

export function LosAngeles() {
  return (
    <div>
      <div
        style={{
          position: 'relative',
          borderRadius: 18,
          overflow: 'hidden',
          marginBottom: 16,
          background: '#C8442E',
          backgroundImage: artDeco + `, linear-gradient(120deg, ${C.sunset} 0%, #C8442E 100%)`,
          padding: '30px 24px 36px',
        }}
      >
        <div
          style={{
            fontFamily: FONT_B,
            fontSize: 11,
            letterSpacing: 3,
            color: '#fff',
            opacity: 0.9,
            fontWeight: 700,
          }}
        >
          ESCALA DE IDA · 羅府
        </div>
        <h1
          style={{
            fontFamily: FONT_D,
            fontSize: 34,
            fontWeight: 800,
            color: '#fff',
            margin: '6px 0 2px',
          }}
        >
          Los Ángeles
        </h1>
        <div style={{ fontFamily: FONT_B, fontSize: 13, color: '#fff', opacity: 0.95 }}>
          23 – 25 de julio · ~2 días en Hollywood
        </div>
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '0 16px',
            background: 'rgba(0,0,0,0.18)',
            overflow: 'hidden',
          }}
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} style={{ color: '#E7B6C0', fontSize: 9, opacity: 0.85 }}>
              ★
            </span>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <MapView data={MAPS.la} />
      </div>

      <Card style={{ overflow: 'hidden', marginBottom: 12, border: '2px solid #C9A227' }}>
        <div
          style={{
            display: 'flex',
            gap: 14,
            alignItems: 'center',
            padding: '16px 18px',
            background: 'linear-gradient(180deg,#FFFDF8,#F6EEDB)',
          }}
        >
          <WalkStar size={62} emoji="🎤" />
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: FONT_B,
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: 1,
                color: '#8E44AD',
              }}
            >
              ★ EL SELLO ESTRELLA DEL PASEO
            </div>
            <div
              style={{
                fontFamily: FONT_D,
                fontSize: 19,
                fontWeight: 800,
                color: C.sumi,
                lineHeight: 1.15,
              }}
            >
              Michael Jackson · King of Pop
            </div>
            <div
              style={{
                fontFamily: FONT_B,
                fontSize: 12.5,
                color: '#555',
                lineHeight: 1.5,
                marginTop: 3,
              }}
            >
              <strong>6927 Hollywood Blvd</strong>, frente al TCL Chinese Theatre. Vayan temprano
              para la foto sin multitud.
            </div>
          </div>
        </div>
      </Card>

      <div style={{ marginBottom: 4 }}>
        <div
          style={{
            fontFamily: FONT_B,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1,
            color: C.sunset,
            marginBottom: 9,
          }}
        >
          OTROS SELLOS A PASOS — TODO CAMINABLE
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(168px,1fr))',
            gap: 10,
          }}
        >
          {LA_SPOTS.map((s, i) => (
            <Card
              key={i}
              style={{ padding: '11px 13px', display: 'flex', alignItems: 'center', gap: 11 }}
            >
              <WalkStar size={40} emoji={s.emoji} />
              <div>
                <div
                  style={{
                    fontFamily: FONT_D,
                    fontSize: 13.5,
                    fontWeight: 700,
                    color: C.sumi,
                    lineHeight: 1.15,
                  }}
                >
                  {s.name}
                </div>
                <div
                  style={{
                    fontFamily: FONT_B,
                    fontSize: 11,
                    color: '#888',
                    lineHeight: 1.3,
                    marginTop: 1,
                  }}
                >
                  {s.note}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div style={{ height: 14 }} />
      <div style={{ marginTop: 20 }}>
        <LosSantosBanner />
        <SectionLabel kanji="程" color={C.sunset}>
          Día por día
        </SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 14 }}>
          {LA_DAYS.map((d, i) => (
            <DayCard key={i} d={d} accent={C.sunset} />
          ))}
        </div>
      </div>
      <Callout title="🚗 Cómo moverse" color={C.matcha} bg={TAGS.ZEN.bg}>
        Usar Uber/Lyft, no auto: con jet lag y estacionamiento caro, el rideshare gana. Hollywood es
        caminable para el Paseo de la Fama.
      </Callout>
    </div>
  );
}
