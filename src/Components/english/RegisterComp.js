/**
 * Register Component
 */

// Imports
import Component from '../../lib/Component';
import Elements from '../../lib/Elements';
import { auth, createUserWithEmailAndPassword } from '../../lib/firebase';

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
  // Creating a new user in the users database. We create a new user with email & password,
  // We put the email in 2 localstorages
  registerUser() {
    const registerEmail = document.getElementById('register__email').value;
    const registerPassw = document.getElementById('register__password').value;

    createUserWithEmailAndPassword(auth, registerEmail, registerPassw)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        localStorage.setItem('email', registerEmail);
        localStorage.setItem('emaiLoggedInUser', registerEmail);
        location.replace('/accountinformation_ENG');
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

    //  Creating the look of the page
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
