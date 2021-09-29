// Crear funciòn para autenticar usuarios nuevos con email
export const createUser = (email, password) => firebase
  .auth()
  .createUserWithEmailAndPassword(email, password);

// Crear función para enviar email de verificación al usuario
export const emailVerification = () => firebase
  .auth()
  .currentUser.sendEmailVerification();

export const signIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const closeSession = () => firebase.auth().signOut();

// Crear funcion para autenticar con google
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      // const credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('user', user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // const credential = error.credential;
      console.log('error', errorMessage);
      // ...
    });
};
