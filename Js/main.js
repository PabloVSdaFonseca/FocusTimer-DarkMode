import Sound from "./sounds.js";

const sound = Sound();
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonPlus = document.querySelector('.plus');
const buttonMinus = document.querySelector('.minus');
let minutes = Number(minutesDisplay.textContent);
let timerTimeOut;
const cardForest = document.querySelector('.forest');
const cardRain = document.querySelector('.rain');
const cardCoffeeShop = document.querySelector('.coffeeShop');
const cardFire = document.querySelector('.fire');
const buttonLight = document.querySelector('.light');
const buttonDark = document.querySelector('.dark');
const body = document.querySelector('body');

const volForest = document.querySelector('#input-forest')
const volRain = document.querySelector('#input-rain')
const volStore = document.querySelector('#input-store')
const volFire = document.querySelector('#input-fire')

function updateTimer(minutes, seconds) { 
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
};

function countDown() {
timerTimeOut = setTimeout(function() {

let minutes = Number(minutesDisplay.textContent);
let seconds = Number(secondsDisplay.textContent);

if (minutes <= 0 && seconds <= 0) {
  sound.timeEnd();
  return;
};

if (seconds <= 0) {
  seconds = 60;
  minutesDisplay.textContent = String(minutes - 1).padStart(2, "0");
};

secondsDisplay.textContent = String(seconds - 1).padStart(2, "0"); 

countDown();

},1000);
};

function stopTimer() {
  clearTimeout(timerTimeOut);
  updateTimer(minutes, 0);
}

/* -- controls -- */
buttonPlay.addEventListener('click', () => {
  countDown();
  sound.pressButton();
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
});

buttonPause.addEventListener('click', () => {
  sound.pressButton();
  clearTimeout(timerTimeOut);
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
});

buttonStop.addEventListener('click', () => {
  sound.pressButton();
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  stopTimer();
});

buttonPlus.addEventListener('click', () => {
  sound.pressButton();
  minutesDisplay.textContent = String(minutes += 5).padStart(2, "0");
});

buttonMinus.addEventListener('click', () => {
  sound.pressButton();
  if (minutes > 0) {
    minutesDisplay.textContent = String(minutes -= 5).padStart(2, "0");;
  };
});

/* -- Cards -- */
function resetCards() {
  cardForest.classList.remove('selected');
  cardRain.classList.remove('selected');
  cardCoffeeShop.classList.remove('selected');
  cardFire.classList.remove('selected');
};

cardForest.addEventListener('click', () => {
  sound.soundsOff();
  sound.soundForest.play();
  let cardSelected = cardForest.classList.contains('selected');

  resetCards();
  cardForest.classList.add('selected');

  if(cardSelected) {
    cardForest.classList.remove('selected');
    sound.soundForest.pause();
  };
});

cardRain.addEventListener('click', () => {
  sound.soundsOff();
  sound.soundRain.play();
  let cardSelected = cardRain.classList.contains('selected');

  resetCards()
  cardRain.classList.add('selected');

  if(cardSelected) {
    cardRain.classList.remove('selected');
    sound.soundRain.pause();
  };
});

cardCoffeeShop.addEventListener('click', () => {
  sound.soundsOff();
  sound.soundCoffeeShop.play();
  let cardSelected = cardCoffeeShop.classList.contains('selected');

  resetCards()
  cardCoffeeShop.classList.add('selected');

  if(cardSelected) {
    cardCoffeeShop.classList.remove('selected');
    sound.soundCoffeeShop.pause();
  };
});

cardFire.addEventListener('click', () => {
  sound.soundsOff();
  sound.soundFire.play();
  let cardSelected = cardFire.classList.contains('selected');

  resetCards()
  cardFire.classList.add('selected');

  if(cardSelected) {
    cardFire.classList.remove('selected');
    sound.soundFire.pause();
  };
});

buttonLight.addEventListener('click', () => {
  buttonDark.classList.remove('hide');
  buttonLight.classList.add('hide');
  body.classList.add('darkMode');
})

buttonDark.addEventListener('click', function() {
  buttonLight.classList.remove('hide');
  buttonDark.classList.add('hide');
  body.classList.remove('darkMode');
});


/* -- volume event -- */

volForest.addEventListener('input', () => {
  sound.soundForest.volume = volForest.value
})

volRain.addEventListener('input', () => {
  sound.soundRain.volume = volRain.value
})

volStore.addEventListener('input', () => {
  sound.soundCoffeeShop.volume = volStore.value
})

volFire.addEventListener('input', () => {
  sound.soundFire.volume = volFire.value
})
