// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

import {router} from './router/index.routes.js'



window.addEventListener('hashchange',() => {
  router(window.location.hash)  
})
