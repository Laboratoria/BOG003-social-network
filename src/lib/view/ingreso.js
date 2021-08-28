export const createLogInView = () => {
  const loginSection = document.createElement("section");
  const loginView = `
  <div class="brand">
    <div class="niño">
      <img src="images/niño.png" alt="Logo for mobile">
    </div>
    <div class="logo-long">
      <img src="images/logo_long.png" alt="Behind Code">
    </div>
    <div class="señor">
      <img src="images/señor.png" alt="Logo for desktop">
    </div>
  </div>
  <div class="log-in">
    <h1>Ingresa a tu cuenta</h1>
    <form method="post">
      <input type="email" name="email" placeholder="Correo" required>
      <input type="password" name="password" placeholder="Contraseña" required>
      <button type="submit">Ingresar</button>
    </form>
    <p>or</p>
    <p>Ingresa con tu cuenta de Google</p>
    <div class="Google-login">
      <a href="/">
        <img src="images/google.png" alt="Log in with Google">
      </a>
    </div>
    <p>¿No tienes una cuenta?</p>
    <div class="new-account">
      <a href="#/registro">Crea una cuenta AQUI</a>
    </div>
  </div>`;
  loginSection.innerHTML = loginView;  
  return loginSection;
}
