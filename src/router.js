
import {registration}from './lib/index.js' 




rutas = [
    { nombre: "Inicio", url: "#/inicio", plantilla: "inicio" },
    { nombre: "Registro", url: "#/registro", plantilla: "registro" },
    { nombre: "Muro", url: "#/muro", plantilla: "muro" },
    { nombre: "Post", url: "#/post", plantilla: "post" },
  ];
  
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", function (eveneto) {
      const ruta = eveneto.target.getAttribute("ruta");
      history.pushState(ruta, null, ruta);
      renderizarPagina(ruta);
    });
  });
  
  window.onpopstate = function (event) {
    renderizarPagina(event.state);
  };
  
  function renderizarPagina(ruta) {
    if (ruta == null) {
      return;
    }
  
    rutas.map((item) => {
      if (item.url == ruta) {
        document.querySelector(".contenido-principal").innerHTML =
          document.getElementById(item.plantilla).innerHTML;
      }
    });
  }
  
  renderizarPagina(window.location.hash);
  