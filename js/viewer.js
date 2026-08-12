 import { SCENES } from "./scenes.js";

// ========================================
// CONFIGURACIÓN
// ========================================

const EDIT_MODE = false;

let currentScene = "exterior_1";

const viewerElement = document.getElementById("viewer");

const viewer = new Marzipano.Viewer(viewerElement);

let currentSceneObject = null;
let currentView = null;
let previewHotspot = null;

// ========================================
// CARGAR ESCENA
// ========================================

function loadScene(sceneId) {

    currentScene = sceneId;

    const sceneData = SCENES[currentScene];

    console.clear();
    console.log("Escena:", sceneData.name);

    const source =
        Marzipano.ImageUrlSource.fromString(sceneData.image);

    const geometry =
        new Marzipano.EquirectGeometry([
            { width: 4000 }
        ]);

    const limiter =
        Marzipano.RectilinearView.limit.traditional(
            4096,
            100 * Math.PI / 180
        );

    currentView =
        new Marzipano.RectilinearView(
            null,
            limiter
        );

    currentSceneObject =
        viewer.createScene({

            source,

            geometry,

            view: currentView

        });

    previewHotspot = null;

    currentSceneObject.switchTo();

    createHotspots(currentSceneObject, sceneData);

}

// ========================================
// HOTSPOTS
// ========================================

function createHotspots(scene, sceneData) {

    sceneData.hotspots.forEach(hotspot => {

        const hotspotElement =
            document.createElement("div");

        hotspotElement.className =
            "portal-hotspot";

        hotspotElement.innerHTML =

            `<div class="portal-hotspot-core"></div>`;

        hotspotElement.addEventListener("click", () => {

            loadScene(hotspot.target);

        });

        scene.hotspotContainer().createHotspot(

            hotspotElement,

            {

                yaw: hotspot.yaw,

                pitch: hotspot.pitch

            }

        );

    });

}

// ========================================
// HOTSPOT TEMPORAL
// ========================================

function createPreviewHotspot(yaw, pitch) {

    const element = document.createElement("div");

    element.className = "portal-hotspot";

    element.innerHTML =

        `<div class="portal-hotspot-core"></div>`;

    previewHotspot =
        currentSceneObject.hotspotContainer().createHotspot(

            element,

            {

                yaw,

                pitch

            }

        );

}

// ========================================
// CAPTURE MODE
// ========================================

if (EDIT_MODE) {

    viewerElement.addEventListener("click", (event) => {

        if (!currentView) return;

        const rect =
            viewerElement.getBoundingClientRect();

        const coords =
            currentView.screenToCoordinates({

                x: event.clientX - rect.left,

                y: event.clientY - rect.top

            });

        if (!coords) return;

        console.log("--------------------------------");

        console.log(`{

    target: "",

    yaw: ${coords.yaw.toFixed(3)},

    pitch: ${coords.pitch.toFixed(3)}

},`);

        console.log("--------------------------------");

        createPreviewHotspot(

            coords.yaw,

            coords.pitch

        );

    });

}

// ========================================

loadScene(currentScene);
