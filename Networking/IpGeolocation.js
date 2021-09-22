
const API_KEY = "API_KEY";

export default class IpGeolocation {
  locationData;

  async getAddress(ip) {
    const url = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ip}`;

   await fetch(url)
      .then(res => res.json())
      .then(data => this.setLocation(data));
  }
  
  setLocation(data){
    this.locationData = data;
  }
}
