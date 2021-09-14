// Este es el punto de entrada de tu aplicacion
import { router } from './router/index.routes.js';
import { registerUser } from './views/register.js';


router(window.location.hash);

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});

const enviar = document.querySelector('#register');
if (enviar) {
  enviar.addEventListener('click', async (e) => {
    e.preventDefault();
    let userName = document.querySelector('#user-name');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    const registerError = document.querySelector('#register-error');


    registerUser(email.value, password.value, userName.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.updateProfile({
          displayName: userName,
        }).then((userUpdated) => {
          console.log(userUpdated);
        })
          .catch((error) => {
            console.log(error);
          });
        console.log(user);

        email.value = "";
        password.value = "";
        userName.value = "";

        const loginRoute = `${window.location.origin}/#/login`;
        window.location.replace(loginRoute);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        switch (errorCode) {
          case 'auth/email-already-in-use':
            registerError.classList.add('error');
            registerError.innerHTML = 'Esta cuenta ya existe!';
            break;
          case 'auth/invalid-email':
            registerError.classList.add('error');
            registerError.innerHTML = 'Correo electrónico no válido!';
            break;
          case 'auth/weak-password':
            registerError.classList.add('error');
            registerError.innerHTML = 'La contraseña debe tener minimo 6 caracteres!';
            break;

          default:
            break;
        }


        email.value = "";
        password.value = "";
        userName.value = "";

      });
  });
}
