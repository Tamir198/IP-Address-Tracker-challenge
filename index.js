import MapView from "./Map/map.js";
import IpGeolocation from "./Networking/IpGeolocation.js";
window.onload = () => {
  let address = new IpGeolocation().getAddress("8.8.8.8");

  document.querySelector("Input").addEventListener("input",updateValue);
  // TODO //get current location when user first enter 
  const mapView = new MapView();
  mapView.initMap();



  function updateValue(e) {
    mapView.setMapLocation(31.8070410604705, 34.70223697818041);
 
   
    console.log(e.target.value);
  }
}
