// function updateMarkers(data) {
//   const homesObj = {};
//   data.forEach(home => homesObj[home.ID] = home);
//   data.forEach(home => { createMarkerFromHome(home)});
// }
//
// function createMarkerFromHome(home) {
//   // const image = "https://s3.amazonaws.com/safehavns-dev/mark.png";
//   // debugger;
//   const lat = parseFloat(home.LAT);
//   const lng = parseFloat(home.LNG);
//   let marker = new google.maps.Marker({
//     position: {lat, lng},
//     label: {
//       color: "#ffffff",
//       fontFamily: "Helvetica",
//       text: "$"+String(home["SALE PRICE"]),
//       fontSize: "14.5px",
//       fontWeight: "700",
//     },
//     // icon: image,
//     // animation: google.maps.Animation.DROP,
//     map: map,
//     id: parseInt(home.ID)
//   });
// }
