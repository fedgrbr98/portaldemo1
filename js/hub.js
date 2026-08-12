document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".hub-card");


    cards.forEach(card => {


        const video = card.querySelector(".card-video");


        if (!video) return;


        // Estado inicial

        video.pause();
        video.currentTime = 0;


        card.addEventListener("mouseenter", async () => {

            try {

                video.currentTime = 0;

                await video.play();

            } catch(error) {

                console.log("Video no pudo reproducirse:", error);

            }

        });



        card.addEventListener("mouseleave", () => {


            video.pause();

            video.currentTime = 0;


        });


    });


});