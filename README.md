# Piscinas AquaPlus

Proyecto final de desarrollo web para la empresa ficticia **Piscinas AquaPlus**.  
Incluye una página principal con secciones informativas, un formulario de presupuesto con validación, una galería de imágenes y una página de contacto con mapa dinámico.

---

##  Estructura del proyecto

├── index.html 
├── views/ 
│   ├── contacto.html 
│   ├── galeria.html
│   ├── presupuesto.html 
├── css/ 
│ └── estilos.css 
├── js/ 
│   ├── main.js 
│   ├── contacto.js 
│   └── presupuesto.js 
├── data/ 
│   ├── noticias.json 
│   └── productos.json 
├── assets/ 
│   └── img/  
└── README.md # Documentación del proyecto



Código

---

##  Páginas

- **index.html**  
  Página principal con 4 secciones:  
  - ¿Por qué elegirnos?  
  - Tamaños de piscinas  
  - Noticias (cargadas desde `data/noticias.json` con AJAX)  
  - Opiniones de clientes  

- **contacto.html**  
  Muestra un mapa dinámico con Leaflet.  
  - Marcador de la empresa.  
  - Geolocalización del usuario.  
  - Ruta calculada con Leaflet Routing Machine.  

- **galeria.html**  
  Galería de imágenes de piscinas y proyectos.  

- **presupuesto.html**  
  Formulario de presupuesto con validación en JavaScript:  
  - Nombre (máx. 15 caracteres, solo letras).  
  - Apellidos (máx. 40 caracteres, solo letras).  
  - Teléfono (9 dígitos).  
  - Email (formato válido).  
  - Checkbox de aceptación de condiciones.  
  - Simulación de envío con mensaje de confirmación y reinicio del formulario.

---

## Tecnologías utilizadas

- **HTML5 semántico**  
- **CSS3**  
- **JavaScript (ES6)**  
- **Leaflet + Leaflet Routing Machine**  
- **AJAX (fetch)** para cargar datos externos en formato JSON  

---

##  Cómo probar el proyecto

1. Clonar o descargar el repositorio.  
2. Acceder al siguiente enlace:
3. Abrir el proyecto con un servidor local (ej. Live Server en VS Code).  
   - Esto es necesario para que funcionen la geolocalización y el `fetch` de noticias.  
4. Navegar entre las páginas desde la barra de navegación fija.  

---

