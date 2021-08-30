// Este es el punto de entrada de tu aplicacion

/* import { myFunction } from "./lib/index.js"; */
import { createLogInView } from "./lib/view/ingreso.js";
import { changeRoute } from "./lib/router.js";


const init = () => {
  document.getElementById('main-section').appendChild(createLogInView());
  changeRoute(window.location.hash);
  window.addEventListener('hashchange', () => {
    /* myFunction(); */
    changeRoute(window.location.hash);
  })
}

window.addEventListener('load', init);

