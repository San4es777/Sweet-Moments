# Sweet Moments

Premium home patisserie storefront for Odesa, Ukraine.

## Stack
- Next.js 15 / React 19 / TypeScript
- PostgreSQL + Prisma
- Responsive storefront and admin UI

## Local development
1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and set `DATABASE_URL`.
4. Run `npm run dev`.
5. Open `http://localhost:3000`.

## Current status
This repository contains an initial UI prototype:
- Storefront, category filters, search and sorting
- Cart with quantity controls and checkout form layout
- Custom cake enquiry form
- Initial admin screen at `/admin`
- Prisma data model draft

**Not production-ready yet:** forms are currently demo-only and do not persist orders. Admin is not protected by authentication. Payment providers, Telegram notifications, delivery calculation, calendar persistence, image uploads and production database setup still need implementation.

Product prices are intentionally unset until the owner provides the approved price list. Current SVG product artwork is illustrative placeholder artwork and should be replaced with the confectioner's own product photography.

## Planned implementation
1. Confirm real product names, categories, prices, portions/weight units, photos and order lead times.
2. Finalize the database schema and seed data.
3. Implement server-side order creation, validation and availability checks.
4. Add secure authentication for two administrators and role-protected admin routes.
5. Build product/category management, order workflow and production calendar.
6. Connect Telegram notifications and a Ukrainian payment provider (WayForPay or LiqPay) after merchant credentials are available.
7. Deploy to hosting, configure PostgreSQL, environment secrets and domain.

Never commit real API keys, passwords or payment secrets. Use environment variables only.
