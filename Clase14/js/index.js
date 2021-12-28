document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let textToSearch = document.querySelector("#busqueda").value;
    let url = `https://www.google.com/search?q=${textToSearch}`

    location.href = url;
    saveSearchInHistory(textToSearch)
    console.log(localStorage.getItem('search'))
        //reemplaza el historial del navegador
        //location.replace = url;

})
let historial = []

function saveSearchInHistory(Serchead) {
    historial.push(textToSearch);
    localStorage.setItem('search', JSON.stringify(Serchead));
}

let list = document.querySelector('#busquedas-realizadas');

function showSearchHistory() {
    let history = JSON.parse(localStorage.getItem('search'));
    history.forEach(element => {
        let nodo = document.createElement('p');
        let texto = document.createTextNode(element);
        nodo.appendChild(texto);

        list.appendChild(nodo);
    });
}