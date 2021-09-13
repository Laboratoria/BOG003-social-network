import { loginGoogle, signIn } from '../firebase/auth.js';

export const login = () => {
  // div contenedor de la vista div padre
  const divLogin = document.createElement('div');
  divLogin.setAttribute('class', 'divFlex');

  // Creando tag h1 titulo
  const viewLogin = `
        <div class = 'welcomeContainer'>
            <h1>OtaKuGeek<br>オタク</h1>
            <img src='IMG/sombra-logo.svg' width='100' alt='logo sin fondo' class='logo'>
            <h2>¡Bienvenidos!</h2>
            <h3>Red social para Otakus y no tan Otakus</h3>
        </div>
    
        <div class='divForm'>
            <div class='formContainer'>
                <h2>Inicia Sesión</h2>
                    
                <input type='email' id='emailogin' class='signUp' placeholder='Ingresa tu Email' required='' autocomplete='off'></input>
                
                <input type='password' id='passwordlogin' class='signUp' placeholder='Ingresa tu Contraseña' pattern='.{8,}' minlength='8' maxlength='32' required='' autocomplete='off'></input>
            

                <button type='submit' id='btnLogin' class='btnregister' onclick=''>Iniciar Sesión</button>

                <h4>O inicia sesión con...</h4>

                <a href=''><img src='IMG/Icono-google.svg' width='40' alt='icono' class='iconGoogle'></a>
            </div>

            <div class='logContainer'>
                <h4>¿No tienes una cuenta?</h4>
                <a href='' class='linkLogin'>Registrate</a>
            </div>
        </div>
        `;

  // Mostrar en pantalla tag h1
  divLogin.innerHTML = viewLogin;

  // Funcionalidad Login con email y password
  const btnLogin = divLogin.querySelector('#btnLogin');
  btnLogin.addEventListener('click', () => {
    const email = divLogin.querySelector('#emailogin').value;
    const password = divLogin.querySelector('#passwordlogin').value;
    const errorMessage = divLogin.querySelector('#errorMessage');

    signIn(email, password).then((res) => {
      // Entro al objeto y coloco el usuario
      // console.log(res.user.emailVerified);
      setTimeout(() => {
        if (res.user.emailVerified === false) {
          errorMessage.innerHTML = '⚠️ Debe validar su correo para iniciar sesión';
        } else {
          window.location.hash = '#/profile';
        }
      }, 1000);
    })
      .catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case 'auth/invalid-email':
            errorMessage.innerHTML = '❎❌Por favor ingrese un correo valido';
            break;
          case 'auth/wrong-password':
            errorMessage.innerHTML = '❎❌La contraseña es incorrecta';
            break;
          case 'auth/user-not-found':
            errorMessage.innerHTML = '❎❌El usuario no se encuentra registrado';
            break;
          default:
            errorMessage.innerHTML = '❎❌Ha ocurrido un error inesperado';
            break;
        }
      });
  });

  // Funcionalidad Login con GOOGLE
  const btnGoogleRegister = divLogin.querySelector('.iconGoogle');
  btnGoogleRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle();
  });

  return divLogin;
};
