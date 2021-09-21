const mapBoxAccesToken = "TOKEN"

export default class MapView {

  constructor(){
    this.map = L.map('mapid').setView([51.505, -0.09], 13);
  }


  initMap() {

    L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`, {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: mapBoxAccesToken
    }).addTo(this.map);

  }

  setMapLocation(latitude ,longitude){
    this.map.setView([latitude , longitude], 13);
    // TODO // check that the ip adress is valid
    // TODO //change the map zoom after user entered valid ip
  }



  
}