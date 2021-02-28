const hamburger = document.querySelector(".hamburger");
const headerLinks = document.querySelector(".header__links");
const links = document.querySelector(".header__links li");

hamburger.addEventListener("click", () => {
    headerLinks.classList.toggle("open");
});