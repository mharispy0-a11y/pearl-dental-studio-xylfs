/* Website Generator v3 — Pearl Dental Studio | AI Software House OS */
document.addEventListener('DOMContentLoaded', function () {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(el => { if (el.isIntersecting) el.target.classList.add('visible'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (nav && window.scrollY > 50) {
      nav.style.background = 'rgba(15,23,42,.98)';
      nav.style.boxShadow  = '0 4px 20px rgba(0,0,0,.3)';
    } else if (nav) {
      nav.style.background = 'rgba(15,23,42,.95)';
      nav.style.boxShadow  = 'none';
    }
  });

  const ham   = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');
  if (ham && links) {
    ham.addEventListener('click', () => {
      const open = links.style.display === 'flex';
      links.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:rgba(15,23,42,.98);padding:1rem 1.5rem;gap:1rem;z-index:999';
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const t = document.querySelector(this.getAttribute('href'));
      if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); }
    });
  });
});