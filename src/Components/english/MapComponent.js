/**
 * MAP Component
 */
import { Loader } from '@googlemaps/js-api-loader';
import Component from '../../lib/Component';
import Elements from '../../lib/Elements';

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
  // This is the Panic function
  Panic() {

  }

  render() {
    // Creating the home container & the header
    let map;
    const btnPanic = document.getElementById('button--primary__panic');
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
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
          });
        }),
      );
    };
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
    const error = (e) => alert(`We couldn't get your location! There was an unexpected error which is ${e}`);

    // Get Geolocation
    navigator.geolocation.watchPosition(succes, error);

    // Creating the look of the page
    headerContainer.appendChild(
      Elements.createLink({
        id: 'header--home',
        textContent: '<-- GO BACK',
        href: '/dashboard',
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
        textContent: 'PANIC',
        onClick: () => { navigator.geolocation.watchPosition(panic, error); },
      }),
    );
    MapContainer.appendChild(
      Elements.createButton({
        id: 'button--primary',
        textContent: 'REPORT',
        onClick: () => { location.replace('/report_ENG'); },
      }),
    );
    return MapContainer;
  }
}

export default MapComp;
