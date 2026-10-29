/* Progressive enhancement for Anshif's portfolio: section reveals and active archive index. */
(function () {
  "use strict";
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[data-label]"));
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var railLinks = Array.prototype.slice.call(document.querySelectorAll(".section-rail a"));
  var currentLabel = document.getElementById("current-section");
  var progress = document.getElementById("rail-progress-fill");
  var year = document.getElementById("current-year");
  var activeId = "";

  if (year) year.textContent = String(new Date().getFullYear());

  if ("IntersectionObserver" in window && !reduced) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -7% 0px", threshold: .06 });
    reveals.forEach(function (element) { observer.observe(element); });
  } else {
    reveals.forEach(function (element) { element.classList.add("is-visible"); });
  }

  var scheduled = false;
  function updateArchiveState() {
    scheduled = false;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.height = (max > 0 ? Math.min(1, window.scrollY / max) * 100 : 0) + "%";
    var current = sections[0];
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= window.innerHeight * .38) current = section;
    });
    if (current && current.id !== activeId) {
      activeId = current.id;
      if (currentLabel) currentLabel.textContent = current.getAttribute("data-label");
      railLinks.forEach(function (link) {
        link.classList.toggle("is-active", link.getAttribute("data-section") === current.id);
      });
    }
  }
  window.addEventListener("scroll", function () {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(updateArchiveState);
    }
  }, { passive: true });
  window.addEventListener("resize", updateArchiveState);
  updateArchiveState();
})();
