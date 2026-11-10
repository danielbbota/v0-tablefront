# tablesfront.com website

Next.js / React site on Vercel. Marketing site for TableFront: websites for businesses that sell directly to customers with one clear action (book, order, buy) — hospitality is the flagship vertical, plus health & beauty (salons, barbers, clinics) and small producers & shops. Written from the perspective of someone who ran a restaurant.

## Rules
- Languages: EN, DE, PT (pt-PT, never Brazilian), FR. Currency switches by language: EN and PT show EUR, DE and FR show CHF, with a manual override selector (`lib/i18n/config.ts`).
- Brand: espresso #1A1208, cream #F5EFE0, brass gold #C9954A, terracotta #B85C38, off-white #EDE8DC. Fonts: DM Serif Display (headings — chosen for its conventional ampersand), Lora, Syne.
- `/reservations` shows the presentation video **on the PT site only** (`public/videos/apresentacao-16x9.mp4` desktop, `-9x16` phones; the narration is Portuguese, so EN/DE/FR skip the section) and the interactive tour (`components/reservations/interactive-tour.tsx`, a client-side replica of the widget + dashboard with fictional guests; copy in `reservations.tour`).
- Hero is the CSS-only "showcase" (`components/home/hero-showcase.tsx`): a phone mock cycling five verticals on keyframes shared with the eyebrow label (4 s per slide). No video. Use CSS-only responsive switching (md:hidden / hidden md:block, container queries) to avoid hydration issues.
- Restaurant-only wording belongs only in the hospitality card, the "born in hospitality" line and `/reservations`; everywhere else say customers / bookings, orders and sales.
- app.tablesfront.com is the reservations dashboard (separate repo in `Booking integration/`). Its page here (`/reservations`) must only claim what the platform really does: widget embed, email confirmations/reminders/cancel link, floor-plan editor, day view, EN/DE/PT/FR, included in Monthly Professional or sold on its own (Reservations only plan). Login button in the nav/footer points to app.tablesfront.com/login (`APP_LOGIN_URL`). No SMS, Google, waitlist, deposits or self-serve sign-up. Domain DNS: CNAME to cname.vercel-dns.com.
- Pricing: six fixed packages in `lib/pricing-data.ts` (Essential, Professional, Online Store, Monthly Essential, Monthly Professional — recommended, Reservations only — the platform without a website); plan names localised in the dictionaries. Monthly plans cover hosting and maintenance, not content updates (those are quoted per update on every plan).
- Tone: practical, empathetic, benefit-driven. Never salesy or corporate.
- Do not state competitor figures (commissions, prices) without a source.
- Do not merge to main until told.
