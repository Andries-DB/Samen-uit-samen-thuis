/**
 * Register Component
 */

import Component from '../lib/Component';
import Elements from '../lib/Elements';

class RegisterComp extends Component {
  constructor() {
    super({
      name: 'register',
      routerPath: '/register',
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
    const registerContainer = document.createElement('div');

    // create a header
    registerContainer.appendChild(
      Elements.createHeader({
        textContent: "REGISTER",
      }),
    );
    registerContainer.appendChild(    
      Elements.createInput({
        id: "register__email",
        type: inputEm,
        placeholder: placeholderEm,
    }),
    );
    registerContainer.appendChild(    
      Elements.createInput({
        id: "register__password",
        type: inputWw,
        placeholder: placeholderWw,
      }),
    );
    registerContainer.appendChild(
      Elements.createBr({}),
    );
    registerContainer.appendChild(
      Elements.createBr({}),
    );
    registerContainer.appendChild(
      Elements.createBr({}),
    );
    registerContainer.appendChild(
      Elements.createLink({
        id: "button--primary register",
        textContent: "REGISTER",
        href: '/dashboard',
      })
    );
    registerContainer.appendChild(
      Elements.createBr({}),
    );
    registerContainer.appendChild(
      Elements.createBr({}),
    );
    registerContainer.appendChild(
      Elements.createLink({
        id: "button--tertiary MakeAnAccount",
        textContent: "Already have an account?",
        href: '/',
      })
    )
    return registerContainer;
  }
}

export default RegisterComp ;
