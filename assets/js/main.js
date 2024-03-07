const navBar = document.querySelector(".header")
const menuBtn = document.querySelector(".header__menu-icon");
const closeMenuBtn = document.querySelector(".close-icon");

const sr = ScrollReveal({ origin: "top", distance: "100px", duration: 2000, delay: 200 });

//toggle menu
menuBtn.addEventListener("click", () => document.body.classList.add("menu-toggled"));

closeMenuBtn.addEventListener("click", () => document.body.classList.remove("menu-toggled"));

//change bg header
function changeHeaderBg() {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
        navBar.style.backgroundColor = "var(--blue-60-opcty-70)";
        navBar.style.backdropFilter = "blur(20px)";
    } else {
        navBar.style.backgroundColor = "transparent";
        navBar.style.backdropFilter = "blur(0px)";
    }
}


















