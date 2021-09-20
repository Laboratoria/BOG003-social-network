// Importar funcion viewRegister
import { register } from './templates/register.js';
import { login } from './templates/login.js';
import { muro } from './templates/muro.js';

// craer variable con resultadao Booleano para validadr si el usuarios esta loguedo
let isUserLogin = false;

export const showTemplate = (hash) => {
  const containerAPP = document.getElementById('app');
  containerAPP.innerHTML = '';
  switch (hash) {
    case '':
      // Proteger las rutas
      if (isUserLogin) {
        window.location.hash = '#/muro';
      } else {
        containerAPP.appendChild(register());
      }
      break;
    case '#/login':
      if (isUserLogin) {
        window.location.hash = '#/muro';
      } else {
        containerAPP.appendChild(login());
      }
      break;
    case '#/muro':
      if (isUserLogin) {
        containerAPP.appendChild(muro());
      } else {
        window.location.hash = '#/login';
      }
      break;
    default:
      containerAPP.innerHTML = '<h2>Página no encontrada</h2>';
  }
};

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (user && user.emailVerified) {
    isUserLogin = true;
  } else {
    console.log('Entro al else');
    isUserLogin = false;
  }
  showTemplate(window.location.hash);
});

/*
export const changeRoute = (hash) => {
  if (hash === '#/register') {
    return showTemplate(hash);
  } else if (hash === '#/login') {
    return showTemplate(hash);
  } else {
    return showTemplate(hash);
  }
};
*/
/* export const suma = (a, b) => {
  let result = 0;
  if (a > 10) {
    result = a + b;
  } else if (b > 10) {
    result = a * b;
  } else {
    result = a + b * 100;
  }
  return result;
}; */
