import MarkerManager from './marker_manager.js';

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 40.7081, lng: -73.9571},
    scrollwheel: false,
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
        stylers: [{ weight: 1000 }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#6b6b62'}]
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

    ]
  })
  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);

  window.map = map;
}

$(initMap)
