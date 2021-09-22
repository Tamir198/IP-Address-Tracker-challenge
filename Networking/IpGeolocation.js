
const API_KEY = "KEY";

export default class IpGeolocation {

  location

  async getAddress(ip) {
    const url = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ip}`

   await fetch(url)
      .then(res => res.json())
      .then(data => this.setLocation(data))
  }
  
  setLocation(data){
    this.location = data;
  }
}
