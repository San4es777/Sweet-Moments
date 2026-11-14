# Sweet Moments

Premium home patisserie storefront for Odesa, Ukraine.

## Project stack
- Next.js 15 / React 19 / TypeScript
- PostgreSQL + Prisma
- Responsive storefront and admin UI

## Master improvement checklist

This is the project-wide checklist. We will work through every section in order and mark items complete only after implementation and verification. Do not skip later sections; unfinished items remain visible here.

### Phase 1 — Visual identity and storefront
- [ ] Header: compact responsive brand, clear navigation, cart access
- [ ] Hero: appetizing full-cake photography, concise sales copy, clear CTAs
- [ ] Mobile layout: spacing, typography, image proportions, no horizontal overflow
- [ ] Product photography: every image matches its product; no broken links or placeholder art
- [ ] Category tiles: consistent crops, labels, navigation to matching filters
- [ ] Product cards: readable descriptions, price/quote state, unit, clear add action
- [ ] Product detail pages: gallery, composition, fillings, size/weight, lead time
- [ ] About, process, delivery/pickup, reviews and completed-work sections
- [ ] Accessible interactions, reduced-motion support, loading and empty states
- [ ] Visual QA at common mobile and desktop widths

### Phase 2 — Catalog and product discovery
- [ ] Search and category filters
- [ ] Filters by occasion, flavour, size and availability where supported by real data
- [ ] Sorting and clear-filter controls
- [ ] Product details and related products
- [ ] Product data validation; real prices, portions, weights and lead times approved by owner
- [ ] Locally managed image assets/storage instead of fragile third-party hotlinks

### Phase 3 — Cart and customer checkout
- [ ] Persistent cart across refreshes
- [ ] Quantity editing and item removal
- [ ] Pickup/delivery selection and Odesa delivery address
- [ ] Date/time selection with lead-time and capacity validation
- [ ] Customer name, phone, notes and order summary
- [ ] Server-side order creation and confirmation state
- [ ] Clear success/error states and duplicate-submit protection

### Phase 4 — Custom cake request flow
- [ ] Step-by-step custom cake brief
- [ ] Cake type, size/weight, filling, colours, theme and inscription
- [ ] Reference photo upload
- [ ] Requested date and customer contacts
- [ ] Manual price approval and deposit workflow
- [ ] Admin notification and customer confirmation

### Phase 5 — Admin and operations
- [ ] PostgreSQL schema, migrations and seed data
- [ ] Secure individual accounts for two administrators
- [ ] Protected admin routes and session management
- [ ] Product/category CRUD and image management
- [ ] Order statuses, notes and customer details
- [ ] Production calendar, capacity and unavailable dates
- [ ] Payment/deposit status tracking
- [ ] Basic dashboard and audit-friendly operational workflow

### Phase 6 — Integrations
- [ ] Telegram order and custom-request notifications
- [ ] Payment provider selection and merchant onboarding (WayForPay/LiqPay)
- [ ] Payment callbacks/webhook verification
- [ ] Delivery rules and customer notifications
- [ ] Privacy-conscious analytics

### Phase 7 — Launch and quality assurance
- [ ] Automated build and type checks pass
- [ ] Security review, secrets and environment variables
- [ ] Database backups and production migrations
- [ ] Domain and HTTPS
- [ ] SEO metadata, social sharing images and sitemap
- [ ] Performance, accessibility and cross-device testing
- [ ] End-to-end test: product order, custom request, admin workflow, notification and payment
- [ ] Owner handover and short operating guide

## Current status and known limitations
This is an evolving prototype. Do not treat demo interactions as production functionality until the relevant checklist item is implemented and tested.

- Product prices remain unset until approved by the owner.
- Product images are provisional references until replaced with the confectioner's own approved photos.
- Checkout and custom-request forms still require persistent server-side order handling.
- Admin authentication, database deployment, payment integrations and Telegram notifications are not yet production-ready.

## Local development
1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and set `DATABASE_URL`.
4. Run `npx prisma generate`.
5. Run `npm run dev`.
6. Open `http://localhost:3000`.

## Security
Never commit API keys, passwords, database credentials or payment secrets. Use environment variables and the hosting provider's secret manager.
