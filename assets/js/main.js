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


//thumbnail slider
const thumbnailsSwiper = new Swiper(".home__thumbnails", {
    slidesPerView: 3.5,
    spaceBetween: 20,
    loop: true,
    effect: "carousel",
    allowTouchMove: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: { slidesPerView: 1.5 },
        800: { slidesPerView: 1.8 },
        940: { slidesPerView: 2.2 },
        1000: { slidesPerView: 2.4 },
        1100: { slidesPerView: 2.5 },
        1200: { slidesPerView: 2.8 },
        1300: { slidesPerView: 3.1 },
        1400: { slidesPerView: 3.5 },
    }
});

thumbnailsSwiper.on("slideChange", () => {
    let realIndex = thumbnailsSwiper.realIndex;
    let prevRealIndex = thumbnailsSwiper.realIndex;

    document.querySelectorAll(".home__slide")[prevRealIndex].classList.remove('active');
    document.querySelectorAll(".home__slide")[realIndex].classList.add('active');
});


//onload 
window.addEventListener("load", () => {
    document.querySelector(".home__thumbnails").classList.add("reveal");
});










