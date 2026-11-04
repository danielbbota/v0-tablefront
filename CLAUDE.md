# tablesfront.com website

Next.js / React site on Vercel. Marketing site for TableFront: websites for businesses that sell directly to customers with one clear action (book, order, buy) — hospitality is the flagship vertical, plus health & beauty (salons, barbers, clinics) and small producers & shops. Written from the perspective of someone who ran a restaurant.

## Rules
- Languages: EN, DE, PT (pt-PT, never Brazilian), FR. Currency switches by language: EN and PT show EUR, DE and FR show CHF, with a manual override selector (`lib/i18n/config.ts`).
- Brand: espresso #1A1208, cream #F5EFE0, brass gold #C9954A, terracotta #B85C38, off-white #EDE8DC. Fonts: DM Serif Display (headings — chosen for its conventional ampersand), Lora, Syne.
- Hero is the CSS-only "showcase" (`components/home/hero-showcase.tsx`): a phone mock cycling five verticals on keyframes shared with the eyebrow label (4 s per slide). No video. Use CSS-only responsive switching (md:hidden / hidden md:block, container queries) to avoid hydration issues.
- Restaurant-only wording belongs only in the hospitality card, the "born in hospitality" line and `/reservations`; everywhere else say customers / bookings, orders and sales.
- app.tablesfront.com is the reservations dashboard (separate repo in `Booking integration/`). Its page here (`/reservations`) must only claim what the platform really does: widget embed, email confirmations/reminders/cancel link, floor-plan editor, day view, EN/DE/PT/FR, included in Monthly Professional. No SMS, Google, waitlist, deposits or self-serve sign-up. Domain DNS: CNAME to cname.vercel-dns.com.
- Pricing: five fixed packages in `lib/pricing-data.ts` (Essential, Professional, Online Store, Monthly Essential, Monthly Professional — recommended); plan names localised in the dictionaries.
- Tone: practical, empathetic, benefit-driven. Never salesy or corporate.
- Do not state competitor figures (commissions, prices) without a source.
- Do not merge to main until told.
