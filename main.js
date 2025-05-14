document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const phone = this.phone.value.trim();
    const message = this.message.value.trim();
    const consent = this.consent.checked;
  
    const services = Array.from(this.querySelectorAll("input[name='services']:checked"))
      .map(input => input.value);
  
    if (!name || !email || !phone || !consent || services.length === 0) {
      alert("Please fill all required fields and select at least one service.");
      return;
    }
  
    // Your WhatsApp number (international format, no + or spaces)
    const whatsappNumber = "353852013264";
  
    const fullMessage = `Nová poptávka z webu:
  *Jméno:* ${name}
  *E-mail:* ${email}
  *Telefon:* ${phone}
  *Služby:* ${services.join(', ')}
  *Zpráva:* ${message || "Žádná zpráva"}`;
  
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
    // ✅ Redirect immediately (auto-open WhatsApp with message)
    // window.location.href = whatsappURL;
    window.open(url, "_blank");

  });
  