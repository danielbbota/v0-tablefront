import type { BusinessDict } from "./business.en"

const business: BusinessDict = {
  labels: {
    restaurants: "Restaurantes, bares & cafés",
    stays: "Alojamento",
    beauty: "Saúde & beleza",
    shops: "Produtores & lojas",
  },

  chooser: {
    eyebrow: "Encontre o seu negócio",
    headline: "Que tipo de negócio tem?",
    sub: "Escolha o seu para ver o website que construímos para ele e a plataforma de reservas que vem incluída.",
    platformLabel: "Inclui",
    cta: "Ver como funciona",
    items: {
      restaurants: {
        examples: "Restaurantes, bares, cafés",
        body: "Menu, horários e localização, com reservas de mesa no seu próprio site e um mapa de sala em tempo real para a equipa.",
        platform: "Reservas de mesa",
      },
      stays: {
        examples: "Hotéis, guesthouses, alojamento local",
        body: "Quartos, fotos e preços, com reservas diretas no seu próprio site e um calendário que lê o Airbnb e o Booking.com.",
        platform: "Reservas de estadia",
      },
      beauty: {
        examples: "Salões, barbearias, clínicas, estúdios",
        body: "Serviços, equipa e preços apresentados com clareza, com marcações online que enchem a agenda enquanto está com um cliente.",
        platform: "Marcações",
      },
      shops: {
        examples: "Produtores artesanais, boutiques, lojas online",
        body: "Um site de marca com loja online integrada: páginas de produto, checkout e envios, para vender diretamente.",
        platform: "Loja online",
      },
    },
  },

  common: {
    siteEyebrow: "O seu website",
    getEyebrow: "Preços",
    featuresEyebrow: "O que inclui",
    recommended: "Recomendado",
    perMonth: "por mês",
    oneTime: "pagamento único",
    contract: "Contrato de 12 meses",
    pricingCta: "Ver todos os planos",
    ctaCall: "Agendar chamada gratuita",
    ctaPrototype: "Receber protótipo grátis",
    loginHint: "Já é cliente?",
    loginCta: "Entrar no painel",
    exitCall: "Agendar chamada gratuita",
    exitPricing: "Ver preços",
    otherTitle: "Não é o seu tipo de negócio?",
  },

  pages: {
    stays: {
      meta: {
        title: "Alojamento — Reservas diretas no seu próprio website",
        description:
          "Websites para hotéis, guesthouses e alojamento local com o TableFront Estadias: os hóspedes reservam diretamente no seu site, com calendário por unidade, preços por época e sincronização de calendários com Airbnb, Booking.com e Vrbo.",
      },
      eyebrow: "Hotéis, guesthouses & alojamento local",
      headline1: "Reservas diretas,",
      headline2: "no seu próprio website.",
      sub: "Um website que mostra bem os seus quartos e uma plataforma de reservas que deixa o hóspede reservar na hora. O seu calendário lê o Airbnb e o Booking.com, por isso as datas ocupadas lá ficam fechadas também no seu site.",
      strip: [
        "Sem comissão nas reservas diretas",
        "Um calendário por unidade",
        "Sincroniza com Airbnb, Booking.com & Vrbo",
        "Português · Inglês · Alemão · Francês",
      ],
      site: {
        headline: "Um website feito para conseguir a reserva.",
        items: [
          {
            title: "Quartos que se explicam sozinhos",
            body: "Cada quarto ou apartamento com as suas fotos, o que inclui, para quantas pessoas é e o preço.",
          },
          {
            title: "Uma única ação clara: reservar",
            body: "O hóspede indica as datas e as pessoas e vê as unidades livres com o preço total. Sem formulário de pedido, sem esperar por resposta.",
          },
          {
            title: "Encontrado e compreendido",
            body: "Configuração de SEO local, rápido no telemóvel e nas línguas que os seus hóspedes falam.",
          },
        ],
      },
      platform: {
        eyebrow: "TableFront Estadias",
        headline: "Das datas à estadia confirmada, num minuto.",
        sub: "O hóspede escolhe as datas e o número de pessoas, vê o que está livre com o preço total e reserva. Não cria conta, não descarrega nada.",
        features: [
          {
            title: "Um calendário por unidade",
            body: "Todos os quartos ou apartamentos num só calendário: quem chega e quem sai hoje, o que está ocupado esta noite e um aviso se duas reservas se sobrepuserem.",
          },
          {
            title: "Em sintonia com Airbnb, Booking.com e Vrbo",
            body: "Cole o link do calendário de cada canal e as reservas de lá bloqueiam as suas datas aqui. Dê ao canal o seu link TableFront e as suas reservas diretas bloqueiam as datas lá. Os calendários dos canais voltam a ser lidos antes de confirmar uma reserva direta.",
          },
          {
            title: "Os seus preços, por época",
            body: "Um preço por noite e uma taxa de limpeza por unidade, mais períodos com preço e estadia mínima próprios.",
          },
          {
            title: "Reservas por telefone e datas bloqueadas",
            body: "Adicione reservas feitas por telefone ou ao balcão, bloqueie datas para manutenção ou uso próprio e marque os hóspedes como entrada feita, saída feita ou não compareceu.",
          },
          {
            title: "E-mails que tratam dos lembretes",
            body: "Confirmação imediata, lembrete na véspera com a sua hora de check-in e um link para cancelar sem ter de ligar. Recebe um e-mail por cada nova reserva e por cada cancelamento.",
          },
          {
            title: "Quatro línguas, automaticamente",
            body: "O widget e os e-mails seguem a língua do hóspede: português, inglês, alemão ou francês.",
          },
        ],
      },
      own: {
        eyebrow: "Porquê receber reservas diretas",
        headline: "Os seus hóspedes, os seus preços, zero comissão.",
        points: [
          {
            title: "Nada por reserva",
            body: "A plataforma tem um preço mensal fixo, ou vem incluída no seu plano de website. Não ficamos com nada por noite nem por hóspede.",
          },
          {
            title: "O hóspede fica no seu site",
            body: "A reserva acontece no seu domínio, no seu design, e não numa página cheia de outros alojamentos.",
          },
          {
            title: "Os canais continuam a funcionar",
            body: "Não precisa de sair do Airbnb nem do Booking.com. As reservas de lá aparecem no mesmo calendário que as diretas.",
          },
        ],
      },
      get: {
        headline: "Duas formas de o ter.",
        plans: [
          {
            title: "Incluído no Mensal Profissional",
            body: "O seu website e a plataforma de estadias juntos: construímos, alojamos e mantemos o site, configuramos as unidades e os preços consigo e ligamos os calendários dos canais. Uma mensalidade, sem custo por reserva.",
          },
          {
            title: "Ou só a plataforma",
            body: "Já tem website, ou prefere comprar o seu site de uma vez? Leve apenas a plataforma de estadias: o mesmo widget, calendário e e-mails, integrados no seu site atual com uma única linha de código.",
          },
        ],
      },
      setup: {
        eyebrow: "Bom saber",
        items: [
          {
            title: "Configuramos tudo por si",
            body: "Não há registo self-service. Criamos o seu alojamento, adicionamos unidades e preços consigo e integramos o widget no dia do lançamento.",
          },
          {
            title: "A sincronização não é instantânea",
            body: "Os canais partilham apenas datas e leem os calendários de poucas em poucas horas, por isso a sincronização é feita por link de calendário e não em direto. As sobreposições ficam assinaladas no calendário, nunca escondidas.",
          },
          {
            title: "Pagamento no alojamento",
            body: "O hóspede reserva online e paga-lhe diretamente. Confirmações, lembretes e cancelamentos seguem por e-mail, não por SMS.",
          },
        ],
      },
      exitTitle: "Quer vê-lo com os seus próprios quartos?",
      exitSub: "Agende uma chamada e mostramos-lhe o calendário e o widget.",
      mock: {
        widgetTitle: "Reservar estadia",
        checkIn: "Entrada",
        checkOut: "Saída",
        guests: "Hóspedes",
        checkInValue: "Sex 14 nov",
        checkOutValue: "Seg 17 nov",
        guestsValue: "2 hóspedes",
        units: [
          { name: "Quarto do jardim", meta: "2 pessoas · 3 noites", price: "330 €" },
          { name: "Suite vista mar", meta: "4 pessoas · 3 noites", price: "480 €" },
        ],
        button: "Reservar",
        confirmed: "Reserva confirmada!",
        confirmedSub: "Quarto do jardim · 14–17 nov",
        calendarTitle: "Novembro",
        calendarMeta: "3 unidades",
        calendarUnits: ["Quarto do jardim", "Suite vista mar", "Estúdio"],
        legend: ["Direta", "Airbnb", "Booking.com"],
      },
    },

    beauty: {
      meta: {
        title: "Saúde & beleza — Marcações online no seu próprio website",
        description:
          "Websites para salões, barbearias, clínicas e estúdios com o TableFront Marcações: os clientes escolhem o serviço, o profissional e a hora no seu site, e a equipa trabalha a partir de um calendário do dia.",
      },
      eyebrow: "Salões, barbearias, clínicas & estúdios",
      headline1: "Uma agenda cheia,",
      headline2: "marcada no seu próprio website.",
      sub: "Um website que apresenta os seus serviços, a equipa e os preços com clareza, e uma plataforma de marcações que deixa o cliente marcar com a pessoa certa à hora certa, enquanto está ocupado com outro cliente.",
      strip: [
        "Sem comissão por marcação",
        "Um calendário por profissional",
        "E-mails de confirmação e lembrete",
        "Português · Inglês · Alemão · Francês",
      ],
      site: {
        headline: "Um website feito para encher a agenda.",
        items: [
          {
            title: "Serviços e preços, claros",
            body: "O que oferece, quanto tempo demora e quanto custa, para o cliente chegar a saber o que marcou.",
          },
          {
            title: "Uma única ação clara: marcar",
            body: "Um botão de marcação em todas as páginas, em vez de um telefone que toca quando tem as mãos ocupadas.",
          },
          {
            title: "Encontrado por quem está perto",
            body: "Configuração de SEO local, com o seu horário e a sua localização, rápido no telemóvel.",
          },
        ],
      },
      platform: {
        eyebrow: "TableFront Marcações",
        headline: "Serviço, profissional, hora. Marcado.",
        sub: "O cliente escolhe o serviço, escolhe o profissional ou deixa ao seu critério, e só vê as horas que estão mesmo livres. Não cria conta, não descarrega nada.",
        features: [
          {
            title: "Um calendário do dia por profissional",
            body: "O dia de todos lado a lado, com o número de marcações e a receita prevista. Marque os clientes como chegou, concluído ou não compareceu.",
          },
          {
            title: "Serviços com a duração real",
            body: "Cada serviço tem categoria, duração e preço, mais um tempo depois para arrumar, para a agenda deixar os intervalos de que precisa.",
          },
          {
            title: "Uma equipa com o seu próprio horário",
            body: "Defina que serviços cada pessoa faz, o seu horário de trabalho e as suas folgas. Quem escolhe qualquer profissional fica com quem estiver menos ocupado.",
          },
          {
            title: "Marcações por telefone e sem marcação",
            body: "Adicione marcações a partir do painel, mesmo fora do horário, e encontre qualquer cliente pelo nome.",
          },
          {
            title: "E-mails que tratam dos lembretes",
            body: "Confirmação imediata, lembrete na véspera e um link para cancelar sem ter de ligar. Recebe um e-mail por cada nova marcação e por cada cancelamento.",
          },
          {
            title: "Quatro línguas, automaticamente",
            body: "O widget e os e-mails seguem a língua do cliente: português, inglês, alemão ou francês.",
          },
        ],
      },
      own: {
        eyebrow: "Porquê não um marketplace de marcações",
        headline: "Os seus clientes, a sua agenda, zero comissão.",
        points: [
          {
            title: "Nada por marcação",
            body: "A plataforma tem um preço mensal fixo, ou vem incluída no seu plano de website. Não ficamos com nada por marcação nem por cliente.",
          },
          {
            title: "O cliente fica no seu site",
            body: "A marcação acontece no seu domínio, no seu design, e não numa lista ao lado do salão da rua de baixo.",
          },
          {
            title: "A lista de clientes é sua",
            body: "Nomes, telefones e marcações ficam no seu painel, e não na base de dados de marketing de outra empresa.",
          },
        ],
      },
      get: {
        headline: "Duas formas de o ter.",
        plans: [
          {
            title: "Incluído no Mensal Profissional",
            body: "O seu website e a plataforma de marcações juntos: construímos, alojamos e mantemos o site e configuramos os serviços, a equipa e os horários consigo. Uma mensalidade, sem custo por marcação.",
          },
          {
            title: "Ou só a plataforma",
            body: "Já tem website, ou prefere comprar o seu site de uma vez? Leve apenas a plataforma de marcações: o mesmo widget, calendário e e-mails, integrados no seu site atual com uma única linha de código.",
          },
        ],
      },
      setup: {
        eyebrow: "Bom saber",
        items: [
          {
            title: "Configuramos tudo por si",
            body: "Não há registo self-service. Adicionamos os seus serviços, a equipa e os horários consigo e integramos o widget no dia do lançamento.",
          },
          {
            title: "Uma linha de código, em qualquer lado",
            body: "O widget também entra num website existente com uma única tag de script, se ainda não estiver pronto para um redesign.",
          },
          {
            title: "E-mail, não SMS",
            body: "Confirmações, lembretes e cancelamentos seguem por e-mail. O cliente paga-lhe no dia da marcação.",
          },
        ],
      },
      exitTitle: "Quer vê-lo com os seus próprios serviços?",
      exitSub: "Agende uma chamada e mostramos-lhe o calendário e o widget.",
      mock: {
        widgetTitle: "Fazer marcação",
        service: "Serviço",
        services: [
          { name: "Corte & cor", meta: "90 min · 85 €" },
          { name: "Corte de homem", meta: "30 min · 25 €" },
        ],
        professional: "Profissional",
        professionals: ["Qualquer", "Nora", "Tiago"],
        time: "Ter 18 nov",
        slots: ["09:30", "10:00", "10:30", "11:00"],
        button: "Fazer marcação",
        confirmed: "Marcação feita!",
        confirmedSub: "Corte & cor · Ter 10:30 · Nora",
        agendaTitle: "Terça-feira",
        agendaMeta: "9 marcações",
        columns: ["Nora", "Tiago"],
        blocks: ["Corte & cor", "Brushing", "Corte de homem", "Barba", "Coloração"],
      },
    },

    shops: {
      meta: {
        title: "Produtores & lojas — Um website de marca com a sua própria loja online",
        description:
          "Websites para produtores artesanais, boutiques e pequenas lojas: um site de marca com loja online integrada, páginas de produto, checkout e envios, para vender diretamente em vez de através de marketplaces.",
      },
      eyebrow: "Produtores artesanais, boutiques & lojas online",
      headline1: "Venda diretamente,",
      headline2: "a partir do seu próprio website.",
      sub: "Um website de marca e uma loja online num só: a sua história, os seus produtos e um checkout que funciona no telemóvel. O cliente compra-lhe a si, no seu próprio domínio.",
      strip: [
        "Site de marca e loja num só",
        "Checkout, pagamentos & envios",
        "Notificações de stock & encomendas",
        "Formação para gerir sozinho",
      ],
      site: {
        headline: "Um website feito para fechar a venda.",
        items: [
          {
            title: "A sua marca primeiro",
            body: "A história, as pessoas e o lugar por detrás do produto, num design que se parece consigo e não com um modelo.",
          },
          {
            title: "Uma única ação clara: comprar",
            body: "Da página de produto ao checkout em poucos toques, sem enviar o cliente para outro site.",
          },
          {
            title: "Encontrado pelas pessoas certas",
            body: "Configuração de SEO local e analytics, preparado para mais de uma língua.",
          },
        ],
      },
      platform: {
        eyebrow: "A loja online",
        headline: "O que uma loja pequena precisa, e nada do que não precisa.",
        sub: "Integrada no seu site, no mesmo design, para a loja fazer parte da marca.",
        features: [
          {
            title: "Páginas de produto",
            body: "Fotos, descrição e preço de cada produto, apresentados para vender.",
          },
          {
            title: "Checkout e pagamentos",
            body: "Um checkout configurado com os seus métodos de pagamento e testado em telemóveis reais.",
          },
          {
            title: "Envios configurados",
            body: "As suas opções e custos de entrega configurados consigo antes do lançamento.",
          },
          {
            title: "Notificações de stock e encomendas",
            body: "Fica a saber de cada encomenda quando chega, e do stock antes de acabar.",
          },
          {
            title: "Formação para gerir a sua loja",
            body: "Mostramos-lhe como adicionar produtos, alterar preços e tratar encomendas, para não depender de nós.",
          },
          {
            title: "Tudo o que está no Profissional",
            body: "Design personalizado com várias páginas, SEO local e analytics, preparado para multilingue e 30 dias de suporte pós-lançamento.",
          },
        ],
      },
      own: {
        eyebrow: "Porquê vender diretamente",
        headline: "Os seus clientes, a sua marca, a sua loja.",
        points: [
          {
            title: "Sem marketplace pelo meio",
            body: "O cliente compra-lhe a si, no seu domínio, e não numa lista com um concorrente a um clique.",
          },
          {
            title: "A lista de clientes é sua",
            body: "Encomendas e contactos ficam consigo, para poder trazer os clientes de volta.",
          },
          {
            title: "Já a vender para um produtor real",
            body: "O Aconchego, um gin artesanal do Algarve, funciona num site de marca com loja integrada construído por nós. Está na página inicial, nos projetos.",
          },
        ],
      },
      get: {
        headline: "Um preço. A loja é sua.",
        plans: [
          {
            title: "Loja Online",
            body: "Uma construção única: site de marca, loja, checkout, pagamentos e envios, com formação. O site e os conteúdos são seus. As alterações de conteúdo posteriores são orçamentadas por atualização.",
          },
        ],
      },
      setup: {
        eyebrow: "Bom saber",
        items: [
          {
            title: "O que precisamos de si",
            body: "O seu logótipo, fotos, lista de produtos com preços e as suas opções de entrega, recolhidos uma única vez através de um formulário.",
          },
          {
            title: "Live em 7 dias",
            body: "Contados a partir do dia em que temos os seus materiais.",
          },
          {
            title: "Depois do lançamento",
            body: "Estão incluídos 30 dias de suporte. Depois disso, as alterações são orçamentadas por atualização: alteração pequena, fatura pequena.",
          },
        ],
      },
      exitTitle: "Quer ver os seus produtos numa loja só sua?",
      exitSub: "Agende uma chamada, ou peça primeiro um protótipo grátis.",
      mock: {
        shopName: "Atelier Vida",
        products: [
          { name: "Vela artesanal", price: "24 €" },
          { name: "Avental de linho", price: "38 €" },
        ],
        add: "Adicionar ao cesto",
        basket: "Cesto",
        basketMeta: "2 artigos · 62 €",
        checkout: "Finalizar compra",
        toastTitle: "Nova encomenda",
        toastDetail: "Encomenda #124 · 62 €",
        ordersTitle: "Encomendas de hoje",
        orders: [
          { id: "#124", status: "Paga" },
          { id: "#123", status: "Enviada" },
          { id: "#122", status: "Enviada" },
        ],
      },
    },
  },
}

export default business
