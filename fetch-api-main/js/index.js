// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
function llamadaApi() {
    fetch('https://randomuser.me/api/')
        .then(response => { //json
            return response.json()
        })
        .then(data => {
            //manipulamos la respuesta, trabajamos con la informacion parseada
            console.log(data)
            const template = {
                nombre: data.results[0].name.first,
                apellido: data.results[0].name.last,
                email: data.results[0].email,
                imagen: data.results[0].picture.large
            }
            renderizarDatosUsuario(template)
        });
}



function renderizarDatosUsuario({ nombre, apellido, email, imagen }) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
    let contenedor = document.querySelector('.tarjeta')
    let tarjeta = ` <img src="${imagen}" class="imagen-perfil" alt="">
    <h3>${nombre} ${apellido}</h3>
    <p>${email}</p>`
    contenedor.innerHTML = tarjeta;




}


/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.

let btn = document.querySelector('#random');
btn.addEventListener('click', function() {
    llamadaApi();
})