/*
 * Placeholder JavaScript file.
 *
 * This script file is intentionally minimal. It can be used to
 * implement interactive behaviours on the site, such as smooth
 * scrolling or toggling mobile navigation menus. For now it
 * contains only a stub to demonstrate where custom JS would live.
 */

// Example: Smooth scroll for anchor links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({ top: targetElement.offsetTop - 60, behavior: "smooth" });
      }
    });
  });
});