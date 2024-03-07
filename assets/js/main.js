import Destination from "./destination.js";
import DestinationText from "./destiText.js";
import DestinationBg from "./destiBg.js";

const navBar = document.querySelector(".header");
const menuBtn = document.querySelector(".header__menu-icon");
const closeMenuBtn = document.querySelector(".close-icon");
const sections = document.querySelectorAll("section[id]");
const destiSliderWrapper = document.querySelector(".destinations__slider-wrapper");
const destinationsText = document.querySelector(".destinations__text");
const destinationsBg = document.querySelector(".destinations__bg");


const DESTINATIOS_API = "../assets/api/destinations.json";

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


//render destinations 
async function renderDestinations() {
    const respone = await fetch(DESTINATIOS_API);
    const data = await respone.json();

    data.map((desti) => {
        destiSliderWrapper.innerHTML += Destination(desti);
        destinationsText.innerHTML += DestinationText(desti);
        destinationsBg.innerHTML += DestinationBg(desti);
    });
    const destiSwiper = new Swiper(".destinations__slider", {
        effect: "cards",
        grabCursor: true,
        centeredSlides: true,
    });
    document.querySelectorAll(".destination-text")[0].classList.add("active");
    document.querySelectorAll(".destination-bg")[0].classList.add("active");
    destiSwiper.on("slideChange", () => {
        let realIndex = destiSwiper.realIndex;
        let prevRealIndex = destiSwiper.previousRealIndex;

        document.querySelectorAll(".destination-text")[prevRealIndex].classList.remove("active");
        document.querySelectorAll(".destination-bg")[prevRealIndex].classList.remove("active");
        document.querySelectorAll(".destination-text")[realIndex].classList.add("active");
        document.querySelectorAll(".destination-bg")[realIndex].classList.add("active");
    });
    sr.reveal(".destinations__slider");
    sr.reveal(".destinations__text");
}


//onload 
window.addEventListener("load", () => {
    changeHeaderBg();
    renderDestinations();
    document.querySelector(".home__thumbnails").classList.add("reveal");
});






