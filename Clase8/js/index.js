// let i = 0;

// function contador() {
//     i++;
//     document.querySelector("p").innerHTML = i;
// }

// function mostrarMensajePorConsola() {
//     console.log(i);
// }

// function mostrarMensajePorPantalla() {
//     alert(i);
// }

// function hacerNada() {

// }

// // function restarContador() {
// //     i--;
// //     document.querySelector("p").innerHTML = i
// //     console.log(i)
// // }


// let button = document.querySelector('button');

// button.addEventListener('click', contador);
// button.addEventListener('click', mostrarMensajePorConsola);
// button.addEventListener('click', mostrarMensajePorPantalla);

// // button.addEventListener('click', restarContador);

// // button.onclick = contador;
// // button.onclick = restarContador;

// button.onclick = hacerNada;

//Inicio El contador
let n = 0;
var l = document.getElementById("number");
let cont;
function initInterval() {
    cont = setInterval(function() {
        l.innerHTML = n;
        n++;
    }, 1000);
}
//Fabrico boton para parar y reanudar
let buttonStop = document.querySelector('.start');
buttonStop.addEventListener("click", function() {
    if (buttonStop.classList.contains('start')) {
        buttonStop.classList.remove('start');
        buttonStop.textContent = "Start";
        clearInterval(cont);
    } else {
        buttonStop.classList.add('start');
        buttonStop.textContent = "Stop";
        initInterval();
    }
})
//Fabrico Boton de reset
let buttonReset = document.querySelector('.reset')
buttonReset.addEventListener('click', function () {
    n = 0
})

//Cambio color de Fondo
var myVar = setInterval(setColor, 3000);

function setColor() {
  var x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "blue" ? "orange" : "blue";
}


