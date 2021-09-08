import {homeView} from '../views/home.js';
import {postsView} from '../views/posts.js';
import {registerView} from '../views/register.js';
import {loginView} from '../views/login.js';


export const Home = () => {
    
    const divElement = document.createElement('div');
    divElement.classList = "text-black";
    divElement.innerHTML = homeView;
    return divElement;
};
export const Posts = () => {
    
    const divElement = document.createElement('div');
    divElement.classList = "text-black";
    divElement.innerHTML = postsView;
    return divElement;
};

export const Register = () => {
    
    const divElement = document.createElement('div');
    divElement.classList = "text-black";
    divElement.innerHTML = registerView;
    return divElement;
};

export const Login = () => {
    
    const divElement = document.createElement('div');
    divElement.classList = "text-black";
    divElement.innerHTML = loginView;
    return divElement;
};