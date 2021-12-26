/**
 * The Home Component
 */

import Component from '../lib/Component';
import Elements from '../lib/Elements';

class LoginComp extends Component {
  constructor() {
    super({
      name: 'home',
      routerPath: '/',
      model: {
        inputEm: "text",
        inputWw: "password",
        placeholderEm: "email",
        placeholderWw: "password",
        
      }
    });
  }

  render() {
    // destructure model
    const { inputEm} = this.model;
    const {inputWw} = this.model;
    
    const {placeholderEm} = this.model;
    const {placeholderWw} = this.model;

    // create a home container
    const loginContainer = document.createElement('div');

    // create a header
    loginContainer.appendChild(
      Elements.createHeader({
        textContent: "LOGIN",
      }),
    );
    loginContainer.appendChild(    
      Elements.createInput({
        id: "login",
        type: inputEm,
        placeholder: placeholderEm,
    }),
    );
    loginContainer.appendChild(    
      Elements.createInput({
        id: "login__password",
        type: inputWw,
        placeholder: placeholderWw,
      }),
    );
    loginContainer.appendChild(
      Elements.createBr({}),
    );
    loginContainer.appendChild(
      Elements.createButton({
        id: "button--primary login",
        textContent: "LOGIN",
      })
    );
    loginContainer.appendChild(
      Elements.createP({
        textContent: "or",
      }),
    );
    loginContainer.appendChild(
      Elements.createButton({
        id: "button--primary loginGoogle",
        textContent: "LOGIN WITH GOOGLE",
      })
    );
    loginContainer.appendChild(
      Elements.createButton({
        id: "button--primary loginFacebook",
        textContent: "LOGIN WITH FACEBOOK",
      })
    );
    loginContainer.appendChild(
      Elements.createP({
        textContent: "Don't you have an account yet?",
      }),
    );
    loginContainer.appendChild(
      Elements.createLink({
        id: "button--tertiary MakeAnAccount",
        textContent: "Make an account",
        href: '/register',
      })
    );
    return loginContainer;
  }
}

export default LoginComp ;
