import type { Dictionary } from "./en"
import business from "./business.fr"

const fr: Dictionary = {
  meta: {
    home: {
      title: "TableFront — Des sites web qui transforment les visiteurs en réservations, commandes et ventes",
      description:
        "Des sites web pour les entreprises qui vendent directement à leurs clients — restauration, santé & beauté, producteurs et boutiques. Une action claire : réserver, commander ou acheter. En ligne en 7 jours, prototype gratuit d'abord.",
    },
    pricing: {
      title: "Tarifs — Des formules de site web fixes, affichées en CHF ou en EUR",
      description:
        "Tarifs transparents : création unique dès CHF 790 / 490 €, partenariat mensuel dès CHF 79 / 49 €. Fixes par marché, sans frais cachés, livraison en 7 jours.",
    },
    reservations: {
      title: "Restaurants — Réservations de table sans commission sur votre propre site",
      description: "TableFront Réservations : un widget de réservation sans commission pour restaurants et cafés, avec e-mails de confirmation et de rappel, plan de salle en direct et vue du jour pour votre équipe. Inclus dans la formule Mensuel Professionnel, ou seul pour un site existant.",
    },
    legal: {
      title: "Confidentialité & Mentions légales",
      description: "Comment TableFront traite vos données — et qui se trouve derrière le site.",
    },
  },

  nav: {
    business: "Pour votre activité",
    how: "Notre méthode",
    work: "Nos réalisations",
    pricing: "Tarifs",
    bookCall: "Appel gratuit",
    login: "Connexion",
    getPrototype: "Prototype gratuit",
    languageLabel: "Langue",
    currencyLabel: "Devise",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    backHome: "Retour",
    homeLabel: "TableFront — accueil",
    mainNavLabel: "Navigation principale",
  },

  hero: {
    /** Rendu sous la forme « {eyebrowPrefix} {libellé défilant} » — les libellés tournent avec une animation CSS. */
    eyebrowPrefix: "Des sites web pour les",
    verticals: ["restaurants", "cafés", "salons", "cliniques", "boutiques"],
    headline1: "Des sites web qui transforment les visiteurs",
    headline2: "en clients.",
    sub: "Nés dans la restauration — conçus pour toutes les entreprises qui vendent à leurs clients.",
    ctaPrimary: "Réserver un appel gratuit",
    ctaSecondary: "Recevoir un prototype gratuit",
    trust: "En ligne en 7 jours · Une action claire · Conçu par des gens du métier",
    showcase: {
      ariaLabel: "Le site d'un client sur un téléphone reçoit une réservation, une commande, un rendez-vous et une vente, avec un graphique qui grimpe.",
      items: [
      {
        name: "Casa Marisa",
        tagline: "Dîner dès 18 h, du mardi au dimanche",
        cta: "Réserver une table",
        notifTitle: "Nouvelle réservation",
        notifDetail: "Table pour 4 · ven. 20 h",
        statLabel: "Réservations ce mois-ci",
        statValue: "+38%",
      },
      {
        name: "Café Lumen",
        tagline: "Torréfié cette semaine, servi aujourd'hui",
        cta: "Commander",
        notifTitle: "Nouvelle commande",
        notifDetail: "2 flat whites · retrait 8 h 40",
        statLabel: "Commandes ce mois-ci",
        statValue: "+52%",
      },
      {
        name: "Studio Nora",
        tagline: "Coupe, couleur et soin",
        cta: "Prendre rendez-vous",
        notifTitle: "Rendez-vous confirmé",
        notifDetail: "Coupe & couleur · mar. 10 h 30",
        statLabel: "Rendez-vous ce mois-ci",
        statValue: "+41%",
      },
      {
        name: "Clinique Aurora",
        tagline: "Des soins qui prennent le temps",
        cta: "Réserver une consultation",
        notifTitle: "Consultation réservée",
        notifDetail: "Première consultation · jeu. 9 h 15",
        statLabel: "Consultations ce mois-ci",
        statValue: "+27%",
      },
      {
        name: "Atelier Vida",
        tagline: "Fait main, livré chez vous",
        cta: "Acheter en ligne",
        notifTitle: "Nouvelle vente",
        notifDetail: "Commande n° 124 · CHF 38",
        statLabel: "Ventes ce mois-ci",
        statValue: "+63%",
      },
      ],
    },
  },

  pains: {
    eyebrow: "Ce que coûte un site faible",
    headline: "Les problèmes silencieux qui minent votre activité.",
    sub: "Un site dépassé n'échoue pas bruyamment. Il travaille simplement contre vous, en silence — dans cet ordre.",
    items: [
      {
        title: "Réputation",
        body: "Les clients jugent votre travail sur votre site avant même de passer votre porte. Un site lent et daté les envoie chez le concurrent qui paraît plus soigné en ligne — même quand vous êtes meilleur.",
        note: "La première impression se joue désormais sur un écran de téléphone, pas à votre porte.",
      },
      {
        title: "Argent",
        body: "Chaque client qui réserve ou achète via une plateforme vous coûte une commission. Chaque client qui renonce sur un site laborieux vous coûte la vente entière. La vente directe est le chiffre d'affaires le moins cher que vous gagnerez jamais.",
        note: "Faites vos propres calculs avec le calculateur ci-dessous.",
      },
      {
        title: "Temps",
        body: "Courir après les réservations par téléphone, re-télécharger des listes de prix, se battre avec un éditeur de site à minuit — des heures chaque semaine qui appartiennent à vos clients, pas à votre navigateur.",
        note: "Votre site devrait travailler à votre place — pas l'inverse.",
      },
      {
        title: "Risque",
        body: "Si Google ne peut pas lire correctement votre site, vous n'existez pas pour les nouveaux clients. Un concurrent avec un site plus rapide et mieux classé peut vider vos journées calmes avant que vous ne le remarquiez.",
        note: "La visibilité en ligne se reloue chaque jour — et quelqu'un d'autre enchérit.",
      },
    ],
  },

  calculator: {
    eyebrow: "Faites vos calculs",
    headline: "Combien vous coûte votre site actuel ?",
    sub: "Vos chiffres, des maths simples, chaque hypothèse ajustable. Une estimation honnête — pas une tactique de peur.",
    coversLabel: "Clients par mois",
    ticketLabel: "Dépense moyenne par client",
    assumptionsToggle: "Ajuster les hypothèses",
    explainTitle: "Comment on obtient ce chiffre",
    explainStep1: "clients par mois, selon votre estimation ci-dessus",
    explainStep2: "consultent votre site avant de choisir",
    explainStep3: "repartent quand il est lent ou paraît dépassé",
    explainStep4: "de réservations, commandes et ventes perdues — chaque mois",
    explainBreakdown: "{lost} clients × {ticket} de dépense moyenne",
    assumption1Label: "Clients qui consultent votre site avant de choisir",
    assumption2Label: "Parmi eux, part qu'une mauvaise première impression fait fuir",
    resultLabel: "Chiffre d'affaires estimé à risque chaque mois",
    perYearPrefix: "soit environ",
    perYearSuffix: "par an",
    disclaimer:
      "Une estimation illustrative, pas une promesse — elle applique simplement les hypothèses ci-dessus (que vous contrôlez) à vos propres chiffres.",
    cta: "Je préfère le prototype gratuit",
  },

  process: {
    eyebrow: "Le processus",
    headline: "De dépassé à en ligne en sept jours.",
    steps: [
      {
        title: "Découverte",
        body: "Un appel. Nous apprenons à connaître votre entreprise, vos clients et ce que votre présence en ligne actuelle vous coûte — puis nous fixons exactement ce que le nouveau site doit accomplir.",
      },
      {
        title: "Design",
        body: "Nous concevons autour de votre marque et de votre offre — un site qui ressemble à ce que votre entreprise fait ressentir, construit pour transformer les curieux en réservations, commandes ou ventes.",
      },
      {
        title: "Construction",
        body: "Réservation, commande ou paiement en ligne, SEO local, multilingue si vos clients en ont besoin — assemblé mobile-first et testé sur de vrais téléphones.",
      },
      {
        title: "Remise des clés",
        body: "En ligne au septième jour. Nous formons votre équipe, remettons les clés et restons 30 jours en support.",
      },
    ],
    cta: "Commencer par un appel gratuit",
  },

  latestProject: {
    eyebrow: "Dernier projet",
    eyebrowPlural: "Derniers projets",
    headline: "Des réalisations récentes, en ligne et qui vendent.",
    sub: "De vraies entreprises, de vrais sites, de vrais clients — jetez un œil avant de décider.",
    visit: "Visiter le site en ligne",
    projects: {
      aconchego: {
        blurb: "Un gin artisanal de l'Algarve — site de marque avec boutique en ligne intégrée, pour que chaque bouteille se vende en direct.",
        tags: ["Site web", "Boutique en ligne", "Producteurs & boutiques"],
      },
    },
  },

  founder: {
    eyebrow: "Pourquoi nous existons",
    headline: "Nous n'avons pas étudié la restauration. Nous avons grandi dedans.",
    p1: "Daniel a grandi dans le restaurant de sa mère — les devoirs sur la table du coin, le service le week-end. Ont suivi plus de dix ans de travail dans l'hôtellerie-restauration.",
    p2: "TableFront est né là : de bons restaurants qui perdaient des clients à cause de mauvais sites, et des agences qui leur facturaient des sites jolis mais qui ne réservaient rien. La même chose arrive chaque jour aux salons, aux cliniques et aux petits producteurs — alors aujourd'hui, nous construisons pour eux tous.",
    quote: "Un site web n'a qu'un seul travail : faire agir le client. Tout le reste est décoration.",
    quoteAttribution: "Daniel Bota, fondateur",
  },

  plans: {
    eyebrow: "Tarifs",
    headline: "Des prix clairs, fixés par marché.",
    sub: "Chaque formule inclut un site sur mesure, mobile-first, construit autour d'une action claire et en ligne en 7 jours. Affiché en CHF ou en EUR — changez à tout moment.",
    oneTimeTitle: "Création unique",
    oneTimeSub: "Payez une fois. Le site est à vous.",
    monthlyTitle: "Partenariats mensuels",
    monthlySub: "Le site, l'hébergement et la maintenance en une mensualité, avec un contrat de 12 mois. Ou prenez seulement la plateforme de réservation.",
    perMonth: "/mois",
    oneTime: "paiement unique",
    recommended: "Recommandé",
    contract: "contrat de 12 mois",
    platformsNote: "La plateforme de réservation dépend de votre activité :",
    items: {
      essencial: {
        label: "Essentiel",
        tagline: "L'essentiel, bien fait.",
        features: [
          "Design sur mesure une page, mobile-first",
          "Une action claire : réserver, commander ou acheter",
          "Google Maps, horaires & click-to-call",
          "Configuration SEO de base",
          "En ligne en 7 jours",
        ],
      },
      profissional: {
        label: "Professionnel",
        tagline: "Un site complet qui travaille pour vous chaque jour.",
        features: [
          "Design sur mesure multi-pages",
          "Intégration réservation ou prise de rendez-vous",
          "Configuration SEO local & analytics",
          "Prêt pour le multilingue",
          "30 jours de support après mise en ligne",
        ],
      },
      loja: {
        label: "Boutique en ligne",
        tagline: "Site de marque et boutique en ligne en un.",
        features: [
          "Tout ce qu'inclut Professionnel",
          "Boutique en ligne avec fiches produits",
          "Configuration du paiement, de l'encaissement & de l'expédition",
          "Notifications de stock & de commandes",
          "Formation à la gestion de votre boutique",
        ],
      },
      mensalEssencial: {
        label: "Mensuel Essentiel",
        tagline: "Rapide, sûr et en ligne.",
        features: [
          "Hébergement & mises à jour de sécurité",
          "Maintenance & corrections en continu",
          "Support par e-mail",
        ],
      },
      mensalProfissional: {
        label: "Mensuel Professionnel",
        tagline: "Tout est pris en charge — réservations comprises.",
        features: [
          "Tout ce qu'inclut Mensuel Essentiel",
          "Plateforme de réservation incluse : tables, séjours ou rendez-vous",
          "Support prioritaire",
          "Rapport de performance trimestriel",
        ],
      },
      reservas: {
        label: "Réservations seules",
        tagline: "La plateforme de réservation, sans le site.",
        features: [
          "Widget de réservation sur votre site actuel",
          "E-mails de confirmation, de rappel & d'annulation",
          "Pour tables, séjours ou rendez-vous, chacun avec son tableau de bord",
          "Widget & e-mails en FR · EN · DE · PT",
          "Installé avec vous, sans coût par réservation",
        ],
      },
    },
    cta: "Réserver un appel gratuit",
    ctaSecondary: "Voir tous les tarifs",
    note: "Prix fixes par marché, affichés en CHF ou en EUR. Création en 7 jours dès réception des éléments. Sans frais cachés.",
  },

  pricingSummary: {
    eyebrow: "Tarifs",
    headline: "Des prix clairs, fixés par marché.",
    sub: "Trois façons de travailler avec nous. Chaque formule, et ce qu'elle comprend, figure sur la page tarifs.",
    from: "dès",
    perMonth: "/mois",
    items: {
      oneTime: { title: "Création unique", body: "Payez une fois. Le site est à vous." },
      monthly: { title: "Partenariat mensuel", body: "Site, hébergement et maintenance en une mensualité. Contrat de 12 mois." },
      platform: { title: "La plateforme de réservation seule", body: "Réservations de table, séjours ou rendez-vous sur le site que vous avez déjà." },
    },
    cta: "Voir toutes les formules",
  },

  team: {
    eyebrow: "Les personnes derrière",
    members: [
      {
        name: "Daniel Bota",
        role: "CEO & Développeur principal",
        bio: "Daniel a passé plus de 10 ans dans l'hôtellerie-restauration avant de créer TableFront — il sait de première main ce qu'un site défaillant coûte à une entreprise.",
        imageAlt: "Portrait de Daniel Bota",
      },
      {
        name: "Devin Kabay",
        role: "Responsable commercial",
        bio: "Diplômé en gestion hôtelière avec plus de 7 ans de terrain, Devin apporte un vrai instinct de l'accueil à chaque conversation client — pour que les bonnes entreprises trouvent TableFront.",
        imageAlt: "Portrait de Devin Kabay",
      },
    ],
  },

  faq: {
    eyebrow: "Questions, réponses",
    headline: "Tout ce que les patrons nous demandent avant de dire oui.",
    items: [
      {
        q: "Combien coûte un site web ?",
        a: "Des tarifs transparents : la création unique commence à CHF 790 / 490 €, les partenariats mensuels à CHF 79 / 49 € par mois. Chaque prix figure publiquement sur notre page tarifs — pas de jeu du « demandez un devis ».",
      },
      {
        q: "J'ai déjà un site. Pourquoi en changer ?",
        a: "S'il charge lentement, paraît daté sur téléphone ou n'apporte ni réservations, ni commandes, ni ventes, il vous coûte silencieusement plus cher qu'une refonte. Envoyez-nous son adresse : nous construisons gratuitement un prototype de ce qu'il pourrait devenir — jugez de vos propres yeux, sans engagement.",
      },
      {
        q: "Comment pouvez-vous construire en 7 jours ?",
        a: "Nous construisons autour de trois types de sites éprouvés — réserver, prendre rendez-vous, acheter — donc nous ne partons jamais de zéro : structure, performance et SEO intégrés d'origine, et un formulaire structuré qui rassemble tout en une seule fois. Les sept jours comptent à partir du moment où nous avons vos éléments.",
      },
      {
        q: "Que dois-je fournir ?",
        a: "Votre logo, vos photos, votre carte, vos prestations ou vos produits, et vos horaires — collectés une seule fois via un formulaire, avec de simples liens de partage plutôt que des chaînes d'e-mails. Pas de bonnes photos ? Nous en parlons lors de l'appel.",
      },
      {
        q: "Le site m'appartient-il ?",
        a: "Pour la création unique : oui, entièrement — le site et son contenu sont à vous. Avec les partenariats mensuels, nous l'hébergeons et le maintenons pendant toute la durée du partenariat. Les partenariats mensuels reposent sur un contrat de 12 mois.",
      },
      {
        q: "Que se passe-t-il quand mes prix ou mon offre changent ?",
        a: "Envoyez-nous le changement et nous le devisons comme une petite mise à jour — quelle que soit la formule. Petit changement, petite facture.",
      },
      {
        q: "Travaillez-vous uniquement en Suisse et au Portugal ?",
        a: "Non — nous construisons pour des entreprises dans le monde entier, dans les langues de vos clients. Notre propre site fonctionne en anglais, allemand, portugais et français, avec des prix en CHF ou en EUR.",
      },
      {
        q: "Et si je ne suis pas satisfait du résultat ?",
        a: "Avant de vous engager, vous voyez un prototype gratuit de votre page d'accueil : vous savez ce que vous obtenez. Chaque projet inclut aussi au moins 30 jours de support après la mise en ligne.",
      },
    ],
  },

  prototype: {
    eyebrow: "Prototype gratuit",
    headline: "Voyez votre nouveau site avant de dépenser quoi que ce soit.",
    sub: "Laissez votre site actuel (ou simplement le nom de votre entreprise) et votre e-mail. Nous vous envoyons un prototype gratuit de la page d'accueil que TableFront construirait — sans obligation, et les idées restent les vôtres quoi qu'il arrive.",
    siteLabel: "Votre site ou le nom de votre entreprise",
    sitePlaceholder: "votreentreprise.ch",
    emailLabel: "Votre e-mail",
    emailPlaceholder: "vous@votreentreprise.ch",
    submit: "Recevoir mon prototype gratuit",
    sending: "Envoi en cours…",
    successTitle: "Demande reçue.",
    successBody: "Un vrai humain vous répondra — en général sous un jour ouvré.",
    errorBody: "Une erreur s'est produite lors de l'envoi. Réessayez — ou réservez plutôt un appel gratuit.",
    privacyNote: "Vos coordonnées servent uniquement à préparer et envoyer votre prototype. Pas de newsletter, pas de spam.",
  },


  reservations: {
    eyebrow: "Restaurants, bars & cafés",
    headline1: "Votre propre système de réservation,",
    headline2: "sur votre propre site.",
    sub: "TableFront Réservations est la plateforme que nous avons construite en exploitant des restaurants. Elle vit sur le site que nous concevons pour vous : vos clients réservent en quelques secondes, votre équipe gère la salle depuis un seul écran, et personne ne prend de commission.",
    ctaPrimary: "Réserver un appel gratuit",
    ctaSecondary: "Voir les tarifs",
    loginHint: "Déjà client ?",
    loginCta: "Accéder à votre tableau de bord",
    strip: [
      "Sans commission",
      "E-mails de confirmation et de rappel",
      "Plan de salle en direct",
      "Français · Anglais · Allemand · Portugais",
    ],
    site: {
      headline: "Un site pensé pour remplir vos tables.",
      items: [
        { title: "Carte, horaires et adresse", body: "Ce que les clients cherchent en premier, lisible sur mobile et facile à tenir à jour." },
        { title: "Une action claire : réserver une table", body: "Un bouton de réservation sur chaque page, plutôt qu'un téléphone qui sonne en plein service." },
        { title: "Trouvé à proximité", body: "Référencement local, Google Maps et appel en un clic." },
      ],
    },
    video: {
      eyebrow: "Regarder",
      headline: "Un vendredi soir, en 47 secondes.",
      sub: "Une cliente réserve depuis son téléphone, le restaurant est prévenu à l'instant et l'équipe gère la salle depuis la vue du jour et le plan de salle.",
      note: "Commenté en portugais.",
      label: "TableFront Réservations — vidéo de présentation",
    },
    tour: {
      eyebrow: "Essayez vous-même",
      headline: "Vivez un vendredi soir à la Casa Marisa.",
      sub: "Une copie fonctionnelle du widget et du tableau de bord, avec des clients fictifs. Rien n'est enregistré — faites comme chez vous.",
      steps: [
        {
          label: "Le client réserve",
          eyebrow: "Étape 1 · Pour vos clients",
          headline: "Une table en moins d'une minute.",
          body1: "Le widget vit sur le site de votre restaurant, à vos couleurs. Le client choisit le jour, le nombre de personnes et l'heure, et ne voit que les créneaux vraiment libres. Pas de compte, rien à télécharger.",
          body2: "Dès qu'il confirme, il reçoit un e-mail — et le restaurant aussi. La veille, un rappel suit, avec un lien pour annuler sans appeler.",
          tryLabel: "Essayez",
          tryText: "Changez le jour, le nombre de personnes ou l'heure, puis appuyez sur Réserver une table.",
        },
        {
          label: "Vue du jour",
          eyebrow: "Étape 2 · Pour votre équipe",
          headline: "Toute la soirée sur un seul écran.",
          body1: "La vue du jour rassemble les réservations en ligne, par téléphone et les clients sans réservation. Chaque créneau indique combien de personnes il compte déjà et ce qu'il reste avant la limite fixée pour les réservations en ligne.",
          body2: "À l'arrivée des clients, l'équipe appuie : Arrivé, À table ou Absent.",
          tryLabel: "Essayez",
          tryText: "La réservation que vous venez de faire est surlignée. Marquez-la Arrivé, puis À table.",
        },
        {
          label: "Plan de salle",
          eyebrow: "Étape 3 · Pendant le service",
          headline: "Le plan de salle, en temps réel.",
          body1: "Avec votre salle dessinée dans l'éditeur, la vue du jour montre chaque table à la couleur de son état : libre, réservée, arrivé, à table.",
          body2: "Une réservation sans table ? Touchez-la, puis une table. Quelqu'un arrive sans réserver ? Utilisez Placer des clients.",
          tryLabel: "Essayez",
          tryText: "Touchez une réservation Sans table, puis une table libre. Ou appuyez sur Placer des clients.",
        },
      ],
      back: "Retour",
      next: ["Voir côté restaurant", "Voir sur le plan de salle"],
      restart: "Recommencer",
      restaurant: "Casa Marisa",
      restaurantSub: "Dîner dès 18 h, du mardi au dimanche",
      url: "app.tablesfront.com/day",
      widget: {
        title: "Réserver une table",
        date: "Date",
        guests: "Personnes",
        time: "Heure",
        name: "Nom",
        phone: "Téléphone",
        book: "Réserver une table",
        guestOne: "personne",
        guestMany: "personnes",
        fewer: "Une personne de moins",
        more: "Une personne de plus",
        noSlots: "Aucun créneau libre pour ce groupe.",
        confirmed: "Réservation confirmée !",
        tableFor: "Table pour",
        again: "Faire une autre réservation",
        days: ["ven. 14 nov.", "sam. 15 nov.", "dim. 16 nov."],
        defaultName: "Ana Ribeiro",
        defaultPhone: "+351 912 345 678",
      },
      mails: {
        empty: "Les e-mails apparaissent ici dès que vous confirmez : un pour le client, un pour le restaurant.",
        to: "À :",
        now: "à l'instant",
        newTag: "Nouveau",
        guestSubject: "Réservation confirmée",
        guestBody: "Bonjour {first}, votre table à la Casa Marisa est confirmée.",
        at: "à",
        cancelLine: "Besoin d'annuler ? Utilisez ce lien.",
        ownerSubject: "Nouvelle réservation",
        ownerBody: "Nouvelle réservation en ligne pour Casa Marisa :",
        ownerManage: "Gérez-la dans votre tableau de bord TableFront.",
        otherDay: "Vous avez choisi un autre jour : l'étape 2 montre le vendredi 14 novembre. Pour voir votre réservation dans le tableau de bord, réservez pour le ven. 14 nov.",
      },
      dash: {
        nav: [
          "Vue du jour",
          "Réservations",
          "Ajouter une réservation",
          "Plan de salle",
          "Paramètres",
        ],
        dayTitle: "vendredi 14 novembre",
        today: "Aujourd'hui",
        bookings: "réservations",
        guests: "couverts",
        table: "Table",
        arrived: "Arrivé",
        seated: "À table",
        noShow: "Absent",
        walkIn: "Sans réservation",
        seatGuests: "Placer des clients",
        tonight: "Ce soir",
        noTable: "Sans table",
        zones: ["Salle", "Terrasse"],
        legend: ["Libre", "Réservée", "Arrivé", "À table", "Absent"],
        hintWalk: "Touchez maintenant une table libre pour placer {n} {guests} sans réservation.",
        hintBooking: "Touchez maintenant une table pour placer cette réservation.",
        cancel: "Annuler",
        bar: "BAR",
        room: "SALLE",
        seats: "pl.",
        walkInName: "Sans réservation",
        seatedAt: "placés à 20 h",
        mapLabel: "Plan de salle",
      },
      guests: [
        {
          name: "Famille Costa",
          note: "anniversaire",
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
          note: "chaise haute",
        },
        {
          name: "Inês Duarte",
          note: "",
        },
      ],
      onlineNote: "en ligne",
    },
    team: {
      eyebrow: "Pour votre équipe",
      headline: "Gérer la salle depuis un seul écran.",
      sub: "Tout ce dont l'accueil a besoin, rien de superflu.",
      features: [
        {
          title: "Toutes les réservations dans une liste",
          body: "Réservations en ligne, par téléphone et clients de passage côte à côte, à venir et passées. Annuler, reconfirmer ou modifier en un geste — le client reçoit l'e-mail automatiquement.",
        },
        {
          title: "Vue du jour avec plan de salle en direct",
          body: "Les couverts du jour d'un coup d'œil. Marquez les clients arrivés, installés ou absents et regardez les tables se remplir sur le plan.",
        },
        {
          title: "Votre plan de salle, dessiné par vous",
          body: "Dessinez votre propre salle dans l'éditeur — zones, tables rondes et carrées avec le nombre de places, le bar, les portes et les murs — et modifiez-la quand vous voulez. Regroupez des tables pour les grands groupes.",
        },
        {
          title: "Vos règles, votre capacité",
          body: "Horaires par jour, intervalle des créneaux, durée de table et nombre de couverts acceptés en ligne par créneau. Les réservations par téléphone peuvent toujours s'ajouter.",
        },
        {
          title: "Vous êtes prévenu en premier",
          body: "Un e-mail pour chaque nouvelle réservation en ligne et chaque annulation — l'équipe n'est jamais prise de court.",
        },
        {
          title: "Quatre langues, automatiquement",
          body: "Le widget suit la langue du navigateur du client — français, anglais, allemand ou portugais — et revient à la vôtre sinon.",
        },
      ],
    },
    own: {
      eyebrow: "Pourquoi pas une marketplace",
      headline: "Vos clients, vos données, zéro commission.",
      points: [
        {
          title: "Rien par couvert",
          body: "Les plateformes de réservation facturent par client ou par mois — pour des clients qui étaient déjà les vôtres. Ici, rien n'est facturé par client : c'est compris dans votre formule de site, ou un prix mensuel fixe pour la plateforme seule.",
        },
        {
          title: "Les clients restent sur votre site",
          body: "Aucune redirection vers une page tierce remplie de concurrents. La réservation se fait sur votre domaine, dans votre design.",
        },
        {
          title: "La liste vous appartient",
          body: "Noms, numéros, visites et notes restent dans votre tableau de bord — pas dans la base marketing de quelqu'un d'autre.",
        },
      ],
    },
    pricing: {
      eyebrow: "Tarifs",
      headline: "Deux façons de l'avoir.",
      included: {
        badge: "Recommandé",
        title: "Inclus dans Mensuel Professionnel",
        body: "Pour les clients de la restauration en partenariat Mensuel Professionnel, les réservations viennent avec le site : nous hébergeons et maintenons votre site, installons le widget et vous guidons dans l'éditeur de plan de salle. Un abonnement mensuel, pas de frais d'installation pour la plateforme, pas de coût par réservation.",
      },
      standalone: {
        title: "Ou la plateforme seule",
        body: "Vous avez déjà un site, ou préférez l'acheter une fois plutôt que par abonnement ? Prenez seulement la plateforme de réservation : le même widget, le même tableau de bord et les mêmes e-mails, ajoutés à votre site actuel avec une seule ligne de code. Nous l'installons toujours avec vous.",
      },
      perMonth: "par mois",
      cta: "Voir toutes les formules",
    },
    setup: {
      eyebrow: "Bon à savoir",
      items: [
        {
          title: "Nous l'installons pour vous",
          body: "Pas d'inscription en libre-service. Nous créons votre restaurant, réglons horaires et capacité avec vous et intégrons le widget le jour de la mise en ligne.",
        },
        {
          title: "Une ligne de code, partout",
          body: "Le widget s'ajoute aussi à un site existant avec une seule balise script, si vous n'êtes pas encore prêt pour une refonte.",
        },
        {
          title: "E-mail, pas SMS",
          body: "Confirmations, rappels et annulations partent par e-mail. Un client qui doit modifier sa réservation annule via son lien et réserve à nouveau — ou vous appelle.",
        },
      ],
    },
    exitTitle: "Envie de le voir tourner dans un vrai restaurant ?",
    exitSub: "Réservez un appel et nous vous faisons visiter le tableau de bord et le widget.",
    exitCall: "Réserver un appel gratuit",
    exitPricing: "Voir les tarifs",
  },

  footer: {
    tagline:
      "Des sites web qui transforment les visiteurs en réservations, commandes et ventes. Nés dans la restauration — conçus pour toutes les entreprises qui vendent à leurs clients.",
    navTitle: "Navigation",
    businessTitle: "Pour votre activité",
    startTitle: "Commencer",
    legalTitle: "Mentions légales",
    linkHow: "Notre méthode",
    linkWork: "Nos réalisations",
    linkStory: "Notre histoire",
    linkFaq: "FAQ",
    linkPricing: "Tarifs",
    linkCall: "Réserver un appel",
    linkPrototype: "Prototype gratuit",
    linkLogin: "Connexion Réservations",
    linkLegal: "Confidentialité & mentions légales",
    rights: "© 2026 TableFront · Tous droits réservés",
    homeLabel: "TableFront — accueil",
  },

  pricing: {
    eyebrow: "Formules de site web",
    headline1: "Un site qui travaille",
    headline2: "aussi dur que vous.",
    sub: "Chaque formule inclut un site sur mesure, mobile-first, en ligne en 7 jours — construit autour de la seule action que vos clients doivent accomplir. Les prix sont publics et fixés par marché.",
    strip: [
      "Design sur mesure mobile-first",
      "Livraison en 7 jours",
      "Une action claire",
      "Configuration SEO local",
      "Support 30 jours",
      "Formation & remise des clés",
    ],
    exitTitle: "Vous avez trouvé votre formule ?",
    exitSub: "Mentionnez-la lors de l'appel — nous maintenons ces prix.",
    exitCall: "Réserver un appel gratuit",
    exitPrototype: "Voir d'abord le prototype gratuit",
    note: "Prix fixes par marché, affichés en CHF ou en EUR — changez à tout moment. Création en 7 jours dès réception des éléments. Sans frais cachés.",
    note2: "Périmètre final confirmé lors de votre appel gratuit, une fois votre activité bien comprise.",
  },

  legal: {
    title: "Confidentialité & Mentions légales",
    updated: "Dernière mise à jour : novembre 2026",
    sections: [
      {
        h: "Qui nous sommes",
        p: "TableFront construit des sites web pour les entreprises qui vendent directement à leurs clients — hôtellerie-restauration, santé & beauté, petits producteurs et boutiques. Le service est opéré depuis la Suisse et le Portugal et proposé dans le monde entier. Vous pouvez nous joindre via le formulaire de prototype sur la page d'accueil ou en réservant un appel.",
      },
      {
        h: "Quelles données nous collectons",
        p: "Lorsque vous soumettez un formulaire sur ce site (demande de prototype gratuit ou formulaire de projet), nous recevons les informations saisies — votre adresse e-mail, l'adresse de votre site et les contenus fournis. Les envois sont acheminés vers notre boîte de réception via Web3Forms, un service de livraison de formulaires, et servent exclusivement à répondre à votre demande.",
      },
      {
        h: "Statistiques",
        p: "Nous utilisons Vercel Analytics pour comprendre l'utilisation agrégée du site. Le service fonctionne sans cookies, ne vous suit pas d'un site à l'autre et ne crée aucun profil personnel.",
      },
      {
        h: "Prise de rendez-vous",
        p: "Les appels se réservent via Calendly. Lors de la réservation, Calendly traite les informations saisies selon sa propre politique de confidentialité.",
      },
      {
        h: "Hébergement",
        p: "Ce site est hébergé chez Vercel. Des données techniques comme les adresses IP peuvent être traitées dans les journaux serveur pour délivrer le site en toute sécurité.",
      },
      {
        h: "Pas de marketing",
        p: "Nous n'envoyons pas de newsletters, ne partageons pas vos données à des fins marketing et n'utilisons aucun traceur publicitaire.",
      },
      {
        h: "Vos droits",
        p: "En vertu du droit suisse de la protection des données (nLPD) et, le cas échéant, du RGPD, vous pouvez à tout moment demander l'accès, la rectification ou la suppression de vos données personnelles — écrivez-nous simplement via les moyens de contact ci-dessus.",
      },
    ],
  },

  business,

  notFound: {
    headline: "Cette page n'est pas encore ouverte.",
    body: "La page que vous cherchez n'existe pas ou a été déplacée.",
    cta: "Retour à la page d'accueil",
  },
}

export default fr
