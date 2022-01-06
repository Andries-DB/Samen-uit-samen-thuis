/**
 * Register Component
 */

 import Component from '../../lib/Component.js';
 import Elements from '../../lib/Elements.js';
import { auth, createUserWithEmailAndPassword } from '../../lib/firebase.js';

class RegisterComp extends Component {
  constructor() {
    super({
      name: 'register',
      routerPath: '/register',
      model: {
        inputEm: 'text',
        inputWw: 'password',
        placeholderEm: 'email',
        placeholderWw: 'password',

      },
    });
  }

  // Functions
  registerUser() {
    const registerEmail = document.getElementById('register__email').value;
    const registerPassw = document.getElementById('register__password').value;

    createUserWithEmailAndPassword(auth, registerEmail, registerPassw)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        localStorage.setItem('email', registerEmail);
        localStorage.setItem('emaiLoggedInUser' , registerEmail);
        location.replace('/accountinformation');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`An error has occurred, the error is ${errorMessage}!`);
      });
  }

  render() {
    // destructure model
    const { inputEm } = this.model;
    const { inputWw } = this.model;

    const { placeholderEm } = this.model;
    const { placeholderWw } = this.model;

    // create a home container
    const registerContainer = document.createElement('div');

    // create a header
    registerContainer.appendChild(
      Elements.createHeader({
        textContent: 'REGISTER',
      }),
    );
    registerContainer.appendChild(
      Elements.createInput({
        id: 'register__email',
        type: inputEm,
        placeholder: placeholderEm,
      }),
    );
    registerContainer.appendChild(
      Elements.createInput({
        id: 'register__password',
        type: inputWw,
        placeholder: placeholderWw,
      }),
    );
    registerContainer.appendChild(
      Elements.createBr({}),
    );
    registerContainer.appendChild(
      Elements.createButton({
        id: 'button--primary register',
        textContent: 'REGISTER',
        onClick: () => {
          this.registerUser();
        },
      }),
    );
    registerContainer.appendChild(
      Elements.createBr({}),
    );
    registerContainer.appendChild(
      Elements.createBr({}),
    );
    registerContainer.appendChild(
      Elements.createButton({
        id: 'button--tertiary AlreadyAnAccount',
        textContent: 'Already have an account?',
        onClick: () => {
          location.replace('/');
        },
      }),
    );
    return registerContainer;
  }
}

export default RegisterComp;
