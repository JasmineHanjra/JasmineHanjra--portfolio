// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.querySelector(".navbar");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

// Close mobile menu when clicking a nav link
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navToggle?.classList.remove("active");
        navMenu?.classList.remove("active");
    });
});

// Add shadow to navbar after scrolling
window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll(".fade-in");

const observerOptions = {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeElements.forEach((element) => {
    fadeObserver.observe(element);
});

// Keyboard accessibility for mobile menu
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        navToggle?.classList.remove("active");
        navMenu?.classList.remove("active");
    }
});
