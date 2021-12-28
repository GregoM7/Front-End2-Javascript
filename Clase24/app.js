const apiBaseUrl = 'https://pokeapi.co/api/v2/';
const pokemon = 'pokemon/';


const formulario = document.forms[0];
const inputPokemon = document.querySelector('form input');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    consutltaApi(inputPokemon.value);
})


function consutltaApi(nombre) {
    fetch(`${apiBaseUrl}${pokemon}${nombre}`)
        .then(respuesta => respuesta.json())
        .then(data => {
            //llega la info de la API
            console.log(data)
            const card = document.querySelector('.card')
                // removemos el formato de skeleton
            card.classList.remove('skeleton')
                // pintamos la data del pokemon consultado
            renderizarPokemon(data.name, data.sprites.front_default)
        })
}

function renderizarPokemon(nombre, imagen) {
    const nodoNombre = document.querySelector('.card h2');
    const nodoImagen = document.querySelector('.card img');

    nodoNombre.innerText = nombre;
    nodoImagen.setAttribute('src', imagen);
}