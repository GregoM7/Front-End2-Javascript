let items = document.querySelectorAll('li');

items[0].innerHTML = "El <strong>52%</strong> del tráfico de todo Internet es creado por Bots (entre inofensivos y maliciosos)."

let color = prompt("Elija un color para el primer parrafo!(escribalo en ingles)")

items[0].style.backgroundColor = `${color}`;
items[0].style.fontWeight = "bold";

items.forEach( item => {

    //chequeo si el nodo no tiene ninguna clase
    if(item.classList.length == 0){
        item.classList.add('par')
    }

    if(item.classList.contains('parrafo')){
        item.style.color = color;
    }
})

