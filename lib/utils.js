export function digitInputs(str) {
  str = str.replace(/,/g, "");
  return parseInt(str);
}

export function numberWithCommas(int) {
  return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getBoundBoxFromPoly(neighborhoodPoly) {
  let polyArrays = neighborhoodPoly.latLngs.b[0].b // returns [_.F, _.F, _.F, ....]
  let minLat = null;
  let maxLat = null;
  let minLng = null;
  let maxLng = null;
  polyArrays.forEach(_f => {
    let lat = _f.lat();
    let lng = _f.lng();

    if (lat > maxLat || !maxLat) {
      maxLat = lat;
    } else if (lat < minLat || !minLat) {
      minLat = lat;
    }

    if (lng > maxLng || !maxLng) {
      maxLng = lng;
    } else if (lng < minLng || !minLng) {
      minLng = lng;
    }
  })
  return {minLat, minLng, maxLat, maxLng};
}
