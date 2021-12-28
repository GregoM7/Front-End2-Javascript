onload = function () {
  console.log("hola mundo");



  let form = document.querySelector("form");
  form.addEventListener("submit", submit);
  function submit(e) {
    e.preventDefault();
    console.log("hola ciudad");

    let nombre = document.getElementById("nombre").value;
    console.log("nombre: " + nombre);
    let lastName = document.getElementById("lastName").value;
    let mail = document.getElementById("email").value;
    let pass1 = document.getElementById("password").value;
    let repass = document.getElementById("repassword").value;

    //replica sin .value

    //if name, email, password, repassword if true, redirect login
    let validName = isValidName(nombre);

    let validLastName = isValidLastName(lastName);
    let validMail = isValidMail(mail);
    let validPass1 = isValidPass(pass1);
    let validRePass = isValidRePass(repass, pass1);
    //isValidName&&isValidMail&&isValidLastName&&isValidPass&&isValidRePass
    if (validName && validLastName && validMail && validPass1 && validRePass) {
      //texto renderiza el nombre ingresado
      // let textName = nombre.toLowerCase();
      // textName.split(" ").forEach((word) => {
      //   word = word[0].toUpperCase() + word.slice(1);
      // });
      // let textLastName = lastName.toLowerCase();
      // textLastName.split(" ").forEach((last) => {
      //   last = last[0].toUpperCase() + last.slice(1);
      // });
      //Se van agregando los usuarios registrados a la BD
      // let objetoUsuario = {
      //   Name: textName,
      //   LastName: textLastName,
      //   Email: mail,
      //   Password: pass1,
      //   Repassword: repass,
      // };

      

      registrarEnAPIYRedirigirALogin(nombre, lastName, mail, pass1);
      

    
    } else {
      //registrar error
      addBugs();
    }
    // enviarMensaje();
  }

  //Base de datos

  //Errores encontrados
  let errors = [];
  function addBugs() {
    if (errors.length > 0) {
      let ul = document.getElementById("ul");
      errors.forEach((error) => {
        ul.innerHTML += `<li>${error}</li>`;
      });
    }
  }

  //VALIDACIONES AL NOMBRE

  function isValidName(nombre) {
    let n = nombre.value;
    let expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if (expRegNombre.exec(n) && !Number.isInteger(n)) {
      return true;
    } else {
      errors.push("nombre incorrecto");
    }
  }

  //VALIDA EL APELLIDO

  function isValidLastName(lastName) {
    let l = lastName.value;
    let expRegApellidos = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if (expRegApellidos.exec(l) && !Number.isInteger(l)) {
      return true;
    } else {
      errors.push("apellido incorrecto");
    }
  }
  //Validad email

  function isValidMail(mail) {
    let regex = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
    );
    if (regex.test(mail)) {
      return true;
    } else {
      errors.push("MAIL incorrecto");
    }
  }

  //VALIDA LA 1ER CONTRASENIA

  function isValidPass(pass1) {
    if (pass1.length >= 8 && pass1.length <= 12) {
      return true;
    } else {
      errors.push("contraseña incorrecto");
    }
  }
  function isValidRePass(repass, pass1) {
    if (repass == pass1) {
      return true;
    } else {
      errors.push("contraseñas no coinciden");
    }
  }

  //API
// Registrar usuario y redirigir a login
  function registrarEnAPIYRedirigirALogin(nombre, lastName, mail, pass1) {
    const Url = "https://ctd-todo-api.herokuapp.com/v1/users";
    const n = nombre;
    console.log("n: " + n);
    const l = lastName;
    const m = mail;
    const p = pass1;

    const user = {
      firstName: n,
      lastName: l,
      email: m,
      password: p,
    };
    console.log(JSON.stringify(user));

    console.log("datos de userDatos: " + user.firstName + user.lastName);
    const ajaxs = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    };

    // ejecutamos la creacion a traves de POST
    fetch(Url, ajaxs)
      .then((response) => {
        return response.json();
      })
      .then((data) =>{
        if(data.jwt){
          console.log(data.jwt);
          let tokenJWT=data.jwt
          alert("Usuario registrado correctamente.")
          
          location.href = "./index.html";
        }else{
          console.log("Datos repetidos: "+data);
          alert("Error!!!!. Usuario ya registrado. Intentelo nuevamente")
        }
        console.log(data)
      });
  }
};
