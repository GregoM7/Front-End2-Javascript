window.addEventListener("load", () => {

    /*captura de elementos */
    const userInfo = document.querySelector(".user-info");
    const userImage = document.querySelector(".user-image")
    const tarea = document.querySelectorAll(".tarea")
    const notDone = document.querySelectorAll(".not-done")
    const descripcion = document.querySelectorAll(".descripcion")
    const nombre = document.querySelectorAll(".nombre")
    const timestamp = document.querySelectorAll(".timestamp")

    const crearTarea = document.querySelector("form")
    const FnuevaTarea = document.querySelector("form .nueva-tarea")
    const FnotDone = document.querySelector("form>.not-done")
    const nuevaTarea = document.querySelector("#nuevaTarea")
    const Fimg = document.querySelector("form>img")
    const TarPen = document.querySelector(".tareas-pendientes")
    const skel = document.querySelector("skeleton")
    const tareasTerminadas = document.querySelector(".tareas-terminadas")




    /* */



    const url = "https://ctd-todo-api.herokuapp.com/v1/tasks";
    const usuario = JSON.parse(localStorage.getItem("newUser"));
    const token = usuario.jwt;
    console.log(token);

    const settingsGet = {
        method: "GET",
        headers: {
            "authorization": token,
            "Content-type": "application/json; charset=UTF-8"
        }
    }



    fetch(url, settingsGet)
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(data => {
            renderizado(data)
            console.log(data);
        }).catch(er => alert(er))

    crearTarea.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const tarea = {
            completed: true,
            description: nuevaTarea.value
        }
        const settings = {
            method: "POST",
            body: JSON.stringify(tarea),
            headers: {
                "authorization": token,
                "Content-type": "application/json; charset=UTF-8"
            }
        };
        fetch(url, settings)
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(data => {
                console.log(data)
            })
            .catch(er => alert(er))



    })

    function renderizado(datos) {

        datos.forEach((tarea) => {
            if (tarea.completed) {

                tareasTerminadas.innerHTML += `<li class="tarea">
        <div class="done"></div>
        <div class="descripcion">
        <p class="nombre">${tarea.description}</p>
        <div>
        <button><i id="${tarea.id}" class="fasfa-undo-alt change"></i></button>
        <button><i id="${tarea.id}" class="farfa-trash-alt"></i></button>
        </div>
        </div>
        </li>
        `
            } else {
                TarPen.innerHTML += `<li class="tarea">
        <div class="not-done change" id="${tarea.id}"></div>
        <div class="descripcion">
        <p class="nombre">${tarea.description}</p>
        <p class="timestamp"><i class="far
        fa-calendar-alt"></i> ${tarea.createdAt}</p>
        </div>
        </li>
        `
            }



        })

        TarPen.querySelectorAll('.not-done').forEach(item => {
            item.addEventListener("click", function() {
                alert(this.id);
                const url1 = `https://ctd-todo-api.herokuapp.com/v1/tasks/${this.id}`

                const tareaPut = {
                    description: this.description,
                    completed: true
                }

                const settingsDel = {
                    method: "PUT",
                    body: JSON.stringify(tareaPut),
                    headers: {
                        "id": this.id,
                        "authorization": token,
                        "Content-type": "application/json; charset=UTF-8"
                    }
                }

                fetch(url1, settingsDel).then(res => res.ok ? res.json() : Promise.reject(res)).then(data => console.log(data)).catch(er => console.log(er))
            })
        })

    }


})