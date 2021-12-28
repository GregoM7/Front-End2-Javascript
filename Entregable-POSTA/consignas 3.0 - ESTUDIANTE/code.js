/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
    nombre: "",
    edad: 0,
    ciudad: "",
    interesPorJs: "",
};

const listado = [{
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

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#sobre-mi");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

const fecha = new Date();
const anioActual = fecha.getFullYear();

function obtenerDatosDelUsuario() {
    /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    datosPersona.nombre = prompt("Ingrese su Nombre:");
    datosPersona.edad = anioActual - prompt("Ingrese su año de nacimiento:");
    datosPersona.ciudad = prompt("Ingrese la ciudad donde vivis:");
    datosPersona.interesPorJs = confirm("Te interesa javaScript");
}

function renderizarDatosUsuario() {
    /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
    obtenerDatosDelUsuario();
    /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
    document.getElementById("nombre").innerHTML = datosPersona.nombre;
    document.getElementById("edad").innerHTML = datosPersona.edad;
    document.getElementById("ciudad").innerHTML = datosPersona.ciudad;
    if (datosPersona.interesPorJs === true) {
        document.getElementById("javascript").innerHTML = "SI";
    } else {
        document.getElementById("javascript").innerHTML = "NO";
    }
}

let primeraFuncion = true;

function recorrerListadoYRenderizarTarjetas() {
    /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
    if (primeraFuncion) {
        let fila = document.getElementById("fila");
        listado.forEach((lista) => {
            fila.innerHTML += `<div class="caja">
    <img src="${lista.imgUrl}" alt="">
    <h2>${lista.lenguajes}</h2>
    <p>${lista.bimestre}</p>
  </div>`;
        });
    }
    primeraFuncion = false;
}

function alternarColorTema() {
    /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
    let divSitio = document.getElementById("sitio");
    divSitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
window.addEventListener("keypress", function(f) {
    console.log("Presiono la Tecla: " + f.key);
    if (f.key === "f") {
        document.querySelector("#sobre-mi").classList.toggle("oculto");
    }
});