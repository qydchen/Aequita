export function createBorders(geoString, map) {
  map.data.addGeoJson(geoString);
  map.data.setStyle(function(feature) {
    return ({
      strokeWeight: 1
    });
  });

  map.data.addListener('mouseover', function(event) {
    let neighborhood = event.feature.getProperty('neighborhood');
    document.getElementById('detail').textContent = "Neighborhood: " + neighborhood;
    map.data.revertStyle();
    map.data.overrideStyle(event.feature, {fillColor: "green", strokeWeight: 4});
  });

  map.data.addListener('mouseout', function(event) {
    map.data.revertStyle();
  });
}
