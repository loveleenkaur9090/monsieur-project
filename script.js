// === Initialize EmailJS ===
(function() {
  emailjs.init("ubpGScI_G6E9spX0G"); // ← replace with your EmailJS public key
})();

// === Contact Form Submission ===
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_j0d0nzs", "template_gw602j9", this)
    .then(() => {
      document.getElementById("response").innerText = "✅ Message sent successfully!";
      this.reset();
    }, (error) => {
      document.getElementById("response").innerText = "❌ Error sending message. Please try again.";
      console.error("Error:", error);
    });
});

// === Smooth Scroll for Navigation Links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// === Auto Year Update in Footer ===
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.querySelector(".year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// === Floating WhatsApp Button ===
const whatsappNumber = "32460202020"; // ← you can replace this with your WhatsApp number
const whatsappButton = document.createElement("a");
whatsappButton.href = `https://wa.me/${whatsappNumber}?text=Bonjour%20Monsieur%20Sila!%20Je%20souhaite%20une%20consultation.`;
whatsappButton.target = "_blank";
whatsappButton.innerHTML = "💬";
whatsappButton.style.position = "fixed";
whatsappButton.style.bottom = "20px";
whatsappButton.style.right = "20px";
whatsappButton.style.background = "#25d366";
whatsappButton.style.color = "#fff";
whatsappButton.style.fontSize = "28px";
whatsappButton.style.textAlign = "center";
whatsappButton.style.lineHeight = "55px";
whatsappButton.style.width = "55px";
whatsappButton.style.height = "55px";
whatsappButton.style.borderRadius = "50%";
whatsappButton.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
whatsappButton.style.zIndex = "999";
whatsappButton.style.textDecoration = "none";
document.body.appendChild(whatsappButton);
