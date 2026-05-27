"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type Language = "EN" | "DE" | "PT"

export const translations = {
  // NAVBAR
  nav_why: {
    EN: "WHY TABLEFRONT",
    DE: "WARUM TABLEFRONT",
    PT: "PORQUÊ TABLEFRONT",
  },
  nav_how: {
    EN: "HOW IT WORKS",
    DE: "SO FUNKTIONIERT ES",
    PT: "COMO FUNCIONA",
  },
  nav_team: {
    EN: "OUR TEAM",
    DE: "UNSER TEAM",
    PT: "A NOSSA EQUIPA",
  },
  nav_investment: {
    EN: "INVESTMENT",
    DE: "INVESTITION",
    PT: "INVESTIMENTO",
  },
  nav_cta: {
    EN: "BOOK A FREE CALL",
    DE: "KOSTENLOSES GESPRÄCH",
    PT: "AGENDAR CHAMADA",
  },

  // HERO
  hero_eyebrow: {
    EN: "HOSPITALITY WEBSITE SPECIALISTS",
    DE: "WEBSEITEN-SPEZIALISTEN FÜR DIE GASTRONOMIE",
    PT: "ESPECIALISTAS EM WEBSITES DE HOTELARIA",
  },
  hero_headline_1: {
    EN: "Your guests' first impression,",
    DE: "Der erste Eindruck Ihrer Gäste,",
    PT: "A primeira impressão dos seus clientes,",
  },
  hero_headline_2: {
    EN: "rebuilt in 7 days.",
    DE: "neu gestaltet in 7 Tagen.",
    PT: "reconstruída em 7 dias.",
  },
  hero_sub: {
    EN: "Websites built for hospitality. By people who lived it.",
    DE: "Webseiten für die Gastronomie. Von Menschen, die sie gelebt haben.",
    PT: "Websites criados para a hotelaria. Por pessoas que a viveram.",
  },
  hero_cta: {
    EN: "BOOK A FREE CALL",
    DE: "KOSTENLOSES GESPRÄCH",
    PT: "AGENDAR CHAMADA",
  },
  hero_sub_cta: {
    EN: "7-day delivery · No long contracts · Built for hospitality",
    DE: "7-Tage-Lieferung · Keine langen Verträge · Für die Gastronomie",
    PT: "Entrega em 7 dias · Sem contratos longos · Feito para hotelaria",
  },
  hero_scroll: {
    EN: "SCROLL TO EXPLORE",
    DE: "SCROLLEN ZUM ENTDECKEN",
    PT: "DESLIZE PARA EXPLORAR",
  },

  // PAIN POINTS
  pain_eyebrow: {
    EN: "WHY YOUR WEBSITE IS COSTING YOU",
    DE: "WARUM IHRE WEBSEITE SIE KOSTET",
    PT: "PORQUE O SEU WEBSITE LHE ESTÁ A CUSTAR",
  },
  pain_headline: {
    EN: "The silent problems hurting your business every day.",
    DE: "Die stillen Probleme, die Ihr Unternehmen täglich belasten.",
    PT: "Os problemas silenciosos que prejudicam o seu negócio todos os dias.",
  },
  pain_1_title: {
    EN: "Reputation",
    DE: "Reputation",
    PT: "Reputação",
  },
  pain_1_body: {
    EN: "Your website is your first impression. An outdated or slow site makes guests choose a competitor before they ever experience what you offer.",
    DE: "Ihre Webseite ist Ihr erster Eindruck. Eine veraltete oder langsame Seite lässt Gäste zur Konkurrenz wechseln, bevor sie Ihr Angebot erleben.",
    PT: "O seu website é a sua primeira impressão. Um site desatualizado ou lento faz com que os clientes escolham um concorrente antes de experienciarem o que tem para oferecer.",
  },
  pain_2_title: {
    EN: "Revenue",
    DE: "Einnahmen",
    PT: "Receita",
  },
  pain_2_body: {
    EN: "Every missed direct reservation is full-margin revenue gone. High bounce rates and third-party commissions are quietly bleeding your business every month.",
    DE: "Jede verpasste Direktreservierung ist verlorener Umsatz. Hohe Absprungraten und Drittanbieterprovisionen belasten Ihr Unternehmen jeden Monat.",
    PT: "Cada reserva direta perdida é receita a 100% de margem que desaparece. Taxas de rejeição elevadas e comissões de terceiros estão a sangrar o seu negócio todos os meses.",
  },
  pain_3_title: {
    EN: "Time",
    DE: "Zeit",
    PT: "Tempo",
  },
  pain_3_body: {
    EN: "Manually updating menus, fixing broken links, and handling phone bookings costs you hours every week. Time you should be spending on your guests, not your inbox.",
    DE: "Das manuelle Aktualisieren von Speisekarten, das Beheben defekter Links und die Bearbeitung von Telefonreservierungen kostet Sie wöchentlich Stunden. Zeit, die Sie bei Ihren Gästen verbringen sollten.",
    PT: "Atualizar menus manualmente, corrigir links quebrados e gerir reservas por telefone custa-lhe horas por semana. Tempo que devia estar a dedicar aos seus clientes.",
  },
  pain_4_title: {
    EN: "Risk",
    DE: "Risiko",
    PT: "Risco",
  },
  pain_4_body: {
    EN: "Poor Google visibility and outdated platforms leave you exposed. One stronger competitor online can cause a sudden drop in bookings and foot traffic overnight.",
    DE: "Schlechte Google-Sichtbarkeit und veraltete Plattformen machen Sie angreifbar. Ein stärkerer Online-Konkurrent kann über Nacht zu einem plötzlichen Rückgang der Buchungen führen.",
    PT: "Pouca visibilidade no Google e plataformas desatualizadas deixam-no exposto. Um concorrente mais forte online pode causar uma queda repentina nas reservas de um dia para o outro.",
  },

  // HOW IT WORKS
  process_eyebrow: {
    EN: "THE PROCESS",
    DE: "DER PROZESS",
    PT: "O PROCESSO",
  },
  process_headline: {
    EN: "From outdated to fully live in 7 days.",
    DE: "Von veraltet zu vollständig live in 7 Tagen.",
    PT: "De desatualizado a totalmente live em 7 dias.",
  },
  step_1_title: {
    EN: "Discovery",
    DE: "Analyse",
    PT: "Descoberta",
  },
  step_1_body: {
    EN: "We learn your business, your guests, and exactly what your current online presence is costing you.",
    DE: "Wir analysieren Ihr Unternehmen, Ihre Gäste und was Ihre aktuelle Online-Präsenz Sie kostet.",
    PT: "Conhecemos o seu negócio, os seus clientes e exatamente o que a sua presença online atual lhe está a custar.",
  },
  step_2_title: {
    EN: "Design",
    DE: "Design",
    PT: "Design",
  },
  step_2_body: {
    EN: "We build a custom design that matches your brand and converts browsers into direct bookings.",
    DE: "Wir erstellen ein individuelles Design, das Ihre Marke widerspiegelt und Besucher in Direktbuchungen umwandelt.",
    PT: "Criamos um design personalizado que corresponde à sua marca e converte visitantes em reservas diretas.",
  },
  step_3_title: {
    EN: "Build",
    DE: "Entwicklung",
    PT: "Desenvolvimento",
  },
  step_3_body: {
    EN: "We put it all together — menu, reservations, local SEO, fully mobile-first.",
    DE: "Wir fügen alles zusammen — Speisekarte, Reservierungen, lokales SEO, vollständig mobil-optimiert.",
    PT: "Juntamos tudo — menu, reservas, SEO local, totalmente mobile-first.",
  },
  step_4_title: {
    EN: "Handover",
    DE: "Übergabe",
    PT: "Entrega",
  },
  step_4_body: {
    EN: "Your site goes live in 7 days. We train your team and stay on for 30 days of support.",
    DE: "Ihre Webseite geht in 7 Tagen live. Wir schulen Ihr Team und stehen Ihnen 30 Tage lang zur Verfügung.",
    PT: "O seu site fica live em 7 dias. Treinamos a sua equipa e ficamos disponíveis durante 30 dias de suporte.",
  },
  process_cta: {
    EN: "BOOK A FREE CALL",
    DE: "KOSTENLOSES GESPRÄCH",
    PT: "AGENDAR CHAMADA",
  },

  // LEADERS
  team_eyebrow: {
    EN: "THE PEOPLE BEHIND IT",
    DE: "DIE MENSCHEN DAHINTER",
    PT: "AS PESSOAS POR DETRÁS",
  },
  team_headline: {
    EN: "Led by people who've worked the floor.",
    DE: "Geführt von Menschen, die selbst in der Gastronomie gearbeitet haben.",
    PT: "Liderado por pessoas que trabalharam no terreno.",
  },
  team_sub: {
    EN: "We didn't come from agencies. We came from hospitality.",
    DE: "Wir kommen nicht aus Agenturen. Wir kommen aus der Gastronomie.",
    PT: "Não viemos de agências. Viemos da hotelaria.",
  },
  daniel_role: {
    EN: "CEO & LEAD DEVELOPER",
    DE: "CEO & LEITENDER ENTWICKLER",
    PT: "CEO & PROGRAMADOR PRINCIPAL",
  },
  daniel_bio: {
    EN: "Daniel spent 10+ years working in hospitality before building TableFront — he knows firsthand what a broken website costs a business.",
    DE: "Daniel arbeitete über 10 Jahre in der Gastronomie, bevor er TableFront gründete — er weiß aus erster Hand, was eine schlechte Webseite ein Unternehmen kostet.",
    PT: "Daniel passou mais de 10 anos a trabalhar na hotelaria antes de criar o TableFront — sabe em primeira mão o que um website com problemas custa a um negócio.",
  },
  devin_role: {
    EN: "SALES MANAGER",
    DE: "VERTRIEBSLEITER",
    PT: "GESTOR COMERCIAL",
  },
  devin_bio: {
    EN: "With a Hotel Management degree and 7+ years on the floor, Devin brings real hospitality instinct to every client conversation — making sure the right businesses find TableFront.",
    DE: "Mit einem Abschluss in Hotelmanagement und über 7 Jahren Erfahrung bringt Devin echten Gastgeist in jedes Kundengespräch — und sorgt dafür, dass die richtigen Unternehmen TableFront finden.",
    PT: "Com uma licenciatura em Gestão Hoteleira e mais de 7 anos no terreno, Devin traz instinto real de hotelaria a cada conversa com clientes — garantindo que os negócios certos encontram o TableFront.",
  },

  // FINAL CTA
  cta_headline: {
    EN: "Your guests are searching for you right now.",
    DE: "Ihre Gäste suchen Sie gerade jetzt.",
    PT: "Os seus clientes estão à sua procura neste momento.",
  },
  cta_sub: {
    EN: "Don't let an outdated website send them somewhere else.",
    DE: "Lassen Sie nicht zu, dass eine veraltete Webseite sie zur Konkurrenz schickt.",
    PT: "Não deixe que um website desatualizado os envie para outro lugar.",
  },
  cta_button: {
    EN: "BOOK YOUR FREE CALL",
    DE: "IHR KOSTENLOSES GESPRÄCH",
    PT: "AGENDAR A SUA CHAMADA",
  },
  cta_note: {
    EN: "30-minute call · No commitment · Live in 7 days",
    DE: "30-Minuten-Gespräch · Keine Verpflichtung · Live in 7 Tagen",
    PT: "Chamada de 30 minutos · Sem compromisso · Live em 7 dias",
  },

  // FOOTER
  footer_tagline: {
    EN: "Websites built for hospitality. By people who lived it.",
    DE: "Webseiten für die Gastronomie. Von Menschen, die sie gelebt haben.",
    PT: "Websites criados para a hotelaria. Por pessoas que a viveram.",
  },
  footer_rights: {
    EN: "© 2026 TableFront · All rights reserved",
    DE: "© 2026 TableFront · Alle Rechte vorbehalten",
    PT: "© 2026 TableFront · Todos os direitos reservados",
  },
  footer_nav_how: {
    EN: "How It Works",
    DE: "So funktioniert es",
    PT: "Como Funciona",
  },
  footer_nav_team: {
    EN: "Our Team",
    DE: "Unser Team",
    PT: "A Nossa Equipa",
  },
  footer_nav_call: {
    EN: "Book a Call",
    DE: "Gespräch buchen",
    PT: "Agendar Chamada",
  },
  footer_nav_pricing: {
    EN: "Pricing",
    DE: "Preise",
    PT: "Preços",
  },
  footer_navigation: {
    EN: "Navigation",
    DE: "Navigation",
    PT: "Navegação",
  },

  // PRICING PAGE
  pricing_eyebrow: {
    EN: "Hospitality Website Packages",
    DE: "Gastronomie-Website-Pakete",
    PT: "Pacotes de Website para Hotelaria",
  },
  pricing_headline_1: {
    EN: "A website that works",
    DE: "Eine Webseite, die so hart arbeitet",
    PT: "Um website que trabalha",
  },
  pricing_headline_2: {
    EN: "as hard as you do.",
    DE: "wie Sie selbst.",
    PT: "tão arduamente como você.",
  },
  pricing_sub: {
    EN: "Built by people who actually worked in hospitality. Every package includes a custom, mobile-first site live in 7 days — protecting your reputation and driving direct reservations.",
    DE: "Erstellt von Menschen, die tatsächlich in der Gastronomie gearbeitet haben. Jedes Paket beinhaltet eine individuelle, mobil-optimierte Webseite — live in 7 Tagen.",
    PT: "Criado por pessoas que trabalharam na hotelaria. Cada pacote inclui um site personalizado e mobile-first live em 7 dias — protegendo a sua reputação e gerando reservas diretas.",
  },
  pricing_choose: {
    EN: "Choose your plan",
    DE: "Wählen Sie Ihr Paket",
    PT: "Escolha o seu plano",
  },
  pricing_choose_sub: {
    EN: "All plans start with a clean, professional site with PDF menu. Scope what you need with add-ons below.",
    DE: "Alle Pakete beginnen mit einer sauberen, professionellen Webseite mit PDF-Speisekarte. Erweitern Sie nach Bedarf.",
    PT: "Todos os planos começam com um site limpo e profissional com menu em PDF. Personalize conforme necessário com os extras abaixo.",
  },
  pricing_included_title: {
    EN: "What's included — and what's not",
    DE: "Was enthalten ist — und was nicht",
    PT: "O que está incluído — e o que não está",
  },
  pricing_included_sub: {
    EN: "Read this before you sign. Clear scope protects us both.",
    DE: "Lesen Sie dies vor der Unterzeichnung. Klarer Umfang schützt uns beide.",
    PT: "Leia isto antes de assinar. Um âmbito claro protege-nos a ambos.",
  },
  pricing_addons_title: {
    EN: "Upgrade your package",
    DE: "Paket erweitern",
    PT: "Melhore o seu pacote",
  },
  pricing_addons_sub: {
    EN: "Optional add-ons — mix and match based on what matters most.",
    DE: "Optionale Erweiterungen — kombinieren Sie nach Bedarf.",
    PT: "Extras opcionais — combine conforme o que for mais importante.",
  },
  pricing_summary_title: {
    EN: "Your Investment",
    DE: "Ihre Investition",
    PT: "O Seu Investimento",
  },
  pricing_summary_sub: {
    EN: "Live summary based on your selections above.",
    DE: "Live-Zusammenfassung basierend auf Ihrer Auswahl oben.",
    PT: "Resumo em tempo real baseado nas suas seleções acima.",
  },
  pricing_summary_empty: {
    EN: "Select a plan above to see your investment summary.",
    DE: "Wählen Sie oben ein Paket, um Ihre Investitionsübersicht zu sehen.",
    PT: "Selecione um plano acima para ver o resumo do seu investimento.",
  },
  pricing_total: {
    EN: "Total",
    DE: "Gesamt",
    PT: "Total",
  },
  pricing_cta_note: {
    EN: "All prices in Swiss Francs (CHF) · 7-day build from materials received · No hidden fees\nFinal price confirmed after understanding your full scope. This page was prepared for you after our call.",
    DE: "Alle Preise in Schweizer Franken (CHF) · 7-Tage-Bau ab Materialeingang · Keine versteckten Gebühren\nEndpreis wird nach Verständnis Ihres vollen Umfangs bestätigt. Diese Seite wurde nach unserem Gespräch für Sie vorbereitet.",
    PT: "Todos os preços em Francos Suíços (CHF) · 7 dias de construção após receção dos materiais · Sem taxas ocultas\nPreço final confirmado após compreender o seu âmbito completo. Esta página foi preparada para si após a nossa chamada.",
  },
  pricing_back: {
    EN: "← Back to Home",
    DE: "← Zurück zur Startseite",
    PT: "← Voltar ao Início",
  },
  pricing_select: {
    EN: "Select this plan",
    DE: "Dieses Paket wählen",
    PT: "Selecionar este plano",
  },
  pricing_selected: {
    EN: "✓ Selected",
    DE: "✓ Ausgewählt",
    PT: "✓ Selecionado",
  },
  pricing_starting_from: {
    EN: "Starting from",
    DE: "Ab",
    PT: "A partir de",
  },
  pricing_scope_toggle: {
    EN: "View full scope rules — monthly updates, limits & exclusions",
    DE: "Alle Umfangsregeln ansehen — monatliche Updates, Grenzen & Ausschlüsse",
    PT: "Ver regras de âmbito completas — atualizações mensais, limites e exclusões",
  },

  // PRICING - INCLUDED STRIP
  strip_design: {
    EN: "Custom mobile-first design",
    DE: "Individuelles Mobile-First-Design",
    PT: "Design personalizado mobile-first",
  },
  strip_delivery: {
    EN: "7-day delivery",
    DE: "7-Tage-Lieferung",
    PT: "Entrega em 7 dias",
  },
  strip_seo: {
    EN: "Local SEO setup",
    DE: "Lokales SEO-Setup",
    PT: "Configuração SEO local",
  },
  strip_reservation: {
    EN: "Reservation system",
    DE: "Reservierungssystem",
    PT: "Sistema de reservas",
  },
  strip_support: {
    EN: "30-day support",
    DE: "30 Tage Support",
    PT: "30 dias de suporte",
  },
  strip_training: {
    EN: "Training & handover",
    DE: "Schulung & Übergabe",
    PT: "Formação e entrega",
  },

  // PRICING - PLANS
  plan_onetime: {
    EN: "One-Time Build",
    DE: "Einmaliger Aufbau",
    PT: "Construção Única",
  },
  plan_sub6: {
    EN: "Monthly — 6 Months",
    DE: "Monatlich — 6 Monate",
    PT: "Mensal — 6 Meses",
  },
  plan_sub12: {
    EN: "Monthly — 12 Months",
    DE: "Monatlich — 12 Monate",
    PT: "Mensal — 12 Meses",
  },
  plan_badge_best: {
    EN: "BEST VALUE",
    DE: "BESTES ANGEBOT",
    PT: "MELHOR VALOR",
  },
  plan_onetime_price_sub: {
    EN: "one-time · starting price",
    DE: "einmalig · Startpreis",
    PT: "único · preço inicial",
  },
  plan_monthly_price_sub: {
    EN: "per month · starting price",
    DE: "pro Monat · Startpreis",
    PT: "por mês · preço inicial",
  },
  plan_onetime_commit: {
    EN: "No monthly fees. You own the site.",
    DE: "Keine monatlichen Gebühren. Die Seite gehört Ihnen.",
    PT: "Sem taxas mensais. O site é seu.",
  },
  plan_sub6_commit: {
    EN: "6-month commitment. Cancel after.",
    DE: "6-Monats-Bindung. Danach kündbar.",
    PT: "Compromisso de 6 meses. Cancele depois.",
  },
  plan_sub12_commit: {
    EN: "1 month free — effective ~8% saving.",
    DE: "1 Monat gratis — effektiv ~8% Ersparnis.",
    PT: "1 mês grátis — poupança efetiva de ~8%.",
  },
  plan_onetime_note: {
    EN: "Base build includes a clean PDF menu guests can open and download — simple, fast, professional. Full visual menu available as add-on (+CHF 500).",
    DE: "Der Grundaufbau beinhaltet ein sauberes PDF-Menü, das Gäste öffnen und herunterladen können — einfach, schnell, professionell. Vollständiges visuelles Menü als Add-on erhältlich (+CHF 500).",
    PT: "A construção base inclui um menu PDF limpo que os clientes podem abrir e descarregar — simples, rápido, profissional. Menu visual completo disponível como extra (+CHF 500).",
  },
  plan_sub6_note: {
    EN: "Base includes PDF menu. Add full visual menu integration for +CHF 500 build fee and +CHF 60/mo for updates. Includes 1 menu & content update per contract period.",
    DE: "Basis enthält PDF-Menü. Vollständige visuelle Menüintegration für +CHF 500 Aufbaugebühr und +CHF 60/Monat für Updates. Enthält 1 Menü- & Inhalts-Update pro Vertragsperiode.",
    PT: "Base inclui menu PDF. Adicione integração visual completa do menu por +CHF 500 de taxa de construção e +CHF 60/mês para atualizações. Inclui 1 atualização de menu e conteúdo por período de contrato.",
  },
  plan_sub12_note: {
    EN: "Base includes PDF menu. Add full visual menu integration for +CHF 500 build fee and +CHF 60/mo for updates. Includes 2 menu & content updates per contract period.",
    DE: "Basis enthält PDF-Menü. Vollständige visuelle Menüintegration für +CHF 500 Aufbaugebühr und +CHF 60/Monat für Updates. Enthält 2 Menü- & Inhalts-Updates pro Vertragsperiode.",
    PT: "Base inclui menu PDF. Adicione integração visual completa do menu por +CHF 500 de taxa de construção e +CHF 60/mês para atualizações. Inclui 2 atualizações de menu e conteúdo por período de contrato.",
  },
  plan_sub12_extra: {
    EN: "12 months billed monthly + 1 month free",
    DE: "12 Monate monatlich abgerechnet + 1 Monat gratis",
    PT: "12 meses faturados mensalmente + 1 mês grátis",
  },

  // PRICING - FEATURES
  feat_design: {
    EN: "Custom mobile-first design",
    DE: "Individuelles Mobile-First-Design",
    PT: "Design personalizado mobile-first",
  },
  feat_pdf: {
    EN: "PDF menu (open & download)",
    DE: "PDF-Menü (öffnen & herunterladen)",
    PT: "Menu PDF (abrir e descarregar)",
  },
  feat_reservation: {
    EN: "Reservation system integration",
    DE: "Integration des Reservierungssystems",
    PT: "Integração do sistema de reservas",
  },
  feat_google: {
    EN: "Google Maps, hours & WhatsApp click-to-call",
    DE: "Google Maps, Öffnungszeiten & WhatsApp Click-to-Call",
    PT: "Google Maps, horários e WhatsApp click-to-call",
  },
  feat_seo: {
    EN: "Local SEO setup",
    DE: "Lokales SEO-Setup",
    PT: "Configuração SEO local",
  },
  feat_analytics: {
    EN: "Basic analytics dashboard",
    DE: "Einfaches Analytics-Dashboard",
    PT: "Painel de análise básico",
  },
  feat_support: {
    EN: "30 days post-launch support",
    DE: "30 Tage Support nach dem Start",
    PT: "30 dias de suporte pós-lançamento",
  },
  feat_training: {
    EN: "Training & handover session",
    DE: "Schulungs- & Übergabesitzung",
    PT: "Sessão de formação e entrega",
  },
  feat_updates_monthly: {
    EN: "Monthly menu & content updates",
    DE: "Monatliche Menü- & Inhalts-Updates",
    PT: "Atualizações mensais de menu e conteúdo",
  },
  feat_updates_1: {
    EN: "1 menu & content update included",
    DE: "1 Menü- & Inhalts-Update inklusive",
    PT: "1 atualização de menu e conteúdo incluída",
  },
  feat_updates_2: {
    EN: "2 menu & content updates included",
    DE: "2 Menü- & Inhalts-Updates inklusive",
    PT: "2 atualizações de menu e conteúdo incluídas",
  },
  feat_maintenance: {
    EN: "Ongoing maintenance & fixes",
    DE: "Laufende Wartung & Fehlerbehebung",
    PT: "Manutenção contínua e correções",
  },
  feat_note_contract: {
    EN: "Per contract period",
    DE: "Pro Vertragsperiode",
    PT: "Por período de contrato",
  },

  // PRICING - SCOPE RULES
  scope_always: {
    EN: "Always included in monthly plans",
    DE: "Immer in Monatspaketen enthalten",
    PT: "Sempre incluído em planos mensais",
  },
  scope_limited: {
    EN: "Limited — visual menu subscribers only",
    DE: "Begrenzt — nur für visuelle Menü-Abonnenten",
    PT: "Limitado — apenas para assinantes de menu visual",
  },
  scope_never: {
    EN: "Never included — quoted separately",
    DE: "Nie enthalten — separat angeboten",
    PT: "Nunca incluído — orçamento separado",
  },
  scope_item_6month: {
    EN: "6-month plan: 1 menu & content update included per contract period",
    DE: "6-Monats-Paket: 1 Menü- & Inhalts-Update pro Vertragsperiode inklusive",
    PT: "Plano de 6 meses: 1 atualização de menu e conteúdo incluída por período de contrato",
  },
  scope_item_12month: {
    EN: "12-month plan: 2 menu & content updates included per contract period",
    DE: "12-Monats-Paket: 2 Menü- & Inhalts-Updates pro Vertragsperiode inklusive",
    PT: "Plano de 12 meses: 2 atualizações de menu e conteúdo incluídas por período de contrato",
  },
  scope_item_hours: {
    EN: "Opening hours and contact details edits",
    DE: "Änderungen von Öffnungszeiten und Kontaktdaten",
    PT: "Edições de horários de funcionamento e detalhes de contacto",
  },
  scope_item_text: {
    EN: "Small text or description edits",
    DE: "Kleine Text- oder Beschreibungsänderungen",
    PT: "Pequenas edições de texto ou descrição",
  },
  scope_item_redesign: {
    EN: "Full menu redesign or restructure counts as 1 full update",
    DE: "Komplette Menü-Neugestaltung oder Umstrukturierung zählt als 1 vollständiges Update",
    PT: "Redesign completo ou reestruturação do menu conta como 1 atualização completa",
  },
  scope_item_sections: {
    EN: "Adding entirely new menu sections or categories counts as 1 full update",
    DE: "Hinzufügen völlig neuer Menüabschnitte oder Kategorien zählt als 1 vollständiges Update",
    PT: "Adicionar secções ou categorias de menu totalmente novas conta como 1 atualização completa",
  },
  scope_item_photos: {
    EN: "Full photo reshoots requiring bulk image work counted as 1 full update",
    DE: "Komplette Foto-Neuaufnahmen mit umfangreicher Bildarbeit zählen als 1 vollständiges Update",
    PT: "Novas sessões fotográficas completas que requerem trabalho de imagem em massa contam como 1 atualização completa",
  },
  scope_item_pages: {
    EN: "New pages beyond original scope",
    DE: "Neue Seiten über den ursprünglichen Umfang hinaus",
    PT: "Novas páginas além do âmbito original",
  },
  scope_item_ecommerce: {
    EN: "E-commerce, online ordering or loyalty systems",
    DE: "E-Commerce, Online-Bestellung oder Treueprogramme",
    PT: "E-commerce, encomendas online ou sistemas de fidelização",
  },
  scope_item_illustrations: {
    EN: "Custom illustrations or photography shoots",
    DE: "Individuelle Illustrationen oder Fotoshootings",
    PT: "Ilustrações personalizadas ou sessões fotográficas",
  },
  scope_item_pos: {
    EN: "POS or accounting software integrations",
    DE: "POS- oder Buchhaltungssoftware-Integrationen",
    PT: "Integrações de POS ou software de contabilidade",
  },
  scope_item_social: {
    EN: "Social media or Google Ads management",
    DE: "Social Media oder Google Ads Management",
    PT: "Gestão de redes sociais ou Google Ads",
  },
  scope_item_print: {
    EN: "Print menus, signage or brand materials",
    DE: "Gedruckte Menüs, Beschilderung oder Markenmaterialien",
    PT: "Menus impressos, sinalização ou materiais de marca",
  },

  // PRICING - ADDONS
  addon_visual_label: {
    EN: "Full Visual Menu Integration",
    DE: "Vollständige visuelle Menüintegration",
    PT: "Integração Visual Completa do Menu",
  },
  addon_visual_desc: {
    EN: "Every dish and drink built directly into the site — photos, descriptions, allergens, and prices. Guests browse your menu like a magazine, no PDF needed.",
    DE: "Jedes Gericht und Getränk direkt in die Seite eingebaut — Fotos, Beschreibungen, Allergene und Preise. Gäste durchstöbern Ihr Menü wie ein Magazin, kein PDF nötig.",
    PT: "Cada prato e bebida integrado diretamente no site — fotos, descrições, alergénios e preços. Os clientes navegam no seu menu como uma revista, sem necessidade de PDF.",
  },
  addon_visual_scope: {
    EN: "Subscription clients: +CHF 60/mo covers monthly updates (price changes, seasonal swaps, photo replacements). Full menu restructures limited to 2× per year.",
    DE: "Abonnement-Kunden: +CHF 60/Monat deckt monatliche Updates (Preisänderungen, saisonale Wechsel, Foto-Ersetzungen). Komplette Menü-Umstrukturierungen auf 2× pro Jahr begrenzt.",
    PT: "Clientes de assinatura: +CHF 60/mês cobre atualizações mensais (mudanças de preços, trocas sazonais, substituições de fotos). Reestruturações completas do menu limitadas a 2× por ano.",
  },
  addon_visual_sub_badge: {
    EN: "+ CHF 60/mo for updates on subscription",
    DE: "+ CHF 60/Monat für Updates im Abonnement",
    PT: "+ CHF 60/mês para atualizações na assinatura",
  },
  addon_speed_label: {
    EN: "48-Hour Emergency Launch",
    DE: "48-Stunden-Notfall-Start",
    PT: "Lançamento de Emergência 48 Horas",
  },
  addon_speed_desc: {
    EN: "Reopening after renovation or lost your site? We go live in 48 hours so your reputation doesn't take a hit.",
    DE: "Wiedereröffnung nach Renovierung oder Seite verloren? Wir gehen in 48 Stunden live, damit Ihr Ruf keinen Schaden nimmt.",
    PT: "A reabrir após renovação ou perdeu o seu site? Ficamos live em 48 horas para que a sua reputação não seja afetada.",
  },
  addon_guarantee_label: {
    EN: "30-Day Money-Back Guarantee",
    DE: "30-Tage-Geld-zurück-Garantie",
    PT: "Garantia de Devolução de 30 Dias",
  },
  addon_guarantee_desc: {
    EN: "Not happy within 30 days? Full refund. We're confident enough in the work to carry the risk.",
    DE: "Nicht zufrieden innerhalb von 30 Tagen? Volle Rückerstattung. Wir sind selbstbewusst genug, das Risiko zu tragen.",
    PT: "Não está satisfeito em 30 dias? Reembolso total. Estamos confiantes o suficiente no trabalho para assumir o risco.",
  },
  addon_monthly_label: {
    EN: "Monthly Update Service",
    DE: "Monatlicher Update-Service",
    PT: "Serviço de Atualização Mensal",
  },
  addon_monthly_desc: {
    EN: "Menu changes, specials, photos, hours — handled fast, no login needed. Best for owners who update content regularly throughout the year.",
    DE: "Menüänderungen, Specials, Fotos, Öffnungszeiten — schnell erledigt, kein Login nötig. Ideal für Besitzer, die das ganze Jahr über regelmäßig Inhalte aktualisieren.",
    PT: "Mudanças de menu, especiais, fotos, horários — tratados rapidamente, sem necessidade de login. Ideal para proprietários que atualizam conteúdo regularmente ao longo do ano.",
  },
  addon_monthly_scope: {
    EN: "Covers: price edits, seasonal swaps, photo replacements, PDF menu swaps. Full menu restructures: max 2× per year.",
    DE: "Deckt: Preisänderungen, saisonale Wechsel, Foto-Ersetzungen, PDF-Menü-Austausch. Komplette Menü-Umstrukturierungen: max. 2× pro Jahr.",
    PT: "Cobre: edições de preços, trocas sazonais, substituições de fotos, trocas de menu PDF. Reestruturações completas do menu: máx. 2× por ano.",
  },
  addon_monthly_tag: {
    EN: "One-time plan only",
    DE: "Nur für Einmal-Pakete",
    PT: "Apenas para plano único",
  },
  addon_ondemand_label: {
    EN: "Per-Update (Pay as You Go)",
    DE: "Pro Update (Pay as You Go)",
    PT: "Por Atualização (Pague conforme usar)",
  },
  addon_ondemand_desc: {
    EN: "Need an extra update beyond your included allowance, or on a one-time plan? Pay per update based on scope. No monthly commitment.",
    DE: "Benötigen Sie ein zusätzliches Update über Ihr inkludiertes Kontingent hinaus oder mit einem Einmal-Paket? Zahlen Sie pro Update basierend auf dem Umfang. Keine monatliche Verpflichtung.",
    PT: "Precisa de uma atualização extra além do seu limite incluído, ou num plano único? Pague por atualização com base no âmbito. Sem compromisso mensal.",
  },
  addon_ondemand_scope: {
    EN: "Final price confirmed before each update based on what needs changing.",
    DE: "Endpreis wird vor jedem Update basierend auf den benötigten Änderungen bestätigt.",
    PT: "Preço final confirmado antes de cada atualização com base no que precisa de ser alterado.",
  },
  addon_support_label: {
    EN: "60-Day Post-Launch Support",
    DE: "60-Tage-Support nach dem Start",
    PT: "60 Dias de Suporte Pós-Lançamento",
  },
  addon_support_desc: {
    EN: "Dedicated support and weekly check-in calls for 60 days after launch. Zero surprises, zero stress.",
    DE: "Dedizierter Support und wöchentliche Check-in-Anrufe für 60 Tage nach dem Start. Keine Überraschungen, kein Stress.",
    PT: "Suporte dedicado e chamadas semanais de acompanhamento durante 60 dias após o lançamento. Zero surpresas, zero stress.",
  },
  addon_reports_label: {
    EN: "3-Month Performance Reports",
    DE: "3-Monats-Leistungsberichte",
    PT: "Relatórios de Desempenho de 3 Meses",
  },
  addon_reports_desc: {
    EN: "Monthly report showing visitor numbers, top pages, and reservation conversion — so you can see the results in real numbers.",
    DE: "Monatlicher Bericht mit Besucherzahlen, Top-Seiten und Reservierungskonversion — damit Sie die Ergebnisse in echten Zahlen sehen.",
    PT: "Relatório mensal mostrando números de visitantes, páginas mais visitadas e conversão de reservas — para que possa ver os resultados em números reais.",
  },
  addon_price_visual: {
    EN: "+CHF 500",
    DE: "+CHF 500",
    PT: "+CHF 500",
  },
  addon_price_visual_sub: {
    EN: "one-time build fee",
    DE: "einmalige Aufbaugebühr",
    PT: "taxa de construção única",
  },
  addon_price_speed: {
    EN: "+CHF 800",
    DE: "+CHF 800",
    PT: "+CHF 800",
  },
  addon_price_guarantee: {
    EN: "+CHF 600",
    DE: "+CHF 600",
    PT: "+CHF 600",
  },
  addon_price_monthly: {
    EN: "+CHF 79/mo",
    DE: "+CHF 79/Monat",
    PT: "+CHF 79/mês",
  },
  addon_price_ondemand: {
    EN: "From CHF 80",
    DE: "Ab CHF 80",
    PT: "A partir de CHF 80",
  },
  addon_price_support: {
    EN: "+CHF 400",
    DE: "+CHF 400",
    PT: "+CHF 400",
  },
  addon_price_reports: {
    EN: "+CHF 350",
    DE: "+CHF 350",
    PT: "+CHF 350",
  },
} as const

type TranslationKey = keyof typeof translations

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("EN")

  const t = (key: TranslationKey): string => {
    return translations[key]?.[lang] || translations[key]?.["EN"] || key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
