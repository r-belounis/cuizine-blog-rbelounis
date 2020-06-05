import Highway from '@dogstudio/highway';
import L from 'leaflet';

class CustomRenderer extends Highway.Renderer {

    onEnter() {
        /* Leaflet map */
        const map = L.map('leaflet', {
            center: [48.8333395, 2.3717968],
            zoom: 17
        });

        const marker = L.marker([48.8333395, 2.3717968])
            .addTo(map)
            .bindPopup('On est ici !')
            .openPopup();

        const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            })
            .addTo(map)
    }
}

export default CustomRenderer;