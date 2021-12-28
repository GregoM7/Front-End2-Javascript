const arrayDeNumeros = [1, 2, 4, 8]

// Metodo
let sumatoria = arrayDeNumeros.reduce((acum, num) => {
    acum + num,0 
    console.log(acum);
} );

const array = [1,2,4,8];
let acum = 0;
array.forEach(
    numero =>{acum= acum + numero; 
    console.log(acum);
    })

//console.log(sumatoria);