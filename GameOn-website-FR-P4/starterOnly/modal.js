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
// console.log(form.email);form.name de input pour y acceder
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Close modal
function modalClose() {
  modalbg.style.display = "none";
}
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
let termsValid = false;
//variable undefined pour message final
let prenom = "";
let cityUs = "";

//variables classes
let classes = (classes) => document.getElementsByClassName(classes);
let errorMsg = classes("error");
let msgcss = document.getElementsByClassName("formData");
let errorMesg = classes("formData[data-error]");
let errorM = document.querySelector(".formData");
console.log(msgcss);

/*regex pour definir2 caracteres min +zero chiffre + autorise prénoms composés*/
const nameReGex =
  /^[a-zA-ZéèïîÉÈÎ][a-zA-Zéèêàçîï]+([-'\s][a-zA-ZéèïîÉÈÎ][a-zA-Zéèêàçîï]+)?$/;
//regex email
const emailRegex = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
//regex date de naissance pas encore au point
const birthRegExp = /^(19\d\d|20[0-5])[-/]([1-9]|1[012])[-/]([12][0-9]|3[01])/;

// valider champ rempli,format respecté et messages en rapport sur input
// errorM.dataset.error = "coucou";
// errorM.dataset.errorVisible = true;
firstName.addEventListener("input", validFirst);

function validFirst(e) {
  if (firstName.value.trim() == "") {
    msgcss[0].dataset.error = "merci de renseigner ton prénom";
    msgcss[0].dataset.errorVisible = true;
    // errorMsg[0].innerHTML = "merci de renseigner ton prénom";
    // errorMsg[0].style.color = "red";
    // errorMsg[0].classList.add("error");
    return false;
  } else if (nameReGex.test(firstName.value) == false) {
    // errorMsg[0].innerHTML = "le prénom doit comporter 2 lettres minimum";
    // errorMsg[0].style.color = "red";
    msgcss[0].dataset.error = "le prénom doit comporter 2 lettres minimum";
    msgcss[0].dataset.errorVisible = true;
    return false;
  } else {
    prenom = firstName.value;
    // errorMsg[0].innerHTML = "merci de nous avoir confié ton prénom";
    // errorMsg[0].style.color = "green";
    msgcss[0].dataset.thanks = "merci de nous avoir confié ton prénom";
    msgcss[0].dataset.thanksVisible = true;
    firstValid = true;
  }
}

//---- test input nom et mise en forme message

lastName.addEventListener("input", validLast);
//valider champ rempli avec value missing et required en html
function validLast(e) {
  if (lastName.value.trim() == "") {
    // errorMsg[1].innerHTML = "merci de renseigner ton nom";
    // errorMsg[1].style.color = "red";
    // errorMsg[1].classList.add("error");
    msgcss[1].dataset.error = "merci de renseigner ton nom";
    msgcss[1].dataset.errorVisible = true;
    return false;
  } else if (nameReGex.test(lastName.value) == false) {
    // errorMsg[1].innerHTML = "le nom doit comporter 2 lettres minimum";
    // errorMsg[1].style.color = "red";
    msgcss[1].dataset.error = "le nom doit comporter 2 lettres minimum";
    msgcss[1].dataset.errorVisible = true;
    return false;
  } else {
    // errorMsg[1].innerHTML = "merci de nous avoir confié ton nom";
    // errorMsg[1].style.color = "green";
    msgcss[1].dataset.thanks = "merci de nous avoir confié ton nom";
    msgcss[1].dataset.thanksVisible = true;
    lastValid = true;
  }
}

//test input email

eMail.addEventListener("input", validEmail);
function validEmail(e) {
  if (eMail.value.trim() == "") {
    // errorMsg[2].innerHTML = "merci de renseigner ton  E-mail";
    // errorMsg[2].style.color = "red";
    // errorMsg[2].classList.add("error");
    msgcss[2].dataset.error = "merci de renseigner ton E-mail";
    msgcss[2].dataset.errorVisible = true;
    return false;
  } else if (emailRegex.test(eMail.value) == false) {
    // errorMsg[2].innerHTML = " ton  E-mail n'a pas le bon format";
    // errorMsg[2].style.color = "red";
    msgcss[2].dataset.error = "ton  E-mail n'a pas le bon format";
    msgcss[2].dataset.errorVisible = true;
    return false;
  } else {
    // errorMsg[2].innerHTML = "merci de nous avoir confié ton E-mail";
    // errorMsg[2].style.color = "green";
    msgcss[2].dataset.thanks = "merci de nous avoir confié ton E-mail";
    msgcss[2].dataset.thanksVisible = true;

    eMailValid = true;
  }
}

//test date de naissance et mise en forme message

form.birthdate.addEventListener("input", validBirth);
function validBirth(e) {
  if (birthDate.value.trim() == "") {
    // errorMsg[3].innerHTML = "merci de renseigner ton âge";
    // errorMsg[3].style.color = "red";
    // errorMsg[3].classList.add("error");
    msgcss[3].dataset.error = "merci de renseigner ton âge";
    msgcss[3].dataset.errorVisible = true;
    return false;
  } else if (birthRegExp.test(birthDate.value) == false) {
    // errorMsg[3].innerHTML = "ta date de naissance n'a pas le bon format";
    // errorMsg[3].style.color = "red";
    msgcss[3].dataset.error = "ta date de naissance n'a pas le bon format";
    msgcss[3].dataset.errorVisible = true;
    return false;
  } else {
    // errorMsg[3].innerHTML = "merci de nous avoir confié ta date de naissance";
    // errorMsg[3].style.color = "green";
    msgcss[3].dataset.thanks =
      "merci de nous avoir confié ta date de naissance";
    msgcss[3].dataset.thanksVisible = true;
    birthDateValid = true;
  }
}

//test  et mise en forme nombre tournoi
Quantity.addEventListener("input", validQuantity);
function validQuantity(e) {
  if (Quantity.value.trim() == "") {
    // errorMsg[4].innerHTML = "merci de renseigner un nombre entre 0 et 99";
    // errorMsg[4].style.color = "red";
    // errorMsg[4].classList.add("error");
    msgcss[4].dataset.error = "merci de renseigner un nombre entre 0 et 99";
    msgcss[4].dataset.errorVisible = true;
    return false;
  } else if (
    Quantity.value < 0 ||
    Quantity.value > 99 ||
    isNaN(Quantity.value)
  ) {
    // errorMsg[4].innerHTML = "le nombre doit être compris entre 0 et 99";
    // errorMsg[4].style.color = "red";
    msgcss[4].dataset.error = "le nombre doit être compris entre 0 et 99";
    msgcss[4].dataset.errorVisible = true;
    return false;
  } else {
    // errorMsg[4].innerHTML = "merci de nous avoir confié le nombre de tournois";
    // errorMsg[4].style.color = "green";
    msgcss[4].dataset.thanks =
      "merci de nous avoir confié le nombre de tournois";
    msgcss[4].dataset.thanksVisible = true;
    QuantityValid = true;
  }
}
let formDiv = document.querySelectorAll("formData");
// // test boutons radio
let cityChoice = false;
let citiesLoc = document.querySelector("#cities-location");
citiesLoc.addEventListener("click", (e) => {
  if (e.target.classList.contains("checkbox-input")) {
    cityUs = e.target.value;
    msgcss[5].dataset.error = "merci de cocher ton choix";
    msgcss[5].dataset.errorVisible = true;
  } else {
    msgcss[5].dataset.thanks = "merci de nous avoir confié ton choix";
    msgcss[5].dataset.thanksVisible = true;
    cityChoice = true;
  }
});

// tester les cgu
terms.addEventListener("input", validTerms);

function validTerms() {
  if (!checkbox1.checked) {
    // errorMsg[6].innerHTML = "champ requis";
    // errorMsg[6].style.color = "red";
    // errorMsg[6].classList.add("error");
    msgcss[6].dataset.error = "champ requis";
    msgcss[6].dataset.errorVisible = true;
  } else {
    termsValid = true;
  }
}
// conditionner le submit à tous les autres tests
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
myForm.addEventListener("submit", validate);
function validate() {
  if (
    firstValid == false ||
    lastValid == false ||
    eMailValid == false ||
    birthDateValid == false ||
    QuantityValid == false ||
    cityChoice == false ||
    termsValid == false
  ) {
    // errorMsg[6].innerHTML = "le formulaire est incomplet. désolé!";
    // errorMsg[6].style.color = "red";
    // errorMsg[6].classList.add("error");
    msgcss[7].dataset.thanks =
      "merci " + prenom + " pour ton inscription pour le tournoi de " + cityUs;
    msgcss[7].dataset.thanksVisible = true;
    return true;
  } else {
    // errorMsg[6].innerHTML =
    //   "merci " + prenom + " pour ton inscription pour le tournoi de " + cityUs;
    // errorMsg[6].style.color = "green";
    msgcss[7].dataset.error = "le formulaire est incomplet. désolé!";
    msgcss[7].dataset.errorVisible = true;
  }
}
