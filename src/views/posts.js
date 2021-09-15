/*import { header } from '../components/header.js';

export const postsView = `
 ${header}
    <h1>from posts</h1>
`;*/

/*export const posts = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}*/



export const postsView = `
  <header class="headerPets">
    <div class="menuA">
      <div class="logoA">
      <img class="logo-A"><img src="img/logotipo.png" alt="Logotype">
      </div>
    </div>
  </header>

  <div>
    <nav class="nav">
      <a href="#"><img src="img/home-page.png" alt="Home"></a>
      <a href="#"><img src="img/paw.png" alt="Profile"></a>
      <a href="#"><img src="img/alarm.png" alt="Notifications"></a>
    </nav>
  </div>

  <section class="postSection">

    <div class="prePost">
    <img class="hands"><img src="img/hand-animals-human.png" alt="Hand-animals-human">
      <h1>Crea tu publicación</h1>
      <p>¡¡No olvides los mejores momentos al lado de tu humano!!</p>
    </div>

    <div class="post">
      <img class="imgProfile"><img src="img/cat.png" alt="userProfile">
      <img class="imgSecurity"><img src="img/security.png" alt="Security">
      <img class="imgMenuVertical"><img src="img/menu-vertical.png" alt="Vertical Menu">
    </div>

    <input type="text" placeholder="¿Que quieres publicar hoy?">

    <button id="publish"><a href="#/home">Publicar</a></button>
    <button id="save">Guardar</button>

  <div>
    <nav class="postReactions">
      <a href="#"><img src="img/like.png" alt="Like"></a>
      <a href="#"><img src="img/comment.png" alt="Comment"></a>
      <a href="#"><img src="img/share.png" alt="Share"></a>
    </nav>
  </div>
  
  </section>

  <footer class="footerA">
    <div class="sections">
    <span class=""><a href="#/">Alimentos y Accesorios</a></span>
    <span class=""><a href="#/">Tips para tu mejor amigo</a></span>
    <span class=""><a href="#/">Centros Vacacionales Pets</a></span>
    </div>
  </footer>
  `;