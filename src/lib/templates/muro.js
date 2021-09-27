import { closeSession } from '../firebase/auth.js';

export const muro = () => {
  // div contenedor de la vista div padre
  const divPost = document.createElement('div');
  /* divPost.setAttribute('class', 'divMuro'); */
  divPost.classList.add('divMuro');

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
                <input type='text' id='createPost' class='createPost' placeholder='¿Qué te gustaría compartir hoy?'/>
              </div>
              <button id='publish' class='btnregister'>Publicar</button>
          </div>
      
          <div class='timeline'>
              <div class='userContainer'>
                  <img src='IMG/Naruto.png' width='50' alt='naruto' class='imgNaruto'>
                  <h4>Usuario XXX</h4>    
                  <div id='printPost' class='signUp'></div>
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

  // Traer las variables Firebase
  const db = firebase.firestore();
  const user = firebase.auth().currentUser;

  // Función para guardar post y asignar id en firestore
  function savePost() {
    const postPublish = divPost.querySelector('#createPost').value;
    // craer una coleccion para firestore
    db.collection('postList')
      .add({
        Post: postPublish,
        Name: user.displayName,
        Date: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        // Una vez que se guarde el post generara string vacio para limpiar casilla del formulario
        divPost.querySelector('#createPost').value = '';
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }

  // Agregar funcionalidad al boton publicar
  const btnPublish = divPost.querySelector('#publish');
  btnPublish.addEventListener('click', () => {
    savePost();
  });

  // Funcion eliminar post
  const deletePost = (id) => {
    db.collection('postList').doc(id).delete().then(() => {
      alert('Se elimino el post exitosamente');
    })
      .catch((error) => {
        console.log('Error removing document: ', error);
      });
  };

  // Leer datos del post desde Firestore y mostrar post en muro
  const listTimeline = divPost.querySelector('.timeline');
  // db.collection('postList').orderBy('Date', 'desc').get().then((querySnapshot) => {
  db.collection('postList').orderBy('Date', 'desc').onSnapshot((querySnapshot) => {
    listTimeline.innerHTML = '';
    querySnapshot.forEach((doc) => {
      listTimeline.innerHTML += /* HTML */ `
        <div class='userContainer'>
          <h4>${doc.data().Name}</h4>
          <h4>${doc.data().Date.toDate().toDateString()}</h4>
          <div id='printPost' class='signUp'>${doc.data().Post}</div>

            <!-- Solo se le quito el a ref -->
            <img src='IMG/icono-eliminar-blanco.svg' width='40' alt='icono' class='iconEliminar' data-id = '${doc.id}'>
            
            <img src='IMG/icono-editar.svg' width='48' alt='icono' class='iconEditar'>
            
            <img src='IMG/icono-like-blanco.png' width='48' alt='icono' class='iconLike'>
        </div>
      `;

      // Funcionalidad boton eliminar
      const botonesEliminar = divPost.querySelectorAll('.iconEliminar');
      botonesEliminar.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          deletePost(e.target.dataset.id);
        });
      });
      console.log(doc.id);
    });
  });

  return divPost;
};
