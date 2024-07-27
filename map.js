let center = [60.191474,29.654065];

function init() {
   let myMap = new ymaps.Map('map', {
      center: center,
      zoom: 18
   });

   myMap.geoObjects.add(
      new ymaps.Placemark([60.191474,29.654065], {
         iconCaption: 'Ждём вас тут!'
      }, {
         preset: 'islands#greenDotIconWithCaption'
      }))

}

ymaps.ready(init);
