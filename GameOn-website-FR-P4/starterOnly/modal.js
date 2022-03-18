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
let firstName = id("first");
let lastName = id("last");
let eMail = id("email");
let birthDate = id("birthdate");
let Quantity = id("quantity");
let terms = id("checkbox1");
//variable undefined
let prenom = "";
//variables classes
let classes = (classes) => document.getElementsByClassName(classes);
let errorMsg = classes("error");
let errorMesg = classes("formData[data-error]");

/*regex pour definir2 caracteres min +zero chiffre + autorise prénoms composés*/
const nameReGex =
  /^[a-zA-ZéèïîÉÈÎ][a-zA-Zéèêàçîï]+([-'\s][a-zA-ZéèïîÉÈÎ][a-zA-Zéèêàçîï]+)?$/;
//regex email
const emailRegex = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
//regex date de naissance pas encore au point
const birthRegExp = /^(19\d\d|20[0-5])[-/]([1-9]|1[012])[-/]([12][0-9]|3[01])/;

// valider champ rempli,format respecté et messages en rapport sur input
firstName.addEventListener("input", validFirst);

function validFirst(e) {
  // prenom = "e.target.value;
  // e.preventDefault();
  if (firstName.value.trim() == "") {
    errorMsg[0].innerHTML = "merci de renseigner ton prénom";
    errorMsg[0].style.color = "red";
    errorMsg[0].classList.add("error");
    return false;
  } else if (nameReGex.test(firstName.value) == false) {
    errorMsg[0].innerHTML = "le prénom doit comporter 2 lettres minimum";
    errorMsg[0].style.color = "red";
    return false;
  } else {
    errorMsg[0].innerHTML = "merci de nous avoir confié ton prénom";
    errorMsg[0].style.color = "green";
    return validFirst;
  }
}

//---- test input nom et mise en forme message

lastName.addEventListener("input", validLast);
//valider champ rempli avec value missing et required en html
function validLast(e) {
  // e.preventDefault();
  if (lastName.value.trim() == "") {
    errorMsg[1].innerHTML = "merci de renseigner ton nom";
    errorMsg[1].style.color = "red";
    errorMsg[1].classList.add("error");
    return false;
  } else if (nameReGex.test(lastName.value) == false) {
    errorMsg[1].innerHTML = "le nom doit comporter 2 lettres minimum";
    errorMsg[1].style.color = "red";
    return false;
  } else {
    errorMsg[1].innerHTML = "merci de nous avoir confié ton nom";
    errorMsg[1].style.color = "green";
    return validLast;
  }
}

//test input email

eMail.addEventListener("input", validEmail);
function validEmail(e) {
  // e.preventDefault();
  if (eMail.value.trim() == "") {
    errorMsg[2].innerHTML = "merci de renseigner ton  E-mail";
    errorMsg[2].style.color = "red";
    errorMsg[2].classList.add("error");
    return false;
  } else if (emailRegex.test(eMail.value) == false) {
    errorMsg[2].innerHTML = " ton  E-mail n'a pas le bon format";
    errorMsg[2].style.color = "red";
    return false;
  } else {
    errorMsg[2].innerHTML = "merci de nous avoir confié ton E-mail";
    errorMsg[2].style.color = "green";
    return validEmail;
  }
}

//test date de naissance et mise en forme message

form.birthdate.addEventListener("input", validBirth);
function validBirth(e) {
  // e.preventDefault();
  if (birthDate.value.trim() == "") {
    errorMsg[3].innerHTML = "merci de renseigner ton âge";
    errorMsg[3].style.color = "red";
    errorMsg[3].classList.add("error");
    return false;
  } else if (birthRegExp.test(birthDate.value) == false) {
    errorMsg[3].innerHTML = "ta date de naissance n'a pas le bon format";
    errorMsg[3].style.color = "red";
    return false;
  } else {
    errorMsg[3].innerHTML = "merci de nous avoir confié ta date de naissance";
    errorMsg[3].style.color = "green";
    return validBirth;
  }
}

//test  et mise en forme nombre tournoi
Quantity.addEventListener("input", validQuantity);
function validQuantity(e) {
  // e.preventDefault();
  if (Quantity.value.trim() == "") {
    errorMsg[4].innerHTML = "merci de renseigner un nombre entre 0 et 99";
    errorMsg[4].style.color = "red";
    errorMsg[4].classList.add("error");
    return false;
  } else if (
    Quantity.value < 0 ||
    Quantity.value > 99 ||
    isNaN(Quantity.value)
  ) {
    errorMsg[4].innerHTML = "le nombre doit être compris entre 0 et 99";
    errorMsg[4].style.color = "red";
    return false;
  } else {
    return validQuantity;
  }
}
let formDiv = document.querySelectorAll("formData");
// // test boutons radio
let cityChoice = document.querySelectorAll(".checkbox-input");
let cityUs = "";
cityChoice.forEach((city) => {
  city.addEventListener("click", (e) => {
    cityUs = e.target.value;

    return true;
  });
});
function validTerms() {
  if (!checkbox1.checked) {
    errorMsg[6].innerHTML = "champ requis";
    errorMsg[6].style.color = "red";
    errorMsg[6].classList.add("error");
  } else {
    return validTerms;
  }
}
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
myForm.addEventListener("submit", validate);
function validate() {
  if (
    validFirst(form.first) == false &&
    validLast(form.last) == false &&
    validEmail(form.email) == false &&
    validBirth(form.birthdate) == false &&
    validQuantity(form.quantity) == false &&
    // cityChoice(city) == false &&
    validTerms(terms) == false
  ) {
    errorMsg[6].innerHTML = "le formulaire est incomplet. désolé!";
    errorMsg[6].style.color = "red";
    errorMsg[6].classList.add("error");
  } else {
    errorMsg[6].innerHTML =
      "merci " + prenom + " pour ton inscription pour le tournoi de " + cityUs;
    errorMsg[6].style.color = "green";
    return validate;
  }
}
