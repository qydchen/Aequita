import { mapStyle } from './mapStyle';
import { brooklyn } from './data/brooklyn.js';
import { createBorders } from './createBorders';

let map;

$(document).ready(
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), mapStyle);
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);
    createBorders(brooklyn, map);

    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }

  }
);

window.map = map;
