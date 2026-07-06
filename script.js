// ===============================
// Smooth Fade-In Animation
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  observer.observe(section);
});

// ===============================
// Highlight Active Navigation
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");

function highlightNav() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
}

window.addEventListener("scroll", highlightNav);
window.addEventListener("load", highlightNav);

// ===============================
// Footer Year
// ===============================

const footer = document.querySelector("footer p");

if (footer) {
  footer.textContent = `© ${new Date().getFullYear()} Blue Sky Café & Restaurant. All Rights Reserved.`;
}