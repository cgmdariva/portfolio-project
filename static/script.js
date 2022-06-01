/* Close lateral menu in mobile, open in bigger screens and switch icon list to x */

const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
  menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
  body.classList.toggle("menu-nav-active");
});

/* Close lateral menu when one iten is clicked and change the icon to list again */

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
  item.addEventListener("click", () => {
    if (body.classList.contains("menu-nav-active")) {
      body.classList.remove("menu-nav-active")
      menuMobile.classList.replace("bi-x", "bi-list")
    }
  })
})