import {Home, Register} from '../controllers/index.controller.js';

let content = document.getElementById('root');

const router = (route) => {
content.innerHTML = "";
   switch(route) {
    case '': 
        return content.appendChild(Home());
     
    case '#/': 
        return content.appendChild(Home());
     

    case '#/register':
        return content.appendChild(Register());
    default:
        
   }
};

export { router };