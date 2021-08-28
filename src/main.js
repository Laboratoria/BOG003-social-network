// Este es el punto de entrada de tu aplicacion

import { myFunction } from "./lib/index.js";
import { crearCuenta } from "./lib/view/ingreso.js";
import { irAInicio } from "./lib/view/registro.js";
import { changeRoute } from "./lib/router.js";


const init = () => {
  document.getElementById("root").innerHTML = crearCuenta();
  window.addEventListener("hashchange", () => {
    myFunction();
    console.log(window.location.hash);
    changeRoute(window.location.hash)
  })
}

window.addEventListener("load", init);
