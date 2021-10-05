import { closeSession, addLike, removeLike } from '../firebase/auth.js';

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
              <div class='postContainer'>
                <input type='text' id='createPost' class='createPost' placeholder='¿Qué te gustaría compartir hoy?'/>
              </div>
              <button id='publish' class='btnregister'>Publicar</button>
          </div>
  
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
        userId: user.uid,
        likes: [],
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
      /* alert('Se elimino el post exitosamente'); */
    })
      .catch((error) => {
        console.log('Error removing document: ', error);
      });
  };

  // Funcion editar post
  const updatePost = (id) => {
    const postRef = db.collection('postList').doc(id);
    const postPublish = divPost.querySelector('#editPost').value;
    console.log(id, 'Recibio ID');
    return postRef.update({
      Post: postPublish,
    })
      .then(() => {
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  };

  const currentUserId = firebase.auth().currentUser.uid;

  // Leer datos del post desde Firestore y mostrar post en muro
  const listTimeline = divPost.querySelector('.timeline');
  db.collection('postList').orderBy('Date', 'desc').onSnapshot((querySnapshot) => {
    listTimeline.innerHTML = '';
    querySnapshot.forEach((doc) => {
      listTimeline.innerHTML += `
        <div class='userContainer'>
          <h4>${doc.data().Name}</h4>
          <h4>${doc.data().Date.toDate().toDateString()}</h4>
          <div id='${doc.id}' class='printPost'><p class='texto'>${doc.data().Post}</p></div>

            <!-- Solo se le quito el a ref -->   
            ${currentUserId === doc.data().userId ? `
      
            <img src='IMG/icono-eliminar-blanco.svg' width='40' alt='icono' class='iconEliminar' data-id = '${doc.id}'>
            
            <img src='IMG/icono-editar.svg' width='48' alt='icono' class='iconEditar' data-id = '${doc.id}' >` : ''}
      
            <!-- Crear botton Guardar, cuando el usuario edite el post -->
            <button id = 'saveEdit' class = 'saveEdit' data-id = '${doc.id}'>Guardar</button>
            
            <div class='likesDiv'>
              <img src='IMG/icono-like-blanco.png' width='48' alt='icono' class='iconLike' data-id = '${doc.id}'>
            
              <div id=num-likes class="likes-count"> ${doc.data().likes.length}</div>  
            </div> 
        </div>
      `;

      // Funcionalidad botón like
      const buttonLike = divPost.querySelectorAll('.iconLike');
      buttonLike.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const like = doc.data().likes;

          if (like.includes(currentUserId)) {
            removeLike(currentUserId, e.target.dataset.id);
            console.log(like);
          } else {
            addLike(currentUserId, e.target.dataset.id);
            console.log(like);
          }
        });
      });

      // Funcionalidad boton eliminar
      const botonesEliminar = divPost.querySelectorAll('.iconEliminar');
      botonesEliminar.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          // Funcion para preguntar confirmacion eliminar post
          const r = confirm('¿Quieres eliminar este post?');
          if (r === true) {
            alert('You pressed OK!');
            // Traemos la Funcion eliminar para que si se da aceptar se elimine post
            deletePost(e.target.dataset.id);
          } else {
            alert('You pressed Cancel!');
          }
        });
      });
      console.log(doc.id);

      // Funcionalidad boton editar
      const botonesEditar = divPost.querySelectorAll('.iconEditar');
      botonesEditar.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const textPost = document.getElementById(e.target.dataset.id).innerHTML;
          document.getElementById(e.target.dataset.id).innerHTML = `
          <textarea id='editPost'>${textPost}</textarea>
          `;
          console.log('saveEdit');
          divPost.querySelector('.saveEdit').style.display = 'block';
          divPost.querySelector('.iconEditar').style.display = 'none';
        });
      });
      // Funcionalidad boton guardar
      const btnSave = divPost.querySelector('.saveEdit');
      btnSave.addEventListener('click', (e) => {
        updatePost(e.target.dataset.id);
        console.log('hola bienvenicoso');
      });
    });
  });
  return divPost;
};
