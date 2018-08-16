
//Display hamburger menu on click
var hamburgerNav = document.querySelector(".hamburger-nav");
var selectHamburger = document.querySelector(".hamburger");

selectHamburger.addEventListener("click", function() {
  hamburgerNav.classList.toggle("open");
});

//Form Validation

document.myForm.onsubmit = function(e) {
  firstLastName();
  email();
  e.preventDefault();
};

function firstLastName() {
  var firstName = document.myForm.firstName.value;
  var lastName = document.myForm.lastName.value;

  if (firstName === "" || lastName === "") {
    alert("First And Last Name Is Required");
    return false;
  }

  if (firstName.length <= 1) {
    alert("First Name is too short");
    return false;
  }

  if (lastName.length <= 1) {
    alert("Last Name is too short");
    return false;
  }
}
function email() {
  var email = document.myForm.email.value;
  // var emailRegex = /[a-z]{2,10}@[a-z]{2,10}.[a-z]{2,3}/i;

  if (email === "") {
    alert("Email Is Required");
    return false;
  }
  // else if(emailRegex.test(email)) {
  //     alert('please enter a valid email');
  //     return false;
  // }
}
