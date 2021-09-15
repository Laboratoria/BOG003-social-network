// Importar funcion viewRegister
import { register } from './templates/register.js';
import { login } from './templates/login.js';

export const showTemplate = (hash) => {
  const containerAPP = document.getElementById('app');
  containerAPP.innerHTML = '';
  switch (hash) {
    case '':
      console.log(hash);
      containerAPP.appendChild(register());
      break;
    case '#/login':
      console.log(hash);
      containerAPP.appendChild(login());
      break;
    case '#/post':
      // containerAPP.appendChild(post());
      console.log(hash);
      break;
    default:
      containerAPP.innerHTML = '<h2>Página no encontrada</h2>';
  }
};

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
