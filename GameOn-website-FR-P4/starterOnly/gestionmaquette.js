let bgDelete1 = document.querySelector(".hero-section");
let bgDelete2 = document.querySelector(".topnav");
let bgDelete3 = document.querySelector("footer");
let bgDelete4 = document.querySelector(".bground");
let modBtn = document.querySelector(".modal-btn");
let spanClose = document.querySelector(".close");
let modalBody = document.querySelector(".modal-body");

//fonction simplification fonction restauration
function restoreMainPageHelp() {
  bgDelete2.style.display = "block";
  bgDelete3.style.display = "block";
  bgDelete4.style.background = "rgba(26, 39, 156, 0.4)";
}
// fonction arriere-plan de la modal en blanc
modBtn.addEventListener("click", () => {
  bgDelete1.style.display = "none";
  bgDelete2.style.display = "none";
  bgDelete3.style.display = "none";
  bgDelete4.style.background = "#fff";
});

//fonction restauration de main page avec clic sur le span  toast/ croix
spanClose.addEventListener("click", restoreMainPage);
function restoreMainPage() {
  if (window.matchMedia("min-width:800px").matches) {
    bgDelete1.style.display = "grid";
    restoreMainPageHelp();
  } else {
    bgDelete1.style.display = "block";
    restoreMainPageHelp();
  }
}
//fonction restauration main page avec btn submit

btnValid.addEventListener("click", restoreMainPage2);
function restoreMainPage2() {
  if (btnValid.value === "Fermer") {
    restoreMainPage();
    modalClose();
  }
}

if (btnValid.value === "Fermer") btnValid.cliked;
//appliquer la classe custom-select aux 3 premiers input
// let inputStyle = document.querySelectorAll("input");

// inputStyle[0].addEventListener("input", () => {
//   inputStyle[0].classList.add("custom-select");
// });
// inputStyle[1].addEventListener("input", () => {
//   inputStyle[1].classList.add("custom-select");
// });
// inputStyle[2].addEventListener("input", () => {
//   inputStyle[2].classList.add("custom-select");
// });
