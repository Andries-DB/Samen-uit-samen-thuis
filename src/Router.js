/**
 * The Router
 */

import Navigo from '../node_modules/navigo/lib/navigo.js';

const Router = {
  router: null,
  getRouter() {
    if (!this.router) {
      const rootUrl = '/';
      this.router = new Navigo(rootUrl, false);
    }
    return this.router;
  },
};

export default Router;
