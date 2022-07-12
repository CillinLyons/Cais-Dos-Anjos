///////////////////////////////////////////////////////////
// NAVBAR
const toggle = document.querySelector(".header__nav-label");
const menu = document.querySelector(".header__nav-list");
const items = document.querySelectorAll(".header__nav-item");
const textbox = document.querySelector(".header__text-box");
const checkbox = document.querySelector(".header__nav-checkbox");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    textbox.classList.remove("header__hidden");
  } else {
    menu.classList.add("active");
    textbox.classList.add("header__hidden");
  }
}

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("header__nav-submenu-active")) {
    this.classList.remove("header__nav-submenu-active");
  } else if (menu.querySelector(".header__nav-submenu-active")) {
    menu
      .querySelector(".header__nav-submenu-active")
      .classList.remove("header__nav-submenu-active");
    this.classList.add("header__nav-submenu-active");
  } else {
    this.classList.add("header__nav-submenu-active");
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".header__nav-submenu-active")) {
    menu
      .querySelector(".header__nav-submenu-active")
      .classList.remove("header__nav-submenu-active");
  }
}

/* Close Nav From Anywhere */
function closeList(e) {
  let isClickInsideNav = menu.contains(e.target);

  if (!isClickInsideNav && menu.classList.contains("active")) {
    menu.classList.remove("active");
    textbox.classList.remove("header__hidden");
    checkbox.checked = false;
  }
}

/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".header__nav-submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);
document.addEventListener("click", closeList, false);

///////////////////////////////////////////////////////////
// ABOUT
const observerLeft = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("leftAnimation");
    }
  });
});

const observerRight = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("rightAnimation");
    }
  });
});

observerLeft.observe(document.querySelector(".about__text-1"));
observerRight.observe(document.querySelector(".about__photo-1"));
observerLeft.observe(document.querySelector(".about__map"));
observerRight.observe(document.querySelector(".about__text-2"));
observerLeft.observe(document.querySelector(".about__text-3"));
observerRight.observe(document.querySelector(".about__photo-2"));

///////////////////////////////////////////////////////////
// GALLERY
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("gallery__slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
