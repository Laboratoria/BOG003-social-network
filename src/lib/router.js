import { crearCuenta } from './view/ingreso.js';
import { irAInicio } from './view/registro.js'; 

export const changeRoute = (hash) => {
    if(hash === '#/ingreso'){
        return showView(hash)
    } else if (hash === '#/registro'){
        return showView(hash)
    } else {
        return showView(hash)
    }
}

const showView = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = crearCuenta();

    switch (hash) {
        case '#/':
            containerRoot.innerHTML = crearCuenta();
            break;
        case '#/ingreso':
            containerRoot.innerHTML = crearCuenta();
            break;
        case '#/registro':
            containerRoot.innerHTML= irAInicio();
            break;
        default:
            containerRoot.innerHTML = `<h2>No Existe</h2>`;           

    }    
}
