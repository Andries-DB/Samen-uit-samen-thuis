import './scss/main.scss';
import Router from './Router';

const initApp = () => {
  Router.getRouter().on('/test', () => {
    console.log('testing');
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
};

window.addEventListener('click', initApp);
