import type { Dictionary } from "./en"

const de: Dictionary = {
  meta: {
    home: {
      title: "TableFront — Webseiten, die aus Besuchern Buchungen, Bestellungen und Verkäufe machen",
      description:
        "Webseiten für Unternehmen, die direkt an Kunden verkaufen — Gastronomie, Gesundheit & Beauty, Produzenten und Shops. Eine klare Aktion: buchen, bestellen oder kaufen. Live in 7 Tagen, Gratis-Prototyp zuerst.",
    },
    pricing: {
      title: "Preise — Fixe Website-Pakete, angezeigt in CHF oder EUR",
      description:
        "Transparente Website-Preise: einmaliger Aufbau ab CHF 790 / €490, monatliche Partnerschaften ab CHF 69 / €39. Fix pro Markt, keine versteckten Gebühren, Lieferung in 7 Tagen.",
    },
    reservations: {
      title: "Reservierungen — Provisionsfreie Tischreservierungen auf Ihrer eigenen Website",
      description: "TableFront Reservierungen: ein provisionsfreies Buchungs-Widget für Restaurants und Cafés, mit Bestätigungs- und Erinnerungs-E-Mails, Live-Tischplan und Tagesansicht für Ihr Team. Im Plan Monatlich Professional enthalten.",
    },
    legal: {
      title: "Datenschutz & Impressum",
      description: "Wie TableFront mit Ihren Daten umgeht — und wer hinter der Seite steht.",
    },
  },

  nav: {
    why: "Warum TableFront",
    how: "Ablauf",
    work: "Referenzen",
    story: "Geschichte",
    faq: "FAQ",
    pricing: "Preise",
    reservations: "Reservierungen",
    bookCall: "Gratis-Gespräch",
    getPrototype: "Gratis-Prototyp",
    languageLabel: "Sprache",
    currencyLabel: "Währung",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schliessen",
    backHome: "Zurück",
    homeLabel: "TableFront — Startseite",
    mainNavLabel: "Hauptnavigation",
  },

  hero: {
    /** Rendered as "{eyebrowPrefix} {cycling label}" — the labels rotate with a CSS-only animation. */
    eyebrowPrefix: "Webseiten für",
    verticals: ["Restaurants", "Cafés", "Salons", "Praxen", "Shops"],
    headline1: "Webseiten, die aus Besuchern",
    headline2: "Buchungen, Bestellungen und Verkäufe machen.",
    sub: "In der Gastronomie geboren — gebaut für jedes Unternehmen, das an Kunden verkauft.",
    ctaPrimary: "Kostenloses Gespräch buchen",
    ctaSecondary: "Gratis-Prototyp erhalten",
    trust: "Live in 7 Tagen · Eine klare Aktion · Aus der Praxis gebaut",
    showcase: {
      ariaLabel: "Eine Kundenwebsite auf einem Smartphone erhält eine Reservierung, eine Bestellung, einen Termin und einen Verkauf, daneben steigt ein Diagramm.",
      items: [
      {
        name: "Casa Marisa",
        tagline: "Abendessen ab 18:00, Dienstag bis Sonntag",
        cta: "Tisch reservieren",
        notifTitle: "Neue Reservierung",
        notifDetail: "Tisch für 4 · Fr 20:00",
        statLabel: "Reservierungen diesen Monat",
        statValue: "+38%",
      },
      {
        name: "Café Lumen",
        tagline: "Diese Woche geröstet, heute gebrüht",
        cta: "Vorbestellen",
        notifTitle: "Neue Bestellung",
        notifDetail: "2 Flat White · Abholung 08:40",
        statLabel: "Bestellungen diesen Monat",
        statValue: "+52%",
      },
      {
        name: "Studio Nora",
        tagline: "Schnitt, Farbe und Pflege",
        cta: "Termin buchen",
        notifTitle: "Termin gebucht",
        notifDetail: "Schnitt & Farbe · Di 10:30",
        statLabel: "Termine diesen Monat",
        statValue: "+41%",
      },
      {
        name: "Praxis Aurora",
        tagline: "Zeit für Ihre Gesundheit",
        cta: "Beratung buchen",
        notifTitle: "Neue Buchung",
        notifDetail: "Erstgespräch · Do 09:15",
        statLabel: "Buchungen diesen Monat",
        statValue: "+27%",
      },
      {
        name: "Atelier Vida",
        tagline: "Von Hand gemacht, zu Ihnen geliefert",
        cta: "Online kaufen",
        notifTitle: "Neuer Verkauf",
        notifDetail: "Bestellung #124 · CHF 38",
        statLabel: "Verkäufe diesen Monat",
        statValue: "+63%",
      },
      ],
    },
  },

  verticals: {
    eyebrow: "Für wen wir arbeiten",
    headline: "Eine Webseite. Eine klare Aktion.",
    sub: "Wir bauen für Unternehmen, die direkt an ihre Kunden verkaufen — und gestalten jede Seite rund um das Eine, das ein Besucher als Nächstes tun soll.",
    actionLabel: "Hauptaktion",
    items: {
      hospitality: {
        kicker: "Flaggschiff",
        title: "Gastronomie",
        examples: "Restaurants, Bars, Cafés, Hotels",
        body: "Hier wurde TableFront geboren. Speisekarte, Öffnungszeiten, Standort und ein Reservierungsablauf, der die Buchung — und den Gast — bei Ihnen behält.",
        action: "Tisch reservieren",
      },
      beauty: {
        title: "Gesundheit & Beauty",
        examples: "Salons, Barbiere, Praxen, Studios",
        body: "Leistungen, Team und Preise klar dargestellt — mit Online-Buchung, die Ihren Kalender füllt, während Sie beim Kunden sind.",
        action: "Termin buchen",
      },
      shops: {
        title: "Produzenten & Shops",
        examples: "Manufakturen, Boutiquen, Online-Shops",
        body: "Eine Markenseite mit eingebautem Online-Shop — Produktseiten, Checkout und Versand, damit Sie direkt verkaufen statt über Marktplätze.",
        action: "Online kaufen",
      },
    },
  },

  pains: {
    eyebrow: "Was eine schwache Webseite kostet",
    headline: "Die stillen Probleme, die an Ihrem Geschäft zehren.",
    sub: "Eine veraltete Seite scheitert nicht laut. Sie arbeitet einfach leise gegen Sie — in dieser Reihenfolge.",
    items: [
      {
        title: "Reputation",
        body: "Kunden beurteilen Ihre Arbeit über Ihre Webseite, bevor sie je bei Ihnen waren. Eine langsame, veraltete Seite schickt sie zum Konkurrenten, der online schärfer aussieht — auch wenn Sie besser sind.",
        note: "Der erste Eindruck entsteht heute auf dem Handy, nicht an Ihrer Tür.",
      },
      {
        title: "Geld",
        body: "Jeder Kunde, der über eine Plattform bucht oder kauft, kostet Sie Kommission. Jeder Kunde, der an einer umständlichen Seite scheitert, kostet Sie den ganzen Verkauf. Direktgeschäft ist der günstigste Umsatz, den Sie je machen.",
        note: "Rechnen Sie selbst — mit dem Rechner weiter unten.",
      },
      {
        title: "Zeit",
        body: "Telefonbuchungen nachjagen, Preislisten neu hochladen, um Mitternacht mit einem Baukasten kämpfen — Stunden pro Woche, die zu Ihren Kunden gehören, nicht in Ihren Browser.",
        note: "Ihre Webseite sollte Schichten für Sie übernehmen — nicht umgekehrt.",
      },
      {
        title: "Risiko",
        body: "Wenn Google Ihre Seite nicht richtig lesen kann, existieren Sie für neue Kunden nicht. Ein Konkurrent mit einer schnelleren, besser platzierten Seite kann Ihnen an ruhigen Tagen die Kundschaft abziehen, bevor Sie es merken.",
        note: "Online-Sichtbarkeit wird täglich neu vergeben — und jemand anderes bietet mit.",
      },
    ],
  },

  calculator: {
    eyebrow: "Rechnen Sie nach",
    headline: "Was kostet Sie Ihre aktuelle Webseite?",
    sub: "Ihre Zahlen, einfache Mathematik, jede Annahme anpassbar. Eine ehrliche Schätzung — keine Panikmache.",
    coversLabel: "Kunden pro Monat",
    ticketLabel: "Durchschnittlicher Umsatz pro Kunde",
    assumptionsToggle: "Annahmen anpassen",
    explainTitle: "So entsteht diese Zahl",
    explainStep1: "Kunden pro Monat, nach Ihrer Schätzung oben",
    explainStep2: "schauen sich vorher Ihre Webseite an",
    explainStep3: "springen ab, wenn sie langsam oder veraltet wirkt",
    explainStep4: "an Buchungen, Bestellungen und Verkäufen verloren — jeden Monat",
    explainBreakdown: "{lost} Kunden × {ticket} Durchschnittsumsatz",
    assumption1Label: "Kunden, die vor der Wahl Ihre Webseite prüfen",
    assumption2Label: "Davon: Anteil, den ein schlechter Eindruck vertreibt",
    resultLabel: "Geschätzter gefährdeter Umsatz pro Monat",
    perYearPrefix: "das sind rund",
    perYearSuffix: "pro Jahr",
    disclaimer:
      "Eine illustrative Schätzung, kein Versprechen — sie wendet lediglich die obigen Annahmen (die Sie selbst steuern) auf Ihre eigenen Zahlen an.",
    cta: "Lieber gleich den Gratis-Prototyp",
  },

  process: {
    eyebrow: "Der Prozess",
    headline: "Von veraltet zu live in sieben Tagen.",
    steps: [
      {
        title: "Analyse",
        body: "Ein Gespräch. Wir lernen Ihr Unternehmen, Ihre Kunden und was Ihre aktuelle Online-Präsenz Sie kostet — und legen genau fest, was die neue Seite leisten muss.",
      },
      {
        title: "Design",
        body: "Wir gestalten rund um Ihre Marke und Ihr Angebot — eine Seite, die so aussieht, wie sich Ihr Unternehmen anfühlt, und Besucher in Buchungen, Bestellungen oder Verkäufe verwandelt.",
      },
      {
        title: "Entwicklung",
        body: "Buchung, Bestellung oder Checkout, lokales SEO, mehrsprachig wenn Ihre Kunden es brauchen — mobile-first gebaut und auf echten Handys getestet.",
      },
      {
        title: "Übergabe",
        body: "Live an Tag sieben. Wir schulen Ihr Team, übergeben die Schlüssel und bleiben 30 Tage als Support an Ihrer Seite.",
      },
    ],
    cta: "Mit einem kostenlosen Gespräch starten",
  },

  latestProject: {
    eyebrow: "Neuestes Projekt",
    eyebrowPlural: "Neueste Projekte",
    headline: "Aktuelle Arbeiten — live und bereits am Verkaufen.",
    sub: "Echte Unternehmen, echte Seiten, echte Kunden — schauen Sie sich um, bevor Sie entscheiden.",
    visit: "Live-Seite besuchen",
    projects: {
      aconchego: {
        blurb: "Ein Craft-Gin aus der Algarve — Markenwebseite mit eingebautem Online-Shop, damit jede Flasche direkt verkauft wird.",
        tags: ["Webseite", "Online-Shop", "Produzenten & Shops"],
      },
    },
  },

  founder: {
    eyebrow: "Warum es uns gibt",
    headline: "Wir haben Gastronomie nicht studiert. Wir sind darin aufgewachsen.",
    p1: "Daniel ist im Restaurant seiner Mutter aufgewachsen — Hausaufgaben am Ecktisch, Service am Wochenende. Es folgten über zehn Jahre Arbeit in der Gastronomie.",
    p2: "Dort ist TableFront entstanden: gute Restaurants, die Gäste an schlechte Webseiten verloren — und Agenturen, die ihnen Seiten verkauften, die hübsch aussahen, aber nichts buchten. Dasselbe passiert Salons, Praxen und kleinen Produzenten jeden Tag — deshalb bauen wir heute für alle.",
    quote: "Eine Webseite hat genau einen Job: den Kunden zum Handeln bringen. Alles andere ist Dekoration.",
    quoteAttribution: "Daniel Bota, Gründer",
  },

  plans: {
    eyebrow: "Preise",
    headline: "Klare Preise, fix pro Markt.",
    sub: "Jedes Paket enthält eine individuelle, mobile-first Webseite rund um eine klare Aktion — live in 7 Tagen. Angezeigt in CHF oder EUR, jederzeit umschaltbar.",
    oneTimeTitle: "Einmaliger Aufbau",
    oneTimeSub: "Einmal bezahlen. Die Seite gehört Ihnen.",
    monthlyTitle: "Monatliche Partnerschaften",
    monthlySub: "Wir hosten, warten und aktualisieren sie für Sie.",
    perMonth: "/Mt.",
    oneTime: "einmalig",
    recommended: "Empfohlen",
    items: {
      essencial: {
        label: "Essential",
        tagline: "Das Wesentliche, sauber gemacht.",
        features: [
          "One-Page-Design, individuell und mobile-first",
          "Eine klare Aktion: buchen, bestellen oder kaufen",
          "Google Maps, Öffnungszeiten & Click-to-Call",
          "Basis-SEO-Setup",
          "Live in 7 Tagen",
        ],
      },
      profissional: {
        label: "Professional",
        tagline: "Eine vollständige Seite, die jeden Tag für Sie arbeitet.",
        features: [
          "Mehrseitiges, individuelles Design",
          "Buchungs- oder Termin-Integration",
          "Lokales SEO-Setup & Analytics",
          "Mehrsprachig vorbereitet",
          "30 Tage Support nach dem Launch",
        ],
      },
      loja: {
        label: "Online-Shop",
        tagline: "Markenseite und Online-Shop in einem.",
        features: [
          "Alles aus Professional",
          "Online-Shop mit Produktseiten",
          "Checkout, Zahlungen & Versand-Setup",
          "Lager- & Bestellbenachrichtigungen",
          "Schulung zur Verwaltung Ihres Shops",
        ],
      },
      mensalEssencial: {
        label: "Monatlich Essential",
        tagline: "Schnell, sicher und aktuell halten.",
        features: [
          "Hosting & Sicherheitsupdates",
          "Laufende Wartung & Korrekturen",
          "Kleine Inhaltsänderungen jeden Monat",
          "E-Mail-Support",
        ],
      },
      mensalProfissional: {
        label: "Monatlich Professional",
        tagline: "Alles erledigt — inklusive Buchungen.",
        features: [
          "Alles aus Monatlich Essential",
          "Reservierungen inklusive für die Gastronomie",
          "Monatliche Inhalts- & Preisaktualisierungen",
          "Prioritäts-Support",
          "Vierteljährlicher Leistungsbericht",
        ],
      },
    },
    cta: "Kostenloses Gespräch buchen",
    ctaSecondary: "Alle Preise ansehen",
    note: "Fixe Preise pro Markt, angezeigt in CHF oder EUR. 7-Tage-Aufbau ab Materialeingang. Keine versteckten Gebühren.",
  },

  guarantee: {
    eyebrow: "Unser Versprechen",
    headline: "Wenn es für Sie nicht funktioniert, bezahlen Sie es nicht.",
    body: "Jede monatliche Partnerschaft enthält eine 30-Tage-Geld-zurück-Garantie: Wenn die neue Seite im ersten Monat ihren Job nicht macht, erhalten Sie den vollen Betrag zurück. Wir tragen lieber das Risiko, als dass Sie den Zweifel tragen.",
    points: ["30 Tage, volle Rückerstattung", "Kein Kleingedrucktes", "Wir tragen das Risiko"],
    cta: "Pakete & Preise ansehen",
  },

  team: {
    eyebrow: "Die Menschen dahinter",
    headline: "Geführt von Menschen, die selbst im Service standen.",
    sub: "Wir kommen nicht aus Agenturen. Wir kommen aus der Gastronomie.",
    members: [
      {
        name: "Daniel Bota",
        role: "CEO & Leitender Entwickler",
        bio: "Daniel arbeitete über 10 Jahre in der Gastronomie, bevor er TableFront gründete — er weiss aus erster Hand, was eine schlechte Webseite ein Unternehmen kostet.",
        imageAlt: "Porträt von Daniel Bota",
      },
      {
        name: "Devin Kabay",
        role: "Vertriebsleiter",
        bio: "Mit einem Abschluss in Hotelmanagement und über 7 Jahren Erfahrung bringt Devin echten Gastgeist in jedes Kundengespräch — und sorgt dafür, dass die richtigen Unternehmen TableFront finden.",
        imageAlt: "Porträt von Devin Kabay",
      },
    ],
  },

  faq: {
    eyebrow: "Fragen, beantwortet",
    headline: "Alles, was Inhaber uns fragen, bevor sie Ja sagen.",
    items: [
      {
        q: "Was kostet eine Webseite?",
        a: "Transparente Preise: Der einmalige Aufbau beginnt bei CHF 790 / €490, monatliche Partnerschaften bei CHF 69 / €39 pro Monat. Jeder Preis ist öffentlich auf unserer Preisseite — keine «Offerte anfragen»-Spiele.",
      },
      {
        q: "Ich habe schon eine Webseite. Warum wechseln?",
        a: "Wenn sie langsam lädt, auf dem Handy veraltet wirkt oder keine Buchungen, Bestellungen oder Verkäufe bringt, kostet sie Sie still mehr als ein Neuaufbau. Schicken Sie uns Ihre Adresse — wir bauen Ihnen einen kostenlosen Prototyp davon, was möglich wäre. Urteilen Sie mit eigenen Augen, ohne Verpflichtung.",
      },
      {
        q: "Wie schaffen Sie das in 7 Tagen?",
        a: "Wir bauen rund um drei bewährte Seitentypen — reservieren, buchen, kaufen — und starten nie bei null: Struktur, Performance und SEO sind eingebaut, und ein strukturiertes Formular sammelt alles in einem Durchgang. Die sieben Tage zählen ab dem Moment, in dem wir Ihre Materialien haben.",
      },
      {
        q: "Was muss ich liefern?",
        a: "Ihr Logo, Fotos, Ihre Speisekarte, Leistungen oder Produkte sowie Öffnungszeiten — einmal gesammelt über ein Formular, mit einfachen Freigabe-Links statt E-Mail-Ketten. Keine guten Fotos? Besprechen wir die Optionen im Gespräch.",
      },
      {
        q: "Gehört mir die Webseite?",
        a: "Beim einmaligen Aufbau: ja, vollständig — Seite und Inhalte gehören Ihnen. Bei monatlichen Partnerschaften hosten, warten und aktualisieren wir sie für Sie, solange die Partnerschaft läuft.",
      },
      {
        q: "Was passiert, wenn sich meine Preise oder mein Angebot ändern?",
        a: "Monatliche Partnerschaften enthalten Inhalts- und Preisaktualisierungen. Beim einmaligen Aufbau können Sie pro Update bezahlen — Ihre Wahl, keine Bindung.",
      },
      {
        q: "Arbeiten Sie nur in der Schweiz und in Portugal?",
        a: "Nein — wir bauen für Unternehmen weltweit, in den Sprachen Ihrer Kunden. Unsere eigene Seite läuft auf Englisch, Deutsch, Portugiesisch und Französisch, mit Preisen in CHF oder EUR.",
      },
      {
        q: "Was, wenn ich nicht zufrieden bin?",
        a: "Monatliche Partnerschaften enthalten eine 30-Tage-Geld-zurück-Garantie — volle Rückerstattung, kein Kleingedrucktes. Jedes Projekt enthält mindestens 30 Tage Support nach dem Launch.",
      },
    ],
  },

  prototype: {
    eyebrow: "Gratis-Prototyp",
    headline: "Sehen Sie Ihre neue Webseite, bevor Sie etwas ausgeben.",
    sub: "Hinterlassen Sie Ihre aktuelle Webseite (oder einfach den Namen Ihres Unternehmens) und Ihre E-Mail. Wir senden Ihnen einen kostenlosen Homepage-Prototyp davon, was TableFront bauen würde — keine Verpflichtung, und die Ideen gehören Ihnen so oder so.",
    siteLabel: "Ihre Webseite oder Ihr Firmenname",
    sitePlaceholder: "ihrunternehmen.ch",
    emailLabel: "Ihre E-Mail",
    emailPlaceholder: "sie@ihrunternehmen.ch",
    submit: "Gratis-Prototyp anfordern",
    sending: "Wird gesendet…",
    successTitle: "Anfrage erhalten.",
    successBody: "Ein echter Mensch antwortet — in der Regel innerhalb eines Werktags.",
    errorBody: "Beim Senden ist etwas schiefgelaufen. Bitte versuchen Sie es erneut — oder buchen Sie stattdessen ein kostenloses Gespräch.",
    privacyNote: "Wir verwenden Ihre Angaben ausschliesslich, um Ihren Prototyp zu erstellen und zu senden. Kein Newsletter, kein Spam.",
  },

  finalCta: {
    headline: "Ihre Kunden suchen Sie genau jetzt.",
    sub: "Seien Sie das Unternehmen, das sie finden — und bei dem sie buchen, bestellen oder kaufen.",
    ctaPrimary: "Kostenloses Gespräch buchen",
    ctaSecondary: "Gratis-Prototyp erhalten",
    note: "30-Minuten-Gespräch · Keine Verpflichtung · Live in 7 Tagen",
  },

  reservationsTeaser: {
    eyebrow: "Reservierungen · Gastronomie",
    headline: "Unsere eigene Reservierungsplattform, in Ihre Website eingebaut.",
    sub: "Gäste reservieren in Sekunden auf Ihrer Website — kein Marktplatz, keine Provision. Ihr Team sieht jede Reservierung, jeden Anruf und jeden Walk-in auf einem Tischplan.",
    points: [
      "Provisionsfrei, auf Ihrer eigenen Domain",
      "Bestätigungs- und Erinnerungs-E-Mails in vier Sprachen",
      "Tagesansicht mit Live-Tischplan, Ankünften und No-shows",
    ],
    included: "In Monatlich Professional enthalten",
    cta: "Plattform entdecken",
  },

  reservations: {
    eyebrow: "Reservierungen für die Gastronomie",
    headline1: "Ihr eigenes Reservierungssystem,",
    headline2: "auf Ihrer eigenen Website.",
    sub: "TableFront Reservierungen ist die Buchungsplattform, die wir im eigenen Restaurantbetrieb entwickelt haben. Sie lebt auf der Website, die wir für Sie gestalten: Gäste reservieren in Sekunden, Ihr Team führt den Betrieb von einem Bildschirm aus, und niemand nimmt eine Provision.",
    ctaPrimary: "Kostenloses Gespräch buchen",
    ctaSecondary: "Preise ansehen",
    strip: [
      "Provisionsfrei",
      "Bestätigungs- & Erinnerungs-E-Mails",
      "Live-Tischplan",
      "Deutsch · Englisch · Portugiesisch · Französisch",
    ],
    guests: {
      eyebrow: "Für Ihre Gäste",
      headline: "In unter einer Minute reserviert, ohne Konto.",
      sub: "Das Widget sitzt auf Ihrer Website und passt sich Ihrer Marke an — Ihre Farben, Ihre Schrift, Ihre Rundungen.",
      steps: [
        {
          title: "Datum, Personenzahl und Uhrzeit wählen",
          body: "Bis 60 Tage im Voraus, 1 bis 12 Personen, und nur die Zeiten, die wirklich frei sind.",
        },
        {
          title: "Name und Kontakt hinterlassen",
          body: "Name, Telefon, E-Mail und eine Notiz für die Küche. Das ist das ganze Formular.",
        },
        {
          title: "Bestätigt — und erinnert",
          body: "Sofort eine Bestätigungs-E-Mail, am Vortag eine Erinnerung und ein Link zum Stornieren ohne Anruf.",
        },
      ],
    },
    team: {
      eyebrow: "Für Ihr Team",
      headline: "Den Betrieb von einem Bildschirm aus führen.",
      sub: "Alles, was der Empfang braucht — und nichts, was er nicht braucht.",
      features: [
        {
          title: "Jede Reservierung in einer Liste",
          body: "Online-, Telefon- und Walk-in-Reservierungen nebeneinander, kommende und vergangene. Stornieren, erneut bestätigen oder bearbeiten mit einem Tipp — der Gast wird automatisch per E-Mail informiert.",
        },
        {
          title: "Tagesansicht mit Live-Tischplan",
          body: "Die Gedecke von heute auf einen Blick. Gäste als angekommen, platziert oder No-show markieren und zusehen, wie sich die Tische auf dem Plan füllen.",
        },
        {
          title: "Ihr Tischplan, von Ihnen gezeichnet",
          body: "Zeichnen Sie Ihren Raum selbst im Editor — Bereiche, runde und eckige Tische mit Sitzplätzen, die Bar, Türen und Wände — und ändern Sie ihn, wann immer Sie möchten. Tische für grosse Gruppen zusammenlegen.",
        },
        {
          title: "Ihre Regeln, Ihre Kapazität",
          body: "Öffnungszeiten pro Tag, Zeitfenster, Verweildauer und wie viele Gedecke Sie online pro Zeitfenster annehmen. Telefonreservierungen passen immer noch obendrauf.",
        },
        {
          title: "Sie erfahren es zuerst",
          body: "Eine E-Mail für jede neue Online-Reservierung und jede Stornierung — das Team wird nie überrascht.",
        },
        {
          title: "Vier Sprachen, automatisch",
          body: "Das Widget folgt der Browsersprache des Gastes — Deutsch, Englisch, Portugiesisch oder Französisch — und fällt auf Ihre zurück.",
        },
      ],
    },
    own: {
      eyebrow: "Warum kein Marktplatz",
      headline: "Ihre Gäste, Ihre Daten, keine Provision.",
      points: [
        {
          title: "Nichts pro Gedeck",
          body: "Buchungsplattformen verlangen pro Gast oder pro Monat — für Gäste, die ohnehin schon Ihre waren. Hier ist die Gebühr null; sie ist Teil Ihres Website-Plans.",
        },
        {
          title: "Gäste bleiben auf Ihrer Website",
          body: "Keine Weiterleitung auf eine Drittseite voller Konkurrenten. Die Reservierung passiert auf Ihrer Domain, in Ihrem Design.",
        },
        {
          title: "Die Liste gehört Ihnen",
          body: "Namen, Telefonnummern, Besuche und Notizen liegen in Ihrem Dashboard — nicht in der Marketing-Datenbank von jemand anderem.",
        },
      ],
    },
    included: {
      eyebrow: "Preise",
      headline: "Im Plan Monatlich Professional enthalten.",
      body: "Reservierungen sind Teil der Partnerschaft Monatlich Professional für Gastronomiekunden: Wir hosten, warten und aktualisieren Ihre Website, richten das Widget ein und führen Sie durch den Tischplan-Editor. Eine Monatsgebühr, keine Einrichtungsgebühr für die Plattform, keine Kosten pro Reservierung.",
      perMonth: "pro Monat",
      cta: "Alle Pläne ansehen",
    },
    setup: {
      eyebrow: "Gut zu wissen",
      items: [
        {
          title: "Wir richten es für Sie ein",
          body: "Es gibt keine Selbstregistrierung. Wir legen Ihr Restaurant an, konfigurieren Öffnungszeiten und Kapazität mit Ihnen und binden das Widget am Launch-Tag ein.",
        },
        {
          title: "Eine Zeile Code, überall",
          body: "Das Widget lässt sich mit einem einzigen Script-Tag auch in eine bestehende Website einfügen, falls Sie noch nicht bereit für ein Redesign sind.",
        },
        {
          title: "E-Mail, nicht SMS",
          body: "Bestätigungen, Erinnerungen und Stornierungen gehen per E-Mail raus. Gäste, die eine Reservierung ändern möchten, stornieren über ihren Link und reservieren neu — oder rufen Sie an.",
        },
      ],
    },
    exitTitle: "Möchten Sie es in einem echten Restaurant im Einsatz sehen?",
    exitSub: "Buchen Sie ein Gespräch — wir führen Sie durch Dashboard und Widget.",
    exitCall: "Kostenloses Gespräch buchen",
    exitPricing: "Preise ansehen",
    mock: {
      widgetTitle: "Tisch reservieren",
      date: "Datum",
      party: "Gäste",
      time: "Uhrzeit",
      dateValue: "Fr 14. Nov",
      partyValue: "4 Gäste",
      slots: [
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
      ],
      name: "Name",
      phone: "Telefon",
      button: "Reservierung bestätigen",
      confirmed: "Reservierung bestätigt!",
      confirmedSub: "Tisch für 4 · Fr 14. Nov · 20:00",
      floorTitle: "Heute Abend",
      floorCovers: "42 Gedecke · 11 Tische",
      legend: [
        "Frei",
        "Platziert",
        "Im Anmarsch",
      ],
    },
  },

  footer: {
    tagline:
      "Webseiten, die aus Besuchern Buchungen, Bestellungen und Verkäufe machen. In der Gastronomie geboren — gebaut für jedes Unternehmen, das an Kunden verkauft.",
    navTitle: "Navigation",
    startTitle: "Loslegen",
    legalTitle: "Rechtliches",
    linkHow: "Ablauf",
    linkWork: "Referenzen",
    linkStory: "Unsere Geschichte",
    linkFaq: "FAQ",
    linkPricing: "Preise",
    linkReservations: "Reservierungen",
    linkCall: "Gespräch buchen",
    linkPrototype: "Gratis-Prototyp",
    linkLegal: "Datenschutz & Impressum",
    rights: "© 2026 TableFront · Alle Rechte vorbehalten",
    homeLabel: "TableFront — Startseite",
  },

  pricing: {
    eyebrow: "Website-Pakete",
    headline1: "Eine Webseite, die so hart arbeitet",
    headline2: "wie Sie selbst.",
    sub: "Jedes Paket enthält eine individuelle, mobile-first Webseite — live in 7 Tagen, gebaut rund um die eine Aktion, die Ihre Kunden ausführen sollen. Die Preise sind öffentlich und pro Markt fixiert.",
    strip: [
      "Individuelles Mobile-First-Design",
      "Lieferung in 7 Tagen",
      "Eine klare Aktion",
      "Lokales SEO-Setup",
      "30 Tage Support",
      "Schulung & Übergabe",
    ],
    exitTitle: "Ihr Paket gefunden?",
    exitSub: "Erwähnen Sie es im Gespräch — wir halten diese Preise.",
    exitCall: "Kostenloses Gespräch buchen",
    exitPrototype: "Erst den Gratis-Prototyp ansehen",
    note: "Fixe Preise pro Markt, angezeigt in CHF oder EUR — jederzeit umschaltbar. 7-Tage-Aufbau ab Materialeingang. Keine versteckten Gebühren.",
    note2: "Der endgültige Umfang wird in Ihrem kostenlosen Gespräch bestätigt, sobald wir Ihr Unternehmen kennen.",
  },

  legal: {
    title: "Datenschutz & Impressum",
    updated: "Zuletzt aktualisiert: November 2026",
    sections: [
      {
        h: "Wer wir sind",
        p: "TableFront baut Webseiten für Unternehmen, die direkt an Kunden verkaufen — Gastronomie, Gesundheit & Beauty sowie kleine Produzenten und Shops. Der Dienst wird aus der Schweiz und Portugal betrieben und weltweit angeboten. Sie erreichen uns über das Prototyp-Formular auf der Startseite oder indem Sie ein Gespräch buchen.",
      },
      {
        h: "Welche Daten wir erheben",
        p: "Wenn Sie ein Formular auf dieser Seite absenden (Gratis-Prototyp oder Projekt-Intake), erhalten wir die von Ihnen eingegebenen Angaben — etwa Ihre E-Mail-Adresse, Ihre Website-Adresse und die bereitgestellten Inhalte. Übermittlungen erfolgen über Web3Forms, einen Formular-Zustelldienst, und werden ausschliesslich zur Beantwortung Ihrer Anfrage verwendet.",
      },
      {
        h: "Analytics",
        p: "Wir nutzen Vercel Analytics, um die aggregierte Nutzung der Seite zu verstehen. Der Dienst arbeitet ohne Cookies, verfolgt Sie nicht über Webseiten hinweg und erstellt keine persönlichen Profile.",
      },
      {
        h: "Terminbuchung",
        p: "Gespräche werden über Calendly gebucht. Bei der Buchung verarbeitet Calendly Ihre Angaben gemäss seiner eigenen Datenschutzerklärung.",
      },
      {
        h: "Hosting",
        p: "Diese Seite wird auf Vercel gehostet. Technische Daten wie IP-Adressen können in Server-Logs verarbeitet werden, um die Seite sicher auszuliefern.",
      },
      {
        h: "Kein Marketing",
        p: "Wir versenden keine Newsletter, geben Ihre Daten nicht zu Marketingzwecken an Dritte weiter und verwenden keine Werbe-Tracker.",
      },
      {
        h: "Ihre Rechte",
        p: "Nach Schweizer Datenschutzrecht (revDSG) und, soweit anwendbar, der DSGVO können Sie jederzeit Auskunft, Berichtigung oder Löschung Ihrer personenbezogenen Daten verlangen — schreiben Sie uns einfach über die oben genannten Kontaktwege.",
      },
    ],
  },

  notFound: {
    headline: "Diese Seite hat noch nicht geöffnet.",
    body: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    cta: "Zurück zur Startseite",
  },
}

export default de
