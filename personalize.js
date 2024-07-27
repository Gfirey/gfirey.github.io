(function() {

   var person = location.href.split('=')[1];

   var persons = {
      0: 'Дорогой Гость!',
      1: 'Дорогая МАМА!',
      2: 'Дорогой ПАПА!',
      3: 'Дорогой Брат!',
      4: 'Дорогая Света!',
      5: 'Дорогой Гость!',
      15: 'Ваня!',
   };
   document.getElementById("personalizeText").innerText = persons[+person || + 0 ];

}());
