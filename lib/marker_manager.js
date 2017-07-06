export default class MarkerManager {
  constructor(map) {
    this.map = map;
    // this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(homes) {
    const homestObj = {};
    homes.forEach(home => homesObj[home.id] = home);
    homes.forEach(home => { this.createMarkerFromHome(home)});
  }

  createMarkerFromHome(home) {
    const image = "https://s3.amazonaws.com/safehavns-dev/mark.png";
    const lat = home.lat;
    const lng = home.lng;
    let marker = new googlemaps.Marker({
      position: {lat, lng},
      label: {
        color: "#ffffff",
        fontFamily: "Helvetica",
        text: "$"+String(home.price),
        fontSize: "14.5px",
        fontWeight: "700",
      },
      icon: image,
      // animation: google.maps.Animation.DROP,
      map: this.map,
      id: home.id
    });
    // marker.addListener('click', this.displayDetail.bind(marker));
  }

}
