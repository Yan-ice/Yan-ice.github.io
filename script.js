const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-in"));
}

// Ensure hero content appears even if observer misses tiny elements.
window.addEventListener("load", () => {
  document.querySelectorAll(".hero .reveal").forEach((el) => {
    el.classList.add("is-in");
  });
});
