document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------
    // Transición al salir
    // ----------------------------

    document.querySelectorAll("a").forEach(link => {

        if (link.target === "_blank") return;

        link.addEventListener("click", e => {

            const href = link.getAttribute("href");

            if (!href || href.startsWith("#")) return;

            e.preventDefault();

            document.body.classList.add("page-transition");

            setTimeout(() => {

                window.location.href = href;

            }, 300);

        });

    });

});


// ----------------------------
// Al volver con Atrás/Adelante
// ----------------------------

window.addEventListener("pageshow", () => {

    document.body.classList.remove("page-transition");

    document.body.style.opacity = "1";

});