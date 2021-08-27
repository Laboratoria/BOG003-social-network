import { templateRegister } from '.view/template-register.js'

export const router = (hash) => {
  switch (hash) {
    case '#/':
      return console.log('home')

    case '#/Loguin':
      return console.log('Loguin')

    case '#/Register':
      return console.log('Register')

    default:
      return console.log('error 404')
  }
}
