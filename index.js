import CurrentLocation from "./Location/CurrentLocation.js";
import MapView from "./Map/map.js";
import IpGeolocation from "./Networking/IpGeolocation.js";
window.onload = () => {
  let address =  new IpGeolocation().getAddress("8.8.8");

  const currentLocation = new CurrentLocation();
  currentLocation.getCurrentLocation().then(console.log("Done"));

  document.querySelector("Input").addEventListener("input",updateValue);
  const mapView = new MapView();
  mapView.initMap();
  // mapView.setMapLocation();

  function updateValue() {
    // mapView.setMapLocation(coordinates[0], coordinates[1]);
  }
}
