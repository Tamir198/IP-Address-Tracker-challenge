import IpGeolocation from "./Networking/IpGeolocation.js";

window.onload = () => {
  let address = new IpGeolocation().getAddress("8.8.8.8");;
}
