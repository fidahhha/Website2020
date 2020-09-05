var mymap = L.map('map-container').setView([-37.800036, 175.270649], 13);

// mapbox api for leaflet map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZWhqYzEiLCJhIjoiY2thcmZpZnBvMDFhMTJybjZmenM1aXA5NSJ9.3YJq74X8yRE-5tQ7q04mUw'
}).addTo(mymap);

var marker = L.marker([-37.800036, 175.270649]).addTo(mymap);
// update the map location
function setMap(lat, lon) {
    mymap.setView([lat, lon], 13);
}