export const loginUser = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export const loginGoogle = () => {
  const authProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(authProvider);
};

export const loginView = `
<section class="login-section">
  
  <div class="login__header">
    <div class="barra">
      <img class="logo" src="../img/logotipofinal.png" alt="">
    </div>
  </div>
  
  <div class="login__body">
    <div class="login__body-container">
      <div class="huella">
        <img class="logo" src="../img/logoform.png" alt="">
      </div>
      <div class="titles">
        <span class="title-1">Iniciar sesión</span>
      </div>
      

      <p id="login-error"></p>

      <form class="form-login" id="login">
        
        <div class="input-icono">
          <input id="email-login" type="text" placeholder="Correo electronico" required>
          <img class="" src="../img/email-icon.svg" alt="">
        </div>

        <div class="input-icono">
          <input id="password-login" type="password" placeholder="Contraseña" required>
          <img class="" src="../img/password-icon.svg" alt="">
        </div>

        <button class="general" type="submit">Ingresar</button>
        <button id="google" class="google" type="submit"><img class="google-icon" src="../img/google.png" alt="" width="29"> Ingresar con Google</button>
      </form>

      <a href="#/register">¿No tienes una cuenta? Registrate aquí</a>
    </div>
  </div>
</section>  
`;