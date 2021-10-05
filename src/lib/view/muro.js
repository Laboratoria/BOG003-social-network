import { logOutUser } from '../index.js';

export const createTimeLineView = () => {
  const timeLineSection = document.createElement('section');
  const timeLineView = `  
      <h1> Bienvenido al Muro </h1>
      <button type="button" id ='logOut'> <img src="images/log-out1.png" alt="Log Out" /></button>
      <form action="post">
      <textarea name="post" placeholder="Comparte tu experiencia..."></textarea>
      <button type="submit">Publicar</button>
    </form>
    <div class="post">
      <div class="post-by" id="prueba"></div>
      <div class="post-text">prueba dos</div>
    </div>

  `
  timeLineSection.innerHTML = timeLineView;
  const logOut = timeLineSection.querySelector('#logOut');

  // const user = firebase.auth().currentUser;
  // console.log(user);

  

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('Estoy logueado')
        const pruebaName = timeLineSection.querySelector('#prueba');
        pruebaName.innerHTML = `publicado por ${user.displayName}`;
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
       // var uid = user.uid;
        // ...
      } else {
        console.log('User is signed out');
        // ...
      }
    });

  logOut.addEventListener('click', (e) => {
    e.preventDefault();
    logOutUser()
    .then(() => {
     window.location.hash = '#/ingreso';
    }).catch((error) => {
    console.log(error);
    });
  })



  return timeLineSection;
};