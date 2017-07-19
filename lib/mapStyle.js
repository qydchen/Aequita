export const mapStyle = {
  zoom: 13,
  center: {lat: 40.644999, lng: -73.956130},
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
      featureType: 'transit',
      elementType: "labels",
      stylers: [{ "visibility": "off" }]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ "color": "#222333" }]
    },
    {
      featureType: "road.arterial",
      stylers: [{ "visibility": "off" }]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#3583ba'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#ffffff'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#6b6b62'}]
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [{color: '#3d3f56', saturation: 100}]
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
      featureType: 'administrative.neighborhood',
      elementType: 'labels.text.fill',
      stylers: [{ "color": "#ffffff" }],
    },
    {
      featureType: 'road',
      elementType: 'labels',
      stylers: [{ "visibility": "off" }]
    },
  ]
}
