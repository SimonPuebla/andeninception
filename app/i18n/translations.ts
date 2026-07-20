export type Lang = "es" | "en";

const es = {
  nav: {
    programa: "Programa",
    paraVos: "Para vos",
    beneficios: "Beneficios",
    faq: "FAQ",
    cta: "Sumate al waitlist",
  },
  hero: {
    eyebrow: "ANDEN INCEPTION · LANZAMIENTO JUNIO 2026",
    title: "La primera zona economica digital de Latam abre sus primeros 50 lugares.",
    body: "Un programa de constitución y lanzamiento diseñado para empresas tech latinoamericanas. Te damos la zona digital, el compliance, la aplicación para la obtención de los beneficios fiscales, la red de inversores y el soporte para construir global sin mudarte. Todo en un solo lugar.",
    ctaPrimary: "Aplicar al cohort foundation",
    ctaNote: "Aplicaciones abiertas. Seleccion rolling. El cohort cierra al alcanzar 50 empresas.",
    backedBy: "RESPALDADO POR",
  },
  programa: {
    eyebrow: "EL PROGRAMA",
    title: "No es solo la constitución. Es un programa de lanzamiento completo.",
    body1:
      "Anden Inception es la primera cohort de empresas que se incorpora a la zona economica digital. Pensado como un programa de incubacion premium: te damos una zona digital operativa, acompañamos en la aplicación y registro de regimenes de beneficios fiscales,  te conectamos con inversores, y te potenciamos para que tu empresa salga al mundo con todo resuelto desde el día uno.",
    body2:
      "Las que entran al cohort foundation acceden a beneficios, perks y red que no van a estar disponibles cuando el programa abra acceso general. Y forman parte de la historia que recien empieza: la primera zona digital disenada para construir global desde el sur.",
    previewItems: [
      "Zona digital",
      "Beneficios fiscales",
      "Banking en USD / Stables",
      "Red de inversores",
      "USD 1.5M en perks by NVIDIA Inception y partners",
    ],
  },
  paraVos: {
    eyebrow: "PARA VOS",
    title: "Tres perfiles. Tres formas de aprovechar la zona.",
    intro:
      "Si te reconoces en alguno de estos, este programa fue disenado para vos. Hace click para ver como se aplica a tu caso.",
    disclaimerLabel: "Aclaración importante:",
    disclaimerBody:
      "Los beneficios fiscales descriptos están supeditados al éxito de la aplicación al régimen correspondiente de cada país. Andén Inception acompaña el proceso, pero no garantizamos el resultado de la solicitud. La aprobación depende de las autoridades fiscales y regulatorias de cada país.",
    profiles: [
      {
        num: "01",
        title: "Proveedor de servicios basados en economía del conocimiento",
        tagline:
          "Software, AI, SaaS, infraestructura. Exportás servicios al mundo. Junto a biotecnología, nanotecnología, aeroespacial, nuclear, I+D (Investigación y Desarrollo), e industria 4.0. Exportás tech avanzada al futuro.",
        leftEyebrow: "DE QUE TE BENEFICIAS",
        leftItems: [
          "Ganancias hasta el 15% efectivo en lugar de 35% del regimen general",
          "Reduccion de 40-80% en cargas patronales via bono de credito fiscal LEC",
          "0% de retenciones a la exportacion de servicios",
          "Operacion legal en USD bajo regimen de Zona Franca",
          "USD 1.5M en perks del ecosistema NVIDIA Inception y partners",
          "Setup legal completo, aplicación y compliance recurrente bajo régimen LEC y ZFM",
          "Red de pares en industrias de conocimiento, partners y oportunidades cruzadas",
        ],
        rightEyebrow: "POR QUE ACA Y NO AFUERA",
        rightItems: [
          "No tenes que mudarte ni constituir en USA. Operas global desde tu pais.",
          "Acceso a una red de inversores latam y globales que no llegas solo.",
          "Sumas credenciales reales: respaldo de Protocol Labs, NVIDIA, Crecimiento.",
          "Acompañamiento en aplicación y compliance LEC y de ZFM resuelto end-to-end, sin armar un equipo legal interno.",
          "Visibilidad institucional como parte del cohort foundation.",
        ],
        footer:
          "Aplica para empresas desde 5 hasta 200 empleados, early stage o growth, con al menos 60% de ingresos por exportacion de servicios.",
      },
      {
        num: "02",
        title: "Empresa de servicios profesionales exportables",
        tagline:
          "Estudios de diseño, consultoria, audiovisual, biotech, ingenieria. Vendes tu expertise afuera.",
        leftEyebrow: "DE QUE TE BENEFICIAS",
        leftItems: [
          "Ganancias hasta el 15% efectivo en lugar de 35% del regimen general",
          "Reduccion de 40-80% en cargas patronales via bono de credito fiscal LEC",
          "0% de retenciones a la exportacion de servicios",
          "USD 1.5M en perks del ecosistema NVIDIA Inception y partners",
          "Setup legal completo, aplicación y compliance recurrente bajo régimen LEC y ZFM",
          "Red de pares en industrias de conocimiento, partners y oportunidades cruzadas",
        ],
        rightEyebrow: "POR QUE ACA Y NO AFUERA",
        rightItems: [
          "Mantene tu equipo en donde operes, sumas un vehiculo internacional sin doble estructura.",
          "Acceso a la red de inversores y demo days del cohort.",
          "Acompañamiento en aplicación y compliance LEC y de ZFM resuelto end-to-end, sin armar un equipo legal interno.",
          "Visibilidad institucional como parte del cohort foundation.",
        ],
        footer:
          "Aplica para empresas con clientes internacionales recurrentes, facturacion en USD o EUR. Empleados deben estar registrados en Argentina.",
      },
      {
        num: "03",
        title: "Empresa establecida buscando optimizar estructura",
        tagline:
          "Ya operas. Tenes LEC sin aprovechar, holding offshore costoso o estructura suboptima.",
        leftEyebrow: "DE QUE TE BENEFICIAS",
        leftItems: [
          "Ganancias hasta el 15% efectivo en lugar de 35% del regimen general",
          "Reduccion de 40-80% en cargas patronales via bono de credito fiscal LEC",
          "0% de retenciones a la exportacion de servicios",
          "Setup legal completo, aplicación y compliance recurrente bajo régimen LEC y ZFM",
          "Red de pares en industrias de conocimiento, partners y oportunidades cruzadas",
        ],
        rightEyebrow: "POR QUE ACA Y NO AFUERA",
        rightItems: [
          "Tu holding en USA o Caymans te cuesta 30-80K USD anuales sin upside fiscal real.",
          "0% retenciones a la exportacion: cobras lo que facturas, sin scraping fiscal.",
          "Acceso al cohort foundation como caso de estudio: prensa, credibilidad, network.",
          "Equipo Anden te acompana en la migracion: legal, contable, operativo.",
        ],
        footer:
          "Aplica para empresas con clientes internacionales recurrentes, facturación en USD o EUR, y al menos 70% de su facturación afectada a la Economía del Conocimiento.",
      },
    ],
  },
  loQueIncluye: {
    eyebrow: "LO QUE RECIBIS",
    title: "Doce cosas que solo el cohort foundation se lleva.",
    cards: [
      {
        title: "USD 1.5M en perks by NVIDIA Inception y partners",
        body: "Beneficios tecnicos y comerciales del ecosistema NVIDIA Inception y otros partners: creditos de computo en NVIDIA Cloud Partners, descuentos de hasta 30% en hardware y 75% en software, training tecnico y acceso a la red global de inversores de NVIDIA. Disponibles para empresas que califiquen.",
      },
      {
        title: "Red de inversores y demo days",
        body: "Investor reviews mensuales con VCs locales e internacionales. Demo days semestrales co-organizados con partners del ecosistema. Visibilidad concreta frente a quienes deciden cheques en Latam y afuera.",
      },
      {
        title: "Charlas y eventos online",
        body: "Sessions con founders que ya construyeron en Latam, operadores de zonas digitales globales como RAK DAO, ADGM y Estonia, y especialistas regulatorios. Acceso continuo durante toda tu permanencia en el cohort.",
      },
      {
        title: "Anden Founder Retreat",
        body: "Acceso anticipado al encuentro presencial entre los founders del cohort, partners y advisors. Networking de alta densidad en formato curado.",
      },
      {
        title: "Construi la zona desde adentro",
        body: "Las decisiones de producto, regulacion y diseno de la zona se toman con feedback del cohort. No vas a ser cliente. Vas a ser arquitecto de la primera zona digital de Latam.",
      },
      {
        title: "HubSpot for Startups — hasta 90% OFF",
        body: "Plataforma unificada de marketing, ventas y operaciones con AI integrada. Acceso a recursos exclusivos para startups: playbooks, templates y más de 1.700 integraciones. Pagás una fracción de lo que pagan otras empresas.",
      },
      {
        title: "CommonPaper — contratos sin fricción",
        body: "Infraestructura de contratos para tus primeros acuerdos (NDA, partnerships, ventas y más). Acceso al plan gratuito: generación de documentos vía templates, facturación automática, alertas de actividad de clientes y hasta 2 acuerdos por mes.",
      },
      {
        title: "Carta — cap table y equity sin fricción",
        body: "Referrals de Andén reciben 20% de descuento el primer año y exención de fees de implementación. Empresas que levantaron menos de USD 1M y tienen menos de 25 stakeholders acceden gratis al producto Launch para gestionar su cap table.",
      },
      {
        title: "Atlassian — hasta 50 asientos gratis",
        body: "Jira, Confluence y el stack de productividad de Atlassian: hasta 50 asientos gratis por 12 meses para organizar el trabajo de tu equipo, planificar proyectos y escalar operaciones desde el día uno.",
      },
      {
        title: "Linear — 3 meses gratis",
        body: "Gestión de proyectos y producto para equipos de software modernos: issue y bug tracking, planificación de roadmaps, delegación de tareas a agentes AI e integraciones con GitHub, Cursor, Slack y más. Aplicá el código buildwithanden al registrarte.",
      },
      {
        title: "Anthropic — partner program para empresas Claude-enabled",
        body: "Acceso al partner program de Anthropic: Partner Academy, exámenes de certificación, Claude Partner Badge, perfil en el Partner Directory, co-sell support, deal referral program y early access al roadmap del producto.",
      },
      {
        title: "Embarca — espacio de trabajo físico",
        body: "6 puestos disponibles de manera garantizada; a partir de ese número la disponibilidad se evalúa caso por caso. Pagás 11 meses por adelantado y accedés a 12 meses de uso del espacio con todos los beneficios del paquete Full. El valor de la suscripción se define según el mes de inicio del contrato.",
      },
      {
        title: "Fil One — almacenamiento S3 descentralizado",
        body: "Almacenamiento de objetos compatible con S3 construido sobre Filecoin con integridad verificada criptográficamente, sin bloqueo de proveedor único, y durabilidad de 11 nines por diseño. USD 4,99/TB/mes plano sin fees de egreso ni cargos por solicitud — ideal para agentes de AI, pipelines RAG, backups, y datos que deben sobrevivir a su proveedor. 3 meses gratis, hasta 5 TB por mes (un valor de US$74,85).",
      },
    ],
  },
  zona: {
    eyebrow: "LA ZONA",
    title: "Una zona digital con beneficios reales y respaldo legal.",
    body: "Construida sobre dos leyes argentinas vigentes: Ley 24.331 de Zonas Francas y Ley 27.506 de Economia del Conocimiento. Lo que firmas hoy, queda firme. Sin grises, sin promesas, sin nuevas leyes que esperar.",
    baseLegalLabel: "BASE LEGAL",
    condicionLabel: "CONDICION",
    cards: [
      {
        stat: "Hasta 60%",
        name: "Reduccion de Ganancias",
        body: "Reduccion significativa del impuesto a las Ganancias para empresas certificadas bajo el regimen de Economia del Conocimiento.",
        condicion: "Empresas certificadas LEC",
      },
      {
        stat: "Hasta 70%",
        name: "Credito fiscal sobre cargas patronales",
        body: "Credito fiscal aplicable contra las contribuciones patronales, generado por la actividad exportadora de la empresa.",
        condicion: "Aplicado sobre cargas patronales del empleador",
      },
      {
        stat: "0%",
        name: "IVA en operaciones intra-zona y exterior",
        body: "Exencion total de IVA en transacciones entre empresas miembro de la zona economica y en operaciones hacia el exterior.",
        condicion: "Operaciones intra-zona y exportaciones",
      },
      {
        stat: "0%",
        name: "Aranceles aduaneros sobre import/export",
        body: "Exencion total de derechos aduaneros sobre importaciones y exportaciones dentro del perimetro de la zona.",
        condicion: "Operaciones dentro del perimetro de la zona",
      },
    ],
    calc: {
      eyebrow: "CALCULADORA",
      title: "Calcula cuanto ahorra tu empresa.",
      body: "Ingresa tus numeros reales y modela el ahorro fiscal especifico de tu caso.",
      cta: "Abrir calculadora de ROI",
    },
    disclaimer:
      "Los beneficios fiscales y la estabilidad fiscal están sujetos a la aprobación y certificación de tu empresa en el régimen de Economía del Conocimiento (LEC) y/o Zona Franca (ZFM). Andén brinda el acompañamiento y soporte legal-operativo para esta aplicación.",
  },
  ecosistema: {
    eyebrow: "ECOSISTEMA",
    title: "Construido con los actores que ya estan construyendo el futuro.",
    stats:
      "USD 20.000M en activos bajo gestión (AUM) de nuestros inversores respaldando el ecosistema. 10.000+ builders en la red. Las redes tech mas fuertes de Latam alineadas detras de una sola zona digital.",
  },
  faq: {
    eyebrow: "PREGUNTAS FRECUENTES",
    title: "Lo que necesitas saber antes de aplicar.",
    items: [
      {
        question: "Esto es legal? Necesito que pase alguna nueva ley?",
        answer:
          "No. Anden opera sobre dos leyes argentinas vigentes: Ley 24.331 de Zonas Francas y Ley 27.506 de Economia del Conocimiento. No esperamos que se apruebe nada nuevo. La estructura esta validada legalmente y respaldada por una alianza publico-privada con autoridades provinciales.",
      },
      {
        question: "Tengo que mudarme a Argentina?",
        answer:
          "No. La zona economica digital opera con incorporacion 100% digital. Tu empresa se constituye y opera desde la zona sin requerir presencia fisica de los founders ni del equipo. Podes seguir viviendo y trabajando desde donde estes en Latam o el mundo.",
      },
      {
        question: "Que pasa con mi empresa actual?",
        answer:
          "Depende del caso. Podes crear una nueva entidad dentro de la zona, migrar una empresa existente, o estructurar un esquema dual con tu holding actual. En la fase de evaluacion armamos la estructura societaria que tenga mas sentido para tu caso puntual.",
      },
      {
        question: "Cuanto cuesta el programa?",
        answer:
          "Anden Inception es un programa pago. La inversion cubre el setup completo de tu empresa en la zona, el compliance recurrente, y el acceso a todos los beneficios del cohort. Las empresas que entran al cohort foundation acceden a un descuento significativo bonificado por Anden que no estara disponible cuando el programa abra acceso general. El detalle de pricing se comparte en la fase de evaluacion.",
      },
      {
        question: "Cuando arranca operativamente la zona?",
        answer:
          "El cohort foundation arranca en junio 2026. La zona economica digital esta en fase final de implementacion operativa, con MOU firmado con autoridades provinciales y soft launch coordinado con el programa.",
      },
      {
        question: "Como es el proceso desde que aplico?",
        answer:
          "Tres pasos. Sumate al waitlist con tus datos basicos. Te enviamos un formulario de diagnostico para entender tu estructura, etapa y fit. Si hay match, agendamos una call de 30 minutos para definir la estructura y arrancar el flow de incorporacion.",
      },
      {
        question: "Que pasa si mi empresa no califica para el cohort foundation?",
        answer:
          "Quedas en la base para cohorts futuras o para el acceso general cuando el programa se abra. Te avisamos cuando este disponible. Sin compromiso, sin costo.",
      },
      {
        question: "Quien esta detras de Anden?",
        answer:
          "El equipo fundador combina experiencia en tech, regulacion y operacion de companias globales. Anden esta respaldado por Protocol Labs, MakerDAO, Aragon, NVIDIA Inception, Crecimiento y Odisea, los ecosistemas tech mas fuertes de Latam y del mundo.",
      },
    ],
  },
  finalCta: {
    title: "Las primeras 50 son las que cuentan la historia.",
    body: "Si estas construyendo algo serio desde Latam y queres operar desde una zona digital disenada para vos, este es el momento.",
    cta: "Sumarme al waitlist",
    note: "Aplicaciones abiertas. Seleccion rolling. El cohort cierra al alcanzar 50 empresas. Sin spam, sin venderle datos a nadie.",
  },
  footer: {
    tagline: "La infraestructura de compliance que convierte zonas obsoletas en zonas digitales operativas.",
    navHeading: "Navegacion",
    nav: {
      programa: "Programa",
      paraVos: "Para vos",
      beneficios: "Beneficios",
      faq: "FAQ",
      contacto: "Contacto",
    },
    redHeading: "Red",
    copyright: "© 2026 Anden - anden.tech",
    legal: "ZONA DIGITAL - LEY 27.506 - REGIMEN ZF",
  },
  modal: {
    eyebrow: "WAITLIST",
    title: "Unite a ANDÉN",
    subtitle: "Completá tus datos y te enviaremos un email para comenzar el proceso de registro.",
    close: "Cerrar",
    closeAria: "Cerrar",
    labels: {
      nombre: "Nombre",
      apellido: "Apellido",
      email: "Email",
      empresa: "Nombre de la empresa",
    },
    placeholders: {
      nombre: "Juan",
      apellido: "Pérez",
      email: "juan@empresa.com",
      empresa: "Mi Startup S.A.",
    },
    submit: "Unirme a la waitlist",
    submitting: "Enviando...",
    genericError: "Error al enviar el formulario",
    connectionError: "Error de conexión. Por favor, intenta de nuevo.",
    alreadyExistsTitle: "Ya tenés una cuenta",
    alreadyExistsBody1: "El email",
    alreadyExistsBody2: "ya tiene una cuenta en Andén. Ingresá con ese email en",
    emailSentTitle: "¡Listo! Revisá tu email",
    emailSentBody1: "Te enviamos un email a",
    emailSentBody2: "con tus credenciales y el link para comenzar el onboarding.",
    createdTitle: "¡Cuenta creada!",
    createdBody: "Tu cuenta fue creada. El email con tus credenciales puede demorar unos minutos en llegar.",
  },
};

const en: typeof es = {
  nav: {
    programa: "Program",
    paraVos: "For you",
    beneficios: "Benefits",
    faq: "FAQ",
    cta: "Join the waitlist",
  },
  hero: {
    eyebrow: "ANDEN INCEPTION · LAUNCHING JUNE 2026",
    title: "Latam's first digital economic zone opens its first 50 spots.",
    body: "An incorporation and launch program built for Latin American tech companies. We give you the digital zone, compliance, the application to secure tax benefits, the investor network, and the support to build globally without relocating. All in one place.",
    ctaPrimary: "Apply to the foundation cohort",
    ctaNote: "Applications open. Rolling selection. The cohort closes once it reaches 50 companies.",
    backedBy: "BACKED BY",
  },
  programa: {
    eyebrow: "THE PROGRAM",
    title: "It's not just incorporation. It's a complete launch program.",
    body1:
      "Anden Inception is the first cohort of companies to incorporate into the digital economic zone. Designed as a premium incubation program: we give you an operational digital zone, guide you through the application and registration of tax benefit regimes, connect you with investors, and equip you so your company goes to market with everything solved from day one.",
    body2:
      "Companies in the foundation cohort access benefits, perks, and a network that won't be available once the program opens to general access. And they become part of a story that's just beginning: the first digital zone designed to build globally from the south.",
    previewItems: [
      "Digital zone",
      "Tax benefits",
      "USD / Stablecoin banking",
      "Investor network",
      "USD 1.5M in perks by NVIDIA Inception & partners",
    ],
  },
  paraVos: {
    eyebrow: "FOR YOU",
    title: "Three profiles. Three ways to leverage the zone.",
    intro:
      "If you recognize yourself in any of these, this program was designed for you. Click to see how it applies to your case.",
    disclaimerLabel: "Important note:",
    disclaimerBody:
      "The tax benefits described are contingent on the successful application to the corresponding regime in each country. Andén Inception supports the process, but we do not guarantee the outcome of the application. Approval depends on the tax and regulatory authorities of each country.",
    profiles: [
      {
        num: "01",
        title: "Knowledge-economy services provider",
        tagline:
          "Software, AI, SaaS, infrastructure. You export services to the world. Alongside biotech, nanotech, aerospace, nuclear, R&D, and industry 4.0. You export advanced tech to the future.",
        leftEyebrow: "WHAT YOU GAIN",
        leftItems: [
          "Income tax as low as 15% effective instead of the 35% general rate",
          "40–80% reduction in payroll taxes via the LEC tax-credit bond",
          "0% withholding on services exports",
          "Legal operation in USD under the Free Zone regime",
          "USD 1.5M in perks from the NVIDIA Inception ecosystem and partners",
          "Full legal setup, application, and recurring compliance under the LEC and ZFM regimes",
          "A peer network across knowledge industries, partners, and cross opportunities",
        ],
        rightEyebrow: "WHY HERE AND NOT ABROAD",
        rightItems: [
          "No need to relocate or incorporate in the US. You operate globally from your country.",
          "Access to a Latam and global investor network you can't reach on your own.",
          "You add real credentials: backed by Protocol Labs, NVIDIA, Crecimiento.",
          "End-to-end support on LEC and ZFM application and compliance, without building an in-house legal team.",
          "Institutional visibility as part of the foundation cohort.",
        ],
        footer:
          "Applies to companies with 5 to 200 employees, early stage or growth, with at least 60% of revenue from services exports.",
      },
      {
        num: "02",
        title: "Exportable professional-services firm",
        tagline:
          "Design studios, consulting, audiovisual, biotech, engineering. You sell your expertise abroad.",
        leftEyebrow: "WHAT YOU GAIN",
        leftItems: [
          "Income tax as low as 15% effective instead of the 35% general rate",
          "40–80% reduction in payroll taxes via the LEC tax-credit bond",
          "0% withholding on services exports",
          "USD 1.5M in perks from the NVIDIA Inception ecosystem and partners",
          "Full legal setup, application, and recurring compliance under the LEC and ZFM regimes",
          "A peer network across knowledge industries, partners, and cross opportunities",
        ],
        rightEyebrow: "WHY HERE AND NOT ABROAD",
        rightItems: [
          "Keep your team wherever you operate; add an international vehicle without a double structure.",
          "Access to the cohort's investor network and demo days.",
          "End-to-end support on LEC and ZFM application and compliance, without building an in-house legal team.",
          "Institutional visibility as part of the foundation cohort.",
        ],
        footer:
          "Applies to companies with recurring international clients, billing in USD or EUR. Employees must be registered in Argentina.",
      },
      {
        num: "03",
        title: "Established company looking to optimize its structure",
        tagline:
          "You already operate. You have LEC unused, a costly offshore holding, or a suboptimal structure.",
        leftEyebrow: "WHAT YOU GAIN",
        leftItems: [
          "Income tax as low as 15% effective instead of the 35% general rate",
          "40–80% reduction in payroll taxes via the LEC tax-credit bond",
          "0% withholding on services exports",
          "Full legal setup, application, and recurring compliance under the LEC and ZFM regimes",
          "A peer network across knowledge industries, partners, and cross opportunities",
        ],
        rightEyebrow: "WHY HERE AND NOT ABROAD",
        rightItems: [
          "Your US or Caymans holding costs you USD 30–80K a year with no real tax upside.",
          "0% export withholding: you collect what you invoice, with no fiscal scraping.",
          "Access to the foundation cohort as a case study: press, credibility, network.",
          "The Anden team supports your migration: legal, accounting, operational.",
        ],
        footer:
          "Applies to companies with recurring international clients, billing in USD or EUR, and at least 70% of billing tied to the Knowledge Economy.",
      },
    ],
  },
  loQueIncluye: {
    eyebrow: "WHAT YOU GET",
    title: "Twelve things only the foundation cohort takes home.",
    cards: [
      {
        title: "USD 1.5M in perks by NVIDIA Inception & partners",
        body: "Technical and commercial benefits from the NVIDIA Inception ecosystem and other partners: compute credits with NVIDIA Cloud Partners, up to 30% off hardware and 75% off software, technical training, and access to NVIDIA's global investor network. Available to companies that qualify.",
      },
      {
        title: "Investor network and demo days",
        body: "Monthly investor reviews with local and international VCs. Semiannual demo days co-organized with ecosystem partners. Real visibility in front of the people who write checks in Latam and abroad.",
      },
      {
        title: "Online talks and events",
        body: "Sessions with founders who already built in Latam, operators of global digital zones like RAK DAO, ADGM, and Estonia, and regulatory specialists. Continuous access throughout your time in the cohort.",
      },
      {
        title: "Anden Founder Retreat",
        body: "Early access to the in-person gathering of cohort founders, partners, and advisors. High-density networking in a curated format.",
      },
      {
        title: "Build the zone from the inside",
        body: "Decisions on the zone's product, regulation, and design are made with cohort feedback. You won't be a customer. You'll be an architect of Latam's first digital zone.",
      },
      {
        title: "HubSpot for Startups — up to 90% OFF",
        body: "A unified marketing, sales, and operations platform with AI built in. Access to startup-specific resources: playbooks, templates, and more than 1,700 integrations. You pay a fraction of what other companies pay.",
      },
      {
        title: "CommonPaper — frictionless contracts",
        body: "Contract infrastructure for your first agreements (NDA, partnerships, sales, and more). Access to the free plan: template-based document generation, automated billing, customer activity alerts, and up to 2 agreements per month.",
      },
      {
        title: "Carta — cap table and equity without friction",
        body: "Andén referrals receive a 20% first-year discount and waived implementation fees. Companies that have raised under USD 1M with fewer than 25 stakeholders get free access to the Launch product to manage their cap table.",
      },
      {
        title: "Atlassian — up to 50 free seats",
        body: "Jira, Confluence, and the Atlassian productivity stack: up to 50 free seats for 12 months to organize your team's work, plan projects, and scale operations from day one.",
      },
      {
        title: "Linear — 3 months free",
        body: "Project and product management for modern software teams: issue and bug tracking, roadmap planning, task delegation to AI agents, and integrations with GitHub, Cursor, Slack, and more. Apply the code buildwithanden when you sign up.",
      },
      {
        title: "Anthropic — partner program for Claude-enabled companies",
        body: "Access to Anthropic's partner program: Partner Academy, certification exams, Claude Partner Badge, a Partner Directory profile, co-sell support, a deal referral program, and early access to the product roadmap.",
      },
      {
        title: "Embarca — physical workspace",
        body: "6 guaranteed desks available; beyond that number, availability is assessed case by case. You pay 11 months up front and get 12 months of space access with all the benefits of the Full package. The subscription price is set based on the contract's start month.",
      },
      {
        title: "Fil One — decentralized S3 storage",
        body: "S3-compatible object storage built on Filecoin with cryptographically verified integrity, no single-provider lock-in, and 11 nines durability by design. Flat USD 4.99/TB/month with no egress fees or per-request charges — ideal for AI agents, RAG pipelines, backups, and data that must outlive its provider. 3 months free, up to 5 TB/month (USD 74.85 value).",
      },
    ],
  },
  zona: {
    eyebrow: "THE ZONE",
    title: "A digital zone with real benefits and legal backing.",
    body: "Built on two active Argentine laws: Law 24.331 on Free Zones and Law 27.506 on the Knowledge Economy. What you sign today stays firm. No gray areas, no promises, no new laws to wait for.",
    baseLegalLabel: "LEGAL BASIS",
    condicionLabel: "CONDITION",
    cards: [
      {
        stat: "Up to 60%",
        name: "Income tax reduction",
        body: "A significant reduction in income tax for companies certified under the Knowledge Economy regime.",
        condicion: "LEC-certified companies",
      },
      {
        stat: "Up to 70%",
        name: "Tax credit on payroll taxes",
        body: "A tax credit applicable against payroll contributions, generated by the company's export activity.",
        condicion: "Applied to the employer's payroll taxes",
      },
      {
        stat: "0%",
        name: "VAT on intra-zone and foreign operations",
        body: "Full VAT exemption on transactions between member companies of the economic zone and on operations abroad.",
        condicion: "Intra-zone operations and exports",
      },
      {
        stat: "0%",
        name: "Customs duties on import/export",
        body: "Full exemption from customs duties on imports and exports within the zone's perimeter.",
        condicion: "Operations within the zone's perimeter",
      },
    ],
    calc: {
      eyebrow: "CALCULATOR",
      title: "Calculate how much your company saves.",
      body: "Enter your real numbers and model the specific tax savings for your case.",
      cta: "Open the ROI calculator",
    },
    disclaimer:
      "Tax benefits and fiscal stability are subject to your company's approval and certification under the Knowledge Economy (LEC) and/or Free Zone (ZFM) regimes. Andén provides the guidance and legal-operational support for this application.",
  },
  ecosistema: {
    eyebrow: "ECOSYSTEM",
    title: "Built with the players already building the future.",
    stats:
      "USD 20B in assets under management (AUM) from our investors backing the ecosystem. 10,000+ builders in the network. Latam's strongest tech networks aligned behind a single digital zone.",
  },
  faq: {
    eyebrow: "FREQUENTLY ASKED QUESTIONS",
    title: "What you need to know before applying.",
    items: [
      {
        question: "Is this legal? Do I need a new law to pass?",
        answer:
          "No. Anden operates on two active Argentine laws: Law 24.331 on Free Zones and Law 27.506 on the Knowledge Economy. We're not waiting on anything new to pass. The structure is legally validated and backed by a public-private partnership with provincial authorities.",
      },
      {
        question: "Do I have to move to Argentina?",
        answer:
          "No. The digital economic zone operates with 100% digital incorporation. Your company is incorporated and operates from the zone without requiring the physical presence of founders or the team. You can keep living and working from wherever you are in Latam or the world.",
      },
      {
        question: "What happens to my current company?",
        answer:
          "It depends on the case. You can create a new entity within the zone, migrate an existing company, or structure a dual scheme with your current holding. During the evaluation phase we build the corporate structure that makes the most sense for your specific case.",
      },
      {
        question: "How much does the program cost?",
        answer:
          "Anden Inception is a paid program. The investment covers the full setup of your company in the zone, recurring compliance, and access to all cohort benefits. Companies that join the foundation cohort get a significant discount subsidized by Anden that won't be available once the program opens to general access. Pricing details are shared during the evaluation phase.",
      },
      {
        question: "When does the zone start operating?",
        answer:
          "The foundation cohort starts in June 2026. The digital economic zone is in the final phase of operational implementation, with an MOU signed with provincial authorities and a soft launch coordinated with the program.",
      },
      {
        question: "What's the process once I apply?",
        answer:
          "Three steps. Join the waitlist with your basic details. We send you a diagnostic form to understand your structure, stage, and fit. If there's a match, we schedule a 30-minute call to define the structure and kick off the incorporation flow.",
      },
      {
        question: "What if my company doesn't qualify for the foundation cohort?",
        answer:
          "You stay in the database for future cohorts or for general access when the program opens. We'll let you know when it's available. No commitment, no cost.",
      },
      {
        question: "Who's behind Anden?",
        answer:
          "The founding team combines experience in tech, regulation, and operating global companies. Anden is backed by Protocol Labs, MakerDAO, Aragon, NVIDIA Inception, Crecimiento, and Odisea — the strongest tech ecosystems in Latam and the world.",
      },
    ],
  },
  finalCta: {
    title: "The first 50 are the ones that tell the story.",
    body: "If you're building something serious from Latam and want to operate from a digital zone designed for you, this is the moment.",
    cta: "Join the waitlist",
    note: "Applications open. Rolling selection. The cohort closes once it reaches 50 companies. No spam, no selling your data to anyone.",
  },
  footer: {
    tagline: "The compliance infrastructure that turns obsolete zones into operational digital zones.",
    navHeading: "Navigation",
    nav: {
      programa: "Program",
      paraVos: "For you",
      beneficios: "Benefits",
      faq: "FAQ",
      contacto: "Contact",
    },
    redHeading: "Network",
    copyright: "© 2026 Anden - anden.tech",
    legal: "DIGITAL ZONE - LAW 27.506 - FREE ZONE REGIME",
  },
  modal: {
    eyebrow: "WAITLIST",
    title: "Join ANDÉN",
    subtitle: "Fill in your details and we'll send you an email to start the registration process.",
    close: "Close",
    closeAria: "Close",
    labels: {
      nombre: "First name",
      apellido: "Last name",
      email: "Email",
      empresa: "Company name",
    },
    placeholders: {
      nombre: "John",
      apellido: "Smith",
      email: "john@company.com",
      empresa: "My Startup Inc.",
    },
    submit: "Join the waitlist",
    submitting: "Sending...",
    genericError: "Error submitting the form",
    connectionError: "Connection error. Please try again.",
    alreadyExistsTitle: "You already have an account",
    alreadyExistsBody1: "The email",
    alreadyExistsBody2: "already has an account at Andén. Sign in with that email at",
    emailSentTitle: "Done! Check your email",
    emailSentBody1: "We sent an email to",
    emailSentBody2: "with your credentials and the link to start onboarding.",
    createdTitle: "Account created!",
    createdBody: "Your account was created. The email with your credentials may take a few minutes to arrive.",
  },
};

export const translations = { es, en };

export type Translation = typeof es;
