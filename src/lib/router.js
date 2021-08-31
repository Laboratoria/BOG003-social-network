import { createLogInView } from './view/ingreso.js';
import { createRegisterView } from './view/registro.js';

export const changeRoute = (hash) => {
<<<<<<< HEAD
    if (hash === '#/ingreso') {
        return showView(hash)
    } else if (hash === '#/registro') {
        return showView(hash)
    } else {
        return showView(hash)
    }
}

const showView = (hash) => {
=======
    console.log(hash);
>>>>>>> 15fc516e1145d11a55bc10d7b3c428e9ca54fa6d
    const mainSection = document.getElementById('main-section');
    mainSection.innerHTML = '';

    switch (hash) {
        /* case '#/':
            mainSection.innerHTML = createLogInView();
            break; */
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
