import { logOutUser } from '../index.js';

export const createTimeLineView = () => {
  const timeLineSection = document.createElement('section');
  const timeLineView = `  
      <h1> Bienvenido al Muro </h1>
      <button type="button" id ='logOut'> <img src="images/log-out1.png" alt="Log Out" /></button>
  `
  timeLineSection.innerHTML = timeLineView;
  const logOut = timeLineSection.querySelector('#logOut');

  logOut.addEventListener('click', (e) => {
    e.preventDefault();
    logOutUser()
    .then(() => {
     window.location.hash = '#/ingreso';
    }).catch((error) => {
    console.log(error);
    });
  })

  return timeLineSection;
}

