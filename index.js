import CurrentLocation from "./Location/CurrentLocation.js";
import MapView from "./Map/map.js";
import IpGeolocation from "./Networking/IpGeolocation.js";
window.onload = () => {
  const geoLocation = new IpGeolocation();
  const mapView = new MapView();
  const currentLocation = new CurrentLocation();


  mapView.initMap();

  document.querySelector(".submit-ip-btn").addEventListener("click", () => {
    const ip = document.querySelector(".ip-input").value;
    const address = geoLocation.getAddress(ip).then((() => console.log("Do Something with adreess")));



  });

  //TODO check why Done is printed before getCurrentLocation is finished
  currentLocation.getCurrentLocation().then(() =>
    mapView.setMapLocation(
      currentLocation.currentLatitude, currentLocation.currentLongitude)
  );

}
