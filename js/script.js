// ---- scroll suave entre secciones ----

const btnSobreMi = document.getElementById("btn-sobre-mi");
const btnProyectos = document.getElementById("btn-proyectos");
const btnContacto = document.getElementById("btn-contacto");

const seccionSobreMi = document.getElementById("sobre-mi");
const seccionProyectos = document.getElementById("proyectos");
const seccionContacto = document.getElementById("contacto");

btnSobreMi.addEventListener("click", () => {
    seccionSobreMi.scrollIntoView({ behavior: "smooth" });
});

btnProyectos.addEventListener("click", () => {
    seccionProyectos.scrollIntoView({ behavior: "smooth" });
});

btnContacto.addEventListener("click", () => {
    seccionContacto.scrollIntoView({ behavior: "smooth" });
});


// ---- Validación de Formulario (Que estén todos los campos completos y muestra un mensaje cuando se envía con éxito) ----
// Falta validación de mail (Que tenga una "@", el ".com", etc.)

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contacto form");
    const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");

    form.addEventListener("submit", (e) => {
        let valido = true;

        form.querySelectorAll("input, textarea").forEach(campo => {

            const error = campo.nextElementSibling; 

            if (campo.value.trim() === "") {
                error.classList.remove("hidden");
                campo.classList.add("border", "border-red-500");
                valido = false;

            } else {
                error.classList.add("hidden");
                campo.classList.remove("border", "border-red-500");
            }
        });

        if (!valido) {
            e.preventDefault();

        } else {
            e.preventDefault();
            mensajeConfirmacion.classList.remove("hidden");
            mensajeConfirmacion.classList.add("animate__animated", "animate__fadeIn");

            // Ocultar mensaje después de 3 segundos
            setTimeout(() => {
                mensajeConfirmacion.classList.add("hidden");
            }, 3000);

            form.reset();
        }
    });
});
