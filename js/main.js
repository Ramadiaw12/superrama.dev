/* ==========================================
   main.js — Navigation, scroll & misc
   ========================================== */

(function () {
  /* ── Burger menu ── */
  const burgerBtn = document.getElementById('burgerBtn');
  const navMenu   = document.getElementById('navMenu');

  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      burgerBtn.classList.toggle('open', isOpen);
      burgerBtn.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Fermer au clic sur un lien
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        burgerBtn.classList.remove('open');
        burgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Fermer avec Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        burgerBtn.classList.remove('open');
        burgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
  /* ── Active nav link on scroll ── */
  const sections    = document.querySelectorAll("section[id]");
  const navLinks    = document.querySelectorAll(".navbar ul li a");

  function updateActiveLink() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const top    = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      const id     = section.getAttribute("id");

      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(link => {
          link.parentElement.classList.remove("active");
          if (link.getAttribute("href") === "#" + id) {
            link.parentElement.classList.add("active");
          }
        });
      }
    });
  }

  /* ── Navbar shrink on scroll ── */
  const navbar = document.querySelector(".navbar");

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 60) {
      navbar.style.padding = "14px 9%";
      navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
    } else {
      navbar.style.padding = "22px 9%";
      navbar.style.boxShadow = "none";
    }
  }

  /* ── Scroll reveal ── */
  function initReveal() {
    const elements = document.querySelectorAll(
      ".education-item, .skill-card, .rounded-lg, .soft-skill-mini, .contact-card, .certification-slide"
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = `opacity .55s ease ${(i % 6) * 0.07}s, transform .55s ease ${(i % 6) * 0.07}s`;
      observer.observe(el);
    });
  }

  /* ── Smooth scroll for all anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  /* ── Typed animation fallback (if CSS only not working) ── */

  /* ── Event listeners ── */
  window.addEventListener("scroll", () => {
    updateActiveLink();
    handleNavbarScroll();
  });

  /* ── Boot ── */
  document.addEventListener("DOMContentLoaded", () => {
    updateActiveLink();
    handleNavbarScroll();
    initReveal();
  });

  /* ── Typewriter effect ── */
  function initTypewriter() {
    const el = document.getElementById("typewriter");
    if (!el) return;
 
    const texts = [
      "AI Infrastructure Engineer"
    ];
 
    let textIndex  = 0;
    let charIndex  = 0;
    let isDeleting = false;
    const typeSpeed   = 80;   // ms par caractère en écriture
    const deleteSpeed = 40;   // ms par caractère en effacement
    const pauseAfter  = 2000; // pause après écriture complète
    const pauseBefore = 400;  // pause avant réécriture
 
    function type() {
      const current = texts[textIndex];
 
      if (!isDeleting) {
        // Écriture
        charIndex++;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          // Texte complet → pause puis effacement
          isDeleting = true;
          setTimeout(type, pauseAfter);
          return;
        }
        setTimeout(type, typeSpeed);
      } else {
        // Effacement
        charIndex--;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          // Vide → passer au suivant
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(type, pauseBefore);
          return;
        }
        setTimeout(type, deleteSpeed);
      }
    }
 
    type();
  }
 
  /* ── Boot ── */
  document.addEventListener("DOMContentLoaded", () => {
    updateActiveLink();
    handleNavbarScroll();
    initReveal();
    initTypewriter();
  });
})();