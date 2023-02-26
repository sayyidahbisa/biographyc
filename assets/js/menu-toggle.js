const mobileMenuIcon = document.getElementById("responsiveMenu");
const menuNav = document.querySelector(".header-container nav");

mobileMenuIcon.addEventListener("click", function () {
  menuNav.classList.toggle("mobile");
});
