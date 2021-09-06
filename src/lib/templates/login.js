export const login = () => {
    //Div contenedor de la vista div padre
    const divLogin = document.createElement('div');
    divLogin.setAttribute("class", "divFlex");

    //creando tag h1 titulo
    const viewLogin = `
        <div class = "welcomeContainer">
            <h1>OtaKuGeek<br>オタク</h1>
            <img src="IMG/sombra-logo.svg" width="100" alt="logo sin fondo" class="logo">
            <h2>¡Bienvenidos!</h2>
            <h3>Red social para Otakus y no tan Otakus</h3>
        </div>
    
        <div class="divForm">
            <div class="formContainer">
                <h2>Inicia Sesión</h2>
                    <form id="logUp">
                        <input type="email" id="emailog" class="signUp" placeholder="Ingresa tu Email" required="" autocomplete="off"></input>
                    </form>

                    <form id="logUp1">
                        <input type="password" id="passwordlog" class="signUp" placeholder="Ingresa tu Contraseña" pattern=".{8,}" minlength="8" maxlength="32" required="" autocomplete="off"></input>
                    </form>

                    <button type="submit" id="btnLogin" class="btnregister" onclick="">Iniciar Sesión</button>

                <h4>O inicia sesión con...</h4>

                <a href=""><img src="IMG/Icono-google.svg" width="40" alt="icono" class="iconGoogle"></a>
            </div>

            <div class="logContainer">
                <h4>¿No tienes una cuenta?</h4>
                <a href="#/register" class="linkLogin">Registrate</a>
            </div>
        </div>
        `
        
    //Mostrar en pantalla tag h1    
    divLogin.innerHTML = viewLogin;

    

    return divLogin;
    
}
