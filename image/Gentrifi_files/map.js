let map;

$(document).ready(
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), mapStyle);
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);
    initMapData();
  }
)

function initMapData() {
  Tabletop.init(
    {
      key: 'https://docs.google.com/spreadsheets/d/10crZzXvtnbpM8uIp3enDP7Lv_7aXwWtp2xmhDJV-aeU/pubhtml',
      callback: function(data, tabletop) {
        data.slice(1,3).forEach(home => {
          createMarker(home);
        } )
      },
      simpleSheet: true
    }
  )
}

function createMarker(home) {
  // const image = "https://s3.amazonaws.com/safehavns-dev/mark.png";
  const lat = parseFloat(home.LAT);
  const lng = parseFloat(home.LNG);
  var marker = new google.maps.Marker({
    position: {lat, lng},
    // label: {
    //   color: "#ffffff",
    //   fontFamily: "Helvetica",
    //   text: "$"+String(home["SALE PRICE"]),
    //   fontSize: "14.5px",
    //   fontWeight: "700",
    // },
    // icon: image,
    animation: google.maps.Animation.DROP,
    map: map,
    // id: parseInt(home.ID)
  });
}
