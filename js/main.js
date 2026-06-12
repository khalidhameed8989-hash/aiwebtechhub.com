// ── Nav: sticky shrink on scroll ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.padding = window.scrollY > 50 ? '10px 40px' : '16px 40px';
});

// ── Mobile nav toggle ──
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ── Contact form (Formspree) ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const status = document.getElementById('form-status');
    const name = document.getElementById('name').value;
    status.textContent = 'Sending…';
    status.style.color = '#00d4ff';

    try {
      const response = await fetch('https://formspree.io/f/xjgdebqq', {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.textContent = '✅ Thanks ' + name + '! We\'ll reply within 24 hours.';
        status.style.color = '#00d4ff';
        contactForm.reset();
      } else {
        const data = await response.json();
        status.textContent = '❌ Error: ' + (data.error || 'Something went wrong. Please WhatsApp us.');
        status.style.color = '#ff5555';
      }
    } catch (err) {
      status.textContent = '❌ Network error. Please WhatsApp us directly.';
      status.style.color = '#ff5555';
    }
  });
}

// ── Scroll reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .blog-card, .contact-item, .service-text').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
