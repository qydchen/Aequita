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

    var strictBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(40.564870, -74.075244),
      new google.maps.LatLng(40.764325, -73.859153));

      google.maps.event.addListener(map, 'dragend', function () {
        if (strictBounds.contains(map.getCenter())) return;

        var c = map.getCenter(),
            x = c.lng(),
            y = c.lat(),
            maxX = strictBounds.getNorthEast().lng(),
            maxY = strictBounds.getNorthEast().lat(),
            minX = strictBounds.getSouthWest().lng(),
            minY = strictBounds.getSouthWest().lat();

        if (x < minX) x = minX;
        if (x > maxX) x = maxX;
        if (y < minY) y = minY;
        if (y > maxY) y = maxY;

        map.setCenter(new google.maps.LatLng(y, x));
    });

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
