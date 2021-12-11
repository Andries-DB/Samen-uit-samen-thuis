/**
 * The component parent
 */

class Component {
  constructor({
    name,
    model,
    routerPath,
  }) {
    this.name = name;
    this.model = model;
    this.routerPath = routerPath;
    this.props = null;
  }

  proxyModel(model) {
    return new Proxy(model, {
      set: (obj, prop, value) => {
        obj[prop] = value;
        if (this.reRender) this.reRender();
        return true;
      },
    });
  }
}

export default Component;
