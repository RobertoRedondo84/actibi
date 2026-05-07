const enlaces = document.querySelectorAll("nav a");
const bloques = document.querySelectorAll(".bloque");

enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        const id = enlace.getAttribute("href");
        const destino = document.querySelector(id);

        if (destino && destino.classList.contains("bloque")) {

            bloques.forEach(b => b.classList.remove("activo"));
            destino.classList.add("activo");
        }
    });
});