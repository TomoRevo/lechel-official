/*
 * Placeholder JavaScript file.
 *
 * This script file is intentionally minimal. It can be used to
 * implement interactive behaviours on the site, such as smooth
 * scrolling or toggling mobile navigation menus. For now it
 * contains only a stub to demonstrate where custom JS would live.
 */

document.addEventListener("DOMContentLoaded", () => {
  const introBox = document.querySelector(".intro-box");

  if (introBox) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            introBox.classList.add("fade-in");
            observer.unobserve(introBox); // 1回だけ発火
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(introBox);
  }
});
