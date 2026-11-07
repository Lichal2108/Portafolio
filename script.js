(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  /* ---------------- Idiomas ----------------
     El HTML trae el texto en español. Al cargar se guarda ese texto como
     diccionario "es" y aquí solo vive la traducción al inglés. */
  var en = {
    'skip': 'Skip to content',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'themeToggle': 'Toggle theme',
    'menu': 'Open menu',

    'hero.eyebrow': 'BBVA Peru · IPA Architecture',
    'hero.sub': 'Architecture Analyst in Intelligent Process Automation. Previously 8 months in Information Security. I automate processes and build software with AI.',
    'hero.cta1': 'See experience',
    'hero.cta2': 'Get in touch',
    'hero.photoAlt': 'Richard Pillaca sitting in front of a blue sign with plants behind',

    'about.title': 'About me',
    'about.p1': 'I study Systems and Computer Engineering at Universidad Nacional Mayor de San Marcos and work at BBVA Peru. I started in Information Security, where I was part of the Exceptions Committee, DLP management and the cyber resilience initiatives.',
    'about.p2': 'Today I am an Architecture Analyst in Intelligent Process Automation (IPA). I support platforms such as DataX, Document Generator and Robotics, and I bring generative AI into the team’s day-to-day work.',
    'about.p3': 'Outside the bank I build custom software: AI agents that answer customers on WhatsApp, AI content pipelines and web apps with React, Next.js and Spring Boot.',
    'about.f1k': 'Now',
    'about.f1v': 'IPA Architecture Analyst, BBVA Peru',
    'about.f2k': 'Before',
    'about.f2v': 'Information Security Intern, BBVA Peru',
    'about.f3k': 'Education',
    'about.f3v': 'Systems and Computer Engineering, UNMSM',
    'about.f4k': 'Languages',
    'about.f4v': 'Native Spanish, advanced English',
    'about.f5k': 'Location',

    'exp.title': 'Experience',
    'exp.current': 'Current role',
    'exp.r1.dates': 'Jul 2026 - present',
    'exp.r1.title': 'Architecture Analyst, Intelligent Process Automation (IPA)',
    'exp.r1.area': 'Engineering · Architecture',
    'exp.r1.p1': 'Drive and track the 2027 strategy to migrate the bank’s data transfer technology, which is reaching obsolescence.',
    'exp.r1.p2': 'Recertification and clean-up of data transfer components: deciding what gets archived and what gets reconfigured (MX engine instead of PER).',
    'exp.r1.p3': 'Automation pilot to mass-migrate document templates from legacy into Document Generator, plus its governance and support.',
    'exp.r1.p4': 'Generative AI automations (Gems, NotebookLM, MCP) for the team and other disciplines.',
    'exp.r1.p5': 'On-call rotation for production incidents and progress reporting to syncs, the leaders’ committee and management.',
    'exp.r1.c4': 'Generative AI',
    'exp.r1.c5': 'BEA Upsilon Psi event',
    'exp.r2.dates': '2025 - 2026 · 8 months',
    'exp.r2.title': 'Information Security Intern',
    'exp.r2.area': 'Information security',
    'exp.r2.p1': 'Member of the security Exceptions Committee: reviewing requests for exceptions to policy and the risk the bank takes on in each case.',
    'exp.r2.p2': 'DLP (Data Loss Prevention) management: following up on policies, alerts and data leakage cases.',
    'exp.r2.p3': 'Contributed to the bank’s cyber resilience initiatives.',
    'exp.r2.c1': 'Exceptions Committee',
    'exp.r2.c3': 'Cyber resilience',
    'exp.r2.c4': 'Risk management',

    'proj.title': 'Projects',
    'proj.lead': 'Work for real clients and personal projects. Private repositories are shown without a link to the code.',
    'proj.site': 'Visit site',
    'proj.private': 'Private repository',
    'proj.more': 'More repositories on GitHub',
    'proj.p1.kicker': 'Client: Tekneka',
    'proj.p1.title': 'WhatsApp sales agent and website',
    'proj.p1.desc': 'AI agent that answers customers on WhatsApp using only the company’s documentation: it cites its sources, escalates what it does not know to the owner and logs every customer by product. Includes the new public website connected to WooCommerce.',
    'proj.p1.alt': 'Tekneka website home page showing its red sharps containers',
    'proj.p2.desc': 'Pipeline that turns an idea into an animated story video for YouTube: script with Claude, consistent characters, per-scene images, narration, subtitles and vertical or horizontal render.',
    'proj.p3.desc': 'Operations management platform: inventory with map, warehouse, spare parts, equipment, staff, kanban-style workflows and photo reports.',
    'proj.p4.desc': 'Traffic monitoring on Lima’s Vía Expresa: detects vehicles and plates with YOLOv8 and PaddleOCR, writes violation reports with Gemini and predicts accident severity.',
    'proj.p5.title': 'Applied machine learning',
    'proj.p5.desc': 'Regression and classification models with a GUI and metric comparison: air pollution, forest fires with 118k records and breast cancer diagnosis.',
    'proj.p5.l1': 'Pollution',
    'proj.p5.l2': 'Forest fires',
    'proj.p5.l3': 'Breast cancer',
    'proj.p6.title': 'Auto repair shop system',
    'proj.p6.desc': 'Angular frontend with financial and operational dashboards, and a Spring Boot microservices backend with JWT authentication.',
    'proj.p6.alt': 'Illustration of an auto repair shop',
    'proj.p7.title': 'IoT smart home',
    'proj.p7.desc': 'ESP32 automation: fire detection, remote room monitoring and real-time data with Firebase.',
    'proj.p7.alt': 'Diagram of a smart home with connected sensors',

    'skills.title': 'Skills',
    'skills.g1': 'Architecture and automation',
    'skills.g1.c5': 'Platform governance',
    'skills.g1.c6': 'Incident management',
    'skills.g2': 'Generative AI',
    'skills.g2.c5': 'RAG agents',
    'skills.g3': 'Information security',
    'skills.g3.c2': 'Exception management',
    'skills.g3.c3': 'Cyber resilience',
    'skills.g3.c4': 'Risk management',
    'skills.g4': 'Development',
    'skills.g5': 'Data and machine learning',
    'skills.g6': 'Tools and ways of working',
    'skills.g6.c5': 'Technical mentoring',
    'skills.g6.c6': 'Internal client support',

    'edu.title': 'Education',
    'edu.e1.t': 'Systems and Computer Engineering',
    'edu.e2.t': 'Advanced English',
    'edu.e3.t': 'Python and Power BI',
    'edu.e3.s': 'Chamber of Foreign Trade',

    'contact.title': 'Let’s talk',
    'contact.lead': 'Open to conversations about automation, architecture, security and software projects.',
    'contact.cv': 'Download CV',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.subject': 'Subject',
    'form.message': 'Message',
    'form.errName': 'Please enter your name.',
    'form.errEmail': 'Enter a valid email, for example name@domain.com.',
    'form.errSubject': 'Please add a subject.',
    'form.errMessage': 'Please write your message.',
    'form.send': 'Send message',
    'form.sending': 'Sending...',
    'form.ok': 'Message sent. I will get back to you soon.',
    'form.fail': 'The message could not be sent. Please email me directly.'
  };

  var esExtra = {
    'form.sending': 'Enviando...',
    'form.ok': 'Mensaje enviado. Te responderé pronto.',
    'form.fail': 'No se pudo enviar el mensaje. Escríbeme directo al correo.'
  };

  var es = {};
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    es[el.getAttribute('data-i18n')] = el.textContent;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
    es[el.getAttribute('data-i18n-alt')] = el.getAttribute('alt');
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    es[el.getAttribute('data-i18n-aria')] = el.getAttribute('aria-label');
  });
  Object.keys(esExtra).forEach(function (k) { es[k] = esExtra[k]; });

  var dict = { es: es, en: en };
  var lang = 'es';

  function t(key) { return (dict[lang] && dict[lang][key]) || es[key] || ''; }

  function setLang(next) {
    lang = next === 'en' ? 'en' : 'es';
    root.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-alt'));
      if (v) el.setAttribute('alt', v);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-aria'));
      if (v) el.setAttribute('aria-label', v);
    });
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    store('lang', lang);
  }

  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });
  var savedLang = store('lang');
  if (savedLang === 'en') setLang('en');

  /* ---------------- Tema ---------------- */
  var themeBtn = document.getElementById('theme-toggle');
  function currentTheme() {
    var explicit = root.getAttribute('data-theme');
    if (explicit) return explicit;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  themeBtn.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    store('theme', next);
  });

  /* ---------------- Menú móvil ---------------- */
  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');
  function closeMenu() {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
  navToggle.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  /* ---------------- Header y enlace activo ---------------- */
  var header = document.querySelector('.site-header');
  var hero = document.getElementById('inicio');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      header.classList.toggle('scrolled', !entries[0].isIntersecting);
    }, { rootMargin: '-80px 0px 0px 0px' }).observe(hero.querySelector('.hero-title'));

    var links = {};
    navLinks.querySelectorAll('a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        Object.keys(links).forEach(function (id) { links[id].classList.remove('active'); });
        var link = links[entry.target.id];
        if (link) link.classList.add('active');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { sectionObserver.observe(s); });

    /* ---------------- Aparición al hacer scroll ---------------- */
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(function (el, i) {
      el.style.transitionDelay = (i % 3) * 60 + 'ms';
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------------- Formulario (Netlify Forms) ---------------- */
  var form = document.querySelector('form[name="contacto"]');
  var statusEl = form.querySelector('.form-status');
  var submitBtn = form.querySelector('.btn-submit');
  var submitLabel = submitBtn.querySelector('[data-i18n]');

  function validateField(input) {
    var ok = input.value.trim() !== '' && (input.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim()));
    input.closest('.field').classList.toggle('invalid', !ok);
    input.setAttribute('aria-invalid', String(!ok));
    return ok;
  }
  form.querySelectorAll('input[required], textarea[required]').forEach(function (input) {
    input.addEventListener('blur', function () { if (input.value) validateField(input); });
    input.addEventListener('input', function () {
      if (input.closest('.field').classList.contains('invalid')) validateField(input);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    statusEl.textContent = '';
    statusEl.className = 'form-status';
    var fields = Array.prototype.slice.call(form.querySelectorAll('input[required], textarea[required]'));
    var invalid = fields.filter(function (f) { return !validateField(f); });
    if (invalid.length) { invalid[0].focus(); return; }

    submitBtn.disabled = true;
    submitLabel.textContent = t('form.sending');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString()
    })
      .then(function (res) {
        if (!res.ok) throw new Error(res.status);
        form.reset();
        statusEl.textContent = t('form.ok');
        statusEl.classList.add('ok');
      })
      .catch(function () {
        statusEl.textContent = t('form.fail');
        statusEl.classList.add('err');
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitLabel.textContent = t('form.send');
      });
  });
})();
