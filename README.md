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
