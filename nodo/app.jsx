/* global React, ReactDOM, NodoMark, HeroVisual */
const { useState, useEffect, useRef } = React;

/* ============================================================
   COPY (ES / EN)
   ============================================================ */
const COPY = {
  es: {
    nav: { services: "Servicios", work: "Casos", process: "Proceso", contact: "Contacto" },
    hero: {
      eyebrow: "Estudio de software · LATAM · 2026",
      pre: "Software hecho a medida —",
      h1head: "Construimos",
      h1tail: "las herramientas",
      h1end: "de tu negocio.",
      sub: "Somos un equipo pequeño que diseña y desarrolla productos digitales claros, rápidos y útiles. Sin promesas vagas, sin features de catálogo: solo lo que tu negocio necesita.",
      ctaPrimary: "Cotizar por WhatsApp",
      ctaGhost: "Ver casos",
      marquee: ["Landing pages", "E-commerce", "Reservas", "Catálogo + WhatsApp", "Dashboards", "Menú QR", "Software a medida", "Automatizaciones"]
    },
    manifesto: {
      label: "(00) Manifiesto",
      lines: [
        "Tratamos al software como un nodo en tu operación —",
        "no un fin en sí mismo, sino una conexión entre lo que hacés y lo que querés escalar.",
        "Diseño claro, código limpio, decisiones rápidas."
      ]
    },
    services: {
      num: "(01)",
      title: "Lo que hacemos.",
      items: [
        { name: "Landing pages", lede: "Sitios rápidos, modernos y estratégicos, pensados para generar confianza y convertir visitantes en clientes.", scope: "1–2 semanas", stack: "Next.js · Astro", deliver: "Sitio + analytics + SEO", panel: "landing" },
        { name: "E-commerce a medida", lede: "Tiendas online optimizadas para vender, escalar y respetar tu marca. Sin templates de catálogo.", scope: "3–6 semanas", stack: "Shopify · Medusa · Stripe", deliver: "Tienda + checkout + panel", panel: "ecom" },
        { name: "Catálogo + Pedidos WhatsApp", lede: "Mostrá tus productos, recibí pedidos por WhatsApp y organizá todo desde un panel simple.", scope: "1–2 semanas", stack: "Next.js · WA API", deliver: "Catálogo + panel + WA bot", panel: "wa" },
        { name: "Panel administrativo", lede: "Dashboards para ver ventas, pedidos y clientes en tiempo real. Tu negocio en una sola pantalla.", scope: "3–5 semanas", stack: "React · Node · Postgres", deliver: "Web app + roles + reportes", panel: "dash" },
        { name: "Menú QR para gastronomía", lede: "Tu menú digital, rápido y sin contacto. Cambios instantáneos, sin reimprimir nada.", scope: "1 semana", stack: "Next.js · PWA", deliver: "QR + menú + admin", panel: "qr" },
        { name: "Reservas y alquileres", lede: "Sistema de reservas online con calendario en tiempo real. Sin sobreventas, todo bajo control.", scope: "3–6 semanas", stack: "React · Calendar API", deliver: "Reservas + pagos + admin", panel: "calendar" },
        { name: "Software a medida", lede: "Cuando lo que necesitás no existe. Diseñamos y construimos sistemas internos a tu medida.", scope: "Variable", stack: "TypeScript · Cloud", deliver: "Plataforma + soporte", panel: "custom" },
        { name: "Automatizaciones e integraciones", lede: "Conectamos tus herramientas para que dejen de ser islas. Menos trabajo manual, más velocidad.", scope: "1–4 semanas", stack: "n8n · Make · APIs", deliver: "Flujos + monitoreo", panel: "auto" },
      ]
    },
    process: {
      num: "(02)",
      title: "Cómo trabajamos.",
      steps: [
        { n: "01", t: "Descubrir", p: "Entendemos tu negocio, tus clientes y tu problema real. Definimos alcance y métricas de éxito.", d: "2–5 días" },
        { n: "02", t: "Diseñar", p: "Wireframes, prototipo interactivo y diseño visual. Iteramos en vivo con vos hasta sentir que está.", d: "1–2 semanas" },
        { n: "03", t: "Construir", p: "Código limpio, sprints semanales, ambiente de prueba siempre disponible. Sin sorpresas.", d: "2–6 semanas" },
        { n: "04", t: "Lanzar y crecer", p: "Deploy, monitoreo, métricas y mejoras continuas. Te quedás con un equipo, no con un proveedor.", d: "Continuo" },
      ]
    },
    cases: {
      num: "(03)",
      title: "Trabajo seleccionado.",
    },
    stack: {
      num: "(04)",
      title: "El stack que usamos."
    },
    faq: {
      num: "(05)",
      title: "Preguntas frecuentes.",
      items: [
        { q: "¿Cuánto cuesta un proyecto?", a: "Depende del alcance. Una landing arranca desde USD 600, un e-commerce desde USD 2.500 y software a medida se cotiza por proyecto. Hablamos por WhatsApp y te pasamos un presupuesto claro en 48hs." },
        { q: "¿Trabajan con clientes fuera de Argentina?", a: "Sí. Trabajamos con clientes en toda LATAM, España y EE.UU. de forma 100% remota. Facturamos en USD o en moneda local según el caso." },
        { q: "¿Qué pasa después del lanzamiento?", a: "Te quedás con el código y con un plan de soporte mensual opcional. Hacemos mejoras continuas, agregamos features y te ayudamos a escalar." },
        { q: "¿Usan plantillas o templates?", a: "No. Diseñamos cada proyecto desde cero, basados en tu marca, tu operación y tus clientes reales." },
        { q: "¿Cuánto tarda un proyecto?", a: "Una landing 1–2 semanas, un e-commerce 3–6 semanas, software a medida entre 6 y 16 semanas según complejidad. Te damos un cronograma firme antes de arrancar." }
      ]
    },
    contact: {
      eyebrow: "(06) Empecemos",
      h: "¿Tenés una idea?",
      hSpan: "Hablemos.",
      sub: "Respondemos en menos de 24 horas. Sin formularios eternos, sin discovery calls de 1 hora.",
      cta: "Escribir por WhatsApp",
      ghost: "Agendar reunión",
      info: [
        { k: "Email", v: "hola@nodo.studio" },
        { k: "WhatsApp", v: "+54 9 11 0000 0000" },
        { k: "Horario", v: "Lun – Vie · 9 a 19h" },
        { k: "Ubicación", v: "Remoto · LATAM" },
      ]
    },
    footer: { left: "© 2026 Nodo Studio", right: "Hecho con cuidado, no con prisa." }
  },
  en: {
    nav: { services: "Services", work: "Work", process: "Process", contact: "Contact" },
    hero: {
      eyebrow: "Software studio · LATAM · 2026",
      pre: "Software, built for you —",
      h1head: "We build",
      h1tail: "the tools",
      h1end: "your business runs on.",
      sub: "A small team designing and building digital products that are clear, fast and useful. No vague promises, no catalog features — only what your business actually needs.",
      ctaPrimary: "Quote on WhatsApp",
      ctaGhost: "See work",
      marquee: ["Landing pages", "E-commerce", "Booking", "Catalog + WhatsApp", "Dashboards", "QR menus", "Custom software", "Automations"]
    },
    manifesto: {
      label: "(00) Manifesto",
      lines: [
        "We treat software as a node in your operation —",
        "not an end in itself, but a connection between what you do and what you want to scale.",
        "Clear design, clean code, fast decisions."
      ]
    },
    services: {
      num: "(01)",
      title: "What we do.",
      items: [
        { name: "Landing pages", lede: "Fast, modern, strategic sites built to earn trust and turn visitors into customers.", scope: "1–2 weeks", stack: "Next.js · Astro", deliver: "Site + analytics + SEO", panel: "landing" },
        { name: "Custom e-commerce", lede: "Online stores optimized to sell, scale and respect your brand. No catalog templates.", scope: "3–6 weeks", stack: "Shopify · Medusa · Stripe", deliver: "Store + checkout + admin", panel: "ecom" },
        { name: "WhatsApp catalog & ordering", lede: "Show your products, receive orders via WhatsApp and run everything from a simple panel.", scope: "1–2 weeks", stack: "Next.js · WA API", deliver: "Catalog + panel + bot", panel: "wa" },
        { name: "Admin dashboards", lede: "Dashboards for sales, orders and clients in real time. Your whole business on one screen.", scope: "3–5 weeks", stack: "React · Node · Postgres", deliver: "Web app + roles + reports", panel: "dash" },
        { name: "QR menus for hospitality", lede: "Digital, fast and contactless menus. Instant updates with no reprinting needed.", scope: "1 week", stack: "Next.js · PWA", deliver: "QR + menu + admin", panel: "qr" },
        { name: "Booking & rentals", lede: "Online booking with real-time calendar. No overselling, all under control.", scope: "3–6 weeks", stack: "React · Calendar API", deliver: "Booking + payments + admin", panel: "calendar" },
        { name: "Custom software", lede: "When what you need doesn't exist yet. We design and build internal systems tailored to you.", scope: "Variable", stack: "TypeScript · Cloud", deliver: "Platform + support", panel: "custom" },
        { name: "Automations & integrations", lede: "We connect your tools so they stop being islands. Less manual work, more speed.", scope: "1–4 weeks", stack: "n8n · Make · APIs", deliver: "Flows + monitoring", panel: "auto" },
      ]
    },
    process: {
      num: "(02)",
      title: "How we work.",
      steps: [
        { n: "01", t: "Discover", p: "We understand your business, your customers and the real problem. Scope and success metrics defined together.", d: "2–5 days" },
        { n: "02", t: "Design", p: "Wireframes, interactive prototype and visual design. We iterate live with you until it feels right.", d: "1–2 weeks" },
        { n: "03", t: "Build", p: "Clean code, weekly sprints, staging always available. No surprises.", d: "2–6 weeks" },
        { n: "04", t: "Launch & grow", p: "Deploy, monitoring, metrics and continuous improvement. You get a team, not a vendor.", d: "Ongoing" },
      ]
    },
    cases: {
      num: "(03)",
      title: "Selected work.",
    },
    stack: {
      num: "(04)",
      title: "The stack we use."
    },
    faq: {
      num: "(05)",
      title: "Frequently asked.",
      items: [
        { q: "How much does a project cost?", a: "It depends on scope. Landings start at USD 600, e-commerce from USD 2,500, custom software is priced per project. We chat on WhatsApp and send you a clear quote in 48h." },
        { q: "Do you work with clients outside Argentina?", a: "Yes. We work with clients across LATAM, Spain and the US, 100% remote. Invoicing in USD or local currency depending on the case." },
        { q: "What happens after launch?", a: "You keep the code and get an optional monthly support plan. We do continuous improvements, add features and help you scale." },
        { q: "Do you use templates?", a: "No. Every project is designed from scratch, based on your brand, your operation and your real customers." },
        { q: "How long does a project take?", a: "A landing 1–2 weeks, e-commerce 3–6 weeks, custom software 6–16 weeks depending on complexity. You get a firm timeline before we start." }
      ]
    },
    contact: {
      eyebrow: "(06) Let's start",
      h: "Got an idea?",
      hSpan: "Let's talk.",
      sub: "We reply in under 24 hours. No endless forms, no 1-hour discovery calls.",
      cta: "Message on WhatsApp",
      ghost: "Book a call",
      info: [
        { k: "Email", v: "hello@nodo.studio" },
        { k: "WhatsApp", v: "+54 9 11 0000 0000" },
        { k: "Hours", v: "Mon – Fri · 9 to 7pm" },
        { k: "Location", v: "Remote · LATAM" },
      ]
    },
    footer: { left: "© 2026 Nodo Studio", right: "Made with care, not in a rush." }
  }
};

/* ============================================================
   SHARED ICONS / GLYPHS
   ============================================================ */
const Arrow = (p) => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" {...p}>
    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const WAIcon = (p) => (
  <svg className="ico" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12.05 2C6.5 2 2 6.5 2 12.05c0 1.8.49 3.55 1.4 5.1L2 22l4.95-1.36c1.5.82 3.2 1.26 4.96 1.27h.01c5.55 0 10.05-4.5 10.05-10.05S17.6 2 12.05 2zm5.85 14.27c-.25.7-1.4 1.33-1.96 1.36-.51.03-1.05.05-1.65-.1-.38-.1-.86-.27-1.48-.54-2.6-1.12-4.3-3.74-4.42-3.92-.13-.18-1.06-1.41-1.06-2.69 0-1.28.67-1.9.91-2.17.24-.27.52-.34.7-.34.17 0 .35.01.5.01.16.01.38-.06.6.46.22.54.75 1.86.82 1.99.07.13.12.28.02.46-.1.18-.15.27-.3.41-.16.13-.33.3-.47.4-.16.13-.32.27-.14.55.18.27.8 1.32 1.71 2.14 1.18 1.05 2.17 1.38 2.44 1.52.27.13.43.11.59-.07.16-.18.68-.8.86-1.07.18-.27.36-.22.6-.13.25.09 1.55.73 1.82.86.27.13.45.2.51.31.06.12.06.7-.19 1.4z"/>
  </svg>
);

/* ============================================================
   NAV
   ============================================================ */
function Nav({ lang, setLang, t, accent }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="nav-logo">
        <span className="mark" style={{ color: 'var(--accent)' }}>
          <NodoMark size={28} color="var(--accent)"/>
        </span>
        <span className="word">NODO</span>
      </a>
      <div className="nav-links">
        <a href="#services">{t.nav.services}</a>
        <a href="#work">{t.nav.work}</a>
        <a href="#process">{t.nav.process}</a>
        <a href="#contact">{t.nav.contact}</a>
      </div>
      <div className="nav-right">
        <div className="lang-toggle" role="tablist">
          <button onClick={() => setLang("es")} className={lang === "es" ? "active" : ""}>ES</button>
          <button onClick={() => setLang("en")} className={lang === "en" ? "active" : ""}>EN</button>
        </div>
        <a className="btn btn-primary" href="https://wa.me/5491100000000" target="_blank" rel="noreferrer">
          {lang === "es" ? "Cotizar" : "Quote"} <Arrow/>
        </a>
      </div>
    </nav>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero({ t, lang }) {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">
              <span className="dot"/>
              <span className="eyebrow">{t.hero.eyebrow}</span>
            </div>
            <h1>
              <span className="small">{t.hero.pre}</span>
              {t.hero.h1head} <span className="italic accent">{t.hero.h1tail}</span><br/>
              {t.hero.h1end}
            </h1>
            <p className="hero-sub">{t.hero.sub}</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="https://wa.me/5491100000000" target="_blank" rel="noreferrer">
                <WAIcon style={{ width: 14, height: 14 }}/>
                {t.hero.ctaPrimary}
              </a>
              <a className="btn btn-ghost" href="#work">
                {t.hero.ctaGhost} <Arrow/>
              </a>
            </div>
          </div>
          <HeroVisual/>
        </div>

        <div className="hero-marquee">
          <div className="track">
            {[...t.hero.marquee, ...t.hero.marquee, ...t.hero.marquee].map((s, i) => (
              <span className="item" key={i}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MANIFESTO
   ============================================================ */
function Manifesto({ t }) {
  return (
    <section className="manifesto reveal">
      <div className="container">
        <div className="manifesto-grid">
          <div className="label">{t.manifesto.label}</div>
          <div>
            {t.manifesto.lines.map((l, i) => (
              <p key={i}>
                {i === 0 ? <span className="italic accent">{l}</span> : <span className={i === 1 ? "muted" : ""}>{l}</span>}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SERVICE PANEL VISUALS — small product mocks
   ============================================================ */
function PanelVisual({ kind }) {
  const common = { background: 'var(--bg-2)' };
  if (kind === "landing") return (
    <div className="service-visual">
      <div style={{ position: 'absolute', inset: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ height: 8, width: '60%', background: 'var(--text-3)', borderRadius: 4 }}/>
          <div>
            <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 28, lineHeight: 1, color: 'var(--text)' }}>tu marca, <span style={{ color: 'var(--accent)' }}>clara</span>.</div>
            <div style={{ marginTop: 12, display: 'inline-block', padding: '6px 10px', borderRadius: 999, background: 'var(--accent)', color: '#0a0a0a', fontFamily: 'JetBrains Mono', fontSize: 9, letterSpacing: '0.1em' }}>CTA →</div>
          </div>
        </div>
        <div style={{ background: 'linear-gradient(135deg, color-mix(in oklch, var(--accent) 40%, #0a0a0a), var(--bg-3))', borderRadius: 8, position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 14, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4 }}/>
        </div>
      </div>
    </div>
  );
  if (kind === "ecom") return (
    <div className="service-visual">
      <div style={{ position: 'absolute', inset: 24, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {[1,2,3].map(i => (
          <div key={i} style={{ background: 'var(--bg-3)', borderRadius: 10, padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ aspectRatio: '1/1', background: `radial-gradient(circle at 60% 40%, color-mix(in oklch, var(--accent) ${20+i*15}%, transparent), var(--bg-2))`, borderRadius: 6 }}/>
            <div>
              <div style={{ height: 5, background: 'var(--text-3)', borderRadius: 2, width: '70%', marginBottom: 4 }}/>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: 'var(--accent)' }}>${i*12+'.99'}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  if (kind === "wa") return (
    <div className="service-visual">
      <div style={{ position: 'absolute', inset: 24, display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'flex-end' }}>
        {[
          { side: 'left', text: 'Hola, quiero hacer un pedido 👋', bg: 'rgba(255,255,255,0.08)' },
          { side: 'right', text: 'Hola! ¿Qué te interesa?', bg: 'var(--accent)' },
          { side: 'left', text: '2 hamburguesas + papas', bg: 'rgba(255,255,255,0.08)' },
          { side: 'right', text: 'Listo, $4.500 — ¿confirmás?', bg: 'var(--accent)' },
        ].map((m, i) => (
          <div key={i} style={{
            alignSelf: m.side === 'left' ? 'flex-start' : 'flex-end',
            background: m.bg, color: m.side === 'right' ? '#0a0a0a' : 'var(--text)',
            padding: '8px 12px', borderRadius: 12, fontSize: 12, maxWidth: '70%'
          }}>{m.text}</div>
        ))}
      </div>
    </div>
  );
  if (kind === "dash") return (
    <div className="service-visual">
      <div style={{ position: 'absolute', inset: 24, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
        {[
          { label: 'VENTAS', val: '$12.4k', d: '+18%' },
          { label: 'PEDIDOS', val: '124', d: '+15%' },
          { label: 'CLIENTES', val: '32', d: '+9%' },
        ].map((c, i) => (
          <div key={i} style={{ background: 'var(--bg-3)', borderRadius: 10, padding: 14 }}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 9, color: 'var(--text-3)', letterSpacing: '0.12em' }}>{c.label}</div>
            <div style={{ fontFamily: 'Instrument Serif', fontSize: 28, marginTop: 4 }}>{c.val}</div>
            <div style={{ color: 'var(--ok)', fontFamily: 'JetBrains Mono', fontSize: 10 }}>{c.d}</div>
          </div>
        ))}
        <div style={{ gridColumn: 'span 3', background: 'var(--bg-3)', borderRadius: 10, padding: 14, position: 'relative', height: 80 }}>
          <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ position: 'absolute', inset: 14, width: 'calc(100% - 28px)', height: 'calc(100% - 28px)' }}>
            <path d="M0,25 Q15,18 25,20 T50,12 T75,8 T100,4" stroke="var(--accent)" strokeWidth="1" fill="none"/>
            <path d="M0,25 Q15,18 25,20 T50,12 T75,8 T100,4 L100,30 L0,30 Z" fill="var(--accent)" opacity="0.15"/>
          </svg>
        </div>
      </div>
    </div>
  );
  if (kind === "qr") return (
    <div className="service-visual">
      <div style={{ position: 'absolute', inset: 24, display: 'flex', gap: 16, alignItems: 'center' }}>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', gridTemplateRows: 'repeat(8,1fr)', gap: 2, aspectRatio: '1/1', maxHeight: 150 }}>
          {Array.from({length:64}).map((_,i) => {
            const on = [0,1,2,5,6,7,8,10,13,15,16,18,21,23,26,28,29,32,35,37,40,42,44,47,49,50,51,53,55,56,58,59,60,63].includes(i);
            return <div key={i} style={{ background: on ? 'var(--text)' : 'transparent' }}/>;
          })}
        </div>
        <div style={{ flex: 1 }}>
          {['ENTRADAS', 'PRINCIPALES', 'BEBIDAS', 'POSTRES'].map((c, i) => (
            <div key={i} style={{ padding: '8px 0', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'JetBrains Mono', fontSize: 11, color: i === 1 ? 'var(--accent)' : 'var(--text-2)' }}>
              <span>{c}</span><span>→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  if (kind === "calendar") return (
    <div className="service-visual">
      <div style={{ position: 'absolute', inset: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div style={{ fontFamily: 'Instrument Serif', fontSize: 20 }}>Mayo 2026</div>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: 'var(--text-3)' }}>‹ ›</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 4, fontFamily: 'JetBrains Mono', fontSize: 10 }}>
          {Array.from({length: 28}).map((_, i) => {
            const day = i + 1;
            const reserved = [3,4,5,11,12,18,19,20].includes(day);
            const blocked = [9,25].includes(day);
            return (
              <div key={i} style={{
                aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: reserved ? 'var(--accent)' : blocked ? 'var(--text-3)' : 'var(--bg-3)',
                color: reserved || blocked ? '#0a0a0a' : 'var(--text-2)',
                borderRadius: 4
              }}>{day}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
  if (kind === "custom") return (
    <div className="service-visual">
      <div style={{ position: 'absolute', inset: 24, display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'center' }}>
        {['{ }', '< />', '[ ]', '( )', '#'].map((g, i) => (
          <div key={i} style={{
            fontFamily: 'JetBrains Mono', fontSize: 32,
            color: i === 2 ? 'var(--accent)' : 'var(--text-2)',
            padding: 14, border: '1px solid var(--line)', borderRadius: 12,
            background: i === 2 ? 'rgba(255,77,46,0.06)' : 'transparent'
          }}>{g}</div>
        ))}
      </div>
    </div>
  );
  if (kind === "auto") return (
    <div className="service-visual">
      <svg viewBox="0 0 300 160" style={{ position: 'absolute', inset: 24, width: 'calc(100% - 48px)', height: 'calc(100% - 48px)' }}>
        {[
          { x: 20, y: 80, label: 'Trigger' },
          { x: 110, y: 30, label: 'Validar' },
          { x: 110, y: 130, label: 'Condición' },
          { x: 210, y: 80, label: 'Acción' },
        ].map((n, i) => (
          <g key={i}>
            <rect x={n.x - 38} y={n.y - 16} width="76" height="32" rx="6"
              fill="var(--bg-3)" stroke="var(--line-2)"/>
            <text x={n.x} y={n.y + 4} textAnchor="middle"
              fill={i === 0 ? 'var(--accent)' : 'var(--text)'}
              fontFamily="JetBrains Mono" fontSize="10">{n.label}</text>
          </g>
        ))}
        <path d="M58 80 L72 80 L72 30 L72 30" stroke="var(--accent)" fill="none" strokeWidth="1" strokeDasharray="2 3"/>
        <path d="M58 80 L72 80 L72 130 L72 130" stroke="var(--text-3)" fill="none" strokeWidth="1" strokeDasharray="2 3"/>
        <path d="M148 30 L172 30 L172 80" stroke="var(--accent)" fill="none" strokeWidth="1" strokeDasharray="2 3"/>
        <path d="M148 130 L172 130 L172 80" stroke="var(--text-3)" fill="none" strokeWidth="1" strokeDasharray="2 3"/>
        <circle cx="20" cy="80" r="2" fill="var(--accent)"/>
        <circle cx="210" cy="80" r="2" fill="var(--accent)"/>
      </svg>
    </div>
  );
  return <div className="service-visual"/>;
}

/* ============================================================
   SERVICES
   ============================================================ */
function Services({ t, lang }) {
  const [active, setActive] = useState(0);
  const s = t.services.items[active];
  return (
    <section id="services" className="reveal">
      <div className="container">
        <div className="section-head">
          <div className="num">{t.services.num}</div>
          <h2>{t.services.title}</h2>
        </div>

        <div className="services-shell">
          <div className="service-tabs">
            {t.services.items.map((it, i) => (
              <button
                key={i}
                className={`service-tab ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="idx">{String(i+1).padStart(2, "0")}</span>
                <span>{it.name}</span>
                <span className="chev">→</span>
              </button>
            ))}
          </div>

          <div className="service-panel" key={active}>
            <div className="panel-eyebrow">
              {String(active+1).padStart(2,"0")} / {String(t.services.items.length).padStart(2,"0")} · {s.name}
            </div>
            <h3>{s.name}</h3>
            <p className="lede">{s.lede}</p>

            <PanelVisual kind={s.panel}/>

            <div className="service-meta">
              <div className="cell">
                <div className="k">{lang === "es" ? "Tiempo" : "Timeline"}</div>
                <div className="v">{s.scope}</div>
              </div>
              <div className="cell">
                <div className="k">Stack</div>
                <div className="v">{s.stack}</div>
              </div>
              <div className="cell">
                <div className="k">{lang === "es" ? "Entrega" : "Delivery"}</div>
                <div className="v">{s.deliver}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROCESS
   ============================================================ */
function Process({ t }) {
  return (
    <section id="process" className="process reveal">
      <div className="container">
        <div className="section-head">
          <div className="num">{t.process.num}</div>
          <h2>{t.process.title}</h2>
        </div>
        <div className="process-grid">
          {t.process.steps.map((s, i) => (
            <div className="step" key={i}>
              <div className="num">{s.n} —</div>
              <h4>{s.t}</h4>
              <p>{s.p}</p>
              <div className="dur">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CASES — mock devices with placeholder products
   ============================================================ */
const CASES = [
  { tag: "E-commerce / Beauty", name: { es: "Aurelia Skincare", en: "Aurelia Skincare" }, kind: "ecom", size: "big" },
  { tag: "Reservas / Hospitality", name: { es: "Cabañas del Lago", en: "Lakeside Cabins" }, kind: "calendar", size: "small" },
  { tag: "Dashboard / Retail", name: { es: "Norte Distribuidora", en: "Norte Distribution" }, kind: "dash", size: "third" },
  { tag: "Catálogo / Gastronomía", name: { es: "Burgers del Sur", en: "Southern Burgers" }, kind: "wa", size: "third" },
  { tag: "Menú QR / Resto", name: { es: "Trattoria Cinco", en: "Trattoria Cinco" }, kind: "qr", size: "third" },
];

function CaseMock({ kind }) {
  return (
    <div className="case-thumb">
      <div className="mock">
        <div className="mock-screen">
          {kind === "ecom" && (
            <>
              <div className="mock-bar full" style={{ height: 12, marginBottom: 14 }}/>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div>
                  <div style={{ fontFamily: 'Instrument Serif', fontSize: 28, lineHeight: 1, color: 'var(--text)' }}>productos<br/><span style={{ color: 'var(--accent)' }}>que elevan</span></div>
                  <div className="mock-bar half" style={{ marginTop: 10 }}/>
                  <div style={{ marginTop: 10, display: 'inline-block', padding: '6px 10px', background: 'var(--accent)', color: '#0a0a0a', borderRadius: 4, fontSize: 9 }}>COMPRAR →</div>
                </div>
                <div style={{ background: 'radial-gradient(circle at 50% 40%, color-mix(in oklch, var(--accent) 40%, #0a0a0a), var(--bg-3))', borderRadius: 6, position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 12, borderRadius: 4, background: 'rgba(0,0,0,0.6)' }}/>
                </div>
              </div>
            </>
          )}
          {kind === "calendar" && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <div style={{ fontFamily: 'Instrument Serif', fontSize: 18, color: 'var(--text)' }}>Mayo 2026</div>
                <div style={{ color: 'var(--text-3)' }}>‹ ›</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 3 }}>
                {Array.from({length:28}).map((_,i) => {
                  const reserved = [3,4,11,12,18,19].includes(i+1);
                  return <div key={i} style={{ aspectRatio: '1/1', borderRadius: 3, background: reserved ? 'var(--accent)' : 'var(--bg-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: reserved ? '#0a0a0a' : 'var(--text-3)' }}>{i+1}</div>;
                })}
              </div>
            </>
          )}
          {kind === "dash" && (
            <>
              <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                {['V','P','C'].map((l,i) => (
                  <div key={i} style={{ flex: 1, padding: 8, background: 'var(--bg-3)', borderRadius: 4 }}>
                    <div style={{ fontSize: 8, color: 'var(--text-3)' }}>{l}</div>
                    <div style={{ fontFamily: 'Instrument Serif', fontSize: 16, color: i === 0 ? 'var(--accent)' : 'var(--text)' }}>{['12.4k','124','32'][i]}</div>
                  </div>
                ))}
              </div>
              <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ width: '100%', height: 60 }}>
                <path d="M0,25 Q15,15 30,18 T60,8 T100,2" stroke="var(--accent)" strokeWidth="1" fill="none"/>
                <path d="M0,25 Q15,15 30,18 T60,8 T100,2 L100,30 L0,30 Z" fill="var(--accent)" opacity="0.15"/>
              </svg>
            </>
          )}
          {kind === "wa" && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'flex-end', height: '100%' }}>
              {[
                { side: 'l', t: 'Hola 👋' },
                { side: 'r', t: '¿En qué te ayudo?' },
                { side: 'l', t: 'Una hamburguesa 🍔' },
                { side: 'r', t: '$4.500 — confirmá' }
              ].map((m, i) => (
                <div key={i} style={{
                  alignSelf: m.side === 'l' ? 'flex-start' : 'flex-end',
                  background: m.side === 'l' ? 'var(--bg-3)' : 'var(--accent)',
                  color: m.side === 'l' ? 'var(--text)' : '#0a0a0a',
                  padding: '4px 8px', borderRadius: 8, fontSize: 9, maxWidth: '70%'
                }}>{m.t}</div>
              ))}
            </div>
          )}
          {kind === "qr" && (
            <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 1, width: 70, aspectRatio: '1/1' }}>
                {Array.from({length: 49}).map((_,i) => {
                  const on = [0,1,2,5,6,8,12,15,18,21,24,28,30,33,36,40,42,44,47,48].includes(i);
                  return <div key={i} style={{ background: on ? 'var(--text)' : 'transparent' }}/>;
                })}
              </div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 8 }}>
                <div style={{ color: 'var(--accent)', marginBottom: 4 }}>ESCANEÁ</div>
                <div style={{ color: 'var(--text-2)' }}>El menú</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Cases({ t, lang }) {
  return (
    <section id="work" className="cases reveal">
      <div className="container">
        <div className="section-head">
          <div className="num">{t.cases.num}</div>
          <h2>{t.cases.title}</h2>
        </div>
        <div className="cases-grid">
          {CASES.map((c, i) => (
            <a key={i} href="#" className={`case ${c.size}`}>
              <CaseMock kind={c.kind}/>
              <div className="case-body">
                <div>
                  <div className="meta">{c.tag}</div>
                  <h5>{c.name[lang]}</h5>
                </div>
                <span className="case-arrow"><Arrow/></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   STACK
   ============================================================ */
const STACK = [
  { g: "N", l: "Next.js" },
  { g: "R", l: "React" },
  { g: "TS", l: "TypeScript" },
  { g: "△", l: "Vercel" },
  { g: "S", l: "Supabase" },
  { g: "P", l: "Postgres" },
  { g: "S", l: "Stripe" },
  { g: "T", l: "Tailwind" },
  { g: "F", l: "Figma" },
  { g: "n8", l: "n8n" },
  { g: "W", l: "WhatsApp API" },
  { g: "A", l: "Astro" },
];

function Stack({ t }) {
  return (
    <section className="stack reveal">
      <div className="container">
        <div className="section-head">
          <div className="num">{t.stack.num}</div>
          <h2>{t.stack.title}</h2>
        </div>
        <div className="stack-grid">
          {STACK.map((s, i) => (
            <div className="stack-item" key={i}>
              <span className="glyph">{s.g}</span>
              <span>{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
   ============================================================ */
function FAQ({ t }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq reveal">
      <div className="container">
        <div className="section-head">
          <div className="num">{t.faq.num}</div>
          <h2>{t.faq.title}</h2>
        </div>
        <div className="faq-list">
          {t.faq.items.map((it, i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="qnum">0{i+1}</span>
                <span>{it.q}</span>
                <span className="toggle"/>
              </button>
              <div className="faq-a">
                <div className="inner">{it.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT
   ============================================================ */
function Contact({ t }) {
  return (
    <section id="contact" className="contact reveal">
      <div className="container">
        <div className="contact-eyebrow">{t.contact.eyebrow}</div>
        <h2>
          {t.contact.h}<br/>
          <span className="italic accent">{t.contact.hSpan}</span>
        </h2>
        <p className="hero-sub" style={{ marginTop: 0, marginBottom: 40 }}>{t.contact.sub}</p>
        <div className="contact-row">
          <a className="btn btn-primary" href="https://wa.me/5491100000000" target="_blank" rel="noreferrer">
            <WAIcon style={{ width: 14, height: 14 }}/> {t.contact.cta}
          </a>
          <a className="btn btn-ghost" href="#">{t.contact.ghost} <Arrow/></a>
        </div>
        <div className="contact-grid">
          {t.contact.info.map((c, i) => (
            <div key={i}>
              <div className="k">{c.k}</div>
              <div className="v">{c.v}</div>
            </div>
          ))}
        </div>
        <div className="bg-type" aria-hidden="true">nodo</div>
      </div>
    </section>
  );
}

/* ============================================================
   CUSTOM CURSOR
   ============================================================ */
function CustomCursor() {
  const dot = useRef(null), ring = useRef(null);
  useEffect(() => {
    let x = 0, y = 0, rx = 0, ry = 0;
    const onMove = (e) => { x = e.clientX; y = e.clientY; if (dot.current) { dot.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`; } };
    const tick = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    };
    const onOver = (e) => {
      const t = e.target.closest('a, button, .service-tab, .case, .faq-q, .stack-item');
      if (ring.current) ring.current.classList.toggle('hover', !!t);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    tick();
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);
  return (<>
    <div ref={ring} className="cursor-ring"/>
    <div ref={dot} className="cursor-dot"/>
  </>);
}

/* ============================================================
   APP
   ============================================================ */
function App() {
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "accent": "#ff4d2e",
    "lang": "es"
  }/*EDITMODE-END*/;

  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const [lang, setLang] = useState(tweaks.lang || "es");
  const t = COPY[lang];

  // apply accent color
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accent);
  }, [tweaks.accent]);

  // reveal on scroll
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.08 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  return (
    <>
      <CustomCursor/>
      <Nav lang={lang} setLang={setLang} t={t}/>
      <main>
        <Hero t={t} lang={lang}/>
        <Manifesto t={t}/>
        <Services t={t} lang={lang}/>
        <Process t={t}/>
        <Cases t={t} lang={lang}/>
        <Stack t={t}/>
        <FAQ t={t}/>
        <Contact t={t}/>
      </main>
      <footer className="footer container">
        <span>{t.footer.left}</span>
        <span>{t.footer.right}</span>
      </footer>

      <a className="wa-fab" href="https://wa.me/5491100000000" target="_blank" rel="noreferrer">
        <WAIcon/> WhatsApp
      </a>

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection title={lang === "es" ? "Color de acento" : "Accent color"}>
          <window.TweakColor
            label={lang === "es" ? "Acento" : "Accent"}
            value={tweaks.accent}
            onChange={v => setTweak('accent', v)}
            options={['#ff4d2e', '#34d399', '#7aa2ff', '#f0c44a', '#e36cff']}
          />
        </window.TweakSection>
      </window.TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
