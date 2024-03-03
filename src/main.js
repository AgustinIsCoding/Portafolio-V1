'use strict'

const typed = new Typed('.typed', {
  strings: [
    "Soy un ingeniero de software",
    "Amante de la programación y todas sus ramas",
    "Soy Agustín Rodrigues @AgustinIsCoding"
  ],
  typeSpeed: 50,
  startDelay: 250,
  backSpeed: 40,
  shuffle: false,
  backDelay: 1500,
  loop: false,
  showCursor: true,
  cursorChar: '_',
  showCursor: false
});

const typed2 = new Typed('#form-name', {
  strings: ['Agustín Rodrigues'],
  typeSpeed: 70,
  startDelay: 300,
  backSpeed: 58,
  backDelay: 1500,
  loop: true,
  loopCount: 2,
  showCursor: false,
  attr: 'placeholder',
  bindInputFocusEvents: true,
})

const typed3 = new Typed('#form-email', {
  strings: ['mackelmore4ever@gmail.com'],
  typeSpeed: 70,
  startDelay: 300,
  backSpeed: 58,
  backDelay: 1500,
  loop: true,
  loopCount: 2,
  showCursor: false,
  attr: 'placeholder',
  bindInputFocusEvents: true,
})

const typed4 = new Typed('#form-message', {
  strings: ['Message...'],
  typeSpeed: 70,
  startDelay: 300,
  backSpeed: 58,
  backDelay: 1500,
  loop: true,
  loopCount: 2,
  showCursor: false,
  attr: 'placeholder',
  bindInputFocusEvents: true,
})

const menuItem = document.querySelectorAll('ul li a');
menuItem.forEach(element => {
  element.addEventListener('click', function () {
    menuItem.forEach(list => list.classList.remove('is-active'));

    this.classList.add('is-active');
  })
})