// 1. Automatically show the current year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// 2. Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close the menu after clicking a navigation link
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// 3. Light and dark theme toggle
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");
    themeToggle.textContent = isLight ? "🌙" : "☀️";
    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark theme" : "Switch to light theme"
    );
  });
}

// 4. Typing animation in the home section
const typingText = document.getElementById("typingText");

if (typingText) {
  const words = [
    "Developer",
    "Problem Solver",
    "CSE Student",
    "Future Engineer"
  ];

  let wordIndex = 0;
  let characterIndex = 0;
  let deleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
      characterIndex--;
    } else {
      characterIndex++;
    }

    typingText.textContent = currentWord.slice(0, characterIndex);

    let delay = deleting ? 55 : 100;

    if (!deleting && characterIndex === currentWord.length) {
      deleting = true;
      delay = 1200;
    } else if (deleting && characterIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 350;
    }

    window.setTimeout(typeEffect, delay);
  }

  typeEffect();
}

// 5. Add a subtle reveal animation to sections
const sections = document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
  });
}
