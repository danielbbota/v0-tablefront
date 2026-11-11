/**
 * Copy for the business chooser and the business pages (stays, health &
 * beauty, shops). The restaurants page keeps its copy in `reservations`.
 * Claims about the booking platforms must match what the app really does:
 * no SMS, no online payment, no self-serve sign-up, calendar sync by iCal.
 */
const business = {
  labels: {
    restaurants: "Restaurants, bars & cafés",
    stays: "Hotels & stays",
    beauty: "Health & beauty",
    shops: "Producers & shops",
  },

  chooser: {
    eyebrow: "Find your business",
    headline: "What kind of business do you run?",
    sub: "Choose yours to see the website we build for it, and the booking platform that comes with it.",
    platformLabel: "Comes with",
    cta: "See how it works",
    items: {
      restaurants: {
        examples: "Restaurants, bars, cafés",
        body: "Menu, opening hours and location, with table reservations on your own site and a live floor map for your team.",
        platform: "Table reservations",
      },
      stays: {
        examples: "Hotels, guesthouses, holiday rentals",
        body: "Rooms, photos and prices, with direct bookings on your own site and a calendar that reads Airbnb and Booking.com.",
        platform: "Stay bookings",
      },
      beauty: {
        examples: "Salons, barbers, clinics, studios",
        body: "Services, team and prices laid out clearly, with online appointments that fill your diary while you are with a client.",
        platform: "Appointments",
      },
      shops: {
        examples: "Craft producers, boutiques, online stores",
        body: "A brand site with a built-in online shop: product pages, checkout and shipping, so you sell direct.",
        platform: "Online shop",
      },
    },
  },

  common: {
    siteEyebrow: "Your website",
    getEyebrow: "Pricing",
    featuresEyebrow: "What's included",
    recommended: "Recommended",
    perMonth: "per month",
    oneTime: "one-time",
    contract: "12-month contract",
    pricingCta: "See all plans",
    ctaCall: "Book a free call",
    ctaPrototype: "Get a free prototype",
    loginHint: "Already a client?",
    loginCta: "Log in to your dashboard",
    exitCall: "Book a free call",
    exitPricing: "See pricing",
    otherTitle: "Not your kind of business?",
  },

  pages: {
    stays: {
      meta: {
        title: "Hotels & stays — Direct bookings on your own website",
        description:
          "Websites for hotels, guesthouses and holiday rentals with TableFront Stays: guests book direct on your site, with a calendar per unit, seasonal prices and calendar sync with Airbnb, Booking.com and Vrbo.",
      },
      eyebrow: "Hotels, guesthouses & holiday rentals",
      headline1: "Direct bookings,",
      headline2: "on your own website.",
      sub: "A website that shows your rooms properly, and a booking platform that lets guests reserve them on the spot. Your calendar reads Airbnb and Booking.com, so dates taken there are closed on your site too.",
      strip: [
        "No commission on direct bookings",
        "A calendar per unit",
        "Syncs with Airbnb, Booking.com & Vrbo",
        "English · German · Portuguese · French",
      ],
      site: {
        headline: "A website built to get the booking.",
        items: [
          {
            title: "Rooms that explain themselves",
            body: "Every room or apartment with its photos, what is included, how many it sleeps and its price.",
          },
          {
            title: "One clear action: book",
            body: "Dates and guests in, free units and the total price out. No enquiry form, no waiting for a reply.",
          },
          {
            title: "Found and understood",
            body: "Local SEO setup, fast on phones, and in the languages your guests speak.",
          },
        ],
      },
      platform: {
        eyebrow: "TableFront Stays",
        headline: "From dates to a confirmed stay, in a minute.",
        sub: "Guests pick their dates and the number of guests, see what is free with the total price, and reserve. No account, nothing to download.",
        features: [
          {
            title: "A calendar per unit",
            body: "Every room or apartment on one calendar: who arrives and leaves today, what is occupied tonight, and a warning if two reservations overlap.",
          },
          {
            title: "In step with Airbnb, Booking.com and Vrbo",
            body: "Paste each channel's calendar link and its reservations block your dates here. Give the channel your TableFront link and your direct bookings block it there. Channel calendars are read again before a direct booking is confirmed.",
          },
          {
            title: "Your prices, by season",
            body: "A price per night and a cleaning fee for each unit, plus date ranges with their own price and minimum stay.",
          },
          {
            title: "Phone bookings and blocked dates",
            body: "Add reservations taken by phone or at the desk, block dates for maintenance or your own use, and mark guests as checked in, checked out or no-show.",
          },
          {
            title: "Emails that do the chasing",
            body: "A confirmation at once, a reminder the day before with your check-in time, and a link to cancel without calling. You get an email for every new booking and every cancellation.",
          },
          {
            title: "Four languages, automatically",
            body: "The widget and the emails follow the guest's language: English, German, Portuguese or French.",
          },
        ],
      },
      own: {
        eyebrow: "Why take bookings direct",
        headline: "Your guests, your rates, no commission.",
        points: [
          {
            title: "Nothing per booking",
            body: "The platform has a fixed monthly price, or comes inside your website plan. We take nothing per night or per guest.",
          },
          {
            title: "Guests stay on your site",
            body: "The booking happens on your domain, in your design, not on a page full of other places to stay.",
          },
          {
            title: "The channels keep working",
            body: "You do not have to leave Airbnb or Booking.com. Their reservations show on the same calendar as your direct ones.",
          },
        ],
      },
      get: {
        headline: "Two ways to have it.",
        plans: [
          {
            title: "Included in Monthly Professional",
            body: "Your website and the stays platform together: we build, host and maintain the site, set up your units and prices with you and connect your channel calendars. One monthly fee, no charge per booking.",
          },
          {
            title: "Or the platform only",
            body: "Already have a website, or prefer to buy your site outright? Take only the stays platform: the same widget, calendar and emails, added to your current site with one line of code.",
          },
        ],
      },
      setup: {
        eyebrow: "Good to know",
        items: [
          {
            title: "We set it up for you",
            body: "There is no self-service sign-up. We create your property, add units and prices with you and place the widget on launch day.",
          },
          {
            title: "Calendar sync is not instant",
            body: "Channels share dates only and read calendars every few hours, so the sync works by calendar link, not live. Overlaps are flagged on your calendar, never hidden.",
          },
          {
            title: "Payment at the property",
            body: "Guests reserve online and pay you directly. Confirmations, reminders and cancellations go by email, not SMS.",
          },
        ],
      },
      exitTitle: "Want to see it with your own rooms?",
      exitSub: "Book a call and we will walk you through the calendar and the widget.",
      mock: {
        widgetTitle: "Book your stay",
        checkIn: "Check-in",
        checkOut: "Check-out",
        guests: "Guests",
        checkInValue: "Fri 14 Nov",
        checkOutValue: "Mon 17 Nov",
        guestsValue: "2 guests",
        units: [
          { name: "Garden room", meta: "Sleeps 2 · 3 nights", price: "€330" },
          { name: "Sea view suite", meta: "Sleeps 4 · 3 nights", price: "€480" },
        ],
        button: "Reserve",
        confirmed: "Booking confirmed!",
        confirmedSub: "Garden room · 14–17 Nov",
        calendarTitle: "November",
        calendarMeta: "3 units",
        calendarUnits: ["Garden room", "Sea view suite", "Studio"],
        legend: ["Direct", "Airbnb", "Booking.com"],
      },
    },

    beauty: {
      meta: {
        title: "Health & beauty — Online appointments on your own website",
        description:
          "Websites for salons, barbers, clinics and studios with TableFront Appointments: clients choose a service, a professional and a time on your site, and your team works from one day calendar.",
      },
      eyebrow: "Salons, barbers, clinics & studios",
      headline1: "A full diary,",
      headline2: "booked on your own website.",
      sub: "A website that presents your services, team and prices clearly, and an appointments platform that lets clients book the right person at the right time, while you are busy with someone else.",
      strip: [
        "No commission per appointment",
        "A calendar per professional",
        "Confirmation & reminder emails",
        "English · German · Portuguese · French",
      ],
      site: {
        headline: "A website built to fill the diary.",
        items: [
          {
            title: "Services and prices, clear",
            body: "What you offer, how long it takes and what it costs, so clients arrive knowing what they booked.",
          },
          {
            title: "One clear action: book",
            body: "A booking button on every page, instead of a phone that rings while your hands are full.",
          },
          {
            title: "Found nearby",
            body: "Local SEO setup, your hours and your location, fast on phones.",
          },
        ],
      },
      platform: {
        eyebrow: "TableFront Appointments",
        headline: "Service, professional, time. Booked.",
        sub: "Clients choose a service, pick a professional or leave it to you, and see only the times that are really free. No account, nothing to download.",
        features: [
          {
            title: "A day calendar per professional",
            body: "Everyone's day side by side, with the number of appointments and the expected revenue. Mark clients as arrived, completed or no-show.",
          },
          {
            title: "Services with real durations",
            body: "Each service has its category, duration and price, plus time after it for clearing up, so the diary leaves the gaps you need.",
          },
          {
            title: "A team with its own hours",
            body: "Set which services each person does, their working hours and their time off. Clients who choose any professional go to whoever is least busy.",
          },
          {
            title: "Phone and walk-in bookings too",
            body: "Add appointments from the dashboard, even outside opening hours, and find any client by name.",
          },
          {
            title: "Emails that do the reminding",
            body: "A confirmation at once, a reminder the day before and a link to cancel without calling. You get an email for every new booking and every cancellation.",
          },
          {
            title: "Four languages, automatically",
            body: "The widget and the emails follow the client's language: English, German, Portuguese or French.",
          },
        ],
      },
      own: {
        eyebrow: "Why not a booking marketplace",
        headline: "Your clients, your diary, no commission.",
        points: [
          {
            title: "Nothing per appointment",
            body: "The platform has a fixed monthly price, or comes inside your website plan. We take nothing per booking or per client.",
          },
          {
            title: "Clients stay on your site",
            body: "They book on your domain, in your design, not on a listing next to the salon down the road.",
          },
          {
            title: "The client list is yours",
            body: "Names, phone numbers and appointments stay in your dashboard, not in someone else's marketing database.",
          },
        ],
      },
      get: {
        headline: "Two ways to have it.",
        plans: [
          {
            title: "Included in Monthly Professional",
            body: "Your website and the appointments platform together: we build, host and maintain the site and set up your services, team and hours with you. One monthly fee, no charge per booking.",
          },
          {
            title: "Or the platform only",
            body: "Already have a website, or prefer to buy your site outright? Take only the appointments platform: the same widget, calendar and emails, added to your current site with one line of code.",
          },
        ],
      },
      setup: {
        eyebrow: "Good to know",
        items: [
          {
            title: "We set it up for you",
            body: "There is no self-service sign-up. We add your services, team and hours with you and place the widget on launch day.",
          },
          {
            title: "One line of code, anywhere",
            body: "The widget also drops into an existing website with a single script tag, if you are not ready for a redesign.",
          },
          {
            title: "Email, not SMS",
            body: "Confirmations, reminders and cancellations go by email. Clients pay you at the appointment.",
          },
        ],
      },
      exitTitle: "Want to see it with your own services?",
      exitSub: "Book a call and we will show you the calendar and the widget.",
      mock: {
        widgetTitle: "Book an appointment",
        service: "Service",
        services: [
          { name: "Cut & colour", meta: "90 min · €85" },
          { name: "Men's cut", meta: "30 min · €25" },
        ],
        professional: "Professional",
        professionals: ["Any", "Nora", "Tiago"],
        time: "Tue 18 Nov",
        slots: ["09:30", "10:00", "10:30", "11:00"],
        button: "Book appointment",
        confirmed: "Appointment booked!",
        confirmedSub: "Cut & colour · Tue 10:30 · Nora",
        agendaTitle: "Tuesday",
        agendaMeta: "9 appointments",
        columns: ["Nora", "Tiago"],
        blocks: ["Cut & colour", "Blow-dry", "Men's cut", "Beard", "Colour"],
      },
    },

    shops: {
      meta: {
        title: "Producers & shops — A brand website with your own online shop",
        description:
          "Websites for craft producers, boutiques and small shops: a brand site with a built-in online shop, product pages, checkout and shipping, so you sell direct instead of through marketplaces.",
      },
      eyebrow: "Craft producers, boutiques & online stores",
      headline1: "Sell direct,",
      headline2: "from your own website.",
      sub: "A brand website and an online shop in one: your story, your products and a checkout that works on a phone. The customer buys from you, on your own domain.",
      strip: [
        "Brand site and shop in one",
        "Checkout, payments & shipping",
        "Stock & order notifications",
        "Training to run it yourself",
      ],
      site: {
        headline: "A website built to make the sale.",
        items: [
          {
            title: "Your brand first",
            body: "The story, the people and the place behind the product, in a design that looks like you and not like a template.",
          },
          {
            title: "One clear action: buy",
            body: "From product page to checkout in a few taps, without sending the customer to another site.",
          },
          {
            title: "Found by the right people",
            body: "Local SEO setup and analytics, ready for more than one language.",
          },
        ],
      },
      platform: {
        eyebrow: "The online shop",
        headline: "What a small shop needs, and nothing it does not.",
        sub: "Built into your site, in the same design, so the shop feels like part of the brand.",
        features: [
          {
            title: "Product pages",
            body: "Photos, description and price for every product, laid out to sell.",
          },
          {
            title: "Checkout and payments",
            body: "A checkout set up with your payment methods and tested on real phones.",
          },
          {
            title: "Shipping, set up",
            body: "Your delivery options and costs configured with you before launch.",
          },
          {
            title: "Stock and order notifications",
            body: "You hear about every order as it arrives, and about stock before it runs out.",
          },
          {
            title: "Training to run your shop",
            body: "We show you how to add products, change prices and handle orders, so you do not depend on us.",
          },
          {
            title: "Everything in Professional",
            body: "Custom multi-page design, local SEO and analytics, multilingual-ready, and 30 days of support after launch.",
          },
        ],
      },
      own: {
        eyebrow: "Why sell direct",
        headline: "Your customers, your brand, your shop.",
        points: [
          {
            title: "No marketplace in between",
            body: "Customers buy from you, on your domain, not from a listing with a competitor one click away.",
          },
          {
            title: "The customer list is yours",
            body: "Orders and contacts stay with you, so you can bring customers back.",
          },
          {
            title: "Already selling for a real producer",
            body: "Aconchego, an artisanal gin from the Algarve, runs on a brand site with a built-in shop that we built. It is on the homepage, under our work.",
          },
        ],
      },
      get: {
        headline: "One price. The shop is yours.",
        plans: [
          {
            title: "Online Store",
            body: "A one-time build: brand site, shop, checkout, payments and shipping, with training. The site and its content are yours. Later content changes are quoted per update.",
          },
        ],
      },
      setup: {
        eyebrow: "Good to know",
        items: [
          {
            title: "What we need from you",
            body: "Your logo, photos, product list with prices and your delivery options, collected once through a single form.",
          },
          {
            title: "Live in 7 days",
            body: "Counted from the day we have your materials.",
          },
          {
            title: "After launch",
            body: "30 days of support are included. After that, changes are quoted per update: small change, small invoice.",
          },
        ],
      },
      exitTitle: "Want to see your products in a shop of your own?",
      exitSub: "Book a call, or ask for a free prototype first.",
      mock: {
        shopName: "Atelier Vida",
        products: [
          { name: "Hand-poured candle", price: "€24" },
          { name: "Linen apron", price: "€38" },
        ],
        add: "Add to basket",
        basket: "Basket",
        basketMeta: "2 items · €62",
        checkout: "Checkout",
        toastTitle: "New order",
        toastDetail: "Order #124 · €62",
        ordersTitle: "Orders today",
        orders: [
          { id: "#124", status: "Paid" },
          { id: "#123", status: "Shipped" },
          { id: "#122", status: "Shipped" },
        ],
      },
    },
  },
}

export type BusinessDict = typeof business

export default business
