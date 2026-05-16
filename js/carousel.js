/* ==========================================
   carousel.js — Certifications carousel + modal
   ========================================== */

(function () {
  /* ── État ── */
  let currentIndex = 0;
  let modalIndex = 0;
  let autoplayTimer = null;
  const AUTOPLAY_DELAY = 4500;

  /* ── Données des certifications (ordre identique aux slides HTML) ── */
  const certifications = [
    {
      src: "images/coursera4.jpeg",
      alt: "Data Science Fundamentals - Coursera",
      title: "Data Science Fundamentals"
    },
    {
      src: "images/courseraTools.jpeg",
      alt: "Data Science Tools - Coursera",
      title: "Data Science Tools"
    },
    {
      src: "images/courseraML.jpeg",
      alt: "Machine Learning Basics - Coursera",
      title: "Machine Learning Basics"
    },
    {
      src: "images/coursera4.jpeg",
      alt: "Data Science Methodology",
      title: "Data Science Methodology"
    },
    {
      src: "images/cisco.jpeg",
      alt: "Cisco Networking Fundamentals",
      title: "Cisco Networking"
    },
    {
      src: "images/huawei.jpeg",
      alt: "Cloud Computing - Huawei",
      title: "Cloud Computing"
    },
    {
      src: "images/gestion-projet.jpeg",
      alt: "Gestion de projet - Google Coursera",
      title: "Gestion de projet"
    }
  ];

  const total = certifications.length;

  /* ── DOM refs ── */
  const track          = document.getElementById("carouselTrack");
  const indicatorsWrap = document.getElementById("carouselIndicators");
  const currentEl      = document.getElementById("currentSlide");
  const totalEl        = document.getElementById("totalSlides");
  const prevBtn        = document.getElementById("prevBtn");
  const nextBtn        = document.getElementById("nextBtn");

  const modal          = document.getElementById("certModal");
  const modalImg       = document.getElementById("modalImage");
  const modalCurrent   = document.getElementById("modalCurrentSlide");
  const modalTotal     = document.getElementById("modalTotalSlides");
  const modalClose     = document.getElementById("modalClose");
  const modalPrev      = document.getElementById("modalPrev");
  const modalNext      = document.getElementById("modalNext");

  /* ── Init ── */
  function init() {
    if (!track) return;

    // Counters
    if (totalEl) totalEl.textContent = total;
    if (modalTotal) modalTotal.textContent = total;

    // Build indicators
    if (indicatorsWrap) {
      indicatorsWrap.innerHTML = "";
      certifications.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.className = "indicator" + (i === 0 ? " active" : "");
        dot.setAttribute("aria-label", `Slide ${i + 1}`);
        dot.addEventListener("click", () => goToSlide(i));
        indicatorsWrap.appendChild(dot);
      });
    }

    // Carousel navigation
    if (prevBtn) prevBtn.addEventListener("click", () => { changeSlide(-1); resetAutoplay(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { changeSlide(1);  resetAutoplay(); });

    // Modal navigation
    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (modalPrev)  modalPrev.addEventListener("click",  () => changeModalSlide(-1));
    if (modalNext)  modalNext.addEventListener("click",  () => changeModalSlide(1));

    // Close modal on backdrop click
    if (modal) {
      modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
      });
    }

    // Keyboard support
    document.addEventListener("keydown", function (e) {
      if (modal && modal.classList.contains("active")) {
        if (e.key === "ArrowLeft")  changeModalSlide(-1);
        if (e.key === "ArrowRight") changeModalSlide(1);
        if (e.key === "Escape")     closeModal();
      } else {
        if (e.key === "ArrowLeft")  { changeSlide(-1); resetAutoplay(); }
        if (e.key === "ArrowRight") { changeSlide(1);  resetAutoplay(); }
      }
    });

    // Touch/swipe support for carousel
    let touchStartX = 0;
    if (track) {
      track.addEventListener("touchstart", e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
      track.addEventListener("touchend",   e => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 40) { changeSlide(diff > 0 ? 1 : -1); resetAutoplay(); }
      });
    }

    startAutoplay();
    updateUI();
  }

  /* ── Carousel ── */
  function changeSlide(dir) {
    currentIndex = (currentIndex + dir + total) % total;
    updateUI();
  }

  function goToSlide(index) {
    currentIndex = index;
    updateUI();
    resetAutoplay();
  }

  function updateUI() {
    if (track) track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Indicators
    document.querySelectorAll(".indicator").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });

    if (currentEl) currentEl.textContent = currentIndex + 1;
  }

  /* ── Autoplay ── */
  function startAutoplay() {
    autoplayTimer = setInterval(() => changeSlide(1), AUTOPLAY_DELAY);
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
    clearInterval(autoplayTimer); // pause autoplay while modal is open
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("active");
    document.body.style.overflow = "";
    startAutoplay();
  }

  function changeModalSlide(dir) {
    modalIndex = (modalIndex + dir + total) % total;
    updateModal();
  }

  function updateModal() {
    if (!modalImg) return;
    const cert = certifications[modalIndex];
    modalImg.src = cert.src;
    modalImg.alt = cert.alt;
    if (modalCurrent) modalCurrent.textContent = modalIndex + 1;
  }

  /* ── Expose globals needed by inline onclick in HTML ── */
  window.openModal        = openModal;
  window.closeModal       = closeModal;
  window.changeSlide      = changeSlide;
  window.changeModalSlide = changeModalSlide;
  window.goToSlide        = goToSlide;

  /* ── Boot ── */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();