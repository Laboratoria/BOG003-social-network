
export const registerUser = (email, password) => {
   return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export const emailVerification = () => {
  firebase.auth().currentUser.sendEmailVerification();
}


export const registerView = `
<section class="register-section">
  
  <div class="register__header">
    <a href="#/">
      <img class="icono-casa" src="../img/casa-de-mascotas1.png" alt="">
    </a>
    <div class="barra"></div>
    <img class="logo" src="../img/logo.svg" alt="">
  </div>
  
  <div class="register__body">
    <div class="titles">
      <span class="title-1">Crear</span>
      <span class="title-2">cuenta</span>
    </div>

    <p id="register-error"></p>

    <form class="form-register">
      <div class="input-icono">
        <input id="user-name" type="text" placeholder="Nombre de usuario">
        <img class="" src="../img/dog1.png" alt="">
      </div>
      
      <div class="input-icono">
        <input id="email" type="text" placeholder="Correo electronico">
        <img class="" src="../img/email-icon.svg" alt="">
      </div>

      <div class="input-icono">
        <input id="password" type="password" placeholder="Contraseña">
        <img class="" src="../img/password-icon.svg" alt="">
      </div>

      <div class="input-icono">
        <input id="confirm-password" type="password" placeholder="Confirmar contraseña">
        <img class="" src="../img/password-icon.svg" alt="">
      </div>
      

      <button id="register">Registrate</button>
    </form>

    <a href="#/login">¿Ya tienes una cuenta? Inicia sesión</a>
  </div>
</section>  
`;


