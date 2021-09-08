/* import { login } from "./login"; */
//Importar función regGoogle y regEmail fromm auth.js
import { regGoogle, regEmail } from '../firebase/auth.js';



export const register = () => {
    //Div contenedor de la vista div padre
    const divRegister = document.createElement('div');
    divRegister.setAttribute("class", "divFlex");

    //creando esquema HTML
    const viewRegister = `
        <div class = "welcomeContainer">
            <h1>OtaKuGeeK <br>オタク</h1>
            <img src="IMG/sombra-logo.svg" width="100" alt="logo sin fondo" class="logo">
            <h2>¡Bienvendos!</h2>
            <h3>Red social para Otakus y no tan Otakus</h3>
        </div>
    
        <div class="divForm">
            <div class="formContainer">
                <h2>Crea una cuenta</h2>
                <h3>Es fácil, rápido y divertido!!!</h3>
                    
                <input type="email" id="email" class="signUp" placeholder="Ingresa tu Email" required="" autocomplete="off"></input>
                
                <input type="password" id="password" class="signUp" placeholder="Ingresa tu Contraseña" pattern=".{8,}" minlength="8" maxlength="32" required="" autocomplete="off"></input>
            
                <button type="button" id="btnregister" class="btnregister">Registrarte</button>

                <h4>O registrate con...</h4>

                <a href=""><img src="IMG/Icono-google.svg" width="40" alt="icono" class="iconGoogle"></a>
            </div>

            <div class="logContainer">
                <h4>¿Ya tienes una cuenta?</h4>
                <a href="#/login" class="linkLogin">Inicia Sesión</a>
            </div>
        </div>
        `
        
        //Mostrar en pantalla tag h1    
        divRegister.innerHTML = viewRegister;

        /* Aquí se le agrega el evento click al botón register, se capturan los valores de los inputs
        y se hacen las validaciones respectivas (capturar errores) */
        const btnRegister = divRegister.querySelector('#btnregister');
        btnRegister.addEventListener('click', () => {
            const email = divRegister.querySelector('#email').value;
            const password = divRegister.querySelector('#password').value;
            console.log("email="+email+" password="+password);
            regEmail(email, password);
        });

        //Funcionalidad registro con GOOGLE
        const btnGoogleRegister = divRegister.querySelector('.iconGoogle');
        btnGoogleRegister.addEventListener("click", (e) => {
            e.preventDefault()
            regGoogle();
        });


    return divRegister;
    
}

