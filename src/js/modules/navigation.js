/**
 * Navigation Module
 * Handles mobile hamburger drawer toggle, backdrop overlay, and dropdown menus.
 * Easily translatable into Vue reactive state (e.g., const isMobileMenuOpen = ref(false))
 */
export function initNavigation() {
  const dropdowns = document.querySelectorAll("[data-dropdown]");
  const siteHeader = document.querySelector("[data-site-header]");
  const toggleBtn = document.querySelector("[data-mobile-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const backdrop = document.querySelector("[data-mobile-backdrop]");

  if (siteHeader) {
    const updateHeaderState = () => {
      siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
  }

  dropdowns.forEach((dropdown) => {
    const toggleButton = dropdown.querySelector("[data-dropdown-toggle]");
    const chevron = dropdown.querySelector(".dropdown-chevron");

    if (!toggleButton) return;

    const setChevronState = (isOpen) => {
      chevron?.style.setProperty("transform", `rotate(${isOpen ? 90 : 0}deg)`, "important");
    };

    const closeDropdown = () => {
      dropdown.classList.remove("is-open");
      toggleButton.setAttribute("aria-expanded", "false");
      setChevronState(false);
    };

    setChevronState(false);

    toggleButton.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = dropdown.classList.toggle("is-open");
      toggleButton.setAttribute("aria-expanded", String(isOpen));
      setChevronState(isOpen);
    });

    dropdown.addEventListener("click", (event) => event.stopPropagation());
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeDropdown();
    });
    window.addEventListener("click", closeDropdown);
  });

  if (!toggleBtn || !mobileMenu) return;

  const toggle = (force) => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    const nextState = force !== undefined ? force : !isExpanded;

    toggleBtn.setAttribute("aria-expanded", String(nextState));
    if (nextState) {
      mobileMenu.classList.remove("hidden");
      backdrop?.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      mobileMenu.classList.add("hidden");
      backdrop?.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }
  };

  toggleBtn.addEventListener("click", () => toggle());
  backdrop?.addEventListener("click", () => toggle(false));
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => toggle(false));
  });

  // Close when pressing ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggle(false);
  });
}
