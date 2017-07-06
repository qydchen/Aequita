// import MarkerManager from './marker_manager.js';

if (typeof require !== 'undefined') {
  var XLSX = require('xlsx');
}
debugger
var workbook = XLSX.readFile('../data/rollingsales_brooklynv2.xls');

let map;
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 40.7081, lng: -73.9571},
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false,
    styles: [
      {
        featureType: 'poi',
        stylers: [{ "visibility": "off" }]
      },
      {
        featureType: 'transit.station.airport',
        stylers: [{ "visibility": "off" }]
      },
      {
        featureType: 'transit.station.bus',
        stylers: [{ "visibility": "off" }]
      },
      {
        featureType: 'transit.line',
        elementType: "geometry",
        stylers: [{ weight: 1000 }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ "color": "#a9a9a9" }]
      },
      {
        featureType: "road.arterial",
        stylers: [{ "visibility": "off" }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#43677d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b6b62'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#6b6b62'}]
      },
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [{color: '#6b6b62'}]
      },
      {
        featureType: 'administrative.locality',
        stylers: [{ "visibility": "off" }]
      },
      {
        featureType: 'administrative.province',
        stylers: [{ "visibility": "off" }]
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [{ "visibility": "off" }]
      },
    ]
  })
  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);

}

// markers = new MarkerManager(this.map);
// markers.updateMarkers(excelrows);
