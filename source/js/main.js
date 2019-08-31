var form = document.querySelector('.feedback__form');
var submit = form.querySelector('.form__submit');
var success = document.querySelector('.success');
var wrong = document.querySelector('.wrong');
var ok = document.querySelector('.wrong__button');
var closeWindow = document.querySelector('.success__button');
var isStorageSupport = true;
var storage = "";
var map = document.querySelector(".map");

if (map) {
  var myMap;
  ymaps.ready(init);

  function init() {
    myMap = new ymaps.Map('map_canvas', {
      center: [59.93863106417265, 30.3230545],
      zoom: 17,
      controls: ['zoomControl'],
    }, {
      searchControlProvider: 'yandex#search'
    });

    myMap.geoObjects
      .add(new ymaps.Placemark([59.93863106417265, 30.3230545], {
        balloonContent: 'цвет <strong>голубой</strong>',
        iconCaption: 'ул. Б. Конюшенная, д. 19/8'
      }, {
        preset: 'islands#dotIconWithCaption',
        iconCaptionMaxWidth: '200'
      }));
  }
}

var nameInput = form.querySelector("[name=name]");
var surnameInput = form.querySelector("[name=surname]");
var phoneInput = form.querySelector("[name=phone]");
var emailInput = form.querySelector("[name=email]");

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

ok.addEventListener("click", function(evt) {
  evt.preventDefault();
  wrong.classList.remove("modal-show");
});

closeWindow.addEventListener("click", function(evt) {
  evt.preventDefault();
  success.classList.remove("modal-show");
});
