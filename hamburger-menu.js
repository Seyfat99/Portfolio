
var hamburgerNav = document.querySelector('.hamburger-nav');
var selectHamburger = document.querySelector('.hamburger');

selectHamburger.addEventListener('click', function() {
    hamburgerNav.classList.toggle('open');
});            

//Form Validation

function formValidate() {

    firstLastName();
    email();
}

function firstLastName () {

    var firstName = document.myForm.firstName.value;
    var lastName = document.myForm.lastName.value;

    if (firstName === "" || lastName === "") {
        alert('First And Last Name Is Required');
        return false;
    }
    
}
function email () {

    var email = document.myForm.email.value;

    if (email === "") {
        alert('Email Is Required');
        return false;
    }
}
