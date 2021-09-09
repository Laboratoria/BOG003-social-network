// Este es el punto de entrada de tu aplicacion
import {router} from './router/index.routes.js';
import {registerUser} from './views/register.js';


router(window.location.hash);

window.addEventListener('hashchange',() => {
  router(window.location.hash);
});

const enviar = document.querySelector("#register");
if (enviar) {
  enviar.addEventListener("click",(e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
  
    registerUser(email, password);
  })
}