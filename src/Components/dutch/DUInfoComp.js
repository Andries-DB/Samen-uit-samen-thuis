/**
 * Account information Component
 */

// Imports
import Component from '../../lib/Component';
import Elements from '../../lib/Elements';
import {
  auth, signOut, db, setDoc, doc,
} from '../../lib/firebase';

class DUInfoComp extends Component {
  constructor() {
    super({
      name: 'Account Informatie',
      routerPath: '/accountinformation%DU',
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
        alert(`Er is een fout opgetreden, de fout is ${errorMessage}!`);
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
    location.replace('/dashboard%DU');
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
        textContent: 'Voornaam*',
        inputType: 'info__firstName',
      }),
    );
    AccountContainer.appendChild(
      Elements.createInput({
        id: 'info__firstName',
        type: 'text',
        placeholder: 'Voornaam',
        required: true,
      }),
    );
    AccountContainer.appendChild(
      Elements.createBr(),
    );
    AccountContainer.appendChild(
      Elements.createLabel({
        textContent: 'Achternaam*',
        inputType: 'info__lastName',
      }),
    );
    AccountContainer.appendChild(
      Elements.createInput({
        id: 'info__lastName',
        type: 'text',
        placeholder: 'Achternaam',
        required: true,
      }),
    );
    AccountContainer.appendChild(
      Elements.createBr(),
    );
    AccountContainer.appendChild(
      Elements.createLabel({
        textContent: 'Gebruikersnaam*',
        inputType: 'info__userName',
      }),
    );
    AccountContainer.appendChild(
      Elements.createInput({
        id: 'info__userName',
        type: 'text',
        placeholder: 'Gebruikersnaam',
        required: true,
      }),
    );
    AccountContainer.appendChild(
      Elements.createBr(),
    );
    AccountContainer.appendChild(
      Elements.createLabel({
        textContent: 'GSM Nummer*',
        inputType: 'info__phoneNumb',
      }),
    );
    AccountContainer.appendChild(
      Elements.createInput({
        id: 'info__phoneNumb',
        type: 'number',
        placeholder: 'GSM Nummer',
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
        textContent: '*verplicht',
      }),
    );
    AccountContainer.appendChild(
      Elements.createButton({
        id: 'button--primary',
        textContent: 'SLA OP',
        onClick: () => { this.addDocument(); },
      }),
    );
    AccountContainer.appendChild(
      Elements.createButton({
        id: 'button--primary__cancel',
        textContent: 'GA TERUG',
        onClick: () => { this.signOut(); },
      }),
    );

    return AccountContainer;
  }
}

export default DUInfoComp;
