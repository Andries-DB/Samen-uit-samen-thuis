/**
 * The Report Component
 */

// Imports
import sgMail from '@sendgrid/mail';
import Component from '../../lib/Component';
import Elements from '../../lib/Elements';

class ReportComp extends Component {
  constructor() {
    super({
      name: 'Report',
      routerPath: '/report_ENG',
      model: {
        card: '',
      },
    });
  }

  render() {
    // Creating the home container & some variabeles
    const reportContainer = document.createElement('div');
    const EMAIL_API_KEY = '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';
    const MELDET_EMAIL = 'andries.debaerz@gmail.com';

    // Functions
    // This function will send a mail to a specific email I put in the variable 'MELDET_MAIL
    function sendEmail() {
      const title = document.getElementById('info__title').value;
      const date = document.getElementById('info__date').value;
      const Description = document.getElementById('info__description').value;
      const Category = document.getElementById('info__category').value;
      const adress = document.getElementById('info__adress').value;

      sgMail.setApiKey(EMAIL_API_KEY);
      const msg = {
        to: MELDET_EMAIL, // Change to your recipient
        from: 'andries.debaerz@gmail.com', // Change to your verified sender
        subject: 'MELDET Assault',
        text: `There has been reported a new assault. Title: ${title}, Date of the assault: ${date}, Description: ${Description}, Category: ${Category}, Adress: ${adress}`,
      };
      (async () => {
        try {
          await console.log(msg);
        } catch (error) {
          console.error(error);
          if (error.response) {
            console.error(error.response.body);
          }
        }
      })();
    }

    // Functions for the Geolocation, if success, the adress gets filled
    // with the coördinats of the current postion,
    // If not, there will be an alert
    const succes = (position) => {
      reportContainer.appendChild(
        Elements.createInput({
          id: 'info__adress',
          type: 'text',
          placeholder: 'Adress',
          required: true,
          value: `lat: ${position.coords.latitude}, long: ${position.coords.longitude}`,
        }),
      );
    };
    const error = (e) => alert(`We couldn't get your location! There was an unexpected error which is ${e}`);

    // Creating the look of the page
    reportContainer.appendChild(
      Elements.createHeader({
        size: 2,
        textContent: this.name,
      }),
    );
    reportContainer.appendChild(
      Elements.createButton({
        id: 'button--primary',
        textContent: 'Go back',
        onClick: () => { location.replace('/dashboard'); },
      }),
    );
    reportContainer.appendChild(
      Elements.createButton({
        id: 'button--primary__cancel',
        textContent: this.name,
        onClick: () => { sendEmail(); },
      }),
    );
    reportContainer.appendChild(
      Elements.createBr(),
    );
    reportContainer.appendChild(
      Elements.createBr(),
    );
    reportContainer.appendChild(
      Elements.createLabel({
        textContent: 'Title*',
        inputType: 'info__title',
      }),
    );
    reportContainer.appendChild(
      Elements.createInput({
        id: 'info__title',
        type: 'text',
        placeholder: 'Title',
        required: true,
      }),
    );
    reportContainer.appendChild(
      Elements.createBr(),
    );
    reportContainer.appendChild(
      Elements.createLabel({
        textContent: 'Date*',
        inputType: 'info__date',
      }),
    );
    reportContainer.appendChild(
      Elements.createInput({
        id: 'info__date',
        type: 'date',
        required: true,
      }),
    );
    reportContainer.appendChild(
      Elements.createBr(),
    );
    reportContainer.appendChild(
      Elements.createLabel({
        textContent: 'Description*',
        inputType: 'info__description',
      }),
    );
    reportContainer.appendChild(
      Elements.createInput({
        id: 'info__description',
        type: 'text',
        placeholder: 'Description',
        required: true,
      }),
    );
    reportContainer.appendChild(
      Elements.createBr(),
    );
    reportContainer.appendChild(
      Elements.createLabel({
        textContent: 'Category*',
        inputType: 'info__category',
      }),
    );
    reportContainer.appendChild(
      Elements.createInput({
        id: 'info__category',
        type: 'text',
        placeholder: 'Category',
        required: true,
      }),
    );
    reportContainer.appendChild(
      Elements.createBr(),
    );
    reportContainer.appendChild(
      Elements.createLabel({
        textContent: 'Adress*',
        inputType: 'info__adress',
      }),
      navigator.geolocation.getCurrentPosition(succes, error),
    );
    return reportContainer;
  }
}

export default ReportComp;
