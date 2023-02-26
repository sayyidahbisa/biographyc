const btnMenu = document.getElementById("btnMenu");
const navTag = document.querySelector("header .container nav");

btnMenu.addEventListener("click", function () {
  navTag.classList.toggle("responsive");
});
