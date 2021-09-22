const MAP_BOX_ACCES_TOKEN = "ACCES_TOKEN";

export default class MapView {

  constructor() {
    //[51.505, -0.09] - random default values - has no meaning
    this.map = L.map('mapid').setView([51.505, -0.09], 13);
  }

  initMap() {

    L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`, {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: MAP_BOX_ACCES_TOKEN
    }).addTo(this.map);

  }

  setMapLocation(latitude, longitude) {
    this.map.setView([latitude, longitude], 13);

    const marker = L.marker([latitude, longitude]);
    marker.bindPopup(`<b>Hey there<br/>I am your location popup and your coordinates are:
     <br/> (${latitude}, ${longitude})`).openPopup();

    marker.on('mouseover', (e) => {
      e.target.openPopup();
    });

    marker.addTo(this.map);
  }

}