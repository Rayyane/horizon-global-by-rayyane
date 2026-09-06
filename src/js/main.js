import "../css/style.css";
import headerMarkup from "../components/layout/header.html?raw";
import divisionsMarkup from "../components/sections/features.html?raw";
import heroMarkup from "../components/sections/hero.html?raw";
import faqMarkup from "../components/sections/faq.html?raw";
import sisterConcernsMarkup from "../components/sections/sister-concerns.html?raw";
import ctaMarkup from "../components/sections/cta.html?raw";
import footerMarkup from "../components/layout/footer.html?raw";
import { initNavigation } from "./modules/navigation.js";

document.addEventListener("DOMContentLoaded", () => {
  const headerMount = document.querySelector('[data-component="header"]');

  if (headerMount) {
    headerMount.outerHTML = headerMarkup;
  }

  const heroMount = document.querySelector('[data-component="hero"]');

  if (heroMount) {
    heroMount.outerHTML = heroMarkup;
  }

  const divisionsMount = document.querySelector('[data-component="divisions"]');

  if (divisionsMount) {
    divisionsMount.outerHTML = divisionsMarkup;
  }

  const sisterConcernsMount = document.querySelector('[data-component="sister-concerns"]');

  if (sisterConcernsMount) {
    sisterConcernsMount.outerHTML = sisterConcernsMarkup;
  }

  const faqMount = document.querySelector('[data-component="faq"]');

  if (faqMount) {
    faqMount.outerHTML = faqMarkup;
  }

  const ctaMount = document.querySelector('[data-component="cta"]');

  if (ctaMount) {
    ctaMount.outerHTML = ctaMarkup;
  }

  const footerMount = document.querySelector('[data-component="footer"]');

  if (footerMount) {
    footerMount.outerHTML = footerMarkup;
  }

  initNavigation();
  console.log("Horizon Global: Frontend initialized successfully.");
});
