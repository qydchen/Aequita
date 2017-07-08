import { mapStyle } from './mapStyle';
import { initMapData, initStationData } from './markerManager';
import { createBorders } from './brooklynGeoJson';

let map;

$(document).ready(
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), mapStyle);
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);
    createBorders(map);
    initMapData(map);
    initStationData(map);
  }
);

window.map = map;
