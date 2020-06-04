/* Leaflet map */
const map = L.map('leaflet-map').setView([48.8333395, 2.3717968], 17);

L.marker([48.8333395, 2.3717968]).addTo(map)
    .bindPopup('On est ici !')
    .openPopup();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);