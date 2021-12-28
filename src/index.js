import './scss/main.scss';
// import Router from './Router';
import App from './app';
import {
  LoginComp, RegisterComp, DashboardComp, InfoComp, ProfileComp, EventComp,
} from './Components/index';

const initApp = () => {
  const appContainer = document.getElementById('appContainer');
  const app = new App(appContainer);

  app.addComponent(new LoginComp());
  app.addComponent(new RegisterComp());
  app.addComponent(new DashboardComp());
  app.addComponent(new InfoComp());
  app.addComponent(new ProfileComp());
  app.addComponent(new EventComp());

  /* if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  } */
};

window.addEventListener('load', initApp);
