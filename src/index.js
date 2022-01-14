// import Router from './Router';
import App from './app.js';
import {
  LoginComp, RegisterComp, DashboardComp,
  InfoComp, ProfileComp, EventComp, MapComp, ReportComp,
  InfoEventComp, FRDashboardComp, FRInfoComp, FRProfileComp, 
  FREventComp, FRReportComp, FRInfoEventComp, DUDashboardComp,
  DUInfoComp, DUProfileComp, DUEventComp, DUReportComp,
  DUInfoEventComp,
} from './Components/index.js';

const initApp = () => {
  const appContainer = document.getElementById('appContainer');
  const app = new App(appContainer);

  app.addComponent(new LoginComp());
  app.addComponent(new RegisterComp());
  app.addComponent(new DashboardComp());
  app.addComponent(new InfoComp());
  app.addComponent(new ProfileComp());
  app.addComponent(new EventComp());
  app.addComponent(new MapComp());
  app.addComponent(new ReportComp());
  app.addComponent(new InfoEventComp());

  app.addComponent(new FRDashboardComp());
  app.addComponent(new FRInfoComp());
  app.addComponent(new FRProfileComp());
  app.addComponent(new FREventComp());
  app.addComponent(new FRReportComp());
  app.addComponent(new FRInfoEventComp());
  
  app.addComponent(new DUDashboardComp());
  app.addComponent(new DUInfoComp());
  app.addComponent(new DUProfileComp());
  app.addComponent(new DUEventComp());
  app.addComponent(new DUReportComp());
  app.addComponent(new DUInfoEventComp());

  

  /* if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  } */
};

window.addEventListener('load', initApp);
