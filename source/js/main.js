var form = document.querySelector('.feedback__form');
var submit = document.querySelector('.form__submit');
var success = document.querySelector('.success');
var wrong = document.querySelector('.wrong');
var ok = document.querySelector('.wrong__button');
var closeWindow = document.querySelector('.success__button');
var isStorageSupport = true;
var storage = "";
var map = document.querySelector('.map');
var nav = document.querySelector('.main-nav');
var menuClose = document.querySelector('.main-nav__close');
var menuOpen = document.querySelector('.header-wrapper__nav-open');

var nameInput = document.querySelector("[name=name]");
var surnameInput = document.querySelector("[name=surname]");
var phoneInput = document.querySelector("[name=phone]");
var emailInput = document.querySelector("[name=email]");

try {
  storage = localStorage.getItem("nameInput");
  storage = localStorage.getItem("surnameInput");
  storage = localStorage.getItem("phoneInput");
  storage = localStorage.getItem("emailInput");
} catch (err) {
  isStorageSupport = false;
}

form.addEventListener("submit", function(evt) {
  if (!nameInput.value || !surnameInput.value || !phoneInput.value || !emailInput.value) {
    evt.preventDefault();
      wrong.classList.add("modal-show");
  } else {
    return true;
    }
});
