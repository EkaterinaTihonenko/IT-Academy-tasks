import './main.scss';
import { KEY_MAP, KEYS, COLORS } from './constants';

const pads = document.querySelectorAll('.pad');
const visual = document.querySelector('.visual');

const playSound = (key) => {
  const sound = KEY_MAP[key];
  const audio = new Audio(sound);
  audio.load();
  audio.play();
};

const animatePad = (key) => {
  const pad = Array.from(pads).find((item) => item.dataset.key === key);
  pad.style.animation = 'dance .3s linear';
  pad.addEventListener('animationend', () => {
    pad.style.animation = 'none';
  });
};

const createBuble = (key) => {
  const element = document.createElement('div');
  visual.append(element);
  element.style.animation = 'jump 1s linear';
  element.style.background = COLORS[key];
  element.addEventListener('animationend', () => {
    element.remove();
  });
};

const onKeyPress = ({ code }) => {
  if (KEYS[code]) {
    playSound(code);
    animatePad(code);
    createBuble(code);
  } else {
    console.error('Error!!!');
  }
};

window.addEventListener('keypress', onKeyPress);
