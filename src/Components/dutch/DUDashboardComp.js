/**
 * The Dashboard Component
 */

// Imports
import {
  auth, signOut, getDocs, db, collection, storage, ref, getDownloadURL,
} from '../../lib/firebase';
import Component from '../../lib/Component';
import Elements from '../../lib/Elements';

// Making a new class that gets the methods from the Component class
class DUDashboardComp extends Component {
  constructor() {
    super({
      name: 'Home pagina',
      routerPath: '/dashboard_DU',
      model: {
        linkPhoto: 'https://media.istockphoto.com/photos/large-group-of-people-at-a-concert-party-picture-id1311329449?b=1&k=20&m=1311329449&s=170667a&w=0&h=oiLJ0aGzcxEhM_5nczxFW9ng2VvELcTlXZbxOeSJhgA=',
      },
    });
  }

  // Functions

  // Signout function
  signOut() {
    signOut(auth)
      .then(() => {
        location.replace('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Er is een fout opgetreden, de fout is ${errorMessage}!`);
      });
  }

  render() {
    // creating the home container & the header
    const dashboardContainer = document.createElement('div');
    const headerContainer = document.createElement('header');
    const yourEventContainer = document.createElement('div');
    const otherEventContainer = document.createElement('div');

    const { linkPhoto } = this.model;
    // Function so we can load the already existing events. If email from event is the same
    // as the currently logged in user's email, ...
    const loadEvent = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'events'));
        querySnapshot.forEach((doc) => {
          if (doc.get('email') === localStorage.getItem('emaiLoggedInUser')) {
            // Creating the reference to the firebase storage to get the photo
            const reference = ref(storage, doc.get('photo'));

            // ... This will be made, if the email isn't the same ...
            yourEventContainer.appendChild(
              Elements.createcardYour({
                id: 'card',
                idDivImg: 'card__img',
                idDivText: 'card__info',
                title: doc.get('title'),
                img: linkPhoto,
                imgid: 'card__img--img',
                madeBy: 'Gemaakt door jou',
                date: doc.get('date'),
                idLink: 'button--tertiary',
                hrefLink: '/detailsEvent_DU',
                link: 'details',
                imgAlt: 'Foto',
                onClick: () => { localStorage.setItem('eventName', doc.get('title')); },
              }),
            );
          } else {
            // ... this card will be made if the email isn't the same
            otherEventContainer.appendChild(
              Elements.createcardYour({
                id: 'card',
                idDivImg: 'card__img',
                idDivText: 'card__info',
                title: doc.get('title'),
                img: linkPhoto,
                imgid: 'card__img--img',
                madeBy: `Gemaakt door${doc.get('email')}`,
                date: doc.get('date'),
                idLink: 'button--tertiary',
                hrefLink: '/detailsEvent_DU',
                link: 'details',
                imgAlt: 'Foto',
                onClick: () => { localStorage.setItem('eventName', doc.get('title')); },
              }),
            );
          }
        });
      } catch {
        // This will happen if you fail to upload a event
      }
    };

    // Creating the look of the page
    headerContainer.appendChild(
      Elements.createLink({
        id: 'header--map',
        textContent: 'MAP',
        href: '/map_DU',
      }),
    );

    headerContainer.appendChild(
      Elements.createLink({
        id: 'header--profile',
        textContent: 'AANGEVEN',
        href: '/report_DU',
      }),
    );
    headerContainer.appendChild(
      Elements.createLink({
        id: 'header--profile',
        textContent: 'INSTELLINGEN',
        href: '/settings_DU',
      }),
    );
    headerContainer.appendChild(
      Elements.createButton({
        id: 'button--primary signOut',
        textContent: 'UITLOGGEN',
        onClick: () => { this.signOut(); },
      }),
    );
    // append header to div
    dashboardContainer.appendChild(headerContainer);

    // create the div for the events
    dashboardContainer.appendChild(
      Elements.createHeader({
        id: 'dashboard--Events',
        textContent: 'Evenementen',
        size: 2,
      }),
    );

    // Creating the Your events div
    dashboardContainer.appendChild(
      Elements.createHeader({
        id: 'dashboard--Events__yourEvent',
        textContent: 'Jouw evenementen',
        size: 3,
      }),
    );

    // Loading the eventfunction
    window.addEventListener('load', loadEvent());
    dashboardContainer.appendChild(yourEventContainer);

    dashboardContainer.appendChild(
      Elements.createHeader({
        id: 'dashboard--Events__otherEvents',
        textContent: 'Andere evenementen',
        size: 3,
      }),
    );
    dashboardContainer.appendChild(otherEventContainer);
    dashboardContainer.appendChild(
      Elements.createButton({
        id: 'dashboard--Events__makeNewEvent button--primary',
        textContent: 'Maak een nieuw evenement aan',
        onClick: () => { location.replace('/makenewevent_DU'); },
      }),
    );
    return dashboardContainer;
  }
}

export default DUDashboardComp;
