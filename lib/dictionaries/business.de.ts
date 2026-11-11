import type { BusinessDict } from "./business.en"

const business: BusinessDict = {
  labels: {
    restaurants: "Restaurants, Bars & Cafés",
    stays: "Hotels & Unterkünfte",
    beauty: "Gesundheit & Beauty",
    shops: "Produzenten & Shops",
  },

  chooser: {
    eyebrow: "Finden Sie Ihren Betrieb",
    headline: "Was für einen Betrieb führen Sie?",
    sub: "Wählen Sie Ihren Betrieb und sehen Sie die Website, die wir dafür bauen, und die Buchungsplattform, die dazugehört.",
    platformLabel: "Inklusive",
    cta: "So funktioniert es",
    items: {
      restaurants: {
        examples: "Restaurants, Bars, Cafés",
        body: "Speisekarte, Öffnungszeiten und Standort, mit Tischreservierungen auf Ihrer eigenen Website und einem Live-Tischplan für Ihr Team.",
        platform: "Tischreservierungen",
      },
      stays: {
        examples: "Hotels, Gästehäuser, Ferienwohnungen",
        body: "Zimmer, Fotos und Preise, mit Direktbuchungen auf Ihrer eigenen Website und einem Kalender, der Airbnb und Booking.com mitliest.",
        platform: "Übernachtungen",
      },
      beauty: {
        examples: "Salons, Barbiere, Praxen, Studios",
        body: "Leistungen, Team und Preise klar dargestellt, mit Online-Terminen, die Ihre Agenda füllen, während Sie bei einer Kundin sind.",
        platform: "Termine",
      },
      shops: {
        examples: "Manufakturen, Boutiquen, Online-Shops",
        body: "Eine Markenseite mit integriertem Online-Shop: Produktseiten, Checkout und Versand, damit Sie direkt verkaufen.",
        platform: "Online-Shop",
      },
    },
  },

  common: {
    siteEyebrow: "Ihre Website",
    getEyebrow: "Preise",
    featuresEyebrow: "Das ist dabei",
    recommended: "Empfohlen",
    perMonth: "pro Monat",
    oneTime: "einmalig",
    contract: "12-Monats-Vertrag",
    pricingCta: "Alle Pakete ansehen",
    ctaCall: "Kostenloses Gespräch buchen",
    ctaPrototype: "Gratis-Prototyp erhalten",
    loginHint: "Bereits Kunde?",
    loginCta: "Im Dashboard anmelden",
    exitCall: "Kostenloses Gespräch buchen",
    exitPricing: "Preise ansehen",
    otherTitle: "Nicht Ihre Art von Betrieb?",
  },

  pages: {
    stays: {
      meta: {
        title: "Hotels & Unterkünfte — Direktbuchungen auf Ihrer eigenen Website",
        description:
          "Websites für Hotels, Gästehäuser und Ferienwohnungen mit TableFront Übernachtungen: Gäste buchen direkt auf Ihrer Seite, mit Kalender pro Einheit, Saisonpreisen und Kalenderabgleich mit Airbnb, Booking.com und Vrbo.",
      },
      eyebrow: "Hotels, Gästehäuser & Ferienwohnungen",
      headline1: "Direktbuchungen,",
      headline2: "auf Ihrer eigenen Website.",
      sub: "Eine Website, die Ihre Zimmer richtig zeigt, und eine Buchungsplattform, mit der Gäste sie sofort reservieren. Ihr Kalender liest Airbnb und Booking.com mit, sodass dort belegte Daten auch auf Ihrer Seite geschlossen sind.",
      strip: [
        "Keine Provision auf Direktbuchungen",
        "Ein Kalender pro Einheit",
        "Abgleich mit Airbnb, Booking.com & Vrbo",
        "Deutsch · Englisch · Portugiesisch · Französisch",
      ],
      site: {
        headline: "Eine Website, die die Buchung holt.",
        items: [
          {
            title: "Zimmer, die sich selbst erklären",
            body: "Jedes Zimmer oder Apartment mit Fotos, Ausstattung, Anzahl Schlafplätze und Preis.",
          },
          {
            title: "Eine klare Aktion: buchen",
            body: "Der Gast gibt Daten und Personenzahl ein und sieht die freien Einheiten mit Gesamtpreis. Kein Anfrageformular, kein Warten auf eine Antwort.",
          },
          {
            title: "Gefunden und verstanden",
            body: "Lokales SEO, schnell auf dem Handy und in den Sprachen, die Ihre Gäste sprechen.",
          },
        ],
      },
      platform: {
        eyebrow: "TableFront Übernachtungen",
        headline: "Von den Daten zum bestätigten Aufenthalt, in einer Minute.",
        sub: "Gäste wählen Daten und Personenzahl, sehen, was frei ist, mit Gesamtpreis, und reservieren. Kein Konto, kein Download.",
        features: [
          {
            title: "Ein Kalender pro Einheit",
            body: "Alle Zimmer oder Apartments in einem Kalender: wer heute an- und abreist, was heute Nacht belegt ist, und eine Warnung, wenn sich zwei Reservierungen überschneiden.",
          },
          {
            title: "Im Takt mit Airbnb, Booking.com und Vrbo",
            body: "Fügen Sie den Kalenderlink jedes Kanals ein, und dessen Reservierungen sperren Ihre Daten hier. Geben Sie dem Kanal Ihren TableFront-Link, und Ihre Direktbuchungen sperren die Daten dort. Die Kanalkalender werden erneut gelesen, bevor eine Direktbuchung bestätigt wird.",
          },
          {
            title: "Ihre Preise, nach Saison",
            body: "Ein Preis pro Nacht und eine Reinigungsgebühr pro Einheit, dazu Zeiträume mit eigenem Preis und eigenem Mindestaufenthalt.",
          },
          {
            title: "Telefonbuchungen und gesperrte Daten",
            body: "Erfassen Sie Reservierungen per Telefon oder an der Rezeption, sperren Sie Daten für Unterhalt oder Eigennutzung und markieren Sie Gäste als eingecheckt, ausgecheckt oder nicht erschienen.",
          },
          {
            title: "E-Mails, die das Nachfassen übernehmen",
            body: "Sofort eine Bestätigung, am Vortag eine Erinnerung mit Ihrer Check-in-Zeit und ein Link zum Stornieren ohne Anruf. Sie erhalten eine E-Mail bei jeder neuen Buchung und jeder Stornierung.",
          },
          {
            title: "Vier Sprachen, automatisch",
            body: "Widget und E-Mails folgen der Sprache des Gastes: Deutsch, Englisch, Portugiesisch oder Französisch.",
          },
        ],
      },
      own: {
        eyebrow: "Warum Direktbuchungen",
        headline: "Ihre Gäste, Ihre Preise, keine Provision.",
        points: [
          {
            title: "Nichts pro Buchung",
            body: "Die Plattform hat einen fixen Monatspreis oder ist in Ihrem Website-Plan enthalten. Wir nehmen nichts pro Nacht oder pro Gast.",
          },
          {
            title: "Gäste bleiben auf Ihrer Seite",
            body: "Die Buchung findet auf Ihrer Domain statt, in Ihrem Design, nicht auf einer Seite voller anderer Unterkünfte.",
          },
          {
            title: "Die Kanäle laufen weiter",
            body: "Sie müssen Airbnb oder Booking.com nicht verlassen. Deren Reservierungen erscheinen im selben Kalender wie Ihre Direktbuchungen.",
          },
        ],
      },
      get: {
        headline: "Zwei Wege, sie zu bekommen.",
        plans: [
          {
            title: "In Monatlich Professional enthalten",
            body: "Ihre Website und die Übernachtungsplattform zusammen: Wir bauen, hosten und warten die Seite, richten Einheiten und Preise mit Ihnen ein und verbinden Ihre Kanalkalender. Eine Monatsgebühr, keine Gebühr pro Buchung.",
          },
          {
            title: "Oder nur die Plattform",
            body: "Sie haben bereits eine Website oder kaufen Ihre Seite lieber einmalig? Nehmen Sie nur die Übernachtungsplattform: dasselbe Widget, derselbe Kalender und dieselben E-Mails, mit einer Zeile Code in Ihre bestehende Seite eingebaut.",
          },
        ],
      },
      setup: {
        eyebrow: "Gut zu wissen",
        items: [
          {
            title: "Wir richten alles für Sie ein",
            body: "Es gibt keine Selbstregistrierung. Wir legen Ihre Unterkunft an, erfassen Einheiten und Preise mit Ihnen und bauen das Widget am Tag des Launchs ein.",
          },
          {
            title: "Der Abgleich ist nicht sofort",
            body: "Kanäle teilen nur Daten und lesen Kalender alle paar Stunden, der Abgleich läuft also über Kalenderlinks und nicht live. Überschneidungen werden im Kalender markiert, nie versteckt.",
          },
          {
            title: "Zahlung in der Unterkunft",
            body: "Gäste reservieren online und zahlen direkt bei Ihnen. Bestätigungen, Erinnerungen und Stornierungen gehen per E-Mail, nicht per SMS.",
          },
        ],
      },
      exitTitle: "Möchten Sie es mit Ihren eigenen Zimmern sehen?",
      exitSub: "Buchen Sie ein Gespräch, und wir zeigen Ihnen den Kalender und das Widget.",
      mock: {
        widgetTitle: "Aufenthalt buchen",
        checkIn: "Anreise",
        checkOut: "Abreise",
        guests: "Gäste",
        checkInValue: "Fr 14. Nov.",
        checkOutValue: "Mo 17. Nov.",
        guestsValue: "2 Gäste",
        units: [
          { name: "Gartenzimmer", meta: "2 Personen · 3 Nächte", price: "CHF 480" },
          { name: "Suite mit Seeblick", meta: "4 Personen · 3 Nächte", price: "CHF 690" },
        ],
        button: "Reservieren",
        confirmed: "Buchung bestätigt!",
        confirmedSub: "Gartenzimmer · 14.–17. Nov.",
        calendarTitle: "November",
        calendarMeta: "3 Einheiten",
        calendarUnits: ["Gartenzimmer", "Suite mit Seeblick", "Studio"],
        legend: ["Direkt", "Airbnb", "Booking.com"],
      },
    },

    beauty: {
      meta: {
        title: "Gesundheit & Beauty — Online-Termine auf Ihrer eigenen Website",
        description:
          "Websites für Salons, Barbiere, Praxen und Studios mit TableFront Termine: Kundinnen und Kunden wählen Leistung, Fachperson und Zeit auf Ihrer Seite, und Ihr Team arbeitet mit einem Tageskalender.",
      },
      eyebrow: "Salons, Barbiere, Praxen & Studios",
      headline1: "Eine volle Agenda,",
      headline2: "gebucht auf Ihrer eigenen Website.",
      sub: "Eine Website, die Ihre Leistungen, Ihr Team und Ihre Preise klar zeigt, und eine Terminplattform, mit der Kundinnen und Kunden die richtige Person zur richtigen Zeit buchen, während Sie gerade jemanden bedienen.",
      strip: [
        "Keine Provision pro Termin",
        "Ein Kalender pro Fachperson",
        "Bestätigungs- & Erinnerungs-E-Mails",
        "Deutsch · Englisch · Portugiesisch · Französisch",
      ],
      site: {
        headline: "Eine Website, die die Agenda füllt.",
        items: [
          {
            title: "Leistungen und Preise, klar",
            body: "Was Sie anbieten, wie lange es dauert und was es kostet, damit Kundinnen und Kunden wissen, was sie gebucht haben.",
          },
          {
            title: "Eine klare Aktion: Termin buchen",
            body: "Ein Buchungsknopf auf jeder Seite, statt eines Telefons, das klingelt, wenn Sie die Hände voll haben.",
          },
          {
            title: "In der Nähe gefunden",
            body: "Lokales SEO, Ihre Öffnungszeiten und Ihr Standort, schnell auf dem Handy.",
          },
        ],
      },
      platform: {
        eyebrow: "TableFront Termine",
        headline: "Leistung, Fachperson, Zeit. Gebucht.",
        sub: "Kundinnen und Kunden wählen eine Leistung, eine Fachperson oder überlassen es Ihnen, und sehen nur Zeiten, die wirklich frei sind. Kein Konto, kein Download.",
        features: [
          {
            title: "Ein Tageskalender pro Fachperson",
            body: "Der Tag aller nebeneinander, mit Anzahl Terminen und erwartetem Umsatz. Markieren Sie Kundinnen und Kunden als angekommen, abgeschlossen oder nicht erschienen.",
          },
          {
            title: "Leistungen mit echter Dauer",
            body: "Jede Leistung hat Kategorie, Dauer und Preis, dazu eine Zeit danach zum Aufräumen, damit die Agenda die nötigen Pausen lässt.",
          },
          {
            title: "Ein Team mit eigenen Zeiten",
            body: "Legen Sie fest, wer welche Leistungen macht, die Arbeitszeiten und die Abwesenheiten. Wer keine bestimmte Fachperson wählt, kommt zu der Person, die am wenigsten ausgelastet ist.",
          },
          {
            title: "Auch Telefon- und Laufkundschaft",
            body: "Erfassen Sie Termine im Dashboard, auch ausserhalb der Öffnungszeiten, und finden Sie jede Kundin und jeden Kunden per Name.",
          },
          {
            title: "E-Mails, die das Erinnern übernehmen",
            body: "Sofort eine Bestätigung, am Vortag eine Erinnerung und ein Link zum Stornieren ohne Anruf. Sie erhalten eine E-Mail bei jeder neuen Buchung und jeder Stornierung.",
          },
          {
            title: "Vier Sprachen, automatisch",
            body: "Widget und E-Mails folgen der Sprache der Kundschaft: Deutsch, Englisch, Portugiesisch oder Französisch.",
          },
        ],
      },
      own: {
        eyebrow: "Warum kein Buchungsmarktplatz",
        headline: "Ihre Kundschaft, Ihre Agenda, keine Provision.",
        points: [
          {
            title: "Nichts pro Termin",
            body: "Die Plattform hat einen fixen Monatspreis oder ist in Ihrem Website-Plan enthalten. Wir nehmen nichts pro Buchung oder pro Kunde.",
          },
          {
            title: "Die Kundschaft bleibt auf Ihrer Seite",
            body: "Gebucht wird auf Ihrer Domain, in Ihrem Design, nicht in einer Liste neben dem Salon um die Ecke.",
          },
          {
            title: "Die Kundenliste gehört Ihnen",
            body: "Namen, Telefonnummern und Termine bleiben in Ihrem Dashboard, nicht in der Marketingdatenbank einer anderen Firma.",
          },
        ],
      },
      get: {
        headline: "Zwei Wege, sie zu bekommen.",
        plans: [
          {
            title: "In Monatlich Professional enthalten",
            body: "Ihre Website und die Terminplattform zusammen: Wir bauen, hosten und warten die Seite und richten Leistungen, Team und Zeiten mit Ihnen ein. Eine Monatsgebühr, keine Gebühr pro Buchung.",
          },
          {
            title: "Oder nur die Plattform",
            body: "Sie haben bereits eine Website oder kaufen Ihre Seite lieber einmalig? Nehmen Sie nur die Terminplattform: dasselbe Widget, derselbe Kalender und dieselben E-Mails, mit einer Zeile Code in Ihre bestehende Seite eingebaut.",
          },
        ],
      },
      setup: {
        eyebrow: "Gut zu wissen",
        items: [
          {
            title: "Wir richten alles für Sie ein",
            body: "Es gibt keine Selbstregistrierung. Wir erfassen Leistungen, Team und Zeiten mit Ihnen und bauen das Widget am Tag des Launchs ein.",
          },
          {
            title: "Eine Zeile Code, überall",
            body: "Das Widget lässt sich auch mit einem einzigen Script-Tag in eine bestehende Website einbauen, wenn Sie noch kein Redesign möchten.",
          },
          {
            title: "E-Mail, nicht SMS",
            body: "Bestätigungen, Erinnerungen und Stornierungen gehen per E-Mail. Bezahlt wird beim Termin, direkt bei Ihnen.",
          },
        ],
      },
      exitTitle: "Möchten Sie es mit Ihren eigenen Leistungen sehen?",
      exitSub: "Buchen Sie ein Gespräch, und wir zeigen Ihnen den Kalender und das Widget.",
      mock: {
        widgetTitle: "Termin buchen",
        service: "Leistung",
        services: [
          { name: "Schnitt & Farbe", meta: "90 Min. · CHF 140" },
          { name: "Herrenschnitt", meta: "30 Min. · CHF 45" },
        ],
        professional: "Fachperson",
        professionals: ["Egal", "Nora", "Tiago"],
        time: "Di 18. Nov.",
        slots: ["09:30", "10:00", "10:30", "11:00"],
        button: "Termin buchen",
        confirmed: "Termin gebucht!",
        confirmedSub: "Schnitt & Farbe · Di 10:30 · Nora",
        agendaTitle: "Dienstag",
        agendaMeta: "9 Termine",
        columns: ["Nora", "Tiago"],
        blocks: ["Schnitt & Farbe", "Föhnen", "Herrenschnitt", "Bart", "Farbe"],
      },
    },

    shops: {
      meta: {
        title: "Produzenten & Shops — Eine Markenseite mit Ihrem eigenen Online-Shop",
        description:
          "Websites für Manufakturen, Boutiquen und kleine Läden: eine Markenseite mit integriertem Online-Shop, Produktseiten, Checkout und Versand, damit Sie direkt verkaufen statt über Marktplätze.",
      },
      eyebrow: "Manufakturen, Boutiquen & Online-Shops",
      headline1: "Direkt verkaufen,",
      headline2: "von Ihrer eigenen Website.",
      sub: "Markenseite und Online-Shop in einem: Ihre Geschichte, Ihre Produkte und ein Checkout, der auf dem Handy funktioniert. Die Kundschaft kauft bei Ihnen, auf Ihrer eigenen Domain.",
      strip: [
        "Markenseite und Shop in einem",
        "Checkout, Zahlungen & Versand",
        "Lager- & Bestellbenachrichtigungen",
        "Schulung, um ihn selbst zu führen",
      ],
      site: {
        headline: "Eine Website, die den Verkauf abschliesst.",
        items: [
          {
            title: "Zuerst Ihre Marke",
            body: "Die Geschichte, die Menschen und der Ort hinter dem Produkt, in einem Design, das nach Ihnen aussieht und nicht nach einer Vorlage.",
          },
          {
            title: "Eine klare Aktion: kaufen",
            body: "Von der Produktseite zum Checkout in wenigen Klicks, ohne die Kundschaft auf eine andere Seite zu schicken.",
          },
          {
            title: "Von den Richtigen gefunden",
            body: "Lokales SEO und Analytics, vorbereitet für mehr als eine Sprache.",
          },
        ],
      },
      platform: {
        eyebrow: "Der Online-Shop",
        headline: "Was ein kleiner Shop braucht, und nichts, was er nicht braucht.",
        sub: "In Ihre Seite integriert, im selben Design, damit der Shop zur Marke gehört.",
        features: [
          {
            title: "Produktseiten",
            body: "Fotos, Beschreibung und Preis für jedes Produkt, so gestaltet, dass es sich verkauft.",
          },
          {
            title: "Checkout und Zahlungen",
            body: "Ein Checkout mit Ihren Zahlungsarten, auf echten Handys getestet.",
          },
          {
            title: "Versand, eingerichtet",
            body: "Ihre Lieferoptionen und Kosten, vor dem Launch mit Ihnen konfiguriert.",
          },
          {
            title: "Lager- und Bestellbenachrichtigungen",
            body: "Sie erfahren von jeder Bestellung, sobald sie eingeht, und vom Lagerbestand, bevor er ausgeht.",
          },
          {
            title: "Schulung für Ihren Shop",
            body: "Wir zeigen Ihnen, wie Sie Produkte erfassen, Preise ändern und Bestellungen abwickeln, damit Sie nicht von uns abhängig sind.",
          },
          {
            title: "Alles aus Professional",
            body: "Individuelles Design mit mehreren Seiten, lokales SEO und Analytics, vorbereitet für Mehrsprachigkeit und 30 Tage Support nach dem Launch.",
          },
        ],
      },
      own: {
        eyebrow: "Warum direkt verkaufen",
        headline: "Ihre Kundschaft, Ihre Marke, Ihr Shop.",
        points: [
          {
            title: "Kein Marktplatz dazwischen",
            body: "Die Kundschaft kauft bei Ihnen, auf Ihrer Domain, nicht in einer Liste, in der die Konkurrenz einen Klick entfernt ist.",
          },
          {
            title: "Die Kundenliste gehört Ihnen",
            body: "Bestellungen und Kontakte bleiben bei Ihnen, damit Sie Kundinnen und Kunden zurückholen können.",
          },
          {
            title: "Verkauft bereits für einen echten Produzenten",
            body: "Aconchego, ein handwerklicher Gin aus der Algarve, läuft auf einer von uns gebauten Markenseite mit integriertem Shop. Sie finden ihn auf der Startseite bei den Referenzen.",
          },
        ],
      },
      get: {
        headline: "Ein Preis. Der Shop gehört Ihnen.",
        plans: [
          {
            title: "Online-Shop",
            body: "Ein einmaliger Aufbau: Markenseite, Shop, Checkout, Zahlungen und Versand, mit Schulung. Seite und Inhalte gehören Ihnen. Spätere Inhaltsänderungen werden pro Update offeriert.",
          },
        ],
      },
      setup: {
        eyebrow: "Gut zu wissen",
        items: [
          {
            title: "Was wir von Ihnen brauchen",
            body: "Ihr Logo, Fotos, die Produktliste mit Preisen und Ihre Lieferoptionen, einmal über ein einziges Formular erfasst.",
          },
          {
            title: "Live in 7 Tagen",
            body: "Gerechnet ab dem Tag, an dem wir Ihre Unterlagen haben.",
          },
          {
            title: "Nach dem Launch",
            body: "30 Tage Support sind inbegriffen. Danach werden Änderungen pro Update offeriert: kleine Änderung, kleine Rechnung.",
          },
        ],
      },
      exitTitle: "Möchten Sie Ihre Produkte in Ihrem eigenen Shop sehen?",
      exitSub: "Buchen Sie ein Gespräch, oder fordern Sie zuerst einen Gratis-Prototyp an.",
      mock: {
        shopName: "Atelier Vida",
        products: [
          { name: "Handgegossene Kerze", price: "CHF 32" },
          { name: "Leinenschürze", price: "CHF 54" },
        ],
        add: "In den Warenkorb",
        basket: "Warenkorb",
        basketMeta: "2 Artikel · CHF 86",
        checkout: "Zur Kasse",
        toastTitle: "Neue Bestellung",
        toastDetail: "Bestellung #124 · CHF 86",
        ordersTitle: "Bestellungen heute",
        orders: [
          { id: "#124", status: "Bezahlt" },
          { id: "#123", status: "Versendet" },
          { id: "#122", status: "Versendet" },
        ],
      },
    },
  },
}

export default business
