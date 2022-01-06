/**
 * The Home Component
 */

import {
  auth, signInWithEmailAndPassword, provider,
  signInWithPopup, GoogleAuthProvider,
} from '../../lib/firebase.js';
import Component from '../../lib/Component.js';
import Elements from '../../lib/Elements.js';

class LoginComp extends Component {
  constructor() {
    super({
      name: 'home',
      routerPath: '/',
      model: {
        inputEm: 'text',
        inputWw: 'password',
        placeholderEm: 'email',
        placeholderWw: 'password',

      },
    });
  }

  // Functions
  signin() {
    const signinEmail = document.getElementById('login__email').value;
    const signinPassw = document.getElementById('login__password').value;

    signInWithEmailAndPassword(auth, signinEmail, signinPassw)
      .then((userCredential) => {
        // Signed in
        location.replace('/dashboard%ENG');
        localStorage.setItem('emaiLoggedInUser' , signinEmail);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`An error has occurred, the error is ${errorMessage}!`);
      });
  }

  signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = provider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const { user } = result;
        location.replace('/dashboard%ENG');
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const { email } = error;

        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(`An error has occurred, the error is ${errorMessage}!`);
        // ...
      });
  }

  render() {
    // destructure model
    const { inputEm } = this.model;
    const { inputWw } = this.model;

    const { placeholderEm } = this.model;
    const { placeholderWw } = this.model;

    // create a home container
    const loginContainer = document.createElement('div');

    // create a header
    loginContainer.appendChild(
      Elements.createHeader({
        textContent: 'LOGIN',
      }),
    );
    loginContainer.appendChild(
      Elements.createInput({
        id: 'login__email',
        type: inputEm,
        placeholder: placeholderEm,
      }),
    );
    loginContainer.appendChild(
      Elements.createInput({
        id: 'login__password',
        type: inputWw,
        placeholder: placeholderWw,
      }),
    );
    loginContainer.appendChild(
      Elements.createBr({}),
    );
    loginContainer.appendChild(
      Elements.createButton({
        id: 'button--primary login',
        textContent: 'LOGIN',
        onClick: () => { this.signin(); },
      }),
    );
    loginContainer.appendChild(
      Elements.createP({
        textContent: 'or',
      }),
    );
    loginContainer.appendChild(
      Elements.createButton({
        id: 'button--primary loginGoogle',
        textContent: 'LOGIN WITH GOOGLE',
        onClick: () => { this.signInWithGoogle(); },
      }),
    );
    loginContainer.appendChild(
      Elements.createP({
        textContent: "Don't you have an account yet?",
      }),
    );
    loginContainer.appendChild(
      Elements.createButton({
        id: 'button--tertiary MakeAnAccount',
        textContent: 'Make an account',
        onClick: () => { location.replace('/register'); },
      }),
    );
    return loginContainer;
  }
}

export default LoginComp;