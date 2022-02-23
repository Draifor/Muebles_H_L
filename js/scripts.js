const btnIngresar = document.getElementById("ingresar");
const btnCerrarSesion = document.getElementById("cerrar-sesion");
const btnRegresar = document.getElementById("regresar");

// Función para iniciar sesión
const iniciarSesion = evt => {
    location.href = "index.html";
    evt.preventDefault();
}

// Cerrar la sesión
btnCerrarSesion.onclick = () => {
    location.href = "inicio-sesion.html";
}

// Botón regresar
btnRegresar.onclick = () => {
    history.go(-1);
}

// Función para agregar cliente
const agregarCliente = evt => {
    location.href = "clientes.html"
    evt.preventDefault();
}
