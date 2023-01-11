const menuIcon = document.querySelector(".veganburger");
const navbar = document.querySelector(".nav");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

var loader = document.querySelector(".loaderwrap")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}