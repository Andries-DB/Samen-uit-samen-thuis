/**
 * The Dashboard Component
 */

import {
  auth, signOut, getDocs, db, collection, storage, ref, getDownloadURL,
} from '../../lib/firebase.js';
import Component from '../../lib/Component'
import Elements from '../../lib/Elements';

class DashboardComp extends Component {
  constructor() {
   super({
      name: 'Dashboard',
      routerPath: '/dashboard%ENG',
      model: {
        linkPhoto: 'https://media.istockphoto.com/photos/large-group-of-people-at-a-concert-party-picture-id1311329449?b=1&k=20&m=1311329449&s=170667a&w=0&h=oiLJ0aGzcxEhM_5nczxFW9ng2VvELcTlXZbxOeSJhgA=',
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
    const otherEventContainer = document.createElement('div');

    const { linkPhoto } = this.model;
    // Function so we can load the already existing events. 
    const loadEvent = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'events'));
        querySnapshot.forEach((doc) => {
          if (doc.get('email') === localStorage.getItem('emaiLoggedInUser'))
          {
            const reference = ref(storage, doc.get('photo'));

            yourEventContainer.appendChild(
              Elements.createcardYour({
                id: 'card',
                idDivImg: 'card__img',
                idDivText: 'card__info',
                title: doc.get('title'),
                img: linkPhoto,
                imgid: 'card__img--img',
                madeBy: `Made by you`,
                date: doc.get('date'),
                idLink: 'button--tertiary',
                hrefLink: '/detailsEvent%ENG',
                link: "details",
                imgAlt: "Foto",
                onClick: () => {localStorage.setItem('eventName' , doc.get('title'));}, 
              }),
            );
          }
          else{
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
                hrefLink: '/detailsEvent%ENG',
                link: "details",
                imgAlt: "Foto",
                onClick: () => {localStorage.setItem('eventName' , doc.get('title'));}, 
              }),
            );            
          }
        })
      }
      catch {
        console.log("Error reading document");
      }
    }

    //Create Header
    headerContainer.appendChild(
      Elements.createLink({
        id: 'header--map',
        textContent: 'MAP',
        href: '/map%ENG',
      }),
    );

    headerContainer.appendChild(
      Elements.createLink({
        id: 'header--profile',
        textContent: 'REPORT',
        href: '/report%ENG',
      }),
    );
    headerContainer.appendChild(
      Elements.createLink({
        id: 'header--profile',
        textContent: 'SETTINGS',
        href: '/settings%ENG',
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

    // create the div for the events
    dashboardContainer.appendChild(
      Elements.createHeader({
        id: 'dashboard--Events',
        textContent: 'Events',
        size: 2,
      }),
    );

    // Creating the Your events div
    dashboardContainer.appendChild(
      Elements.createHeader({
        id: 'dashboard--Events__yourEvent',
        textContent: 'Your events',
        size: 5,
      }),
    );

    //Loading the eventfunction
    window.addEventListener('load', loadEvent());
    dashboardContainer.appendChild(yourEventContainer);

    dashboardContainer.appendChild(
      Elements.createHeader({
        id: 'dashboard--Events__otherEvents',
        textContent: 'Other events',
        size: 5,
      }),
    );
    dashboardContainer.appendChild(otherEventContainer);
    dashboardContainer.appendChild(
      Elements.createButton({
        id: 'dashboard--Events__makeNewEvent button--primary',
        textContent: 'MAKE A NEW EVENT',
        onClick: () => { location.replace('/makenewevent%ENG'); },
      }),
    );
    return dashboardContainer;
  }
}

export default DashboardComp;