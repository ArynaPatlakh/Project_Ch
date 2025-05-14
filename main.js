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
  
      const services = Array.from(form.querySelectorAll("input[name='services']:checked"))
        .map(input => input.value);
  
      if (!name || !email || !phone || !consent || services.length === 0) {
        alert("Please fill all required fields and select at least one service.");
        return;
      }
  
      const whatsappNumber = "353852013264";
  
      const fullMessage = `Nová poptávka z webu:
  *Jméno:* ${name}
  *E-mail:* ${email}
  *Telefon:* ${phone}
  *Služby:* ${services.join(', ')}
  *Zpráva:* ${message || "Žádná zpráva"}`;
  
      const encoded = encodeURIComponent(fullMessage);
      const url = `https://wa.me/${whatsappNumber}?text=${encoded}`;
  
      window.open(url, "_blank");
    });
  };
  