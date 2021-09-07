
export const createUserFirebase = (email, password) => {
  const createUserFirebase = firebase.auth().createUserWithEmailAndPassword(email, password);
  return createUserFirebase;
}

export const createUser = (email, password, userName) => {
  const createUserFirebase = createUserFirebase(email,password)
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
