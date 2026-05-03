/* =========================================================
   TRANSERA — SHARED SCRIPTS
   ========================================================= */

document.addEventListener('DOMContentLoaded', function() {

  // ----- Year -----
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // ----- Scroll progress bar -----
  const progress = document.getElementById('progress');
  function updateProgress() {
    if (!progress) return;
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
    progress.style.width = (scrolled * 100) + '%';
  }
  window.addEventListener('scroll', updateProgress);
  updateProgress();

  // ----- Header scroll state -----
  const header = document.getElementById('header');
  function updateHeader() {
    if (!header) return;
    if (window.scrollY > 8) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', updateHeader);
  updateHeader();

  // ----- Smooth scroll with sticky-header offset -----
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
        }
      }
    });
  });

  // ----- Reveal on scroll -----
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => observer.observe(el));

  // ----- Number counters -----
  const counters = document.querySelectorAll('.counter');
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 1600;
        const start = performance.now();
        function animate(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target).toLocaleString();
          if (progress < 1) requestAnimationFrame(animate);
          else el.textContent = target.toLocaleString();
        }
        requestAnimationFrame(animate);
        counterObs.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(c => counterObs.observe(c));

  // ----- Back to top -----
  const toTop = document.getElementById('toTop');
  if (toTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) toTop.classList.add('show');
      else toTop.classList.remove('show');
    });
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ----- Mobile menu toggle (visual only — full menu can be added later) -----
  const mobileToggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav-main');
  
  if (mobileToggle && nav) {
  
    function closeMenu() {
      nav.classList.remove('open');
      document.body.classList.remove('menu-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  
    function openMenu() {
      nav.classList.add('open');
      document.body.classList.add('menu-open');
      mobileToggle.setAttribute('aria-expanded', 'true');
    }
  
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
  
      const isOpen = nav.classList.contains('open');
  
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  
    // close when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMenu();
      }
    });
  
    // close when clicking a link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

});
