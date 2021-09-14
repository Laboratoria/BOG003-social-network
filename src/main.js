// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
// Importar funcion 'Register' desde archivo register.js
import { register } from './lib/templates/register.js';
// Importar funcion 'changeRoute' desde archivo router.js
import { showTemplate } from './lib/router.js';

// myFunction();

// Vincular el section de HTML 'app' como padre de register
document.getElementById('app').appendChild(register());

// Crear funcion para inicializar nuestra app
const init = () => {
  document.getElementById('app').appendChild(register());
  window.addEventListener('hashchange', () => {
    myFunction();
    console.log(window.location.hash);
    showTemplate(window.location.hash);
  });

  // Corrección del enrutamiento pagina inicio
  const entries = performance.getEntriesByType('navigation');

  if (entries.map((nav) => nav.type) === 'reload') {
    console.info('This page is reloaded');
    showTemplate(window.location.hash);
  } else {
    console.info('This page is not reloaded');
  }
};
// Llamar a la función init una vez se cargue la página
window.addEventListener('load', init);
