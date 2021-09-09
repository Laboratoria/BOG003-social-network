
export const registerUser = (email, password) => {
  /*  const email = "test@example.com";
   const password = "hunter2"; */
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}



export const registerView = `
<section class="registerSection">
<div class="registerForm">

<p>Crear</p>
<p>cuenta</p>

    <form class="register">
      <input id="email"type="text" placeholder="Correo electronico">
      <input id= "password"type="password" placeholder="Contraseña">
      <input id= "confirm-password"type="password" placeholder="Confirmar Contraseña">
      <button id="Register">Registrate</button>
    </form>
   
`;


