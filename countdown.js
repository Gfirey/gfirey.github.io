(function() {
   const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

   const decCases = [2, 0, 1, 1, 1, 2];
   const skl = (number, titles) => {
      return titles[number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)]]
   }
   const countDown = new Date("2024/08/31 16:00:00").getTime(),
      x = setInterval(function() {

         const now = new Date().getTime();
         const distance = countDown - now;

         const days = Math.floor(distance / (day));
         const hours = Math.floor((distance % (day)) / (hour));
         const minutes = Math.floor((distance % (hour)) / (minute));
         const seconds = Math.floor((distance % (minute)) / second);
         document.getElementById("days").innerText = days;
         document.getElementById("hours").innerText = hours;
         document.getElementById("minutes").innerText = minutes;
         document.getElementById("seconds").innerText = seconds;



         document.getElementById("days_label").innerText = skl(days, ['День', 'Дня', 'Дней']);
         document.getElementById("hours_label").innerText = skl(hours, ['Час', 'Часа', 'Часов']);
         document.getElementById("minutes_label").innerText = skl(minutes, ['Минута', 'Минуты', 'Минут']);
         document.getElementById("seconds_label").innerText = skl(seconds, ['Секунда', 'Секунды', 'Секунд']);
      }, 0)
}());
