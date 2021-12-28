let datosPersona = {
  nombre: "Pedro",
  edad: 32,
  ciudad: "Buenos Aires",
  interesPorJs: "Depende",
};

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt('Ingrese su Nombre:')
  datosPersona.edad = prompt('Ingrese Tu edad:')
  datosPersona.ciudad = prompt('Ingrese la ciudad donde vivis:')
  datosPersona.interesPorJs = confirm("Te interesa javaScript")
}



function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById('nombre').innerHTML = datosPersona.nombre
  document.getElementById('edad').innerHTML = datosPersona.edad
  document.getElementById('ciudad').innerHTML = datosPersona.ciudad
  if (datosPersona.interesPorJs === true) {
    document.getElementById('javascript').innerHTML = "SI"
  } 
  else {
    document.getElementById('javascript').innerHTML = "NO"
  }



}


/* ------------------------- NO MODIFICAR ESTE ARRAY ------------------------ */
const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let fila = document.getElementById('fila')
  listado.forEach(lista =>{
    fila.innerHTML += `<div class="caja">
    <img src="${lista.imgUrl}" alt="">
    <h2>${lista.lenguajes}</h2>
    <p>${lista.bimestre}</p>
  </div>`
  })
  


}


function mostrarYOcultarDescripcionCompleta() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 let sobremi = document.querySelector('.sobre-mi')
 if (sobremi.classList.contains('sobre-mi')) {
   sobremi.classList.toggle('sobre-mi-completo')
 }
}
