import {homeView} from '../views/home.js';
import {registerView} from '../views/register.js';
import {loginView} from '../views/login.js';
import {postView} from '../views/post.js';



export const Home = () => {
    
    const divElement = document.createElement('div');
    divElement.classList = "text-black";
    divElement.innerHTML = homeView;
    return divElement;
};


export const Login = () => {
    
    const divElement = document.createElement('div');
    divElement.classList = "text-black";
    divElement.innerHTML = loginView;
    return divElement;
};

export const Register = () => {
    
    const divElement = document.createElement('div');
    divElement.classList = "text-black";
    divElement.innerHTML = registerView;
    return divElement;
};

export const Post = () => {
    
    const divElement = document.createElement('div');
    divElement.classList = "text-black";
    divElement.innerHTML = postView;
    return divElement;
};

