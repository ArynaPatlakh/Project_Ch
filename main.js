window.onload = function () {
  const form = document.getElementById("contact-form");

  const whatsappBtn = document.getElementById("sendWhatsApp");
  const smsBtn = document.getElementById("sendSMS");

  function getFormData() {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();
    const consent = form.consent.checked;

    const services = Array.from(
      form.querySelectorAll("input[name='services']:checked")
    ).map((input) => input.value);

    if (!name || !phone || !consent || services.length === 0) {
      alert("Vyplňte prosím všechna povinná pole a vyberte službu.");
      return null;
    }

    const fullMessage = `Nová poptávka z webu:
Jméno: ${name}
E-mail: ${email || "-"}
Telefon: ${phone}
Služby: ${services.join(", ")}
Zpráva: ${message || "Žádná zpráva"}`;

    return encodeURIComponent(fullMessage);
  }

  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      const message = getFormData();
      if (!message) return;

      const whatsappNumber = "420723093437";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
      window.open(whatsappUrl, "_blank");
    });
  }

  if (smsBtn) {
    smsBtn.addEventListener("click", () => {
      const message = getFormData();
      if (!message) return;

      const smsNumber = "+420723093437";
      const smsUrl = `sms:${smsNumber}?body=${message}`;
      window.location.href = smsUrl;
    });
  }

  // Auto-expand textarea
  document.querySelectorAll(".auto-expand-textarea").forEach((textarea) => {
    textarea.addEventListener("input", () => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    });
  });

  // Anchor highlight
  document.querySelectorAll(".anchor-link").forEach((link) => {
    link.addEventListener("click", function () {
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.classList.remove("highlighted");
        void target.offsetWidth;
        target.classList.add("highlighted");
        setTimeout(() => {
          target.classList.remove("highlighted");
        }, 2000);
      }
    });
  });

  // Burger menu
  const burger = document.getElementById("burger");
  const sidebar = document.getElementById("mobileSidebar");
  const closeSidebar = document.getElementById("closeSidebar");

  if (burger && sidebar && closeSidebar) {
    burger.addEventListener("click", () => {
      sidebar.classList.add("active");
    });

    closeSidebar.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });

    document.querySelectorAll(".mobile-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("active");
      });
    });
  }

  new Accordion(".accordion-container", {
    duration: 300,
    showMultiple: false,
  });
};
