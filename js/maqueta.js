const viewer = document.getElementById("modelViewer");

/* ===========================
   VISTAS PREDEFINIDAS
=========================== */

document.getElementById("homeView").onclick = () => {

    viewer.cameraOrbit = "45deg 70deg 6m";
    viewer.fieldOfView = "30deg";
    viewer.jumpCameraToGoal();

};

document.getElementById("isoView").onclick = () => {

    viewer.cameraOrbit = "45deg 55deg 5m";
    viewer.fieldOfView = "28deg";
    viewer.jumpCameraToGoal();

};

document.getElementById("topView").onclick = () => {

    viewer.cameraOrbit = "0deg 5deg 8m";
    viewer.fieldOfView = "18deg";
    viewer.jumpCameraToGoal();

};

document.getElementById("resetView").onclick = () => {

    viewer.cameraOrbit = "45deg 70deg 6m";
    viewer.fieldOfView = "30deg";
    viewer.jumpCameraToGoal();

};

/* ===========================
   ROTACIÓN
=========================== */

const rotateButton = document.getElementById("rotateToggle");

rotateButton.onclick = () => {

    viewer.autoRotate = !viewer.autoRotate;

    rotateButton.classList.toggle("active");

};

/* ===========================
   PANTALLA COMPLETA
=========================== */

document.getElementById("fullscreen3D").onclick = () => {

    const container = document.querySelector(".viewer-3d");

    if (!document.fullscreenElement) {

        container.requestFullscreen();

    } else {

        document.exitFullscreen();

    }

};

/* ===========================
   EXPLODE VIEW (Placeholder)
=========================== */


/* ===========================
   DOBLE CLICK = CENTRAR
=========================== */

viewer.addEventListener("dblclick", () => {

    viewer.cameraTarget = "0m 0m 0m";
    viewer.jumpCameraToGoal();

});

/* ===========================
   CARGA COMPLETA
=========================== */

viewer.addEventListener("load", () => {

    console.log("Modelo cargado correctamente");

});
