const messages = [

    "Inicializando Experience Engine...",

    "Preparando proyecto...",

    "Cargando contenido inmersivo...",

    "Optimizando recorrido...",

    "Bienvenido."

];

let progress = 0;

const progressBar = document.getElementById("loaderProgress");
const progressText = document.getElementById("loaderPercent");
const message = document.getElementById("loadingMessage");

const interval = setInterval(() => {

    progress++;

    progressBar.style.width = progress + "%";

    progressText.textContent = progress + "%";

    if(progress < 25){

        message.textContent = messages[0];

    }

    else if(progress < 50){

        message.textContent = messages[1];

    }

    else if(progress < 75){

        message.textContent = messages[2];

    }

    else if(progress < 99){

        message.textContent = messages[3];

    }

    else{

        message.textContent = messages[4];

    }

    if(progress >= 100){

        clearInterval(interval);

        setTimeout(()=>{

            window.location.href="../hub/index.html";

        },600);

    }

},30);