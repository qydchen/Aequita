import { mta } from './data/mta.js';
import { rollingSales } from './data/rollingSales.js';

export function initMapData(map){
  rollingSales.slice(0,500).forEach(home => {
    createHomeSale(home, map);
  })
};

export function initStationData(map) {
  mta.forEach(station => {
    createStation(station, map);
  })
};


function createHomeSale(home, map) {
  const image = "https://s3.amazonaws.com/safehavns-dev/mark.png";
  const lat = parseFloat(home["LAT"]);
  const lng = parseFloat(home["LNG"]);
  var marker = new google.maps.Marker({
    position: {lat, lng},
    label: {
      color: "#ffffff",
      fontFamily: "Helvetica",
      text: "$"+String(home["SALE PRICE"]),
      fontSize: "11px",
      fontWeight: "300",
    },
    icon: image,
    map: map,
    id: parseInt(home["ID"])
  });
}

function createStation(station, map) {
  // const image = "https://s3.amazonaws.com/safehavns-dev/mark.png";
  const lat = parseFloat(station["Station_Latitude"]);
  const lng = parseFloat(station["Station_Longitude"]);
  var marker = new google.maps.Marker({
    position: {lat, lng},
    label: {
      color: "#ffffff",
      fontFamily: "Helvetica",
      text: String(station["Station_Name"]),
      fontSize: "11px",
      fontWeight: "300",
    },
    // icon: image,
    map: map,
    id: parseInt(station["id"])
  });
}
