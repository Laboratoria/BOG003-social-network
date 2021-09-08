//Importar funcion viewRegister
import { register } from "./templates/register.js";
import { login } from "./templates/login.js";

//Preguntar Sergio
export const changeRoute = (hash) => {
    if (hash === "#/register"){
        return showTemplate (hash)
    } else if(hash === "#/login"){
        return showTemplate (hash)
    } else {
        return showTemplate (hash)
    }
}

//Preguntar Sergio
const showTemplate = (hash) => {
    const containerAPP = document.getElementById("app");

    switch (hash) {
        case "#/register":
            containerAPP.appendChild(register());
            break;
        case "#/login":
            containerAPP.appendChild(login());
            break;
        /* case "#/profile":
            containerAPP.appendChild(profile());
            break; */
        default:
            containerAPP.innerHTML= `<h2>Página no encontrada</h2>`
    }

}