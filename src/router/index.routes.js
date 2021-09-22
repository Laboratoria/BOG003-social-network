import {Home, Login, Register, Posts} from '../controllers/index.controller.js';

let content = document.getElementById('root');

const router = (route) => {
content.innerHTML = "";
   switch(route) {
    case '': 
        return content.appendChild(Home());
     
    case '#/': 
        return content.appendChild(Home());
     
    case '#/login':
        return content.appendChild(Login());

    case '#/register':
        return content.appendChild(Register());
    
    case '#/posts':
        return content.appendChild(Posts());
    default:
        
   }
};

export { router };