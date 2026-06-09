# Division Street Digital

Marketing website for Division Street Digital, a local marketing agency serving small businesses in Chicago's Wicker Park neighborhood and nearby areas.

## Tech stack

- **Next.js 14+** (App Router, TypeScript)
- **Tailwind CSS**
- **Resend** for form email delivery
- **Zod** for API validation
- All content lives in typed data files under `/content` — no CMS, no database

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in your values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in every value before forms or tracking will work.

| Variable | Required for | Where to get it |
|----------|-------------|-----------------|
| `RESEND_API_KEY` | Form submissions | [resend.com/api-keys](https://resend.com/api-keys) |
| `LEAD_NOTIFICATION_EMAIL` | Form submissions | Your inbox (where leads go) |
| `RESEND_FROM_EMAIL` | Form submissions | A verified sender in Resend |
| `NEXT_PUBLIC_GA4_ID` | Analytics | GA4 → Admin → Data Streams → Measurement ID (`G-…`) |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Ads tag | Google Ads → Tools → Conversions → tag setup (`AW-…`) |
| `NEXT_PUBLIC_GOOGLE_ADS_SIGNUP_CONVERSION` | Primary conversion | Full `send_to` label after creating a conversion action in Google Ads |
| `NEXT_PUBLIC_GOOGLE_ADS_CONTACT_CONVERSION` | Secondary conversion | Full `send_to` label for contact form |

### Conversion labels

The `AW-XXXXXXXXXX/xxxxxxxx` values only exist **after** you create conversion actions in Google Ads:

1. Deploy the site with analytics env vars set
2. In Google Ads → Goals → Conversions → New conversion action → Website
3. Create one for sign-up (`signup_submit`) and one for contact (`contact_submit`)
4. Copy each full `send_to` tag (e.g. `AW-123456789/AbCdEfGhIjK`) into the matching env var
5. Redeploy

Conversion events fire in `lib/analytics.ts` — only after a successful API response, never on button click.

### Testing conversions

Before spending ad budget:

1. **GA4 DebugView** — install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger) Chrome extension, accept cookies, submit a test form, confirm `signup_submit` or `contact_submit` appears
2. **Google Tag Assistant** — verify gtag loads, consent mode defaults to denied, and conversions fire after form success
3. Submit a real test lead and confirm it arrives via Resend

## Consent mode

The site uses **Google Consent Mode v2**:

- On first visit, all consent types default to **denied** before gtag loads
- A banner offers Accept / Decline; choice is stored in a first-party cookie (`dsd_consent`)
- Accept → analytics and ads cookies enabled; enhanced conversion data (email, phone) passed on form success
- Decline → no cookies; Google still receives cookieless pings for modeling
- "Cookie settings" in the footer reopens the banner

## Edit content

| File | What's in it |
|------|-------------|
| `content/site.ts` | Business name, tagline, nav, footer |
| `content/home.ts` | Home page sections |
| `content/pricing.ts` | Plans, add-ons, FAQ |
| `content/stories.ts` | Client stories |
| `content/forms.ts` | Form page copy, field options, consent banner text |
| `content/images.ts` | Every image slot — labels, hints, and `src` paths |
| `content/privacy.ts` | Privacy policy copy |
| `content/sitemap.ts` | Sitemap priorities, change frequency, last-modified dates |

### Sitemap & SEO

The sitemap lives at `/sitemap.xml` (generated from `content/sitemap.ts`).

When you update a page's content, bump that route's `lastModified` date in `content/sitemap.ts` so crawlers know to recrawl. When you add a new public page, add an entry there too.

| Route | Priority | Why |
|-------|----------|-----|
| `/` | 1.0 | Homepage |
| `/pricing`, `/signup` | 0.9 | Commercial / conversion pages |
| `/stories` | 0.8 | Social proof |
| `/contact` | 0.7 | Secondary conversion |
| `/privacy` | 0.3 | Legal — index but low priority |

`robots.txt` allows all public pages and blocks `/api/`. Submit `https://divisionstreetdigital.com/sitemap.xml` in [Google Search Console](https://search.google.com/search-console) after deploy.

### Adding photos

1. Drop images in `public/images/`
2. Uncomment or set the `src` field in `content/images.ts` (page-level photos)
3. For client stories, set `image` on each entry in `content/stories.ts`
4. Placeholders disappear automatically once `src` is set

### Adding a client story

Replace a placeholder in `content/stories.ts`. The home page social proof strip pulls from the first two real stories automatically.

## Deploy to Vercel

1. Push to GitHub and import at [vercel.com](https://vercel.com)
2. Add all env vars from `.env.example` in Project Settings → Environment Variables
3. Deploy — Next.js is auto-detected
4. Add custom domain `divisionstreetdigital.com` when ready
5. Verify your sending domain in Resend for production email

## Project structure

```
app/
  api/signup/     → Sign-up form handler (Resend)
  api/contact/    → Contact form handler (Resend)
  signup/         → Sign-up page (primary conversion)
  contact/        → Contact page
  privacy/        → Privacy policy
components/
  forms/          → SignupForm, ContactForm, shared fields
  analytics/      → Consent banner, gtag, page view tracker
content/          → All editable copy and data
lib/
  analytics.ts    → trackEvent, trackConversion, trackSignupSuccess
  consent.ts      → Cookie-based consent persistence
  validation.ts   → Zod schemas
  email.ts        → Resend integration
public/robots.txt
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |
