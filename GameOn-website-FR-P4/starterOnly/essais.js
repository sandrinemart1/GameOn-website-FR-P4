function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  // function validate(){
  //   //si la valeur du prenom est juste
  //   if(){
  //     return true;
  //   }
  //   else{
  //     //sinon on affiche le message
  //     alert(" n'oubliez pas de saisir votre prénom");
  //     //on indique de ne pas envoyer le formulaire
  //     return false;
  //   }
  // }
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
  // //function take the data
  
 
  
  // firstName.addEventListener("input", (e) => {
  //   first = e.target.value;
  // });
  // firstName.addEventListener("submit", function (e) {
  //   if ((first.value.trim() = "")) {
  //     let errorFirstName = document.getElementById("error-first");
  //     errorFirstName.innerHTML = "veuillez renseigner votre prénom";
  //     errorFirstName.style.color = "red";
  //     e.preventDefault();
  //   }
    // else if 
    //   {myRegexWord.test(first.value) = false {
    //     let errorFirstName = document.getElementById("error-first");
    //   errorFirstName.innerHTML = "Le nom doit se composer  de lettres et de tirets uniquement, 2 au minimum";
    //   errorFirstName.style.color = "red";
    //   e.preventDefault();
    //   }}
  // });
  // console.log(first);
  
  // const lastName = document.getElementById("last");
  // let last = "";
  
  // lastName.addEventListener("input", (e) => {
  //   last = e.target.value;
  //   console.log(last);
  // });
  
  // // const firstName = document.getElementById("first");
  // // let first = "";
  // // firstName.addEventListener("input", (e) => {
  // //   first = e.target.value;
  // //   console.log(first);
  // // });
  // // const firstName = document.getElementById("first");
  // // let first = "";
  // // firstName.addEventListener("input", (e) => {
  // //   first = e.target.value;
  // //   console.log(first);
  // // });
  
  // // function checkFirstName() {}
  
  // // function checkLastName() {
  // //   const lastName = document.getElementById("last");
  // // }
  
  // // function checkBirthDate() {
  // //   const birthDate = document.getElementById("birthdate");
  // // }
  
  // // function checkEmail() {
  // //   const eMail = document.getElementById("email");
  // // }
  
  // console.log(formData);
  // ---------------fonction form reste rempli+ cgvcheched
  // const form = document.querySelector("form");
  // // console.log(form);
  // // console.log(checkbox1.checked);
  
  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   if (checkbox1.checked) {
  //     document.querySelector("form>div").innerHTML = `
  //     <h3>Merci ${first},</h3>
  //     <p> Votre réservation  a bien été reçue </p>
  //     `;
  //   } else {
  //     alert("veuillez accepter les conditions d'utilisation");
  //   }
  // });
  
  //-----------form check
  const form = document.querySelector("#reserve");
  const firstNameValue =document.getElementById("first").value;
  const firstErrorMesg =document.getElementById("error-first");
  let nameRegExp =new RegExp ('^[a-zA-Z]{2,}','g');
  /[a-zA-Z]{2,}/.test (firstNameValue):
  
  function nameValidity (
    {
  
    }
  )
  
  
  
  // // const form = document.querySelector("#reserve");
  // // console.log(form);
  // // console.log(form.email); attraper input avec .name
  // //ecouter la rentree sur email
  // form.email.addEventListener("input", function() {
  //   validEmail(this);
  // });
  // const validEmail = function(inputEmail){
  //   //creation regexp pour email
  //   let emailregExp = new RegExp(
  //    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2-10}$','g'
  //   );
  
  //   let testEmail= emailregExp.test(inputEmail.value);
  //   let messageSpan = document.querySelector("#error-email");
  
  
  // if (testEmail){
  //   messageSpan.innerHTML="Adresse valide";
  // } else{
  //   messageSpan.innerHTML= "Adresse non valide";
  // }
  
  // };
  
  //test date de naissance et mise en forme message
let birthDateMesg = document.querySelector("#error-birthdate");

form.birthdate.addEventListener("change", (e) => {
  validBirthdate(this);
});
const validBirthdate = function (inputBirthdate) {
  let birthdateRegExp = new RegExp(
    "^d{4^}[/-](0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])$",
    "g"
  );
  let testBirthdate = birthdateRegExp.test(inputBirthdate.value);
if ((testBirthdate = true)) {
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

// let regExBirthdate = new RegExp(
//   "^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]d{4}$"
// );

// let birthDate = document.querySelector("#birthdate");
// birthDate.addEventListener("input", (e) => {
//   // let birthDateInput = e.target.value;
//   let birthDateValue = e.target.value;
//   let isValidBirthdate = regExBirthdate.test(birthDateValue);
//   // console.log(isValidBirthdate);
//   if (isValidBirthdate == true) {
//     birthDate == true;
//     birthDateMesg.innerHTML = "Merci de nous avoir confié ta date de naissance";
//     birthDateMesg.classList.remove("invalid");
//     birthDateMesg.classList.add("valid");
//   } else {
//     e.preventDefault();
//     birthDate == false;
//     birthDateMesg.innerHTML = "Nous aimerions connaitre ta date de naissance";
//     birthDateMesg.classList.remove("valid");
//     birthDateMesg.classList.add("invalid");
//   }
// });

  https://www.youtube.com/watch?v=CreEhp8I-XA
  
  
  // form.addEventListener("submit",(e) =>{
  //   let error;
  //   const firstName = document.getElementById("first");
  //   const lastName = document.getElementById("last");
  //   const birthDate = document.getElementById("birthdate");
  //   const eMail = document.getElementById("email");
  //   const check =document.getElementById("quantity");
  
  //   if(check.value =="") {
  //     error="veuillez selectionner un champ";
  //   }
  //   if(eMail.value =="") {
  //     error="veuillez renseigner votre email";
  //   }
  //   if(birthDate.value =="") {
  //     error="veuillez renseigner votre date de naissance";
  //   }
  //   if(lastName.birthdate =="") {
  //     error="veuillez renseigner votre nom";
  //   }
  //   if(firstName.value =="") {
  //     error="veuillez renseigner votre prénom";
  //   }
  //   if(error){
  //     e.preventDefault();
  //     document.getElementById("error").innerHTML =erreur;
  //     return false;
  //   }else {
  //     alert("votre inscription est enregistrée")
  //   }
     
  // });
  
  