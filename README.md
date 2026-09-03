<div align="center">

# Veyro

### Make the choice you can explain.

A beautifully focused decision studio built with Next.js. Compare two options, score the criteria that matter, and turn uncertainty into a clear weighted signal.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-0A84FF?style=for-the-badge)](LICENSE)

</div>

## Why Veyro?

Most decision tools feel like spreadsheets. Veyro feels like a product. It gives each option a weighted score while keeping the process visual, quick, and understandable.

## Features

- Compare two custom options
- Add and remove unlimited criteria
- Weight each criterion from 1–5
- Score options from 1–10
- Live weighted result and confidence signal
- Responsive premium dark interface
- Accessible labels and keyboard-friendly controls
- No database, login, API key, or paid service required

## Quick start

```bash
git clone https://github.com/TasarikOfficial/Veyro.git
cd Veyro
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Run the production build |
| `npm run lint` | Check code quality |

## Stack

```txt
Next.js 16 · React 19 · TypeScript · App Router · CSS
```

## Project structure

```txt
app/
├── globals.css
├── icon.svg
├── layout.tsx
└── page.tsx
components/
└── decision-studio.tsx
```

The page and metadata stay server-rendered. Interactive decision logic is isolated in a small client component.

## Deploy

Deploy instantly on [Vercel](https://vercel.com/new/clone?repository-url=https://github.com/TasarikOfficial/Veyro), or run the production build on any Node.js host.

---

<div align="center">
Built with clarity by <a href="https://github.com/TasarikOfficial">Ömer / Tasarik</a>.
</div>
