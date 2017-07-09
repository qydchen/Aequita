import { mapStyle } from './mapStyle';
import { initMapMarkers, initStationMarkers } from './markerManager';
import { brooklyn } from './data/brooklyn.js';
import { createBorders } from './createBorders'
// import { filterMarkers } from './filter.js';

let map;

$(document).ready(
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), mapStyle);
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);
    createBorders(brooklyn, map);
    initMapMarkers(map);
    initStationMarkers(map);
  }
);


window.map = map;
