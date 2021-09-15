export const post = () => {
  // div contenedor de la vista div padre
  const divPost = document.createElement('div');
  divPost.setAttribute('class', 'divFlex');

  // Creando tag h1 titulo
  const viewPost = `
          <header>
            <img src='IMG/logo-naranja.svg' width='100' alt='logo naranja' class='logoNaranja'>
            <h1>OtaKuGeeK <br>オタク</h1>
            <a href='' id='close' class='close'>Cerrar sesión</a>
            <img src'IMG/Naruto.png' width='' alt='naruto' class='imgNaruto'>
          </header>
          <div class = 'welcomeContainer'>
              <img src'IMG/Naruto.png' width='' alt='naruto' class='imgNaruto'>
              <h2>¡Hola bienvenido!</h2>
              <div class='post'>
                <p>Post</p>
                <!---Contar de post--->
              </div>
              <div class='likes'>
                <p>Likes</p>
                <!--- Contar de likes--->
              </div>
              <div class='formContainer'>
                <input type='text' id='createPost' class='createPost' placeholder='¿Qué te gustaría compartir hoy?></input>
              </div>
              <button id='publish' class='btnregister'>Publicar</button>
          </div>

      
          <div class='divForm'>
              <div class='formContainer'>
                  <h2>Inicia Sesión</h2>
                      
                  <input type='email' id='emailogin' class='signUp' placeholder='Ingresa tu Email' required='' autocomplete='off'></input>
                  
                  <input type='password' id='passwordlogin' class='signUp' placeholder='Ingresa tu Contraseña' pattern='.{8,}' minlength='8' maxlength='32' required='' autocomplete='off'></input>
              
                  <button type='submit' id='btnLogin' class='btnregister' onclick=''>Iniciar Sesión</button>
  
                  <span id='errorMessage' class='errorMessage'></span>
  
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
  divPost.innerHTML = viewPost;
};
