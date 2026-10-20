# tablesfront.com website

Next.js / React site on Vercel. Marketing site for TableFront, a web design and reservations business for independent restaurants. Written from the perspective of someone who ran a restaurant.

## Rules
- Languages: EN, DE, PT (pt-PT, never Brazilian), FR. Currency switches by language: PT and FR show EUR, DE and EN show CHF, with a manual override selector.
- Brand: espresso #1A1208, cream #F5EFE0, brass gold #C9954A, terracotta #B85C38, off-white #EDE8DC. Fonts: Playfair Display, Lora, Syne.
- Hero uses scroll-driven video scrubbing. Keep the static image fallback on mobile (iOS Safari blocks video.currentTime). Use CSS-only responsive switching (md:hidden / hidden md:block) to avoid hydration issues.
- app.tablesfront.com is the reservations dashboard (separate repo). Domain DNS: CNAME to cname.vercel-dns.com.
- Tone: practical, empathetic, benefit-driven. Never salesy or corporate.
- Do not state competitor figures (commissions, prices) without a source.
- Working branch: redesign/fable-v2. Do not merge to main until told.
