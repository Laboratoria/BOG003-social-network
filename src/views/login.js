export const loginUser = (email, password) => {
    /*  const email = "test@example.com";
     const password = "hunter2"; */
    return firebase.auth().SignInWithEmailAndPasswordAsync(email, password);
}

export const loginView = `
<header class="header">
    <div class="logo">
        <a class="logo-a"> <img src="img/logotipo.png" alt="Logotipo"></a>
    </div>
</header>
<section class="loginSection">
    <div class="loginForm">
        <img class="logo" src="img/logoform.png" alt="logologin">
        <h1>Iniciar sesión</h1>
        <p id="login-error"></p>
        <form>
            <input type="text" placeholder="Nombre de usuario">
            <input type="password" placeholder="Contraseña">
            
            <button id="ingresar">Ingresar</button>
        </form>
    </div>
    <div class="recordarYregistrar">
        <a href="#">¿Olvidaste tu contraseña?</a>
        <a href="#">REGISTRATE AQUÍ</a>
    </div>
</section>
<footer class="footer">
    <div class="Secciones">
</footer>
`;