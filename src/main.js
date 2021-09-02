// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
//Importar funcion "Register" desde carpeta register.js
import { register } from './lib/templates/register.js';


myFunction();

//Vincular el section de HTML "app" como padre de register
document.getElementById('app').appendChild(register());
