// Este es el punto de entrada de tu aplicacion
import { router } from './router/index.routes.js';
import { registerUser, emailVerification } from './views/register.js';
import { loginUser, loginGoogle } from './views/login.js';
import { signOut } from './views/home.js';
import { createPost } from './views/post.js';


router(window.location.hash);

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});

const enviar = document.querySelector('#register');

if (enviar) {
  enviar.addEventListener('submit', async (e) => {
    e.preventDefault();
    let userName = document.querySelector('#user-name');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let confirmPassword = document.querySelector('#confirm-password');
    const registerError = document.querySelector('#register-error');

    try {
      registerUser(email.value, password.value, confirmPassword.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          user.updateProfile({
            displayName: userName,
          })

          email.value = "";
          password.value = "";
          userName.value = "";
          confirmPassword.value = "";

          const loginRoute = `${window.location.origin}/#/login`;
          emailVerification();
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

            case 'passwords/no-match':
              registerError.classList.add('error');
              registerError.innerHTML = 'Las contraseñas no coinciden!';
              break;


            default:
              break;
          }


          email.value = "";
          password.value = "";
          userName.value = "";
          confirmPassword.value = "";

        });
    } catch (error) {
      console.log(error);
      switch (error.code) {

        case 'passwords/no-match':
          registerError.classList.add('error');
          registerError.innerHTML = 'Las contraseñas no coinciden!';

          email.value = "";
          password.value = "";
          userName.value = "";
          confirmPassword.value = "";

          break;
        default:
          break;

      }
    }
  });
}

const login = document.querySelector('#login');

if (login) {
  login.addEventListener('submit', async (e) => {
    e.preventDefault();
    let email = document.querySelector('#email-login');
    let password = document.querySelector('#password-login');
    const loginError = document.querySelector('#login-error');

    loginUser(email.value, password.value)
      .then((userCredential) => {
        // Signed in 
        const userLogin = userCredential.user;
        console.log(userLogin);
        if (userLogin) {
          localStorage.setItem("displayName", userLogin.displayName);
          localStorage.setItem("email", userLogin.email);
        }

        email.value = "";
        password.value = "";
        const homeRoute = `${window.location.origin}/#/`;
        window.location.replace(homeRoute);
      })

      .catch((errorLogin) => {
        const errorCodeLogin = errorLogin.code;
        const errorMessageLogin = errorLogin.message;
        console.log(errorCodeLogin, errorMessageLogin);

        switch (errorCodeLogin) {
          case 'auth/wrong-password':
            loginError.classList.add('errorLogin');
            loginError.innerHTML = 'La contraseña no es válida!';
            break;

          case 'auth/user-not-found':
            loginError.classList.add('errorLogin');
            loginError.innerHTML = 'El usuario no esta registrado!';
            break;

          case 'auth/invalid-email':
            loginError.classList.add('errorLogin');
            loginError.innerHTML = 'No corresponde a un correo electrónico!';
            break;

          default:
            break;
        }

        email.value = "";
        password.value = "";

      });
  });

  const btnGoogle = document.querySelector('#google');

  btnGoogle.addEventListener('click', async () => {
    await loginGoogle();
    window.location.hash = '#/';
  });

};

const btnLogOut = document.querySelector('#logout');
if (btnLogOut) {

  btnLogOut.addEventListener('click', async () => {
    await signOut();
    window.location.hash = '#/login';
  });
};

const post = document.querySelector('#post-form');

if (post) {
  post.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputPost = document.querySelector('#input-post');
    if (localStorage.getItem("displayName") && localStorage.getItem("email")) {
      createPost(inputPost.value, localStorage.getItem("displayName"), localStorage.getItem("email"))
        .then((res) => {
          console.log(res);
          inputPost.value = "";
          window.location.hash = '#/';
        })
        .catch((error) => {

          console.log(error);

        })

    }


  });
}