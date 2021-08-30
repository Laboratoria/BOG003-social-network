export const createRegisterView = () => {
  const registerSection = document.createElement("section");
  const registerView = `
  <div class="brand">
      <div class="logo-long">
        <img src="images/logo_long.png" alt="Behind Code">
      </div>
      <div class="señor">
        <img src="images/señor.png" alt="Logo for desktop">
      </div>
    </div>
    <div class="log-in">
      <h1>Formulario de Registro</h1>
      <form method="post">
        <input type="text" name="name" placeholder="Nombre" required>
        <input type="text" name="lastName" placeholder="Apellido" required>
        <input type="email" name="email" placeholder="Correo" required>
        <input type="password" name="password" placeholder="Contraseña" required>
        <button type="submit">Regístrate</button>
      </form>
      <div class="new-account">
      <a href="#/ingreso">¿Ya tienes una cuenta?</a>
      </div>
      <p class ="or">or</p>
      <p>Ingresa con </p>
      <div class="Google-login">
        <a href="/">
          <img src="images/google.png" alt="Log in with Google">
        </a>
      </div>    
  </div>`;
  registerSection.innerHTML = registerView;
  return registerSection;
}; 
