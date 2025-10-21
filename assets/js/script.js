const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full");
  hamburgerIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");

  document.body.classList.add("overflow-hidden");
});

closeIcon.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
  closeIcon.classList.add("hidden");
  hamburgerIcon.classList.remove("hidden");

  document.body.classList.remove("overflow-hidden");
});

// header animation on scroll
const header = document.querySelector("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down → hide header
    header.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up → show header
    header.style.transform = "translateY(0)";
  }
  lastScrollY = window.scrollY;
});

// go to top button
window.addEventListener("scroll", () => {
  // Show after scrolling 200vh
  if (window.scrollY > window.innerHeight * 2) {
    goTopBtn.classList.remove("hidden");
    goTopBtn.classList.add("block");
  } else {
    goTopBtn.classList.remove("block");
    goTopBtn.classList.add("hidden");
  }
});
