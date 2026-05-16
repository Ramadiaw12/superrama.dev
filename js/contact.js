/* ==========================================
   contact.js — Form validation + EmailJS
   ==========================================
   Remplace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID et YOUR_PUBLIC_KEY
   par tes identifiants sur https://dashboard.emailjs.com
   ========================================== */

(function () {
  /* ── Config EmailJS ── */
  const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // ex : service_xxxx
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // ex : template_xxxx
  const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // ex : aBcDeFgHiJkLmNop

  /* ── Init EmailJS ── */
  if (typeof emailjs !== "undefined") {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  /* ── DOM refs ── */
  const form       = document.getElementById("contact-form");
  const submitBtn  = document.getElementById("submit-btn");
  const btnText    = submitBtn ? submitBtn.querySelector(".btn-text") : null;
  const btnLoader  = submitBtn ? submitBtn.querySelector(".btn-loader") : null;
  const alertBox   = document.getElementById("form-alert");

  /* ── Validation helpers ── */
  const validators = {
    name    : v => v.trim().length >= 2               || "Le nom doit comporter au moins 2 caractères.",
    email   : v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Veuillez entrer un email valide.",
    subject : v => v.trim().length >= 3               || "Le sujet doit comporter au moins 3 caractères.",
    message : v => v.trim().length >= 10              || "Le message doit comporter au moins 10 caractères.",
    consent : (_, el) => el.checked                   || "Vous devez accepter les conditions."
  };

  function showError(id, msg) {
    const span = document.getElementById(id + "-error");
    const input = document.getElementById(id);
    if (span) { span.textContent = msg; span.classList.add("show"); }
    if (input) input.classList.add("error");
  }

  function clearError(id) {
    const span  = document.getElementById(id + "-error");
    const input = document.getElementById(id);
    if (span)  { span.textContent = ""; span.classList.remove("show"); }
    if (input) { input.classList.remove("error"); input.classList.remove("success"); }
  }

  function markSuccess(id) {
    const input = document.getElementById(id);
    if (input) { input.classList.remove("error"); input.classList.add("success"); }
  }

  function validateAll() {
    const fields = ["name", "email", "subject", "message", "consent"];
    let valid = true;
    fields.forEach(id => {
      clearError(id);
      const el = document.getElementById(id);
      if (!el) return;
      const result = validators[id](el.value, el);
      if (result !== true) {
        showError(id, result);
        valid = false;
      } else {
        markSuccess(id);
      }
    });
    return valid;
  }

  /* ── Real-time validation ── */
  ["name", "email", "subject", "message"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("blur", () => {
      clearError(id);
      const result = validators[id](el.value, el);
      if (result !== true) showError(id, result);
      else markSuccess(id);
    });
  });

  /* ── Show alert ── */
  function showAlert(type, msg) {
    if (!alertBox) return;
    alertBox.className = `alert ${type}`;
    alertBox.textContent = msg;
    alertBox.style.display = "block";
    if (type !== "error") {
      setTimeout(() => { alertBox.style.display = "none"; }, 6000);
    }
  }

  /* ── Loading state ── */
  function setLoading(loading) {
    if (!submitBtn) return;
    submitBtn.disabled = loading;
    if (btnText)   btnText.style.display   = loading ? "none"         : "inline-block";
    if (btnLoader) btnLoader.style.display = loading ? "inline-block" : "none";
  }

  /* ── Submit ── */
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      if (!validateAll()) return;

      setLoading(true);
      showAlert("info", "Envoi en cours…");

      try {
        if (typeof emailjs !== "undefined" && EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID") {
          await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
          showAlert("success", "✅ Message envoyé avec succès ! Je vous répondrai sous 24 h.");
          form.reset();
          document.querySelectorAll(".interior.success").forEach(el => el.classList.remove("success"));
        } else {
          /* Mode démo sans EmailJS configuré */
          await new Promise(res => setTimeout(res, 1400));
          showAlert("success", "✅ (Mode démo) Message simulé. Configurez EmailJS pour un vrai envoi.");
          form.reset();
        }
      } catch (err) {
        console.error("EmailJS error:", err);
        showAlert("error", "❌ Erreur lors de l'envoi. Réessayez ou contactez-moi directement par email.");
      } finally {
        setLoading(false);
      }
    });
  }
})();