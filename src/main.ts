let features = document.querySelector(".features") as HTMLLIElement;
let featuresMenu = document.querySelector(".features .menu") as HTMLUListElement;

let company = document.querySelector(".company") as HTMLLIElement;
let companyMenu = document.querySelector(".company .menu") as HTMLUListElement;

let arrowfeat = features.children[0].children[0] as HTMLImageElement;
let arrowcomp = company.children[0].children[0] as HTMLImageElement;

features.addEventListener("click", () => {
  features.classList.toggle("clicked");
  featuresMenu.classList.toggle("show");

  if (features.classList.contains("clicked")) {
    arrowfeat.src = "images/icon-arrow-up.svg";
  } else {
    arrowfeat.src = "images/icon-arrow-down.svg";
  }
});

company.addEventListener("click", () => {
  company.classList.toggle("clicked");
  companyMenu.classList.toggle("show");

  if (company.classList.contains("clicked")) {
    arrowcomp.src = "images/icon-arrow-up.svg";
  } else {
    arrowcomp.src = "images/icon-arrow-down.svg";
  }
});

let menuIcon = document.querySelector("header .menu-icon") as HTMLSpanElement;
let menu = document.querySelector("header .right-side") as HTMLDivElement;

menuIcon.addEventListener("click", () => {
  menu.classList.add("show");
});

let closeBtn = document.querySelector("header .close") as HTMLSpanElement;

closeBtn.addEventListener("click", () => {
  menu.classList.remove("show");
});

let landingImage = document.querySelector(".landing .image img") as HTMLImageElement;

if (window.innerWidth <= 992) {
  landingImage.src = "images/image-hero-mobile.png";
} else {
  landingImage.src = "images/image-hero-desktop.png";
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 992) {
    landingImage.src = "images/image-hero-mobile.png";
  } else {
    landingImage.src = "images/image-hero-desktop.png";
  }
});