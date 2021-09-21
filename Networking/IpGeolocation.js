const API_KEY = "API-KEy-Here";

export default class IpGeolocation{
  async getAddress(){
    const ip = "8.8.8.8"
    const url = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ip}`
    let myPromise = new Promise(function (myResolve, myReject) {
      fetch(url)
      .then(response => response.json())
      .then(data => console.log(data));
      console.log("Api call ended");
  
      myResolve(); 
      myReject();  
    });
  
    myPromise.then(
      function myResolve(value) { console.log(value) },
      function myReject(error) { console.log(error) }
    );
  
  
  }
}
