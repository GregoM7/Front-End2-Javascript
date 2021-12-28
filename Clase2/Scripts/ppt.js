/*

PIEDRA PAPEL O TIJERA

- Pedirle la eleccion al usuario (prompt y guardar este valor)
- Eleccion de la computadora (aleatoria)
- Comparar ambos valores
- Hay varias respuestas: ganaste, perdiste, empataste
- Darle una respuesta

*/

// let elecciones = ["piedra", "papel", "tijera"]

let elemento = prompt("Elegi piedra, papel o tijera...")
let usuario;
let computadora = Math.floor(Math.random() * 3);

switch (elemento){
    case "piedra": 
        usuario = 0;
        break;

    case "papel":
        usuario = 1;
        break;

    case "tijera": 
        usuario = 2;
        break;
    
    default:
        console.log("Ingrese una opción válida");
}

switch (usuario){
// Si eligieron el mismo valor...
    case computadora:
        console.log("Esto es un empate");
        break;

// Si eligió piedra...
    case 0:
        if (computadora == 1) {
            console.log("Perdiste :(");
        } else {
            console.log("Ganaste 😍");
        }
        break;

//Si eligió papel
    case 1:
        if (computadora == 0) {
            console.log("Ganaste 😍")
        } else {
            console.log("Perdiste :(")
        }
        break;
//Si eligió tijera
    case 2:
        if (computadora == 0) {
            console.log("Perdiste :(")
        } else {
            console.log("Ganaste 😍")
        }
        break;

}

