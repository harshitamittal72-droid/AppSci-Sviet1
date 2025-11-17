// ensure-toggle.js - create & wire sidebar toggle if missing
(function () {
  "use strict";

  function $id(id) {
    return document.getElementById(id);
  }
  function createToggleButton() {
    // avoid duplicates
    if ($id("sidebarToggle")) return $id("sidebarToggle");

    const btn = document.createElement("button");
    btn.id = "sidebarToggle";
    btn.className = "sidebar-hamburger";
    btn.type = "button";
    btn.setAttribute("aria-label", "Open sidebar");
    btn.setAttribute("title", "Open menu");

    // add accessible sr-only text (optional)
    const sr = document.createElement("span");
    sr.className = "sr-only";
    sr.textContent = "Open sidebar";
    btn.appendChild(sr);

    // add simple inline SVG hamburger so there are no external deps
    btn.innerHTML += `
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M3 6h18M3 12h18M3 18h18"></path>
      </svg>
    `;

    // minimal inline styles to ensure visibility if CSS isn't loaded
    Object.assign(btn.style, {
      position: "fixed",
      top: "14px",
      left: "14px",
      zIndex: "2147483000",
      width: "44px",
      height: "44px",
      padding: "8px",
      borderRadius: "10px",
      background: "var(--color-metallic)",
      color: "var(--color-text)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
    });

    document.body.appendChild(btn);
    return btn;
  }

  function applyOpenVisualsForced(sidebar) {
    if (!sidebar) return;
    // clear the closing inline styles so it becomes visible
    sidebar.style.transform = "";
    sidebar.style.visibility = "";
    sidebar.classList.add("open");
    sidebar.removeAttribute("aria-hidden");
  }

  function initToggleCreator() {
    const sidebar = $id("siteSidebar");
    if (!sidebar) {
      // if sidebar isn't present now, watch for it and create toggle later
      const obs = new MutationObserver((mutations, observer) => {
        if ($id("siteSidebar")) {
          observer.disconnect();
          initToggleCreator(); // re-run now that sidebar exists
        }
      });
      obs.observe(document.body, { childList: true, subtree: true });
      return;
    }

    const btn = createToggleButton();

    // click opens the sidebar (always enforced)
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      applyOpenVisualsForced(sidebar);
      console.log("[sidebar toggle] open requested (enforced visuals).");
    });

    // if sidebar is removed from DOM later, remove this button to avoid orphan
    const cleanupObserver = new MutationObserver((mutations) => {
      if (!$id("siteSidebar")) {
        // sidebar removed -> cleanup toggle (but keep CSS in case it's re-added)
        if ($id("sidebarToggle")) $id("sidebarToggle").remove();
      }
    });
    cleanupObserver.observe(document.body, { childList: true, subtree: true });

    console.log("[sidebar toggle] ensured present and wired.");
  }

  // init after DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initToggleCreator);
  } else {
    setTimeout(initToggleCreator, 0);
  }
})();
