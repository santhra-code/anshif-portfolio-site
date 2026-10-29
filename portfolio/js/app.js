/* The Santhra Files — progressive enhancement and archive interactions. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var projects = window.PROJECTS || [];
  var capabilities = window.CAPABILITIES || [];
  var $ = function (selector, root) { return (root || document).querySelector(selector); };
  var $$ = function (selector, root) { return Array.prototype.slice.call((root || document).querySelectorAll(selector)); };
  var escapeHtml = function (value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  };

  function projectPreview(project) {
    if (project.kind === "vending") {
      return '<div class="preview-art preview-vending" aria-hidden="true"><div class="vending-head mono"><span>ACCESS STUDY / 002</span><span>SOFTWARE + SYSTEM CONCEPT</span></div><div class="vending-map"><div class="vending-inputs"><span><b>QR</b><i>Member pass</i></span><span><b>UPI</b><i>Payment route</i></span><span><b>₹</b><i>Coin simulation</i></span></div><div class="vending-connector"><i></i><i></i><i></i></div><div class="vending-core"><span class="core-ring"></span><b>WEB<br>PLATFORM</b><small>Next.js · Supabase</small><span class="core-foot mono">ORDER / PASS / LOG</span></div><div class="vending-out"><div class="dispense-outline"><i></i><i></i><i></i><b>PRODUCT<br>RELEASE</b></div><span class="hardware-flag mono">HARDWARE PLAN</span></div></div><div class="vending-foot mono"><span>SCHEMATIC — NOT A PROTOTYPE PHOTOGRAPH</span><span>SOFTWARE STATES ≠ PHYSICAL TEST</span></div></div>';
    }
    if (project.kind === "fashion") {
      return '<div class="preview-art preview-fashion" aria-hidden="true"><div class="fashion-masthead">SANAÉRA<span>INDIAN FORM · MODERN HEIRLOOM</span></div><div class="fashion-stage"><span class="fashion-orbit"></span><span class="fashion-swatch swatch-one"></span><span class="fashion-swatch swatch-two"></span><span class="fashion-word">Draped<br><em>in time.</em></span><span class="fashion-edition mono">COLLECTION / 01</span></div><div class="fashion-foot"><span>EDITORIAL STORE</span><span>OBJECTS WITH A STORY</span></div></div>';
    }
    if (project.kind === "learning") {
      return '<div class="preview-art preview-learning" aria-hidden="true"><div class="learning-top mono"><span>SANTRIX / LEARNING PLATFORM</span><span>STUDENT · TEACHER</span></div><div class="learning-title">Learn with<br><em>intention.</em></div><div class="learning-courses"><span>01 <b>Course discovery</b><i>→</i></span><span>02 <b>Teacher directory</b><i>→</i></span><span>03 <b>Demo session</b><i>→</i></span></div><div class="learning-stamp mono">WORKFLOW SCHEMATIC</div></div>';
    }
    return '<div class="preview-art preview-research" aria-hidden="true"><div class="research-top mono"><span>FIELD NOTES / ' + escapeHtml(project.num) + '</span><span>EXPLORATORY</span></div><div class="research-title">Signals in<br><em>the record.</em></div><div class="research-table"><span>01 <b>Source</b><i>Under consideration</i></span><span>02 <b>Prepare</b><i>Planned</i></span><span>03 <b>Examine</b><i>Planned</i></span></div><div class="research-caveat mono">NO DATA OR RESULTS SHOWN</div></div>';
  }

  function renderProjects() {
    var archive = $("#project-archive");
    if (!archive) return;
    archive.innerHTML = projects.map(function (project, index) {
      var stack = project.stack.slice(0, 4).map(function (item) { return "<li>" + escapeHtml(item) + "</li>"; }).join("");
      var repo = project.repo
        ? '<a class="project-source" href="' + escapeHtml(project.repo) + '" target="_blank" rel="noopener noreferrer">Repository <span aria-hidden="true">↗</span></a>'
        : '<span class="project-source project-source-muted">No public repository linked</span>';
      var projectName = project.kind === "vending" ? "Digital Vending Machine for Sanitary Napkins" : project.name;
      return '<article class="project-entry project-' + escapeHtml(project.kind) + ' reveal" id="project-' + escapeHtml(project.id) + '" aria-labelledby="project-title-' + escapeHtml(project.id) + '">' +
        '<div class="page-wrap project-layout"><div class="project-copy"><p class="project-overline mono"><span>File ' + escapeHtml(project.num) + ' / ' + escapeHtml(project.archive) + '</span><span class="status-mark"><i aria-hidden="true"></i>' + escapeHtml(project.status) + '</span></p>' +
        '<h3 class="project-title" id="project-title-' + escapeHtml(project.id) + '"><span class="project-number">' + escapeHtml(project.num) + '</span>' + (project.kind === "vending" ? '<span>DIGITAL VENDING MACHINE</span><small>FOR SANITARY NAPKINS</small>' : escapeHtml(project.name)) + '</h3>' +
        (project.subtitle ? '<p class="project-subtitle">' + escapeHtml(project.subtitle) + '</p>' : '') + '<p class="project-summary">' + escapeHtml(project.summary) + '</p><p class="project-intention"><span class="mono">The question</span>' + escapeHtml(project.objective) + '</p>' +
        '<ul class="project-stack" aria-label="Selected technologies">' + stack + '</ul><div class="project-actions"><button class="button button-dark dossier-open" type="button" data-project="' + escapeHtml(project.id) + '" aria-label="Open file ' + escapeHtml(project.num) + ' dossier: ' + escapeHtml(projectName) + '">Open dossier <span aria-hidden="true">↗</span></button>' + repo + '</div></div>' +
        '<div class="project-visual"><div class="visual-label mono">' + escapeHtml(project.previewLabel) + '</div>' + projectPreview(project) + '<span class="visual-index mono">S—' + String(index + 1).padStart(3, "0") + ' / ARCHIVE</span></div></div></article>';
    }).join("");
  }

  function renderSkills() {
    var tabs = $("#skill-tabs"), content = $("#skill-content");
    if (!tabs || !content) return;
    tabs.innerHTML = capabilities.map(function (category, index) {
      return '<button class="skill-tab" id="skill-tab-' + escapeHtml(category.id) + '" type="button" role="tab" aria-selected="' + (index === 0 ? "true" : "false") + '" aria-controls="skill-panel-' + escapeHtml(category.id) + '" tabindex="' + (index === 0 ? "0" : "-1") + '"><span class="mono">0' + (index + 1) + '</span><b>' + escapeHtml(category.label) + '</b><i aria-hidden="true">↗</i></button>';
    }).join("");
    content.innerHTML = capabilities.map(function (category, index) {
      var rows = category.skills.map(function (skill) {
        var typeLabel = skill.level === "used" ? "Used" : skill.level === "familiar" ? "Familiar" : "Developing";
        return '<li><span class="skill-name">' + escapeHtml(skill.name) + '</span><span class="skill-status"><i class="legend-dot ' + escapeHtml(skill.level) + '" aria-hidden="true"></i>' + typeLabel + '</span><span class="skill-evidence">' + escapeHtml(skill.evidence) + '</span></li>';
      }).join("");
      return '<section class="skill-panel" id="skill-panel-' + escapeHtml(category.id) + '" role="tabpanel" aria-labelledby="skill-tab-' + escapeHtml(category.id) + '"' + (index ? " hidden" : "") + '><p class="skill-note">' + escapeHtml(category.note) + '</p><ul>' + rows + '</ul></section>';
    }).join("");
    $$(".skill-tab", tabs).forEach(function (tab) {
      tab.addEventListener("click", function () { selectSkill(tab); });
      tab.addEventListener("keydown", function (event) {
        if (["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"].indexOf(event.key) === -1) return;
        event.preventDefault();
        var all = $$(".skill-tab", tabs), current = all.indexOf(tab), next = current;
        if (event.key === "Home") next = 0;
        else if (event.key === "End") next = all.length - 1;
        else next = (current + (event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1) + all.length) % all.length;
        all[next].focus(); selectSkill(all[next]);
      });
    });
  }

  function selectSkill(tab) {
    $$(".skill-tab").forEach(function (item) {
      var selected = item === tab;
      item.setAttribute("aria-selected", selected ? "true" : "false");
      item.tabIndex = selected ? 0 : -1;
      var panel = $("#" + item.getAttribute("aria-controls"));
      if (panel) panel.hidden = !selected;
    });
  }

  renderProjects();
  renderSkills();

  var currentYear = $("#current-year");
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());

  /* Shared, keyboard-operable overlay behavior: focus trap, inert background, Escape, and focus restoration. */
  var activeOverlay = null, returnFocus = null, scrollPosition = 0;
  var background = [$("#main"), $("#topbar"), $(".section-rail")].filter(Boolean);
  var focusableSelector = 'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])';

  function setBackgroundInert(inert) {
    background.forEach(function (element) {
      if (inert) { element.setAttribute("inert", ""); element.setAttribute("aria-hidden", "true"); }
      else { element.removeAttribute("inert"); element.removeAttribute("aria-hidden"); }
    });
  }

  function openOverlay(wrap, panel, trigger) {
    if (activeOverlay) return;
    returnFocus = trigger || document.activeElement;
    scrollPosition = window.scrollY || document.documentElement.scrollTop;
    wrap.hidden = false;
    document.body.style.top = -scrollPosition + "px";
    document.body.classList.add("overlay-open");
    setBackgroundInert(true);
    void wrap.offsetWidth;
    wrap.classList.add("is-open");
    activeOverlay = { wrap: wrap, panel: panel };
    panel.scrollTop = 0;
    window.setTimeout(function () { panel.focus({ preventScroll: true }); }, reduceMotion ? 0 : 80);
  }

  function closeOverlay(afterClose) {
    if (!activeOverlay) return;
    var closing = activeOverlay;
    activeOverlay = null;
    closing.wrap.classList.remove("is-open");
    var finish = function () {
      closing.wrap.hidden = true;
      document.body.classList.remove("overlay-open");
      document.body.style.top = "";
      setBackgroundInert(false);
      window.scrollTo({ top: scrollPosition, behavior: "auto" });
      var focusTarget = returnFocus;
      if (closing.wrap === indexWrap && indexTrigger) indexTrigger.setAttribute("aria-expanded", "false");
      if (afterClose) afterClose();
      else if (focusTarget && focusTarget.isConnected && focusTarget.focus) focusTarget.focus({ preventScroll: true });
      returnFocus = null;
    };
    window.setTimeout(finish, reduceMotion ? 0 : 420);
    if (window.location.hash.indexOf("#file-") === 0) history.replaceState(null, "", location.pathname + location.search);
  }

  document.addEventListener("keydown", function (event) {
    if (!activeOverlay) return;
    if (event.key === "Escape") { event.preventDefault(); closeOverlay(); return; }
    if (event.key !== "Tab") return;
    var elements = $$(focusableSelector, activeOverlay.panel).filter(function (element) { return !element.hidden && element.getClientRects().length; });
    if (!elements.length) { event.preventDefault(); activeOverlay.panel.focus(); return; }
    var first = elements[0], last = elements[elements.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === activeOverlay.panel)) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });

  var indexWrap = $("#index-wrap"), indexDialog = $("#index-dialog"), indexTrigger = $("#index-trigger");
  indexTrigger.addEventListener("click", function () { openOverlay(indexWrap, indexDialog, indexTrigger); indexTrigger.setAttribute("aria-expanded", "true"); });
  $$("[data-dismiss]").forEach(function (button) { button.addEventListener("click", function () {
    var wasIndex = activeOverlay && activeOverlay.wrap === indexWrap;
    closeOverlay();
    if (wasIndex) indexTrigger.setAttribute("aria-expanded", "false");
  }); });

  $$(".index-list a, .index-files a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var target = $(link.getAttribute("href"));
      indexTrigger.setAttribute("aria-expanded", "false");
      closeOverlay(function () {
        if (target) target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
        indexTrigger.focus({ preventScroll: true });
      });
    });
  });

  var dossierWrap = $("#dossier-wrap"), dossierPanel = $("#dossier-panel");
  function renderDossier(project) {
    var index = projects.indexOf(project);
    var previous = projects[(index + projects.length - 1) % projects.length];
    var next = projects[(index + 1) % projects.length];
    var stack = project.stack.map(function (technology) { return "<li>" + escapeHtml(technology) + "</li>"; }).join("");
    var features = project.features.map(function (feature) { return "<li>" + escapeHtml(feature) + "</li>"; }).join("");
    var repoLink = project.repo ? '<a href="' + escapeHtml(project.repo) + '" target="_blank" rel="noopener noreferrer"><span>Source repository</span><span aria-hidden="true">↗</span></a>' : '<p class="no-public-link">No repository or live demo supplied for this exploration.</p>';
    var title = project.shortName
      ? '<span>' + escapeHtml(project.shortName) + '</span><small>' + escapeHtml(project.name.replace(project.shortName, "").trim()) + '</small>'
      : escapeHtml(project.name);
    var fileName = project.kind === "vending" ? "DIGITAL VENDING MACHINE FOR SANITARY NAPKINS" : project.name;
    var mainSections = project.kind === "vending"
      ? '<section><h3>01 / The problem</h3><p>' + escapeHtml(project.problem) + '</p></section>' +
        '<section><h3>02 / The idea</h3><p>' + escapeHtml(project.idea) + '</p></section>' +
        '<section><h3>03 / The software</h3><p>' + escapeHtml(project.software) + '</p></section>' +
        '<section><h3>04 / The interaction</h3><p>' + escapeHtml(project.interaction) + '</p><ul class="dossier-list">' + project.workflow.map(function (step) { return '<li><b>' + escapeHtml(step.title) + '</b><br>' + escapeHtml(step.note) + ' <span class="workflow-state ' + escapeHtml(step.state) + '">' + (step.state === "planned" ? "Planned / untested hardware" : "Software workflow") + '</span></li>'; }).join("") + '</ul></section>' +
        '<section><h3>05 / The hardware</h3><p>' + escapeHtml(project.hardware) + '</p></section>' +
        '<section><h3>06 / Engineering decisions</h3><p>' + escapeHtml(project.engineering) + '</p></section>' +
        '<section><h3>07 / What I learned</h3><p>' + escapeHtml(project.learned) + '</p></section>' +
        '<section><h3>08 / Evidence &amp; limits</h3><p>' + escapeHtml(project.evidence) + '</p></section>'
      : '<section><h3>The question</h3><p>' + escapeHtml(project.objective) + '</p></section>' +
        '<section><h3>What is described</h3><ul class="dossier-list">' + features + '</ul></section>' +
        '<section><h3>Decisions &amp; challenges</h3><p>' + escapeHtml(project.challenge) + '</p></section>' +
        '<section><h3>What I’m learning</h3><p>' + escapeHtml(project.learned) + '</p></section>';
    dossierPanel.setAttribute("aria-label", "File " + project.num + ": " + fileName);
    dossierPanel.innerHTML = '<header class="dossier-top"><div class="dossier-identifier mono"><b>File ' + escapeHtml(project.num) + '</b><span>' + escapeHtml(project.archive) + '</span></div><button class="panel-close mono dossier-close" type="button">Close <span aria-hidden="true">×</span></button></header>' +
      '<div class="dossier-content"><p class="dossier-status mono"><i aria-hidden="true"></i>' + escapeHtml(project.status) + '</p><h2 id="dossier-title" class="' + (project.kind === "vending" ? "dossier-title-vending" : "") + '">' + title + '</h2>' + (project.subtitle ? '<p class="dossier-subtitle">' + escapeHtml(project.subtitle) + '</p>' : '') + '<p class="dossier-summary">' + escapeHtml(project.summary) + '</p>' +
      '<div class="dossier-preview">' + projectPreview(project) + '</div><p class="dossier-preview-caption mono">' + escapeHtml(project.previewLabel) + '</p>' +
      '<div class="dossier-grid"><div class="dossier-main">' + mainSections + (project.kind === "vending" ? '<section><h3>09 / My contribution</h3><p>' + escapeHtml(project.contribution) + '</p></section>' : '') + '</div>' +
      '<aside class="dossier-aside">' + (project.kind === "vending" ? '<section><h3>Implementation notes</h3><ul class="dossier-list">' + features + '</ul></section>' : '<section><h3>Contribution</h3><p>' + escapeHtml(project.contribution) + '</p></section>') + '<section><h3>Technology</h3><ul class="dossier-stack">' + stack + '</ul><p class="source-note">' + escapeHtml(project.stackNote) + '</p></section><section><h3>Current status</h3><p>' + escapeHtml(project.statusNote) + '</p></section><section class="dossier-links"><h3>Follow the file</h3>' + repoLink + (project.demo ? '<a href="' + escapeHtml(project.demo) + '" target="_blank" rel="noopener noreferrer"><span>Live demo</span><span aria-hidden="true">↗</span></a>' : "") + '</section></aside></div>' +
      '<nav class="dossier-next" aria-label="Other project dossiers"><button type="button" data-dossier="' + escapeHtml(previous.id) + '"><span class="mono">← Previous file ' + escapeHtml(previous.num) + '</span><b>' + escapeHtml(previous.kind === "vending" ? "Digital Vending Machine" : previous.name) + '</b></button><button type="button" data-dossier="' + escapeHtml(next.id) + '"><span class="mono">Next file ' + escapeHtml(next.num) + ' →</span><b>' + escapeHtml(next.kind === "vending" ? "Digital Vending Machine" : next.name) + '</b></button></nav></div>';
    $(".dossier-close", dossierPanel).addEventListener("click", function () { closeOverlay(); });
    $$("[data-dossier]", dossierPanel).forEach(function (button) {
      button.addEventListener("click", function () {
        var chosen = projects.filter(function (candidate) { return candidate.id === button.getAttribute("data-dossier"); })[0];
        if (!chosen) return;
        renderDossier(chosen);
        dossierPanel.scrollTop = 0;
        dossierPanel.focus({ preventScroll: true });
        history.replaceState(null, "", "#file-" + chosen.id);
      });
    });
  }

  function openDossier(id, trigger) {
    var project = projects.filter(function (candidate) { return candidate.id === id; })[0];
    if (!project) return;
    renderDossier(project);
    openOverlay(dossierWrap, dossierPanel, trigger);
    history.replaceState(null, "", "#file-" + project.id);
  }

  $("#project-archive").addEventListener("click", function (event) {
    var trigger = event.target.closest("[data-project]");
    if (trigger) openDossier(trigger.getAttribute("data-project"), trigger);
  });
  if (location.hash.indexOf("#file-") === 0) openDossier(location.hash.slice(6));

  /* In-view reveals remain fully visible when JS, IntersectionObserver or motion is unavailable. */
  var revealItems = $$(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -7% 0px", threshold: 0.06 });
    revealItems.forEach(function (item) { revealObserver.observe(item); });
  } else revealItems.forEach(function (item) { item.classList.add("is-visible"); });

  /* Active-section index and progress indicator. */
  var sections = $$("main section[data-label]"), railLinks = $$(".section-rail a"), currentLabel = $("#current-section"), fill = $("#rail-progress-fill"), lastSection = "";
  var scheduled = false;
  function updateScrollState() {
    scheduled = false;
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (fill) fill.style.height = (maxScroll > 0 ? Math.min(1, window.scrollY / maxScroll) * 100 : 0) + "%";
    var visible = sections[0];
    sections.forEach(function (section) { if (section.getBoundingClientRect().top <= window.innerHeight * 0.38) visible = section; });
    if (visible && visible.id !== lastSection) {
      lastSection = visible.id;
      if (currentLabel) currentLabel.textContent = visible.getAttribute("data-label");
      railLinks.forEach(function (link) { link.classList.toggle("is-active", link.getAttribute("data-section") === visible.id); });
    }
  }
  window.addEventListener("scroll", function () {
    if (!scheduled) { scheduled = true; window.requestAnimationFrame(updateScrollState); }
  }, { passive: true });
  window.addEventListener("resize", updateScrollState);
  updateScrollState();
})();