//------------------NODOS-----------------------//
let nombre = prompt('ingrese su nombre'); // Pedimos al usuario ingresar su nombre
let header = document.querySelector('header'); // Seleccionando el elemento donde va a insertar el nodo
let elemento = document.createElement('h1') // Creo un nodo <h1>
let textoElemento = document.createTextNode(nombre); // Creando el texto que entra por la variable Nombre y se va a guardar en el h1
elemento.appendChild(textoElemento); // <h1>nombre que eligio el usuario </h1>
header.appendChild(elemento); // <header><h1>nombre que eligio el usuario </h1></header>
//------------------INNER HTML-----------------------//
document.querySelector('h1').innerHTML += " Bienvenido!";  // Se le agrega al h1 escrito la palabra Bienvenido!


//------------------STYLES-----------------------//
let titulo = document.querySelector('h1');
titulo.style.color = "rose"; // Agrego Color al h1
titulo.style.fontSize = "102px"; // Agrego tamanio al h1

//------------------MODO OSCURO-----------------------//
function alternarTema() {
    let body = document.querySelector("body"); // Selecciono donde quiero agregar la clase (En este caso el body)
    body.classList.toggle('dark'); // Funcion como interruptor de tema, crea y elimina la clase dark
}

//------------------PLANTILLAS DE TEXTO Y RENDERIZAR-----------------------//
let contenedor = document.querySelector('.contenedor');
// Creo la card de imagen con innerHTML y un ForEach
ciudades.forEach(ciudad => {
    contenedor.innerHTML += `
    <div class="cards">
    <img src="${ciudad.imagenes}"/>
    <h2>${ciudad.titulo}</h2>
    <p>${ciudad.descripcion}</p>
  </div>
    `
});

// ------------------------- EVENTOS DE MOUSE-----------------------//
let boton = document.querySelector('button');
//Doy eventos al mouse cambiandole el color
boton.addEventListener("click", function () {
    boton.style.backgroundColor = "#02069f";
    boton.style.color = 'white';
});

// ------------------------- EVENTOS DE TECLADO-----------------------//

let input = document.querySelector('input')
input.addEventListener("keypress", function (e) {
    console.log("Presiono la Tecla: "+ e.key);
    if (e.key === "e") {
        alert('no se permite la letra e')
    }
})