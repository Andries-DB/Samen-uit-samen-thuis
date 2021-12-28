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
      },
    });
  }

  // Functions
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
    // create a home container
    const dashboardContainer = document.createElement('div');
    const headerContainer = document.createElement('header');

    const yourEventContainer = document.createElement('div');
    const invitedEventContainer = document.createElement('div');
    const acceptedEventContainer = document.createElement('div');

    // create the header

    headerContainer.appendChild(
      Elements.createLink({
        id: 'header--home',
        textContent: 'HOME',
        href: '/dashboard',
      }),
    );
    headerContainer.appendChild(
      Elements.createLink({
        id: 'header--map',
        textContent: 'MAP',
        href: '/map',
      }),
    );
    headerContainer.appendChild(
      Elements.createLink({
        id: 'header--profile',
        textContent: 'PROFILE',
        href: '/profile',
      }),
    );
    headerContainer.appendChild(
      Elements.createButton({
        id: 'button--primary signOut',
        textContent: 'LOG OUT',
        onClick: () => { this.signOut(); },
      }),
    );
    // append header to div
    dashboardContainer.appendChild(headerContainer);

    // create the div
    dashboardContainer.appendChild(
      Elements.createHeader({
        id: 'dashboard--Events',
        textContent: 'Events',
        size: 2,
      }),
    );
    dashboardContainer.appendChild(
      Elements.createHeader({
        id: 'dashboard--Events__yourEvent',
        textContent: 'Your events',
        size: 5,
      }),
    );
    dashboardContainer.appendChild(
      Elements.createHeader({
        id: 'dashboard--Events__invitedEvent',
        textContent: 'Invited events',
        size: 5,
      }),
    );
    dashboardContainer.appendChild(
      Elements.createHeader({
        id: 'dashboard--Events__acceptedEvent',
        textContent: 'Accepted events',
        size: 5,
      }),
    );

    dashboardContainer.appendChild(
      Elements.createButton({
        id: 'dashboard--Events__makeNewEvent button--primary',
        textContent: 'MAKE A NEW EVENT',
        onClick: () => { location.replace('/makenewevent'); },
      }),
    );
    return dashboardContainer;
  }
}

export default DashboardComp;
