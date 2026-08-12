document.addEventListener("DOMContentLoaded", () => {


    const viewerImage = document.getElementById("viewerImage");
    const viewerTitle = document.getElementById("viewerTitle");
    const viewerCounter = document.getElementById("viewerCounter");

    const prevButton = document.getElementById("prevImage");
    const nextButton = document.getElementById("nextImage");


    let currentIndex = 0;


    const gallery = ProjectData.gallery;



    function loadImage(index){


        if(index < 0){

            currentIndex = gallery.length - 1;

        }
        else if(index >= gallery.length){

            currentIndex = 0;

        }
        else{

            currentIndex = index;

        }



        const item = gallery[currentIndex];



        viewerImage.classList.remove("gallery-transition");


setTimeout(()=>{

    viewerImage.src = item.image;

    viewerImage.classList.add("gallery-transition");

},150);

        viewerImage.alt = item.title;

        viewerTitle.textContent = item.title;

        viewerCounter.textContent =

            `${currentIndex + 1} / ${gallery.length}`;


    }



    prevButton.addEventListener("click",()=>{

        loadImage(currentIndex - 1);

    });



    nextButton.addEventListener("click",()=>{

        loadImage(currentIndex + 1);

    });



    // navegación con teclado

    document.addEventListener("keydown",(e)=>{


        if(e.key === "ArrowLeft"){

            loadImage(currentIndex - 1);

        }


        if(e.key === "ArrowRight"){

            loadImage(currentIndex + 1);

        }


    });



    // carga inicial


    loadImage(0);
    const galleryMain = document.querySelector(".gallery-main");


galleryMain.addEventListener("click",()=>{

    galleryMain.classList.toggle("zoom-active");

});



});

const fullscreenButton =
document.getElementById("fullscreenGallery");


fullscreenButton.addEventListener("click",()=>{


    const viewer =
    document.querySelector(".gallery-main");


    if(viewer.requestFullscreen){

        viewer.requestFullscreen();

    }


});