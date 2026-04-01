# Meridian Recovery Solutions — Next.js Website

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

MIT
