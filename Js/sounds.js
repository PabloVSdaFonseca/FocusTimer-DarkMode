export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
  const soundForest = new Audio("sound/Floresta.wav");
  const soundRain = new Audio("sound/Chuva.wav");
  const soundCoffeeShop = new Audio("sound/Cafeteria.wav");
  const soundFire = new Audio("sound/Lareira.wav");

  soundForest.loop = true;
  soundRain.loop = true;
  soundCoffeeShop.loop = true;
  soundFire.loop = true;


  function pressButton() {
    buttonPressAudio.play();
  };

  function timeEnd() {
    kitchenTimer.play();
  }

  function soundsOff() {
    soundForest.pause();
    soundRain.pause();
    soundCoffeeShop.pause();
    soundFire.pause();
  }


  return {
    pressButton,
    timeEnd,
    soundForest,soundRain,
    soundCoffeeShop, soundFire,
    soundsOff
  }
};