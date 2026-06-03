/* ═══════════════════ NAVBAR SCROLL ═══════════════════ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ═══════════════════ MOBILE MENU ═══════════════════ */
const hamburger     = document.getElementById('hamburger');
const mobileMenu    = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-overlay');
const mobileClose   = document.getElementById('mobile-close');

function openMenu() {
  mobileMenu.classList.add('active');
  mobileOverlay.classList.add('active');
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.remove('active');
  mobileOverlay.classList.remove('active');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);
mobileOverlay.addEventListener('click', closeMenu);
document.querySelectorAll('.mobile-link, .mobile-donate').forEach(el =>
  el.addEventListener('click', closeMenu)
);

/* ═══════════════════ HERO PARALLAX ═══════════════════ */
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroBg.style.transform = `scale(1.06) translateY(${y * 0.25}px)`;
    }
  }, { passive: true });
}

/* ═══════════════════ FADE-IN ON SCROLL ═══════════════════ */
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    // Find stagger index among siblings in the same container
    const siblings = Array.from(entry.target.parentElement.querySelectorAll('.fade-in'));
    const idx = siblings.indexOf(entry.target);
    setTimeout(() => entry.target.classList.add('visible'), idx * 90);
    fadeObserver.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

/* ═══════════════════ COUNTER ANIMATION ═══════════════════ */
function runCounter(el) {
  const target   = parseInt(el.dataset.count, 10);
  const duration = 1800;
  const fps      = 60;
  const steps    = duration / (1000 / fps);
  const inc      = target / steps;
  let current    = 0;

  const tick = () => {
    current += inc;
    if (current >= target) {
      el.textContent = target.toLocaleString('fr-FR');
    } else {
      el.textContent = Math.floor(current).toLocaleString('fr-FR');
      requestAnimationFrame(tick);
    }
  };
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      runCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

/* ═══════════════════ ACTIVE NAV LINK ═══════════════════ */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* ═══════════════════ KEYBOARD: doc-card ENTER ═══════════════════ */
document.querySelectorAll('.doc-card').forEach(card => {
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});

/* ═══════════════════ FORM RESET ON LOAD ═══════════════════ */
window.addEventListener('load', () => {
  document.querySelector('.contact-form')?.reset();
});
