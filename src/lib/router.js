import { createLogInView } from './view/ingreso.js';
import { createRegisterView } from './view/registro.js';

export const changeRoute = (hash) => {
    console.log(hash);
    const mainSection = document.getElementById('main-section');
    mainSection.innerHTML = '';

    switch (hash) {
        case '#/':
            mainSection.appendChild(createLogInView());
            break;
        case '#/ingreso':
            mainSection.appendChild(createLogInView());
            break;
        case '#/registro':
            mainSection.appendChild(createRegisterView());
            break;
        default:
            mainSection.innerHTML = `<h2>No Existe</h2>`;

    }
}
