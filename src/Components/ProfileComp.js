/**
 * The Profile Component
 */

import Component from '../lib/Component';
import Elements from '../lib/Elements';
import {
  doc, onSnapshot, db, setDoc,
} from '../lib/firebase';

class ProfileComp extends Component {
  constructor() {
    super({
      name: 'Profile Information',
      routerPath: '/profile',
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

  render() {
    // create a home container
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
        Elements.createBr(),
      );
      profileContainer.appendChild(
        Elements.createLabel({
          textContent: 'Firstname*',
          inputType: 'info__firstName',
        }),
      );
      profileContainer.appendChild(
        Elements.createInput({
          id: 'info__firstName',
          type: 'text',
          placeholder: 'firstname',
          required: true,
          value: docu.data().firstName,
        }),
      );
      profileContainer.appendChild(
        Elements.createBr(),
      );
      profileContainer.appendChild(
        Elements.createLabel({
          textContent: 'Lastname*',
          inputType: 'info__lastName',
        }),
      );
      profileContainer.appendChild(
        Elements.createInput({
          id: 'info__lastName',
          type: 'text',
          placeholder: 'lastname',
          required: true,
          value: docu.data().lastName,
        }),
      );
      profileContainer.appendChild(
        Elements.createBr(),
      );
      profileContainer.appendChild(
        Elements.createLabel({
          textContent: 'Username*',
          inputType: 'info__userName',
        }),
      );
      profileContainer.appendChild(
        Elements.createInput({
          id: 'info__userName',
          type: 'text',
          placeholder: 'username',
          required: true,
          value: docu.data().userName,
        }),
      );
      profileContainer.appendChild(
        Elements.createBr(),
      );
      profileContainer.appendChild(
        Elements.createLabel({
          textContent: 'Phone Number*',
          inputType: 'info__phoneNumb',
        }),
      );
      profileContainer.appendChild(
        Elements.createInput({
          id: 'info__phoneNumb',
          type: 'number',
          placeholder: 'Phone Number',
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
          textContent: 'SAVE',
          onClick: () => { this.addDocument(); },
        }),
      );
      profileContainer.appendChild(
        Elements.createButton({
          id: 'button--primary__cancel',
          textContent: 'CANCEL',
          onClick: () => { location.replace('/dashboard'); },
        }),
      );
    });
    // create the header

    return profileContainer;
  }
}

export default ProfileComp;
