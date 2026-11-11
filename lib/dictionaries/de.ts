import type { Dictionary } from "./en"
import business from "./business.de"

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
        "Transparente Website-Preise: einmaliger Aufbau ab CHF 790 / €490, monatliche Partnerschaften ab CHF 79 / €49. Fix pro Markt, keine versteckten Gebühren, Lieferung in 7 Tagen.",
    },
    reservations: {
      title: "Restaurants — Provisionsfreie Tischreservierungen auf Ihrer eigenen Website",
      description: "TableFront Reservierungen: ein provisionsfreies Buchungs-Widget für Restaurants und Cafés, mit Bestätigungs- und Erinnerungs-E-Mails, Live-Tischplan und Tagesansicht für Ihr Team. Im Plan Monatlich Professional enthalten — oder einzeln für eine bestehende Website.",
    },
    legal: {
      title: "Datenschutz & Impressum",
      description: "Wie TableFront mit Ihren Daten umgeht — und wer hinter der Seite steht.",
    },
  },

  nav: {
    business: "Für Ihren Betrieb",
    how: "Ablauf",
    work: "Referenzen",
    pricing: "Preise",
    bookCall: "Gratis-Gespräch",
    login: "Anmelden",
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
    headline2: "Kunden machen.",
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
    monthlySub: "Website, Hosting und Wartung in einer Monatsgebühr, mit 12-Monats-Vertrag. Oder Sie nehmen nur die Buchungsplattform.",
    perMonth: "/Mt.",
    oneTime: "einmalig",
    recommended: "Empfohlen",
    contract: "12-Monats-Vertrag",
    platformsNote: "Welche Buchungsplattform Sie erhalten, hängt von Ihrem Betrieb ab:",
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
        tagline: "Schnell, sicher und online halten.",
        features: [
          "Hosting & Sicherheitsupdates",
          "Laufende Wartung & Korrekturen",
          "E-Mail-Support",
        ],
      },
      mensalProfissional: {
        label: "Monatlich Professional",
        tagline: "Alles erledigt — inklusive Buchungen.",
        features: [
          "Alles aus Monatlich Essential",
          "Buchungsplattform inklusive: Tische, Übernachtungen oder Termine",
          "Prioritäts-Support",
          "Vierteljährlicher Leistungsbericht",
        ],
      },
      reservas: {
        label: "Nur Reservierungen",
        tagline: "Die Buchungsplattform, ohne Website.",
        features: [
          "Buchungs-Widget auf Ihrer bestehenden Website",
          "Bestätigungs-, Erinnerungs- & Stornierungs-E-Mails",
          "Für Tische, Übernachtungen oder Termine, jeweils mit eigenem Dashboard",
          "Widget & E-Mails auf DE · EN · PT · FR",
          "Mit Ihnen eingerichtet, keine Gebühr pro Reservierung",
        ],
      },
    },
    cta: "Kostenloses Gespräch buchen",
    ctaSecondary: "Alle Preise ansehen",
    note: "Fixe Preise pro Markt, angezeigt in CHF oder EUR. 7-Tage-Aufbau ab Materialeingang. Keine versteckten Gebühren.",
  },

  pricingSummary: {
    eyebrow: "Preise",
    headline: "Klare Preise, fix pro Markt.",
    sub: "Drei Wege, mit uns zu arbeiten. Alle Pakete und was sie enthalten, stehen auf der Preisseite.",
    from: "ab",
    perMonth: "/Mt.",
    items: {
      oneTime: { title: "Einmaliger Aufbau", body: "Einmal bezahlen. Die Seite gehört Ihnen." },
      monthly: { title: "Monatliche Partnerschaft", body: "Website, Hosting und Wartung in einer Monatsgebühr. 12-Monats-Vertrag." },
      platform: { title: "Nur die Buchungsplattform", body: "Tischreservierungen, Übernachtungen oder Termine auf Ihrer bestehenden Website." },
    },
    cta: "Alle Pakete ansehen",
  },

  team: {
    eyebrow: "Die Menschen dahinter",
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
        a: "Transparente Preise: Der einmalige Aufbau beginnt bei CHF 790 / €490, monatliche Partnerschaften bei CHF 79 / €49 pro Monat. Jeder Preis ist öffentlich auf unserer Preisseite — keine «Offerte anfragen»-Spiele.",
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
        a: "Beim einmaligen Aufbau: ja, vollständig — Seite und Inhalte gehören Ihnen. Bei monatlichen Partnerschaften hosten und warten wir sie für Sie, solange die Partnerschaft läuft. Monatliche Partnerschaften laufen über einen 12-Monats-Vertrag.",
      },
      {
        q: "Was passiert, wenn sich meine Preise oder mein Angebot ändern?",
        a: "Schicken Sie uns die Änderung, und wir bieten sie als kleines Update an — bei jedem Plan. Kleine Änderung, kleine Rechnung.",
      },
      {
        q: "Arbeiten Sie nur in der Schweiz und in Portugal?",
        a: "Nein — wir bauen für Unternehmen weltweit, in den Sprachen Ihrer Kunden. Unsere eigene Seite läuft auf Englisch, Deutsch, Portugiesisch und Französisch, mit Preisen in CHF oder EUR.",
      },
      {
        q: "Was, wenn ich nicht zufrieden bin?",
        a: "Bevor Sie sich festlegen, sehen Sie einen kostenlosen Prototyp Ihrer Startseite. So wissen Sie, was Sie bekommen. Jedes Projekt enthält zudem mindestens 30 Tage Support nach dem Launch.",
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


  reservations: {
    eyebrow: "Restaurants, Bars & Cafés",
    headline1: "Ihr eigenes Reservierungssystem,",
    headline2: "auf Ihrer eigenen Website.",
    sub: "TableFront Reservierungen ist die Buchungsplattform, die wir im eigenen Restaurantbetrieb entwickelt haben. Sie lebt auf der Website, die wir für Sie gestalten: Gäste reservieren in Sekunden, Ihr Team führt den Betrieb von einem Bildschirm aus, und niemand nimmt eine Provision.",
    ctaPrimary: "Kostenloses Gespräch buchen",
    ctaSecondary: "Preise ansehen",
    loginHint: "Bereits Kunde?",
    loginCta: "Im Dashboard anmelden",
    strip: [
      "Provisionsfrei",
      "Bestätigungs- & Erinnerungs-E-Mails",
      "Live-Tischplan",
      "Deutsch · Englisch · Portugiesisch · Französisch",
    ],
    site: {
      headline: "Eine Website, die Tische füllt.",
      items: [
        { title: "Speisekarte, Öffnungszeiten, Standort", body: "Was Gäste zuerst suchen, auf dem Handy gut lesbar und einfach aktuell zu halten." },
        { title: "Eine klare Aktion: Tisch reservieren", body: "Ein Reservierungsknopf auf jeder Seite, statt eines Telefons, das mitten im Service klingelt." },
        { title: "In der Nähe gefunden", body: "Lokales SEO, Google Maps und Click-to-Call." },
      ],
    },
    video: {
      eyebrow: "Ansehen",
      headline: "Ein Freitagabend, in 47 Sekunden.",
      sub: "Ein Gast reserviert vom Handy aus, das Restaurant erfährt es sofort, und das Team führt den Abend über Tagesansicht und Tischplan.",
      note: "Auf Portugiesisch gesprochen.",
      label: "TableFront Reservierungen — Präsentationsvideo",
    },
    tour: {
      eyebrow: "Selbst ausprobieren",
      headline: "Klicken Sie sich durch einen Freitagabend im Casa Marisa.",
      sub: "Eine funktionierende Kopie von Widget und Dashboard, mit erfundenen Gästen. Nichts davon wird gespeichert — probieren Sie ruhig alles aus.",
      steps: [
        {
          label: "Der Gast reserviert",
          eyebrow: "Schritt 1 · Für Ihre Gäste",
          headline: "Ein Tisch in unter einer Minute.",
          body1: "Das Widget lebt auf der Website Ihres Restaurants, in Ihren Farben. Der Gast wählt Tag, Personenzahl und Uhrzeit und sieht nur Zeiten, die wirklich frei sind. Kein Konto, nichts zum Herunterladen.",
          body2: "Sobald er bestätigt, bekommt er eine E-Mail — und das Restaurant auch. Am Vortag folgt eine Erinnerung mit einem Link zum Stornieren, ohne anzurufen.",
          tryLabel: "Ausprobieren",
          tryText: "Ändern Sie Tag, Personenzahl oder Uhrzeit und drücken Sie Tisch reservieren.",
        },
        {
          label: "Tagesansicht",
          eyebrow: "Schritt 2 · Für Ihr Team",
          headline: "Der ganze Abend auf einem Bildschirm.",
          body1: "Die Tagesansicht vereint Online-Reservierungen, Telefonreservierungen und Laufkundschaft. Jede Zeit zeigt, wie viele Gäste sie schon hat und wie weit sie vom Limit entfernt ist, das Sie für Online-Reservierungen gesetzt haben.",
          body2: "Wenn die Gäste eintreffen, tippt das Team: Angekommen, Am Tisch oder Nicht erschienen.",
          tryLabel: "Ausprobieren",
          tryText: "Ihre eben gemachte Reservierung ist hervorgehoben. Markieren Sie sie als Angekommen, dann Am Tisch.",
        },
        {
          label: "Tischplan",
          eyebrow: "Schritt 3 · Während des Service",
          headline: "Der Tischplan, in Echtzeit.",
          body1: "Mit Ihrem im Editor gezeichneten Gastraum zeigt die Tagesansicht jeden Tisch in der Farbe seines Zustands: frei, reserviert, angekommen, am Tisch.",
          body2: "Eine Reservierung ohne Tisch? Antippen, dann einen Tisch antippen. Jemand kommt spontan? Nutzen Sie Gäste setzen.",
          tryLabel: "Ausprobieren",
          tryText: "Tippen Sie auf eine Reservierung mit Kein Tisch, dann auf einen freien Tisch. Oder drücken Sie Gäste setzen.",
        },
      ],
      back: "Zurück",
      next: ["Die Seite des Restaurants sehen", "Im Tischplan ansehen"],
      restart: "Von vorne",
      restaurant: "Casa Marisa",
      restaurantSub: "Abendessen ab 18:00, Dienstag bis Sonntag",
      url: "app.tablesfront.com/day",
      widget: {
        title: "Tisch reservieren",
        date: "Datum",
        guests: "Personen",
        time: "Uhrzeit",
        name: "Name",
        phone: "Telefon",
        book: "Tisch reservieren",
        guestOne: "Person",
        guestMany: "Personen",
        fewer: "Eine Person weniger",
        more: "Eine Person mehr",
        noSlots: "Keine freien Zeiten für diese Gruppengrösse.",
        confirmed: "Reservierung bestätigt!",
        tableFor: "Tisch für",
        again: "Noch eine Reservierung",
        days: ["Fr 14. Nov", "Sa 15. Nov", "So 16. Nov"],
        defaultName: "Ana Ribeiro",
        defaultPhone: "+351 912 345 678",
      },
      mails: {
        empty: "Die E-Mails erscheinen hier, sobald Sie bestätigen: eine an den Gast, eine ans Restaurant.",
        to: "An:",
        now: "gerade eben",
        newTag: "Neu",
        guestSubject: "Reservierung bestätigt",
        guestBody: "Hallo {first}, Ihr Tisch im Casa Marisa ist bestätigt.",
        at: "um",
        cancelLine: "Stornieren? Über diesen Link.",
        ownerSubject: "Neue Reservierung",
        ownerBody: "Neue Online-Reservierung für Casa Marisa:",
        ownerManage: "Verwalten Sie sie in Ihrem TableFront-Dashboard.",
        otherDay: "Sie haben einen anderen Tag gewählt: Schritt 2 zeigt Freitag, den 14. November. Um Ihre Reservierung im Dashboard zu sehen, reservieren Sie für Fr 14. Nov.",
      },
      dash: {
        nav: [
          "Tagesansicht",
          "Reservierungen",
          "Reservierung hinzufügen",
          "Tischplan",
          "Einstellungen",
        ],
        dayTitle: "Freitag, 14. November",
        today: "Heute",
        bookings: "Reservierungen",
        guests: "Gäste",
        table: "Tisch",
        arrived: "Angekommen",
        seated: "Am Tisch",
        noShow: "Nicht erschienen",
        walkIn: "Laufkundschaft",
        seatGuests: "Gäste setzen",
        tonight: "Heute Abend",
        noTable: "Kein Tisch",
        zones: ["Gastraum", "Terrasse"],
        legend: ["Frei", "Reserviert", "Angekommen", "Am Tisch", "Nicht erschienen"],
        hintWalk: "Tippen Sie jetzt auf einen freien Tisch, um {n} {guests} ohne Reservierung zu setzen.",
        hintBooking: "Tippen Sie jetzt auf einen Tisch, um diese Reservierung zu setzen.",
        cancel: "Abbrechen",
        bar: "BAR",
        room: "GASTRAUM",
        seats: "Pl.",
        walkInName: "Laufkundschaft",
        seatedAt: "gesetzt um 20:00",
        mapLabel: "Tischplan",
      },
      guests: [
        {
          name: "Familie Costa",
          note: "Geburtstag",
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
          note: "Hochstuhl",
        },
        {
          name: "Inês Duarte",
          note: "",
        },
      ],
      onlineNote: "online",
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
          body: "Buchungsplattformen verlangen pro Gast oder pro Monat — für Gäste, die ohnehin schon Ihre waren. Hier zahlen Sie nichts pro Gast: Es ist Teil Ihres Website-Plans — oder ein fester Monatspreis für die Plattform allein.",
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
    pricing: {
      eyebrow: "Preise",
      headline: "Zwei Wege dorthin.",
      included: {
        badge: "Empfohlen",
        title: "In Monatlich Professional enthalten",
        body: "Für Gastronomiekunden in der Partnerschaft Monatlich Professional kommen die Reservierungen mit der Website: Wir hosten und warten Ihre Seite, richten das Widget ein und führen Sie durch den Tischplan-Editor. Eine Monatsgebühr, keine Einrichtungsgebühr für die Plattform, keine Kosten pro Reservierung.",
      },
      standalone: {
        title: "Oder die Plattform allein",
        body: "Sie haben schon eine Website oder kaufen Ihre Seite lieber einmalig statt im Abo? Nehmen Sie nur die Reservierungsplattform: dasselbe Widget, Dashboard und dieselben E-Mails, mit einer einzigen Code-Zeile in Ihre bestehende Seite eingebunden. Eingerichtet wird sie weiterhin mit Ihnen.",
      },
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
  },

  footer: {
    tagline:
      "Webseiten, die aus Besuchern Buchungen, Bestellungen und Verkäufe machen. In der Gastronomie geboren — gebaut für jedes Unternehmen, das an Kunden verkauft.",
    navTitle: "Navigation",
    businessTitle: "Für Ihren Betrieb",
    startTitle: "Loslegen",
    legalTitle: "Rechtliches",
    linkHow: "Ablauf",
    linkWork: "Referenzen",
    linkStory: "Unsere Geschichte",
    linkFaq: "FAQ",
    linkPricing: "Preise",
    linkCall: "Gespräch buchen",
    linkPrototype: "Gratis-Prototyp",
    linkLogin: "Login Reservierungen",
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

  business,

  notFound: {
    headline: "Diese Seite hat noch nicht geöffnet.",
    body: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    cta: "Zurück zur Startseite",
  },
}

export default de
