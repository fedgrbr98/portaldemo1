document.addEventListener("DOMContentLoaded", () => {

    const bg = document.getElementById("animatedBackground");

    if(!bg) return;

    const noise = document.createElement("div");

    noise.className = "noise";

    bg.appendChild(noise);

});