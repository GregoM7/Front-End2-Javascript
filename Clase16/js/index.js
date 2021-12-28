let promise = new Promise((resolve, reject) => {
    const user = {
        status: 'activo',
        userName: 'Nombre usuario',
        amount: 1000
    }

    // Llamada a la API
    // url/GetUser?userId=Nombre_usuario
    setTimeout(() => {

        if (user.amount < 1) {
            reject({ mensaje: "Fondos insuficientes" });
        } else if (user.status != 'activo') {
            reject({ mensaje: "La cuenta no está activa" });
        } else {
            resolve({ mensaje: "La transacción se realizó correctamente" });
        }

    }, 2500);

});

promise.then((respuesta) => {
    console.log(respuesta);
}).catch((err) => {
    console.log(err);
});