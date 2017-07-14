import { mapStyle } from './mapStyle';
import { brooklyn } from './data/brooklyn.js';
import { createBorders } from './createBorders'

let map;

$(document).ready(
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), mapStyle);
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);
    createBorders(brooklyn, map);
  }
);


window.map = map;
