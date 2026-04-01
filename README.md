# Meridian Recovery Solutions — Website

A production-ready marketing website for a debt recovery and accounts receivable management company, built with Next.js 16, TypeScript, Tailwind CSS v4, and shadcn/ui components.

## Tech Stack

| Tool | Version |
|---|---|
| Next.js | 16 (App Router, Turbopack) |
| TypeScript | 5+ |
| Tailwind CSS | 4+ |
| Radix UI | Latest |
| Lucide React | Latest |

## Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production
```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── (pages)/          # Route groups for page routes
│   │   ├── about/
│   │   ├── services/
│   │   ├── industries/
│   │   ├── resources/
│   │   ├── contact/
│   │   └── privacy-policy/
│   ├── globals.css
│   ├── layout.tsx         # Root layout (Navbar + Footer)
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Page section components
│   └── ui/                # shadcn/ui-style components
├── data/
│   └── site.ts            # Site config, services, industries, blog posts
└── lib/
    └── utils.ts           # cn() utility
```

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — Hero, Stats, Why Us, Services, Industries, Testimonials, Resources preview, CTA |
| `/about` | Company mission, values, compliance certifications |
| `/services` | All five service offerings with feature lists |
| `/industries` | All seven industry verticals with compliance notes |
| `/resources` | Blog/resources listing page |
| `/contact` | Contact form + company info |
| `/privacy-policy` | Full privacy policy |

## Deploying to Vercel

1. Push to GitHub
2. Import repository at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**

No environment variables are required for the base site.

## Customization

- Update company details in `src/data/site.ts`
- Replace placeholder stats and testimonials with real data
- Add a real form submission backend (e.g., Resend, Formspree, or a Next.js server action)
- Add individual blog post pages under `src/app/(pages)/resources/[slug]/page.tsx`
