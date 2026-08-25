# Jawa Vocab

ꦗꦮ · Learn basic **Javanese** (*Basa Jawa*) with short vocabulary lists, stateless practice games, and a small culture blog.

**Live:** [https://jv.pondoknusa.com](https://jv.pondoknusa.com)

Built with [Pondoknusa](https://github.com/pondoknusa/pondoknusa) and [rontal](https://www.npmjs.com/package/rontal) (headless blog API). No accounts — refresh anytime for a clean slate.

## Features

- **Vocabulary** — greetings, numbers, family, food, colors, everyday words, directions, actions, and feelings (Latin + optional Aksara Jawa)
- **Games** (stateless, reshuffled on each visit)
  - Match pairs
  - Multiple-choice quiz
  - Flashcards
  - Word scramble
  - Sentence builder

- **Blog** — short lessons on speech levels, markets, pronunciation, hospitality, and aksara, powered by **rontal**
- **Public API** — `GET /api/posts`, `GET /api/posts/:slug`, RSS/Atom feeds from rontal

## Stack

| Piece | Choice |
|--------|--------|
| Framework | Pondoknusa 4.2 (`@pondoknusa/*`) |
| Views | `.tyr` templates (`@pondoknusa/views`) |
| Blog | [rontal](https://www.npmjs.com/package/rontal) |
| Database | SQLite (`node:sqlite`, Node 26+) |
| Deploy | [pondoknusacom](https://www.npmjs.com/package/pondoknusacom) → `jv.pondoknusa.com` |

## Requirements

- **Node.js ≥ 26** (native TypeScript strip-types + `node:sqlite`)
- npm

## Quick start

```bash
git clone https://github.com/thesimonharms/jv_pondoknusa.git
cd jv_pondoknusa
npm install
cp .env.example .env

# Create the SQLite file and run migrations (includes rontal posts table)
mkdir -p database storage/framework/views storage/logs
touch database/database.sqlite
npx pondoknusa migrate

# Dev server (or: node --experimental-strip-types src/main.ts)
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

Demo blog posts seed automatically on boot when the `posts` table is empty.

### Useful scripts

```bash
npm run dev          # pondoknusa dev
npm start            # production-style start
npm test             # pondoknusa test
npx pondoknusa migrate
npx pondoknusa view:cache
npx pondoknusa route:cache
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Home |
| `/learn` | Vocabulary topics |
| `/games` | Game hub |
| `/games/match` | Match pairs |
| `/games/quiz` | Multiple choice |
| `/games/flashcards` | Flashcards |
| `/games/scramble` | Word scramble |
| `/games/sentences` | Sentence builder |
| `/blog` | Lesson posts (rontal) |
| `/blog/:slug` | Single post |
| `/api/posts` | Public JSON list |
| `/health`, `/health/live` | Health probes |

## Project layout

```
src/
  main.ts                 # App bootstrap
  controllers/            # Home, learn, games, blog
  data/
    vocabulary.ts         # Word lists
    seed-content.ts       # Demo rontal posts
  providers/
    app-service-provider.ts
  routes/
    web.ts
resources/views/          # .tyr templates
config/                   # Pondoknusa config
database/migrations/      # App migrations (rontal adds posts)
deploy/                   # Docker / platform helpers
```

## Deploy (pondoknusa.com)

This app is configured for slug **`jv`** (see `.pondoknusacom.json`).

```bash
npx -y pondoknusacom@latest login
npx -y pondoknusacom@latest deploy --app jv --follow
```

Production notes:

- Server binds `0.0.0.0:3000` (`pondoknusa.json`)
- Health checks: `/health` and `/health/live`
- Views may compile on miss (`config/views.ts` sets `requireCompiledCache: false`)
- SQLite path defaults to `database/database.sqlite`

## Auth stance

The site is intentionally **public and stateless**. Rontal’s write endpoints expect `auth:api`; this app registers a stub middleware that returns **401** for those routes. Read/list/show and the HTML blog UI do not require login.

## License

Source in this repository is available under the terms you choose for the project; Pondoknusa and rontal are MIT. See upstream packages for their licenses.
