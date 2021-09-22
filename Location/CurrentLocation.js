export default class CurrentLocation {

  currentLatitude;
  currentLongitude;

 async getCurrentLocation() {
   
     const coords = await new Promise((resolve) => {
       navigator.geolocation.getCurrentPosition(((location) => {
         resolve(location.coords);
       }));
     });
     console.log(coords);
     this.updateCoords(coords.latitude,coords.longitude); 
  }

  updateCoords(latitude, longitude) {
    this.currentLatitude = latitude;
    this.currentLongitude = longitude;
    console.log(this);
  }

}


