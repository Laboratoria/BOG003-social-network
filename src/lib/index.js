export const createUser = (email, password, userName) => {
  console.log(userName);
  const createUserFirebase = firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    userCredential.user.updateProfile({ 
     displayName: userName,
    })
  }) 
  return createUserFirebase;
};

export const logOutUser = () => {
 return firebase.auth().signOut()
};

export const signInUser = (email, password) => {
 return firebase.auth().signInWithEmailAndPassword(email, password)
};

export const signInWithGoogle = () => {
 var provider = new firebase.auth.GoogleAuthProvider();
 return firebase.auth().signInWithPopup(provider)
};