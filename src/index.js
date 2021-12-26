import './scss/main.scss';
import Router from './Router';
import { App } from './app';
import { LoginComp, RegisterComp } from './Components/index';


 /*const checkIfRightType = (value) => {
  if (!isNaN(value)) throw new InvalidStringException(value);
}; */

const initApp = () => {
  const appContainer = document.getElementById('appContainer');
  const app = new App(appContainer);

  app.addComponent(new LoginComp());
  app.addComponent(new RegisterComp());

  Router.getRouter().on('/test', () => {
    console.log('testing correct');
  });

 /* if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }*/
};

window.addEventListener('load', initApp);
