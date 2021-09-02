// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

import {router} from './router/index.routes.js'

router(window.location.hash)

window.addEventListener('hashchange',() => {
  router(window.location.hash)  
})
