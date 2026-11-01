# Coriva One Website

Marketing site for Coriva One — NAPS & NATS apprenticeship programme partner for SMEs and mid-sized enterprises.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Brochure theme: navy `#002D62`, orange `#F37021`, Montserrat + Great Vibes
- Component architecture: `ui/`, `layout/`, `sections/`, `forms/`, `tools/`, `analytics/`
- Enquiry form → Google Sheets (with local `.data/enquiries.jsonl` fallback)
- Google Analytics 4 via `@next/third-parties`

## Setup

```bash
cd website
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 measurement ID (`G-...`) |
| `NEXT_PUBLIC_PHONE_NUMBER` | Optional header phone |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Optional WhatsApp |
| `GOOGLE_SHEETS_ID` | Spreadsheet ID for enquiries |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Service account email |
| `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` | Service account private key |

### Google Sheets setup

1. Create a spreadsheet named e.g. `CorivaOne — Website Enquiries`
2. Create a tab named `Enquiries`
3. Row 1 headers: Submitted At, Full Name, Work Email, Phone, Company, Employee Count, Industry, Interest, Message, Page Source, UTM Source, UTM Medium, UTM Campaign, Referrer
4. Create a Google Cloud service account, enable Sheets API, share the sheet with the service account email (Editor)
5. Put credentials in `.env.local`

Without Sheets credentials, enquiries append to `.data/enquiries.jsonl` so local development still works.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Content note

Stipend / incentive figures are date-stamped in `src/lib/rates.ts`. Re-verify against official portals before publishing commercial claims.