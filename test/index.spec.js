import { signInUser, logOutUser, signInWithGoogle } from '../src/lib/index.js';


const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mocksdk = new firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);
global.firebase = mocksdk;
mocksdk.auth().autoFlush();

describe('signInUser', () => {
  it('deberia permitir iniciar sesión con correo y contraseña', () => {
    return signInUser("karenp@gmail.com", "1234567")
    .then((user) => {
    expect(user.email).toBe('karenp@gmail.com');  
    })
  });
});

describe('logOutUser', () => {
  it('Deberia cerrar sesión', () => {
    return logOutUser()
    .then((user) => {
      expect(user).toBe(undefined);  
    })
  });
});

describe('signInWithGoogle', () => {
  it('Deberia iniciar sesion con cuenta de Google', () => {
    return signInWithGoogle()
    .then((result) => {
      console.log(result)
      expect(typeof result).toBe('object');
    })
  });
});