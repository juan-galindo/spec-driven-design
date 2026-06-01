(() => {
  const menus = document.querySelectorAll(".sectionMenu");
  if (!menus.length) return;

  const MOBILE_MQ = window.matchMedia("(max-width: 900px)");
  const CLOSE_MS = 280;
  const CLOSE_MS_DESKTOP = 200;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const isMobile = () => MOBILE_MQ.matches;

  const setScrollLock = (lock) => {
    document.body.classList.toggle("sectionMenuOpen", lock);
  };

  const closeDuration = () => (isMobile() ? CLOSE_MS : CLOSE_MS_DESKTOP);

  const setMenuState = (menu, state) => {
    const isActive = state !== "idle";
    const isVisible = state === "visible";
    const isClosing = state === "closing";

    menu.classList.toggle("sectionMenu--active", isActive);
    menu.classList.toggle("sectionMenu--visible", isVisible);
    menu.classList.toggle("sectionMenu--closing", isClosing);

    if (menu.backdrop) {
      menu.backdrop.classList.toggle("is-active", isActive);
      menu.backdrop.classList.toggle("is-visible", isVisible);
      menu.backdrop.classList.toggle("is-closing", isClosing);
    }

    if (menu.panel) {
      menu.panel.classList.toggle("is-active", isActive);
      menu.panel.classList.toggle("is-visible", isVisible);
      menu.panel.classList.toggle("is-closing", isClosing);
    }
  };

  const mountOverlay = (menu) => {
    if (!menu.backdrop || !menu.panel) return;

    if (isMobile()) {
      if (menu.backdrop.parentElement !== document.body) {
        document.body.appendChild(menu.backdrop);
        document.body.appendChild(menu.panel);
      }
      return;
    }

    if (menu.backdrop.parentElement !== menu) {
      menu.appendChild(menu.backdrop);
      menu.appendChild(menu.panel);
    }
  };

  const openMenu = (menu) => {
    mountOverlay(menu);
    menu.open = true;
    setMenuState(menu, "active");
    setScrollLock(true);

    if (prefersReducedMotion) {
      setMenuState(menu, "visible");
      return;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setMenuState(menu, "visible");
      });
    });
  };

  const closeMenu = (menu, immediate = false) => {
    if (!menu.open || menu.classList.contains("sectionMenu--closing")) return;

    if (immediate || prefersReducedMotion || !menu.classList.contains("sectionMenu--visible")) {
      menu.open = false;
      setMenuState(menu, "idle");
      setScrollLock(false);
      return;
    }

    setMenuState(menu, "closing");

    window.setTimeout(() => {
      menu.open = false;
      setMenuState(menu, "idle");
      setScrollLock(false);
    }, closeDuration());
  };

  menus.forEach((menu) => {
    menu.backdrop = menu.querySelector(".sectionMenuBackdrop");
    menu.panel = menu.querySelector(".sectionMenuPanel");

    mountOverlay(menu);

    const summary = menu.querySelector("summary");
    const links = menu.panel?.querySelectorAll("a") ?? [];

    summary?.addEventListener("click", (event) => {
      event.preventDefault();
      if (menu.classList.contains("sectionMenu--closing")) return;

      if (menu.classList.contains("sectionMenu--visible")) {
        closeMenu(menu);
      } else if (!menu.classList.contains("sectionMenu--active")) {
        openMenu(menu);
      }
    });

    menu.backdrop?.addEventListener("click", () => {
      closeMenu(menu);
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu(menu, true);
      });
    });
  });

  MOBILE_MQ.addEventListener("change", () => {
    menus.forEach((menu) => {
      if (menu.open) closeMenu(menu, true);
      mountOverlay(menu);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    menus.forEach((menu) => {
      if (menu.open) closeMenu(menu);
    });
  });
})();
