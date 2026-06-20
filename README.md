# Amina Emad — Portfolio

Next.js 15 (App Router) · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion

A single-page portfolio built around one signature interaction: a three-way
**lens switcher** (AI / Cybersecurity / Data Analysis) that re-tints the
entire site's accent color in real time and drives the projects filter.

## Stack

- **Next.js 15** App Router, React 19, fully static (`○ Static` on every route)
- **TypeScript**, strict mode, `noUncheckedIndexedAccess`
- **Tailwind CSS** with a custom design-token system (CSS variables, not hardcoded hex)
- **shadcn/ui**-style primitives (Button, Card, Badge, Tabs, Separator, Tooltip)
- **Framer Motion** via `LazyMotion` (code-split `domMax` bundle) + global
  `MotionConfig reducedMotion="user"` for correct, automatic reduced-motion support
- **next-themes** for dark/light mode
- Auto-generated **favicon** (`app/icon.tsx`) and **OG/Twitter share image**
  (`app/opengraph-image.tsx`) via `next/og` — no missing image assets
- **JSON-LD** (`Person` schema), `sitemap.ts`, `robots.ts`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run lint
```

## Before you deploy

**1. Set your real site URL.**
`lib/data.ts` resolves the canonical URL in this order:
`NEXT_PUBLIC_SITE_URL` env var → Vercel's auto-provided `VERCEL_URL` → `localhost`.
If you deploy to Vercel, this works with zero configuration. If you attach a
custom domain, add an env var:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**2. Swap in updated CVs as needed.**
Two real CVs already ship in `/public`:
- `Amina_Emad_DataAnalyst_CV.pdf`
- `Amina_Emad_Cybersecurity_CV.pdf`

The Hero's "Download CV" button picks between them based on the active lens
(`lib/data.ts` → `CV_BY_LENS`). Replace the PDFs with updated versions whenever
your CV changes — filenames must stay the same, or update `CV_BY_LENS` to match.

**3. Replace the profile photo if you'd like a different shot.**
`public/images/avatar.jpg` — used in the Hero and in the JSON-LD `image` field.

## Content as a single source of truth

Every fact on the site (skills, projects, education, certifications, research,
GitHub repos, contact info) lives in `lib/data.ts`, typed via `types/index.ts`.
Update content there — no component file needs touching for a content change.

## The lens system

`components/providers/lens-provider.tsx` holds the active lens (`ai` | `cyber`
| `data`) in a React context, mirrored onto `<html data-lens="...">`.
`app/globals.css` defines `--track-ai/cyber/data` plus a derived `--accent`
variable that switches based on `[data-lens]`. Every accent-colored element
in the app (`text-lens`, `bg-lens`, `border-lens`, etc.) is just reading that
one CSS variable — there is no per-component color logic to keep in sync.

Color values were chosen and verified against WCAG AA contrast ratios in both
themes (see comments at the top of `app/globals.css`).
