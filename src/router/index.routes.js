import Home from '../controllers/index.controller.js';

let content = document.getElementById('root');

const router = (route) => {
content.innerHTML = "";
   switch(route) {

    
    case '#/': 
        return content.appendChild(Home());
     
    case '#/posts':
        return console.log("posts!!!");

    case '#/login':
        return console.log("login!!!");
    
    case '#/register':
        return console.log("register!!!");

    default:
        return console.log("404!!!");

    
   }
};

export { router };