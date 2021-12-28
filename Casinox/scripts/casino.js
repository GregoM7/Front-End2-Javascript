// Tragamonedas
const premioTotal = 2500;
const casilla = 10;
function calcular(aciertos){
    return (premioTotal / casilla) * aciertos

}

// Loteria
function resultadoLoteria(lugar) {
    console.log(lugar);
    lugar = Math.floor(Math.random() * 4);
     if (lugar === 0) {
         return "Ganaste $1000"
     }
    else if (lugar === 1 || lugar === 2 ) {
        return " Ganaste $10000"
     }  
     else{
        return "Ganaste $100000"
     }
}
let eleccionUsuario = prompt("Lugar con el que soñaste por ultima vez");
console.log(resultadoLoteria(eleccionUsuario));

// RULETA
const finalRuleta = 25;
function tirarRuleta(){
    let numeroGanador = Math.floor(Math.random() * 25) + 1;
    for (let i = 1; i <= finalRuleta; i++) {
        if (i === numeroGanador) {
            console.log("Este numero es el ganador: "+ numeroGanador);
        }
        else console.log(i);
    }
}
console.log(tirarRuleta());