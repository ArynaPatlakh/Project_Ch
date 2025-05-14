window.onload = function () {
  const form = document.getElementById("contact-form");

  if (!form) {
    console.error("Form not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();
    const consent = form.consent.checked;

    const services = Array.from(
      form.querySelectorAll("input[name='services']:checked")
    ).map((input) => input.value);

    if (!name || !email || !phone || !consent || services.length === 0) {
      alert("Please fill all required fields and select at least one service.");
      return;
    }

    const whatsappNumber = "420723093437";

    const fullMessage = `Nová poptávka z webu:
  *Jméno:* ${name}
  *E-mail:* ${email}
  *Telefon:* ${phone}
  *Služby:* ${services.join(", ")}
  *Zpráva:* ${message || "Žádná zpráva"}`;

    const encoded = encodeURIComponent(fullMessage);
    const url = `https://wa.me/420723093437?text=${encoded}`;

    window.open(url, "_blank");
  });
};

document.querySelectorAll(".auto-expand-textarea").forEach((textarea) => {
  textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  });
});

window.onload = function () {
  document.querySelectorAll(".anchor-link").forEach((link) => {
    link.addEventListener("click", function (e) {
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
};

window.onload = function () {
  // Anchor highlight
  document.querySelectorAll(".anchor-link").forEach((link) => {
    link.addEventListener("click", function (e) {
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

  // Burger menu toggle
  const burger = document.getElementById("burger");
  const sidebar = document.getElementById("mobileSidebar");
  const closeSidebar = document.getElementById("closeSidebar");

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
};
