import { createUser } from '../api/firebaseConnection.js';

let email;
let password;

export const createRegisterView = () => {
  const registerSection = document.createElement('section');
  const registerView = `
  <div class="brand">
      <div class="logo-long">
        <img src="images/logo_long.png" alt="Behind Code">
      </div>
      <div class="old-man">
        <img src="images/señor.png" alt="Logo for desktop">
      </div>
    </div>
    <div class="log-in">
      <h1>Formulario de Registro</h1>
      <form method="post">
        <input id="userName" type="text" name="name" placeholder="Nombre" required>
        <input id="lastName" type="text" name="lastName" placeholder="Apellido" required>
        <input id="email" type="email" name="email" placeholder="Correo" required>
        <input id="password" type="password" name="password" placeholder="Contraseña" required>
        <button id="register" type="submit">Regístrate</button>
      </form>
      <div class="new-account">
      <a href="#/ingreso">¿Ya tienes una cuenta?</a>
      </div>
      <p class ="or">or</p>
      <p>Ingresa con </p>
      <div class="Google-login">
        <a href="/">
          <img src="images/google.png" alt="Log in with Google">
        </a>
      </div>    
  </div>`;
  registerSection.innerHTML = registerView;
  setTimeout(() => {
    // eslint-disable-next-line no-use-before-define
    addListeners();
  }, 1000);
  return registerSection;
};

/* const userName = document.getElementById('userName').value;
const lastName = document.getElementById('lastName').value; */

const addListeners = () => {
  const btnRegister = document.getElementById('register');
  btnRegister.addEventListener('click', () => {
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    createUser(email, password);
  });
};

// obtener la info del usuario

/* npm install firebase-mock --save-dev */
