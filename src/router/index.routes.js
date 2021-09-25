import {Home, Login, Register, Post} from '../controllers/index.controller.js';

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
    
    case '#/post':
        return content.appendChild(Post());
    default:
        
   }
};

export { router };