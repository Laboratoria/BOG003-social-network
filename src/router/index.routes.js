import Home from '../views/home.js';

const content = document.getElementById('root');

const router = (route) => {

   switch(route) {

    case '':

        const currentHost = window.location.href;
        // Navigate to the Location.reload article by replacing this page
       
        return window.location.replace(`${currentHost}#/`);

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