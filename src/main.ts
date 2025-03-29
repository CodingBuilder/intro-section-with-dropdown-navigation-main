const toggleMenu = (parent: HTMLLIElement, menu: HTMLUListElement, arrow: HTMLImageElement) => {
  parent.classList.toggle("clicked");
  menu.classList.toggle("show");
  arrow.src = parent.classList.contains("clicked")
    ? "images/icon-arrow-up.svg"
    : "images/icon-arrow-down.svg";
};

const features = document.querySelector(".features") as HTMLLIElement;
const featuresMenu = document.querySelector(".features .menu") as HTMLUListElement;
const company = document.querySelector(".company") as HTMLLIElement;
const companyMenu = document.querySelector(".company .menu") as HTMLUListElement;
const arrowfeat = features.querySelector("img") as HTMLImageElement;
const arrowcomp = company.querySelector("img") as HTMLImageElement;

features.addEventListener("click", () => toggleMenu(features, featuresMenu, arrowfeat));
company.addEventListener("click", () => toggleMenu(company, companyMenu, arrowcomp));

const menuIcon = document.querySelector("header .menu-icon") as HTMLSpanElement;
const menu = document.querySelector("header .right-side") as HTMLDivElement;
const closeBtn = document.querySelector("header .close") as HTMLSpanElement;

menuIcon.addEventListener("click", () => menu.classList.add("show"));
closeBtn.addEventListener("click", () => menu.classList.remove("show"));

const landingImage = document.querySelector(".landing .image img") as HTMLImageElement;

const updateLandingImage = () => {
  landingImage.src = window.innerWidth <= 992
    ? "images/image-hero-mobile.png"
    : "images/image-hero-desktop.png";
};

updateLandingImage();
window.addEventListener("resize", updateLandingImage);