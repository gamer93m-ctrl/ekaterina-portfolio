// Subtle reveal-on-scroll for projects and about lines.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".project, .about p").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
