document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("noticias");

  // Función que pinta las noticias en el DOM
  function renderNoticias(noticias) {
   
    contenedor.innerHTML = "";
    noticias.forEach(noticia => {
      const article = document.createElement("article");
      article.classList.add("noticias");
      article.innerHTML = `
        <h3>${noticia.titulo}</h3>
        <p><em>${noticia.fecha}</em></p>
        <p>${noticia.contenido}</p>
      `;
      contenedor.appendChild(article);
    });
  }

  // Cargar el JSON externo con fetch (AJAX)
  fetch("data/noticias.json")
    .then(respuesta => {
      if (!respuesta.ok) {
        throw new Error(`Error HTTP ${respuesta.status}`);
      }
      return respuesta.json();
    })
    .then(json => {
      if (!json || !Array.isArray(json.noticias)) {
        throw new Error("Formato JSON inválido: falta 'noticias' como array");
      }
      renderNoticias(json.noticias);
    })
    .catch(error => {
      // Mensaje visible en la página
      contenedor.innerHTML = `
        <p>Error al cargar las noticias. Revisa la ruta y el servidor local.</p>
      `;
      // Pistas en consola para depurar
      console.error("Fallo al cargar noticias:", error);
      console.info("Comprueba:");
      console.info("- Que 'index.html' se abre con servidor (no file://).");
      console.info("- Que el archivo existe en 'data/noticias.json'.");
      console.info("- Que no hay errores 404 en la pestaña Red/Network.");
    });
});

