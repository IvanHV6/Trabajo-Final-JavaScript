document.addEventListener("DOMContentLoaded", () => {
  const empresa = [40.41688, -3.70345]; // Ejemplo: Madrid centro
  const map = L.map("map").setView(empresa, 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(map);

  L.marker(empresa).addTo(map).bindPopup("Piscinas AquaPlus").openPopup();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const usuario = [pos.coords.latitude, pos.coords.longitude];
        L.Routing.control({
          waypoints: [L.latLng(usuario), L.latLng(empresa)],
          routeWhileDragging: false,
          language: "es"
        }).addTo(map);
      },
      err => {
        console.warn("No se pudo obtener la ubicación del usuario:", err.message);
      }
    );
  }
});

