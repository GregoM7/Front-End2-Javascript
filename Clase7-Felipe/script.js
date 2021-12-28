function alternarTema() {
    let modoOscuro = document.querySelector("body"); 
    modoOscuro.classList.toggle("dark");
}


const contenedor = document.querySelector(".contenedor");

listadoFelinos.forEach(felino =>{
  contenedor.innerHTML += ` <div class="item">
  <img src="${felino.imgUrl}" >
  <h2>${felino.title}</h2>
  <p>${felino.description}</p>
</div>`

})



