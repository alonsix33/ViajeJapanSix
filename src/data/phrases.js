export const FEATURED_PHRASE = {
  jp: 'Sumimasen. Tetsudatte moraemasu ka? Eigo daijōbu desu ka?',
  es: 'Disculpe, ¿me puede ayudar? ¿Está bien si hablamos en inglés?',
  note: 'La combinación perfecta para acercarte a cualquiera y empezar a pedir ayuda.',
};

export const PHRASE_CATEGORIES = [
  {
    id: 'basicas',
    title: 'Básicas · sí, no y check-in',
    kanji: '基本',
    color: '#1B3A5C',
    items: [
      { jp: 'Hai.', pron: 'Jai.', es: 'Sí.' },
      { jp: 'Iie.', pron: 'Ii-e.', es: 'No.' },
      { jp: 'Sō desu.', pron: 'Soo des.', es: 'Así es / Correcto.' },
      {
        jp: 'Sō desu ka?',
        pron: 'Soo des ka.',
        es: '¿Ah, sí? / ¿De verdad?',
        note: 'La escucharás muchísimo — también sirve para mostrar interés en lo que te dicen.',
      },
      { jp: 'Watashi wa Alonso desu.', pron: 'Wa-ta-shi wa A-lon-so des.', es: 'Soy Alonso.' },
      { jp: 'Kazoku desu.', pron: 'Ka-zo-ku des.', es: 'Somos una familia.' },
      {
        jp: 'Kore wa watashi no kazoku desu.',
        pron: 'Ko-re wa wa-ta-shi no ka-zo-ku des.',
        es: 'Esta es mi familia.',
      },
      { jp: 'Perū kara kimashita.', pron: 'Pe-rú ka-ra ki-ma-shi-ta.', es: 'Venimos de Perú.' },
      {
        jp: 'Perū desu.',
        pron: 'Pe-rú des.',
        es: 'Somos de Perú.',
        note: 'Respuesta corta y muy natural.',
      },
      {
        jp: 'Hajimemashite.',
        pron: 'Ha-ji-me-ma-sh-te.',
        es: 'Mucho gusto.',
        note: 'Se usa cuando conoces a alguien por primera vez.',
      },
      {
        jp: 'Dōzo yoroshiku onegaishimasu.',
        pron: 'Doo-zo yo-ro-shi-ku o-ne-gai-shi-ma-su.',
        es: 'Encantado de conocerle / Espero que nos llevemos bien.',
        note: 'Muy japonesa y muy educada — se dice justo después de presentarte, por ejemplo al hacer check-in.',
      },
    ],
  },
  {
    id: 'cortesia',
    title: 'Cortesía',
    kanji: '礼儀',
    color: '#5E7D4F',
    items: [
      { jp: 'Sumimasen', es: 'Disculpe / Perdón / Con permiso.' },
      { jp: 'Arigatō gozaimasu', es: 'Muchas gracias.' },
      { jp: 'Dōmo arigatō gozaimasu', es: 'Muchísimas gracias.' },
      { jp: 'Onegaishimasu', es: 'Por favor (muy útil para pedir algo).' },
      {
        jp: 'Gochisōsama deshita',
        es: 'Gracias por la comida.',
        note: 'Se dice al salir de un restaurante — a los locales les parece un gesto muy bonito cuando un extranjero lo dice.',
      },
    ],
  },
  {
    id: 'ayuda',
    title: 'Pedir ayuda',
    kanji: '助け',
    color: '#3E7CB1',
    items: [
      { jp: 'Tetsudatte moraemasu ka?', es: '¿Me puede ayudar?' },
      { jp: 'Eigo daijōbu desu ka?', es: '¿Está bien si hablamos en inglés?' },
      { jp: 'Nihongo ga wakarimasen.', es: 'No entiendo japonés.' },
    ],
  },
  {
    id: 'ciudad',
    title: 'Moverte por la ciudad',
    kanji: '街中',
    color: '#C9A227',
    items: [
      { jp: 'Toire wa doko desu ka?', es: '¿Dónde está el baño?' },
      { jp: '___ wa doko desu ka?', es: '¿Dónde está…? (la estación, el hotel, etc.).' },
      {
        jp: 'Kore o kudasai.',
        es: 'Este, por favor.',
        note: 'Mientras señalas un menú o un producto.',
      },
    ],
  },
  {
    id: 'restaurantes',
    title: 'Restaurantes',
    kanji: '食事',
    color: '#C8442E',
    items: [
      { jp: 'Oishii!', es: '¡Qué rico!' },
      { jp: 'Oishikatta desu!', es: '¡Estuvo delicioso!' },
      { jp: 'O-kaikei onegaishimasu.', es: 'La cuenta, por favor.' },
      { jp: 'Gochisōsama deshita.', es: 'Gracias por la comida.', note: 'Al retirarte.' },
    ],
  },
];

export const BONUS_PHRASE = {
  jp: 'Sugoi!',
  es: '¡Increíble! / ¡Qué impresionante! / ¡Qué genial!',
  note: 'Los japoneses la usan muchísimo — perfecta para reaccionar a algo que los sorprenda.',
};
