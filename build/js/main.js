var form = document.querySelector('.feedback__form');
var submit = document.querySelector('.form__submit');
var success = document.querySelector('.success');
var wrong = document.querySelector('.wrong');
var okButton = document.querySelector('.wrong__button');
var closeWindow = document.querySelector('.success__button');
var isStorageSupport = true;
var storage = "";
var map = document.querySelector('.map');
var nav = document.querySelector('.main-nav');
var menuClose = document.querySelector('.main-nav__close');
var menuOpen = document.querySelector('.header-wrapper__nav-open');

nav.classList.add('no-js');

menuOpen.addEventListener('click', function(evt) {
  evt.preventDefault();
  nav.classList.remove('popup__hide');
  nav.classList.add('popup__show');
  menuOpen.classList.add('popup__hide');
});

menuClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  nav.classList.remove('popup__show');
  nav.classList.add('popup__hide');
  menuOpen.classList.remove('popup__hide');
});

var nameInput = document.querySelector('[name=name]');
var surnameInput = document.querySelector('[name=surname]');
var phoneInput = document.querySelector('[name=number]');
var emailInput = document.querySelector('[name=email]');

try {
  storage = localStorage.getItem('nameInput');
  storage = localStorage.getItem('surnameInput');
  storage = localStorage.getItem('phoneInput');
  storage = localStorage.getItem('emailInput');
} catch (err) {
  isStorageSupport = false;
}

form.addEventListener('submit', function(evt) {
  if (!nameInput.value || !surnameInput.value || !phoneInput.value || !emailInput.value) {
    evt.preventDefault();
    wrong.classList.add('popup__show');
  } else {
    return true;
  }
});

okButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  wrong.classList.remove('popup__show');
  wrong.classList.add('popup__hide');
});
