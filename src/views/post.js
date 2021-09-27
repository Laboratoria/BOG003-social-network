
export const createPost = (texto, username, email) => {
  return firebase.firestore().collection("posts").add({texto, username, email});
  
}



export const postView = `
<header class="headerPost">
    <div class="menuA">
      <div class="logoA">
        <img src="img/logotipofinal-posts.png" alt="Logotipo">
      </div>
    </div>
</header>
<div>
  <nav class="nav">
    <a href="#"><img src="img/home-page.png" alt="Home"></a>
    <a href="#"><img src="img/paw.png" alt="Perfil"></a>
    <a href="#"><img src="img/logOut-posts.png" alt="logoutPosts"></a>
  </nav>
</div>
<section class="postSection">
  <div class="prePost">
    <h1 class="postMessage">Crea tu publicación</h1>
    <div>
      <p>¡¡No olvides los mejores momentos al lado de tu humano!!</p>
      <img src="img/hand-animals-human.png" alt="Hand-animals-human">
    </div>
  </div>
  <div class="muroPost">
    <img class="userProfile" src="../img/usuariogato-home.png" alt="usuarioPrincipal">
    <div class="post">
      <a class="imgSecurity"><img src="img/security.png" alt="Security"/></a>
      <a class="imgMenuVertical"><img src="img/menu-vertical.png" alt="Menu Vertical"/></a>
    </div>
  </div>
  <div class="postForm">
    <form id="post-form">
      <textarea id="input-post" name="textarea" rows="10" cols="50" placeholder="¿Qué quieres publicar hoy?"></textarea>
      <div class="buttonPost">
        <button class="button-Post type="submit">Publicar</button>
        <button id="btnCancel" class="button-Post type="submit">Cancelar</button>
      </div>
    </form>
  </div>
  
</section>

`;
