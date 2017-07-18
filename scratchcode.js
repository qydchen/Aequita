// import { mta } from './data/mta.js';

// export function initStationMarkers(map, neighborhoodPoly) {
//   clearMarkers();
//   mta.forEach(station => {
//     createStationMarker(station, map, neighborhoodPoly);
//   })
// };

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

// initStationMarkers(map, neighborhoodPoly);
