export const loginUser = (email, password) => {
    return firebase.auth().SignInWithEmailAndPasswordAsync(email, password);
}

export const loginView = `
<section class="login-section">

    <header class="header">
        <div class="logo">
            <img src="img/logotipofinal.png" alt="Logotipo">
        </div>
    </header>
    <section class="loginSection">
        <div class="loginForm">
            <img class="logo" src="img/logoform.png" alt="logologin">
            <h1>Iniciar sesión</h1>
            <p id="login-error"></p>
            <form class="form-login">
                <div class="input-loginName">
                    <input id="user-login" type="text" placeholder="Nombre de usuario">
                    <img class="" src="" alt="">
                </div>
                <div class="input-loginPassword">
                    <input id="password" type="password" placeholder="Contraseña">
                    <img class="" src="../img/password-icon.svg" alt="">
                </div>
 
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
</section>
`;
