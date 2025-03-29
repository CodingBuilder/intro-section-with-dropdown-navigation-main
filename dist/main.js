"use strict";
let features = document.querySelector(".features");
let featuresMenu = document.querySelector(".features .menu");
let company = document.querySelector(".company");
let companyMenu = document.querySelector(".company .menu");
let arrowfeat = features.children[0].children[0];
let arrowcomp = company.children[0].children[0];
features.addEventListener("click", () => {
    features.classList.toggle("clicked");
    featuresMenu.classList.toggle("show");
    if (features.classList.contains("clicked")) {
        arrowfeat.src = "images/icon-arrow-up.svg";
    }
    else {
        arrowfeat.src = "images/icon-arrow-down.svg";
    }
});
company.addEventListener("click", () => {
    company.classList.toggle("clicked");
    companyMenu.classList.toggle("show");
    if (company.classList.contains("clicked")) {
        arrowcomp.src = "images/icon-arrow-up.svg";
    }
    else {
        arrowcomp.src = "images/icon-arrow-down.svg";
    }
});
let menuIcon = document.querySelector("header .menu-icon");
let menu = document.querySelector("header .right-side");
menuIcon.addEventListener("click", () => {
    menu.classList.add("show");
});
let closeBtn = document.querySelector("header .close");
closeBtn.addEventListener("click", () => {
    menu.classList.remove("show");
});
let landingImage = document.querySelector(".landing .image img");
if (window.innerWidth <= 992) {
    landingImage.src = "images/image-hero-mobile.png";
}
else {
    landingImage.src = "images/image-hero-desktop.png";
}
window.addEventListener("resize", () => {
    if (window.innerWidth <= 992) {
        landingImage.src = "images/image-hero-mobile.png";
    }
    else {
        landingImage.src = "images/image-hero-desktop.png";
    }
});
