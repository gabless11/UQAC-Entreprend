const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
const registrationFormPanel = document.querySelector("#formulaire-inscription");

document.querySelectorAll("[data-open-registration]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();

    if (!(registrationFormPanel instanceof HTMLElement)) {
      throw new Error("Le panneau du formulaire d’inscription est introuvable.");
    }

    registrationFormPanel.hidden = false;
    document.querySelectorAll("[data-open-registration]").forEach((item) => {
      item.setAttribute("aria-expanded", "true");
    });
    registrationFormPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

if (menuToggle && navigation) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    navigation.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Ouvrir le menu" : "Fermer le menu");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuToggle.focus();
    }
  });
}