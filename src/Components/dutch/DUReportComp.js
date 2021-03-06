/**
 * The Report Component
 */

// Imports
import sgMail from '@sendgrid/mail';
import Component from '../../lib/Component';
import Elements from '../../lib/Elements';

class DUReportComp extends Component {
  constructor() {
    super({
      name: 'Aangeven',
      routerPath: '/report_DU',
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
      sgMail.setApiKey(EMAIL_API_KEY);
      const msg = {
        to: MELDET_EMAIL, // Change to your recipient
        from: 'andries.debaerz@gmail.com', // Change to your verified sender
        subject: 'MELDET Assault',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
      (async () => {
        try {
          await console.log(msg);
        } catch (error) {
          // This will happen if the code fails
        }
      })();
    }

    // Functions for the Geolocation, if success, the adress gets
    // filled with the coördinats of the current postion,
    // If not, there will be an alert
    const succes = (position) => {
      reportContainer.appendChild(
        Elements.createInput({
          id: 'info__adress',
          type: 'text',
          placeholder: 'Adres',
          required: true,
          value: `lat: ${position.coords.latitude}, long: ${position.coords.longitude}`,
        }),
      );
    };
    const error = (e) => alert(`We couldn't get your location! There was an unexpected error which is ${e}`);

    // creating the look of the page
    reportContainer.appendChild(
      Elements.createHeader({
        size: 2,
        textContent: this.name,
      }),
    );
    reportContainer.appendChild(
      Elements.createButton({
        id: 'button--primary',
        textContent: 'GA TERUG',
        onClick: () => { location.replace('/dashboard_DU'); },
      }),
    );
    reportContainer.appendChild(
      Elements.createButton({
        id: 'button--primary__cancel',
        textContent: 'AANGEVEN',
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
        textContent: 'Titel*',
        inputType: 'info__title',
      }),
    );
    reportContainer.appendChild(
      Elements.createInput({
        id: 'info__title',
        type: 'text',
        placeholder: 'Titel',
        required: true,
      }),
    );
    reportContainer.appendChild(
      Elements.createBr(),
    );
    reportContainer.appendChild(
      Elements.createLabel({
        textContent: 'Datum*',
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
        textContent: 'Beschrijving*',
        inputType: 'info__description',
      }),
    );
    reportContainer.appendChild(
      Elements.createInput({
        id: 'info__description',
        type: 'text',
        placeholder: 'Beschrijving',
        required: true,
      }),
    );
    reportContainer.appendChild(
      Elements.createBr(),
    );
    reportContainer.appendChild(
      Elements.createLabel({
        textContent: 'Categorie*',
        inputType: 'info__category',
      }),
    );
    reportContainer.appendChild(
      Elements.createInput({
        id: 'info__category',
        type: 'text',
        placeholder: 'Categorie',
        required: true,
      }),
    );
    reportContainer.appendChild(
      Elements.createBr(),
    );
    reportContainer.appendChild(
      Elements.createLabel({
        textContent: 'Adres*',
        inputType: 'info__adress',
      }),
      navigator.geolocation.getCurrentPosition(succes, error),
    );
    return reportContainer;
  }
}

export default DUReportComp;
