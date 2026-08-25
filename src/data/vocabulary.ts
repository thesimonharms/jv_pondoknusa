export type VocabCategory =
  | 'greetings'
  | 'numbers'
  | 'family'
  | 'food'
  | 'colors'
  | 'everyday'
  | 'places'
  | 'actions'
  | 'feelings';

export interface VocabItem {
  id: string;
  javanese: string;
  aksara?: string;
  english: string;
  category: VocabCategory;
  example?: string;
  exampleEn?: string;
  notes?: string;
}

export interface CategoryMeta {
  id: VocabCategory;
  title: string;
  blurb: string;
  emoji: string;
}

export const categories: CategoryMeta[] = [
  {
    id: 'greetings',
    title: 'Greetings',
    blurb: 'Say hello the Javanese way — from casual to polite.',
    emoji: '🙏',
  },
  {
    id: 'numbers',
    title: 'Numbers',
    blurb: 'Count from one to ten and beyond.',
    emoji: '🔢',
  },
  {
    id: 'family',
    title: 'Family',
    blurb: 'Words for the people closest to you.',
    emoji: '👨‍👩‍👧',
  },
  {
    id: 'food',
    title: 'Food & Drink',
    blurb: 'Market snacks, meals, and drinks.',
    emoji: '🍛',
  },
  {
    id: 'colors',
    title: 'Colors',
    blurb: 'Name the world in warna Jawa.',
    emoji: '🎨',
  },
  {
    id: 'everyday',
    title: 'Everyday',
    blurb: 'Useful words for daily conversation.',
    emoji: '🗣️',
  },
  {
    id: 'places',
    title: 'Places & Directions',
    blurb: 'Find your way around town with confidence.',
    emoji: '🧭',
  },
  {
    id: 'actions',
    title: 'Useful Actions',
    blurb: 'Simple verbs and little words for real conversations.',
    emoji: '🌱',
  },
  {
    id: 'feelings',
    title: 'Feelings & Descriptions',
    blurb: 'Describe how you feel and what you notice.',
    emoji: '💛',
  },
];

export const vocabulary: VocabItem[] = [
  // Greetings
  {
    id: 'sugeng-enjing',
    javanese: 'sugeng enjing',
    aksara: 'ꦱꦸꦒꦼꦁ​ꦲꦼꦚ꧀ꦗꦶꦁ',
    english: 'good morning',
    category: 'greetings',
    example: 'Sugeng enjing, Bu!',
    exampleEn: 'Good morning, ma’am!',
    notes: 'Polite / krama. Casual: enjing or just hi with a smile.',
  },
  {
    id: 'sugeng-siang',
    javanese: 'sugeng siang',
    english: 'good afternoon',
    category: 'greetings',
    example: 'Sugeng siang, Pak.',
    exampleEn: 'Good afternoon, sir.',
  },
  {
    id: 'sugeng-dalu',
    javanese: 'sugeng dalu',
    english: 'good evening / good night',
    category: 'greetings',
  },
  {
    id: 'matur-nuwun',
    javanese: 'matur nuwun',
    aksara: 'ꦩꦠꦸꦂ​ꦤꦸꦮꦸꦤ꧀',
    english: 'thank you',
    category: 'greetings',
    example: 'Matur nuwun sanget.',
    exampleEn: 'Thank you very much.',
    notes: 'Casual Ngoko: suwun.',
  },
  {
    id: 'sama-sama',
    javanese: 'sami-sami',
    english: 'you’re welcome',
    category: 'greetings',
    notes: 'Also heard as “sami mawon”.',
  },
  {
    id: 'pangapunten',
    javanese: 'pangapunten',
    english: 'excuse me / sorry',
    category: 'greetings',
    notes: 'Polite. Casual: ngapurane or nuwun sewu.',
  },
  {
    id: 'kulo-nuwun',
    javanese: 'kula nuwun',
    english: 'hello (when entering a home)',
    category: 'greetings',
    example: 'Kula nuwun…',
    exampleEn: 'Excuse me / hello (at the door)…',
  },
  {
    id: 'piye-kabare',
    javanese: 'piye kabaré?',
    english: 'how are you?',
    category: 'greetings',
    example: 'Piye kabaré, Mas?',
    exampleEn: 'How’s it going, bro?',
    notes: 'Ngoko (casual). Polite: prikasa kabaripun?',
  },
  {
    id: 'apik',
    javanese: 'apik',
    english: 'good / fine',
    category: 'greetings',
    example: 'Kabaré apik.',
    exampleEn: 'I’m doing well.',
  },
  {
    id: 'sampun',
    javanese: 'sampun',
    english: 'already / done (polite yes)',
    category: 'greetings',
    notes: 'Often used as a polite “yes” or “finished”.',
  },

  // Numbers
  { id: 'siji', javanese: 'siji', english: 'one', category: 'numbers', aksara: 'ꦱꦶꦗꦶ' },
  { id: 'loro', javanese: 'loro', english: 'two', category: 'numbers' },
  { id: 'telu', javanese: 'telu', english: 'three', category: 'numbers' },
  { id: 'papat', javanese: 'papat', english: 'four', category: 'numbers' },
  { id: 'lima', javanese: 'lima', english: 'five', category: 'numbers' },
  { id: 'enem', javanese: 'enem', english: 'six', category: 'numbers' },
  { id: 'pitu', javanese: 'pitu', english: 'seven', category: 'numbers' },
  { id: 'wolu', javanese: 'wolu', english: 'eight', category: 'numbers' },
  { id: 'sanga', javanese: 'sanga', english: 'nine', category: 'numbers' },
  { id: 'sepuluh', javanese: 'sepuluh', english: 'ten', category: 'numbers' },
  { id: 'rong-puluh', javanese: 'rong puluh', english: 'twenty', category: 'numbers' },
  { id: 'satus', javanese: 'satus', english: 'one hundred', category: 'numbers' },

  // Family
  { id: 'bapak', javanese: 'bapak', english: 'father', category: 'family', notes: 'Also a respectful address for men: Pak.' },
  { id: 'ibu', javanese: 'ibu', english: 'mother', category: 'family', notes: 'Also Bu for women.' },
  { id: 'mbah', javanese: 'mbah', english: 'grandparent', category: 'family' },
  { id: 'kakang', javanese: 'kakang', english: 'older brother', category: 'family', notes: 'Often shortened to Kang.' },
  { id: 'mbakyu', javanese: 'mbakyu', english: 'older sister', category: 'family', notes: 'Mbak is the common address.' },
  { id: 'adhik', javanese: 'adhik', english: 'younger sibling', category: 'family' },
  { id: 'anak', javanese: 'anak', english: 'child', category: 'family' },
  { id: 'bojo', javanese: 'bojo', english: 'spouse', category: 'family', notes: 'Casual. Polite: garwa.' },
  { id: 'sedulur', javanese: 'sedulur', english: 'relative / sibling (broad)', category: 'family' },
  { id: 'kanca', javanese: 'kanca', english: 'friend', category: 'family' },

  // Food
  { id: 'sego', javanese: 'sego', english: 'rice', category: 'food', notes: 'Polite: sekul.' },
  { id: 'wedang', javanese: 'wedang', english: 'hot drink', category: 'food', example: 'Wedang jahe', exampleEn: 'Ginger drink' },
  { id: 'kopi', javanese: 'kopi', english: 'coffee', category: 'food' },
  { id: 'teh', javanese: 'teh', english: 'tea', category: 'food' },
  { id: 'gudeg', javanese: 'gudeg', english: 'young jackfruit stew (Yogya specialty)', category: 'food' },
  { id: 'pecel', javanese: 'pecel', english: 'vegetables with peanut sauce', category: 'food' },
  { id: 'sate', javanese: 'sate', english: 'satay / grilled skewers', category: 'food' },
  { id: ' bakso', javanese: 'bakso', english: 'meatball soup', category: 'food' },
  { id: 'jambu', javanese: 'jambu', english: 'guava', category: 'food' },
  { id: 'gedhang', javanese: 'gedhang', english: 'banana', category: 'food' },
  { id: 'gula', javanese: 'gula', english: 'sugar', category: 'food' },
  { id: 'uyah', javanese: 'uyah', english: 'salt', category: 'food' },

  // Colors
  { id: 'abang', javanese: 'abang', english: 'red', category: 'colors' },
  { id: 'biru', javanese: 'biru', english: 'blue', category: 'colors' },
  { id: 'ijo', javanese: 'ijo', english: 'green', category: 'colors' },
  { id: 'kuning', javanese: 'kuning', english: 'yellow', category: 'colors' },
  { id: 'ireng', javanese: 'ireng', english: 'black', category: 'colors' },
  { id: 'putih', javanese: 'putih', english: 'white', category: 'colors' },
  { id: 'coklat', javanese: 'coklat', english: 'brown', category: 'colors' },
  { id: 'ungu', javanese: 'ungu', english: 'purple', category: 'colors' },
  { id: 'oranye', javanese: 'oranye', english: 'orange', category: 'colors' },
  { id: 'abu-abu', javanese: 'abu-abu', english: 'gray', category: 'colors' },

  // Everyday
  { id: 'banyu', javanese: 'banyu', english: 'water', category: 'everyday' },
  { id: 'omah', javanese: 'omah', english: 'house', category: 'everyday', notes: 'Polite: griya.' },
  { id: 'dalan', javanese: 'dalan', english: 'road / way', category: 'everyday' },
  { id: 'sekolah', javanese: 'sekolah', english: 'school', category: 'everyday' },
  { id: 'pasar', javanese: 'pasar', english: 'market', category: 'everyday' },
  { id: 'sepedha', javanese: 'sepedha', english: 'bicycle', category: 'everyday' },
  { id: 'montor', javanese: 'montor', english: 'car / motorcycle (context)', category: 'everyday' },
  { id: 'buku', javanese: 'buku', english: 'book', category: 'everyday' },
  { id: 'duwit', javanese: 'duwit', english: 'money', category: 'everyday' },
  { id: 'wektu', javanese: 'wektu', english: 'time', category: 'everyday' },
  { id: 'dina', javanese: 'dina', english: 'day', category: 'everyday' },
  { id: 'bengi', javanese: 'bengi', english: 'night', category: 'everyday' },
  { id: 'awan', javanese: 'awan', english: 'daytime / cloud (context)', category: 'everyday' },
  { id: 'adhem', javanese: 'adhem', english: 'cold', category: 'everyday' },
  { id: 'panas', javanese: 'panas', english: 'hot', category: 'everyday' },
  { id: 'gedhe', javanese: 'gedhe', english: 'big', category: 'everyday' },
  { id: 'cilik', javanese: 'cilik', english: 'small', category: 'everyday' },
  { id: 'ayis', javanese: 'ayis', english: 'delicious / tasty (of food)', category: 'everyday', notes: 'Often enake or énak in practice; ayis is common Ngoko praise.' },
  // Places & directions
  { id: 'kene', javanese: 'kéné', english: 'here', category: 'places', aksara: 'ꦏꦼꦤꦺ' },
  { id: 'kana', javanese: 'kana', english: 'there', category: 'places' },
  { id: 'ngendi', javanese: 'ngendi?', english: 'where?', category: 'places', example: 'Pasaré ngendi?', exampleEn: 'Where is the market?' },
  { id: 'kiwa', javanese: 'kiwa', english: 'left', category: 'places' },
  { id: 'tengen', javanese: 'tengen', english: 'right', category: 'places' },
  { id: 'lurus', javanese: 'lurus', english: 'straight', category: 'places' },
  { id: 'cedhak', javanese: 'cedhak', english: 'near', category: 'places' },
  { id: 'adoh', javanese: 'adoh', english: 'far', category: 'places' },
  { id: 'mlebu', javanese: 'mlebu', english: 'enter / go in', category: 'places' },
  { id: 'metu', javanese: 'metu', english: 'exit / go out', category: 'places' },
  { id: 'stasiun', javanese: 'stasiun', english: 'station', category: 'places' },
  { id: 'terminal', javanese: 'terminal', english: 'bus terminal', category: 'places' },
  { id: 'kamar-mandi', javanese: 'kamar mandi', english: 'bathroom', category: 'places', example: 'Kamar mandiné ning endi?', exampleEn: 'Where is the bathroom?' },

  // Useful actions
  { id: 'arep', javanese: 'arep', english: 'want to / going to', category: 'actions', example: 'Aku arep lunga.', exampleEn: 'I’m going to leave.' },
  { id: 'bisa', javanese: 'bisa', english: 'can / be able to', category: 'actions' },
  { id: 'ngerti', javanese: 'ngerti', english: 'understand', category: 'actions', example: 'Aku ora ngerti.', exampleEn: 'I don’t understand.' },
  { id: 'ora', javanese: 'ora', english: 'no / not', category: 'actions' },
  { id: 'ya', javanese: 'ya', english: 'yes', category: 'actions' },
  { id: 'tulung', javanese: 'tulung', english: 'help / please', category: 'actions', example: 'Tulung, nggih.', exampleEn: 'Please / help, okay.' },
  { id: 'tuku', javanese: 'tuku', english: 'buy', category: 'actions', example: 'Aku arep tuku kopi.', exampleEn: 'I want to buy coffee.' },
  { id: 'adol', javanese: 'adol', english: 'sell', category: 'actions' },
  { id: 'lunga', javanese: 'lunga', english: 'go / leave', category: 'actions' },
  { id: 'teka', javanese: 'teka', english: 'come / arrive', category: 'actions' },
  { id: 'ngombe', javanese: 'ngombé', english: 'drink', category: 'actions' },
  { id: 'turu', javanese: 'turu', english: 'sleep', category: 'actions' },
  { id: 'maca', javanese: 'maca', english: 'read', category: 'actions' },
  { id: 'nulis', javanese: 'nulis', english: 'write', category: 'actions' },

  // Feelings & descriptions
  { id: 'seneng', javanese: 'seneng', english: 'happy / glad', category: 'feelings', example: 'Aku seneng ketemu kowe.', exampleEn: 'I’m happy to meet you.' },
  { id: 'sedhih', javanese: 'sedhih', english: 'sad', category: 'feelings' },
  { id: 'kesel', javanese: 'kesel', english: 'tired / annoyed', category: 'feelings' },
  { id: 'lara', javanese: 'lara', english: 'sick / hurting', category: 'feelings', example: 'Aku lagi lara.', exampleEn: 'I’m feeling unwell.' },
  { id: 'wedi', javanese: 'wedi', english: 'afraid', category: 'feelings' },
  { id: 'bingung', javanese: 'bingung', english: 'confused', category: 'feelings' },
  { id: 'kaget', javanese: 'kaget', english: 'surprised / startled', category: 'feelings' },
  { id: 'kuwatir', javanese: 'kuwatir', english: 'worried', category: 'feelings' },
  { id: 'tentrem', javanese: 'tentrem', english: 'peaceful / calm', category: 'feelings' },
  { id: 'ayu', javanese: 'ayu', english: 'beautiful', category: 'feelings' },
  { id: 'resik', javanese: 'resik', english: 'clean', category: 'feelings' },
  { id: 'reged', javanese: 'reged', english: 'dirty', category: 'feelings' },
  { id: 'cepet', javanese: 'cepet', english: 'fast / quick', category: 'feelings' },
  { id: 'alon', javanese: 'alon', english: 'slow / gently', category: 'feelings', example: 'Alon-alon waé.', exampleEn: 'Take it slowly.' },
];

// Fix accidental leading space on bakso id/value if any
for (const item of vocabulary) {
  item.id = item.id.trim();
  item.javanese = item.javanese.trim();
}

export function getCategory(id: string): CategoryMeta | undefined {
  return categories.find((c) => c.id === id);
}

export function byCategory(category: VocabCategory): VocabItem[] {
  return vocabulary.filter((item) => item.category === category);
}

export function findVocab(id: string): VocabItem | undefined {
  return vocabulary.find((item) => item.id === id);
}

export function pickRandom(count: number, category?: VocabCategory): VocabItem[] {
  const pool = category ? byCategory(category) : [...vocabulary];
  const copy = [...pool];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(count, copy.length));
}

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
