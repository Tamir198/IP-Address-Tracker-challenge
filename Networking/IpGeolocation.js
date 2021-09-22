
const API_KEY = "KEY";

export default class IpGeolocation{
  async getAddress(){
    const ip = "8.8.8.8"
    const url = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ip}`
    new Promise(() => {
      fetch(url)
      .then(response => response.json())
      // .then(data => console.log(data));
    });

  }
}
