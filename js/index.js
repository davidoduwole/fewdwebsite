/** Initialize the map */
function initMap() {
    let sweetdecor = {lat: 51.445940, lng: -0.113517};
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: sweetdecor
    });
    let marker = new google.maps.Marker({
      position: sweetdecor,
      map: map
    });
  }