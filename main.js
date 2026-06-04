/* ============================================================================
   INTELLECT TECHCON SOLUTIONS - MAIN JAVASCRIPT
   Navigation, forms, accordion, scroll animations
   ============================================================================ */

document.addEventListener('DOMContentLoaded', function () {
  initNavbar();
  initHamburger();
  initScrollReveal();
  initAccordion();
  initFormHandling();
  initInvertedCursor();
});

/* ============================================================================
   NAVBAR - Scroll detection and styling
   ============================================================================ */

function initNavbar() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

/* ============================================================================
   HAMBURGER MENU - Mobile navigation toggle
   ============================================================================ */

function initHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.navbar')) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
  });
}

/* ============================================================================
   SCROLL REVEAL - Fade-in animation using Intersection Observer
   ============================================================================ */

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.fade-up');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(element => observer.observe(element));
}

/* ============================================================================
   ACCORDION - FAQ toggle functionality
   ============================================================================ */

function initAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');

    if (trigger) {
      trigger.addEventListener('click', function () {
        // Close all other items
        accordionItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
          }
        });

        // Toggle current item
        item.classList.toggle('active');
      });
    }
  });
}

/* ============================================================================
   FORM HANDLING - Prevent default submission (no backend)
   ============================================================================ */

function initFormHandling() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Simple validation
      const inputs = form.querySelectorAll('[required]');
      let isValid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.borderColor = '#ea6624';
          isValid = false;
        } else {
          input.style.borderColor = '';
        }
      });

      if (isValid) {
        // Show success message
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Message Received! ✓';
        submitBtn.style.backgroundColor = '#325baa';

        setTimeout(() => {
          form.reset();
          submitBtn.textContent = originalText;
          submitBtn.style.backgroundColor = '';
        }, 3000);
      }
    });
  });
}

/* ============================================================================
   SMOOTH SCROLL - For anchor links (native browser support)
   ============================================================================ */

// Smooth scroll is handled by CSS: html { scroll-behavior: smooth; }

/* ============================================================================
   INVERTED CURSOR - circular cursor that inverts underlying colour
   ============================================================================ */

function initInvertedCursor() {
  // Do not initialize on touch or reduced-motion preferences
  if (window.matchMedia('(hover: none)').matches || ('ontouchstart' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'invert-cursor';
  document.body.appendChild(cursor);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let posX = mouseX;
  let posY = mouseY;
  const lerp = (a, b, n) => (1 - n) * a + n * b;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.opacity = '1';
  });

  function render() {
    posX = lerp(posX, mouseX, 0.18);
    posY = lerp(posY, mouseY, 0.18);
    cursor.style.transform = `translate(${posX}px, ${posY}px) translate(-50%, -50%)`;
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  const hoverSelector = 'a, button, .btn, input, textarea, select, .hamburger, .nav-cta, .nav-links a, .link-text';
  document.querySelectorAll(hoverSelector).forEach(el => {
    el.addEventListener('pointerenter', () => cursor.classList.add('hover'));
    el.addEventListener('pointerleave', () => cursor.classList.remove('hover'));
  });

  document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
  document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
}

