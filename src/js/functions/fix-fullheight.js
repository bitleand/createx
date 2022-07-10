import { throttle } from './throttle';

const fixFullHeight = () => {
  let vh = window.innerHeight;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

let fixHeight = throttle(fixFullHeight);

fixHeight();

window.addEventListener('resize', fixHeight);
