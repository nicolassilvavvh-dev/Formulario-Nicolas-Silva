console.log("Conexión de JS exitosa...");

// ==========================================
// 1. Contador de Likes
// ==========================================
const boton1 = document.querySelector("#btn-1");
const contador1 = document.querySelector("#contador-1");
let cantidad = 0;

if (boton1 && contador1) {
    boton1.addEventListener("click", function () {
        cantidad++;
        contador1.innerText = cantidad + " like(s)";
    });
}

// ==========================================
// 2. Botón Alternar Color (Toggle Color)
// ==========================================
const botonColor = document.querySelector("#boton");

if (botonColor) {
    botonColor.addEventListener("click", function () {
        if (botonColor.style.backgroundColor === "blue") {
            botonColor.style.backgroundColor = "";
            botonColor.style.color = "";
        } else {
            botonColor.style.backgroundColor = "blue";
            botonColor.style.color = "white";
        }
    });
}

// ==========================================
// 3. Cambio de Imagen al Pasar el Mouse (Hover)
// ==========================================
const imagen1 = document.getElementById("imagen1");

if (imagen1) {
    imagen1.addEventListener("mouseover", function () {
        imagen1.src = "static/images/images (1).png";
    });

    imagen1.addEventListener("mouseout", function () {
        imagen1.src = "static/images/images (2).png";
    });
}

// ==========================================
// 4. Mostrar/Ocultar Información (Acordeón)
// ==========================================
const btnToggleExp = document.getElementById("btn-toggle-exp");
const infoExtraExp = document.getElementById("info-extra-exp");

if (btnToggleExp && infoExtraExp) {
    btnToggleExp.addEventListener("click", function () {
        infoExtraExp.classList.toggle("oculto");
        if (infoExtraExp.classList.contains("oculto")) {
            btnToggleExp.innerText = "Leer más detalles";
        } else {
            btnToggleExp.innerText = "Ocultar detalles";
        }
    });
}

// ==========================================
// 5. Filtros de Proyectos
// ==========================================
const botonesFiltro = document.querySelectorAll(".btn-filtro");
const proyectos = document.querySelectorAll(".proyecto-card");

botonesFiltro.forEach(boton => {
    boton.addEventListener("click", function () {
        botonesFiltro.forEach(b => b.classList.remove("activo"));
        this.classList.add("activo");

        const categoria = this.getAttribute("data-filtro");

        proyectos.forEach(proyecto => {
            if (categoria === "todos" || proyecto.getAttribute("data-categoria") === categoria) {
                proyecto.style.display = "block";
            } else {
                proyecto.style.display = "none";
            }
        });
    });
});

// ==========================================
// 6. Efecto Scroll en Navbar y Revelar Secciones
// ==========================================
const navbar = document.getElementById("navbar");
const seccionesReveal = document.querySelectorAll(".reveal");

function manejarScroll() {
    // Sombra en navbar
    if (window.scrollY > 50) {
        navbar.classList.add("sombra");
    } else {
        navbar.classList.remove("sombra");
    }

    // Revelar elementos
    seccionesReveal.forEach(seccion => {
        const posicionSeccion = seccion.getBoundingClientRect().top;
        const tamanoPantalla = window.innerHeight / 1.2;

        if (posicionSeccion < tamanoPantalla) {
            seccion.classList.add("activo");
        }
    });
}

window.addEventListener("scroll", manejarScroll);
manejarScroll(); // Ejecutar al cargar la página

// ==========================================
// 7. Formulario Interactivo con Validación
// ==========================================
const formulario = document.getElementById("formulario-contacto");
const mensajeEstado = document.getElementById("mensaje-estado");

if (formulario) {
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        
        mensajeEstado.style.color = "#4edf75";
        mensajeEstado.innerText = `¡Gracias, ${nombre}! Tu mensaje ha sido enviado correctamente.`;
        
        formulario.reset();

        setTimeout(() => {
            mensajeEstado.innerText = "";
        }, 4000);
    });
}