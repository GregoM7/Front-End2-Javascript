document.querySelector("form").onsubmit = function (e) {
  e.preventDefault();
  
  let validMail = isValidMail();
  let validPass = isValidPass();
  logearEnAPIYRedirigirAMisTareas()
//   if (validMail && validPass) {
      
//     logearEnAPIYRedirigirAMisTareas();
    
//   } else {
//     //registrar error
//     console.log("error");
//     registerLoginAttempt(mail.value, pass.value);
//   }
};

let mailRE = document.getElementById("inputEmail");
function isValidMail() {
  let regex = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
  );
  return regex.test(mailRE.value);
}

let passRE = document.getElementById("inputPassword");
function isValidPass() {
  return (
    passRE.value.length > 8 && passRE.value.length <= 12 && passRE.value.includes(".")
  );
}
let button = document.querySelector("button");
mail.addEventListener("keyup", function () {
  if (mail.value.length >= 5 && pass.value.length >= 5) {
    button.disabled = false;
  }
});

let loginAttempts = [];
function registerLoginAttempt(user, pass) {
  let attempt = {
    urerLogin: user,
    password: pass,
  };
  loginAttempts.push(attempt);
}

//Todo lo de la API
let objetoLogin = {
  email: "string",
  password: "string",
};


function logearEnAPIYRedirigirAMisTareas() {
    let urlLogin = "https://ctd-todo-api.herokuapp.com/v1/users/login";
  
    const m = mailRE.value;
    const p = passRE.value;

  const user = {
    email: m,
    password: p,
  };
  console.log(JSON.stringify(user));

  // console.log("datos de userDatos: " + user.firstName + user.lastName);
  const ajaxs = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  // ejecutamos la creacion a traves de POST
  fetch(urlLogin, ajaxs)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.jwt) {
        console.log(data.jwt);
        let tokenJWT = data.jwt;
        alert("Usuario logueado correctamente.");
        localStorage.setItem("jwt",data.jwt)
        
        location.href="./mis-tareas.html";
      } else {
        console.log("Datos repetidos: " + data);
        alert("Error!!!!. Usuario no logueado correctamente. Intentelo nuevamente");
      }
      console.log(data);
    });
}
