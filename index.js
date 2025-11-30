// =========================
// Header Scroll Effect
// =========================
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const backToTop = document.querySelector(".back-to-top");
  const scrolled = window.scrollY > 100;

  header?.classList.toggle("scrolled", scrolled);
  backToTop?.classList.toggle("active", scrolled);
});

// =========================
// Mobile Menu
// =========================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger?.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// =========================
// Smooth Scrolling
// =========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(anchor.getAttribute("href"));
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// =========================
// Tab Functionality
// =========================
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    tabBtns.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    this.classList.add("active");
    document.getElementById(this.dataset.tab).classList.add("active");
  });
});

// =========================
// Intersection Observer Animations
// =========================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document
  .querySelectorAll(".pillar, .news-card, .value-item")
  .forEach((el) => observer.observe(el));

// =========================
// Hero Slideshow (JS Controlled)
// =========================
const heroSlides = document.querySelectorAll(".hero-slides .slide");
const heroImages = [
  "WhatsApp%20Image%202025-11-30%20at%2016.58.38_48968cda.jpg",
  "WhatsApp%20Image%202025-11-30%20at%2016.58.39_292e8542.jpg",
  "WhatsApp%20Image%202025-11-30%20at%2016.58.42_b50a06c2.jpg",
  "WhatsApp%20Image%202025-11-30%20at%2016.58.43_474bacb8.jpg"
];


// Assign images and styles
heroSlides.forEach((slide, i) => {
  slide.style.backgroundImage = `url(${heroImages[i]})`;
  slide.style.backgroundSize = "cover";
  slide.style.backgroundPosition = "center";
  slide.style.position = "absolute";
  slide.style.top = 0;
  slide.style.left = 0;
  slide.style.width = "100%";
  slide.style.height = "100%";
  slide.style.opacity = 0;
  slide.style.transition = "opacity 1s ease-in-out";
});

// Slideshow logic
let currentSlide = 0;
function showSlide(index) {
  heroSlides.forEach((slide, i) => {
    slide.style.opacity = i === index ? 1 : 0;
  });
}
showSlide(currentSlide);
setInterval(() => {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  showSlide(currentSlide);
}, 5000);

// =========================
// Scroll Down Button
// =========================
document.querySelector(".scroll-down")?.addEventListener("click", () => {
  window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
});

// =========================
// Typewriter Effect
// =========================
const typewriterElement = document.getElementById("typewriter");
const messages = [
  "Leadership with Vision",
  "Uniting Kikuyu for a Stronger Tomorrow",
  "Champion of Community and Development",
  "Your Voice, Your Future"
];

let msgIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentMessage = messages[msgIndex];
  typewriterElement.textContent = isDeleting
    ? currentMessage.substring(0, charIndex--)
    : currentMessage.substring(0, charIndex++);

  if (!isDeleting && charIndex === currentMessage.length) {
    isDeleting = true;
    setTimeout(typeWriter, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    msgIndex = (msgIndex + 1) % messages.length;
    setTimeout(typeWriter, 500);
  } else {
    setTimeout(typeWriter, isDeleting ? 50 : 100);
  }
}
typeWriter();

// =========================
// Form Submission Handlers
// =========================
["volunteerForm", "contactForm"].forEach((formId) => {
  const form = document.getElementById(formId);
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! We will contact you soon.");
      this.reset();
    });
  }
});
