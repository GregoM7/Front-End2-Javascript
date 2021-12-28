const apiUrl = 'https://dog.ceo/api/breeds/image/random';

function callApi() {
    fetch(apiUrl)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
            console.log(datos);
            loadImageAndShowAlert(datos.message);
        })
        .catch(error => {
            console.log("Ocurrió un error al llamar a la API.", error);
        });
}

let button = document.querySelector('button');
button.addEventListener('click', function() {
    callApi();
});

function loadImageAndShowAlert(src) {
    console.log(src);
    document.querySelector('img').setAttribute('src', src);
    alert('Se cargó la imagen correctamente.')
}