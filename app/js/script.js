const body = document.querySelector('body')
const btnBurger = document.getElementById('btnBurger');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.header__menu')


btnBurger.addEventListener('click', function () {
   // header.classList.toggle('open')
   body.classList.remove('noscroll')
   if (header.classList.contains('open')) { // close
      header.classList.remove('open')
      overlay.classList.remove('fade-in')
      overlay.classList.add('fade-out')
      burgerMenu.classList.remove('fade-in')
      burgerMenu.classList.add('fade-out')
   } else { // open
      body.classList.add('noscroll')
      header.classList.add('open');
      overlay.classList.remove('fade-out');
      overlay.classList.add('fade-in');
      burgerMenu.classList.remove('fade-out')
      burgerMenu.classList.add('fade-in')
   }
});