/* import { login } from './login'; */
// Importar función regGoogle y regEmail fromm auth.js
import { createUser, emailVerification } from '../firebase/auth.js';

export const register = () => {
  //  Div contenedor de la vista div padre
  const divRegister = document.createElement('div');
  divRegister.setAttribute('class', 'divFlex');

  // creando esquema HTML
  const viewRegister = /* html */`
        <div class = 'welcomeContainer'>
            <h1>OtaKuGeeK <br>オタク</h1>
            <img src='IMG/sombra-logo.svg' width='100' alt='logo sin fondo' class='logo'>
            <h2>¡Bienvenidos!</h2>
            <h3>Red social para Otakus y no tan Otakus</h3>
        </div>
    
        <div class='divForm'>
            <div class='formContainer'>
                <h2>Crea una cuenta</h2>
                <h3>Es fácil, rápido y divertido!!!</h3>
                    
                <input type='email' id='email' class='signUp' placeholder='Ingresa tu Email' required='' autocomplete='off'>
                
                <input type='password' id='password' class='signUp' placeholder='Ingresa tu Contraseña' pattern='.{8,}' minlength='8' maxlength='32' required='' autocomplete='off'>
            
                <input type='password' id='confirmPassword' class='signUp' placeholder='Confirma tu Contraseña' pattern='.{8,}' minlength='8' maxlength='32' required='' autocomplete='off'>

                <button type='button' id='btnregister' class='btnregister'>Registrarte</button>

                <span id='errorMessage' class='errorMessage'></span>

            </div>
            <!--Creación Modal--->
            <div id='modalContainer' class='modalContainer'>
              <div class='modal'>
                <h1>OtaKuGeeK <br>オタク</h1>
                <img src='IMG/like.png' width='100' alt='imagen anime'>
                <p>🐱‍💻💌Usuario creado exitosamente, verifica la bandeja de entrada de tu correo y luego <a href="#/login">Inicia sesión</a></p>
              </div>
            </div>

            <div class='logContainer'>
                <h4>¿Ya tienes una cuenta?</h4>
                <a href='#/login' class='linkLogin'>Inicia Sesión</a>
            </div>
        </div>
        `;

  //  Mostrar en pantalla tag h1
  divRegister.innerHTML = viewRegister;

  /* Aquí se le agrega el evento click al botón register, se capturan los valores de los inputs
        y se hacen las validaciones respectivas (capturar errores) */
  const btnRegister = divRegister.querySelector('#btnregister');
  btnRegister.addEventListener('click', () => {
    const email = divRegister.querySelector('#email').value;
    const password = divRegister.querySelector('#password').value;
    const confirmPassword = divRegister.querySelector('#confirmPassword').value;
    const errorMessage = divRegister.querySelector('#errorMessage');
    console.log('email=', email, ' password=', password, confirmPassword);

    if (password === confirmPassword && confirmPassword !== '') {
      console.log('entro');
      //  Traer la variable createUser para registrase en la app con usuario y contraseña
      createUser(email, password)
        .then(() => {
          const user = firebase.auth().currentUser;
          user.updateProfile({
            displayName: email,
          });
          divRegister.querySelector('#modalContainer').style.visibility = 'visible';
          return emailVerification();
        })
        .catch((error) => {
          const errorCode = error.code;
          switch (errorCode) {
            case 'auth/invalid-email':
              errorMessage.innerHTML = '❎❌Por favor ingrese un correo valido';
              break;
            case 'auth/email-already-in-use':
              errorMessage.innerHTML = '❎❌Ya existe un usuario con este correo';
              break;
            case 'auth/weak-password':
              errorMessage.innerHTML = '❎❌La contraseña debe tener minimo 6 digitos';
              break;
            default:
              errorMessage.innerHTML = '❎❌Ha ocurrido un error inesperado';
              break;
          }
        });
    } else {
      errorMessage.innerHTML = '❎❌Las contraseñas no coinciden';
    }
  });
  return divRegister;
};
