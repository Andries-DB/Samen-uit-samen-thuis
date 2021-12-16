import './scss/main.scss';
import Router from './Router';
import InvalidStringException from './lib/Exceptions/InvalidStringException';

const checkIfRightType = (value) => {
  if (!isNaN(value)) throw new InvalidStringException(value);
};
const initApp = () => {
  Router.getRouter().on('/test', () => {
    console.log('testing');
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
};

window.addEventListener('click', initApp);
