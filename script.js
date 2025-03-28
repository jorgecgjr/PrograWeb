// Inicializar el mapa y establecer la vista a una ubicación y zoom específicos
const map = L.map('map').setView([19.762751, -101.199671], 18); // Coordenadas de Omega CU

// Añadir la capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Añadir un marcador
const marker = L.marker([19.762751, -101.199671]).addTo(map);
marker.bindPopup("<b>¡Hola, soy Jorge Correa!</b><br>Este marcador indica mi casa, en Galaxia Tarímbaro.").openPopup();

const circle = L.circle([19.6865849, -101.2038311], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(map);