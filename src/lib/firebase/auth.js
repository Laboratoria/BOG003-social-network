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
      const user = result.user;
      console.log('user', user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log('error', errorMessage);
      // ...
    });
};

// Funcion para dar like en firestore
const db = firebase.firestore();
export const addLike = (userId, id) => db.collection('postList').doc(id).update(({
  likes: firebase.firestore.FieldValue.arrayUnion(userId),
}));

export const removeLike = (userId, id) => db.collection('postList').doc(id).update(({
  likes: firebase.firestore.FieldValue.arrayRemove(userId),
}));
