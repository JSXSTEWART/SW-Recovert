# Apex Receivables Group Website

Production-ready marketing website starter for a debt recovery and accounts receivable management company, built with Next.js App Router, TypeScript, Tailwind CSS, and shadcn-inspired reusable UI primitives.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint
- Minimal shadcn/ui-style component setup

## Project Structure

- `app/` — routes and page-level metadata
- `components/layout/` — shared site chrome (header/footer)
- `components/sections/` — reusable page sections (hero, contact form)
- `components/ui/` — reusable primitives (button, cards, fields, container)
- `lib/` — utilities and site configuration
- `config/` — typed environment/config scaffolding

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment file:
   ```bash
   cp .env.example .env.local
   ```
3. Start development server:
   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev` — start local dev server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — run ESLint
- `npm run typecheck` — run TypeScript checks

## Deploy on Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import project in Vercel.
3. Add environment variable:
   - `NEXT_PUBLIC_SITE_URL` set to your production URL.
4. Deploy using defaults (`npm run build`).

## Notes for Future Iteration

- Replace placeholder content with final brand messaging.
- Connect contact form to your API route, CRM, or form provider.
- Add CMS/MDX for blog content under `/resources` and `/blog`.
