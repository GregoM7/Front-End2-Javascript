window.addEventListener("load", function () {
  function userName() {
    let JWT = localStorage.getItem("jwt");
    let urlAPI = "https://ctd-todo-api.herokuapp.com/v1/users/getMe";

    const ajaxs = {
      method: "GET",
      headers: {
        authorization: JWT,
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    fetch(urlAPI, ajaxs)
      .then((response) => {
        return response.json();
      })
      .then((data) => renderizarDatos(data));
  }
  userName();

  function renderizarDatos(data) {
    let pUserName = document.querySelector(".user-info p");
    pUserName.innerText = data.firstName + " " + data.lastName;
  }

  function obtenerTareas() {
    let JWT = localStorage.getItem("jwt");

    let urlApi = "https://ctd-todo-api.herokuapp.com/v1/tasks";

    const config = {
      method: "GET",
      headers: {
        authorization: JWT,
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    fetch(urlApi, config)
      .then((response) => response.json())
      .then((data) => {
        renderizarInfo(data);
      });
  }
  obtenerTareas();

  let bottonForm = document.querySelector(".nueva-tarea");
  bottonForm.addEventListener("submit", capturarBoton);
  function capturarBoton(e) {
    e.preventDefault();

    crearTarea();
  }
  function crearTarea() {
    let inputTarea = document.getElementById("nuevaTarea");

    let JWT2 = localStorage.getItem("jwt");
    console.log("crearTarea: " + JWT2);
    let url = "https://ctd-todo-api.herokuapp.com/v1/tasks";
    const tarea = {
      description: inputTarea.value,
      completed: false,
    };

    const ajax = {
      method: "POST",
      headers: {
        authorization: JWT2,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(tarea),
    };
    fetch(url, ajax)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        console.log(data);
        //location.reload();
      })

      .catch((err) => {
        let mensaje = "Ocurrio un error";
        alert(`Error: ${mensaje} ${err}`);
      });
  }

  //consignas v4.
  const tareasPendientes = document.querySelector(".tareas-pendientes");
  const tareaTerminada = document.querySelector(".tareas-terminadas");
  function renderizarInfo(listado) {
    listado.forEach((element) => {
      if (element.completed) {
        tareaTerminada.innerHTML += `<li class="tarea">
        <div class="done"></div>
        <div class="descripcion">
        <p class="nombre">${element.description}</p>
        <div>
        <button><i id="${element.id}" class="fas
        fa-undo-alt change"></i></button>
        <button><i id="${element.id}" class="far
        fa-trash-alt"></i></button>
        </div>
        </div>
        </li>`;
      } else {
        tareasPendientes.innerHTML += `<li class="tarea">
          <div class="not-done change" id="${element.id}"></div>
          <div class="descripcion">
          <p class="nombre">${element.description}</p>
          <p class="timestamp"><i class="far
          fa-calendar-alt"></i> ${element.createdAt}</p>
          </div>
          </li>`;
      }
    });
    tareasPendientes.querySelectorAll(".not-done").forEach((item) => {
      item.addEventListener("click", function () {
        alert(this.id);
        alert(this.description)
        const url1 = `https://ctd-todo-api.herokuapp.com/v1/tasks/${this.id}`;

        const tareaPut = {
          description: this.description,
          completed: true,
        };
        let JWT3 = localStorage.getItem("jwt");

        const settingsPut = {
          method: "PUT",
          body: JSON.stringify(tareaPut),
          headers: {
            id: this.id,
            authorization: JWT3,
            "Content-type": "application/json; charset=UTF-8",
          },
        };

        fetch(url1, settingsPut)
          .then((res) => (res.ok ? res.json() : Promise.reject(res)))
          .then((data) => {
            //location.reload();
            console.log(data);
          })
          .catch((er) => console.log(er));
      });
    });
    tareaTerminada.querySelectorAll(".fa-trash-alt").forEach((item) => {
      item.addEventListener("click", function () {
        alert(this.id);
        const url2 = `https://ctd-todo-api.herokuapp.com/v1/tasks/${this.id}`;

        let JWT4 = localStorage.getItem("jwt");

        const settingsDel = {
          method: "DELETE",
          headers: {
            id: this.id,
            authorization: JWT4,
            "Content-type": "application/json; charset=UTF-8",
          },
        };

        fetch(url2, settingsDel)
          .then((res) => (res.ok ? res.json() : Promise.reject(res)))
          .then((data) => {
            console.log(data);
            location.reload();
          })
          .catch((er) => console.log(er));
      });
    });
    tareaTerminada.querySelectorAll(".fa-undo-alt").forEach((item) => {
      item.addEventListener("click", function () {
        alert(this.id);
        const url1 = `https://ctd-todo-api.herokuapp.com/v1/tasks/${this.id}`;

        const tareaPut = {
          description: this.description,
          completed: false,
        };
        let JWT3 = localStorage.getItem("jwt");

        const settingsPut = {
          method: "PUT",
          body: JSON.stringify(tareaPut),
          headers: {
            id: this.id,
            authorization: JWT3,
            "Content-type": "application/json; charset=UTF-8",
          },
        };

        fetch(url1, settingsPut)
          .then((res) => (res.ok ? res.json() : Promise.reject(res)))
          .then((data) => {
            console.log(data);
            location.reload();
          })
          .catch((er) => console.log(er));
      });
    });
  }

  function cierreSesion() {
    let pCerrarSesion = document.getElementById("closeApp");
    pCerrarSesion.addEventListener("click", (e) => {
      e.preventDefault();
      sessionStorage.removeItem("jwt");
      location.href = "./index.html";
    });
  }
  cierreSesion();
});
