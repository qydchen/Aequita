import { brooklyn } from './data/brooklyn.js';

export function createBorders(map) {
  return loadGeoJsonString(brooklyn, map);
}

function loadGeoJsonString(geoString, map) {
  map.data.addGeoJson(geoString);
}
