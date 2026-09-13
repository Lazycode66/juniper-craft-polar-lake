# Lantern — Scam & Phishing Awareness Tool

A calm, private, browser-based tool that checks suspicious links, messages, and apps for phishing patterns, digital-arrest scam language, and risky permissions.

**No data is stored.** Analysis runs locally in the browser.

## Features

- **Check** — Paste a link, SMS/email text, or app details → get a clear risk score (Low / Medium / High) with plain-language explanation and safe next steps.
- **Learn** — Short interactive quiz + quick guides on digital-arrest scams, lookalike domains, and sideloaded apps.
- Beautiful dark UI with lantern-inspired accents, smooth animations, and accessible design.

## Quick Start (local)

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy (recommended: Vercel)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy.

Alternatively with the Vercel CLI:

```bash
npm i -g vercel
vercel
```

The site is fully static after build — no server required.

## Tech

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- Local rule-based analyzer (no external API keys needed)

## Disclaimer

Lantern is an **awareness guide**, not a forensic verdict. It can miss threats and can flag innocent content. Always verify through official channels when something feels urgent or high-stakes.
