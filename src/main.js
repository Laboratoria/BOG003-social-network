// Este es el punto de entrada de tu aplicacion
import { templateRegister } from './lib/view/template-register.js'
import { myFunction } from './lib/index.js'

myFunction()

document.getElementById('s-container').innerHTML = templateRegister()
