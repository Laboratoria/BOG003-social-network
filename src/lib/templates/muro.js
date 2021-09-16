export const muro = () => {
  // div contenedor de la vista div padre
  const divPost = document.createElement('div');
  divPost.setAttribute('class', 'divMuro');

  // Creando tag h1 titulo
  const viewPost = `
          <header>
            <img src='IMG/logo-naranja.svg' width='40' alt='logo naranja' class='logoNaranja'>
            <h1>OtaKuGeeK <br>オタク</h1>
            <img src='IMG/Naruto.png' width='50' alt='naruto' class='imgNaruto'>
            <a href='' id='close' class='close'>Cerrar sesión</a>
          </header>
          <div class = 'wallUser'>
              <img src='IMG/Naruto.png' width='' alt='naruto' class='imgNaruto'>
              <h2>¡Hola!</h2>
              <div class='postViews'>
                <p>Post</p>
                <!---Contar de post--->
              </div>
              <div class='likes'>
                <p>Likes</p>
                <!--- Contar de likes--->
              </div>
              <div class='post'>
                <input type='text' id='createPost' class='createPost' placeholder='¿Qué te gustaría compartir hoy?'></input>
              </div>
              <button id='publish' class='btnregister'>Publicar</button>
          </div>

      
          <div class='timeline'>
              <div class='formContainer'>
                  <img src='IMG/Naruto.png' width='50' alt='naruto' class='imgNaruto'>
                  <h4>Usuario XXX</h4>    
                  <input type='email' id='emailogin' class='signUp' placeholder='Bla bla bla ...' required='' autocomplete='off'></input>
                  <a href=''><img src='IMG/icono-eliminar.png' width='40' alt='icono' class='iconEliminar'></a>
                  <a href=''><img src='IMG/icono-editar.png' width='40' alt='icono' class='iconEditar'></a>
                  <a href=''><img src='IMG/icono-like.png' width='40' alt='icono' class='iconLike'></a>
              </div>
  
          </div>
          `;

  // Mostrar en pantalla tag h1
  divPost.innerHTML = viewPost;

  return divPost;
};
