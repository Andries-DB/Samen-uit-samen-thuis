/**
 * The Make a new event Component
 */

import Component from '../../lib/Component';
import Elements from '../../lib/Elements';
import {
  doc, db, setDoc, onAuthStateChanged, auth, ref, storage, uploadBytes,
} from '../../lib/firebase';

class FREventComp extends Component {
  constructor() {
    super({
      name: 'Créer un nouvel événement',
      routerPath: '/makenewevent%FR',
      model: {
      },
    });
  }

  // Functions
  loggedinUser() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email } = user;
        localStorage.setItem('emaiLoggedInUser', email);
      }
    });
  }

  async addDocument() {
    // Getting variables out of input tags
    const title = document.getElementById('info__title').value;
    const description = document.getElementById('info__description').value;
    const street = document.getElementById('info__street').value;
    const zipCode = document.getElementById('info__zipCode').value;
    const city = document.getElementById('info__city').value;
    const date = document.getElementById('info__date').value;
    const photo = document.getElementById('info__photo').value;

    // Getting the email of the logged in user
    const email = localStorage.getItem('emaiLoggedInUser');

    // Creating reference of the photos
    const reference = ref(storage, photo);

    // Uploading the reference to the firebase cloud storage
    uploadBytes(reference);

    // putting variables into the events database with ID = title of the event
    await setDoc(doc(db, 'events', title), {
      title,
      description,
      street,
      zipCode,
      city,
      date,
      email,
      photo,
    });
    location.reload();
  }

  render() {
    // create a home container
    const eventContainer = document.createElement('div');
    this.loggedinUser();
    eventContainer.appendChild(
      Elements.createHeader({
        size: 2,
        textContent: this.name,
      }),
    );
    eventContainer.appendChild(
      Elements.createLabel({
        textContent: 'Photo',
        inputType: 'info__photo',
      }),
    );
    eventContainer.appendChild(
      Elements.createBr(),
    );
    eventContainer.appendChild(
      Elements.createInput({
        id: 'info__photo',
        type: 'file',
      }),
    );
    eventContainer.appendChild(
      Elements.createBr(),
    );
    eventContainer.appendChild(
      Elements.createBr(),
    );
    eventContainer.appendChild(
      Elements.createLabel({
        textContent: 'Titre*',
        inputType: 'info__title',
      }),
    );
    eventContainer.appendChild(
      Elements.createInput({
        id: 'info__title',
        type: 'text',
        placeholder: 'Titre',
        required: true,
      }),
    );
    eventContainer.appendChild(
      Elements.createBr(),
    );
    eventContainer.appendChild(
      Elements.createLabel({
        textContent: 'Description*',
        inputType: 'info__description',
      }),
    );
    eventContainer.appendChild(
      Elements.createInput({
        id: 'info__description',
        type: 'text',
        placeholder: 'Description',
        required: true,
      }),
    );
    eventContainer.appendChild(
      Elements.createBr(),
    );
    eventContainer.appendChild(
      Elements.createLabel({
        textContent: 'Rue*',
        inputType: 'info__street',
      }),
    );
    eventContainer.appendChild(
      Elements.createInput({
        id: 'info__street',
        type: 'text',
        placeholder: 'Rue',
        required: true,
      }),
    );
    eventContainer.appendChild(
      Elements.createBr(),
    );
    eventContainer.appendChild(
      Elements.createLabel({
        textContent: 'Code postal*',
        inputType: 'info__zipCode',
      }),
    );
    eventContainer.appendChild(
      Elements.createInput({
        id: 'info__zipCode',
        type: 'text',
        placeholder: 'Code postal',
        required: true,
      }),
    );
    eventContainer.appendChild(
      Elements.createBr(),
    );
    eventContainer.appendChild(
      Elements.createLabel({
        textContent: 'Ville*',
        inputType: 'info__city',
      }),
    );
    eventContainer.appendChild(
      Elements.createInput({
        id: 'info__city',
        type: 'text',
        placeholder: 'ville',
        required: true,
      }),
    );
    eventContainer.appendChild(
      Elements.createBr(),
    );
    eventContainer.appendChild(
      Elements.createLabel({
        textContent: 'Date*',
        inputType: 'info__date',
      }),
    );
    eventContainer.appendChild(
      Elements.createInput({
        id: 'info__date',
        type: 'date',
        required: true,
      }),
    );
    eventContainer.appendChild(
      Elements.createBr(),
    );
    eventContainer.appendChild(
      Elements.createBr(),
    );
    eventContainer.appendChild(
      Elements.createButton({
        id: 'button--primary',
        textContent: 'CRÉER UN NOUVEL ÉVÉNEMENT',
        onClick: () => { this.addDocument(); },
      }),
    );
    eventContainer.appendChild(
      Elements.createButton({
        id: 'button--primary__cancel',
        textContent: 'RETOURNER',
        onClick: () => { location.replace('/dashboard%FR'); },
      }),
    );
    return eventContainer;
  }
}

export default FREventComp;
