
const ganador = "Felicitaciones Ganastee 👍!!";
const perdedor = "Perdiste, Oooops... 👎!!";
const empate = "Empatados 😒!! "
const cantJugadas = 3;

let puntajes = {
    usuario: 0,
    computadora: 0
};
for (let i = 0; i < cantJugadas; i++) {
    /* ------------------ HACEMOS LAS ELECCIONES DE LOS JUGADORES ------------------ */
    let opcionUsuario;
    do {
        opcionUsuario = parseInt(prompt("Elija una opción: piedra(1), papel(2) o tijera(3)"));

    } while (isNaN(opcionUsuario) || (opcionUsuario < 1 || opcionUsuario > 3));
    
    let opcionComputadora = parseInt(Math.random() * 3 + 1);
    console.log(opcionComputadora);

    let resultado = "Aún no hay resultado";

    /* ----------------- HACEMOS LAS COMPARACIONES DE LAS JUGADAS ----------------- */

    if (opcionUsuario == opcionComputadora) {
        resultado = empate;
    } else if ((opcionUsuario == 1 && opcionComputadora == 3) || (opcionUsuario == 3 && opcionComputadora == 2) || (opcionUsuario == 2 && opcionComputadora == 1)) {
        resultado =ganador;
        puntajes.usuario += 1;
    } else {
        resultado = perdedor;
        puntajes.computadora += 1;
    }

   /**------MOSTRAMOS RESULTADOS POR TANDA------- */
    console.log(resultado);
    alert(resultado)
}

/* ------------------------ MOSTRAMOS RESULTADO GLOBAL DEL JUEGO ------------------------ */

puntajes.usuario == puntajes.computadora ? Swal.fire("Empate!!", "Que parejo " , "info")
: puntajes.usuario > puntajes.computadora ? Swal.fire("Ganaste 👍!! ", "Te llevaste el triunfo!! " , "success")
: Swal.fire("Perdiste 👎 ", "Ooops....!" , "error");

