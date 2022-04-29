
const btnBurger = document.getElementById('btnBurger');
const overlay = document.getElementById('overlay');
const header = document.querySelector('.header');


btnBurger.addEventListener('click', function () {
   // header.classList.toggle('open')
   // overlay.classList.toggle('overlay')
   if (header.classList.contains('open')) {
      header.classList.remove('open')
      // overlay.classList.remove('overlay')
   } else {
      header.classList.add('open');
      // overlay.classList.add('overlay')
   }
});