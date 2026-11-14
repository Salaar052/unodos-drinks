# Unodos Drinks — Geek Con digital menu

Mobile-first QR menu for **Unodos Drinks** (presented by **Undos Games**) at **Geek Con, 21–22 Nov 2026**. Visitors enter name and phone once, then browse the menu. Leads are stored in a Google Sheet via Apps Script (no database).

## Local development

```bash
npm install
cp .env.example .env.local   # optional for lead webhook
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `LEADS_WEBHOOK_URL` | No | Google Apps Script web app URL. If missing, leads are `console.log`’d on the server. |
| `LEADS_SECRET` | No | Shared secret sent in the POST body; must match Apps Script `SECRET`. |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical URL for Open Graph (e.g. your Vercel URL). |

Never commit `.env.local`. Webhook URL and secret are **server-only** (`/api/lead`).

## Edit menu & prices

All items live in [`src/lib/menu.ts`](src/lib/menu.ts). Every item is **Rs 600** today—change `PRICE` or per-item `priceLabel` there.

When you add a photo, save it as `public/images/<id>.jpg` and set `hasPhoto: true` on that item.

### Suggested stock photo searches

| Item ID | Search terms |
|---------|----------------|
| `thunderclap` | yellow lemonade soda |
| `magicians-red` | red strawberry cherry soda |
| `hollow-purple` | purple blueberry drink |
| `t-virus-antidote` | green soda bottle with milk |
| `mana-potion` | blue pineapple coconut drink |
| `calcifer-hot-choco` | hot chocolate mug with flame-like steam |
| `anteiku-latte` | vanilla latte |
| `sohma-pilaf` | biryani plate |
| `lawliet-brownie` | chocolate brownie |

Crop photos to a consistent square or 4:3 ratio.

## Google Sheet + Apps Script

1. Create a new Google Sheet (e.g. “Unodos Drinks Leads”).
2. **Extensions → Apps Script**, paste:

```js
const SECRET = "change-me";
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  if (data.secret !== SECRET) return ContentService.createTextOutput("forbidden");
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(["Time", "Name", "Phone", "Source"]);
  sheet.appendRow([data.at, data.name, "'" + data.phone, data.source]);
  return ContentService.createTextOutput("ok");
}
```

3. Set `SECRET` to a long random string; put the same value in Vercel as `LEADS_SECRET`.
4. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the web app URL into `LEADS_WEBHOOK_URL` on Vercel (and `.env.local` for testing).

## Deploy on Vercel

1. Push this repo to GitHub (or import the folder).
2. [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Framework preset: **Next.js** (default).
4. Add environment variables: `LEADS_WEBHOOK_URL`, `LEADS_SECRET`, `NEXT_PUBLIC_SITE_URL`.
5. Deploy. Test the gate and confirm a row appears in the sheet.

## QR code for the stall

After deploy, generate print-ready QR codes (1500×1500 PNG + SVG, error correction H, 4-module quiet zone):

```bash
npm run qr -- https://your-production-url.vercel.app
```

Outputs: `qr/menu-qr.png` and `qr/menu-qr.svg`.

## Pre-event checklist

- [ ] Test the gate on **2–3 real phones** (iOS + Android); confirm 16px inputs don’t zoom on iOS.
- [ ] Submit a real lead and confirm it lands in the **Google Sheet** with correct phone (leading zero preserved).
- [ ] Print a test QR and **scan from ~1 metre** away under convention lighting.
- [ ] Flip `hasPhoto: true` for any images you’ve added; spot-check lazy-loaded cards.
- [ ] Clear site data on one phone and confirm returning visitors **skip the gate** after first unlock.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Run production build |
| `npm run lint` | ESLint |
| `npm run qr -- <url>` | Generate menu QR assets |

---

Unofficial fan-tribute menu. Not affiliated with any studio or franchise.