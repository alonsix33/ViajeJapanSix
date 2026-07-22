import { C, TAGS, FONT_D, FONT_B, FONT_KR, changsal } from '../styles/tokens.js';
import { Tag, SectionLabel, Card, Callout, MapView } from '../components/ui/index.js';
import { Taegeuk } from '../components/seals/index.js';
import { MAPS } from '../data/maps.js';
import { BOOKINGS } from '../data/bookings.js';
import { KETA_STEPS, SEOUL_PLAN, SEOUL_TRAINS } from '../data/seoul.js';

export function Seul() {
  return (
    <div>
      <div
        style={{
          position: 'relative',
          borderRadius: 18,
          overflow: 'hidden',
          marginBottom: 16,
          background: '#1B3A5C',
          backgroundImage: changsal + ', linear-gradient(120deg, #2B4C7E 0%, #1B3A5C 100%)',
          padding: '30px 24px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: 22,
            top: '50%',
            transform: 'translateY(-50%)',
            fontFamily: FONT_KR,
            fontSize: 80,
            color: '#fff',
            opacity: 0.1,
            fontWeight: 800,
            letterSpacing: -2,
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          서울
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 8 }}>
          <Taegeuk size={32} />
          <div
            style={{
              fontFamily: FONT_B,
              fontSize: 11,
              letterSpacing: 3,
              color: C.kin,
              fontWeight: 700,
            }}
          >
            ESCALA · 27 JUL · 대한민국
          </div>
        </div>
        <h1
          style={{
            fontFamily: FONT_D,
            fontSize: 34,
            fontWeight: 800,
            color: C.washi,
            margin: '0 0 2px',
          }}
        >
          Un día en Seúl{' '}
          <span style={{ fontFamily: FONT_KR, fontSize: 23, color: C.kin, fontWeight: 800 }}>
            서울
          </span>
        </h1>
        <div style={{ fontFamily: FONT_B, fontSize: 13, color: '#cdd9e6' }}>
          Llegan ICN 4:30am · salen 21:10 · ~11 horas para la ciudad
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <MapView data={MAPS.seul} />
      </div>

      <Callout title="✅ K-ETA · los 4 APROBADOS ✅" color={C.matcha} bg={TAGS.ZEN.bg}>
        Perú es visa-free para Corea (90 días), pero <strong>no está exento del K-ETA</strong> — no
        figura en la lista de exención (a diferencia de Chile, Colombia y México). Ya se tramitó y{' '}
        <strong>los 4 K-ETA están aprobados</strong>, así que pasan inmigración y recorren Seúl
        libremente. Con el K-ETA aprobado <strong>no hace falta llenar la e-Arrival Card</strong> en
        Incheon (viene indicado en el documento oficial).
      </Callout>

      <Card style={{ padding: '6px 16px', marginBottom: 16 }}>
        {BOOKINGS.keta.map((k, i) => (
          <div
            key={i}
            style={{
              padding: '12px 0',
              borderBottom: i < BOOKINGS.keta.length - 1 ? `1px solid ${C.line}` : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span
                style={{
                  fontFamily: FONT_B,
                  fontSize: 13.5,
                  fontWeight: 700,
                  color: C.sumi,
                  flex: 1,
                  minWidth: 0,
                }}
              >
                {k.fullName}
              </span>
              <span
                style={{
                  fontFamily: FONT_B,
                  fontSize: 10.5,
                  fontWeight: 700,
                  color: C.matcha,
                  background: TAGS.ZEN.bg,
                  borderRadius: 5,
                  padding: '2px 8px',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                ✅ Aprobado
              </span>
            </div>
            <div
              style={{
                fontFamily: FONT_B,
                fontSize: 12,
                color: '#777',
                display: 'flex',
                gap: 10,
                flexWrap: 'wrap',
              }}
            >
              <span>Nº ETA-PER-{k.app}</span>
              <span>Pasaporte ••••{k.passportLast4}</span>
              <span>Válido hasta {k.validUntil}</span>
            </div>
          </div>
        ))}
      </Card>

      <Callout title="👦 Excepción por edad" color={C.ai} bg={TAGS.TECH.bg}>
        Quienes tengan <strong>17 años o menos</strong> (o 65+) están exentos del K-ETA, sin
        importar la nacionalidad. Si alguno de los chicos es menor de 18, ese no necesita tramitarlo
        — pero sí debe presentar la <strong>e-Arrival Card</strong> (ver abajo).
      </Callout>

      <a
        href="https://www.k-eta.go.kr"
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'block',
          textAlign: 'center',
          margin: '12px 0',
          fontFamily: FONT_B,
          fontSize: 15,
          fontWeight: 700,
          color: '#fff',
          background: C.shu,
          padding: '12px 16px',
          borderRadius: 10,
          textDecoration: 'none',
        }}
      >
        Verificar el estado en k-eta.go.kr →
      </a>

      <Callout
        title="🪪 e-Arrival Card (tarjeta de llegada digital)"
        color={C.kin}
        bg={TAGS.TODOS.bg}
      >
        Desde enero 2026 la tarjeta de llegada es <strong>solo digital</strong>. Buena noticia:{' '}
        <strong>con el K-ETA aprobado quedan exentos</strong> de llenarla. Quien NO tenga K-ETA (p.
        ej. un menor de 18) sí debe completar la e-Arrival Card hasta 3 días antes de llegar, en{' '}
        <a
          href="https://www.e-arrivalcard.go.kr"
          target="_blank"
          rel="noreferrer"
          style={{ color: C.shu, fontWeight: 700 }}
        >
          e-arrivalcard.go.kr
        </a>
        .
      </Callout>

      <div style={{ marginTop: 22 }}>
        <SectionLabel kanji="절차" color={C.ai} kanjiFont={FONT_KR}>
          Cómo sacar el K-ETA, paso a paso
        </SectionLabel>
        <Card style={{ padding: '16px 20px' }}>
          <ol
            style={{
              margin: 0,
              paddingLeft: 20,
              fontFamily: FONT_B,
              fontSize: 13.5,
              color: C.sumi,
              lineHeight: 1.7,
            }}
          >
            {KETA_STEPS.map((s, i) => (
              <li key={i} style={{ marginBottom: 6 }}>
                <strong style={{ color: C.ai }}>{s.b}</strong> {s.t}
              </li>
            ))}
          </ol>
        </Card>
      </div>

      <div style={{ marginTop: 24 }}>
        <SectionLabel kanji="열차" color={C.sora} kanjiFont={FONT_KR}>
          El tren a la ciudad (AREX)
        </SectionLabel>
        <p
          style={{
            fontFamily: FONT_B,
            fontSize: 13,
            color: '#666',
            marginTop: -8,
            marginBottom: 12,
            lineHeight: 1.6,
          }}
        >
          Del aeropuerto al centro de Seúl. Hay dos opciones; la Express es la recomendada por
          comodidad y rapidez.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 10 }}>
          {SEOUL_TRAINS.map((tr, i) => (
            <Card key={i} style={{ padding: '14px 16px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  flexWrap: 'wrap',
                  marginBottom: 6,
                }}
              >
                <span style={{ fontFamily: FONT_D, fontSize: 16, fontWeight: 700, color: C.sumi }}>
                  {tr.name}
                </span>
                {tr.reserve ? (
                  <span
                    style={{
                      fontFamily: FONT_B,
                      fontSize: 10,
                      fontWeight: 700,
                      color: C.shu,
                      background: TAGS.SALIR.bg,
                      borderRadius: 5,
                      padding: '1px 7px',
                    }}
                  >
                    ● CON ASIENTO RESERVADO
                  </span>
                ) : (
                  <span
                    style={{
                      fontFamily: FONT_B,
                      fontSize: 10,
                      fontWeight: 700,
                      color: C.matcha,
                      background: TAGS.ZEN.bg,
                      borderRadius: 5,
                      padding: '1px 7px',
                    }}
                  >
                    ✓ sin reserva · T-money
                  </span>
                )}
                <span style={{ flex: 1 }} />
                <span style={{ fontFamily: FONT_D, fontSize: 14, fontWeight: 700, color: C.ai }}>
                  {tr.time}
                </span>
              </div>
              <div
                style={{
                  fontFamily: FONT_B,
                  fontSize: 12.5,
                  color: C.shu,
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                {tr.cost}
              </div>
              <div style={{ fontFamily: FONT_B, fontSize: 12.5, color: '#555', lineHeight: 1.5 }}>
                {tr.note}
              </div>
            </Card>
          ))}
        </div>
        <Callout title="🎟️ Cómo hacer el ida y vuelta" color={C.kin} bg={TAGS.TODOS.bg}>
          Lo más simple: compren el <strong>boleto ida y vuelta del Express</strong> (~16,000 KRW)
          en el counter de AREX al llegar, o resérvenlo en airportrailroad.com. A la vuelta solo
          escanean el QR. Como Asiana está en la <strong>Terminal 2</strong>, el tren sale y llega a
          la T2.
        </Callout>
      </div>

      <div style={{ marginTop: 24 }}>
        <SectionLabel kanji="일정" color={C.shu} kanjiFont={FONT_KR}>
          Plan de las ~11 horas
        </SectionLabel>
        <Card style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'stretch' }}>
            <div style={{ width: 6, background: C.sora, flexShrink: 0 }} />
            <div
              style={{
                padding: '14px 18px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 9,
              }}
            >
              {SEOUL_PLAN.map((it, i) => (
                <div key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                  <span
                    style={{
                      fontFamily: FONT_D,
                      fontSize: 13,
                      fontWeight: 700,
                      color: C.sora,
                      minWidth: 42,
                      flexShrink: 0,
                    }}
                  >
                    {it.time}
                  </span>
                  <div style={{ flexShrink: 0, minWidth: 64 }}>
                    <Tag t={it.tag} />
                  </div>
                  <div
                    style={{ fontFamily: FONT_B, fontSize: 13.5, color: C.sumi, lineHeight: 1.5 }}
                  >
                    {it.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <Callout title="🧳 Datos clave" color={C.ai} bg={TAGS.TECH.bg}>
        Solo pueden salir <strong>una vez</strong> (Corea no permite doble entrada en la misma
        escala). Lleven el K-ETA y los dos pases de abordar. El equipaje grande va facturado directo
        a Tokio. Verifiquen el estado del K-ETA en k-eta.go.kr antes de viajar.
      </Callout>
    </div>
  );
}
