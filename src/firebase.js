// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAzRLCkborXRHT0gdmxd-Fk2spT0AkkTq8",
  authDomain: "pets-3aed5.firebaseapp.com",
  projectId: "pets-3aed5",
  storageBucket: "pets-3aed5.appspot.com",
  messagingSenderId: "232793137973",
  appId: "1:232793137973:web:c45c49e9069cc6f6d0627c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Se inicializan las variables para verificar email y usuario 
/* var currentUser = null;
var emailVerified = null;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    currentUser = user;
    emailVerified = user.emailVerified;
  } else {
    currentUser = null;
  }
}); */