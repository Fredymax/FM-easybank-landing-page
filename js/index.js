const $inputNav = document.querySelector("#input-nav");
const $navIcon = document.querySelector("#nav-icon");
const $body = document.querySelector("body");
const $navContainers = document.querySelectorAll("[data-show-nav]");
const $navLinks = document.querySelectorAll("a.nav__link");
const ICON = {
  hamburger: "icon-hamburger.svg",
  close: "icon-close.svg",
};

$inputNav.addEventListener("change", function (e) {
  const isChecked = e.target.checked;
  const newState = isChecked ? "open" : "closed";
  const nameIcon = isChecked ? ICON.close : ICON.hamburger;
  const action = isChecked ? "add" : "remove";
  $navContainers.forEach(($container) => ($container.dataset.showNav = newState));
  $navIcon.setAttribute("src", `./images/${nameIcon}`);
  $body.classList[action]("nav-open");
});

$navLinks.forEach(($link) => {
  $link.addEventListener("click", (e) => {
    $navContainers.forEach(($container) => ($container.dataset.showNav = "closed"));
    $navIcon.setAttribute("src", `./images/${ICON.hamburger}`);
    $body.classList.remove("nav-open");
    $inputNav.checked = false;
  });
});
