# Southwest Recovery Services — Next.js Website

A production-ready Next.js website for a debt recovery and accounts receivable management company. Built with TypeScript, App Router, Tailwind CSS v4, and custom UI components inspired by shadcn/ui.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** Custom components built with class-variance-authority, clsx, tailwind-merge
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, differentiators, services, industries, stats, resources preview, CTA |
| `/about` | Company story, values, leadership team, credentials |
| `/services` | Full service descriptions: Debt Recovery, RCM, AR Management, Consulting, BPO |
| `/industries` | Sector-specific information: Commercial, Healthcare, Government, Utilities, Insurance, Property Mgmt, Auto Finance |
| `/resources` | Blog articles, guides, case studies, compliance updates |
| `/contact` | Contact form with free consultation request |
| `/privacy-policy` | Full privacy policy |

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── industries/page.tsx
│   ├── resources/page.tsx
│   ├── contact/page.tsx
│   └── privacy-policy/page.tsx
├── components/
│   ├── layout/
│   │   ├── navbar.tsx      # Sticky responsive navigation
│   │   └── footer.tsx      # Site footer with links
│   └── ui/
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── textarea.tsx
├── lib/
│   └── utils.ts            # cn() helper
└── public/                 # Static assets
```

## Deployment to Vercel

This project is Vercel-ready out of the box.

1. Push your repository to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel will auto-detect Next.js — click **Deploy**

No additional environment variables are required for the base build.

## Customization

- **Company name & branding:** Update `components/layout/navbar.tsx`, `components/layout/footer.tsx`, and `app/layout.tsx`
- **Colors:** Edit CSS variables in `app/globals.css`
- **Content:** All page content is co-located in each `app/*/page.tsx` file
- **SEO:** Update `metadata` exports in each page and the root `layout.tsx`

## Compliance

All simulated content references FDCPA, HIPAA, GLBA, and CFPB compliance. Replace placeholder contact information, addresses, and legal disclosures with accurate data before production deployment.

## License

# MIT
# Southwest Recovery Services Website

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
# Pulseboard Site Handoff

This repository is ready for a **claim-friendly GitHub → Vercel Preview** handoff.

## 1) Push to GitHub under your account

```bash
mkdir pulseboard-site
tar -xzf pulseboard-site.tar.gz -C pulseboard-site --strip-components=1
cd pulseboard-site

git init
git add -A
git commit -m "Initial Pulseboard site"
git branch -M main
```

Create a new GitHub repo in the web UI (for example: `pulseboard-site`), then run:

```bash
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/pulseboard-site.git
git push -u origin main
```

## 2) Deploy Preview on Vercel

1. Log into Vercel as `joe@status26.com`.
2. Go to **Add New → Project**.
3. Import the `pulseboard-site` repository.
4. Let framework auto-detect as **Next.js**.
5. Click **Deploy**.

Vercel will generate a preview URL immediately after deployment.

## 3) Optional env vars (forms)

If you want waitlist/contact submissions forwarded to a real destination, configure:

- `INGEST_WEBHOOK_URL` = your endpoint (Zapier catch hook, Slack workflow webhook, custom API, etc.)
- `INGEST_WEBHOOK_BEARER` = bearer token for that endpoint (optional)
- `RATE_LIMIT_PER_MINUTE` = e.g. `30` (optional)

Without `INGEST_WEBHOOK_URL`, forms still accept and log server-side so preview review is not blocked.

## Skill-required status (updated)

1. **Live URL**
   - Not created here (requires your Vercel deploy step above).
2. **Repo link**
   - Not created here (requires your GitHub push step above).
3. **Short changelog**
   - Built full Next.js App Router site + pages (Home, Pricing, Docs, Blog, Contact).
   - Added MDX blog support + starter posts.
   - Added `/api/waitlist` + `/api/contact` with validation + simple rate limiting.
   - Added webhook ingestion adapter with safe fallback.
4. **Editable project structure summary**
   - `app/` — pages + API routes + MDX posts
   - `components/` — UI building blocks + forms
   - `lib/` — env + ingest + rate-limit utilities
   - `styles/` — Tailwind globals
   - `public/` — static files
5. **Follow-up prompt suggestions**
   - “Wire waitlist submissions to Zapier Tables and send a confirmation email via Resend.”
   - “Make Pricing feel more enterprise and add a security/compliance section.”
   - “Add a Docs sidebar and turn Docs into MDX pages.”
   - “Deploy preview and share the Vercel URL; then refine copy section-by-section.”
6. **Assumptions and next approvals**
   - Assumed preview-first workflow, no production promotion, and no domain work.
   - Assumed forms should be functional now, with integration added later.
   - Domain/DNS and production promotion remain explicit opt-ins.
