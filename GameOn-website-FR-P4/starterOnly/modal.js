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
//function check the formvalidity
const firstName = document.getElementById("first");
firstName.addEventListener("input", (e) => {
  console.log(e.target.value);
});

// function checkFistName() {}

// function checkLastName() {
//   const lastName = document.getElementById("last");
// }

// function checkBirthDate() {
//   const birthDate = document.getElementById("birthdate");
// }

// function checkEmail() {
//   const eMail = document.getElementById("email");
// }

console.log(formData);
