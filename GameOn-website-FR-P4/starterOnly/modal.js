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
//function check the form
//check  input validity to true or false + add message

//---- test input prénom et mise en forme message
let firstName = document.getElementById("first");
let firstMesg = document.getElementById("error-first");
//regex pour definir2 caracteres min +zero chiffre + autorise prénoms composés. utilisés pour prénom et pour  nom
const nameReGex =
  /^[a-zA-ZéèïîÉÈÎ][a-zA-Zéèêàçîï]+([-'\s][a-zA-ZéèïîÉÈÎ][a-zA-Zéèêàçîï]+)?$/;
firstName.addEventListener("change", (e) => {
  let firstNameValue = e.target.value;
});
// valider champ rempli,format respecté et messages en rapport sur input
firstName.addEventListener("input", validFirst);
function validFirst(e) {
  if (firstName.value.trim() == "") {
    firstMesg.innerHTML = "merci de renseigner ton prénom";
    firstMesg.classList.remove("valid");
    firstMesg.classList.add("invalid");
    // e.preventDefault();
    return false;
  } else if (nameReGex.test(firstName.value) == false) {
    firstMesg.innerHTML =
      "désolée il faut recommencer, le prénom doit contenir 2 lettres min";
    firstMesg.classList.remove("valid");
    firstMesg.classList.add("invalid");
    // e.preventDefault();
    return false;
  } else {
    firstMesg.innerHTML = "Merci de nous avoir confié ton prénom";
    firstMesg.classList.remove("invalid");
    firstMesg.classList.add("valid");
    return true;
  }
}

//---- test input nom et mise en forme message
let lastName = document.getElementById("last");
let lastMesg = document.getElementById("error-last");
//methode plus simple non utilisée( sans l'attribut html required)
// if (
//   lastNameValue != "" ||
//   lastName.value.trim().length < 2 ||
//   (isNaN(lastName.value) == false)
lastName.addEventListener("input", validLast);
//valider champ rempli avec value missing et required en html
function validLast(e) {
  if (lastName.validity.valueMissing) {
    lastMesg.innerHTML = "merci de renseigner ton nom";
    lastMesg.classList.remove("valid");
    lastMesg.classList.add("invalid");
    e.preventDefault();
    return false;
  } else if (nameReGex.test(lastName.value) == false) {
    lastMesg.innerHTML =
      "désolée il faut recommencer,le nom doit contenir 2 lettres min";
    lastMesg.classList.remove("valid");
    lastMesg.classList.add("invalid");
    e.preventDefault();
    return false;
  } else {
    lastMesg.innerHTML = "Merci de nous avoir confié ton nom";
    lastMesg.classList.remove("invalid");
    lastMesg.classList.add("valid");
    return true;
  }
}

//test input email
let eMail = document.querySelector("#email");
//regex email
const emailRegex = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/g;
let eMailMesg = document.getElementById("error-email");

eMail.addEventListener("input", validEmail);
function validEmail(e) {
  if (eMail.validity.valueMissing) {
    eMailMesg.innerHTML = "Nous aimerions connaitre ton E-mail";
    eMailMesg.classList.remove("valid");
    eMailMesg.classList.add("invalid");
    e.preventDefault();
    return false;
  } else if (emailRegex.test(eMail.value) == false) {
    eMailMesg.innerHTML =
      "désolée il faut recommencer, le format de ton E-mail est incorrect";
    eMailMesg.classList.remove("valid");
    eMailMesg.classList.add("invalid");
    e.preventDefault();
    return false;
  } else {
    eMailMesg.innerHTML = "Merci de nous avoir confié ton E-mail";
    eMailMesg.classList.remove("invalid");
    eMailMesg.classList.add("valid");
    return true;
  }
}

//test date de naissance et mise en forme message
let birthDate = document.getElementById("birthdate");
let birthDateMesg = document.querySelector("#error-birthdate");
const birthRegExp = /^(19\d\d|20[0-5])[-/]([1-9]|1[012])[-/]([12][0-9]|3[01])/;

form.birthdate.addEventListener("input", validBirth);
function validBirth(e) {
  if (birthDate.validity.valueMissing) {
    birthDateMesg.innerHTML = "Nous aimerions connaitre ta date de naissance";
    birthDateMesg.classList.remove("valid");
    birthDateMesg.classList.add("invalid");
    // e.preventDefault();
    return false;
  } else if (birthRegExp.test(birthDate.value) == false) {
    birthDateMesg.innerHTML =
      "désolée il faut recommencer, le format de ta date de naissance est incorrect";
    birthDateMesg.classList.remove("valid");
    birthDateMesg.classList.add("invalid");
    // e.preventDefault();
    return false;
  } else {
    birthDateMesg.innerHTML = "Merci de nous avoir confié ta date de naissance";
    birthDateMesg.classList.remove("invalid");
    birthDateMesg.classList.add("valid");
    return true;
  }
}

//test  et mise en forme nombre tournoi
let quantityTour = document.querySelector("#quantity");
let quantityMesg = document.querySelector("#error-quantity");

quantityTour.addEventListener("checkbox-input", validTournament);
function validTournament(e) {
  let quantityValue = e.checked;
  if (
    (quantityValue =
      "" || quantityValue < 0 || quantityValue > 99 || isNaN(quantityValue))
  ) {
    quantityMesg.innerHTML =
      "désolée  ce format est incorrect,nombre possible de 0 à 99";
    quantityMesg.classList.remove("valid");
    quantityMesg.classList.add("invalid");
    e.preventDefault();
    return false;
  } else {
    quantityMesg.innerHTML = "félicitation, tu es un joueur averti";
    quantityMesg.classList.remove("invalid");
    quantityMesg.classList.add("valid");
    return true;
  }
}

// test boutons radio

const cityLocation = document.querySelectorAll(
  "#cities-location.checkbox-input"
);
let locationMesg = document.getElementById("city-choice");

function validTournament() {
  for (let i = 0; i < cityLocation.length; i++) {
    if (cityLocation[i].checked){
      locationMesg.innerHTML = "Merci d'avoir fait ton choix";
      locationMesg.classList.remove("invalid");
      locationMesg.classList.add("valid");
  return true;
  }else{
      locationMesg.innerHTML = "Tu ne désires pas participer?";
      locationMesg.classList.remove("valid");
      locationMesg.classList.add("invalid");
      return false
  }
  }}
// function

//       return true;
//       locationMesg.innerHTML = "Merci d'avoir fait ton choix";
//       locationMesg.classList.remove("invalid");
//       locationMesg.classList.add("valid");

//     } else {
//       locationMesg.innerHTML = "Tu ne désires pas participer?";
//       locationMesg.classList.remove("valid");
//       locationMesg.classList.add("invalid");
//       return false
//     }
//   }
// }

// let cityLocation = document.getElementsByName("location");
// let locationMesg = document.getElementById("city-choice");
// // while (form.location.checked == null) {
// //   locationMesg.innerHTML = "Tu ne désires pas participer?";
// //   locationMesg.classList.remove("valid");
// //   locationMesg.classList.add("invalid");
// // }
// function citychoice(e) {
//   if (cityLocation.checked) {
//     locationMesg.innerHTML = "Merci d'avoir fait ton choix";
//     locationMesg.classList.remove("invalid");
//     locationMesg.classList.add("valid");
//   } else {
//     e.preventDefault();
//     locationMesg.innerHTML = "Tu ne désires pas participer?";
//     locationMesg.classList.remove("valid");
//     locationMesg.classList.add("invalid");
//   }
// }

//test  conditions uitlisation et mise en forme
https://www.commentcamarche.net/contents/573-javascript-les-evenements#qu-appelle-t-on-un-evenement
function validConditions() {
  let condition = document.querySelector("#checkbox1");
  let condtionMesg = document.getElementById("error-condition");
  const conditionValid = condition.checked;
  condition.addEventListener("click", (e) => {
    console.log(e.target);
  });

  if (conditionValid) {
    condtionMesg.innerHTML =
      "Merci d'avoir validé les conditions d'utilisation";
    condtionMesg.classList.remove("invalid");
    condtionMesg.classList.add("valid");
  } else {
    condtionMesg.innerHTML =
      "merci de prendre connaissance des conditions d'utilisation";
    condtionMesg.classList.remove("valid");
    condtionMesg.classList.add("invalid");
  }


// acceptCondition.addEventListener("input", validConditions);
// function validConditions(e) {
//   let acceptConditionValue = e.target.checked;
//   if (acceptConditionValue == true) {
//     validConditions == true;
//     condtionMesg.innerHTML =
//       "Merci d'avoir validé les conditions d'utilisation";
//     condtionMesg.classList.remove("invalid");
//     condtionMesg.classList.add("valid");
//   } else {
//     e.preventDefault();
//     validConditions == false;
//     condtionMesg.innerHTML =
//       "merci de prendre connaissance des conditions d'utilisation";
//     condtionMesg.classList.remove("valid");
//     condtionMesg.classList.add("invalid");
// }
// }
// ecoute et validation formulaire

let myForm = document.getElementById("reserve");
let btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("submit", function validate(e) {
  e.preventDefault;

  if (
    validFirst(form.first) &&
    validLast(form.last) &&
    validEmail(form.email) &&
    validBirth(form.birthdate) &&
    validTournament(form.quantity)){

    myForm.onsubmit();
  }
});
