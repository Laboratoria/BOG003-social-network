// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
//Importar funcion "Register" desde archivo register.js
import { register } from './lib/templates/register.js';
//Importar funcion "changeRoute" desde archivo router.js
import { changeRoute } from './lib/router.js'


//myFunction();

//Vincular el section de HTML "app" como padre de register
//document.getElementById('app').appendChild(register());

//Crear funcion para inicializr nuestra app
const init = () => {
    document.getElementById('app').appendChild(register());
        window.addEventListener('hashchange', () =>{
        myFunction();
        console.log(window.location.hash);
        changeRoute(window.location.hash);

        })
}

window.addEventListener('load', init);