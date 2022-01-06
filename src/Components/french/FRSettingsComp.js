/**
 * The Profile Component
 */
 import Component from '../../lib/Component.js';
 import Elements from '../../lib/Elements.js';
import {
  doc, onSnapshot, db, setDoc, deleteDoc
} from '../../lib/firebase.js';

class FRProfileComp extends Component {
  constructor() {
    super({
      name: 'Paramètres',
      routerPath: '/settings%FR',
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
          textContent: 'Prénom*',
          inputType: 'info__firstName',
        }),
      );
      profileContainer.appendChild(
        Elements.createInput({
          id: 'info__firstName',
          type: 'text',
          placeholder: 'Prénom',
          required: true,
          value: docu.data().firstName,
        }),
      );
      profileContainer.appendChild(
        Elements.createBr(),
      );
      profileContainer.appendChild(
        Elements.createLabel({
          textContent: 'Nom de famille*',
          inputType: 'info__lastName',
        }),
      );
      profileContainer.appendChild(
        Elements.createInput({
          id: 'info__lastName',
          type: 'text',
          placeholder: 'Nom de famille',
          required: true,
          value: docu.data().lastName,
        }),
      );
      profileContainer.appendChild(
        Elements.createBr(),
      );
      profileContainer.appendChild(
        Elements.createLabel({
          textContent: `Nom d'utilisateur*`,
          inputType: 'info__userName',
        }),
      );
      profileContainer.appendChild(
        Elements.createInput({
          id: 'info__userName',
          type: 'text',
          placeholder: `Nom d'utilisateur`,
          required: true,
          value: docu.data().userName,
        }),
      );
      profileContainer.appendChild(
        Elements.createBr(),
      );
      profileContainer.appendChild(
        Elements.createLabel({
          textContent: 'Numéro de GSM*',
          inputType: 'info__phoneNumb',
        }),
      );
      profileContainer.appendChild(
        Elements.createInput({
          id: 'info__phoneNumb',
          type: 'number',
          placeholder: 'Numéro de GSM',
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
          textContent: '*obligatoire',
        }),
      );
      profileContainer.appendChild(
        Elements.createButton({
          id: 'button--primary',
          textContent: 'SAUVER',
          onClick: () => { this.addDocument(); },
        }),
      );
      profileContainer.appendChild(
        Elements.createButton({
          id: 'button--primary',
          textContent: 'SUPPRIMER',
          onClick: () => { this.deleteDocument(); },
        }),
      );
      profileContainer.appendChild(
        Elements.createButton({
          id: 'button--primary__cancel',
          textContent: 'RETOURNER',
          onClick: () => { location.replace('/dashboard%FR'); },
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
          textContent: 'Langues',
        }),
      );
      profileContainer.appendChild(
        Elements.createButton({
          id: 'button--secondary',
          textContent: 'Anglais',
          onClick: () => {location.replace('/settings%ENG');},
        }),
      );
      profileContainer.appendChild(
        Elements.createButton({
          id: 'button--secondary',
          textContent: 'Français',
          onClick: () => {location.replace('/settings%FR');},
        }),
      );
      profileContainer.appendChild(
        Elements.createButton({
          id: 'button--secondary',
          textContent: 'Néerlandais',
          onClick: () => {location.replace('/settings%DU');},
        }),
      );
    });
    return profileContainer;
  }
}

export default FRProfileComp;
