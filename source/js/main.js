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
