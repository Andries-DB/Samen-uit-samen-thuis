/**
 * MAP Component
 */

// Imports
import { Loader } from '@googlemaps/js-api-loader';
import Component from '../../lib/Component';
import Elements from '../../lib/Elements';

class DUMapComp extends Component {
  constructor() {
    super({

      name: 'KAART',
      routerPath: '/map_DU',
      model: {
      },
    });
  }

  render() {
    // Creating the home container & the header
    let map;
    const GoogleMapContainer = document.createElement('div');
    const MapContainer = document.createElement('div');
    const headerContainer = document.createElement('header');

    // Giving the MapContainer the id 'map' so we can append the map to the div
    GoogleMapContainer.id = 'map';
    // Google API Key
    const loader = new Loader({
      apiKey: 'AIzaSyBeoFTIJ34Y2BnUxfg1kw7ZdUhmo5h2ExY',
      version: 'weekly',
    });

    // Functions
    // Succes & error functions of geolocation
    const succes = (position) => {
      GoogleMapContainer.append(
        loader.load().then(() => {
          map = new google.maps.Map(GoogleMapContainer, {
            center: { lat: position.coords.latitude, lng: position.coords.longitude },
            zoom: 15,
          });
          const marker = new google.maps.Marker({
            position: { lat: position.coords.latitude, lng: position.coords.longitude },
            map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
          });
        }),
      );
    };

    // This is the Panic function
    const panic = (position) => {
      GoogleMapContainer.append(
        loader.load().then(() => {
          map = new google.maps.Map(GoogleMapContainer, {
            center: { lat: position.coords.latitude, lng: position.coords.longitude },
            zoom: 15,
          });
          const marker = new google.maps.Marker({
            position: { lat: position.coords.latitude, lng: position.coords.longitude },
            map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
          });
        }),
      );
    };
    const error = (e) => alert('We konden je locatie niet verkrijgen, staat hij wel ingeschakeld?');

    // Get Geolocation
    navigator.geolocation.watchPosition(succes, error);

    // Creating the look of the page
    headerContainer.appendChild(
      Elements.createLink({
        id: 'header--home',
        textContent: '<-- GA TERUG',
        href: '/dashboard_DU',
      }),
    );
    // append header to div
    MapContainer.appendChild(headerContainer);

    MapContainer.appendChild(
      Elements.createHeader({
        size: 2,
        textContent: this.name,
      }),
    );

    // Appending the mapContainer to the main div.
    MapContainer.appendChild(GoogleMapContainer);

    MapContainer.appendChild(
      Elements.createButton({
        id: 'button--primary panic',
        textContent: 'HELP',
        onClick: () => { navigator.geolocation.watchPosition(panic, error); },
      }),
    );
    MapContainer.appendChild(
      Elements.createButton({
        id: 'button--primary',
        textContent: 'RAPPORTEER',
        onClick: () => { location.replace('/report_DU'); },
      }),
    );
    return MapContainer;
  }
}

export default DUMapComp;
