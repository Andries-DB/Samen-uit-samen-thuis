/**
 * Event information Component
 */
 import Component from '../../lib/Component.js';
 import Elements from '../../lib/Elements.js';
import {
  db, setDoc, doc, onSnapshot, deleteDoc,
} from '../../lib/firebase.js';

class InfoEventComp extends Component {
  constructor() {
    super({
      name: 'Event Information',
      routerPath: '/detailsEvent%ENG',
      model: {
      },
    });
  }

  // Functions
  

  async addDocument() {
    const title = document.getElementById('info__title').value;
    const description = document.getElementById('info__description').value;
    const street = document.getElementById('info__street').value;
    const zipCode = document.getElementById('info__zipCode').value;
    const city = document.getElementById('info__city').value;
    const date = document.getElementById('info__date').value;
    const email = document.getElementById('info__madeBy').value;

    await setDoc(doc(db, 'events', title), {
      title,
      description,
      street,
      zipCode,
      city,
      date,
      email,
    });
    location.replace('/dashboard%ENG');
  }

  async deleteDocument() {
    const title = document.getElementById('info__title').value;

    await deleteDoc(doc(db, 'events', title));
    location.replace('/dashboard%ENG');
  }

  render() {
    // create the container
    const EventContainer = document.createElement('div');

    const title = localStorage.getItem('eventName');
    const loggedInUser = localStorage.getItem('emaiLoggedInUser');

    onSnapshot(doc(db, 'events', title), (docu) => {
      if(docu.data().email === loggedInUser)
      {
        EventContainer.appendChild(
          Elements.createHeader({
            size: 2,
            textContent: this.name,
          }),
        );
        EventContainer.appendChild(
          Elements.createBr(),
        );
        EventContainer.appendChild(
          Elements.createLabel({
            textContent: 'Title*',
            inputType: 'info__title',
          }),
        );
        EventContainer.appendChild(
          Elements.createInput({
            id: 'info__title',
            type: 'text',
            value: docu.data().title,
            required: true,
          }),
        );
        EventContainer.appendChild(
          Elements.createBr(),
        );
        EventContainer.appendChild(
          Elements.createLabel({
            textContent: 'Description*',
            inputType: 'info__description',
          }),
        );
        EventContainer.appendChild(
          Elements.createInput({
            id: 'info__description',
            type: 'text',
            value: docu.data().description,
            required: true,
          }),
        );
        EventContainer.appendChild(
          Elements.createBr(),
        );
        EventContainer.appendChild(
          Elements.createLabel({
            textContent: 'Street*',
            inputType: 'info__street',
          }),
        );
        EventContainer.appendChild(
          Elements.createInput({
            id: 'info__street',
            type: 'text',
            value: `${docu.data().street}`,
            required: true,
          }),
        );
        EventContainer.appendChild(
          Elements.createBr(),
        );
        EventContainer.appendChild(
          Elements.createLabel({
            textContent: 'ZIP Code*',
            inputType: 'info__zipCode',
          }),
        );
        EventContainer.appendChild(
          Elements.createInput({
            id: 'info__zipCode',
            type: 'text',
            value: `${docu.data().zipCode}`,
            required: true,
          }),
        );
        EventContainer.appendChild(
          Elements.createBr(),
        );
        EventContainer.appendChild(
          Elements.createLabel({
            textContent: 'City*',
            inputType: 'info__city',
          }),
        );
        EventContainer.appendChild(
          Elements.createInput({
            id: 'info__city',
            type: 'text',
            value: `${docu.data().city}`,
            required: true,
          }),
        );
        EventContainer.appendChild(
          Elements.createBr(),
        );
        EventContainer.appendChild(
          Elements.createLabel({
            textContent: 'Date*',
            inputType: 'info__date',
          }),
        );
        EventContainer.appendChild(
          Elements.createInput({
            id: 'info__date',
            type: 'date',
            value: docu.data().date,
            required: true,
          }),
        );
        EventContainer.appendChild(
          Elements.createBr(),
        );
        EventContainer.appendChild(
          Elements.createLabel({
            textContent: 'Made by*',
            inputType: 'info__madeBy',
          }),
        );
        EventContainer.appendChild(
          Elements.createInput({
            id: 'info__madeBy',
            type: 'text',
            value: docu.data().email,
            required: true,
          }),
        );
    
        EventContainer.appendChild(
          Elements.createHeader({
            size: 5,
            textContent: '*required',
          }),
        );
        EventContainer.appendChild(
          Elements.createButton({
            id: 'button--primary',
            textContent: 'SAVE',
            onClick: () => { this.deleteDocument(); 
              this.addDocument(); },
          }),
        );
        EventContainer.appendChild(
          Elements.createButton({
            id: 'button--primary',
            textContent: 'DELETE',
            onClick: () => { this.deleteDocument(); },
          }),
        );
        EventContainer.appendChild(
          Elements.createButton({
            id: 'button--primary__cancel',
            textContent: 'CANCEL',
            onClick: () => { location.replace('/dashboard%ENG');},
          }),
        );
      }
      else {
        EventContainer.appendChild(
          Elements.createHeader({
            size: 2,
            textContent: this.name,
          }),
        );
        EventContainer.appendChild(
          Elements.createBr(),
        );
        EventContainer.appendChild(
          Elements.createLabel({
            textContent: 'Title*',
            inputType: 'info__title',
          }),
        );
        EventContainer.appendChild(
          Elements.createInput({
            id: 'info__title',
            type: 'text',
            value: docu.data().title,
            required: true,
            disabled: true,
          }),
        );
        EventContainer.appendChild(
          Elements.createBr(),
        );
        EventContainer.appendChild(
          Elements.createLabel({
            textContent: 'Description*',
            inputType: 'info__description',
          }),
        );
        EventContainer.appendChild(
          Elements.createInput({
            id: 'info__description',
            type: 'text',
            value: docu.data().description,
            required: true,
            disabled: true,
          }),
        );
        EventContainer.appendChild(
          Elements.createBr(),
        );
        EventContainer.appendChild(
          Elements.createLabel({
            textContent: 'Street*',
            inputType: 'info__street',
          }),
        );
        EventContainer.appendChild(
          Elements.createInput({
            id: 'info__street',
            type: 'text',
            value: `${docu.data().street}`,
            required: true,
            disabled: true,
          }),
        );
        EventContainer.appendChild(
          Elements.createBr(),
        );
        EventContainer.appendChild(
          Elements.createLabel({
            textContent: 'ZIP Code*',
            inputType: 'info__zipCode',
          }),
        );
        EventContainer.appendChild(
          Elements.createInput({
            id: 'info__zipCode',
            type: 'text',
            value: `${docu.data().zipCode}`,
            required: true,
            disabled: true,
          }),
        );
        EventContainer.appendChild(
          Elements.createBr(),
        );
        EventContainer.appendChild(
          Elements.createLabel({
            textContent: 'City*',
            inputType: 'info__city',
          }),
        );
        EventContainer.appendChild(
          Elements.createInput({
            id: 'info__city',
            type: 'text',
            value: `${docu.data().city}`,
            required: true,
            disabled: true,
          }),
        );
        EventContainer.appendChild(
          Elements.createBr(),
        );
        EventContainer.appendChild(
          Elements.createLabel({
            textContent: 'Date*',
            inputType: 'info__date',
          }),
        );
        EventContainer.appendChild(
          Elements.createInput({
            id: 'info__date',
            type: 'text',
            value: docu.data().date,
            required: true,
            disabled: true,
          }),
        );
        EventContainer.appendChild(
          Elements.createBr(),
        );
        EventContainer.appendChild(
          Elements.createLabel({
            textContent: 'Made by*',
            inputType: 'info__madeBy',
          }),
        );
        EventContainer.appendChild(
          Elements.createInput({
            id: 'info__madeBy',
            type: 'text',
            value: `${docu.data().email}`,
            required: true,
            disabled: true,
          }),
        );
    
        EventContainer.appendChild(
          Elements.createHeader({
            size: 5,
            textContent: '*required',
          }),
        );
        EventContainer.appendChild(
          Elements.createButton({
            id: 'button--primary__cancel',
            textContent: 'CANCEL',
            onClick: () => { location.replace('/dashboard%ENG');},
          }),
        );
      }
    });

    // create the look of the page
    

    return EventContainer;
  }
}

export default InfoEventComp;