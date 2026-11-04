const en = {
  meta: {
    home: {
      title: "TableFront — Websites that turn visitors into bookings, orders and sales",
      description:
        "Websites for businesses that sell directly to customers — hospitality, health & beauty, producers and shops. One clear action: book, order or buy. Live in 7 days, free prototype first.",
    },
    pricing: {
      title: "Pricing — Fixed website packages, shown in CHF or EUR",
      description:
        "Transparent website pricing: one-time builds from €490 / CHF 790, monthly partnerships from €39 / CHF 69. Fixed per market, no hidden fees, 7-day delivery.",
    },
    legal: {
      title: "Privacy & Legal Notice",
      description: "How TableFront handles your data, and who is behind the site.",
    },
  },

  nav: {
    why: "Why TableFront",
    how: "How it works",
    work: "Our work",
    story: "Our story",
    faq: "FAQ",
    pricing: "Pricing",
    bookCall: "Book a free call",
    getPrototype: "Free prototype",
    languageLabel: "Language",
    currencyLabel: "Currency",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    backHome: "Back",
    homeLabel: "TableFront — home",
    mainNavLabel: "Main",
  },

  hero: {
    /** Rendered as "{eyebrowPrefix} {cycling label}" — the labels rotate with a CSS-only animation. */
    eyebrowPrefix: "Websites for",
    verticals: ["restaurants", "cafés", "salons", "clinics", "shops"],
    headline1: "Websites that turn visitors",
    headline2: "into bookings, orders and sales.",
    sub: "Born in hospitality — built for every business that sells to customers.",
    ctaPrimary: "Book a free call",
    ctaSecondary: "Get a free prototype",
    trust: "Live in 7 days · One clear action · Operator-built",
    /** Animated phone mock in the hero card. One item per `verticals` entry, in the same order; `--n`-driven CSS cycles them in sync with the eyebrow. */
    showcase: {
      ariaLabel: "A client website on a phone receiving a reservation, an order, an appointment and a sale, with a chart climbing.",
      items: [
      {
        name: "Casa Marisa",
        tagline: "Dinner from 18:00, Tuesday to Sunday",
        cta: "Reserve a table",
        notifTitle: "New reservation",
        notifDetail: "Table for 4 · Fri 20:00",
        statLabel: "Reservations this month",
        statValue: "+38%",
      },
      {
        name: "Café Lumen",
        tagline: "Roasted this week, poured today",
        cta: "Order ahead",
        notifTitle: "New order",
        notifDetail: "2 flat whites · pick-up 08:40",
        statLabel: "Orders this month",
        statValue: "+52%",
      },
      {
        name: "Studio Nora",
        tagline: "Cut, colour and care",
        cta: "Book an appointment",
        notifTitle: "Appointment booked",
        notifDetail: "Cut & colour · Tue 10:30",
        statLabel: "Appointments this month",
        statValue: "+41%",
      },
      {
        name: "Aurora Clinic",
        tagline: "Care that takes its time",
        cta: "Book a consultation",
        notifTitle: "New booking",
        notifDetail: "First consultation · Thu 09:15",
        statLabel: "Bookings this month",
        statValue: "+27%",
      },
      {
        name: "Atelier Vida",
        tagline: "Made by hand, shipped to you",
        cta: "Buy online",
        notifTitle: "New sale",
        notifDetail: "Order #124 · CHF 38",
        statLabel: "Sales this month",
        statValue: "+63%",
      },
      ],
    },
  },

  verticals: {
    eyebrow: "Who we work with",
    headline: "One website. One clear action.",
    sub: "We build for businesses that sell directly to their customers — and we design every page around the one thing a visitor should do next.",
    actionLabel: "Main action",
    items: {
      hospitality: {
        kicker: "Flagship",
        title: "Hospitality",
        examples: "Restaurants, bars, cafés, hotels",
        body: "Where TableFront was born. Menus, hours, location and a reservation flow that keeps the booking — and the guest — yours.",
        action: "Reserve a table",
      },
      beauty: {
        title: "Health & beauty",
        examples: "Salons, barbers, clinics, studios",
        body: "Services, team and prices laid out clearly, with online booking that fills your calendar while you're with a client.",
        action: "Book an appointment",
      },
      shops: {
        title: "Producers & shops",
        examples: "Craft producers, boutiques, online stores",
        body: "A brand site with an online store built in — product pages, checkout and shipping, so you sell directly instead of through marketplaces.",
        action: "Buy online",
      },
    },
  },

  pains: {
    eyebrow: "What a weak website costs",
    headline: "The silent problems draining your business.",
    sub: "An outdated site doesn't fail loudly. It just quietly works against you — in this order.",
    items: [
      {
        title: "Reputation",
        body: "Customers judge your work by your website before they ever walk in. A slow, dated site sends them to the competitor who looks sharper online — even when you're better.",
        note: "First impressions now happen on a phone screen, not at your door.",
      },
      {
        title: "Money",
        body: "Every customer who books or buys through a platform costs you commission. Every customer who gives up on a clunky site costs you the whole sale. Direct business is the cheapest revenue you'll ever earn.",
        note: "Run your own numbers with the calculator below.",
      },
      {
        title: "Time",
        body: "Chasing phone bookings, re-uploading price lists, wrestling a site builder at midnight — hours every week that belong with your customers, not in your browser.",
        note: "Your website should work shifts for you, not the other way around.",
      },
      {
        title: "Risk",
        body: "If Google can't read your site properly, you don't exist for new customers. One competitor with a faster, better-ranked site can drain your quiet days before you notice.",
        note: "Online visibility is rented daily — and someone else is bidding.",
      },
    ],
  },

  calculator: {
    eyebrow: "Run your numbers",
    headline: "What is your current website costing you?",
    sub: "Your numbers, simple maths, every assumption adjustable. An honest estimate — not a scare tactic.",
    coversLabel: "Customers per month",
    ticketLabel: "Average spend per customer",
    assumptionsToggle: "Adjust the assumptions",
    assumption1Label: "Customers who check your website before choosing",
    assumption2Label: "Of those, share a poor first impression turns away",
    resultLabel: "Estimated revenue at risk every month",
    perYearPrefix: "that's roughly",
    perYearSuffix: "a year",
    disclaimer:
      "An illustrative estimate, not a promise — it simply applies the assumptions above (which you control) to your own numbers.",
    cta: "Get a free prototype instead",
  },

  process: {
    eyebrow: "The process",
    headline: "From outdated to live in seven days.",
    steps: [
      {
        title: "Discovery",
        body: "One call. We learn your business, your customers, and what your current online presence is costing you — and agree exactly what the new site must do.",
      },
      {
        title: "Design",
        body: "We design around your brand and your offer — a site that looks the way your business feels, built to turn lookers into bookings, orders or sales.",
      },
      {
        title: "Build",
        body: "Booking, ordering or checkout, local SEO, multilingual if your customers need it — assembled mobile-first and tested on real phones.",
      },
      {
        title: "Handover",
        body: "Live on day seven. We train your team, hand over the keys, and stay on for 30 days of support.",
      },
    ],
    cta: "Start with a free call",
  },

  latestProject: {
    eyebrow: "Latest project",
    eyebrowPlural: "Latest projects",
    headline: "Recent work, live and selling.",
    sub: "Real businesses, real sites, real customers — have a look around before you decide.",
    visit: "Visit the live site",
    projects: {
      aconchego: {
        blurb: "A craft gin from the Algarve — brand website with a built-in online store, so every bottle sells directly.",
        tags: ["Website", "Online store", "Producers & shops"],
      },
    },
  },

  founder: {
    eyebrow: "Why we exist",
    headline: "We didn't study hospitality. We grew up in it.",
    p1: "Daniel grew up in his mother's restaurant — homework at the corner table, service on the weekends. More than ten years of working hospitality followed.",
    p2: "TableFront was born there: good restaurants losing guests to bad websites, and agencies charging them for sites that looked pretty but booked nothing. The same thing happens to salons, clinics and small producers every day — so now we build for all of them.",
    quote: "A website has one job: get the customer to act. Everything else is decoration.",
    quoteAttribution: "Daniel Bota, founder",
  },

  plans: {
    eyebrow: "Pricing",
    headline: "Clear prices, fixed per market.",
    sub: "Every package includes a custom, mobile-first site built around one clear action and live in 7 days. Shown in CHF or EUR — switch anytime.",
    oneTimeTitle: "One-time builds",
    oneTimeSub: "Pay once. You own the site.",
    monthlyTitle: "Monthly partnerships",
    monthlySub: "We host, maintain and update it for you.",
    perMonth: "/mo",
    oneTime: "one-time",
    recommended: "Recommended",
    items: {
      essencial: {
        label: "Essential",
        tagline: "The essentials, done properly.",
        features: [
          "One-page custom design, mobile-first",
          "One clear action: book, order or buy",
          "Google Maps, hours & click-to-call",
          "Basic SEO setup",
          "Live in 7 days",
        ],
      },
      profissional: {
        label: "Professional",
        tagline: "A full site that works for you every day.",
        features: [
          "Multi-page custom design",
          "Booking or appointment integration",
          "Local SEO setup & analytics",
          "Multilingual-ready",
          "30 days post-launch support",
        ],
      },
      loja: {
        label: "Online Store",
        tagline: "Brand site and online store in one.",
        features: [
          "Everything in Professional",
          "Online store with product pages",
          "Checkout, payments & shipping setup",
          "Stock & order notifications",
          "Training on managing your store",
        ],
      },
      mensalEssencial: {
        label: "Monthly Essential",
        tagline: "Keep it fast, safe and up to date.",
        features: [
          "Hosting & security updates",
          "Ongoing maintenance & fixes",
          "Small content edits every month",
          "Email support",
        ],
      },
      mensalProfissional: {
        label: "Monthly Professional",
        tagline: "Everything handled — including bookings.",
        features: [
          "Everything in Monthly Essential",
          "Reservations included for hospitality",
          "Monthly content & price updates",
          "Priority support",
          "Quarterly performance report",
        ],
      },
    },
    cta: "Book a free call",
    ctaSecondary: "See full pricing",
    note: "Fixed prices per market, shown in CHF or EUR. 7-day build from materials received. No hidden fees.",
  },

  guarantee: {
    eyebrow: "Our promise",
    headline: "If it doesn't work for you, you don't pay for it.",
    body: "Every monthly partnership includes a 30-day money-back guarantee: if the new site isn't doing its job in the first month, you get a full refund. We'd rather carry the risk than have you carry the doubt.",
    points: ["30 days, full refund", "No fine print", "We carry the risk"],
    cta: "See plans & pricing",
  },

  team: {
    eyebrow: "The people behind it",
    headline: "Led by people who've worked the floor.",
    sub: "We didn't come from agencies. We came from hospitality.",
    members: [
      {
        name: "Daniel Bota",
        role: "CEO & Lead Developer",
        bio: "Daniel spent 10+ years working in hospitality before building TableFront — he knows firsthand what a broken website costs a business.",
        imageAlt: "Portrait of Daniel Bota",
      },
      {
        name: "Devin Kabay",
        role: "Sales Manager",
        bio: "With a Hotel Management degree and 7+ years on the floor, Devin brings real service instinct to every client conversation — making sure the right businesses find TableFront.",
        imageAlt: "Portrait of Devin Kabay",
      },
    ],
  },

  faq: {
    eyebrow: "Questions, answered",
    headline: "Everything owners ask us before saying yes.",
    items: [
      {
        q: "How much does a website cost?",
        a: "Transparent pricing: one-time builds start at €490 / CHF 790, monthly partnerships at €39 / CHF 69 per month. Every price is public on our pricing page — no \"request a quote\" games.",
      },
      {
        q: "I already have a website. Why change it?",
        a: "If it loads slowly, looks dated on a phone, or doesn't bring in bookings, orders or sales, it's quietly costing you more than a rebuild would. Send us your address and we'll build you a free prototype of what it could be — judge with your own eyes, zero commitment.",
      },
      {
        q: "How can you build it in 7 days?",
        a: "We build around three proven site types — reserve, book, buy — so we never start from zero: structure, performance and SEO are baked in, and one structured intake form collects everything in a single pass. Seven days counts from the moment we have your materials.",
      },
      {
        q: "What do I need to provide?",
        a: "Your logo, photos, your menu, services or products, and opening hours — collected once through one form, with simple share links instead of email chains. No good photos? We'll talk through options on the call.",
      },
      {
        q: "Do I own the website?",
        a: "On a one-time build: yes, fully — the site and the content are yours. On monthly partnerships we host, maintain and update it for you while the partnership runs.",
      },
      {
        q: "What happens when my prices or offer change?",
        a: "Monthly partnerships include content and price updates. On a one-time build you can pay per update — your choice, no lock-in.",
      },
      {
        q: "Do you only work in Switzerland and Portugal?",
        a: "No — we build for businesses worldwide, in the languages your customers speak. Our own site runs in English, German, Portuguese and French, with pricing in CHF or EUR.",
      },
      {
        q: "What if I'm not happy with the result?",
        a: "Monthly partnerships include a 30-day money-back guarantee — full refund, no fine print. Every project includes at least 30 days of post-launch support.",
      },
    ],
  },

  prototype: {
    eyebrow: "Free prototype",
    headline: "See your new website before you spend anything.",
    sub: "Leave your current website (or just your business name) and your email. We'll send you a free homepage prototype of what TableFront would build — no obligation, and the ideas are yours to keep either way.",
    siteLabel: "Your website or business name",
    sitePlaceholder: "yourbusiness.com",
    emailLabel: "Your email",
    emailPlaceholder: "you@yourbusiness.com",
    submit: "Send me my free prototype",
    sending: "Sending…",
    successTitle: "Request received.",
    successBody: "A real human will reply — usually within one business day.",
    errorBody: "Something went wrong sending the form. Please try again, or book a free call instead.",
    privacyNote: "We use your details only to prepare and send your prototype. No newsletter, no spam.",
  },

  finalCta: {
    headline: "Your customers are searching for you right now.",
    sub: "Be the business they find — and the one they book, order from or buy from.",
    ctaPrimary: "Book your free call",
    ctaSecondary: "Get a free prototype",
    note: "30-minute call · No commitment · Live in 7 days",
  },

  footer: {
    tagline:
      "Websites that turn visitors into bookings, orders and sales. Born in hospitality — built for every business that sells to customers.",
    navTitle: "Navigation",
    startTitle: "Get started",
    legalTitle: "Legal",
    linkHow: "How it works",
    linkWork: "Our work",
    linkStory: "Our story",
    linkFaq: "FAQ",
    linkPricing: "Pricing",
    linkCall: "Book a call",
    linkPrototype: "Free prototype",
    linkLegal: "Privacy & legal notice",
    rights: "© 2026 TableFront · All rights reserved",
    homeLabel: "TableFront — home",
  },

  pricing: {
    eyebrow: "Website packages",
    headline1: "A website that works",
    headline2: "as hard as you do.",
    sub: "Every package includes a custom, mobile-first site live in 7 days — built around the one action your customers should take. Prices are public and fixed per market.",
    strip: [
      "Custom mobile-first design",
      "7-day delivery",
      "One clear action",
      "Local SEO setup",
      "30-day support",
      "Training & handover",
    ],
    exitTitle: "Found your plan?",
    exitSub: "Mention it on the call — we hold these prices.",
    exitCall: "Book a free call",
    exitPrototype: "Get a free prototype first",
    note: "Fixed prices per market, shown in CHF or EUR — switch anytime. 7-day build from materials received. No hidden fees.",
    note2: "Final scope confirmed on your free call, once we understand your business.",
  },

  legal: {
    title: "Privacy & Legal Notice",
    updated: "Last updated: November 2026",
    sections: [
      {
        h: "Who we are",
        p: "TableFront builds websites for businesses that sell directly to customers — hospitality, health & beauty, and small producers and shops. The service is operated from Switzerland and Portugal and offered worldwide. You can reach us through the prototype form on the homepage or by booking a call.",
      },
      {
        h: "What data we collect",
        p: "When you submit a form on this site (free prototype request or project intake), we receive the details you enter — such as your email address, your website address and the content you provide. Submissions are delivered to our inbox via Web3Forms, a form delivery service, and are used solely to respond to your request.",
      },
      {
        h: "Analytics",
        p: "We use Vercel Analytics to understand aggregate site usage. It is cookieless and does not track you across sites or build personal profiles.",
      },
      {
        h: "Scheduling",
        p: "Calls are booked through Calendly. When you book, Calendly processes the details you enter under its own privacy policy.",
      },
      {
        h: "Hosting",
        p: "This site is hosted on Vercel. Technical data such as IP addresses may be processed in server logs to deliver the site securely.",
      },
      {
        h: "No marketing",
        p: "We do not send newsletters, share your data with third parties for marketing, or use advertising trackers.",
      },
      {
        h: "Your rights",
        p: "Under Swiss data protection law (revFADP) and, where applicable, the GDPR, you can request access to, correction of, or deletion of your personal data at any time — just write to us through the contact options above.",
      },
    ],
  },

  notFound: {
    headline: "This page isn't open yet.",
    body: "The page you're looking for doesn't exist or has moved.",
    cta: "Back to the homepage",
  },
}

export type Dictionary = typeof en

export default en
