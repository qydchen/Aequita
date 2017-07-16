# Gentrifi

[View the live App](http://www.davidchen.world/Gentrifi)

Gentrifi is a data-visualization infographic that plot recent home sales price data by neighborhood. This infographic aims to show a concept that can be expanded as a tool for various professionals and home-seekers.

## Implementation

### Gathering data

The recent home sales price data in NYC is obtained from public databases from http://www1.nyc.gov/site/finance/taxes/property-rolling-sales-data.page. The data is then manually filtered in Excel. The real estate data will only include 1-3 family dwellings and date of sale will only be from Jan 2017 to May 2017. The real estate data will also exclude transfer of ownerships ($0 sale price) and oddly cheap sale prices ($10,000 for a 2-family home).

The filtered excel database is converted into an array of objects from CSV after generating latitude and longitude for each of the 2517 entries.

Below is a sample of the array:
```JavaScript
export const rollingSales = [
  {
  "ID": 2268,
  "ADDRESS": "1208 8TH AVENUE",
  "CITY": "Brooklyn",
  "STATE": "NY",
  "ZIP CODE": 11215,
  "LNG": -73.980804,
  "LAT": 40.663864,
  "NEIGHBORHOOD": "PARK SLOPE",
  "BUILDING CLASS CATEGORY": "03 THREE FAMILY DWELLINGS",
  "LAND SQUARE FEET": "1,284",
  "GROSS SQUARE FEET": "2,080",
  "YEAR BUILT": 1899,
  "SALE PRICE": "1,670,000",
  "SALE DATE": "4/20/17"
  },
  {
    "ID": 2269,
    "ADDRESS": "1372 EAST 24",
    "CITY": "Brooklyn",
    "STATE": "NY",
    "ZIP CODE": 11210,
    "LNG": -73.95091,
    "LAT": 40.617313,
    "NEIGHBORHOOD": "MIDWOOD",
    "BUILDING CLASS CATEGORY": "01 ONE FAMILY DWELLINGS",
    "LAND SQUARE FEET": "4,000",
    "GROSS SQUARE FEET": "2,730",
    "YEAR BUILT": 1915,
    "SALE PRICE": "1,675,000",
    "SALE DATE": "1/4/17"
  }
]
```

Along with a database of rolling home sales, a database of neighborhood geoJSON has to be loaded onto Google Maps API. The geoJSON data for the various Brooklyn neighborhoods are found here: http://catalog.opendata.city/dataset/brooklyn-neighborhoods-polygon/resource/7a0a136e-b7bb-44f5-8044-f21591ef49aa

Below is a sample of the shape that is required to pass into Google maps:
```JavaScript
export const brooklyn = {
"type": "FeatureCollection",

"features": [
  { "type": "Feature",
    "properties": {
      "neighborhood": "Bath Beach",
      "boroughCode": "3",
      "borough": "Brooklyn",
      "@id": "http:\/\/nyc.pediacities.com\/Resource\/Neighborhood\/Bath_Beach" },
    "geometry": {
      "type": "Polygon",
      "coordinates":
      [ [ [ -73.99381, 40.601950000000194 ],
      [ -73.999619627195642, 40.5964689678977 ],
      [ -74.000471, 40.595939 ],
      [ -74.000167439243185, 40.595549476398048 ],
      [ -74.001844151354831, 40.593977667237887 ],
      [ -74.002003948093702, 40.59413237127562 ],
      [ -74.003634019473168, 40.596080599242953 ],
      [ -74.003974449525586, 40.596343011141563 ],
      [ -74.004178751373729, 40.596500492055917 ],
      [ -74.005526219861366, 40.597539154070802 ],
      [ -74.009217239049079, 40.59984404515253 ],
      [ -74.010901450535087, 40.60071555985418 ],
      [ -74.012369816027132, 40.601349257116311 ],
      [ -74.014783637167511, 40.60208210297089 ],
      [ -74.015625838923143, 40.602235351515411 ],
      [ -74.015626147147429, 40.602235407600325 ],
      [ -74.016182962982555, 40.602336726809881 ],
      [ -74.016526357899423, 40.602399211565917 ],
      [ -74.018323472168646, 40.602417651130637 ],
      [ -74.019135639028889, 40.602612754505159 ],
      [ -74.019434836341958, 40.602843501044902 ],
      [ -74.018641, 40.603655000000224 ],
      [ -74.019152335880349, 40.603819763783996 ],
      [ -74.018531, 40.604458000000228 ],
      [ -74.017467, 40.604965 ],
      [ -74.015499, 40.606842000000128 ],
      [ -74.01702, 40.60765500000025 ],
      [ -74.011726046282689, 40.612743758637301 ],
      [ -73.99381, 40.601950000000194 ]
    ]]}
  }]
}

```

### Creating borders

Loading geoJSON into Google maps API is simple.

```JavaScript
map.data.addGeoJson(geoString);
```

Further, we can give a listener to each area like so:

```JavaScript
  map.data.addListener('click', cb(event) {})
```

Within the callback, I created a Google maps API Polygon class that will be the same as the neighborhood. That polygon will then be used as a filter to fetch homes in that area.

```JavaScript
  let neighborhoodGeo = event.feature.getGeometry();
  let neighborhoodPoly = new google.maps.Polygon({
    paths: neighborhoodGeo.getAt(0).getArray(),
    map: map,
    clickable: false,
    visible: false,
  });

  initMapMarkers(map, neighborhoodPoly);
```

### Making markers
Upon clicking on a neighborhood polygon, the callback will run a function named `initMapMarkers`:

```JavaScript
export function initMapMarkers(map, neighborhoodPoly){
  clearMarkers();
  totalSalePrice = 0;
  totalSqFt = 0;
  rollingSales.forEach(home => {
    createHomeSaleMarker(home, map, neighborhoodPoly);
  })
};
```

### Architecture and Technologies

This project will be implemented with the following technologies:

- `JavaScript` for programming logic,
- `Google Map API`

In addition to the entry file, there will be three scripts involved in this project:

`map.js`: this script will handle the logic for creating and rendering the map.

`markerManager.js`: this script will be responsible for handling the logic of real estate markers on the map.

`mapStyle.js`: this script will hold the styling of the map api.

The real estate data will only include 1-3 family dwellings and date of sale will only be from Jan 2017 to May 2017. The real estate data will also exclude transfer of ownerships ($0 sale price).

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and setting up the map in `map.js`. Write a basic entry file and the bare bones of the scripts outlined above. Learn the how to generate the NYC subway on the map. Goals for the day:

- Learn enough to render the NYC subway map onto the map.
- Style the map.

**Day 2**: Figure out how to compile the data onto Google Maps. Clean the data and do only homes. Goals for the day:

- Import real estate database and populate real markers on the map.
- Make each subway line in the map clickable, toggling the state of the map on click.

**Day 3**: Dedicate this day to further expand knowledge about the Google Maps API. Think about how to generate real estate markers when filtering by subway line, how to connect them, etc. Then, change the style of the map. Add geospatial data to toggle selection by neighborhoods.

- Generate markers close to proximity of the subway line when toggling state.
- Generate markers within a neighborhood upon selection

**Day 4**: Polish, debug, and style the app.
