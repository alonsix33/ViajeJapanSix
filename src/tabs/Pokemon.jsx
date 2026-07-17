import { C, TAGS, FONT_D, FONT_B } from '../styles/tokens.js';
import { SectionLabel, Card, Callout } from '../components/ui/index.js';
import { Pokeball } from '../components/seals/index.js';

export function Pokemon() {
  return (
    <div>
      <div
        style={{
          position: 'relative',
          borderRadius: 18,
          overflow: 'hidden',
          marginBottom: 18,
          background: 'linear-gradient(135deg, #E3350D 0%, #B71C0C 100%)',
          padding: '26px 24px',
        }}
      >
        <div style={{ position: 'absolute', right: -30, top: -30, opacity: 0.16 }}>
          <Pokeball size={150} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <Pokeball size={30} />
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
            OSAKA · 5 AGO · ⚡ でんき
          </div>
        </div>
        <h1
          style={{
            fontFamily: FONT_D,
            fontSize: 32,
            fontWeight: 800,
            color: '#fff',
            margin: '0 0 2px',
          }}
        >
          Pokémon Café
        </h1>
        <div style={{ fontFamily: FONT_B, fontSize: 13, color: '#fff', opacity: 0.95 }}>
          9º piso, Daimaru Shinsaibashi · al lado del Pokémon Center DX
        </div>
      </div>
      <Callout title="⚡ La reserva es lo más delicado del viaje" color="#E3350D" bg="#FBE9E7">
        Se abre <strong>~31 días antes a las 18:00 hora de Japón</strong>. Para comer el 5 de
        agosto: <strong>~5 de julio, 04:00 AM hora de Perú</strong>. Los cupos vuelan en SEGUNDOS.
      </Callout>
      <Callout title="⚠ Confirmar la fecha de agosto" color={C.kin} bg={TAGS.TODOS.bg}>
        Las fechas de agosto se anuncian aparte. Revisar pokemon-cafe.jp/en/cafe/news a inicios de
        julio.
      </Callout>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '16px 0' }}>
        <Card style={{ padding: '16px', textAlign: 'center' }}>
          <div style={{ fontFamily: FONT_B, fontSize: 11, color: '#888', letterSpacing: 1 }}>
            HORA JAPÓN
          </div>
          <div style={{ fontFamily: FONT_D, fontSize: 26, fontWeight: 800, color: C.ai }}>
            18:00
          </div>
          <div style={{ fontFamily: FONT_B, fontSize: 11, color: '#888' }}>apertura</div>
        </Card>
        <Card style={{ padding: '16px', textAlign: 'center' }}>
          <div style={{ fontFamily: FONT_B, fontSize: 11, color: '#888', letterSpacing: 1 }}>
            HORA PERÚ
          </div>
          <div style={{ fontFamily: FONT_D, fontSize: 26, fontWeight: 800, color: '#E3350D' }}>
            04:00 AM
          </div>
          <div style={{ fontFamily: FONT_B, fontSize: 11, color: '#888' }}>alarma 3:50 AM</div>
        </Card>
      </div>
      <SectionLabel kanji="順" color="#E3350D">
        Paso a paso
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
          <li>
            Marcar <strong>@mail-pokemon-cafe.jp</strong> como "no spam"; tener tarjeta + email
            listos.
          </li>
          <li>
            Reloj con segundos (time.is). Portal <strong>reserve.pokemon-cafe.jp</strong> en inglés
            a las 17:55 JST.
          </li>
          <li>
            Elegir <strong>OSAKA</strong>, 4 personas y la fecha (5 ago) aunque salga no disponible.
          </li>
          <li>A las 18:00:00 exactas, clic en "next step".</li>
          <li>Tomar el primer horario disponible y completar datos rápido.</li>
          <li>Guardar el correo de confirmación.</li>
        </ol>
      </Card>
      <Callout title="Truco" color={C.matcha} bg={TAGS.ZEN.bg}>
        Intenten desde 2-3 dispositivos a la vez. Plan B: si falla el 5 de agosto, dos días después
        prueben para el 7.
      </Callout>
      <div style={{ marginTop: 22 }}>
        <SectionLabel kanji="店" color="#E3350D">
          Pokémon Centers en el plan
        </SectionLabel>
        <p
          style={{
            fontFamily: FONT_B,
            fontSize: 12.5,
            color: '#888',
            marginTop: -8,
            marginBottom: 12,
            lineHeight: 1.5,
          }}
        >
          Sin reserva, solo entrar. Cuatro paradas para coleccionar a lo largo del viaje:
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(176px,1fr))',
            gap: 10,
          }}
        >
          {[
            ['28 Jul', 'Center Shibuya', 'En Shibuya Parco'],
            ['29 Jul', 'Akihabara', 'Dentro de Yodobashi'],
            ['31 Jul', 'Skytree Town', 'Mercancía estilo Edo'],
            ['5 Ago', 'Osaka DX', 'Junto al Café ⚡'],
          ].map((p, i) => (
            <Card
              key={i}
              style={{ padding: '12px 13px', display: 'flex', alignItems: 'center', gap: 11 }}
            >
              <Pokeball size={34} />
              <div>
                <div
                  style={{
                    fontFamily: FONT_B,
                    fontSize: 10.5,
                    fontWeight: 700,
                    color: '#E3350D',
                    letterSpacing: 0.5,
                  }}
                >
                  {p[0]}
                </div>
                <div
                  style={{
                    fontFamily: FONT_D,
                    fontSize: 14.5,
                    fontWeight: 700,
                    color: C.sumi,
                    lineHeight: 1.15,
                  }}
                >
                  {p[1]}
                </div>
                <div style={{ fontFamily: FONT_B, fontSize: 10.5, color: '#999' }}>{p[2]}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
