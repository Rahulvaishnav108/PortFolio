const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), index * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

reveals.forEach((el) => observer.observe(el));

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (nav) {
    nav.style.boxShadow = window.scrollY > 30 ? "0 2px 40px rgba(0,0,0,0.4)" : "none";
  }
});
