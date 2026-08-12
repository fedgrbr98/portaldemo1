console.log("archivo cargado");
document.querySelectorAll(".hub-card").forEach(card => {

    const video = card.querySelector("video");

    if (!video) return;

    card.addEventListener("mouseenter", () => {

        video.currentTime = 0;
        video.play();

    });

    card.addEventListener("mouseleave", () => {

        video.pause();
        video.currentTime = 0;

    });

});

document.querySelectorAll(".hub-card").forEach(card => {

    const video = card.querySelector(".card-video");

    if (!video) return;

    card.addEventListener("mouseenter", () => {

        video.currentTime = 0;
        video.play();

    });

    card.addEventListener("mouseleave", () => {

        video.pause();
        video.currentTime = 0;

    });

});