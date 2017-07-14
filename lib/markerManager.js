import { mta } from './data/mta.js';
import { rollingSales } from './data/rollingSales.js';

export function initMapMarkers(map, neighborhoodPoly){
  rollingSales.map(home => {
    createHomeSaleMarker(home, map, neighborhoodPoly);
  })
};

export function initStationMarkers(map, neighborhoodPoly) {
  mta.map(station => {
    createStationMarker(station, map, neighborhoodPoly);
  })
};

function createHomeSaleMarker(home, map, neighborhoodPoly) {
  const image = "https://s3.amazonaws.com/safehavns-dev/smart-home.png";
  const lat = parseFloat(home["LAT"]);
  const lng = parseFloat(home["LNG"]);
  const latLng = new google.maps.LatLng(lat, lng);
  if (google.maps.geometry.poly.containsLocation(latLng, neighborhoodPoly)) {
    var marker = new google.maps.Marker({
      position: {lat, lng},
      // label: {
        // color: "#ffffff",
        // fontFamily: "Helvetica",
        // text: "$"+String(home["SALE PRICE"]),
        // fontSize: "11px",
        // fontWeight: "300",
      // },
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
      + "Sale Price: " + home["SALE PRICE"] +
      "</div>" +
      "<div class='infowindow'>"
      + "Building Class Category: " + home["BUILDING CLASS CATEGORY"] +
      "</div>"
    );
  };

};

function createStationMarker(station, map, neighborhoodPoly) {
  // const image = "https://s3.amazonaws.com/safehavns-dev/mark.png";
  const lat = parseFloat(station["Station_Latitude"]);
  const lng = parseFloat(station["Station_Longitude"]);
  const latLng = new google.maps.LatLng(lat, lng);
  if (google.maps.geometry.poly.containsLocation(latLng, neighborhoodPoly)) {
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
    bindInfoWindow(marker, map,
      "<div class='infowindow'>"
       + "Station: " + station["Station_Name"] +
      "</div>" +
      "<div class='icon-container'>"
       + "<div class='icon'>" + (station["Route_1"] ? station["Route_1"] : "") + "</div>"
       + "<div class='icon'>" + (station["Route_2"] ? station["Route_2"] : "") + "</div>"
       + "<div class='icon'>" + (station["Route_3"] ? station["Route_3"] : "") + "</div>"
       + "<div class='icon'>" + (station["Route_4"] ? station["Route_4"] : "") + "</div>"
       + "<div class='icon'>" + (station["Route_5"] ? station["Route_5"] : "") + "</div>"
       + "<div class='icon'>" + (station["Route_6"] ? station["Route_6"] : "") + "</div>"
       + "<div class='icon'>" + (station["Route_7"] ? station["Route_7"] : "") + "</div>"
       + "<div class='icon'>" + (station["Route_8"] ? station["Route_8"] : "") + "</div>"
       + "<div class='icon'>" + (station["Route_9"] ? station["Route_9"] : "") + "</div>" +
      "</div>"
    );
  }
}

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
