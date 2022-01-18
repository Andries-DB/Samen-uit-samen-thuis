/**
 * The Make a new event Component
 */

// Imports
import Component from '../../lib/Component';
import Elements from '../../lib/Elements';
import {
  doc, db, setDoc, onAuthStateChanged, auth, ref, storage, uploadBytes,
} from '../../lib/firebase';

class DUEventComp extends Component {
  constructor() {
    super({
      name: 'Maak een nieuw evenement',
      routerPath: '/makenewevent%DU',
      model: {
      },
    });
  }

  // Functions
  // Getting the currently signed in user & getting the email & putting it in
  // localstorage
  loggedinUser() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email } = user;
        localStorage.setItem('emaiLoggedInUser', email);
      }
    });
  }

  // Adding a new event in the event database with a unique ID
  // which is the title of the newly added event
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

    // Getting the email & putting it in localstorage
    this.loggedinUser();

    // Creating the look of the page
    eventContainer.appendChild(
      Elements.createHeader({
        size: 2,
        textContent: this.name,
      }),
    );
    eventContainer.appendChild(
      Elements.createLabel({
        textContent: 'Foto',
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
        textContent: 'Titel*',
        inputType: 'info__title',
      }),
    );
    eventContainer.appendChild(
      Elements.createInput({
        id: 'info__title',
        type: 'text',
        placeholder: 'Titel',
        required: true,
      }),
    );
    eventContainer.appendChild(
      Elements.createBr(),
    );
    eventContainer.appendChild(
      Elements.createLabel({
        textContent: 'Beschrijving*',
        inputType: 'info__description',
      }),
    );
    eventContainer.appendChild(
      Elements.createInput({
        id: 'info__description',
        type: 'text',
        placeholder: 'Beschrijving',
        required: true,
      }),
    );
    eventContainer.appendChild(
      Elements.createBr(),
    );
    eventContainer.appendChild(
      Elements.createLabel({
        textContent: 'Straat*',
        inputType: 'info__street',
      }),
    );
    eventContainer.appendChild(
      Elements.createInput({
        id: 'info__street',
        type: 'text',
        placeholder: 'straat',
        required: true,
      }),
    );
    eventContainer.appendChild(
      Elements.createBr(),
    );
    eventContainer.appendChild(
      Elements.createLabel({
        textContent: 'Postcode*',
        inputType: 'info__zipCode',
      }),
    );
    eventContainer.appendChild(
      Elements.createInput({
        id: 'info__zipCode',
        type: 'text',
        placeholder: 'Postcode',
        required: true,
      }),
    );
    eventContainer.appendChild(
      Elements.createBr(),
    );
    eventContainer.appendChild(
      Elements.createLabel({
        textContent: 'Stad*',
        inputType: 'info__city',
      }),
    );
    eventContainer.appendChild(
      Elements.createInput({
        id: 'info__city',
        type: 'text',
        placeholder: 'Stad',
        required: true,
      }),
    );
    eventContainer.appendChild(
      Elements.createBr(),
    );
    eventContainer.appendChild(
      Elements.createLabel({
        textContent: 'Datum*',
        inputType: 'info__date',
      }),
    );
    eventContainer.appendChild(
      Elements.createInput({
        id: 'info__date',
        type: 'Datum',
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
        textContent: 'MAAK NIEUW EVENEMENT AAN',
        onClick: () => { this.addDocument(); },
      }),
    );
    eventContainer.appendChild(
      Elements.createButton({
        id: 'button--primary__cancel',
        textContent: 'GA TERUG',
        onClick: () => { location.replace('/dashboard%DU'); },
      }),
    );
    return eventContainer;
  }
}

export default DUEventComp;
