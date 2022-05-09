
const btnBurger = document.getElementById('btnBurger');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header');


btnBurger.addEventListener('click', function () {
   // header.classList.toggle('open')
   if (header.classList.contains('open')) { // close
      header.classList.remove('open')
      overlay.classList.remove('fade-in')
      overlay.classList.add('fade-out')
   } else { // open
      header.classList.add('open');
      overlay.classList.remove('fade-out')
      overlay.classList.add('fade-in')
   }
});