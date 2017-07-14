import { initMapMarkers, initStationMarkers } from './markerManager';

export function createBorders(geoString, map) {
  map.data.addGeoJson(geoString);
  map.data.setStyle(function(feature) {
    return ({
      strokeWeight: 1
    });
  });

  map.data.addListener('click', function(event) {

    let neighborhood = event.feature.getProperty('neighborhood');
    document.getElementById('detail').textContent = "Neighborhood: " + neighborhood;

    let neighborhoodGeo = event.feature.getGeometry();
    let neighborhoodPoly = new google.maps.Polygon({
      paths: neighborhoodGeo.getAt(0).getArray(),
      map: map,
      clickable: false,
      visible: false,
    })

    initMapMarkers(map, neighborhoodPoly);
    // initStationMarkers(map, neighborhoodPoly);

    map.data.revertStyle();
    map.data.overrideStyle(event.feature, {fillColor: "green", strokeWeight: 4});

    let lat = event.latLng.lat();
    let lng = event.latLng.lng();
    map.setZoom(14);
    map.panTo(new google.maps.LatLng(lat, lng));

  });


}
