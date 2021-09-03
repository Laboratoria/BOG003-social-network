export const createUser = (email, password) => {
  console.log(email, password);
  return firebase.auth().createUserWithEmailAndPassword(email, password)
};

export const logOutUser = () => {
 return firebase.auth().signOut()
};
