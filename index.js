// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 32.689066832084144, lng: -17.11847517598948 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
