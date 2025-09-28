const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full");
  hamburgerIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
  closeIcon.classList.add("hidden");
  hamburgerIcon.classList.remove("hidden");
});
