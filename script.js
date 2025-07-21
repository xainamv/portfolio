// Improved scroll functionality
function scrollToSection(targetId) {
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Add click event listeners to dock items
document.addEventListener("DOMContentLoaded", function () {
  function updateGreeting() {
    const hour = new Date().getHours();
    let text = "Hello!";
    if (hour < 12) text = "Good morning ☕";
    else if (hour < 18) text = "Good afternoon ☀️";
    else text = "Good evening 🌙";
    const greetEl = document.getElementById("greeting");
    if (greetEl) greetEl.textContent = `${text} We're Intelli-boys.`;
  }
  updateGreeting();

  const dockItems = document.querySelectorAll(".dock-item");
  dockItems.forEach((item) => {
    item.addEventListener("click", function () {
      const target = this.getAttribute("data-target");
      scrollToSection(target);
    });
  });
});

// Form submission handler
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const btn = e.target.querySelector("button");
    btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
      setTimeout(() => {
        btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        btn.disabled = false;
        e.target.reset();
      }, 2000);
    }, 1500);
  });

// Enhanced dock hover effect
const dock = document.querySelector(".dock");
dock.addEventListener("mousemove", function (e) {
  const items = this.querySelectorAll(".dock-item");
  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const distance = Math.sqrt(x * x + y * y);
    const scale = Math.max(1, 1.5 - distance / 100);
    item.style.transform = `scale(${scale}) translateY(${-distance / 10}px)`;
  });
});

dock.addEventListener("mouseleave", function () {
  this.querySelectorAll(".dock-item").forEach((item) => {
    item.style.transform = "scale(1) translateY(0)";
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
document.querySelectorAll(".particle").forEach((p) => {
  p.style.width = p.style.height = `${Math.random() * 3 + 1}px`;
  p.style.animationDuration = `${Math.random() * 10 + 10}s`;
});
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});
