// Navigation Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
      // Close mobile menu if open
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
      }
    }
  });
});
