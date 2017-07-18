import { rollingSales } from './data/rollingSales.js';
import { digitInputs, numberWithCommas, getBoundBoxFromPoly } from './utils.js';

let filteredSales = {};

let homesMarkers = [];
let mtaMarkers = [];
let totalSalePrice = 0;
let totalSqFt = 0

export function initMapMarkers(map, neighborhoodPoly, neighborhood){
  clearMarkers();
  totalSalePrice = 0;
  totalSqFt = 0;

  let boundBox = getBoundBoxFromPoly(neighborhoodPoly);
  if (!filteredSales[neighborhood]) {
    filteredSales[neighborhood] = rollingSales.filter(function(home){
      const lat = parseFloat(home["LAT"]);
      const lng = parseFloat(home["LNG"]);
      return (lat > boundBox.minLat
        && lng > boundBox.minLng
        && lat < boundBox.maxLat
        && lng < boundBox.maxLng
      )
    })
  }
  console.log(filteredSales);
  filteredSales[neighborhood].forEach(home => {
    createHomeSaleMarker(home, map, neighborhoodPoly);
  })
};

function clearMarkers() {
  homesMarkers = homesMarkers.map( home => {
    if (home !== undefined) {
      home.setMap(null);
    }
  });
  mtaMarkers = mtaMarkers.map( station => {
    if (station !== undefined) {
      station.setMap(null);
    }
  });
  homesMarkers = [];
  mtaMarkers = [];
};

function createHomeSaleMarker(home, map, neighborhoodPoly) {
  const image = "https://s3.amazonaws.com/safehavns-dev/smart-home.png";
  const lat = parseFloat(home["LAT"]);
  const lng = parseFloat(home["LNG"]);
  const latLng = new google.maps.LatLng(lat, lng);
  if (google.maps.geometry.poly.containsLocation(latLng, neighborhoodPoly)) {
    var marker = new google.maps.Marker({
      position: {lat, lng},
      icon: image,
      map: map,
      id: parseInt(home["ID"])
    });

    bindInfoWindow(marker, map,
      "<div class='infowindow'>"
      + "Address: " + home["ADDRESS"] +
      "</div>" +
      "<div class='infowindow'>"
      + "Sale Date: " + home["SALE DATE"] +
      "</div>" +
      "<div class='infowindow strong'>"
      + "Sale Price ($): " + numberWithCommas(digitInputs(home["SALE PRICE"])) +
      "</div>" +
      "<div class='infowindow'>"
      + "Price/Sq. Feet ($/sq. ft): " + Math.round(digitInputs(home["SALE PRICE"])/digitInputs(home["GROSS SQUARE FEET"])) +
      "</div>" +
      "<div class='infowindow'>"
      + "Year Built: " + home["YEAR BUILT"] +
      "</div>" +
      "<div class='infowindow'>"
      + "Land Square Feet: " + home["LAND SQUARE FEET"] +
      "</div>" +
      "<div class='infowindow'>"
      + "Gross Square Feet: " + home["GROSS SQUARE FEET"] +
      "</div>" +
      "<div class='infowindow'>"
      + "Building Class Category: " + home["BUILDING CLASS CATEGORY"] +
      "</div>"
    );
    totalSqFt += digitInputs(home["GROSS SQUARE FEET"]);
    totalSalePrice += digitInputs(home["SALE PRICE"]);
    homesMarkers.push(marker);
  };
};

function bindInfoWindow(marker, map, html) {
	var infowindow =  new google.maps.InfoWindow({
		content: ''
	});
	google.maps.event.addListener(marker, 'mouseover', function() {
		infowindow.setContent(html);
		infowindow.open(map, marker);
	});
  google.maps.event.addListener(marker, 'mouseout', function() {
		infowindow.close();
	});
};

export function appendStats() {
  let stats = {};
  stats.totalHomes = homesMarkers.length;
  stats.asp =
    Math.round(totalSalePrice/stats.totalHomes) ?
    numberWithCommas(Math.round((totalSalePrice/1000)/stats.totalHomes)) :
    null;

  stats.avgsqft =
    Math.round(totalSqFt/stats.totalHomes) ?
    numberWithCommas(Math.round((totalSqFt/10)/stats.totalHomes) * 10) :
    null;

  stats.pricePerFt = Math.round(totalSalePrice/totalSqFt) ?
    numberWithCommas(Math.round((totalSalePrice/totalSqFt))) :
    null;

  let aspTxt = stats.asp ? stats.asp : "";
  let avgsqftTxt = stats.avgsqft ? stats.avgsqft : "";
  let pricePerFtTxt = stats.pricePerFt ? stats.pricePerFt : "";

  $('#total-homes').html(stats.totalHomes);
  $('#asp').html(aspTxt);
  $('#avgsqft').html(avgsqftTxt);
  $('#priceperft').html(pricePerFtTxt);
};
