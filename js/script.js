document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#hamburger");
  const navMenu = document.querySelector(".nav-menus");
  const navBtn = document.querySelector(".nav-btn");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navBtn.classList.toggle("active");
  });
});
