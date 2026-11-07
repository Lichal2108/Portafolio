(function () {
  'use strict';

  var root = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  if (!hasGsap) root.classList.add('reduced');
  var animate = hasGsap && !reduced;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  /* =========================================================
     Idiomas: el HTML trae el español; aquí vive el inglés.
     ========================================================= */
  var en = {
    'skip': 'Skip to content',
    'nav.about': 'About', 'nav.experience': 'Experience', 'nav.projects': 'Projects', 'nav.skills': 'Skills', 'nav.contact': 'Contact',
    'menu': 'Menu',
    'hero.status': 'Now: IPA Architecture Analyst at BBVA Peru',
    'hero.lead': 'I build',
    'hero.leadSr': 'AI automations, banking platforms, WhatsApp agents and custom software.',
    'hero.cta1': 'See projects',
    'hero.cta2': 'Get in touch',
    'hero.photoAlt': 'Richard Pillaca sitting in front of a blue sign with plants behind',
    'tag.ipa': 'IPA Architecture', 'tag.sec': 'Cybersecurity', 'tag.ai': 'Generative AI',

    'about.title': 'About me',
    'about.statement': 'I work in BBVA Peru’s architecture team, automating processes with Robotics, Document Generator and generative AI. Before that I protected the bank’s information in Cybersecurity. Outside the bank I build software people actually use.',
    'about.sub': 'I study Systems and Computer Engineering at UNMSM, in the top fifth of my class. I worked at Tekneka as a data analyst and at Softtek building on Guidewire.',
    'stats.s1': 'Years of experience',
    'stats.s2': 'Companies: BBVA, Softtek and Tekneka',
    'stats.s3': 'Featured projects',
    'stats.top': 'Top',
    'stats.s4': 'Top fifth of my class at UNMSM',

    'exp.title': 'Experience',
    'exp.current': 'Current role',
    'exp.r1.dates': 'Jul 2026 - present',
    'exp.r1.title': 'Architecture Analyst, Intelligent Process Automation (IPA)',
    'exp.r1.p1': 'I drive the 2027 strategy to migrate the bank’s data transfer technology, which is reaching obsolescence.',
    'exp.r1.p2': 'I recertify and clean up data transfer components: what gets archived and what gets reconfigured (MX engine instead of PER).',
    'exp.r1.p3': 'I run the pilot that mass-migrates document templates from legacy into Document Generator, along with its governance and support.',
    'exp.r1.p4': 'I build automations with Robotics and generative AI (Gemini Gems, NotebookLM, MCP) for the team and other disciplines.',
    'exp.r1.p5': 'I manage the on-call rotation for production incidents and report progress to leaders and management.',
    'exp.r1.c4': 'Generative AI',
    'exp.r1.c5': 'BEA Upsilon Psi event',
    'exp.r2.dates': 'Nov 2025 - Jun 2026',
    'exp.r2.title': 'Cybersecurity Intern (Information Security)',
    'exp.r2.p1': 'Built a governance platform that centralizes Corporate Security information and automates policy tracking, alerts and emails with Google Apps Script.',
    'exp.r2.p2': 'Took part in the DLP tool migration with effectiveness testing and documentation. Joined the Security Exceptions Committee.',
    'exp.r2.p3': 'Structured the team data and automated recurring processes, laying the groundwork for generative AI.',
    'exp.r2.p4': 'Led onboarding talks and training on phishing, information classification and incident reporting.',
    'exp.r2.p5': 'Ran stress tests and social engineering drills as part of the cyber resilience initiatives.',
    'exp.r2.c1': 'Exceptions Committee',
    'exp.r2.c3': 'Cyber resilience',
    'exp.r3.dates': 'Sep 2025 - Nov 2025',
    'exp.r3.p1': 'Built and maintained applications in Guidewire Studio, focused on automating internal processes and improving the user experience.',
    'exp.r3.p2': 'Customized BillingCenter, ClaimCenter and PolicyCenter and integrated them with external systems.',
    'exp.r4.dates': 'Nov 2024 - Aug 2025',
    'exp.r4.title': 'Data Analyst',
    'exp.r4.p1': 'Analyzed historical data with SQL and Python to find purchasing and sales patterns.',
    'exp.r4.p2': 'Built Power BI dashboards to track strategic KPIs and sales forecasts.',

    'proj.title': 'Projects',
    'proj.lead': 'Real clients and my own projects. Automation, applied AI and end-to-end web products.',
    'proj.more': 'All my GitHub',
    'proj.site': 'Visit site',
    'proj.private': 'Private code',
    'proj.p1.kicker': 'Real client · Tekneka',
    'proj.p1.title': 'WhatsApp sales agent and website',
    'proj.p1.desc': 'AI agent that answers customers on WhatsApp using only the company’s documentation: it cites its sources, escalates what it does not know to the owner and logs every customer by product. Plus the new website connected to WooCommerce.',
    'proj.p1.alt': 'Tekneka website home page showing its red sharps containers',
    'proj.p2.kicker': 'Generative AI',
    'proj.p2.desc': 'Turns an idea into an animated story video for YouTube: script with Claude, consistent characters, per-scene images, narration, subtitles and render.',
    'proj.p3.kicker': 'Web product',
    'proj.p3.desc': 'Operations management platform: inventory with map, warehouse, spare parts, equipment, kanban-style workflows and photo reports.',
    'proj.p4.kicker': 'Computer vision',
    'proj.p4.desc': 'Detects vehicles and plates on Lima’s Vía Expresa with YOLOv8 and PaddleOCR, writes violation reports with Gemini and predicts accident severity.',
    'proj.p5.title': 'Predictive models',
    'proj.p5.desc': 'Regression and classification with a GUI and metric comparison: air pollution, forest fires with 118k records and breast cancer diagnosis.',
    'proj.p5.l1': 'Air', 'proj.p5.l2': 'Fires', 'proj.p5.l3': 'Cancer',
    'proj.p6.kicker': 'Full stack',
    'proj.p6.title': 'Auto repair shop system',
    'proj.p6.desc': 'Angular with financial and operational dashboards, and a Spring Boot microservices backend with JWT authentication.',
    'proj.p6.alt': 'Illustration of an auto repair shop',
    'proj.p7.title': 'Smart home',
    'proj.p7.desc': 'ESP32 with fire detection, remote room monitoring and real-time data with Firebase.',
    'proj.p7.alt': 'Diagram of a smart home with connected sensors',

    'skills.title': 'What I work with',
    'skills.g1': 'Architecture and automation',
    'skills.g1.d': 'Platforms the bank uses every day to move data, generate documents and automate tasks.',
    'skills.g1.c6': 'Incident management',
    'skills.g2': 'Generative AI',
    'skills.g2.d': 'From internal assistants to agents that answer customers with verifiable sources.',
    'skills.g2.c5': 'RAG agents',
    'skills.g3': 'Security',
    'skills.g3.c2': 'Exceptions Committee',
    'skills.g3.c3': 'Cyber resilience',
    'skills.g3.c4': 'Social engineering',
    'skills.g4': 'Development',
    'skills.g5': 'Data and ML',
    'skills.g6': 'Ways of working',
    'skills.g6.c5': 'Technical mentoring',
    'skills.g6.c6': 'Internal clients',

    'edu.title': 'Education',
    'edu.e1.t': 'Systems and Computer Engineering',
    'edu.e1.s': 'Universidad Nacional Mayor de San Marcos, top fifth of class',
    'edu.e1.y': '2022 - now',
    'edu.e2.t': 'Advanced English',
    'edu.e3.t': 'Data analysis with Pandas and Power BI',
    'edu.e3.s': 'Chamber of Foreign Trade',
    'edu.courses': 'More courses and certifications',
    'edu.c1': 'Information Security Policy, BBVA Campus (2026)',
    'edu.c2': 'GEUC Policy and Shadow IT removal, BBVA Campus (2026)',
    'edu.c4': 'Data analysis with R Studio, Skill - Lima Educa',
    'edu.c5': 'Databases with SQL Server, MySQL and PostgreSQL, Skill - Lima Educa',
    'edu.c6': 'Python for environmental data analysis, FISMATLAB',
    'edu.c7': 'JavaScript and Angular: web systems development, UNMSM',
    'edu.c8': 'Professional Node.js course, CódigoFacilito',
    'edu.c9': 'Prompt engineering, CódigoFacilito',

    'contact.title': 'Shall we build something together?',
    'contact.lead': 'Open to conversations about automation, architecture, security and software projects.',
    'contact.copy': 'Copy',
    'contact.copied': 'Copied',
    'contact.cv': 'Download CV',
    'form.name': 'Name', 'form.email': 'Email', 'form.subject': 'Subject', 'form.message': 'Message',
    'form.errName': 'Please enter your name.',
    'form.errEmail': 'Enter a valid email, for example name@domain.com.',
    'form.errSubject': 'Please add a subject.',
    'form.errMessage': 'Please write your message.',
    'form.send': 'Send message',
    'form.sending': 'Sending...',
    'form.ok': 'Message sent. I will get back to you soon.',
    'form.fail': 'The message could not be sent. Please email me directly.',
    'footer.top': 'Back to top'
  };

  var rotatorWords = {
    es: ['automatizaciones con IA', 'plataformas para la banca', 'agentes de WhatsApp', 'software a medida'],
    en: ['AI automations', 'banking platforms', 'WhatsApp agents', 'custom software']
  };

  var es = {
    'form.sending': 'Enviando...',
    'form.ok': 'Mensaje enviado. Te responderé pronto.',
    'form.fail': 'No se pudo enviar el mensaje. Escríbeme directo al correo.',
    'contact.copied': 'Copiado'
  };
  function collect(attr, getter) {
    document.querySelectorAll('[' + attr + ']').forEach(function (el) {
      var k = el.getAttribute(attr);
      if (!(k in es)) es[k] = getter(el);
    });
  }
  collect('data-i18n', function (el) { return el.textContent; });
  collect('data-i18n-alt', function (el) { return el.getAttribute('alt'); });

  var dict = { es: es, en: en };
  var lang = 'es';
  function t(key) { return (dict[lang] && dict[lang][key]) || es[key] || ''; }

  /* =========================================================
     Partición de texto en palabras/letras para animar
     ========================================================= */
  function splitWords(el, cls) {
    var text = el.textContent.trim().replace(/\s+/g, ' ');
    el.textContent = '';
    text.split(' ').forEach(function (word, i, arr) {
      if (cls === 'sw') {
        var s = document.createElement('span');
        s.className = 'sw';
        s.textContent = word;
        el.appendChild(s);
      } else {
        var w = document.createElement('span');
        w.className = 'w';
        var wi = document.createElement('span');
        wi.className = 'wi';
        wi.textContent = word;
        w.appendChild(wi);
        el.appendChild(w);
      }
      if (i < arr.length - 1) el.appendChild(document.createTextNode(' '));
    });
    el.classList.add('is-split');
  }
  function splitChars(el) {
    var text = el.textContent;
    el.textContent = '';
    Array.prototype.forEach.call(text, function (ch) {
      var c = document.createElement('span');
      c.className = 'c';
      c.textContent = ch;
      el.appendChild(c);
    });
  }

  function applyText() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (!v) return;
      if (el.classList.contains('split-words')) { el.textContent = v; splitWords(el); }
      else if (el.classList.contains('statement')) { el.textContent = v; splitWords(el, 'sw'); }
      else el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-alt'));
      if (v) el.setAttribute('alt', v);
    });
  }

  function setLang(next, initial) {
    lang = next === 'en' ? 'en' : 'es';
    root.lang = lang;
    applyText();
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    rotatorIndex = 0;
    var rw = document.querySelector('.rotator-word');
    if (rw) rw.textContent = rotatorWords[lang][0];
    sizeRotator();
    store('lang', lang);
    if (!initial && animate) {
      // las palabras recién creadas quedan visibles y se recalculan los scroll triggers
      gsap.set('.split-words .wi', { yPercent: 0 });
      setupStatement();
      ScrollTrigger.refresh();
    }
  }

  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });

  /* =========================================================
     Rotador de palabras del hero
     ========================================================= */
  var rotatorIndex = 0;
  var rotator = document.querySelector('.rotator');
  function sizeRotator() {
    if (!rotator) return;
    var w = rotator.querySelector('.rotator-word');
    rotator.style.width = w.offsetWidth + 'px';
  }
  function rotate() {
    var words = rotatorWords[lang];
    rotatorIndex = (rotatorIndex + 1) % words.length;
    var current = rotator.querySelector('.rotator-word');
    var next = document.createElement('span');
    next.className = 'rotator-word';
    next.textContent = words[rotatorIndex];
    if (!animate) { current.textContent = words[rotatorIndex]; sizeRotator(); return; }
    next.style.position = 'absolute';
    next.style.left = '0';
    next.style.top = '0';
    rotator.appendChild(next);
    var width = next.offsetWidth;
    gsap.timeline({
      onComplete: function () { current.remove(); next.style.position = ''; }
    })
      .to(current, { yPercent: -110, duration: .6, ease: 'expo.inOut' }, 0)
      .fromTo(next, { yPercent: 110 }, { yPercent: 0, duration: .6, ease: 'expo.inOut' }, 0)
      .to(rotator, { width: width, duration: .6, ease: 'expo.inOut' }, 0);
  }

  /* =========================================================
     Menú móvil
     ========================================================= */
  var menuBtn = document.getElementById('menu-btn');
  var overlay = document.getElementById('menu-overlay');
  function openMenu() {
    overlay.hidden = false;
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (lenis) lenis.stop();
    if (animate) {
      gsap.fromTo(overlay, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: .7, ease: 'expo.out' });
      gsap.fromTo('.menu-links a', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .7, stagger: .06, ease: 'expo.out', delay: .1 });
    }
  }
  function closeMenu() {
    if (overlay.hidden) return;
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (lenis) lenis.start();
    if (animate) {
      gsap.to(overlay, { clipPath: 'inset(0 0 100% 0)', duration: .5, ease: 'expo.in', onComplete: function () { overlay.hidden = true; } });
    } else overlay.hidden = true;
  }
  menuBtn.addEventListener('click', function () { overlay.hidden ? openMenu() : closeMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  /* =========================================================
     Scroll suave (Lenis) y anclas
     ========================================================= */
  var lenis = null;
  if (animate && typeof window.Lenis !== 'undefined') {
    lenis = new Lenis({ duration: 1.15, easing: function (x) { return Math.min(1, 1.001 - Math.pow(2, -10 * x)); } });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      var target = id === '#inicio' ? document.body : document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      if (lenis) lenis.scrollTo(id === '#inicio' ? 0 : target, { offset: id === '#proyectos' ? 0 : -60, duration: 1.4 });
      else (id === '#inicio' ? window.scrollTo({ top: 0 }) : target.scrollIntoView());
      if (id !== '#inicio' && target.focus) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
    });
  });

  /* =========================================================
     Copiar correo
     ========================================================= */
  var copyBtn = document.getElementById('copy-email');
  copyBtn.addEventListener('click', function () {
    var label = copyBtn.querySelector('[data-i18n]');
    var done = function () {
      copyBtn.classList.add('copied');
      label.textContent = t('contact.copied');
      setTimeout(function () { copyBtn.classList.remove('copied'); label.textContent = t('contact.copy'); }, 1800);
    };
    if (navigator.clipboard) navigator.clipboard.writeText(copyBtn.dataset.email).then(done, function () {});
  });

  /* =========================================================
     Formulario (Netlify Forms)
     ========================================================= */
  var form = document.querySelector('form[name="contacto"]');
  var statusEl = form.querySelector('.form-status');
  var submitBtn = form.querySelector('.btn-submit');
  var submitLabel = submitBtn.querySelector('[data-i18n]');
  function validateField(input) {
    var v = input.value.trim();
    var ok = v !== '' && (input.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
    input.closest('.field').classList.toggle('invalid', !ok);
    input.setAttribute('aria-invalid', String(!ok));
    return ok;
  }
  form.querySelectorAll('[required]').forEach(function (input) {
    input.addEventListener('blur', function () { if (input.value) validateField(input); });
    input.addEventListener('input', function () { if (input.closest('.field').classList.contains('invalid')) validateField(input); });
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    statusEl.textContent = '';
    statusEl.className = 'form-status';
    var invalid = Array.prototype.filter.call(form.querySelectorAll('[required]'), function (f) { return !validateField(f); });
    if (invalid.length) { invalid[0].focus(); return; }
    submitBtn.disabled = true;
    submitLabel.textContent = t('form.sending');
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString()
    }).then(function (res) {
      if (!res.ok) throw new Error(res.status);
      form.reset();
      statusEl.textContent = t('form.ok');
      statusEl.classList.add('ok');
    }).catch(function () {
      statusEl.textContent = t('form.fail');
      statusEl.classList.add('err');
    }).finally(function () {
      submitBtn.disabled = false;
      submitLabel.textContent = t('form.send');
    });
  });

  /* =========================================================
     Texto inicial
     ========================================================= */
  document.querySelectorAll('.hero-name .chars, .wordmark .chars').forEach(splitChars);
  setLang(store('lang') === 'en' ? 'en' : 'es', true);
  if (!animate) {
    setInterval(rotate, 2800);
    document.querySelectorAll('.count').forEach(function (c) { c.textContent = c.dataset.to; });
    return;
  }

  /* =========================================================
     A partir de aquí: animaciones (GSAP)
     ========================================================= */
  gsap.registerPlugin(ScrollTrigger);
  var header = document.querySelector('.site-header');

  // Estados iniciales
  gsap.set('.hero-name .c', { yPercent: 115 });
  gsap.set('.split-words .wi', { yPercent: 110 });

  /* ---------- Loader + entrada del hero ---------- */
  function heroIntro() {
    var tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.to('.hero-name .c', { yPercent: 0, duration: 1.2, stagger: .035 }, 0)
      .to('.photo-card', { clipPath: 'inset(0% 0 0 0 round 28px)', duration: 1.4, ease: 'expo.inOut' }, 0)
      .fromTo('.photo-card img', { scale: 1.35 }, { scale: 1.06, duration: 1.8 }, 0)
      .fromTo('.hero-in', { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 1, stagger: .1 }, .35)
      .fromTo('.float-tag', { opacity: 0, scale: .6, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: .9, stagger: .12, ease: 'back.out(1.8)' }, .8);
    setInterval(rotate, 2800);
  }

  var loader = document.querySelector('.loader');
  var counter = { v: 0 };
  if (lenis) lenis.stop();
  gsap.timeline()
    .to(counter, {
      v: 100, duration: 1.1, ease: 'power2.inOut',
      onUpdate: function () { loader.querySelector('.loader-num').textContent = Math.round(counter.v); }
    }, 0)
    .to('.loader-bar span', { scaleX: 1, duration: 1.1, ease: 'power2.inOut' }, 0)
    .to(loader, { yPercent: -100, duration: .9, ease: 'expo.inOut' }, 1.2)
    .add(function () { heroIntro(); }, 1.45)
    .add(function () { loader.remove(); if (lenis) lenis.start(); });
  // Respaldo: si la animación no corre (pestaña en segundo plano), el sitio igual queda usable
  setTimeout(function () {
    if (!document.body.contains(loader)) return;
    loader.remove();
    gsap.set('.hero-name .c', { yPercent: 0 });
    gsap.set('.photo-card', { clipPath: 'inset(0% 0 0 0 round 28px)' });
    gsap.set('.hero-in, .float-tag', { opacity: 1, y: 0, scale: 1 });
    if (lenis) lenis.start();
  }, 5000);

  /* ---------- Barra de progreso y header ---------- */
  gsap.to('.scroll-progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: .3 } });
  ScrollTrigger.create({
    start: 0, end: 'max',
    onUpdate: function (self) {
      var y = self.scroll();
      header.classList.toggle('scrolled', y > 40);
      header.classList.toggle('hidden', self.direction === 1 && y > 600 && overlay.hidden);
    }
  });

  // Enlace activo del menú
  var navLinks = {};
  document.querySelectorAll('.nav-links a').forEach(function (a) { navLinks[a.getAttribute('href').slice(1)] = a; });
  Object.keys(navLinks).forEach(function (id) {
    var sec = document.getElementById(id);
    if (!sec) return;
    ScrollTrigger.create({
      trigger: sec, start: 'top 50%', end: 'bottom 50%',
      onToggle: function (self) {
        if (self.isActive) {
          Object.keys(navLinks).forEach(function (k) { navLinks[k].classList.remove('active'); });
          navLinks[id].classList.add('active');
        } else navLinks[id].classList.remove('active');
      }
    });
  });

  /* ---------- Hero: spotlight, tilt y parallax ---------- */
  var hero = document.querySelector('.hero');
  var card = document.getElementById('photo-card');
  if (finePointer) {
    var rx = gsap.quickTo(card, 'rotationY', { duration: .8, ease: 'power3.out' });
    var ry = gsap.quickTo(card, 'rotationX', { duration: .8, ease: 'power3.out' });
    var raf = null;
    hero.addEventListener('pointermove', function (e) {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = null;
        var r = hero.getBoundingClientRect();
        hero.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        hero.style.setProperty('--my', (e.clientY - r.top) + 'px');
        var cr = card.getBoundingClientRect();
        var px = (e.clientX - (cr.left + cr.width / 2)) / r.width;
        var py = (e.clientY - (cr.top + cr.height / 2)) / r.height;
        rx(px * 18); ry(-py * 14);
        card.style.setProperty('--px', ((e.clientX - cr.left) / cr.width * 100) + '%');
        card.style.setProperty('--py', ((e.clientY - cr.top) / cr.height * 100) + '%');
      });
    });
    hero.addEventListener('pointerleave', function () { rx(0); ry(0); });
  }
  gsap.to('.hero-name .line:first-child', { xPercent: -8, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.hero-name .line-2', { xPercent: 6, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.hero-visual', { yPercent: 18, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.hero-copy', { opacity: .2, ease: 'none', scrollTrigger: { trigger: hero, start: '40% top', end: 'bottom top', scrub: true } });

  /* ---------- Botones magnéticos ---------- */
  if (finePointer) {
    document.querySelectorAll('.magnetic').forEach(function (el) {
      var mx = gsap.quickTo(el, 'x', { duration: .6, ease: 'elastic.out(1, .4)' });
      var my = gsap.quickTo(el, 'y', { duration: .6, ease: 'elastic.out(1, .4)' });
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        mx((e.clientX - (r.left + r.width / 2)) * .3);
        my((e.clientY - (r.top + r.height / 2)) * .4);
      });
      el.addEventListener('pointerleave', function () { mx(0); my(0); });
    });
  }

  /* ---------- Marquee que reacciona a la velocidad del scroll ---------- */
  var track = document.querySelector('.marquee-track');
  var marqueeTween = gsap.to(track, { xPercent: -50, duration: 28, ease: 'none', repeat: -1 });
  var dir = 1;
  ScrollTrigger.create({
    start: 0, end: 'max',
    onUpdate: function (self) {
      var v = self.getVelocity();
      if (self.direction !== dir) dir = self.direction;
      var boost = gsap.utils.clamp(1, 6, 1 + Math.abs(v) / 400);
      gsap.to(marqueeTween, {
        timeScale: boost * dir, duration: .25, overwrite: true,
        onComplete: function () { gsap.to(marqueeTween, { timeScale: dir, duration: 1.2, ease: 'power2.out', overwrite: true }); }
      });
    }
  });

  /* ---------- Títulos: palabras que suben ---------- */
  document.querySelectorAll('.split-words').forEach(function (el) {
    ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter: function () { gsap.to(el.querySelectorAll('.wi'), { yPercent: 0, duration: 1.1, stagger: .06, ease: 'expo.out' }); }
    });
  });

  /* ---------- Revelado general ---------- */
  ScrollTrigger.batch('.reveal', {
    start: 'top 90%', once: true,
    onEnter: function (batch) { gsap.to(batch, { opacity: 1, y: 0, duration: 1, stagger: .08, ease: 'expo.out', overwrite: true }); }
  });

  /* ---------- Frase de Sobre mí que se ilumina con el scroll ---------- */
  var statementTween = null;
  function setupStatement() {
    if (statementTween) { statementTween.scrollTrigger && statementTween.scrollTrigger.kill(); statementTween.kill(); }
    var words = document.querySelectorAll('.statement .sw');
    statementTween = gsap.to(words, {
      opacity: 1, stagger: .1, ease: 'none',
      scrollTrigger: { trigger: '.statement', start: 'top 80%', end: 'bottom 45%', scrub: .5 }
    });
  }
  setupStatement();

  /* ---------- Contadores ---------- */
  document.querySelectorAll('.count').forEach(function (el) {
    var obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el, start: 'top 90%', once: true,
      onEnter: function () {
        gsap.to(obj, { v: +el.dataset.to, duration: 1.8, ease: 'expo.out', onUpdate: function () { el.textContent = Math.round(obj.v); } });
      }
    });
  });

  /* ---------- Experiencia: riel y año fijo ---------- */
  var mm = gsap.matchMedia();
  mm.add('(min-width: 901px)', function () {
    gsap.to('.xp-rail-fill', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.xp-list', start: 'top 60%', end: 'bottom 60%', scrub: true } });
    var yearEl = document.getElementById('xp-year');
    var coEl = document.getElementById('xp-co');
    document.querySelectorAll('.xp-card').forEach(function (c) {
      ScrollTrigger.create({
        trigger: c, start: 'top 55%', end: 'bottom 55%',
        onToggle: function (self) {
          if (!self.isActive) return;
          if (yearEl.textContent === c.dataset.year && coEl.textContent === c.dataset.co) return;
          gsap.timeline()
            .to([yearEl, coEl], { yPercent: -40, opacity: 0, duration: .25, ease: 'power2.in', stagger: .04 })
            .add(function () { yearEl.textContent = c.dataset.year; coEl.textContent = c.dataset.co; })
            .fromTo([yearEl, coEl], { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .5, ease: 'expo.out', stagger: .05 });
        }
      });
    });
  });
  gsap.utils.toArray('.xp-card').forEach(function (c) {
    gsap.from(c, { y: 80, opacity: 0, rotate: 1.5, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: c, start: 'top 88%', once: true } });
  });

  /* ---------- Proyectos: pan horizontal fijado ---------- */
  mm.add('(min-width: 1024px)', function () {
    var pin = document.querySelector('.projects-pin');
    var ptrack = document.querySelector('.projects-track');
    var distance = function () { return Math.max(0, ptrack.scrollWidth - window.innerWidth); };
    var pan = gsap.to(ptrack, {
      x: function () { return -distance(); },
      ease: 'none',
      scrollTrigger: {
        trigger: pin, start: 'top top', end: function () { return '+=' + distance(); },
        pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1
      }
    });
    gsap.to('.projects-progress span', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: pin, start: 'top top', end: function () { return '+=' + distance(); }, scrub: true } });
    gsap.utils.toArray('.pcard').forEach(function (p) {
      gsap.from(p, { y: 60, rotate: 3, opacity: .3, ease: 'none', scrollTrigger: { trigger: p, containerAnimation: pan, start: 'left 100%', end: 'left 60%', scrub: true } });
      var img = p.querySelector('.pcard-media img');
      if (img) gsap.fromTo(img, { xPercent: -6 }, { xPercent: 6, ease: 'none', scrollTrigger: { trigger: p, containerAnimation: pan, start: 'left right', end: 'right left', scrub: true } });
    });
  });
  mm.add('(max-width: 1023px)', function () {
    gsap.utils.toArray('.pcard').forEach(function (p) {
      gsap.from(p, { y: 60, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: p, start: 'top 90%', once: true } });
    });
  });

  /* ---------- Bento: luz que sigue al cursor ---------- */
  if (finePointer) {
    document.querySelectorAll('.spot').forEach(function (tile) {
      tile.addEventListener('pointermove', function (e) {
        var r = tile.getBoundingClientRect();
        tile.style.setProperty('--x', (e.clientX - r.left) + 'px');
        tile.style.setProperty('--y', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* ---------- Contacto y footer ---------- */
  gsap.from('.wordmark .c', {
    yPercent: 100, duration: 1.2, stagger: .05, ease: 'expo.out',
    scrollTrigger: { trigger: '.wordmark', start: 'top 95%', once: true }
  });

  ScrollTrigger.sort();
  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { sizeRotator(); ScrollTrigger.refresh(); });
})();
