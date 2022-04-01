//variables pour arrierefond modal

let bgDelete1 = document.querySelector(".hero-section");
let bgDelete2 = document.querySelector(".topnav");
let bgDelete3 = document.querySelector("footer");
let bgDelete4 = document.querySelector(".bground");
let modBtn = document.querySelector(".modal-btn");
let spanClose = document.querySelector(".close");
let modalBody = document.querySelector(".modal-body");
//variable pour positionnement modal sur Iphone
const topNav = document.getElementById("myTopnav");
const modal = document.querySelector(".content");

//fonction aides fonction restauration(arrierefond-resetmodal, form et bouton submit)
function restoreMainPageHelp() {
  bgDelete2.style.display = "block";
  bgDelete3.style.display = "block";
  bgDelete4.style.background = "rgba(26, 39, 156, 0.4)";
  modalBlack.style.display = "none";
  modalClose();
  form.reset();
  btnValid.value = "C'est parti";
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
    modalClose();
    restoreMainPage();
    modBtn.cliked = true;
  }
}
