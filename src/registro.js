 export const registration = () => {

  const templateRegistro = `
    <div> 
    <h1> REGISTRARSE:</h1>,
    <img src="img/google.png" alt="">
    <input type ="text" value ="">Registarte con Google</input>
    <form action="../form-result.php" target="_blank">
        <p>Ingresa tu nombre completo: <input type="text" name="nombrecompleto"></p>
        <p>      
        Deja un mensaje:<br>      
        <textarea name="mensaje"></textarea>      
        </p>      
        <input type="submit" value="Enviar la información">      
    </form>
    </div>
`

  const divRegistro = document.createElement("div");
  divRegistro.innerHTML = templateRegistro;
  divRegistro.classList.add("divRegistro") /*Se asigna la clase a un div creado desde createElement*/
  console.log()
  return divRegistro

}



/*let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;*/