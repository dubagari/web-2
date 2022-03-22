const navbar = document.querySelector(".navbar");
const menuBar = document.getElementById("menu-bar");
const goUp = document.getElementById("scroll-top");
const loadImage = document.querySelector(".load-image");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("fa-times");
  navbar.classList.toggle("active-nav");
});

window.addEventListener("scroll", () => {
  menuBar.classList.remove("fa-times");
  navbar.classList.remove("active-nav");

  if (window.scrollY > 60) {
    goUp.classList.add("activeScroll");
  } else {
    goUp.classList.remove("activeScroll");
  }
});

window.addEventListener("load", function () {
  setInterval(function () {
    loadImage.classList.add("add-load");
  }, 3000);
});
