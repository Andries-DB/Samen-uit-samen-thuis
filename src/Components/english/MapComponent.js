/**
 * Account information Component
 */
import { Loader } from '@googlemaps/js-api-loader';
import Component from '../../lib/Component.js';
import Elements from '../../lib/Elements.js';

class MapComp extends Component {
  constructor() {
    super({

      name: 'MAP',
      routerPath: '/map',
      model: {
      },
    });
  }

  // Functions
  Panic() {

  }

  render() {
    // Variables
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
          });
        }),
      );
    };
    const error = (e) => alert(`We couldn't get your location! There was an unexpected error which is ${e}`);

    // Get Geolocation
    navigator.geolocation.watchPosition(succes, error);

    // Set Title & header
    headerContainer.appendChild(
      Elements.createLink({
        id: 'header--home',
        textContent: '<-- GO BACK',
        href: '/dashboard%ENG',
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
        id: 'button--primary',
        textContent: 'PANIC',

      }),
    );
    MapContainer.appendChild(
      Elements.createButton({
        id: 'button--primary',
        textContent: 'REPORT',
        onClick: () => { location.replace('/report%ENG'); },
      }),
    );
    return MapContainer;
  }
}

export default MapComp;
