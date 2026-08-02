import { Post } from 'rontal';

const posts = [
  {
    title: 'Why Learn Javanese?',
    slug: 'why-learn-javanese',
    excerpt: 'A living language of politeness levels, poetry, and everyday warmth.',
    body: `## A language with layers

Javanese (*Basa Jawa*) is spoken by tens of millions of people across Central and East Java, Yogyakarta, and diaspora communities worldwide. What makes it special is not only vocabulary — it is the **speech levels**.

- **Ngoko** — casual speech among friends and younger people
- **Madya** — middle politeness
- **Krama** — refined, respectful speech

The same idea can be said several ways. *Matur nuwun* (thank you, polite) vs *suwun* (thanks, casual) is a tiny window into a culture that values harmony and respect.

## Start small

You do not need perfect Krama on day one. Learn a handful of greetings, numbers, and food words. Practice with the games on this site — they reset every refresh, so there is no pressure to keep a streak.

## Next steps

1. Browse the [vocabulary lists](/learn)
2. Play a round of [match](/games/match) or [quiz](/games/quiz)
3. Come back to the blog for short cultural notes
`,
    published_at: '2026-07-01T09:00:00.000Z',
  },
  {
    title: 'Ngoko vs Krama in 5 Minutes',
    slug: 'ngoko-vs-krama',
    excerpt: 'Two ends of the politeness spectrum, with everyday examples.',
    body: `## The short version

| Meaning | Ngoko (casual) | Krama (polite) |
|--------|-----------------|----------------|
| I | aku | kula |
| You | kowé | panjenengan |
| Eat | mangan | nedha |
| Go home | mulih | wangsul |
| Thank you | suwun | matur nuwun |

## When to use which

Use **Ngoko** with close friends, younger people, and in relaxed chats.
Use **Krama** with elders, teachers, customers, and formal settings.

If you are unsure, a warm smile plus *pangapunten* (excuse me) and simple Krama greetings go a long way.

## A mini dialogue

**A:** Sugeng enjing, Bu.  
**B:** Sugeng enjing. Prikasa kabaripun?  
**A:** Saé, matur nuwun.

That is already enough to open many doors.
`,
    published_at: '2026-07-08T09:00:00.000Z',
  },
  {
    title: 'Market Words You Will Actually Use',
    slug: 'market-words',
    excerpt: 'Food, numbers, and polite phrases for pasar mornings.',
    body: `## At the pasar

Markets are perfect language labs. You hear numbers, food names, and quick bargains in one place.

### Handy phrases

- **Pinten niki?** — How much is this? (polite)
- **Sagel kirang?** — Can it be less?
- **Nyuwun …** — May I have …
- **Sampun** — That’s enough / done

### Food to point at

- **sego** — rice  
- **pecel** — veggies with peanut sauce  
- **gudeg** — Yogyakarta’s famous jackfruit dish  
- **wedang jahe** — hot ginger drink  
- **gedhang** — banana  

### Numbers for prices

Practice *siji* through *sepuluh*, then *rong puluh* (20) and *satus* (100). Pair them with the [numbers list](/learn/numbers) and the quiz game.

## Try it

Open [Flashcards](/games/flashcards), filter your brain for food words, and see how many you still know after one pass.
`,
    published_at: '2026-07-15T09:00:00.000Z',
  },
  {
    title: 'Reading a Little Aksara Jawa',
    slug: 'aksara-jawa-basics',
    excerpt: 'A gentle introduction to Javanese script without the overwhelm.',
    body: `## What is Aksara Jawa?

*Aksara Jawa* (also called *Hanacaraka*) is the traditional script for Javanese. You will still see it on street signs, school gates, and cultural posters — especially in Yogyakarta and Solo.

## Hanacaraka order

The classic mnemonic begins:

> ha na ca ra ka  
> da ta sa wa la  
> pa dha ja ya nya  
> ma ga ba tha nga

Each basic letter is a full syllable ending in **-a**. Marks change the vowel or silence it.

## On this site

Some vocabulary cards show optional aksara next to the Latin spelling — for example **siji** (ꦱꦶꦗꦶ). You do not need the script to learn to speak, but recognizing a few shapes makes Java’s public spaces more readable.

## Practice tip

Pick three words you already know in Latin form, find their aksara on the learn pages, and redraw them once from memory. Tiny reps beat long lectures.
`,
    published_at: '2026-07-22T09:00:00.000Z',
  },
];

export async function seedDemoContent(): Promise<void> {
  for (const entry of posts) {
    const existing = await Post.where('slug', entry.slug).firstModel();
    if (existing) {
      continue;
    }

    const now = new Date().toISOString();
    await Post.create({
      title: entry.title,
      slug: entry.slug,
      body: entry.body,
      excerpt: entry.excerpt,
      published_at: entry.published_at,
      created_at: now,
      updated_at: now,
    });
  }
}
