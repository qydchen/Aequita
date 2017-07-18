// import { mta } from './data/mta.js';
import { rollingSales } from './data/rollingSales.js';
import { digitInputs, numberWithCommas } from './utils.js';

let homesMarkers = [];
let mtaMarkers = [];
let totalSalePrice = 0;
let totalSqFt = 0

export function initMapMarkers(map, neighborhoodPoly){
  clearMarkers();
  totalSalePrice = 0;
  totalSqFt = 0;
  rollingSales.forEach(home => {
    createHomeSaleMarker(home, map, neighborhoodPoly);
  })
};

// export function initStationMarkers(map, neighborhoodPoly) {
//   clearMarkers();
//   mta.forEach(station => {
//     createStationMarker(station, map, neighborhoodPoly);
//   })
// };

function clearMarkers() {
  homesMarkers = homesMarkers.map( home => {
    if (home !== undefined) {
      home.setMap(null);
    }
  });
  mtaMarkers = mtaMarkers.map( station => {
    if (station !== undefined) {
      station.setMap(null);
    }
  });
  homesMarkers = [];
  mtaMarkers = [];
};

function createHomeSaleMarker(home, map, neighborhoodPoly) {
  const image = "https://s3.amazonaws.com/safehavns-dev/smart-home.png";
  const lat = parseFloat(home["LAT"]);
  const lng = parseFloat(home["LNG"]);
  const latLng = new google.maps.LatLng(lat, lng);
  if (google.maps.geometry.poly.containsLocation(latLng, neighborhoodPoly)) {
    var marker = new google.maps.Marker({
      position: {lat, lng},
      icon: image,
      map: map,
      id: parseInt(home["ID"])
    });
    bindInfoWindow(marker, map,
      "<div class='infowindow'>"
      + "Address: " + home["ADDRESS"] +
      "</div>" +
      "<div class='infowindow'>"
      + "Sale Date: " + home["SALE DATE"] +
      "</div>" +
      "<div class='infowindow'>"
      + "Sale Price: $" + home["SALE PRICE"] +
      "</div>" +
      "<div class='infowindow'>"
      + "Year Built: " + home["YEAR BUILT"] +
      "</div>" +
      "<div class='infowindow'>"
      + "Land Square Feet: " + home["LAND SQUARE FEET"] +
      "</div>" +
      "<div class='infowindow'>"
      + "Gross Square Feet: " + home["GROSS SQUARE FEET"] +
      "</div>" +
      "<div class='infowindow'>"
      + "Building Class Category: " + home["BUILDING CLASS CATEGORY"] +
      "</div>"
    );
    totalSqFt += digitInputs(home["GROSS SQUARE FEET"]);
    totalSalePrice += digitInputs(home["SALE PRICE"]);
    homesMarkers.push(marker);
  };

};

// function createStationMarker(station, map, neighborhoodPoly) {
  // const image = "https://s3.amazonaws.com/safehavns-dev/mark.png";
//   const lat = parseFloat(station["Station_Latitude"]);
//   const lng = parseFloat(station["Station_Longitude"]);
//   const latLng = new google.maps.LatLng(lat, lng);
//   if (google.maps.geometry.poly.containsLocation(latLng, neighborhoodPoly)) {
//     var marker = new google.maps.Marker({
//       position: {lat, lng},
//       label: {
//         color: "#ffffff",
//         fontFamily: "Helvetica",
//         text: String(station["Station_Name"]),
//         fontSize: "11px",
//         fontWeight: "300",
//       },
//       // icon: image,
//       map: map,
//       id: parseInt(station["id"])
//     });
//     bindInfoWindow(marker, map,
//       "<div class='infowindow'>"
//        + "Station: " + station["Station_Name"] +
//       "</div>" +
//       "<div class='icon-container'>"
//        + "<div class='icon'>" + (station["Route_1"] ? station["Route_1"] : "") + "</div>"
//        + "<div class='icon'>" + (station["Route_2"] ? station["Route_2"] : "") + "</div>"
//        + "<div class='icon'>" + (station["Route_3"] ? station["Route_3"] : "") + "</div>"
//        + "<div class='icon'>" + (station["Route_4"] ? station["Route_4"] : "") + "</div>"
//        + "<div class='icon'>" + (station["Route_5"] ? station["Route_5"] : "") + "</div>"
//        + "<div class='icon'>" + (station["Route_6"] ? station["Route_6"] : "") + "</div>"
//        + "<div class='icon'>" + (station["Route_7"] ? station["Route_7"] : "") + "</div>"
//        + "<div class='icon'>" + (station["Route_8"] ? station["Route_8"] : "") + "</div>"
//        + "<div class='icon'>" + (station["Route_9"] ? station["Route_9"] : "") + "</div>" +
//       "</div>"
//     );
//     mtaMarkers.push(marker);
//   }
//
// };

function bindInfoWindow(marker, map, html) {
	var infowindow =  new google.maps.InfoWindow({
		content: ''
	});
	google.maps.event.addListener(marker, 'mouseover', function() {
		infowindow.setContent(html);
		infowindow.open(map, marker);
	});
  google.maps.event.addListener(marker, 'mouseout', function() {
		infowindow.close();
	});
};

export function appendStats() {
  let stats = {};
  stats.totalHomes = homesMarkers.length;
  stats.asp =
    Math.round(totalSalePrice/stats.totalHomes) ?
    numberWithCommas(Math.round((totalSalePrice/1000)/stats.totalHomes)) :
    null;

  stats.avgsqft =
    Math.round(totalSqFt/stats.totalHomes) ?
    numberWithCommas(Math.round((totalSqFt/10)/stats.totalHomes) * 10) :
    null;

  stats.pricePerFt = Math.round(totalSalePrice/totalSqFt) ?
    numberWithCommas(Math.round((totalSalePrice/totalSqFt))) :
    null;

  let aspTxt = stats.asp ? "Avg. Selling Price (000's): $" + stats.asp : "";
  let avgsqftTxt = stats.avgsqft ? "Avg. Sq. Feet: " + stats.avgsqft + " sq. ft" : "";
  let pricePerFtTxt = stats.pricePerFt ? "Price/Sq. Feet: $" + stats.pricePerFt : "";

  $('#total-homes').html("Total Homes Sold: " + stats.totalHomes);
  $('#asp').html(aspTxt);
  $('#avgsqft').html(avgsqftTxt);
  $('#priceperft').html(pricePerFtTxt);
};
