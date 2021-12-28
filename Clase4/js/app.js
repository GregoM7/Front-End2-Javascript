let dias = document.querySelectorAll('.dias');

let tamanio = confirm("Desea aumentar la letra?");

if(tamanio){
    dias.forEach(item => {
        console.log(item);
        item.style.fontSize = "40px"
    });
}

