function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
let form = document.querySelector("#reserve");

//cibler les id et les classes
//creer une fonction pour simplifier les ciblages
let id = (id) => document.getElementById(id);

let myForm = id("reserve");
//creation variable input + variable de validation finale
let firstName = id("first");
let firstValid = false;

let lastName = id("last");
let lastValid = false;

let eMail = id("email");
let eMailValid = false;

let birthDate = id("birthdate");
let birthDateValid = false;

let Quantity = id("quantity");
let QuantityValid = false;

let terms = id("checkbox1");
let termsValid = true;

let formDiv = document.querySelectorAll("formData");

//variables pour message final
let btnValid = document.querySelector("#btn-submit");
let modalBlack = document.querySelector(".modal2");
let msgFinal = document.querySelector(".modal2 p");

let prenom = "";
let cityUs = "";

//variables classes
let classes = (classes) => document.getElementsByClassName(classes);

let msgcss = classes("formData");

/*regex pour definir2 caracteres min +zero chiffre + autorise prénoms composés*/
const nameReGex =
  /^[a-zA-ZéèïîÉÈÎ][a-zA-Zéèêàçîï]+([-'\s][a-zA-ZéèïîÉÈÎ][a-zA-Zéèêàçîï]+)?$/;
// regex email definit ensemble caractères suivi d 1 @ suivi ensemble de caractères suivi d'un point suivui de 2 à 10 caracteres en miniucules
const emailRegex = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
//regex date de naissance  avec limite d'age à la majorité
const birthRegExp = /^(19\d\d|200[0-5])[-](0[1-9]|1[0-2])[-]([012][0-9]|3[01])/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBlack.style.display = "none";
  modalbg.style.display = "block";
}
// Close modal
function modalClose() {
  modalbg.style.display = "none";
}

// validation chaque  champ rempli,format respecté et messages en rapport sur input

firstName.addEventListener("input", validFirst);
//input prénom
function validFirst(e) {
  if (firstName.value.trim() == "") {
    msgcss[0].dataset.error = "merci de renseigner ton prénom";
    msgcss[0].dataset.thanksVisible = false;
    msgcss[0].dataset.errorVisible = true;
    return false;
  } else if (nameReGex.test(firstName.value) == false) {
    msgcss[0].dataset.error = "le prénom doit comporter 2 lettres minimum";
    msgcss[0].dataset.thanksVisible = false;
    msgcss[0].dataset.errorVisible = true;
    return false;
  } else {
    prenom = firstName.value;

    msgcss[0].dataset.thanks = "merci de nous avoir confié ton prénom";
    msgcss[0].dataset.errorVisible = false;
    msgcss[0].dataset.thanksVisible = true;
    firstValid = true;
  }
}

//input nom
lastName.addEventListener("input", validLast);
function validLast(e) {
  if (lastName.value.trim() == "") {
    msgcss[1].dataset.error = "merci de renseigner ton nom";
    msgcss[1].dataset.thanksVisible = false;
    msgcss[1].dataset.errorVisible = true;
    return false;
  } else if (nameReGex.test(lastName.value) == false) {
    msgcss[1].dataset.error = "le nom doit comporter 2 lettres minimum";
    msgcss[1].dataset.thanksVisible = false;
    msgcss[1].dataset.errorVisible = true;
    return false;
  } else {
    msgcss[1].dataset.thanks = "merci de nous avoir confié ton nom";
    msgcss[1].dataset.errorVisible = false;
    msgcss[1].dataset.thanksVisible = true;
    lastValid = true;
  }
}

// input email
eMail.addEventListener("input", validEmail);
function validEmail(e) {
  if (eMail.value.trim() == "") {
    msgcss[2].dataset.error = "merci de renseigner ton E-mail";
    msgcss[2].dataset.thanksVisible = false;
    msgcss[2].dataset.errorVisible = true;
    return false;
  } else if (emailRegex.test(eMail.value) == false) {
    msgcss[2].dataset.error = "ton  E-mail n'a pas le bon format";
    msgcss[2].dataset.thanksVisible = false;
    msgcss[2].dataset.errorVisible = true;
    return false;
  } else {
    msgcss[2].dataset.thanks = "merci de nous avoir confié ton E-mail";
    msgcss[2].dataset.errorVisible = false;
    msgcss[2].dataset.thanksVisible = true;
    eMailValid = true;
  }
}

//test date de naissance et mise en forme message
form.birthdate.addEventListener("input", validBirth);
function validBirth(e) {
  if (birthDate.value.trim() == "") {
    msgcss[3].dataset.error = "merci de renseigner ton âge";
    msgcss[3].dataset.thanksVisible = false;
    msgcss[3].dataset.errorVisible = true;
    return false;
  } else if (birthRegExp.test(birthDate.value) == false) {
    msgcss[3].dataset.error = "ta date de naissance n'a pas le bon format";
    msgcss[3].dataset.thanksVisible = false;
    msgcss[3].dataset.errorVisible = true;
    return false;
  } else {
    msgcss[3].dataset.thanks =
      "merci de nous avoir confié ta date de naissance";
    msgcss[3].dataset.errorVisible = false;
    msgcss[3].dataset.thanksVisible = true;
    birthDateValid = true;
  }
}

//test  et mise en forme nombre tournoi
Quantity.addEventListener("input", validQuantity);
function validQuantity(e) {
  if (Quantity.value.trim() == "") {
    msgcss[4].dataset.error = "merci de renseigner un nombre entre 0 et 99";
    msgcss[4].dataset.thanksVisible = false;
    msgcss[4].dataset.errorVisible = true;
    return false;
  } else if (
    Quantity.value < 0 ||
    Quantity.value > 99 ||
    isNaN(Quantity.value)
  ) {
    msgcss[4].dataset.error = "le nombre doit être compris entre 0 et 99";
    msgcss[4].dataset.thanksVisible = false;
    msgcss[4].dataset.errorVisible = true;
    return false;
  } else {
    msgcss[4].dataset.errorVisible = false;
    msgcss[4].dataset.thanksVisible = true;
    QuantityValid = true;
  }
}
//let quantityInput =Quantity.value;
//const validQuantity = quantityInput.length >0;

//  test boutons radio
let cityChoice = false;
let citiesLoc = document.querySelector("#cities-location");
citiesLoc.addEventListener("click", (e) => {
  if (e.target.classList.contains("checkbox-input")) {
    cityUs = e.target.value;

    msgcss[5].dataset.thanks = "merci pour ton choix";
    msgcss[5].dataset.errorVisible = false;
    msgcss[5].dataset.thanksVisible = true;
    cityChoice = true;
  } else {
    cityChoice = false;
  }
});

// tester les cgu
terms.addEventListener("input", validTerms);

function validTerms() {
  if (terms.checked) {
    msgcss[6].dataset.thanks =
      "merci d'avoir validé les conditions d'utilisation";
    msgcss[6].dataset.errorVisible = false;
    msgcss[6].dataset.thanksVisible = true;
    termsValid = true;
  } else {
    msgcss[6].dataset.error = "champ requis";
    msgcss[6].dataset.thanksVisible = false;
    msgcss[6].dataset.errorVisible = true;
    termsValid = false;
  }
}
// conditionner le submit à tous les autres tests
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
myForm.addEventListener("submit", validate); 
function validate() {
  if (
    firstValid == true &&
    lastValid == true &&
    eMailValid == true &&
    birthDateValid == true &&
    QuantityValid == true &&
    cityChoice == true &&
    termsValid == true
  ) {
    msgcss[8].dataset.errorVisible = false;
    modalBlack.style.display = "block";
    msgFinal.innerHTML =
      "Merci " +
      prenom +
      ", d'avoir validé ta participation pour le tournoi de <br>" +
      cityUs;
    btnValid.value = "Fermer";
    firstValid = false;
    msgcss[0].dataset.thanksVisible = false;
    msgcss[1].dataset.thanksVisible = false;
    msgcss[2].dataset.thanksVisible = false;
    msgcss[3].dataset.thanksVisible = false;
    msgcss[4].dataset.thanksVisible = false;
    msgcss[5].dataset.thanksVisible = false;
    msgcss[6].dataset.thanksVisible = false;
  } else {
    if (!firstValid) {
      msgcss[0].dataset.error = "merci de renseigner ton prénom";
      msgcss[0].dataset.thanksVisible = false;
      msgcss[0].dataset.errorVisible = true;
    }
    if (!lastValid) {
      msgcss[1].dataset.error = "merci de renseigner ton nom";
      msgcss[1].dataset.thanksVisible = false;
      msgcss[1].dataset.errorVisible = true;
    }
    if (!eMailValid) {
      msgcss[2].dataset.error = "merci de renseigner ton E-mail";
      msgcss[2].dataset.thanksVisible = false;
      msgcss[2].dataset.errorVisible = true;
    }
    if (!birthDateValid) {
      msgcss[3].dataset.error = "merci de renseigner ton âge";
      msgcss[3].dataset.thanksVisible = false;
      msgcss[3].dataset.errorVisible = true;
    }
    if (!QuantityValid) {
      msgcss[4].dataset.error = "merci de renseigner un nombre entre 0 et 99";
      msgcss[4].dataset.thanksVisible = false;
      msgcss[4].dataset.errorVisible = true;
    }
    if (!cityChoice) {
      msgcss[5].dataset.error = "merci de cocher ton choix";
      msgcss[5].dataset.thanksVisible = false;
      msgcss[5].dataset.errorVisible = true;
    }
    if (!termsValid) {
      msgcss[6].dataset.error = "champ requis";
      msgcss[6].dataset.thanksVisible = false;
      msgcss[6].dataset.errorVisible = true;
    }
    msgcss[8].dataset.errorVisible = true;
    // msgcss[8].dataset.error = "le formulaire est incomplet. désolé!";
  }
}
console.log(btnValid);
