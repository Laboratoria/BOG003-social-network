import { closeSession } from '../firebase/auth.js';

export const muro = () => {
  // div contenedor de la vista div padre
  const divPost = document.createElement('div');
  divPost.setAttribute('class', 'divMuro');

  // Creando tag h1 titulo
  const viewPost = /* html */`
          <header>
            <img src='IMG/logo-naranja.svg' width='40' alt='logo naranja' class='logoNaranja'>
            <h1>OtaKuGeeK <br>オタク</h1>
            <img src='IMG/Naruto.png' width='50' alt='naruto' class='imgNaruto'>
            <button id='close' class='close' type='button'>Cerrar sesión</button>
          </header>
          <div class = 'wallUser'>
              <img src='IMG/Naruto.png' width='' alt='naruto' class='imgNaruto'>
              <h2>¡Hola!</h2> 
              <!-- <div id='titleUser'><div>-->  
              <table>
                <tr>
                  <td>Post</td>
                  <td>Likes</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </table>
              
              <div class='postContainer'>
                <input type='text' id='createPost' class='createPost' placeholder='¿Qué te gustaría compartir hoy?'></input>
              </div>
              <button id='publish' class='btnregister'>Publicar</button>
          </div>

      
          <div class='timeline'>
              <div class='userContainer'>
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

  const close = divPost.querySelector('#close');
  close.addEventListener('click', () => {
    closeSession().then(() => {
      window.location.hash = '#/login';
    });
  });

  /* const textUser = divPost.querySelector('#titleUser');
  textUser.innerHTML = `¡Hola ${email.displaName}`; */
  return divPost;
};
