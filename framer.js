const randomTankBtn = document.querySelector(".tank-randomize");
const randomFigureBtn = document.querySelector(".figure-randomize");

function updateIframe(url) {
    const iframe = document.getElementById("mainframe");
    iframe.src = url; // Setting src automatically reloads
}

window.addEventListener("load", e => {
    randomTankBtn.appendChild(document.createTextNode(` (${tankModels.length})`))
    randomFigureBtn.appendChild(document.createTextNode(` (${poseModels.length})`))
})

randomTankBtn.addEventListener("click", e => {
    updateIframe(tankModels[Math.floor(Math.random() * tankModels.length)]);
});

randomFigureBtn.addEventListener("click", e => {
    updateIframe(poseModels[Math.floor(Math.random() * poseModels.length)]);
});