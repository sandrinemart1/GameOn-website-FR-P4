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

firstName.addEventListener("input", (e) => {
  let firstNameValue = e.target.value;
  if (firstNameValue != "" && firstNameValue.trim().length >= 2) {
    firstName == true;
    firstMesg.innerHTML = "Merci de nous avoir confié ton prénom";
    firstMesg.classList.remove("invalid");
    firstMesg.classList.add("valid");
  } else {
    e.preventDefault();
    firstName == false;
    firstMesg.innerHTML = "Nous aimerions connaitre ton prénom";
    firstMesg.classList.remove("valid");
    firstMesg.classList.add("invalid");
  }
});

function valid() {
  let valiBtn = document.getElementById("btn-submit");

  valiBtn.addEventListener("click", validEach);
  function validEach(e) {
    console.log(e);
    if (firstNameValue.validity.valueMissing) {
      e.preventDefault();
      firstMesg.innerHTML = "Nous aimerions connaitre ton prénom";
      firstMesg.classList.remove("valid");
      firstMesg.classList.add("invalid");
    }
  }
}
//---- test input nom et mise en forme message
let lastName = document.getElementById("last");
let lastMesg = document.getElementById("error-last");

lastName.addEventListener("input", (e) => {
  let lastNameValue = e.target.value;
  if (lastNameValue != "" && lastNameValue.trim().length >= 2) {
    lastName = true;
    lastMesg.innerHTML = "Merci de nous avoir confié ton nom";
    lastMesg.classList.remove("invalid");
    lastMesg.classList.add("valid");
  } else {
    e.preventDefault();
    lastName = false;
    lastMesg.innerHTML = "Nous aimerions connaitre ton prénom";
    lastMesg.classList.remove("valid");
    lastMesg.classList.add("invalid");
  }
});
function validLastName() {
  if ((lastName = true)) {
    return true;
  } else {
    return false;
  }
}
let eMail = document.querySelector("#email");
const emailRegExp = new RegExp(
  "^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$",
  "g"
);
let emailReg = ("^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}(a-z]{2,10}$", "g");
let eMailMesg = document.getElementById("error-email");

eMail.addEventListener("input", (e) => {
  let emailValue = e.target.value;
  let validEmail = emailRegExp.test(emailValue);
  if (form.email.value != "" && form.email.value.match(emailReg)) {
    eMail == true;
    eMailMesg.innerHTML = "Merci de nous avoir confié ton E-mail";
    eMailMesg.classList.remove("invalid");
    eMailMesg.classList.add("valid");
  } else {
    e.preventDefault();
    eMail == false;
    eMailMesg.innerHTML = "Nous aimerions connaitre ton E-mail";
    eMailMesg.classList.remove("valid");
    eMailMesg.classList.add("invalid");
  }
});

// form.email.addEventListener("change", function () {
//   validEmail(this);
// });
// const validEmail = function (inputEmail) {
//   let emailRegExp = new RegExp(
//     "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}(a-z]{2,10}$ ",
//     "g"
//   );
//   let testEmail = emailRegExp.test(inputEmail.value);
//   if (testEmail == true) {
//     eMailMesg.innerHTML = "Merci de nous avoir confié ton E-mail";
//     eMailMesg.classList.remove("invalid");
//     eMailMesg.classList.add("valid");
//     return true;
//   } else {
//     e.preventDefault();

//     eMailMesg.innerHTML = "Nous aimerions connaitre ton E-mail";
//     eMailMesg.classList.remove("valid");
//     eMailMesg.classList.add("invalid");
//     return false;
//   }
// };

//test date de naissance et mise en forme message
let birthDateMesg = document.querySelector("#error-birthdate");

form.birthdate.addEventListener("change", (e) => {
  validBirthdate(form.birthdate);
});
const validBirthdate = function (inputBirthdate) {
  // let birthdateRegExp = new RegExp(
  //   "^d{4^}[/-](0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])$",
  //   "g"
  let birthdateRegExp = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  let testBirthdate = birthdateRegExp.test(inputBirthdate.value);
  if (form.birthdate.value != "" && (testBirthdate = true)) {
    birthDateMesg.innerHTML = "Merci de nous avoir confié ta date de naissance";
    birthDateMesg.classList.remove("invalid");
    birthDateMesg.classList.add("valid");
  } else {
    e.preventDefault();
    birthDateMesg.innerHTML = "Nous aimerions connaitre ta date de naissance";
    birthDateMesg.classList.remove("valid");
    birthDateMesg.classList.add("invalid");
  }
};

//test  et mise en forme nombre tournoi
let quantityTour = document.querySelector("#quantity");
let quantityMesg = document.querySelector("#error-quantity");

quantityTour.addEventListener("input", (e) => {
  let quantityValue = e.target.value;
  if (quantityValue != "" && quantityValue >= 0 && quantityValue <= 99) {
    quantity == true;
    quantityMesg.innerHTML = "félicitations, tu es un joueur averti";
    quantityMesg.classList.remove("invalid");
    quantityMesg.classList.add("valid");
  } else if ((quantityValue = "")) {
    quantity = false;
    quantityMesg.innerHTML = "Nous aimerions mesurer ton talent";
    quantityMesg.classList.remove("valid");
    quantityMesg.classList.add("invalid");
  }
});
// function tournamentCount(){
// }
// test boutons radio
// let logCity = document.querySelector("#log-radio");
// form.location.addEventListener("input", (e) => {
//   console.log(e);
// });

//test  conditions uitlisation et mise en forme
let acceptCondition = document.querySelector("#checkbox1");
let condtionMesg = document.getElementById("error-condition");

acceptCondition.addEventListener("input", (e) => {
  let acceptConditionValue = e.target.checked;
  if (acceptConditionValue == true) {
    acceptCondition == true;
    condtionMesg.innerHTML =
      "Merci d'avoir validé les conditions d'utilisation";
    condtionMesg.classList.remove("invalid");
    condtionMesg.classList.add("valid");
  } else {
    e.preventDefault();
    acceptCondition == false;
    condtionMesg.innerHTML =
      "merci de prendre connaissance des conditions d'utilisation";
    condtionMesg.classList.remove("valid");
    condtionMesg.classList.add("invalid");
  }
});
// ecoute et validation formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validEmail(form.email)) {
  }
});
// let btnSubmit = document.getElementById("btn-submit");

//https://www.youtube.com/watch?v=CreEhp8I-XA WeFormYou
