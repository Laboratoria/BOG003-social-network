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

