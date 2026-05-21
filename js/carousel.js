/* ==========================================
   carousel.js — Infinite loop carousel + modal
   ========================================== */

(function () {
  const AUTOPLAY_DELAY = 4500;

  const certifications = [
    { src: "images/coursera4.jpeg",    alt: "Data Science Fundamentals", title: "Data Science Fundamentals" },
    { src: "images/courseraTools.jpeg",alt: "Data Science Tools",         title: "Data Science Tools" },
    { src: "images/courseraML.jpeg",   alt: "Machine Learning Basics",    title: "Machine Learning Basics" },
    { src: "images/coursera4.jpeg",    alt: "Data Science Methodology",   title: "Data Science Methodology" },
    { src: "images/cisco.jpeg",        alt: "Cisco Networking",           title: "Cisco Networking" },
    { src: "images/huawei.jpeg",       alt: "Cloud Computing - Huawei",   title: "Cloud Computing" },
    { src: "images/gestion-projet.jpeg",alt:"Gestion de projet",          title: "Gestion de projet" }
  ];

  const total = certifications.length;
  let currentIndex = 0; // index réel (0 à total-1)
  let isTransitioning = false;
  let autoplayTimer = null;
  let modalIndex = 0;

  /* ── DOM ── */
  const track        = document.getElementById("carouselTrack");
  const indicatorsWrap = document.getElementById("carouselIndicators");
  const currentEl    = document.getElementById("currentSlide");
  const totalEl      = document.getElementById("totalSlides");
  const prevBtn      = document.getElementById("prevBtn");
  const nextBtn      = document.getElementById("nextBtn");
  const modal        = document.getElementById("certModal");
  const modalImg     = document.getElementById("modalImage");
  const modalCurrent = document.getElementById("modalCurrentSlide");
  const modalTotal   = document.getElementById("modalTotalSlides");
  const modalClose   = document.getElementById("modalClose");
  const modalPrev    = document.getElementById("modalPrev");
  const modalNext    = document.getElementById("modalNext");

  /* ── Init ── */
  function init() {
    if (!track) return;

    if (totalEl) totalEl.textContent = total;
    if (modalTotal) modalTotal.textContent = total;

    /* Cloner premier et dernier slide pour la boucle infinie */
    const slides = track.querySelectorAll(".certification-slide");
    const firstClone = slides[0].cloneNode(true);
    const lastClone  = slides[slides.length - 1].cloneNode(true);
    firstClone.setAttribute("aria-hidden", "true");
    lastClone.setAttribute("aria-hidden",  "true");
    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);

    /* Positionner sur le premier vrai slide (index 1 avec le clone) */
    track.style.transition = "none";
    track.style.transform  = `translateX(-${1 * 100}%)`;

    /* Indicateurs */
    if (indicatorsWrap) {
      indicatorsWrap.innerHTML = "";
      for (let i = 0; i < total; i++) {
        const dot = document.createElement("div");
        dot.className = "indicator" + (i === 0 ? " active" : "");
        dot.addEventListener("click", () => { goToSlide(i); resetAutoplay(); });
        indicatorsWrap.appendChild(dot);
      }
    }

    /* Navigation */
    if (prevBtn) prevBtn.addEventListener("click", () => { prev(); resetAutoplay(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { next(); resetAutoplay(); });

    /* Modal */
    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (modalPrev)  modalPrev.addEventListener("click", () => changeModalSlide(-1));
    if (modalNext)  modalNext.addEventListener("click", () => changeModalSlide(1));
    if (modal) modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });

    /* Clavier */
    document.addEventListener("keydown", e => {
      if (modal && modal.classList.contains("active")) {
        if (e.key === "ArrowLeft")  changeModalSlide(-1);
        if (e.key === "ArrowRight") changeModalSlide(1);
        if (e.key === "Escape")     closeModal();
      } else {
        if (e.key === "ArrowLeft")  { prev(); resetAutoplay(); }
        if (e.key === "ArrowRight") { next(); resetAutoplay(); }
      }
    });

    /* Swipe tactile */
    let touchStartX = 0;
    track.addEventListener("touchstart", e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    track.addEventListener("touchend", e => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); resetAutoplay(); }
    });

    /* Fin de transition — gestion boucle infinie */
    track.addEventListener("transitionend", () => {
      const allSlides = track.querySelectorAll(".certification-slide");
      const trackIndex = currentIndex + 1; // +1 car clone au début

      /* Si on est sur le clone du dernier → sauter au vrai premier */
      if (trackIndex >= allSlides.length - 1) {
        track.style.transition = "none";
        track.style.transform  = `translateX(-${1 * 100}%)`;
        currentIndex = 0;
      }
      /* Si on est sur le clone du premier → sauter au vrai dernier */
      else if (trackIndex <= 0) {
        track.style.transition = "none";
        track.style.transform  = `translateX(-${total * 100}%)`;
        currentIndex = total - 1;
      }

      isTransitioning = false;
      updateIndicators();
      updateCounter();
    });

    startAutoplay();
    updateIndicators();
    updateCounter();
  }

  /* ── Navigation ── */
  function slideTo(trackIndex) {
    if (isTransitioning) return;
    isTransitioning = true;
    track.style.transition = "transform .5s cubic-bezier(.4,0,.2,1)";
    track.style.transform  = `translateX(-${trackIndex * 100}%)`;
  }

  function next() {
    currentIndex++;
    if (currentIndex > total - 1) currentIndex = total; // va au clone du premier
    slideTo(currentIndex + 1);
    updateIndicators();
    updateCounter();
  }

  function prev() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = -1; // va au clone du dernier
    slideTo(currentIndex + 1);
    updateIndicators();
    updateCounter();
  }

  function goToSlide(index) {
    if (isTransitioning) return;
    currentIndex = index;
    slideTo(currentIndex + 1);
    updateIndicators();
    updateCounter();
  }

  /* ── UI ── */
  function updateIndicators() {
    const realIndex = ((currentIndex % total) + total) % total;
    document.querySelectorAll(".indicator").forEach((dot, i) => {
      dot.classList.toggle("active", i === realIndex);
    });
  }

  function updateCounter() {
    const realIndex = ((currentIndex % total) + total) % total;
    if (currentEl) currentEl.textContent = realIndex + 1;
  }

  /* ── Autoplay ── */
  function startAutoplay() {
    autoplayTimer = setInterval(next, AUTOPLAY_DELAY);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  /* ── Modal ── */
  function openModal(index) {
    if (!modal || !modalImg) return;
    modalIndex = index;
    updateModal();
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    clearInterval(autoplayTimer);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("active");
    document.body.style.overflow = "";
    startAutoplay();
  }

  function changeModalSlide(dir) {
    modalIndex = ((modalIndex + dir) % total + total) % total;
    updateModal();
  }

  function updateModal() {
    if (!modalImg) return;
    const cert = certifications[modalIndex];
    modalImg.src = cert.src;
    modalImg.alt = cert.alt;
    if (modalCurrent) modalCurrent.textContent = modalIndex + 1;
  }

  /* ── Globals ── */
  window.openModal        = openModal;
  window.closeModal       = closeModal;
  window.changeModalSlide = changeModalSlide;

  /* ── Boot ── */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();