import business from "./business.en"

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
        "Transparent website pricing: one-time builds from €490 / CHF 790, monthly partnerships from €49 / CHF 79. Fixed per market, no hidden fees, 7-day delivery.",
    },
    reservations: {
      title: "Restaurants — Commission-free table bookings on your own website",
      description: "TableFront Reservations: a commission-free booking widget for restaurants and cafés, with confirmation and reminder emails, a live floor map and a day view for your team. Included in the Monthly Professional plan, or on its own for an existing website.",
    },
    legal: {
      title: "Privacy & Legal Notice",
      description: "How TableFront handles your data, and who is behind the site.",
    },
  },

  nav: {
    business: "For your business",
    how: "How it works",
    work: "Our work",
    pricing: "Pricing",
    bookCall: "Book a free call",
    login: "Log in",
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
    headline2: "into customers.",
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
        notifDetail: "Order #124 · €38",
        statLabel: "Sales this month",
        statValue: "+63%",
      },
      ],
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
    explainTitle: "How we get this number",
    explainStep1: "customers a month, by your estimate above",
    explainStep2: "check your website before deciding",
    explainStep3: "leave when it loads slow or looks dated",
    explainStep4: "in bookings, orders and sales lost — every month",
    explainBreakdown: "{lost} customers × {ticket} average spend",
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
    monthlySub: "The site, hosting and maintenance in one monthly fee, on a 12-month contract. Or take just the booking platform.",
    perMonth: "/mo",
    oneTime: "one-time",
    recommended: "Recommended",
    contract: "12-month contract",
    platformsNote: "Which booking platform you get depends on your business:",
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
        tagline: "Keep it fast, safe and online.",
        features: [
          "Hosting & security updates",
          "Ongoing maintenance & fixes",
          "Email support",
        ],
      },
      mensalProfissional: {
        label: "Monthly Professional",
        tagline: "Everything handled — including bookings.",
        features: [
          "Everything in Monthly Essential",
          "Booking platform included: tables, stays or appointments",
          "Priority support",
          "Quarterly performance report",
        ],
      },
      reservas: {
        label: "Reservations only",
        tagline: "The booking platform, without the website.",
        features: [
          "Booking widget on your existing site",
          "Confirmation, reminder & cancellation emails",
          "For tables, stays or appointments, each with its own dashboard",
          "Widget & emails in EN · DE · PT · FR",
          "Set up with you, no per-booking fee",
        ],
      },
    },
    cta: "Book a free call",
    ctaSecondary: "See full pricing",
    note: "Fixed prices per market, shown in CHF or EUR. 7-day build from materials received. No hidden fees.",
  },

  pricingSummary: {
    eyebrow: "Pricing",
    headline: "Clear prices, fixed per market.",
    sub: "Three ways to work with us. Every plan, and what it includes, is on the pricing page.",
    from: "from",
    perMonth: "/mo",
    items: {
      oneTime: { title: "One-time build", body: "Pay once. You own the site." },
      monthly: { title: "Monthly partnership", body: "Site, hosting and maintenance in one monthly fee. 12-month contract." },
      platform: { title: "Booking platform only", body: "Table reservations, stays or appointments on the site you already have." },
    },
    cta: "See all plans",
  },

  team: {
    eyebrow: "The people behind it",
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
        a: "Transparent pricing: one-time builds start at €490 / CHF 790, monthly partnerships at €49 / CHF 79 per month. Every price is public on our pricing page — no \"request a quote\" games.",
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
        a: "On a one-time build: yes, fully — the site and the content are yours. On monthly partnerships we host and maintain it for you while the partnership runs. Monthly partnerships run on a 12-month contract.",
      },
      {
        q: "What happens when my prices or offer change?",
        a: "Send us the change and we quote it as a small update — on every plan. Small change, small invoice.",
      },
      {
        q: "Do you only work in Switzerland and Portugal?",
        a: "No — we build for businesses worldwide, in the languages your customers speak. Our own site runs in English, German, Portuguese and French, with pricing in CHF or EUR.",
      },
      {
        q: "What if I'm not happy with the result?",
        a: "Before you commit, you see a free prototype of your homepage, so you know what you are getting. Every project also includes at least 30 days of post-launch support.",
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

  /** Home teaser for the reservation platform (hospitality flagship) — links to /reservations. */

  /** /reservations — the hospitality booking platform (app.tablesfront.com) explained. */
  reservations: {
    eyebrow: "Restaurants, bars & cafés",
    headline1: "Your own reservation system,",
    headline2: "on your own website.",
    sub: "TableFront Reservations is the booking platform we built while running restaurants. It lives on the site we design for you: guests book in seconds, your team runs the room from one screen, and nobody takes a cut.",
    ctaPrimary: "Book a free call",
    ctaSecondary: "See pricing",
    loginHint: "Already a client?",
    loginCta: "Log in to your dashboard",
    strip: [
      "Commission-free",
      "Confirmation & reminder emails",
      "Live floor map",
      "English · German · Portuguese · French",
    ],
    site: {
      headline: "A website built to fill tables.",
      items: [
        { title: "Menu, hours and location", body: "What guests look for first, readable on a phone and easy to keep current." },
        { title: "One clear action: book a table", body: "A booking button on every page, instead of a phone that rings in the middle of service." },
        { title: "Found nearby", body: "Local SEO setup, Google Maps and click-to-call." },
      ],
    },
    video: {
      eyebrow: "Watch",
      headline: "A Friday night, in 47 seconds.",
      sub: "A guest books from her phone, the restaurant hears about it instantly, and the team runs the room from the day view and the floor map.",
      note: "Narrated in Portuguese.",
      label: "TableFront Reservations — presentation video",
    },
    tour: {
      eyebrow: "Try it yourself",
      headline: "Click through a Friday night at Casa Marisa.",
      sub: "A working copy of the widget and the dashboard, with fictional guests. Nothing you do here is saved — go ahead and play.",
      steps: [
        {
          label: "The guest books",
          eyebrow: "Step 1 · For your guests",
          headline: "A table in under a minute.",
          body1: "The widget lives on your restaurant's site, in your colours. The guest picks the day, the party size and the time, and only sees slots that are actually free. No account, nothing to download.",
          body2: "The moment they confirm, they get an email — and so does the restaurant. The day before, a reminder follows, with a link to cancel without calling.",
          tryLabel: "Try it",
          tryText: "Change the day, the party size or the time, then press Reserve a table.",
        },
        {
          label: "Day view",
          eyebrow: "Step 2 · For your team",
          headline: "The whole night on one screen.",
          body1: "The day view brings together online bookings, phone bookings and walk-ins. Each slot shows how many guests it already has and how far it is from the limit you set for online bookings.",
          body2: "As guests arrive, the team taps: Arrived, Seated or No-show.",
          tryLabel: "Try it",
          tryText: "The booking you just made is highlighted. Mark it Arrived, then Seated.",
        },
        {
          label: "Floor map",
          eyebrow: "Step 3 · During service",
          headline: "The floor map, in real time.",
          body1: "With your room drawn in the floor-plan editor, the day view shows every table in the colour of its state: free, reserved, arrived, seated.",
          body2: "A booking without a table? Tap it, then tap a table. Someone walked in? Use Seat guests.",
          tryLabel: "Try it",
          tryText: "Tap a booking marked No table, then a free table. Or press Seat guests.",
        },
      ],
      back: "Back",
      next: ["See the restaurant's side", "See it on the floor map"],
      restart: "Start over",
      restaurant: "Casa Marisa",
      restaurantSub: "Dinner from 18:00, Tuesday to Sunday",
      url: "app.tablesfront.com/day",
      widget: {
        title: "Reserve a table",
        date: "Date",
        guests: "Guests",
        time: "Time",
        name: "Name",
        phone: "Phone",
        book: "Reserve a table",
        guestOne: "guest",
        guestMany: "guests",
        fewer: "One guest fewer",
        more: "One guest more",
        noSlots: "No free slots for a party this size.",
        confirmed: "Booking confirmed!",
        tableFor: "Table for",
        again: "Make another booking",
        days: ["Fri 14 Nov", "Sat 15 Nov", "Sun 16 Nov"],
        defaultName: "Ana Ribeiro",
        defaultPhone: "+351 912 345 678",
      },
      mails: {
        empty: "The emails appear here once you confirm: one to the guest, one to the restaurant.",
        to: "To:",
        now: "just now",
        newTag: "New",
        guestSubject: "Booking confirmed",
        guestBody: "Hi {first}, your table at Casa Marisa is confirmed.",
        at: "at",
        cancelLine: "Need to cancel? Use this link.",
        ownerSubject: "New booking",
        ownerBody: "New online booking for Casa Marisa:",
        ownerManage: "Manage it in your TableFront dashboard.",
        otherDay: "You picked another day: step 2 shows Friday 14 November. To see your booking in the dashboard, book for Fri 14 Nov.",
      },
      dash: {
        nav: ["Day view", "Bookings", "Add booking", "Floor plan", "Settings"],
        dayTitle: "Friday, 14 November",
        today: "Today",
        bookings: "bookings",
        guests: "guests",
        table: "Table",
        arrived: "Arrived",
        seated: "Seated",
        noShow: "No-show",
        walkIn: "Walk-in",
        seatGuests: "Seat guests",
        tonight: "Tonight",
        noTable: "No table",
        zones: ["Dining room", "Terrace"],
        legend: ["Free", "Reserved", "Arrived", "Seated", "No-show"],
        hintWalk: "Now tap a free table to seat {n} walk-in {guests}.",
        hintBooking: "Now tap a table to seat this booking.",
        cancel: "Cancel",
        bar: "BAR",
        room: "DINING ROOM",
        seats: "seats",
        walkInName: "Walk-in",
        seatedAt: "seated at 20:00",
        mapLabel: "Floor map",
      },
      guests: [
        {
          name: "The Costa family",
          note: "birthday",
        },
        {
          name: "João Mendes",
          note: "",
        },
        {
          name: "Sophie Martin",
          note: "",
        },
        {
          name: "Pedro Alves",
          note: "",
        },
        {
          name: "Rita Santos",
          note: "",
        },
        {
          name: "Miguel Faria",
          note: "high chair",
        },
        {
          name: "Inês Duarte",
          note: "",
        },
      ],
      onlineNote: "online",
    },
    team: {
      eyebrow: "For your team",
      headline: "Run the room from one screen.",
      sub: "Everything the host stand needs, nothing it doesn't.",
      features: [
        {
          title: "Every booking in one list",
          body: "Online, phone and walk-in bookings side by side, upcoming and past. Cancel, re-confirm or edit in a tap — the guest is emailed automatically.",
        },
        {
          title: "Day view with live floor map",
          body: "Today's covers at a glance. Mark guests arrived, seated or no-show and watch the tables fill on the map.",
        },
        {
          title: "Your floor plan, drawn by you",
          body: "Draw your own room in the editor — zones, round and square tables with seat counts, the bar, doors and walls — and change it whenever you like. Join tables for large parties.",
        },
        {
          title: "Your rules, your capacity",
          body: "Opening hours per day, slot interval, turn time and how many covers you accept online per slot. Phone bookings can always go on top.",
        },
        {
          title: "You hear about it first",
          body: "An email for every new online booking and every cancellation, so the team is never surprised.",
        },
        {
          title: "Four languages, automatically",
          body: "The widget follows the guest's browser language — English, German, Portuguese or French — and falls back to yours.",
        },
      ],
    },
    own: {
      eyebrow: "Why not a marketplace",
      headline: "Your guests, your data, no commission.",
      points: [
        {
          title: "Nothing per cover",
          body: "Booking platforms charge per guest or per month — for guests who were already yours. Here nothing is charged per guest: it is part of your website plan, or one flat monthly price on its own.",
        },
        {
          title: "Guests stay on your site",
          body: "No redirect to a third-party page full of competitors. The booking happens on your domain, in your design.",
        },
        {
          title: "The list is yours",
          body: "Names, phone numbers, visits and notes live in your dashboard — not in someone else's marketing database.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      headline: "Two ways to get it.",
      included: {
        badge: "Recommended",
        title: "Included in Monthly Professional",
        body: "For hospitality clients on the Monthly Professional partnership, reservations come with the site: we host and maintain your website, set up the widget and walk you through the floor-plan editor. One monthly fee, no setup fee for the platform, no per-booking charge.",
      },
      standalone: {
        title: "Or the platform on its own",
        body: "Already have a website, or prefer to buy your site once instead of a subscription? Take just the reservation platform: the same widget, dashboard and emails, added to your existing site with a single line of code. We still set it up with you.",
      },
      perMonth: "per month",
      cta: "See all plans",
    },
    setup: {
      eyebrow: "Good to know",
      items: [
        {
          title: "We set it up for you",
          body: "There is no self-service sign-up. We create your restaurant, configure hours and capacity with you and embed the widget on launch day.",
        },
        {
          title: "One line of code, anywhere",
          body: "The widget also drops into an existing website with a single script tag, if you are not ready for a redesign yet.",
        },
        {
          title: "Email, not SMS",
          body: "Confirmations, reminders and cancellations go out by email. Guests who need to change a booking cancel with their link and rebook, or call you.",
        },
      ],
    },
    exitTitle: "Want to see it running on a real restaurant?",
    exitSub: "Book a call and we'll walk you through the dashboard and the widget.",
    exitCall: "Book a free call",
    exitPricing: "See pricing",
  },

  footer: {
    tagline:
      "Websites that turn visitors into bookings, orders and sales. Born in hospitality — built for every business that sells to customers.",
    navTitle: "Navigation",
    businessTitle: "For your business",
    startTitle: "Get started",
    legalTitle: "Legal",
    linkHow: "How it works",
    linkWork: "Our work",
    linkStory: "Our story",
    linkFaq: "FAQ",
    linkPricing: "Pricing",
    linkCall: "Book a call",
    linkPrototype: "Free prototype",
    linkLogin: "Reservations log in",
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

  business,

  notFound: {
    headline: "This page isn't open yet.",
    body: "The page you're looking for doesn't exist or has moved.",
    cta: "Back to the homepage",
  },
}

export type Dictionary = typeof en

export default en
