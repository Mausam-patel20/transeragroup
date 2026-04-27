/**
 * Transera Group — script.js
 * Handles: nav toggle, scroll effects, contact form, scroll reveal
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── Nav scroll effect ───────────────────────────── */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ─── Mobile nav toggle ────────────────────────────── */
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => toggle.classList.toggle('open') || links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggle.classList.remove('open') || links.classList.remove('open')));
  }

  /* ─── Scroll reveal (IntersectionObserver) ────────── */
  const reveals = document.querySelectorAll('.about, .capabilities, .memberships, .contact, .cap-card');
  reveals.forEach(el => el.classList.add('reveal'));
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => e.isIntersecting && (e.target.classList.add('visible'), obs.unobserve(e.target)));
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
  reveals.forEach(el => obs.observe(el));

  /* ─── Contact form ─────────────────────────────────── */
  const form     = document.getElementById('contactForm');
  const statusEl = document.getElementById('formStatus');
  const submitBtn = document.getElementById('formSubmit');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      submitBtn.disabled = true;
      submitBtn.querySelector('span').textContent = 'Sending…';
      statusEl.textContent = '';
      statusEl.className   = 'form-status';

      try {
        const name    = form.name.value.trim();
        const email   = form.email.value.trim();
        const message = form.message.value.trim();
        const subject = encodeURIComponent(`Transera Contact: ${name}`);
        const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:info@transeragroup.com?subject=${subject}&body=${body}`;
        statusEl.textContent = 'Message opened in your email app. Send the email to complete your inquiry.';
        statusEl.className   = 'form-status success';
        form.reset();
      } catch {
        statusEl.textContent = 'Something went wrong. Try again or email info@transeragroup.com directly.';
        statusEl.className  = 'form-status error';
      } finally {
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = 'Send Message';
      }
    });
  }

});
