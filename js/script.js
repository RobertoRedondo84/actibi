// =========================
// CARRUSELES
// =========================

document.querySelectorAll(".vista").forEach(vista => {

    const container = vista.querySelector(".carousel-container");
    const track = vista.querySelector(".carousel-track");
    const slides = vista.querySelectorAll(".slide");
    const nextBtn = vista.querySelector(".next");
    const prevBtn = vista.querySelector(".prev");

    if (!container || !track || slides.length === 0) return;

    let index = 0;

    function update() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    function next() {
        index = (index + 1) % slides.length;
        update();
    }

    function prev() {
        index = (index - 1 + slides.length) % slides.length;
        update();
    }

    // BOTONES
    nextBtn?.addEventListener("click", next);
    prevBtn?.addEventListener("click", prev);

    // SWIPE
    let startX = 0;

    container.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    container.addEventListener("touchend", e => {
        const diff = startX - e.changedTouches[0].clientX;

        if (diff > 50) next();
        if (diff < -50) prev();
    });

    // RESET
    vista._carousel = {
        reset: () => {
            index = 0;
            update();
        }
    };

});


// =========================
// NAVEGACIÓN ENTRE VISTAS
// =========================

const enlaces = document.querySelectorAll("nav a");
const vistas = document.querySelectorAll(".vista");

enlaces.forEach(enlace => {

    enlace.addEventListener("click", e => {
        e.preventDefault();

        const idDestino = enlace.getAttribute("href");

        // Quitar activa a todas
        vistas.forEach(v => v.classList.remove("activa"));

        // Activar la correcta
        const nuevaVista = document.querySelector(idDestino);

        if (nuevaVista) {
            nuevaVista.classList.add("activa");

            // Reset carrusel
            nuevaVista._carousel?.reset();
        }
    });

});