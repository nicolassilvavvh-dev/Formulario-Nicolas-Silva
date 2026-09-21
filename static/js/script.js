console.log("Conexión de js exítosa...");

let boton1 = document.querySelector("#btn-1");
let contador1 = document.querySelector("#contador-1");


let cantidad = 0;

boton1.onclick = function () {
    cantidad++;
    contador1.innerText = cantidad + " like(s)";
};

let boton = document.querySelector("#boton");

boton.addEventListener("click", function () {
    if (boton.style.backgroundColor === "blue") {
        // Si ya está azul, limpia los estilos inline para volver al estado original
        boton.style.backgroundColor = "";
        boton.style.color = "";
    } else {
        // Si no está azul, aplica los colores
        boton.style.backgroundColor = "blue";
        boton.style.color = "white";
    }
});