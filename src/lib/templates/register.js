export const register = () => {
    //Div contenedor de la vista div padre
    const divRegister = document.createElement('div');

    //creando tag h1 titulo
    const viewRegister = `
        <h1>OtaKuGeeK</h1>
        `
        
    //Mostrar en pantalla tag h1    
    divRegister.innerHTML = viewRegister;

    

    return divRegister;
    
}

