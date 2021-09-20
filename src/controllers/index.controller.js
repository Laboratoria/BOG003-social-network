import {homeView} from '../views/home.js';
import {registerView} from '../views/register.js';



export const Home = () => {
    
    const divElement = document.createElement('div');
    divElement.classList = "text-black";
    divElement.innerHTML = homeView;
    return divElement;
};


export const Register = () => {
    
    const divElement = document.createElement('div');
    divElement.classList = "text-black";
    divElement.innerHTML = registerView;
    return divElement;
};

