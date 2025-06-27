const descreaseBt = document.getElementById("descreaseBt");
const resetBt = document.getElementById("resetBt");
const incresaseBt = document.getElementById("incresaseBt");
const countLabel = document.getElementById("countLabel");

let count = 0;

incresaseBt.onclick = function() {
    count++;
    countLabel.textContent = count;
}

descreaseBt.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetBt.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}