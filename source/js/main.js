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


// if (map) {
//   var myMap;
//   ymaps.ready(init);
//
//   function init() {
//     myMap = new ymaps.Map('map_canvas', {
//       center: [59.93863106417265, 30.3230545],
//       zoom: 17,
//       controls: ['zoomControl'],
//     }, {
//       searchControlProvider: 'yandex#search'
//     });
//
//     myMap.geoObjects
//       .add(new ymaps.Placemark([59.93863106417265, 30.3230545], {
//         balloonContent: 'цвет <strong>голубой</strong>',
//         iconCaption: 'ул. Б. Конюшенная, д. 19/8'
//       }, {
//         preset: 'islands#dotIconWithCaption',
//         iconCaptionMaxWidth: '200'
//       }));
//   }
// }

nav.classList.add("menu-hide");

menuOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  nav.classList.remove("menu-hide");
  nav.classList.add("menu-show");
});

menuClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  nav.classList.remove("menu-show");
  nav.classList.add("menu-hide");
});

// var nameInput = document.querySelector("[name=name]");
// var surnameInput = document.querySelector("[name=surname]");
// var phoneInput = document.querySelector("[name=phone]");
// var emailInput = document.querySelector("[name=email]");
//
// try {
//   storage = localStorage.getItem("nameInput");
//   storage = localStorage.getItem("surnameInput");
//   storage = localStorage.getItem("phoneInput");
//   storage = localStorage.getItem("emailInput");
// } catch (err) {
//   isStorageSupport = false;
// }
//
// form.addEventListener("submit", function(evt) {
//   if (!nameInput.value || !surnameInput.value || !phoneInput.value || !emailInput.value) {
//     evt.preventDefault();
//       wrong.classList.add("modal-show");
//   } else {
//     return true;
//     }
// });
//
// ok.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   wrong.classList.remove("modal-show");
// });
//
// closeWindow.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   success.classList.remove("modal-show");
// });
