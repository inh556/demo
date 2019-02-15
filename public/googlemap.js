

function initMap() {
  var myLatLng = {lat: 0, lng: -92.1419};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: myLatLng,
    mapTypeId: 'terrain'
  });

  var markers = [];

  $.getJSON("user.json", function(json) {
    
    for(let i = 0; i < json.length; i++) {
      var latLng = new google.maps.LatLng(json[i].last_location.location.lat,
        json[i].last_location.location.lon);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
      });
    markers.push(marker);
    }
  });
 var markerCluster = new MarkerClusterer(map, markers);
}
