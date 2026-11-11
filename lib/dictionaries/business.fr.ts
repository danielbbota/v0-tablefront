import type { BusinessDict } from "./business.en"

const business: BusinessDict = {
  labels: {
    restaurants: "Restaurants, bars & cafés",
    stays: "Hôtels & hébergements",
    beauty: "Santé & beauté",
    shops: "Producteurs & boutiques",
  },

  chooser: {
    eyebrow: "Trouvez votre activité",
    headline: "Quel type d'établissement gérez-vous ?",
    sub: "Choisissez le vôtre pour voir le site que nous construisons pour lui, et la plateforme de réservation qui l'accompagne.",
    platformLabel: "Inclus",
    cta: "Voir comment ça marche",
    items: {
      restaurants: {
        examples: "Restaurants, bars, cafés",
        body: "Carte, horaires et adresse, avec la réservation de table sur votre propre site et un plan de salle en direct pour votre équipe.",
        platform: "Réservations de table",
      },
      stays: {
        examples: "Hôtels, maisons d'hôtes, locations de vacances",
        body: "Chambres, photos et tarifs, avec des réservations directes sur votre propre site et un calendrier qui lit Airbnb et Booking.com.",
        platform: "Réservations de séjour",
      },
      beauty: {
        examples: "Salons, barbiers, cliniques, studios",
        body: "Prestations, équipe et tarifs présentés clairement, avec des rendez-vous en ligne qui remplissent votre agenda pendant que vous êtes avec un client.",
        platform: "Rendez-vous",
      },
      shops: {
        examples: "Producteurs artisanaux, boutiques, commerces en ligne",
        body: "Un site de marque avec boutique en ligne intégrée : fiches produits, paiement et expédition, pour vendre en direct.",
        platform: "Boutique en ligne",
      },
    },
  },

  common: {
    siteEyebrow: "Votre site",
    getEyebrow: "Tarifs",
    featuresEyebrow: "Ce qui est inclus",
    recommended: "Recommandé",
    perMonth: "par mois",
    oneTime: "paiement unique",
    contract: "Contrat de 12 mois",
    pricingCta: "Voir toutes les formules",
    ctaCall: "Réserver un appel gratuit",
    ctaPrototype: "Recevoir un prototype gratuit",
    loginHint: "Déjà client ?",
    loginCta: "Accéder à votre tableau de bord",
    exitCall: "Réserver un appel gratuit",
    exitPricing: "Voir les tarifs",
    otherTitle: "Ce n'est pas votre activité ?",
  },

  pages: {
    stays: {
      meta: {
        title: "Hôtels & hébergements — Des réservations directes sur votre propre site",
        description:
          "Sites web pour hôtels, maisons d'hôtes et locations de vacances avec TableFront Séjours : vos hôtes réservent en direct sur votre site, avec un calendrier par logement, des tarifs par saison et la synchronisation des calendriers Airbnb, Booking.com et Vrbo.",
      },
      eyebrow: "Hôtels, maisons d'hôtes & locations de vacances",
      headline1: "Des réservations directes,",
      headline2: "sur votre propre site.",
      sub: "Un site qui montre vos chambres comme il faut, et une plateforme de réservation qui permet à vos hôtes de les réserver sur-le-champ. Votre calendrier lit Airbnb et Booking.com : les dates prises là-bas sont aussi fermées sur votre site.",
      strip: [
        "Aucune commission sur les réservations directes",
        "Un calendrier par logement",
        "Synchronisé avec Airbnb, Booking.com & Vrbo",
        "Français · Anglais · Allemand · Portugais",
      ],
      site: {
        headline: "Un site pensé pour obtenir la réservation.",
        items: [
          {
            title: "Des chambres qui se présentent seules",
            body: "Chaque chambre ou appartement avec ses photos, ce qui est inclus, sa capacité et son prix.",
          },
          {
            title: "Une action claire : réserver",
            body: "L'hôte indique ses dates et le nombre de personnes, et voit les logements libres avec le prix total. Pas de formulaire de demande, pas d'attente de réponse.",
          },
          {
            title: "Trouvé et compris",
            body: "Référencement local, rapide sur mobile, et dans les langues que parlent vos hôtes.",
          },
        ],
      },
      platform: {
        eyebrow: "TableFront Séjours",
        headline: "Des dates au séjour confirmé, en une minute.",
        sub: "L'hôte choisit ses dates et le nombre de personnes, voit ce qui est libre avec le prix total, et réserve. Pas de compte, rien à télécharger.",
        features: [
          {
            title: "Un calendrier par logement",
            body: "Toutes vos chambres ou appartements sur un seul calendrier : qui arrive et qui part aujourd'hui, ce qui est occupé ce soir, et une alerte si deux réservations se chevauchent.",
          },
          {
            title: "En phase avec Airbnb, Booking.com et Vrbo",
            body: "Collez le lien de calendrier de chaque canal et ses réservations bloquent vos dates ici. Donnez au canal votre lien TableFront et vos réservations directes bloquent les dates là-bas. Les calendriers des canaux sont relus avant de confirmer une réservation directe.",
          },
          {
            title: "Vos tarifs, par saison",
            body: "Un prix par nuit et des frais de ménage par logement, plus des périodes avec leur propre prix et leur propre séjour minimum.",
          },
          {
            title: "Réservations par téléphone et dates bloquées",
            body: "Ajoutez les réservations prises par téléphone ou à la réception, bloquez des dates pour l'entretien ou votre usage personnel, et marquez les hôtes comme arrivés, partis ou absents.",
          },
          {
            title: "Des e-mails qui font les relances",
            body: "Une confirmation immédiate, un rappel la veille avec votre heure d'arrivée, et un lien pour annuler sans téléphoner. Vous recevez un e-mail à chaque nouvelle réservation et à chaque annulation.",
          },
          {
            title: "Quatre langues, automatiquement",
            body: "Le widget et les e-mails suivent la langue de l'hôte : français, anglais, allemand ou portugais.",
          },
        ],
      },
      own: {
        eyebrow: "Pourquoi réserver en direct",
        headline: "Vos hôtes, vos tarifs, zéro commission.",
        points: [
          {
            title: "Rien par réservation",
            body: "La plateforme a un prix mensuel fixe, ou fait partie de votre formule de site. Nous ne prenons rien par nuit ni par hôte.",
          },
          {
            title: "Vos hôtes restent sur votre site",
            body: "La réservation se fait sur votre domaine, dans votre design, pas sur une page remplie d'autres hébergements.",
          },
          {
            title: "Les canaux continuent de tourner",
            body: "Vous n'avez pas à quitter Airbnb ni Booking.com. Leurs réservations apparaissent sur le même calendrier que vos réservations directes.",
          },
        ],
      },
      get: {
        headline: "Deux façons de l'avoir.",
        plans: [
          {
            title: "Inclus dans Mensuel Professionnel",
            body: "Votre site et la plateforme de séjours ensemble : nous construisons, hébergeons et maintenons le site, configurons vos logements et vos tarifs avec vous et relions les calendriers de vos canaux. Une mensualité, sans coût par réservation.",
          },
          {
            title: "Ou la plateforme seule",
            body: "Vous avez déjà un site, ou vous préférez acheter le vôtre en une fois ? Prenez seulement la plateforme de séjours : le même widget, le même calendrier et les mêmes e-mails, ajoutés à votre site actuel avec une seule ligne de code.",
          },
        ],
      },
      setup: {
        eyebrow: "Bon à savoir",
        items: [
          {
            title: "Nous installons tout pour vous",
            body: "Il n'y a pas d'inscription en libre-service. Nous créons votre établissement, ajoutons logements et tarifs avec vous et intégrons le widget le jour du lancement.",
          },
          {
            title: "La synchronisation n'est pas instantanée",
            body: "Les canaux ne partagent que des dates et relisent les calendriers toutes les quelques heures : la synchronisation passe par des liens de calendrier, pas en direct. Les chevauchements sont signalés sur votre calendrier, jamais masqués.",
          },
          {
            title: "Paiement sur place",
            body: "L'hôte réserve en ligne et vous paie directement. Confirmations, rappels et annulations partent par e-mail, pas par SMS.",
          },
        ],
      },
      exitTitle: "Envie de le voir avec vos propres chambres ?",
      exitSub: "Réservez un appel et nous vous montrons le calendrier et le widget.",
      mock: {
        widgetTitle: "Réserver un séjour",
        checkIn: "Arrivée",
        checkOut: "Départ",
        guests: "Personnes",
        checkInValue: "Ven. 14 nov.",
        checkOutValue: "Lun. 17 nov.",
        guestsValue: "2 personnes",
        units: [
          { name: "Chambre jardin", meta: "2 personnes · 3 nuits", price: "CHF 480" },
          { name: "Suite vue lac", meta: "4 personnes · 3 nuits", price: "CHF 690" },
        ],
        button: "Réserver",
        confirmed: "Réservation confirmée !",
        confirmedSub: "Chambre jardin · 14–17 nov.",
        calendarTitle: "Novembre",
        calendarMeta: "3 logements",
        calendarUnits: ["Chambre jardin", "Suite vue lac", "Studio"],
        legend: ["Directe", "Airbnb", "Booking.com"],
      },
    },

    beauty: {
      meta: {
        title: "Santé & beauté — Des rendez-vous en ligne sur votre propre site",
        description:
          "Sites web pour salons, barbiers, cliniques et studios avec TableFront Rendez-vous : vos clients choisissent une prestation, un professionnel et un horaire sur votre site, et votre équipe travaille avec un calendrier du jour.",
      },
      eyebrow: "Salons, barbiers, cliniques & studios",
      headline1: "Un agenda rempli,",
      headline2: "réservé sur votre propre site.",
      sub: "Un site qui présente clairement vos prestations, votre équipe et vos tarifs, et une plateforme de rendez-vous qui permet au client de réserver la bonne personne au bon moment, pendant que vous êtes occupé avec quelqu'un d'autre.",
      strip: [
        "Aucune commission par rendez-vous",
        "Un calendrier par professionnel",
        "E-mails de confirmation et de rappel",
        "Français · Anglais · Allemand · Portugais",
      ],
      site: {
        headline: "Un site pensé pour remplir l'agenda.",
        items: [
          {
            title: "Prestations et tarifs, clairs",
            body: "Ce que vous proposez, combien de temps cela dure et ce que cela coûte, pour que le client sache ce qu'il a réservé.",
          },
          {
            title: "Une action claire : prendre rendez-vous",
            body: "Un bouton de réservation sur chaque page, plutôt qu'un téléphone qui sonne quand vous avez les mains prises.",
          },
          {
            title: "Trouvé à proximité",
            body: "Référencement local, vos horaires et votre adresse, rapide sur mobile.",
          },
        ],
      },
      platform: {
        eyebrow: "TableFront Rendez-vous",
        headline: "Prestation, professionnel, horaire. Réservé.",
        sub: "Le client choisit une prestation, un professionnel ou vous laisse décider, et ne voit que les horaires vraiment libres. Pas de compte, rien à télécharger.",
        features: [
          {
            title: "Un calendrier du jour par professionnel",
            body: "La journée de chacun côte à côte, avec le nombre de rendez-vous et le chiffre d'affaires attendu. Marquez les clients comme arrivés, terminés ou absents.",
          },
          {
            title: "Des prestations à leur vraie durée",
            body: "Chaque prestation a sa catégorie, sa durée et son prix, plus un temps après pour ranger, afin que l'agenda laisse les pauses nécessaires.",
          },
          {
            title: "Une équipe avec ses propres horaires",
            body: "Définissez qui fait quelles prestations, les horaires de travail et les absences. Le client qui ne choisit personne est attribué au professionnel le moins occupé.",
          },
          {
            title: "Téléphone et sans rendez-vous aussi",
            body: "Ajoutez des rendez-vous depuis le tableau de bord, même en dehors des horaires d'ouverture, et retrouvez n'importe quel client par son nom.",
          },
          {
            title: "Des e-mails qui font les rappels",
            body: "Une confirmation immédiate, un rappel la veille et un lien pour annuler sans téléphoner. Vous recevez un e-mail à chaque nouveau rendez-vous et à chaque annulation.",
          },
          {
            title: "Quatre langues, automatiquement",
            body: "Le widget et les e-mails suivent la langue du client : français, anglais, allemand ou portugais.",
          },
        ],
      },
      own: {
        eyebrow: "Pourquoi pas une place de marché",
        headline: "Vos clients, votre agenda, zéro commission.",
        points: [
          {
            title: "Rien par rendez-vous",
            body: "La plateforme a un prix mensuel fixe, ou fait partie de votre formule de site. Nous ne prenons rien par réservation ni par client.",
          },
          {
            title: "Vos clients restent sur votre site",
            body: "Ils réservent sur votre domaine, dans votre design, pas dans une liste à côté du salon d'en face.",
          },
          {
            title: "La liste de clients est à vous",
            body: "Noms, numéros de téléphone et rendez-vous restent dans votre tableau de bord, pas dans la base marketing d'une autre entreprise.",
          },
        ],
      },
      get: {
        headline: "Deux façons de l'avoir.",
        plans: [
          {
            title: "Inclus dans Mensuel Professionnel",
            body: "Votre site et la plateforme de rendez-vous ensemble : nous construisons, hébergeons et maintenons le site et configurons vos prestations, votre équipe et vos horaires avec vous. Une mensualité, sans coût par réservation.",
          },
          {
            title: "Ou la plateforme seule",
            body: "Vous avez déjà un site, ou vous préférez acheter le vôtre en une fois ? Prenez seulement la plateforme de rendez-vous : le même widget, le même calendrier et les mêmes e-mails, ajoutés à votre site actuel avec une seule ligne de code.",
          },
        ],
      },
      setup: {
        eyebrow: "Bon à savoir",
        items: [
          {
            title: "Nous installons tout pour vous",
            body: "Il n'y a pas d'inscription en libre-service. Nous ajoutons vos prestations, votre équipe et vos horaires avec vous et intégrons le widget le jour du lancement.",
          },
          {
            title: "Une ligne de code, partout",
            body: "Le widget s'intègre aussi à un site existant avec une seule balise script, si vous n'êtes pas prêt pour une refonte.",
          },
          {
            title: "E-mail, pas SMS",
            body: "Confirmations, rappels et annulations partent par e-mail. Le client vous paie le jour du rendez-vous.",
          },
        ],
      },
      exitTitle: "Envie de le voir avec vos propres prestations ?",
      exitSub: "Réservez un appel et nous vous montrons le calendrier et le widget.",
      mock: {
        widgetTitle: "Prendre rendez-vous",
        service: "Prestation",
        services: [
          { name: "Coupe & couleur", meta: "90 min · CHF 140" },
          { name: "Coupe homme", meta: "30 min · CHF 45" },
        ],
        professional: "Professionnel",
        professionals: ["Indifférent", "Nora", "Tiago"],
        time: "Mar. 18 nov.",
        slots: ["09:30", "10:00", "10:30", "11:00"],
        button: "Prendre rendez-vous",
        confirmed: "Rendez-vous réservé !",
        confirmedSub: "Coupe & couleur · Mar. 10:30 · Nora",
        agendaTitle: "Mardi",
        agendaMeta: "9 rendez-vous",
        columns: ["Nora", "Tiago"],
        blocks: ["Coupe & couleur", "Brushing", "Coupe homme", "Barbe", "Couleur"],
      },
    },

    shops: {
      meta: {
        title: "Producteurs & boutiques — Un site de marque avec votre propre boutique en ligne",
        description:
          "Sites web pour producteurs artisanaux, boutiques et petits commerces : un site de marque avec boutique en ligne intégrée, fiches produits, paiement et expédition, pour vendre en direct plutôt que sur les places de marché.",
      },
      eyebrow: "Producteurs artisanaux, boutiques & commerces en ligne",
      headline1: "Vendez en direct,",
      headline2: "depuis votre propre site.",
      sub: "Un site de marque et une boutique en ligne en un : votre histoire, vos produits et un paiement qui fonctionne sur mobile. Le client achète chez vous, sur votre propre domaine.",
      strip: [
        "Site de marque et boutique en un",
        "Paiement, encaissement & expédition",
        "Notifications de stock & de commandes",
        "Formation pour la gérer vous-même",
      ],
      site: {
        headline: "Un site pensé pour conclure la vente.",
        items: [
          {
            title: "Votre marque d'abord",
            body: "L'histoire, les personnes et le lieu derrière le produit, dans un design qui vous ressemble et non à un modèle.",
          },
          {
            title: "Une action claire : acheter",
            body: "De la fiche produit au paiement en quelques gestes, sans envoyer le client sur un autre site.",
          },
          {
            title: "Trouvé par les bonnes personnes",
            body: "Référencement local et analytics, prêt pour plusieurs langues.",
          },
        ],
      },
      platform: {
        eyebrow: "La boutique en ligne",
        headline: "Ce dont une petite boutique a besoin, et rien de superflu.",
        sub: "Intégrée à votre site, dans le même design, pour que la boutique fasse partie de la marque.",
        features: [
          {
            title: "Fiches produits",
            body: "Photos, description et prix pour chaque produit, présentés pour vendre.",
          },
          {
            title: "Paiement et encaissement",
            body: "Un paiement configuré avec vos moyens d'encaissement et testé sur de vrais téléphones.",
          },
          {
            title: "Expédition configurée",
            body: "Vos options et frais de livraison, configurés avec vous avant le lancement.",
          },
          {
            title: "Notifications de stock et de commandes",
            body: "Vous êtes prévenu de chaque commande dès qu'elle arrive, et du stock avant qu'il ne s'épuise.",
          },
          {
            title: "Formation à la gestion de votre boutique",
            body: "Nous vous montrons comment ajouter des produits, modifier les prix et traiter les commandes, pour que vous ne dépendiez pas de nous.",
          },
          {
            title: "Tout ce qu'inclut Professionnel",
            body: "Design sur mesure à plusieurs pages, référencement local et analytics, prêt pour le multilingue, et 30 jours de support après le lancement.",
          },
        ],
      },
      own: {
        eyebrow: "Pourquoi vendre en direct",
        headline: "Vos clients, votre marque, votre boutique.",
        points: [
          {
            title: "Pas de place de marché entre vous",
            body: "Le client achète chez vous, sur votre domaine, pas dans une liste avec un concurrent à un clic.",
          },
          {
            title: "La liste de clients est à vous",
            body: "Commandes et contacts restent chez vous, pour faire revenir vos clients.",
          },
          {
            title: "Déjà en vente pour un vrai producteur",
            body: "Aconchego, un gin artisanal de l'Algarve, fonctionne sur un site de marque avec boutique intégrée que nous avons construit. Il figure sur la page d'accueil, dans nos réalisations.",
          },
        ],
      },
      get: {
        headline: "Un prix. La boutique est à vous.",
        plans: [
          {
            title: "Boutique en ligne",
            body: "Une création unique : site de marque, boutique, paiement, encaissement et expédition, avec formation. Le site et son contenu sont à vous. Les modifications de contenu ultérieures sont devisées par mise à jour.",
          },
        ],
      },
      setup: {
        eyebrow: "Bon à savoir",
        items: [
          {
            title: "Ce qu'il nous faut",
            body: "Votre logo, vos photos, la liste des produits avec leurs prix et vos options de livraison, collectés une seule fois via un formulaire.",
          },
          {
            title: "En ligne en 7 jours",
            body: "À compter du jour où nous avons vos éléments.",
          },
          {
            title: "Après le lancement",
            body: "30 jours de support sont inclus. Ensuite, les changements sont devisés par mise à jour : petit changement, petite facture.",
          },
        ],
      },
      exitTitle: "Envie de voir vos produits dans une boutique à vous ?",
      exitSub: "Réservez un appel, ou demandez d'abord un prototype gratuit.",
      mock: {
        shopName: "Atelier Vida",
        products: [
          { name: "Bougie artisanale", price: "CHF 32" },
          { name: "Tablier en lin", price: "CHF 54" },
        ],
        add: "Ajouter au panier",
        basket: "Panier",
        basketMeta: "2 articles · CHF 86",
        checkout: "Commander",
        toastTitle: "Nouvelle commande",
        toastDetail: "Commande #124 · CHF 86",
        ordersTitle: "Commandes du jour",
        orders: [
          { id: "#124", status: "Payée" },
          { id: "#123", status: "Expédiée" },
          { id: "#122", status: "Expédiée" },
        ],
      },
    },
  },
}

export default business
