let usuario1 = ["Leia", "Organa", 29, "Berazategui"];

let usuario2 = {
    nombre: "Leia",
    apellido: "Organa",
    edad: 29,
    nacimiento: "Berazategui "
}

for(let propiedad in usuario2) {
    console.log(typeof usuario2[propiedad])
}

// for(let unDatoDelUsuario of usuario1) {
//     console.log( unDatoDelUsuario )
// }


