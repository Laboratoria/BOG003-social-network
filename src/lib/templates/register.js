export const register = () => {
    //Div contenedor de la vista div padre
    const divRegister = document.createElement('div');

    //creando tag h1 titulo
    const viewRegister = `
        <div class = "welcomeContainer">
            <h1>OtaKuGeeK</h1>
            <img src="IMG/SOMBRA AZUL.svg" width="100" alt="logo sin fondo" class="logo">
            <h2>¡Bienvendos</h2>
            <h3>Red social para Otakus y no tan Otakus</h3>
        </div>
    
        <div class="formContainer">
            <h2>Crea una cuenta</h2>
            <h3>Es fácil, rápido y divertido!!!</h3>
            <form id="signUp">
                <input type="text" id="email" class="signUp" placeholder="Ingresa tu Email" required="" autocomplete="off"></input>
            </form>

            <form id="signUp1">
                <input type="text" id="password" class="signUp" placeholder="Ingresa tu Contraseña" required="" autocomplete="off"></input>
            </form>

            <button type="submit" id="btnregister" class="btnregister" onclick="">Resgistrarte</button>
        </div>
        `
        
    //Mostrar en pantalla tag h1    
    divRegister.innerHTML = viewRegister;

    

    return divRegister;
    
}

