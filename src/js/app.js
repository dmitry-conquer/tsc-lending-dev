import "./modules/sliders.js";
import AOS from "aos";
function app() {
  AOS.init({
    once: true,
  });
}

document.addEventListener("DOMContentLoaded", app);
