// Importar funcion 'changeRoute' desde archivo router.js
import { showTemplate } from './lib/router.js';

// Crear funcion para inicializar nuestra app
const init = () => {
  showTemplate(window.location.hash);
  window.addEventListener('hashchange', () => {
    console.log(window.location.hash);
    showTemplate(window.location.hash);
  });
};
// Llamar a la función init una vez se cargue la página
window.addEventListener('load', init);
