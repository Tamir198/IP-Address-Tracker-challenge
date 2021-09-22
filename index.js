import CurrentLocation from "./Location/CurrentLocation.js";
import MapView from "./Map/map.js";
import IpGeolocation from "./Networking/IpGeolocation.js";
window.onload = () => {
  const geoLocation = new IpGeolocation();
  const mapView = new MapView();

  mapView.initMap();
  setMapToCurrentLocation(mapView);


  document.querySelector(".submit-ip-btn").addEventListener("click", () => {
    const ip = document.querySelector(".ip-input").value;
    geoLocation.getAddress(ip).then(() => setDetailsForLocation(geoLocation.location,ip));

  })};

const setMapToCurrentLocation = (mapView)=>{

  const currentLocation = new CurrentLocation();

  currentLocation.getCurrentLocation().then(() =>
  mapView.setMapLocation(currentLocation.currentLatitude, currentLocation.currentLongitude));
}


const setDetailsForLocation = (data,ip) =>{
  console.log(data);
  document.getElementById("location").innerHTML  = `${data.location.country}-${data.location.region} <br> ${data.location.city}`;
  document.getElementById("timezone").innerHTML  = `UTC ${data.location.timezone}`;
  document.getElementById("ip").innerHTML  = ip;
  document.getElementById("coordinates").innerHTML  = `${data.isp}`;
  

}
