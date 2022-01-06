/**
 * The Profile Component
 */
 import Component from '../../lib/Component.js';
 import Elements from '../../lib/Elements.js';
import {
  doc, onSnapshot, db, setDoc, deleteDoc
} from '../../lib/firebase.js';

class DUProfileComp extends Component {
  constructor() {
    super({
      name: 'Instellingen',
      routerPath: '/settings%DU',
      model: {
      },
    });
  }

  // Functions
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
  }
  async deleteDocument() {
    
    const email = localStorage.getItem('emaiLoggedInUser');

    await deleteDoc(doc(db, 'usersInfo', email));
    location.replace('/');
  }

  render() {
    // create a home container & variables
    const profileContainer = document.createElement('div');
    const email = localStorage.getItem('email');
    
    onSnapshot(doc(db, 'usersInfo', email), (docu) => {
      profileContainer.appendChild(
        Elements.createHeader({
          size: 2,
          textContent: this.name,
        }),
      );

      profileContainer.appendChild(
        Elements.createLabel({
          textContent: 'Voornaam*',
          inputType: 'info__firstName',
        }),
      );
      profileContainer.appendChild(
        Elements.createInput({
          id: 'info__firstName',
          type: 'text',
          placeholder: 'Voornaam',
          required: true,
          value: docu.data().firstName,
        }),
      );
      profileContainer.appendChild(
        Elements.createBr(),
      );
      profileContainer.appendChild(
        Elements.createLabel({
          textContent: 'Achternaam*',
          inputType: 'info__lastName',
        }),
      );
      profileContainer.appendChild(
        Elements.createInput({
          id: 'info__lastName',
          type: 'text',
          placeholder: 'Achternaam',
          required: true,
          value: docu.data().lastName,
        }),
      );
      profileContainer.appendChild(
        Elements.createBr(),
      );
      profileContainer.appendChild(
        Elements.createLabel({
          textContent: 'Gebruikersnaam*',
          inputType: 'info__userName',
        }),
      );
      profileContainer.appendChild(
        Elements.createInput({
          id: 'info__userName',
          type: 'text',
          placeholder: 'Gebruikersnaam',
          required: true,
          value: docu.data().userName,
        }),
      );
      profileContainer.appendChild(
        Elements.createBr(),
      );
      profileContainer.appendChild(
        Elements.createLabel({
          textContent: 'GSM Nummer*',
          inputType: 'info__phoneNumb',
        }),
      );
      profileContainer.appendChild(
        Elements.createInput({
          id: 'info__phoneNumb',
          type: 'number',
          placeholder: 'GSM Nummer',
          required: true,
          value: docu.data().phoneNumb,
        }),
      );
      profileContainer.appendChild(
        Elements.createBr(),
      );
      profileContainer.appendChild(
        Elements.createBr(),
      );
      profileContainer.appendChild(
        Elements.createBr(),
      );
      profileContainer.appendChild(
        Elements.createLabel({
          textContent: 'Avatar',
          inputType: 'info__avatar',
        }),
      );
      profileContainer.appendChild(
        Elements.createBr(),
      );
      profileContainer.appendChild(
        Elements.createInput({
          id: 'info__avatar',
          type: 'file',
          placeholder: '',
        }),
      );
      profileContainer.appendChild(
        Elements.createHeader({
          size: 5,
          textContent: '*required',
        }),
      );
      profileContainer.appendChild(
        Elements.createButton({
          id: 'button--primary',
          textContent: 'SLA OP',
          onClick: () => { this.addDocument(); },
        }),
      );
      profileContainer.appendChild(
        Elements.createButton({
          id: 'button--primary',
          textContent: 'VERWIJDER',
          onClick: () => { this.deleteDocument(); },
        }),
      );
      profileContainer.appendChild(
        Elements.createButton({
          id: 'button--primary__cancel',
          textContent: 'GA TERUG',
          onClick: () => { location.replace('/dashboard%DU'); },
        }),
      );
      profileContainer.appendChild(
        Elements.createBr(),
      );
      profileContainer.appendChild(
        Elements.createBr(),
      );
      profileContainer.appendChild(
        Elements.createHeader({
          size:2,
          textContent: 'Taal',
        }),
      );
      profileContainer.appendChild(
        Elements.createButton({
          id: 'button--secondary',
          textContent: 'Engels',
          onClick: () => {location.replace('/settings%ENG')},
        }),
      );
      profileContainer.appendChild(
        Elements.createButton({
          id: 'button--secondary',
          textContent: 'Frans',
          onClick: () => {location.replace('/settings%FR')},
        }),
      );
      profileContainer.appendChild(
        Elements.createButton({
          id: 'button--secondary',
          textContent: 'Nederlands',
          onClick: () => {location.replace('/settings%NL')},
        }),
      );
    });
    return profileContainer;
  }
}

export default DUProfileComp;
