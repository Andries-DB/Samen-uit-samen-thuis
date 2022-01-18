/**
 * Account information Component
 */

// Imports
import Component from '../../lib/Component';
import Elements from '../../lib/Elements';
import {
  auth, signOut, db, setDoc, doc,
} from '../../lib/firebase';

class FRInfoComp extends Component {
  constructor() {
    super({
      name: 'Account Information',
      routerPath: '/accountinformation%FR',
      model: {
      },
    });
  }

  // Functions
  // Sign out function
  signOut() {
    signOut(auth)
      .then(() => {
        location.replace('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`An error has occurred, the error is ${errorMessage}!`);
      });
  }

  // Updating the logged in users's information
  async addDocument() {
    const firstName = document.getElementById('info__firstName').value;
    const lastName = document.getElementById('info__lastName').value;
    const userName = document.getElementById('info__userName').value;
    const phoneNumb = document.getElementById('info__phoneNumb').value;
    const email = localStorage.getItem('email');

    await setDoc(doc(db, 'usersInfo', email), {
      firstName,
      lastName,
      userName,
      phoneNumb,
    });
    location.replace('/dashboard%FR');
  }

  render() {
    // create the container
    const AccountContainer = document.createElement('div');

    // create the look of the page
    AccountContainer.appendChild(
      Elements.createHeader({
        size: 2,
        textContent: this.name,
      }),
    );
    AccountContainer.appendChild(
      Elements.createBr(),
    );
    AccountContainer.appendChild(
      Elements.createLabel({
        textContent: 'Prénom*',
        inputType: 'info__firstName',
      }),
    );
    AccountContainer.appendChild(
      Elements.createInput({
        id: 'info__firstName',
        type: 'text',
        placeholder: 'Prénom',
        required: true,
      }),
    );
    AccountContainer.appendChild(
      Elements.createBr(),
    );
    AccountContainer.appendChild(
      Elements.createLabel({
        textContent: 'Nom de famille*',
        inputType: 'info__lastName',
      }),
    );
    AccountContainer.appendChild(
      Elements.createInput({
        id: 'info__lastName',
        type: 'text',
        placeholder: 'Nom de famille',
        required: true,
      }),
    );
    AccountContainer.appendChild(
      Elements.createBr(),
    );
    AccountContainer.appendChild(
      Elements.createLabel({
        textContent: 'Nom d\'utilisateur*',
        inputType: 'info__userName',
      }),
    );
    AccountContainer.appendChild(
      Elements.createInput({
        id: 'info__userName',
        type: 'text',
        placeholder: 'Nom d\'utilisateur',
        required: true,
      }),
    );
    AccountContainer.appendChild(
      Elements.createBr(),
    );
    AccountContainer.appendChild(
      Elements.createLabel({
        textContent: 'Numéro de GSM*',
        inputType: 'info__phoneNumb',
      }),
    );
    AccountContainer.appendChild(
      Elements.createInput({
        id: 'info__phoneNumb',
        type: 'number',
        placeholder: 'Numéro de GSM',
        required: true,
      }),
    );
    AccountContainer.appendChild(
      Elements.createBr(),
    );
    AccountContainer.appendChild(
      Elements.createBr(),
    );
    AccountContainer.appendChild(
      Elements.createBr(),
    );
    AccountContainer.appendChild(
      Elements.createLabel({
        textContent: 'Avatar',
        inputType: 'info__avatar',
      }),
    );
    AccountContainer.appendChild(
      Elements.createBr(),
    );
    AccountContainer.appendChild(
      Elements.createInput({
        id: 'info__avatar',
        type: 'file',
        placeholder: '',
      }),
    );
    AccountContainer.appendChild(
      Elements.createHeader({
        size: 5,
        textContent: '*obligatoire',
      }),
    );
    AccountContainer.appendChild(
      Elements.createButton({
        id: 'button--primary',
        textContent: 'SAUVER',
        onClick: () => { this.addDocument(); },
      }),
    );
    AccountContainer.appendChild(
      Elements.createButton({
        id: 'button--primary__cancel',
        textContent: 'RETOURNER',
        onClick: () => { this.signOut(); },
      }),
    );

    return AccountContainer;
  }
}

export default FRInfoComp;
