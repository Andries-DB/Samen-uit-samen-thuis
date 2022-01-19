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
class FRDashboardComp extends Component {
  constructor() {
    super({
      name: 'Page d\'accueil',
      routerPath: '/dashboard_FR',
      model: {
        linkPhoto: 'https://media.istockphoto.com/photos/large-group-of-people-at-a-concert-party-picture-id1311329449?b=1&k=20&m=1311329449&s=170667a&w=0&h=oiLJ0aGzcxEhM_5nczxFW9ng2VvELcTlXZbxOeSJhgA=',
      },
    });
  }

  // Functions

  // Sign out function
  signOut() {
    signOut(auth)
      .then(() => {
        location.replace('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Une erreur s'est produite, l'erreur est ${errorMessage}!`);
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
            // Creating the reference to the storage from Firebase
            const reference = ref(storage, doc.get('photo'));

            // ... This will be made, if the email is the same ...
            yourEventContainer.appendChild(
              Elements.createcardYour({
                id: 'card',
                idDivImg: 'card__img',
                idDivText: 'card__info',
                title: doc.get('title'),
                img: linkPhoto,
                imgid: 'card__img--img',
                madeBy: 'Fabriqué par toi',
                date: doc.get('date'),
                idLink: 'button--tertiary',
                hrefLink: '/detailsEvent_FR',
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
                madeBy: `Made by ${doc.get('email')}`,
                date: doc.get('date'),
                idLink: 'button--tertiary',
                hrefLink: '/detailsEvent_FR',
                link: 'details',
                imgAlt: 'Foto',
                onClick: () => {
                  localStorage.setItem('eventName', doc.get('title'));
                },
              }),
            );
          }
        });
      } catch {
        console.log('Error reading document');
      }
    };

    // Creating the look of the page
    headerContainer.appendChild(
      Elements.createLink({
        id: 'header__map',
        textContent: 'CARTE',
        href: '/map',
      }),
    );

    headerContainer.appendChild(
      Elements.createLink({
        id: 'header__profile',
        textContent: 'RAPPORT',
        href: '/report_FR',
      }),
    );
    headerContainer.appendChild(
      Elements.createLink({
        id: 'header__settings',
        textContent: 'PARAMÈTRES',
        href: '/settings_FR',
      }),
    );
    headerContainer.appendChild(
      Elements.createButton({
        id: 'button--primary signOut header__logout',
        textContent: 'SE DÈCONNECTER',
        onClick: () => { this.signOut(); },
      }),
    );
    // append header to div
    dashboardContainer.appendChild(headerContainer);

    // create the div for the events
    dashboardContainer.appendChild(
      Elements.createHeader({
        id: 'dashboard--Events',
        textContent: 'Événements',
        size: 2,
      }),
    );

    // Creating the Your events div
    dashboardContainer.appendChild(
      Elements.createHeader({
        id: 'dashboard--Events__yourEvent',
        textContent: 'Votre événements',
        size: 3,
      }),
    );

    // Loading the eventsfunction
    window.addEventListener('load', loadEvent());
    dashboardContainer.appendChild(yourEventContainer);

    dashboardContainer.appendChild(
      Elements.createHeader({
        id: 'dashboard--Events__otherEvents',
        textContent: 'Autre événements',
        size: 3,
      }),
    );
    dashboardContainer.appendChild(otherEventContainer);
    dashboardContainer.appendChild(
      Elements.createButton({
        id: 'dashboard--Events__makeNewEvent button--primary',
        textContent: 'CRÉER UN NOUVEL ÉVÉNEMENTS ',
        onClick: () => { location.replace('/makenewevent_FR'); },
      }),
    );
    return dashboardContainer;
  }
}

export default FRDashboardComp;
