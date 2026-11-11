import type { Dictionary } from "./en"
import business from "./business.pt"

const pt: Dictionary = {
  meta: {
    home: {
      title: "TableFront — Websites que transformam visitas em reservas, encomendas e vendas",
      description:
        "Websites para negócios que vendem diretamente aos clientes — hotelaria, saúde & beleza, produtores e lojas. Uma única ação clara: reservar, encomendar ou comprar. Live em 7 dias, protótipo gratuito primeiro.",
    },
    pricing: {
      title: "Preços — Pacotes de website fixos, em CHF ou EUR",
      description:
        "Preços transparentes para websites: construção única desde €490 / CHF 790, parcerias mensais desde €49 / CHF 79. Fixos por mercado, sem taxas ocultas, entrega em 7 dias.",
    },
    reservations: {
      title: "Restaurantes — Reservas de mesa sem comissões no seu próprio website",
      description: "TableFront Reservas: um widget de reservas sem comissões para restaurantes e cafés, com e-mails de confirmação e lembrete, mapa de sala em tempo real e vista do dia para a sua equipa. Incluído no plano Mensal Profissional, ou à parte para um website já existente.",
    },
    legal: {
      title: "Privacidade & Aviso Legal",
      description: "Como o TableFront trata os seus dados — e quem está por detrás do site.",
    },
  },

  nav: {
    business: "Para o seu negócio",
    how: "Como funciona",
    work: "Projetos",
    pricing: "Preços",
    bookCall: "Chamada gratuita",
    login: "Entrar",
    getPrototype: "Protótipo grátis",
    languageLabel: "Idioma",
    currencyLabel: "Moeda",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    backHome: "Voltar",
    homeLabel: "TableFront — página inicial",
    mainNavLabel: "Navegação principal",
  },

  hero: {
    /** Rendered as "{eyebrowPrefix} {cycling label}" — the labels rotate with a CSS-only animation. */
    eyebrowPrefix: "Websites para",
    verticals: ["restaurantes", "cafés", "salões", "clínicas", "lojas"],
    headline1: "Websites que transformam visitas",
    headline2: "em clientes.",
    sub: "Nascido na hotelaria — feito para todos os negócios que vendem diretamente aos clientes.",
    ctaPrimary: "Agendar chamada gratuita",
    ctaSecondary: "Receber protótipo grátis",
    trust: "Live em 7 dias · Uma única ação clara · Feito por quem trabalhou no terreno",
    showcase: {
      ariaLabel: "O website de um cliente num telemóvel a receber uma reserva, uma encomenda, uma marcação e uma venda, com um gráfico a subir.",
      items: [
      {
        name: "Casa Marisa",
        tagline: "Jantar a partir das 18:00, de terça a domingo",
        cta: "Reservar mesa",
        notifTitle: "Nova reserva",
        notifDetail: "Mesa para 4 · Sex 20:00",
        statLabel: "Reservas este mês",
        statValue: "+38%",
      },
      {
        name: "Café Lumen",
        tagline: "Torrado esta semana, servido hoje",
        cta: "Encomendar",
        notifTitle: "Nova encomenda",
        notifDetail: "2 galões · levantar às 08:40",
        statLabel: "Encomendas este mês",
        statValue: "+52%",
      },
      {
        name: "Studio Nora",
        tagline: "Corte, cor e cuidado",
        cta: "Fazer marcação",
        notifTitle: "Marcação feita",
        notifDetail: "Corte & cor · Ter 10:30",
        statLabel: "Marcações este mês",
        statValue: "+41%",
      },
      {
        name: "Clínica Aurora",
        tagline: "Cuidar com tempo",
        cta: "Marcar consulta",
        notifTitle: "Nova marcação",
        notifDetail: "Primeira consulta · Qui 09:15",
        statLabel: "Consultas este mês",
        statValue: "+27%",
      },
      {
        name: "Atelier Vida",
        tagline: "Feito à mão, entregue em sua casa",
        cta: "Comprar online",
        notifTitle: "Nova venda",
        notifDetail: "Encomenda #124 · 38 €",
        statLabel: "Vendas este mês",
        statValue: "+63%",
      },
      ],
    },
  },

  pains: {
    eyebrow: "O que custa um website fraco",
    headline: "Os problemas silenciosos que esvaziam o seu negócio.",
    sub: "Um site desatualizado não falha com estrondo. Trabalha simplesmente contra si, em silêncio — por esta ordem.",
    items: [
      {
        title: "Reputação",
        body: "Os clientes julgam o seu trabalho pelo seu website antes de entrarem pela porta. Um site lento e datado envia-os para o concorrente que parece melhor online — mesmo quando você é melhor.",
        note: "Hoje, a primeira impressão acontece no ecrã do telemóvel, não à sua porta.",
      },
      {
        title: "Dinheiro",
        body: "Cada cliente que reserva ou compra através de uma plataforma custa-lhe comissão. Cada cliente que desiste num site confuso custa-lhe a venda inteira. O negócio direto é a receita mais barata que alguma vez terá.",
        note: "Faça as suas próprias contas com a calculadora abaixo.",
      },
      {
        title: "Tempo",
        body: "Andar atrás de reservas por telefone, voltar a carregar tabelas de preços, lutar com um construtor de sites à meia-noite — horas por semana que pertencem aos seus clientes, não ao seu browser.",
        note: "O seu website devia fazer turnos por si — não o contrário.",
      },
      {
        title: "Risco",
        body: "Se o Google não consegue ler bem o seu site, não existe para novos clientes. Um concorrente com um site mais rápido e melhor posicionado pode esvaziar os seus dias mais calmos antes de dar por isso.",
        note: "A visibilidade online é disputada todos os dias — e há sempre alguém a licitar.",
      },
    ],
  },

  calculator: {
    eyebrow: "Faça as contas",
    headline: "Quanto lhe está a custar o seu website atual?",
    sub: "Os seus números, contas simples, todas as premissas ajustáveis. Uma estimativa honesta — não uma tática de medo.",
    coversLabel: "Clientes por mês",
    ticketLabel: "Gasto médio por cliente",
    assumptionsToggle: "Ajustar as premissas",
    explainTitle: "Como chegamos a este número",
    explainStep1: "clientes por mês, segundo a sua estimativa acima",
    explainStep2: "consultam o seu website antes de decidir",
    explainStep3: "desistem quando ele é lento ou parece desatualizado",
    explainStep4: "em reservas, encomendas e vendas perdidas — todos os meses",
    explainBreakdown: "{lost} clientes × {ticket} de gasto médio",
    assumption1Label: "Clientes que consultam o seu website antes de escolher",
    assumption2Label: "Desses, parte que uma má primeira impressão afasta",
    resultLabel: "Receita estimada em risco por mês",
    perYearPrefix: "ou seja, cerca de",
    perYearSuffix: "por ano",
    disclaimer:
      "Uma estimativa ilustrativa, não uma promessa — aplica simplesmente as premissas acima (que controla) aos seus próprios números.",
    cta: "Prefiro o protótipo grátis",
  },

  process: {
    eyebrow: "O processo",
    headline: "De desatualizado a live em sete dias.",
    steps: [
      {
        title: "Descoberta",
        body: "Uma chamada. Conhecemos o seu negócio, os seus clientes e o que a sua presença online atual lhe está a custar — e definimos exatamente o que o novo site tem de fazer.",
      },
      {
        title: "Design",
        body: "Desenhamos à volta da sua marca e da sua oferta — um site com o aspeto que o seu negócio transmite, feito para transformar visitas em reservas, encomendas ou vendas.",
      },
      {
        title: "Construção",
        body: "Reservas, encomendas ou checkout, SEO local, multilingue se os seus clientes precisarem — montado mobile-first e testado em telemóveis reais.",
      },
      {
        title: "Entrega",
        body: "Live ao sétimo dia. Formamos a sua equipa, entregamos as chaves e ficamos 30 dias em suporte.",
      },
    ],
    cta: "Começar com uma chamada gratuita",
  },

  latestProject: {
    eyebrow: "Projeto mais recente",
    eyebrowPlural: "Projetos recentes",
    headline: "Trabalho recente, live e a vender.",
    sub: "Negócios reais, sites reais, clientes reais — dê uma vista de olhos antes de decidir.",
    visit: "Visitar o site",
    projects: {
      aconchego: {
        blurb: "Um gin artesanal do Algarve — website de marca com loja online integrada, para que cada garrafa se venda diretamente.",
        tags: ["Website", "Loja online", "Produtores & lojas"],
      },
    },
  },

  founder: {
    eyebrow: "Porque existimos",
    headline: "Não estudámos hotelaria. Crescemos dentro dela.",
    p1: "O Daniel cresceu no restaurante da mãe — trabalhos de casa na mesa do canto, serviço aos fins de semana. Seguiram-se mais de dez anos a trabalhar na hotelaria.",
    p2: "O TableFront nasceu aí: bons restaurantes a perder clientes para maus websites, e agências a cobrar-lhes por sites bonitos que não geravam uma única reserva. O mesmo acontece todos os dias a salões, clínicas e pequenos produtores — por isso hoje construímos para todos eles.",
    quote: "Um website tem um único trabalho: levar o cliente a agir. Tudo o resto é decoração.",
    quoteAttribution: "Daniel Bota, fundador",
  },

  plans: {
    eyebrow: "Preços",
    headline: "Preços claros, fixos por mercado.",
    sub: "Cada pacote inclui um site personalizado e mobile-first, construído à volta de uma única ação clara e live em 7 dias. Em CHF ou EUR — mude quando quiser.",
    oneTimeTitle: "Construção única",
    oneTimeSub: "Pague uma vez. O site é seu.",
    monthlyTitle: "Parcerias mensais",
    monthlySub: "O site, o alojamento e a manutenção numa mensalidade, com contrato de 12 meses. Ou leve só a plataforma de reservas.",
    perMonth: "/mês",
    oneTime: "pagamento único",
    recommended: "Recomendado",
    contract: "contrato de 12 meses",
    platformsNote: "A plataforma de reservas depende do seu negócio:",
    items: {
      essencial: {
        label: "Essencial",
        tagline: "O essencial, bem feito.",
        features: [
          "Design personalizado de uma página, mobile-first",
          "Uma única ação clara: reservar, encomendar ou comprar",
          "Google Maps, horários & click-to-call",
          "Configuração básica de SEO",
          "Live em 7 dias",
        ],
      },
      profissional: {
        label: "Profissional",
        tagline: "Um site completo que trabalha por si todos os dias.",
        features: [
          "Design personalizado com várias páginas",
          "Integração de reservas ou marcações",
          "Configuração de SEO local & analytics",
          "Preparado para multilingue",
          "30 dias de suporte pós-lançamento",
        ],
      },
      loja: {
        label: "Loja Online",
        tagline: "Site de marca e loja online num só.",
        features: [
          "Tudo o que está no Profissional",
          "Loja online com páginas de produto",
          "Checkout, pagamentos & configuração de envios",
          "Notificações de stock & encomendas",
          "Formação para gerir a sua loja",
        ],
      },
      mensalEssencial: {
        label: "Mensal Essencial",
        tagline: "Mantenha-o rápido, seguro e no ar.",
        features: [
          "Alojamento & atualizações de segurança",
          "Manutenção e correções contínuas",
          "Suporte por email",
        ],
      },
      mensalProfissional: {
        label: "Mensal Profissional",
        tagline: "Tudo tratado — incluindo as reservas.",
        features: [
          "Tudo o que está no Mensal Essencial",
          "Plataforma de reservas incluída: mesas, estadias ou marcações",
          "Suporte prioritário",
          "Relatório de desempenho trimestral",
        ],
      },
      reservas: {
        label: "Só Reservas",
        tagline: "A plataforma de reservas, sem o website.",
        features: [
          "Widget de reservas no seu site atual",
          "E-mails de confirmação, lembrete & cancelamento",
          "Para mesas, estadias ou marcações, cada uma com o seu painel",
          "Widget & e-mails em PT · EN · DE · FR",
          "Configurado consigo, sem custo por reserva",
        ],
      },
    },
    cta: "Agendar chamada gratuita",
    ctaSecondary: "Ver todos os preços",
    note: "Preços fixos por mercado, em CHF ou EUR. Construção em 7 dias após receção dos materiais. Sem taxas ocultas.",
  },

  pricingSummary: {
    eyebrow: "Preços",
    headline: "Preços claros, fixos por mercado.",
    sub: "Três formas de trabalhar connosco. Todos os planos, e o que cada um inclui, estão na página de preços.",
    from: "desde",
    perMonth: "/mês",
    items: {
      oneTime: { title: "Construção única", body: "Pague uma vez. O site é seu." },
      monthly: { title: "Parceria mensal", body: "Site, alojamento e manutenção numa mensalidade. Contrato de 12 meses." },
      platform: { title: "Só a plataforma de reservas", body: "Reservas de mesa, estadias ou marcações no site que já tem." },
    },
    cta: "Ver todos os planos",
  },

  team: {
    eyebrow: "As pessoas por detrás",
    members: [
      {
        name: "Daniel Bota",
        role: "CEO & Programador Principal",
        bio: "O Daniel passou mais de 10 anos a trabalhar na hotelaria antes de criar o TableFront — sabe em primeira mão o que um website com problemas custa a um negócio.",
        imageAlt: "Retrato de Daniel Bota",
      },
      {
        name: "Devin Kabay",
        role: "Gestor Comercial",
        bio: "Com uma licenciatura em Gestão Hoteleira e mais de 7 anos no terreno, o Devin traz instinto real de serviço a cada conversa com clientes — garantindo que os negócios certos encontram o TableFront.",
        imageAlt: "Retrato de Devin Kabay",
      },
    ],
  },

  faq: {
    eyebrow: "Perguntas, respondidas",
    headline: "Tudo o que os proprietários nos perguntam antes de dizer sim.",
    items: [
      {
        q: "Quanto custa um website?",
        a: "Preços transparentes: a construção única começa em €490 / CHF 790, as parcerias mensais em €49 / CHF 79 por mês. Todos os preços estão públicos na página de preços — sem jogos de «peça um orçamento».",
      },
      {
        q: "Já tenho um website. Porquê mudar?",
        a: "Se carrega devagar, parece datado no telemóvel ou não gera reservas, encomendas ou vendas, está silenciosamente a custar-lhe mais do que uma reconstrução. Envie-nos o endereço e construímos um protótipo gratuito do que poderia ser — julgue com os seus próprios olhos, sem compromisso.",
      },
      {
        q: "Como conseguem construir em 7 dias?",
        a: "Construímos à volta de três tipos de site comprovados — reservar, marcar, comprar — por isso nunca partimos do zero: estrutura, performance e SEO incluídos de raiz, e um formulário estruturado que recolhe tudo de uma vez. Os sete dias contam a partir do momento em que temos os seus materiais.",
      },
      {
        q: "O que preciso de fornecer?",
        a: "O seu logótipo, fotos, o seu menu, serviços ou produtos, e horários — recolhidos uma única vez através de um formulário, com links de partilha simples em vez de cadeias de emails. Não tem boas fotos? Falamos das opções na chamada.",
      },
      {
        q: "O website é meu?",
        a: "Na construção única: sim, totalmente — o site e os conteúdos são seus. Nas parcerias mensais, alojamos e mantemos por si enquanto a parceria durar. As parcerias mensais têm um contrato de 12 meses.",
      },
      {
        q: "E quando os meus preços ou a minha oferta mudarem?",
        a: "Envie-nos a alteração e orçamentamos como uma pequena atualização — em qualquer plano. Alteração pequena, fatura pequena.",
      },
      {
        q: "Só trabalham na Suíça e em Portugal?",
        a: "Não — construímos para negócios em todo o mundo, nas línguas que os seus clientes falam. O nosso próprio site funciona em inglês, alemão, português e francês, com preços em CHF ou EUR.",
      },
      {
        q: "E se eu não ficar satisfeito com o resultado?",
        a: "Antes de se comprometer, vê um protótipo gratuito da sua homepage, para saber o que vai receber. Todos os projetos incluem ainda pelo menos 30 dias de suporte pós-lançamento.",
      },
    ],
  },

  prototype: {
    eyebrow: "Protótipo grátis",
    headline: "Veja o seu novo website antes de gastar o que quer que seja.",
    sub: "Deixe o seu website atual (ou apenas o nome do seu negócio) e o seu email. Enviamos-lhe um protótipo gratuito da homepage que o TableFront construiria — sem obrigação, e as ideias ficam suas de qualquer forma.",
    siteLabel: "O seu website ou nome do negócio",
    sitePlaceholder: "oseunegocio.pt",
    emailLabel: "O seu email",
    emailPlaceholder: "voce@oseunegocio.pt",
    submit: "Enviar o meu protótipo grátis",
    sending: "A enviar…",
    successTitle: "Pedido recebido.",
    successBody: "Um humano de verdade vai responder — normalmente dentro de um dia útil.",
    errorBody: "Algo correu mal ao enviar o formulário. Tente novamente — ou agende antes uma chamada gratuita.",
    privacyNote: "Usamos os seus dados apenas para preparar e enviar o seu protótipo. Sem newsletter, sem spam.",
  },


  reservations: {
    eyebrow: "Restaurantes, bares & cafés",
    headline1: "O seu próprio sistema de reservas,",
    headline2: "no seu próprio website.",
    sub: "O TableFront Reservas é a plataforma de reservas que construímos enquanto geríamos restaurantes. Vive no site que desenhamos para si: os clientes reservam em segundos, a equipa gere a sala a partir de um ecrã e ninguém fica com uma parte.",
    ctaPrimary: "Agendar chamada gratuita",
    ctaSecondary: "Ver preços",
    loginHint: "Já é cliente?",
    loginCta: "Entrar no painel",
    strip: [
      "Sem comissões",
      "E-mails de confirmação e lembrete",
      "Mapa de sala em tempo real",
      "Português · Inglês · Alemão · Francês",
    ],
    site: {
      headline: "Um website feito para encher mesas.",
      items: [
        { title: "Menu, horários e localização", body: "O que o cliente procura primeiro, legível no telemóvel e fácil de manter atualizado." },
        { title: "Uma única ação clara: reservar mesa", body: "Um botão de reserva em todas as páginas, em vez de um telefone que toca a meio do serviço." },
        { title: "Encontrado por quem está perto", body: "Configuração de SEO local, Google Maps e click-to-call." },
      ],
    },
    video: {
      eyebrow: "Veja",
      headline: "Uma sexta-feira à noite, em 47 segundos.",
      sub: "Uma cliente reserva pelo telemóvel, o restaurante fica a saber no mesmo instante e a equipa gere a sala a partir da Vista do dia e do mapa da sala.",
      note: "",
      label: "TableFront Reservas — vídeo de apresentação",
    },
    tour: {
      eyebrow: "Experimente",
      headline: "Viva uma sexta-feira à noite no Casa Marisa.",
      sub: "Uma cópia a funcionar do widget e do painel, com clientes fictícios. Nada do que fizer aqui fica guardado — explore à vontade.",
      steps: [
        {
          label: "O cliente reserva",
          eyebrow: "Passo 1 · Para os seus clientes",
          headline: "Uma reserva em menos de um minuto.",
          body1: "O widget vive no site do seu restaurante, com as suas cores. O cliente escolhe o dia, o número de pessoas e a hora, e só vê horários que estão mesmo livres. Não cria conta, não descarrega nada.",
          body2: "Assim que confirma, recebe um e-mail — e o restaurante recebe outro, no mesmo instante. Na véspera segue um lembrete, com um link para cancelar sem ter de ligar.",
          tryLabel: "Experimente",
          tryText: "Mude o dia, as pessoas ou a hora e carregue em Reservar mesa.",
        },
        {
          label: "Vista do dia",
          eyebrow: "Passo 2 · Para a sua equipa",
          headline: "A noite inteira num só ecrã.",
          body1: "A Vista do dia junta as reservas online, as de telefone e os clientes sem reserva. Cada horário mostra quantas pessoas já tem e quanto falta para o limite que definiu para reservas online.",
          body2: "À medida que os clientes chegam, a equipa marca: Chegou, Na mesa ou Não veio.",
          tryLabel: "Experimente",
          tryText: "A reserva que acabou de fazer está destacada. Marque-a como Chegou e depois Na mesa.",
        },
        {
          label: "Mapa da sala",
          eyebrow: "Passo 3 · Durante o serviço",
          headline: "O mapa da sala, em tempo real.",
          body1: "Com a planta da sua sala desenhada no editor, a Vista do dia mostra cada mesa com a cor do seu estado: livre, reservada, chegou, na mesa.",
          body2: "Uma reserva sem mesa? Toque nela e depois numa mesa. Alguém chegou sem reserva? Use Sentar cliente.",
          tryLabel: "Experimente",
          tryText: "Toque numa reserva Sem mesa e depois numa mesa livre. Ou carregue em Sentar cliente.",
        },
      ],
      back: "Voltar",
      next: ["Ver do lado do restaurante", "Ver no mapa da sala"],
      restart: "Recomeçar",
      restaurant: "Casa Marisa",
      restaurantSub: "Jantar a partir das 18:00, de terça a domingo",
      url: "app.tablesfront.com/day",
      widget: {
        title: "Reservar mesa",
        date: "Data",
        guests: "Pessoas",
        time: "Hora",
        name: "Nome",
        phone: "Telefone",
        book: "Reservar mesa",
        guestOne: "pessoa",
        guestMany: "pessoas",
        fewer: "Menos uma pessoa",
        more: "Mais uma pessoa",
        noSlots: "Sem horários livres para este grupo.",
        confirmed: "Reserva confirmada!",
        tableFor: "Mesa para",
        again: "Fazer outra reserva",
        days: ["Sex 14 nov", "Sáb 15 nov", "Dom 16 nov"],
        defaultName: "Ana Ribeiro",
        defaultPhone: "+351 912 345 678",
      },
      mails: {
        empty: "Os e-mails aparecem aqui quando confirmar a reserva: um para o cliente e outro para o restaurante.",
        to: "Para:",
        now: "agora",
        newTag: "Nova",
        guestSubject: "Reserva confirmada",
        guestBody: "Olá {first}, a sua mesa no Casa Marisa está confirmada.",
        at: "às",
        cancelLine: "Precisa de cancelar? Use este link.",
        ownerSubject: "Nova reserva",
        ownerBody: "Nova reserva online para Casa Marisa:",
        ownerManage: "Faça a gestão no seu painel TableFront.",
        otherDay: "Escolheu outro dia: no passo 2 mostramos a sexta-feira, 14 de novembro. Para ver a sua reserva no painel, reserve para Sex 14 nov.",
      },
      dash: {
        nav: [
          "Vista do dia",
          "Reservas",
          "Adicionar reserva",
          "Planta da sala",
          "Definições",
        ],
        dayTitle: "sexta-feira, 14 de novembro",
        today: "Hoje",
        bookings: "reservas",
        guests: "pessoas",
        table: "Mesa",
        arrived: "Chegou",
        seated: "Na mesa",
        noShow: "Não veio",
        walkIn: "Sem reserva",
        seatGuests: "Sentar cliente",
        tonight: "Esta noite",
        noTable: "Sem mesa",
        zones: ["Sala", "Esplanada"],
        legend: ["Livre", "Reservada", "Chegou", "Na mesa", "Não veio"],
        hintWalk: "Agora toque numa mesa livre para sentar {n} {guests} sem reserva.",
        hintBooking: "Agora toque numa mesa para sentar esta reserva.",
        cancel: "Cancelar",
        bar: "BALCÃO",
        room: "SALA",
        seats: "lug.",
        walkInName: "Sem reserva",
        seatedAt: "sentado às 20:00",
        mapLabel: "Mapa da sala",
      },
      guests: [
        {
          name: "Família Costa",
          note: "aniversário",
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
          note: "cadeira de bebé",
        },
        {
          name: "Inês Duarte",
          note: "",
        },
      ],
      onlineNote: "online",
    },
    team: {
      eyebrow: "Para a sua equipa",
      headline: "Gerir a sala a partir de um ecrã.",
      sub: "Tudo o que a receção precisa, nada do que não precisa.",
      features: [
        {
          title: "Todas as reservas numa lista",
          body: "Reservas online, por telefone e walk-ins lado a lado, futuras e passadas. Cancelar, reconfirmar ou editar num toque — o cliente recebe o e-mail automaticamente.",
        },
        {
          title: "Vista do dia com mapa de sala em tempo real",
          body: "Os couverts de hoje num relance. Marque os clientes como chegados, sentados ou em falta e veja as mesas a encher no mapa.",
        },
        {
          title: "O seu mapa de sala, desenhado por si",
          body: "Desenhe a sua própria sala no editor — zonas, mesas redondas e quadradas com lugares, o bar, portas e paredes — e altere-a sempre que quiser. Junte mesas para grupos grandes.",
        },
        {
          title: "As suas regras, a sua capacidade",
          body: "Horário por dia, intervalo entre horários, tempo de permanência e quantos couverts aceita online por horário. As reservas por telefone podem sempre entrar por cima.",
        },
        {
          title: "É o primeiro a saber",
          body: "Um e-mail por cada nova reserva online e por cada cancelamento — a equipa nunca é apanhada de surpresa.",
        },
        {
          title: "Quatro línguas, automaticamente",
          body: "O widget segue a língua do browser do cliente — português, inglês, alemão ou francês — e, se não houver, usa a sua.",
        },
      ],
    },
    own: {
      eyebrow: "Porquê não um marketplace",
      headline: "Os seus clientes, os seus dados, zero comissão.",
      points: [
        {
          title: "Nada por couvert",
          body: "As plataformas de reservas cobram por cliente ou por mês — por clientes que já eram seus. Aqui não se paga nada por cliente: faz parte do seu plano de website, ou tem um preço mensal fixo à parte.",
        },
        {
          title: "Os clientes ficam no seu site",
          body: "Sem redirecionar para uma página de terceiros cheia de concorrentes. A reserva acontece no seu domínio, no seu design.",
        },
        {
          title: "A lista é sua",
          body: "Nomes, telefones, visitas e notas ficam no seu painel — não na base de dados de marketing de outra empresa.",
        },
      ],
    },
    pricing: {
      eyebrow: "Preços",
      headline: "Duas formas de o ter.",
      included: {
        badge: "Recomendado",
        title: "Incluído no Mensal Profissional",
        body: "Para clientes de hotelaria na parceria Mensal Profissional, as reservas vêm com o site: alojamos e mantemos o seu website, configuramos o widget e acompanhamos a configuração da planta da sala. Uma mensalidade, sem taxa de instalação da plataforma, sem custo por reserva.",
      },
      standalone: {
        title: "Ou só a plataforma",
        body: "Já tem website, ou prefere comprar o seu site de uma vez em vez de uma subscrição? Leve apenas a plataforma de reservas: o mesmo widget, painel e e-mails, integrados no seu site atual com uma única linha de código. Continuamos a configurar tudo consigo.",
      },
      perMonth: "por mês",
      cta: "Ver todos os planos",
    },
    setup: {
      eyebrow: "Bom saber",
      items: [
        {
          title: "Configuramos tudo por si",
          body: "Não há registo self-service. Criamos o seu restaurante, configuramos horários e capacidade consigo e integramos o widget no dia do lançamento.",
        },
        {
          title: "Uma linha de código, em qualquer lado",
          body: "O widget também entra num website existente com uma única tag de script, se ainda não estiver pronto para um redesign.",
        },
        {
          title: "E-mail, não SMS",
          body: "Confirmações, lembretes e cancelamentos seguem por e-mail. Quem precisar de alterar uma reserva cancela pelo link e volta a reservar — ou liga-lhe.",
        },
      ],
    },
    exitTitle: "Quer vê-lo a funcionar num restaurante a sério?",
    exitSub: "Agende uma chamada e mostramos-lhe o painel e o widget.",
    exitCall: "Agendar chamada gratuita",
    exitPricing: "Ver preços",
  },

  footer: {
    tagline:
      "Websites que transformam visitas em reservas, encomendas e vendas. Nascido na hotelaria — feito para todos os negócios que vendem diretamente aos clientes.",
    navTitle: "Navegação",
    businessTitle: "Para o seu negócio",
    startTitle: "Começar",
    legalTitle: "Legal",
    linkHow: "Como funciona",
    linkWork: "Os nossos projetos",
    linkStory: "A nossa história",
    linkFaq: "FAQ",
    linkPricing: "Preços",
    linkCall: "Agendar chamada",
    linkPrototype: "Protótipo grátis",
    linkLogin: "Entrar nas Reservas",
    linkLegal: "Privacidade & aviso legal",
    rights: "© 2026 TableFront · Todos os direitos reservados",
    homeLabel: "TableFront — página inicial",
  },

  pricing: {
    eyebrow: "Pacotes de website",
    headline1: "Um website que trabalha",
    headline2: "tão arduamente como você.",
    sub: "Cada pacote inclui um site personalizado e mobile-first, live em 7 dias — construído à volta da única ação que os seus clientes devem tomar. Os preços são públicos e fixos por mercado.",
    strip: [
      "Design personalizado mobile-first",
      "Entrega em 7 dias",
      "Uma única ação clara",
      "Configuração de SEO local",
      "Suporte de 30 dias",
      "Formação & entrega",
    ],
    exitTitle: "Encontrou o seu plano?",
    exitSub: "Mencione-o na chamada — mantemos estes preços.",
    exitCall: "Agendar chamada gratuita",
    exitPrototype: "Ver primeiro o protótipo grátis",
    note: "Preços fixos por mercado, mostrados em CHF ou EUR — mude quando quiser. Construção em 7 dias após receção dos materiais. Sem taxas ocultas.",
    note2: "Âmbito final confirmado na sua chamada gratuita, assim que conhecermos o seu negócio.",
  },

  legal: {
    title: "Privacidade & Aviso Legal",
    updated: "Última atualização: novembro de 2026",
    sections: [
      {
        h: "Quem somos",
        p: "O TableFront constrói websites para negócios que vendem diretamente aos clientes — hotelaria, saúde & beleza, e pequenos produtores e lojas. O serviço é operado a partir da Suíça e de Portugal e oferecido em todo o mundo. Pode contactar-nos através do formulário de protótipo na página inicial ou agendando uma chamada.",
      },
      {
        h: "Que dados recolhemos",
        p: "Quando submete um formulário neste site (pedido de protótipo gratuito ou formulário de projeto), recebemos os dados que introduz — como o seu endereço de email, o endereço do seu website e os conteúdos fornecidos. As submissões são entregues na nossa caixa de correio através do Web3Forms, um serviço de entrega de formulários, e são usadas exclusivamente para responder ao seu pedido.",
      },
      {
        h: "Analytics",
        p: "Usamos o Vercel Analytics para compreender a utilização agregada do site. Funciona sem cookies, não o segue entre sites e não cria perfis pessoais.",
      },
      {
        h: "Agendamento",
        p: "As chamadas são agendadas através do Calendly. Ao agendar, o Calendly processa os dados que introduz ao abrigo da sua própria política de privacidade.",
      },
      {
        h: "Alojamento",
        p: "Este site está alojado na Vercel. Dados técnicos como endereços IP podem ser processados em registos de servidor para entregar o site em segurança.",
      },
      {
        h: "Sem marketing",
        p: "Não enviamos newsletters, não partilhamos os seus dados com terceiros para marketing e não usamos rastreadores de publicidade.",
      },
      {
        h: "Os seus direitos",
        p: "Ao abrigo da lei suíça de proteção de dados (revLPD) e, quando aplicável, do RGPD, pode pedir a qualquer momento acesso, correção ou eliminação dos seus dados pessoais — basta escrever-nos pelos contactos acima.",
      },
    ],
  },

  business,

  notFound: {
    headline: "Esta página ainda não abriu.",
    body: "A página que procura não existe ou mudou de lugar.",
    cta: "Voltar à página inicial",
  },
}

export default pt
