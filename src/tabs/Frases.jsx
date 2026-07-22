import { C, TAGS, FONT_D, FONT_B, seigaiha } from '../styles/tokens.js';
import { SectionLabel, Card, Callout } from '../components/ui/index.js';
import { PHRASE_CATEGORIES, BONUS_PHRASE } from '../data/phrases.js';

export function Frases() {
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
          padding: '30px 24px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: 14,
            top: -18,
            fontFamily: FONT_D,
            fontSize: 100,
            color: '#fff',
            opacity: 0.08,
            fontWeight: 800,
          }}
        >
          会話
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
          PARA TENER A LA MANO
        </div>
        <h1
          style={{
            fontFamily: FONT_D,
            fontSize: 30,
            fontWeight: 800,
            color: C.washi,
            margin: '6px 0 2px',
          }}
        >
          Frases en japonés
        </h1>
        <div style={{ fontFamily: FONT_B, fontSize: 13, color: '#cdd9e6' }}>
          Cortesía, pedir ayuda y lo esencial para moverse
        </div>
      </div>

      {PHRASE_CATEGORIES.map((cat) => (
        <div key={cat.id} style={{ marginBottom: 22 }}>
          <SectionLabel kanji={cat.kanji} color={cat.color}>
            {cat.title}
          </SectionLabel>
          <Card style={{ padding: '4px 16px' }}>
            {cat.items.map((p, i) => (
              <div
                key={i}
                style={{
                  padding: '11px 0',
                  borderBottom: i < cat.items.length - 1 ? `1px solid ${C.line}` : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                <div style={{ fontFamily: FONT_D, fontSize: 15.5, fontWeight: 700, color: C.sumi }}>
                  {p.jp}
                </div>
                <div style={{ fontFamily: FONT_B, fontSize: 13, color: '#555', lineHeight: 1.5 }}>
                  {p.es}
                </div>
                {p.note && (
                  <div
                    style={{ fontFamily: FONT_B, fontSize: 11.5, color: '#999', lineHeight: 1.5 }}
                  >
                    {p.note}
                  </div>
                )}
              </div>
            ))}
          </Card>
        </div>
      ))}

      <Callout title="✨ La favorita: Sugoi!" color={C.kin} bg={TAGS.TODOS.bg}>
        <strong>{BONUS_PHRASE.jp}</strong> — {BONUS_PHRASE.es} {BONUS_PHRASE.note}
      </Callout>
    </div>
  );
}
