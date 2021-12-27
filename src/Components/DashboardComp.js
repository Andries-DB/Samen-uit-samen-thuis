/**
 * The Dashboard Component
 */

import { auth, signOut } from '../lib/firebase';
import Component from '../lib/Component';
import Elements from '../lib/Elements';

class DashboardComp extends Component {
  constructor() {
    super({
      name: 'Dashboard',
      routerPath: '/dashboard',
      model: {
        inputEm: 'text',
        inputWw: 'password',
        placeholderEm: 'email',
        placeholderWw: 'password',

      },
    });
  }

  // Functie's
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

  render() {
    // destructure model

    // create a home container
    const dashboardContainer = document.createElement('div');

    // create a header
    dashboardContainer.appendChild(
      Elements.createHeader({
        textContent: 'LOG OUT',
      }),
    );
    dashboardContainer.appendChild(
      Elements.createButton({
        id: 'button--primary',
        textContent: 'LOG OUT',
        onClick: () => { this.signOut(); },
      }),
    );

    return dashboardContainer;
  }
}

export default DashboardComp;
