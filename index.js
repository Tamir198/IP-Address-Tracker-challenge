import CurrentLocation from "./Location/CurrentLocation.js";
import MapView from "./Map/map.js";
import IpGeolocation from "./Networking/IpGeolocation.js";
window.onload = () => {

  const geoLocation = new IpGeolocation();
  const mapView = new MapView();

  mapView.initMap();

  // updateLocationUI(geoLocation);
  // setMapToCurrentLocation(mapView);

  document.querySelector(".submit-ip-btn").addEventListener("click", () => {
    updateLocationUI(geoLocation,mapView);
  });
};

const setMapToCurrentLocation = (mapView)=>{
  const currentLocation = new CurrentLocation();

  currentLocation.getCurrentLocation().then(() =>
  mapView.setMapLocation(currentLocation.currentLatitude, currentLocation.currentLongitude));
}

const updateLocationUI = (geoLocation,mapView)=>{
  const ip = document.querySelector(".ip-input").value;

  geoLocation.getAddress(ip).then(() => {
    changeLocationUI(geoLocation.locationData);
    mapView.setMapLocation(geoLocation.locationData.location.lat,geoLocation.locationData.location.lng)
  });
}

const changeLocationUI = (data) =>{
  document.getElementById("location").innerHTML  = `${data.location.country}-${data.location.region} <br> ${data.location.city}`;
  document.getElementById("timezone").innerHTML  = `UTC ${data.location.timezone}`;
  document.getElementById("ip").innerHTML  = data.ip;
  document.getElementById("coordinates").innerHTML  = `${data.isp}`;
}


